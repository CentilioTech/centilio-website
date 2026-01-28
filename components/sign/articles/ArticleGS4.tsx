'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from '../GuideSidebar'

const allArticles = [
  { id: 1, title: 'How do I sign up for Centilio Sign?', href: '/sign/guide/article-gs-1' },
  { id: 2, title: 'How do I log in to my Centilio Sign account?', href: '/sign/guide/article-gs-2' },
  { id: 3, title: 'How do I navigate the Centilio Sign dashboard?', href: '/sign/guide/article-gs-3' },
  { id: 4, title: 'What are the key features of Centilio Sign?', href: '/sign/guide/article-gs-4' },
]

export default function ArticleGS4() {
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
                    href="/sign/guide"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Getting Started Guide
                  </Link>
                  <span>›</span>
                  <span>What are the key features of Centilio Sign?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    What are the key features of Centilio Sign?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>🚀 Getting Started Guide</span>
                    <span>⏱️ 4 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Centilio Sign offers a comprehensive set of features designed to streamline your document signing process:
                  </p>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Document Management</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Document Upload:</strong> Upload from your computer or import directly from Google Drive, Dropbox, and other cloud storage services</li>
                    <li><strong className="text-white">Format Support:</strong> Works with PDF, DOC, DOCX, and most common document formats</li>
                    <li><strong className="text-white">Document Organization:</strong> Easy-to-navigate document library with search and filter options</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Signing Workflows</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Multi-Recipient Support:</strong> Send documents to multiple signers with customizable signing orders</li>
                    <li><strong className="text-white">Recipient Roles:</strong> Assign different roles (Sign, Receive a Copy, View Only)</li>
                    <li><strong className="text-white">Approval Workflows:</strong> Add approvers who must review before signing begins</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Security & Verification</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Recipient Verification:</strong> Passcode protection for sensitive documents</li>
                    <li><strong className="text-white">Audit Trail:</strong> Comprehensive logging of all document activities</li>
                    <li><strong className="text-white">Encryption:</strong> Industry-standard encryption for all documents</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Automation & Productivity</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Automated Reminders:</strong> Set up automatic reminder emails for pending signatures</li>
                    <li><strong className="text-white">Expiry Dates:</strong> Configure signing deadlines</li>
                    <li><strong className="text-white">Templates:</strong> Pre-built templates for common documents plus custom template creation</li>
                    <li><strong className="text-white">Real-Time Tracking:</strong> Monitor document status instantly</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Integrations</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Cloud Storage:</strong> Google Drive, Dropbox, OneDrive, and more</li>
                    <li><strong className="text-white">CRM Systems:</strong> Salesforce, HubSpot, and other popular CRMs</li>
                    <li><strong className="text-white">API Access:</strong> Custom integrations for developers</li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-base leading-relaxed">
                      <strong className="text-white">🚀 Getting the Most Out of Centilio Sign:</strong> Explore each feature section in this guide to learn how to leverage these powerful capabilities for your document signing needs.
                    </p>
                  </div>
                </div>

                {/* Back Button */}
                <Link
                  href="/sign/guide"
                  className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#34A853] transition-colors text-lg font-medium mt-8"
                >
                  ← Back to Getting Started Guide
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
