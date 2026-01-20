'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SeobotHeader from '@/components/layout/SeobotHeader'
import SeobotFooter from '@/components/layout/SeobotFooter'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <SeobotHeader />

      {/* Main Content */}
      <section className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
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
                      className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                      required
                    />
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
                    className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                    required
                  />
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
                        className="w-12 xs:w-14 sm:w-16 h-10 xs:h-11 sm:h-12 bg-[#000000] border border-[#5A5858] rounded-lg flex items-center justify-center relative hover:border-[#4285F4] transition-colors"
                      >
                        <span className="text-white text-sm font-medium">{selectedCountryCode}</span>
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
                      className="flex-1 bg-[#000000] border border-[#5A5858] rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                    />
                  </div>
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
                    className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4] resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4 sm:mt-6">
                  <button
                    type="submit"
                    className="w-full sm:w-48 bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors relative"
                    style={{
                      background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #34A853, #EA4435, #FBBC05, #4285F4) border-box',
                      border: '2px solid transparent'
                    }}
                  >
                    Submit
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
