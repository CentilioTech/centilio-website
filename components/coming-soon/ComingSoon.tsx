import Link from 'next/link'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

// Reusable "coming soon" component used by skeleton routes that the live nav
// promises but that don't yet have real content (Phase 2 audit, Apr 2026).
// Shipping this stub instead of a 404 keeps the navigation honest while the
// real pages are being written. Replace `<ComingSoon ... />` with the real
// component when ready — no other changes required.

export interface ComingSoonProps {
  /** Page title — also used in the heading. */
  title: string
  /** One-line description shown under the heading. */
  description: string
  /** Optional secondary line shown smaller below the description. */
  subtext?: string
}

export default function ComingSoon({ title, description, subtext }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-[#0E0F18] flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-[#4285F4] mb-4">
            Coming soon
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            {description}
          </p>
          {subtext && (
            <p className="text-sm text-gray-400 mb-10">
              {subtext}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contactpage"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white border-2 border-[#4285F4] hover:bg-[#4285F4] transition-colors"
            >
              Talk to a growth expert
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-gray-300 border-2 border-[#5B5858] hover:border-white hover:text-white transition-colors"
            >
              Back to home
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-12">
            Or email us directly at{' '}
            <a href="mailto:team@centilio.com" className="text-[#4285F4] hover:underline">
              team@centilio.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
