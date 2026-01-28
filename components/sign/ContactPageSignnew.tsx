'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'

const countryCodes = [
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+1', country: 'CA', flag: '🇨🇦' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+82', country: 'KR', flag: '🇰🇷' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+39', country: 'IT', flag: '🇮🇹' },
  { code: '+34', country: 'ES', flag: '🇪🇸' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+55', country: 'BR', flag: '🇧🇷' },
  { code: '+7', country: 'RU', flag: '🇷🇺' }
]

// Detect user's country based on timezone
const detectUserCountry = () => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    // Timezone to country mapping
    const timezoneMap: Record<string, string> = {
      // India
      'Asia/Kolkata': 'IN',
      'Asia/Calcutta': 'IN',
      // United States
      'America/New_York': 'US',
      'America/Los_Angeles': 'US',
      'America/Chicago': 'US',
      'America/Denver': 'US',
      'America/Phoenix': 'US',
      'America/Anchorage': 'US',
      'Pacific/Honolulu': 'US',
      // Canada
      'America/Toronto': 'CA',
      'America/Vancouver': 'CA',
      'America/Montreal': 'CA',
      'America/Edmonton': 'CA',
      // United Kingdom
      'Europe/London': 'UK',
      // China
      'Asia/Shanghai': 'CN',
      'Asia/Hong_Kong': 'CN',
      'Asia/Chongqing': 'CN',
      // Japan
      'Asia/Tokyo': 'JP',
      // South Korea
      'Asia/Seoul': 'KR',
      // Germany
      'Europe/Berlin': 'DE',
      // France
      'Europe/Paris': 'FR',
      // Italy
      'Europe/Rome': 'IT',
      // Spain
      'Europe/Madrid': 'ES',
      // Australia
      'Australia/Sydney': 'AU',
      'Australia/Melbourne': 'AU',
      'Australia/Brisbane': 'AU',
      'Australia/Perth': 'AU',
      // Brazil
      'America/Sao_Paulo': 'BR',
      // Russia
      'Europe/Moscow': 'RU',
      'Asia/Vladivostok': 'RU',
    }

    const countryCode = timezoneMap[timezone]
    if (countryCode) {
      const country = countryCodes.find(c => c.country === countryCode)
      if (country) {
        return { code: country.code, flag: country.flag }
      }
    }
  } catch (error) {
    console.log('Could not detect country:', error)
  }
  return null
}

