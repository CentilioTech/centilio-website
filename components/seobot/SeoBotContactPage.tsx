'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SeobotHeader from '@/components/layout/SeobotHeader'
import SeobotFooter from '@/components/layout/SeobotFooter'

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

export default function SeoBotContactPage() {
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
        product_id: 2 // Fixed value for SEO Bot
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

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <WhiteHeader />
      <SeobotHeader />

      {/* Main Content */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        {/* Background blur effects */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #407BFF 0%, #4285F4 50%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #ED4C78 0%, #407BFF 50%, transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 sm:pt-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left Side - Text */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Contact Sales
              </h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                We&apos;d love to talk about how we can help you.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#2A2D35] rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#5A5858]">
              <form onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={`w-full bg-[#000000] border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-[#5A5858] focus:border-[#4285F4]'}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className={`w-full bg-[#000000] border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-[#5A5858] focus:border-[#4285F4]'}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-white text-sm mb-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                  />
                </div>

                {/* Email Address */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-white text-sm mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full bg-[#000000] border rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#5A5858] focus:border-[#4285F4]'}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Mobile */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-white text-sm mb-2">
                    Mobile
                  </label>
                  <div className="flex gap-2 xs:gap-3">
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-16 xs:w-20 sm:w-24 h-10 xs:h-11 sm:h-12 bg-[#000000] border border-[#5A5858] rounded-lg flex items-center justify-center relative hover:border-[#4285F4] transition-colors"
                      >
                        <span className="text-white text-sm font-medium">{selectedCountryFlag} {selectedCountryCode}</span>
                        <Image
                          src="/images/seobotcontactpage/dropdown (Stroke).svg"
                          alt="Dropdown"
                          width={6}
                          height={6}
                          className={`absolute bottom-1 right-1 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 xs:right-0 xs:left-auto sm:left-0 sm:right-auto mt-1 w-40 xs:w-44 sm:w-48 bg-[#000000] border border-[#5A5858] rounded-lg shadow-xl z-20 max-h-48 overflow-y-auto">
                          {countryCodes.map((item, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setSelectedCountryCode(item.code)
                                setSelectedCountryFlag(item.flag)
                                setIsCountryDropdownOpen(false)
                              }}
                              className="w-full px-2 xs:px-3 py-2 text-left hover:bg-[#2A2A2A] transition-colors flex items-center gap-1 xs:gap-2 text-white text-xs xs:text-sm"
                            >
                              <span className="text-sm xs:text-base">{item.flag}</span>
                              <span className="truncate">{item.country}</span>
                              <span className="text-gray-400 text-xs xs:text-sm">{item.code}</span>
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
                      className={`flex-1 bg-[#000000] border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none ${errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-[#5A5858] focus:border-[#4285F4]'}`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-white text-sm mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={4}
                    className={`w-full bg-[#000000] border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none resize-none ${errors.description ? 'border-red-500 focus:border-red-500' : 'border-[#5A5858] focus:border-[#4285F4]'}`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4 sm:mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-48 bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors relative disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #34A853, #EA4435, #FBBC05, #4285F4) border-box',
                      border: '2px solid transparent'
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>


              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SeobotFooter />
    </div>
  )
}
