'use client'

import Image from 'next/image'
import Link from 'next/link'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from './GuideSidebar'


const userGuideArticles = [
  {
    number: 1,
    title: 'How do I upload a document for signing?',
    snippet: 'Learn how to upload documents from various sources including your computer and cloud storage.',
  },
  {
    number: 2,
    title: 'How do I add recipients to my document?',
    snippet: 'Add multiple recipients and assign their roles (Sign, Receive a Copy, or View Only).',
  },
  {
    number: 3,
    title: 'How do I set the signing order for multiple recipients?',
    snippet: 'Control the sequence in which recipients sign your document for approval workflows.',
  },
  {
    number: 4,
    title: 'How do I place signature fields on my document?',
    snippet: 'Drag and drop signature fields, date fields, and other form elements exactly where they are needed.',
  },
  {
    number: 5,
    title: 'How do I track the status of documents I have sent?',
    snippet: 'Monitor document progress in real-time with status indicators and detailed audit trails.',
  },
  {
    number: 6,
    title: 'How do I sign a document that was sent to me?',
    snippet: 'Complete the signing process for documents you receive with draw, type, or upload options.',
  },
]

export default function UserGuidePageSign() {
  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />
      <SignHeader />

      {/* Main Guide Container */}
      <div className="bg-[#181A1E] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <GuideSidebar variant="main" />

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
                  <span>User Guide</span>
                </div>

                {/* Section Header */}
                <div className="mb-12">
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
                    User Guide
                  </h1>
                  <p className="text-lg text-white/70 leading-relaxed">
                    This section covers all the tasks you&apos;ll perform as a user of Centilio Sign, from uploading documents to tracking signatures. Master the essential features to streamline your document signing workflows.
                  </p>
                </div>

                {/* Articles List */}
                <div className="space-y-4">
                  {userGuideArticles.map((article) => (
                    <Link
                      key={article.number}
                      href={`/sign/guide/user-guide/article-ug-${article.number}`}
                      className="flex items-center justify-between bg-white/[0.05] border border-white/10 rounded-xl p-6 hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/40 hover:translate-x-2 hover:shadow-[0_4px_24px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center flex-1">
                        {/* Number Badge - Hidden on Mobile */}
                        <div className="hidden md:flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-lg mr-6 font-bold text-sm flex-shrink-0">
                          {article.number}
                        </div>

                        {/* Article Content */}
                        <div className="flex-1">
                          <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                            {article.title}
                          </h3>
                          <p className="text-sm lg:text-base text-white/60 leading-relaxed">
                            {article.snippet}
                          </p>
                        </div>
                      </div>

                      <div className="ml-4 flex-shrink-0">
                        <Image src="/images/guide svgs/arrow.svg" alt="Go" width={20} height={20} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <SignFooter />
    </div>
  )
}