export default function ContactPageSign() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    mobile: '',
    description: ''
  })
  
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1')
  const [selectedCountryFlag, setSelectedCountryFlag] = useState('🇺🇸')
  const [detectedCountry, setDetectedCountry] = useState<{code: string, flag: string} | null>(null)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    description: ''
  })
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Auto-detect user's country on component mount
  useEffect(() => {
    const detected = detectUserCountry()
    if (detected) {
      setDetectedCountry(detected)
      setSelectedCountryCode(detected.code)
      setSelectedCountryFlag(detected.flag)
    } else {
      // Fallback to US
      setDetectedCountry({ code: '+1', flag: '🇺🇸' })
    }
  }, [])

  // Validation functions
  const validateName = (name: string, fieldName: string, isRequired: boolean = true, minLength: number = 2): string => {
    if (!name.trim()) {
      return isRequired ? `${fieldName} is required` : ''
    }
    if (name.trim().length < minLength) {
      return `${fieldName} must be at least ${minLength} character${minLength > 1 ? 's' : ''}`
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`
    }
    return ''
  }

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  const validateMobile = (mobile: string): string => {
    if (!mobile.trim()) {
      return '' // Mobile is optional
    }
    if (!/^\d+$/.test(mobile)) {
      return 'Mobile number can only contain digits'
    }
    if (mobile.length < 7 || mobile.length > 15) {
      return 'Mobile number must be between 7 and 15 digits'
    }
    return ''
  }

  const validateDescription = (description: string): string => {
    if (!description.trim()) {
      return 'Description is required'
    }
    if (description.trim().length < 10) {
      return 'Description must be at least 10 characters'
    }
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prevent multiple submissions
    if (isSubmitting) return

    // Validate all fields
    const firstNameError = validateName(formData.firstName, 'First name', true, 2)
    const lastNameError = validateName(formData.lastName, 'Last name', false, 1)
    const emailError = validateEmail(formData.email)
    const mobileError = validateMobile(formData.mobile)
    const descriptionError = validateDescription(formData.description)

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      mobile: mobileError,
      description: descriptionError
    })

    // Check if there are any errors
    if (firstNameError || lastNameError || emailError || mobileError || descriptionError) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors in the form before submitting.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Prepare data in the format expected by the API
      const apiData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        mobile: selectedCountryCode + formData.mobile,
        description: formData.description,
        product_id: 1 // Fixed value for Centilio Sign
      }

      // Make API call
      const response = await fetch('https://account.centilio.com/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      })

      if (!response.ok) {
        // Handle HTTP errors
        if (response.status >= 500) {
          throw new Error('Server error occurred. Please try again later.')
        } else if (response.status >= 400) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.message || 'Invalid submission. Please check your information.')
        }
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.'
      })

      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        mobile: '',
        description: ''
      })
      // Clear errors
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        description: ''
      })
      // Reset to detected country instead of hardcoded US
      if (detectedCountry) {
        setSelectedCountryCode(detectedCountry.code)
        setSelectedCountryFlag(detectedCountry.flag)
      } else {
        setSelectedCountryCode('+1')
        setSelectedCountryFlag('🇺🇸')
      }

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)

    } catch (error) {
      // Handle network errors or other exceptions
      const errorMessage = error instanceof Error
        ? error.message
        : 'Unable to connect. Please check your internet connection.'

      setSubmitStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    // Validate on change
    let error = ''
    if (name === 'firstName') {
      error = validateName(value, 'First name', true, 2)
    } else if (name === 'lastName') {
      error = validateName(value, 'Last name', false, 1)
    } else if (name === 'email') {
      error = validateEmail(value)
    } else if (name === 'mobile') {
      error = validateMobile(value)
    } else if (name === 'description') {
      error = validateDescription(value)
    }

    setErrors({
      ...errors,
      [name]: error
    })
  }

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <WhiteHeader />
      <SignHeader />

      {/* Divider between Header and First Fold */}
      <div className="w-full h-[1px] bg-white opacity-20" />

      {/* First Fold - Hero Section with Form */}
      <section className="relative min-h-[500px] xs:min-h-[500px] sm:min-h-[600px] md:min-h-[900px] lg:min-h-[1200px] flex flex-col items-center pt-12 pb-4 xs:pb-4 sm:pb-6 md:pb-12 lg:pb-16 px-4">
        {/* Red Blur Background Effect */}
        <div
          className="absolute top-0 left-0 w-full h-[270px]"
          style={{
            background: '#EA4435',
            filter: 'blur(200px)',
            zIndex: 0
          }}
        />

        <div className="relative z-10 flex flex-col items-center w-full max-w-[501px] mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-4 xs:mb-4 sm:mb-5 md:mb-8 lg:mb-12">
            <h1 className="text-white text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[48px] mb-2 xs:mb-2 sm:mb-3 md:mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Contact Sales
            </h1>
            <p className="text-white text-sm xs:text-sm sm:text-base md:text-lg font-normal leading-6 px-4" style={{ fontFamily: 'var(--font-inter)' }}>
              We&apos;d love to talk about how we can help you.
            </p>
          </div>

          {/* Contact Form */}
          <div
            className="w-full max-w-[501px] bg-[#181A1E] rounded-[10px] xs:rounded-[10px] sm:rounded-[12px] md:rounded-[20px] p-3 xs:p-3 sm:p-4 md:p-6 lg:p-8 mx-4"
            style={{
              border: '1px solid #5A5858'
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 xs:gap-3 sm:gap-4">
              {/* First Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2 xs:mb-2 sm:mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  First name <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={`w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4] ${errors.firstName ? 'border-red-500' : 'border-[#5A5858]'}`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2 xs:mb-2 sm:mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className={`w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4] ${errors.lastName ? 'border-red-500' : 'border-[#5A5858]'}`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2 xs:mb-2 sm:mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Company name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white text-sm font-medium mb-2 xs:mb-2 sm:mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Email Address <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4] ${errors.email ? 'border-red-500' : 'border-[#5A5858]'}`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-white text-sm font-medium mb-2 xs:mb-2 sm:mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Mobile
                </label>
                <div className="flex gap-2 xs:gap-2 sm:gap-3 md:gap-4">
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-16 xs:w-16 sm:w-20 md:w-24 h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] flex items-center justify-center relative hover:border-[#6B5858] transition-colors"
                    >
                      <span className="text-white text-sm font-medium">{selectedCountryFlag} {selectedCountryCode}</span>
                      <Image
                        src="/images/contactpagesign/dropdown (Stroke).svg"
                        alt="Dropdown"
                        width={6}
                        height={6}
                        className={`absolute bottom-1 right-1 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {isCountryDropdownOpen && (
                      <div className="absolute top-full left-0 xs:right-0 xs:left-auto sm:left-0 sm:right-auto mt-1 w-32 xs:w-32 sm:w-36 md:w-44 lg:w-48 bg-black border border-[#5A5858] rounded-[5px] shadow-xl z-20 max-h-48 overflow-y-auto">
                        {countryCodes.map((item, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedCountryCode(item.code)
                              setSelectedCountryFlag(item.flag)
                              setIsCountryDropdownOpen(false)
                            }}
                            className="w-full px-2 xs:px-2 sm:px-3 py-2 text-left hover:bg-[#2A2A2A] transition-colors flex items-center gap-1 xs:gap-1 sm:gap-2 text-white text-xs xs:text-xs sm:text-sm"
                          >
                            <span className="text-sm xs:text-sm sm:text-base">{item.flag}</span>
                            <span className="truncate">{item.country}</span>
                            <span className="text-gray-400 text-xs xs:text-xs sm:text-sm">{item.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className={`flex-1 h-10 xs:h-10 sm:h-11 md:h-12 bg-black border rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4] ${errors.mobile ? 'border-red-500' : 'border-[#5A5858]'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-white text-sm font-medium mb-2 xs:mb-2 sm:mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Description <span className="text-[#FF0000]">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  className={`w-full h-20 xs:h-20 sm:h-24 md:h-[97px] bg-black border rounded-[5px] px-3 py-3 text-white text-base placeholder:text-[#EDF0F4] resize-none ${errors.description ? 'border-red-500' : 'border-[#5A5858]'}`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4 xs:mt-4 sm:mt-5 md:mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-[200px] xs:max-w-[200px] sm:max-w-[220px] md:max-w-[242px] h-[42px] xs:h-[42px] sm:h-[45px] md:h-[49px] bg-white rounded-[50px] text-[#181A1E] text-base font-semibold relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #4285F4 0%, #FBBC05 32.7%, #EA4435 66.8%, #34A853 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {/* Status Message */}

            </form>
          </div>
        </div>
      </section>

      <SignFooter />
    </div>
  )
}
