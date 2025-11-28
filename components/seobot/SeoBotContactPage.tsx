'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeoBotContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    mobile: '',
    description: ''
  })

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
      {/* Header */}
      <header className="bg-[#181A1E] border-b border-[#2A3142]">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/seobotcontactpage/header/logo_Vector.svg"
              alt="SEO Bot Logo"
              width={48}
              height={48}
            />
            <span className="text-white text-xl font-semibold">SEO Bot</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/features" className="text-white hover:text-gray-300 transition-colors">Features</Link>
            <Link href="/integrations" className="text-white hover:text-gray-300 transition-colors">Integrations</Link>
            <Link href="/pricing" className="text-white hover:text-gray-300 transition-colors">Pricing</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <section className="py-20 relative overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text */}
            <div className="pt-8">
              <h1 className="text-5xl font-bold text-white mb-6">
                Contact Sales
              </h1>
              <p className="text-gray-300 text-lg">
                We'd love to talk about how we can help you.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#2A2D35] rounded-2xl p-8 border border-[#5A5858]">
              <form onSubmit={handleSubmit}>
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                      className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
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
                      className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                      required
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="mb-6">
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
                <div className="mb-6">
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
                <div className="mb-6">
                  <label className="block text-white text-sm mb-2">
                    Mobile
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Image
                        src="/images/contactpagesign/mobile_Vector.svg"
                        alt="Mobile"
                        width={16}
                        height={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      />
                      <Image
                        src="/images/seobotcontactpage/dropdown (Stroke).svg"
                        alt="Dropdown"
                        width={12}
                        height={12}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                      />
                      <select className="bg-[#000000] border border-[#5A5858] rounded-lg px-10 py-3 text-white focus:outline-none focus:border-[#4285F4] appearance-none">
                        <option></option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="flex-1 bg-[#000000] border border-[#5A5858] rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-white text-sm mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={4}
                    className="w-full bg-[#000000] border border-[#5A5858] rounded-lg px-4 py-3 text-white placeholder-[#ECF0F4] focus:outline-none focus:border-[#4285F4] resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-48 bg-white text-black font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors relative"
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
      <footer className="bg-[#181A1E] border-t border-[#2A3142] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div>
              <Image
                src="/images/seobotcontactpage/footer/logo_white Vector.svg"
                alt="Centilio Logo"
                width={80}
                height={80}
                className="opacity-90"
              />
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/sign" className="text-gray-400 hover:text-white transition-colors">
                    Sign
                  </Link>
                </li>
                <li>
                  <Link href="/seo-bot" className="text-gray-400 hover:text-white transition-colors">
                    SEO Bot
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                    GDPR Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-end pt-8 border-t border-[#2A3142] gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotcontactpage/footer/social media icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotcontactpage/footer/social media icons/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotcontactpage/footer/social media icons/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotcontactpage/footer/social media icons/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/seobotcontactpage/footer/social media icons/twitter.svg"
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
