'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'

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
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <SignHeader />

      {/* Divider between Header and First Fold */}
      <div className="w-full h-[1px] bg-white opacity-20" />

      {/* First Fold - Hero Section with Form */}
      <section className="relative min-h-[500px] xs:min-h-[500px] sm:min-h-[600px] md:min-h-[900px] lg:min-h-[1200px] flex flex-col items-center pt-16 xs:pt-16 sm:pt-20 md:pt-[120px] lg:pt-[140px] pb-4 xs:pb-4 sm:pb-6 md:pb-12 lg:pb-16 px-4">
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
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  required
                />
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
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
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
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  required
                />
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
                      className="w-12 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] flex items-center justify-center relative hover:border-[#6B5858] transition-colors"
                    >
                      <span className="text-white text-sm font-medium">{selectedCountryCode}</span>
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
                    className="flex-1 h-10 xs:h-10 sm:h-11 md:h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>
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
                  className="w-full h-20 xs:h-20 sm:h-24 md:h-[97px] bg-black border border-[#5A5858] rounded-[5px] px-3 py-3 text-white text-base placeholder:text-[#EDF0F4] resize-none"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4 xs:mt-4 sm:mt-5 md:mt-6">
                <button
                  type="submit"
                  className="w-full max-w-[200px] xs:max-w-[200px] sm:max-w-[220px] md:max-w-[242px] h-[42px] xs:h-[42px] sm:h-[45px] md:h-[49px] bg-white rounded-[50px] text-[#181A1E] text-base font-semibold relative overflow-hidden group"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #4285F4 0%, #FBBC05 32.7%, #EA4435 66.8%, #34A853 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SignFooter />
    </div>
  )
}
