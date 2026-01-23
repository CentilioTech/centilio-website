'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SeobotHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    setHasMounted(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Trigger after 50px scroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Set active link based on current pathname
    setActiveLink(window.location.pathname)
  }, [])

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#181A1E] border-b border-[#2A3142] transition-all duration-300">
      <nav className={`container mx-auto px-4 sm:px-6 md:px-20 flex items-center justify-between transition-all duration-300 ${
        !hasMounted 
          ? 'py-3 sm:py-4 md:py-10' // SSR fallback - original padding
          : isScrolled 
          ? 'py-2 sm:py-3 md:py-4' // Reduced padding when scrolled
          : 'py-3 sm:py-4 md:py-10' // Original padding
      }`}>
        {/* Logo */}
        <Link href="/seo-bot" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/images/seobothomepage/first fold/header/logo_Vector.svg"
            alt="SEO Bot Logo"
            width={48}
            height={48}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <span className="text-white text-lg sm:text-xl font-semibold">SEO Bot</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/seo-bot/features"
            onClick={() => setActiveLink('/seo-bot/features')}
            className={`transition-colors text-sm lg:text-base ${
              activeLink === '/seo-bot/features'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Features
          </Link>
          <Link
            href="/seo-bot/integrations"
            onClick={() => setActiveLink('/seo-bot/integrations')}
            className={`transition-colors text-sm lg:text-base ${
              activeLink === '/seo-bot/integrations'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Integrations
          </Link>
          <Link
            href="/seo-bot"
            onClick={() => setActiveLink('/pricing')}
            className={`transition-colors text-sm lg:text-base ${
              activeLink === '/pricing'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/seo-bot/contact"
            onClick={() => setActiveLink('/seo-bot/contact')}
            className={`transition-colors text-sm lg:text-base ${
              activeLink === '/seo-bot/contact'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1 text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#181A1E] border-t border-[#2A3142]">
          <nav className="px-4 sm:px-6 py-4 space-y-3">
            <Link 
              href="/seo-bot/features" 
              className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/seo-bot/integrations" 
              className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link 
              href="/seo-bot" 
              className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/seo-bot/contact" 
              className="block py-2 px-3 text-white hover:text-gray-300 hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}