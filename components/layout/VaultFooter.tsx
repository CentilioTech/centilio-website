import Link from 'next/link'
import { Lock } from 'lucide-react'

// Vault product footer — same shape as SignFooter / SeobotFooter, just
// retitled and re-coloured for the Vault product palette. Cross-links to
// the other Centilio products under "Product" so a visitor can discover the
// rest of the suite without going back to the marketing-site home page.

export default function VaultFooter() {
  return (
    <footer className="bg-[#181A1E]">
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-12 lg:gap-[160px] justify-items-center sm:justify-items-start">
          {/* Brand */}
          <Link href="/vault" className="flex flex-col items-center sm:items-start gap-3 hover:opacity-80 transition-opacity">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4338CA] shadow-lg shadow-[#6366F1]/30">
              <Lock className="w-6 h-6 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-semibold text-white">Centilio Vault</span>
          </Link>

          {/* Vault subpages */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Vault</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/vault/features" className="text-base text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/vault/security" className="text-base text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/vault/integrations" className="text-base text-gray-400 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/vault/pricing" className="text-base text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contactpage" className="text-base text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Legal</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/terms" className="text-base text-gray-400 hover:text-white transition-colors">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-base text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-base text-gray-400 hover:text-white transition-colors">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-base text-gray-400 hover:text-white transition-colors">
                  GDPR Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Centilio. All rights reserved.</p>
          <p>
            Centilio Vault is{' '}
            <a
              href="https://github.com/CentilioTech/vault"
              className="text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source
            </a>
            {' '}— host it yourself or let us run it for you.
          </p>
        </div>
      </div>
    </footer>
  )
}
