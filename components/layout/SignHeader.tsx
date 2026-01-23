'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SignHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setHasMounted(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Trigger after 50px scroll
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Set active link based on current pathname
    setActiveLink(pathname)
    console.log(pathname)
  }, [pathname])

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#0E0F13]/95 backdrop-blur-sm border-b border-white/5">
      <div className={`container mx-auto px-2 sm:px-4 md:px-8 lg:px-[120px] flex items-center justify-between transition-all duration-300 ${
        !hasMounted 
          ? 'py-3 sm:py-4 md:py-10' // SSR fallback - original padding
          : isScrolled 
          ? 'py-2 sm:py-3 md:py-4' // Reduced padding when scrolled
          : 'py-3 sm:py-4 md:py-10' // Original padding
      }`}>
        <a href="/sign" className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/images/Integration page - sign/Layer 1.svg"
            alt="Sign Logo"
            width={40}
            height={40}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">Sign</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
          <a
            href="/sign/features"
            onClick={() => setActiveLink('/sign/features')}
            className={`text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
              activeLink === '/sign/features'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Features
          </a>
          <a
            href="/sign/integrations"
            onClick={() => setActiveLink('/sign/integrations')}
            className={`text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
              activeLink === '/sign/integrations'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Integrations
          </a>
          <a
            href="/sign/pricing"
            onClick={() => setActiveLink('/sign/pricing')}
            className={`text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
              activeLink === '/sign/pricing'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Pricing
          </a>
          <a
            href="/sign/contact"
            onClick={() => setActiveLink('/sign/contact')}
            className={`text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
              activeLink === '/sign/contact'
                ? 'text-blue-400'
                : 'text-white hover:text-blue-400'
            }`}
          >
            Contact Us
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-1 sm:p-1.5 text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#0E0F13]/98 border-t border-white/5 backdrop-blur-sm">
          <nav className="px-2 sm:px-4 py-4 space-y-3">
            <a 
              href="/sign/features" 
              className={`block py-2 px-3 text-sm sm:text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-200 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMobileMenuOpen ? '100ms' : '0ms'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/sign/integrations" 
              className={`block py-2 px-3 text-sm sm:text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-200 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMobileMenuOpen ? '150ms' : '0ms'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </a>
            <a 
              href="/sign/pricing" 
              className={`block py-2 px-3 text-sm sm:text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-200 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMobileMenuOpen ? '200ms' : '0ms'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="/sign/contact" 
              className={`block py-2 px-3 text-sm sm:text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 rounded-md transition-all duration-200 transform ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMobileMenuOpen ? '250ms' : '0ms'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}