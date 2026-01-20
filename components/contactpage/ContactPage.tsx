'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    mobile: '',
    description: ''
  })

  const [selectedCountryCode, setSelectedCountryCode] = useState('+91')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }


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

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* <header className="w-full bg-[#0E0F18] border-b border-[#2A2C30] py-4 lg:py-5">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 lg:gap-3">
            <Image
              src="/images/contactpage/logo_white Vector.svg"
              alt="Centilio Logo"
              width={42}
              height={52}
              className="h-8 lg:h-10 w-auto"
            />
            <span className="text-lg lg:text-xl xl:text-2xl font-semibold text-white">
              Centilio
            </span>
          </Link>

          Desktop Navigation
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="#" className="text-sm xl:text-base text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="#" className="text-sm xl:text-base text-gray-300 hover:text-white transition-colors">
              Industries
            </Link>
            <Link href="#" className="text-sm xl:text-base text-gray-300 hover:text-white transition-colors">
              Customers
            </Link>
            <Link href="#" className="text-sm xl:text-base text-gray-300 hover:text-white transition-colors">
              Partners
            </Link>
            <Link href="#" className="text-sm xl:text-base text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          Right actions
          <div className="flex items-center gap-3 lg:gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link
              href="/login"
              className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </header> */}
      <Header/>

      {/* Hero Section with Form */}
      <section className="relative min-h-screen bg-[#1a1d2e] py-8 xs:py-10 sm:py-12 md:py-16 lg:py-24">
        {/* Decorative icons - absolutely positioned */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          {/* Top left area */}
          <Image
            src="/images/contactpage/HR Agent logo - white.png"
            alt=""
            width={70}
            height={50}
            className="absolute"
            style={{ top: '12%', left: '10%' }}
          />
          <Image
            src="/images/contactpage/Vector1.svg"
            alt=""
            width={45}
            height={45}
            className="absolute"
            style={{ top: '20%', left: '18%' }}
          />

          {/* Middle left area */}
          <Image
            src="/images/contactpage/email logo white.png"
            alt=""
            width={70}
            height={50}
            className="absolute"
            style={{ top: '40%', left: '8%' }}
          />
          <Image
            src="/images/contactpage/logo_white Vector.svg"
            alt=""
            width={45}
            height={45}
            className="absolute"
            style={{ top: '50%', left: '15%' }}
          />

          {/* Top right area */}
          <Image
            src="/images/contactpage/Vector1.svg"
            alt=""
            width={45}
            height={48}
            className="absolute"
            style={{ top: '15%', right: '15%' }}
          />
          <Image
            src="/images/contactpage/email logo white.png"
            alt=""
            width={70}
            height={50}
            className="absolute"
            style={{ top: '22%', right: '22%' }}
          />

          {/* Middle right area */}
          <Image
            src="/images/contactpage/HR Agent logo - white.png"
            alt=""
            width={70}
            height={52}
            className="absolute"
            style={{ top: '42%', right: '12%' }}
          />
          <Image
            src="/images/contactpage/logo_white Vector.svg"
            alt=""
            width={48}
            height={48}
            className="absolute"
            style={{ top: '52%', right: '20%' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Hero Text */}
          <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-bold text-white mb-4 leading-tight lg:leading-[48px]">
            Contact Sales
          </h1>
          <p className="text-base sm:text-lg text-white mb-6">
            We&apos;d love to talk about how we can help you.
          </p>

          {/* Go Home Page Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2 xs:py-2 sm:py-2.5 border-2 border-[#4285F4] text-[#4285F4] rounded-md text-sm sm:text-base font-medium hover:bg-[#4285F4] hover:text-white transition-colors mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Go To Home Page
          </Link>

          {/* Form Card */}
          <div className=" max-w-[501px] sm:max-w-[550px] md:max-w-[592px]  md:mx-auto bg-[#181A1E] rounded-[10px] xs:rounded-[10px] sm:rounded-[12px] md:rounded-[20px] p-3 xs:p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-3 sm:space-y-4 md:space-y-6">
              {/* First name */}
              <div className="text-left">
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                  First name <span className="text-[#EA4335]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-2.5 md:py-3 bg-[#0E0F18] border-2 border-[#5B5858] rounded-lg text-xs sm:text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              {/* Last name */}
              <div className="text-left">
                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-2.5 md:py-3 bg-[#0E0F18] border-2 border-[#5B5858] rounded-lg text-xs sm:text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                />
              </div>

              {/* Company name */}
              <div className="text-left">
                <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
                  Company name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-2.5 md:py-3 bg-[#0E0F18] border-2 border-[#5B5858] rounded-lg text-xs sm:text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Email Address */}
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address <span className="text-[#EA4335]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full h-10 xs:h-10 sm:h-11 md:h-12 px-3 xs:px-3 sm:px-4 py-2 xs:py-2 sm:py-2.5 md:py-3 bg-[#0E0F18] border-2 border-[#5B5858] rounded-lg text-xs sm:text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="text-left">
                <label htmlFor="mobile" className="block text-sm font-medium text-white mb-2">
                  Mobile
                </label>
                <div className="flex gap-2 xs:gap-2 sm:gap-3 md:gap-4">
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-12 xs:w-12 sm:w-14 md:w-16 h-10 xs:h-10 sm:h-11 md:h-12 bg-[#0E0F18] border border-[#5A5858] rounded-[5px] flex items-center justify-center relative hover:border-[#6B5858] transition-colors"
                    >
                      <span className="text-white text-xs sm:text-sm font-medium">{selectedCountryCode}</span>
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
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    className="flex-1 h-10 xs:h-10 sm:h-11 md:h-12 bg-[#0E0F18] px-3 xs:px-3 sm:px-4 border-2 border-[#5B5858] rounded-lg text-xs sm:text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="text-left">
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                  Description <span className="text-[#EA4335]">*</span>
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full h-20 xs:h-20 sm:h-24 md:h-[97px] px-3 xs:px-3 sm:px-4 py-3 bg-[#0E0F18] border-2 border-[#5B5858] rounded-lg text-xs sm:text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all resize-none"
                  placeholder="Enter your message..."
                  required
                />
              </div>

              {/* Submit Button with Gradient Border */}
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

      {/* Footer */}
      <Footer/>
    </div>
  )
}
