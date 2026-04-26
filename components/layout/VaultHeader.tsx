'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Lock } from 'lucide-react'

// Vault product header — modeled after SignHeader/SeobotHeader but with the
// Vault palette (deep navy + indigo/violet accent #6366F1). Used by every
// /vault/* route. Standalone from the global Header.tsx so the Vault product
// pages stay visually cohesive even when nav structure on the marketing site
// changes.

const NAV = [
  // /vault/features, /vault/pricing, /vault/security live in the codebase as
  // skeleton routes-to-be — including them here so the nav is set up for when
  // those pages ship. Until then they 404, same as the analogous pre-shipped
  // Sign/SEO Bot subroutes did before their own pages landed.
  { href: '/vault/features',  label: 'Features' },
  { href: '/vault/security',  label: 'Security' },
  { href: '/vault/pricing',   label: 'Pricing' },
  { href: '/contactpage',     label: 'Contact' },
]

const ACCENT = 'text-[#6366F1]'

export default function VaultHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHasMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // The header shrinks on scroll — same UX behaviour as SignHeader/SeobotHeader.
  // hasMounted gates the post-mount class so the SSR HTML doesn't disagree
  // with the first client render (would cause a hydration mismatch).
  const padClasses = !hasMounted
    ? 'py-3 sm:py-4 md:py-10'
    : isScrolled
      ? 'py-2 sm:py-3 md:py-4'
      : 'py-3 sm:py-4 md:py-10'

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#0E0F18]/95 backdrop-blur-sm border-b border-white/5">
      <div className={`container mx-auto px-2 sm:px-4 md:px-8 lg:px-[120px] flex items-center justify-between transition-all duration-300 ${padClasses}`}>
        {/* Brand — links to product home, not site home */}
        <Link href="/vault" className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 hover:opacity-80 transition-opacity">
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4338CA] shadow-lg shadow-[#6366F1]/30">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">Vault</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
                  active ? ACCENT : 'text-white hover:text-[#818CF8]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <Link
            href="https://account.centilio.com/#/login"
            className="text-sm xl:text-base text-gray-300 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/contactpage"
            className="inline-flex items-center justify-center px-5 xl:px-6 py-2 rounded-full text-sm xl:text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4338CA] hover:from-[#7C7CFA] hover:to-[#5046E5] transition-colors shadow-md shadow-[#6366F1]/40"
          >
            Get a demo
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#0E0F18]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {NAV.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    active ? ACCENT : 'text-white hover:text-[#818CF8]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="border-t border-white/5 my-2" />
            <Link
              href="https://account.centilio.com/#/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-gray-300 hover:text-white transition-colors py-2"
            >
              Sign In
            </Link>
            <Link
              href="/contactpage"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4338CA] hover:from-[#7C7CFA] hover:to-[#5046E5] transition-colors shadow-md shadow-[#6366F1]/40 mt-1"
            >
              Get a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
