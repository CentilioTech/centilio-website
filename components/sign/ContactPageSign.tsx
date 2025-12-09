'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactPageSign() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    mobile: '',
    description: ''
  })

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
      {/* Header */}
      <header className="h-[118px] bg-black flex items-center justify-between px-16 relative z-50">
        <div className="flex items-center gap-3">
          <div className="w-[43px] h-[51px] relative">
            <Image
              src="/images/contactpagesign/Layer 1.svg"
              alt="Centilio Logo"
              width={43}
              height={51}
            />
          </div>
          <span className="text-white text-2xl font-normal tracking-[-0.5px]" style={{ fontFamily: 'var(--font-inter)' }}>
            Sign
          </span>
        </div>
        <nav className="flex items-center gap-10">
          <a href="/featurepage-sign" className="text-white text-[14.4px] font-normal hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
            Features
          </a>
          <a href="/integrations" className="text-white text-[14.4px] font-normal hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
            Integrations
          </a>
          <a href="/pricing-sign" className="text-white text-[14.4px] font-normal hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
            Pricing
          </a>
          <a href="/contactpagesign" className="text-white text-[14.4px] font-normal hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
            Contact Us
          </a>
        </nav>
      </header>

      {/* Divider between Header and First Fold */}
      <div className="w-full h-[1px] bg-white opacity-20" />

      {/* First Fold - Hero Section with Form */}
      <section className="relative min-h-[1058px] flex flex-col items-center pt-20 pb-16">
        {/* Red Blur Background Effect */}
        <div
          className="absolute top-0 left-0 w-full h-[270px]"
          style={{
            background: '#EA4435',
            filter: 'blur(200px)',
            zIndex: 0
          }}
        />

        <div className="relative z-10 flex flex-col items-center max-w-[501px] mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-white text-[42px] font-bold leading-[48px] mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Contact Sales
            </h1>
            <p className="text-white text-lg font-normal leading-6" style={{ fontFamily: 'var(--font-inter)' }}>
              We&apos;d love to talk about how we can help you.
            </p>
          </div>

          {/* Contact Form */}
          <div
            className="w-[501px] bg-[#181A1E] rounded-[20px] p-8"
            style={{
              border: '1px solid #5A5858'
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* First Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  First name <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-[435px] h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-[435px] h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Company name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-[435px] h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white text-sm font-medium mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Email Address <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-[435px] h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-white text-sm font-medium mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Mobile
                </label>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-black border border-[#5A5858] rounded-[5px] flex items-center justify-center relative">
                    <Image
                      src="/images/contactpagesign/mobile_Vector.svg"
                      alt="Country"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/images/contactpagesign/dropdown (Stroke).svg"
                      alt="Dropdown"
                      width={6}
                      height={6}
                      className="absolute bottom-1 right-1"
                    />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="flex-1 h-12 bg-black border border-[#5A5858] rounded-[5px] px-3 text-white text-base placeholder:text-[#EDF0F4]"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white text-sm font-medium mb-2.5" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.2px' }}>
                  Description <span className="text-[#FF0000]">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  className="w-[435px] h-[97px] bg-black border border-[#5A5858] rounded-[5px] px-3 py-3 text-white text-base placeholder:text-[#EDF0F4] resize-none"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-[242px] h-[49px] bg-white rounded-[50px] text-[#181A1E] text-base font-semibold relative overflow-hidden group"
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
      <footer className="bg-[#181A1E] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-16">
          {/* Footer Content */}
          <div className="grid grid-cols-3 gap-32 mb-12">
            {/* Logo Column */}
            <div>
              <div className="w-[62px] h-[77px] relative">
                <Image
                  src="/images/contactpagesign/Vector1.svg"
                  alt="Centilio"
                  width={62}
                  height={77}
                />
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/sign" className="text-white text-base font-semibold leading-6 hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Sign
                  </a>
                </li>
                <li>
                  <a href="/seo-bot" className="text-white text-base font-semibold leading-6 hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                    SEO Bot
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/terms" className="text-white text-base font-semibold leading-6 hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-white text-base font-semibold leading-6 hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-white text-base font-semibold leading-6 hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="/gdpr" className="text-white text-base font-semibold leading-6 hover:opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                    GDPR Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider - Full width extending to both ends */}
        <div className="w-full h-[1px] bg-white opacity-20 mb-8" />

        <div className="max-w-7xl mx-auto px-16">
          {/* Social Media Icons - Moved to right corner */}
          <div className="flex justify-end gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] hover:opacity-80">
              <Image
                src="/images/contactpagesign/footer/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] hover:opacity-80">
              <Image
                src="/images/contactpagesign/footer/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] hover:opacity-80">
              <Image
                src="/images/contactpagesign/footer/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] hover:opacity-80">
              <Image
                src="/images/contactpagesign/footer/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] hover:opacity-80">
              <Image
                src="/images/contactpagesign/footer/twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
