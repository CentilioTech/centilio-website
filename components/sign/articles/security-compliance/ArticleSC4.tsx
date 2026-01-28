'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from '../../GuideSidebar'

const allArticles = [
  { id: 1, title: 'What security features does Centilio Sign offer?', href: '/sign/guide/security-compliance/article-sc-1' },
  { id: 2, title: 'What information is included in the audit trail?', href: '/sign/guide/security-compliance/article-sc-2' },
  { id: 3, title: 'Which e-signature laws does Centilio Sign comply with?', href: '/sign/guide/security-compliance/article-sc-3' },
  { id: 4, title: 'Are documents signed through Centilio Sign legally binding?', href: '/sign/guide/security-compliance/article-sc-4' },
]

export default function ArticleSC4() {
  const currentArticleId = 4
  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />
      <SignHeader />

      {/* Main Article Container */}
      <div className="bg-[#181A1E] min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <GuideSidebar variant="article" />

            {/* Main Content */}
            <main className="flex-1">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-12">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-8 text-sm text-white/50">
                  <Link
                    href="/sign"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Home
                  </Link>
                  <span>›</span>
                  <Link
                    href="/sign/guide/security-compliance"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Security & Compliance
                  </Link>
                  <span>›</span>
                  <span>Are documents signed through Centilio Sign legally binding?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    Are documents signed through Centilio Sign legally binding?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>🔒 Security & Compliance</span>
                    <span>⏱️ 2 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Yes, documents signed through Centilio Sign are legally binding and admissible in court. The platform maintains detailed records and audit trails to support legal validity.
                  </p>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Why Centilio Sign documents are legally binding:</strong>
                  </p>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Consent to Electronic Signing:</strong> All parties explicitly agree to sign electronically</li>
                    <li><strong className="text-white">Signer Authentication:</strong> Multiple verification methods confirm signer identity</li>
                    <li><strong className="text-white">Document Integrity:</strong> Tamper-evident seals and encryption prevent unauthorized changes</li>
                    <li><strong className="text-white">Comprehensive Audit Trail:</strong> Complete record of all signing activities</li>
                    <li><strong className="text-white">Legal Compliance:</strong> Adherence to ESIGN, eIDAS, and other regulations</li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-lg italic mb-0">
                      <strong className="text-white"><Image src="/images/guide svgs/quick_tip.svg" alt="Tip" width={20} height={20} className="inline-block mr-2" />Legal Standing:</strong> Electronic signatures created through Centilio Sign have the same legal standing as handwritten signatures in jurisdictions where electronic signature laws apply.
                    </p>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    In the rare event of a legal challenge, Centilio Sign&apos;s audit trail and security measures provide strong evidence of document authenticity and signer intent.
                  </p>
                </div>

                {/* Back Button */}
                <Link
                  href="/sign/guide/security-compliance"
                  className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#34A853] transition-colors text-lg font-medium mt-8"
                >
                  ← Back to Security & Compliance
                </Link>
              </div>
            </main>

            {/* Right Sidebar - Articles in this Guide */}
            <aside className="hidden lg:block w-[280px] lg:sticky lg:top-24 h-fit">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">
                  <Image src="/images/guide svgs/Article_in_this_guide.svg" alt="Articles" width={20} height={20} className="inline-block mr-2" /> Articles in this Guide
                </h3>
                <ul className="space-y-2">
                  {allArticles.map((article) => (
                    <li key={article.id}>
                      <Link
                        href={article.href}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${article.id === currentArticleId
                            ? 'bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-white'
                            : 'bg-white/[0.03] border border-transparent text-white/80 hover:bg-white/[0.05] hover:text-white'
                          }`}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center text-white text-xs font-bold">
                          {article.id}
                        </div>
                        <span className="text-sm font-medium leading-tight">{article.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <SignFooter />
    </div>
  )
}
