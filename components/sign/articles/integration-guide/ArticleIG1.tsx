'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from '../../GuideSidebar'

const allArticles = [
  { id: 1, title: 'How do I connect Google Drive to Centilio Sign?', href: '/sign/guide/integration-guide/article-ig-1' },
  { id: 2, title: 'How do I integrate Centilio Sign with my CRM?', href: '/sign/guide/integration-guide/article-ig-2' },
]

export default function ArticleIG1() {
  const currentArticleId = 1
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
                    href="/sign/guide/integration-guide"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Integration Guide
                  </Link>
                  <span>›</span>
                  <span>How do I connect Google Drive to Centilio Sign?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    How do I connect Google Drive to Centilio Sign?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>🔗 Integration Guide</span>
                    <span>⏱️ 2 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Integrating Google Drive allows you to import documents directly and automatically save signed documents:
                  </p>

                  <ol className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li>
                      <strong className="text-white">Navigate to the &apos;Integrations&apos; section</strong> in your settings
                    </li>
                    <li>
                      <strong className="text-white">Find &apos;Google Drive&apos;</strong> in the list of available integrations
                    </li>
                    <li>
                      <strong className="text-white">Click &apos;Connect&apos;</strong> and sign in to your Google account
                    </li>
                    <li>
                      <strong className="text-white">Authorize Centilio Sign</strong> to access your Drive files
                    </li>
                    <li>
                      <strong className="text-white">Choose your default folder</strong> for saving signed documents
                    </li>
                  </ol>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-lg leading-relaxed mb-0 italic">
                      <strong className="text-white">☁️ Cloud Sync:</strong> Once connected, you can import documents directly from Drive when uploading, and completed documents will automatically sync back to your specified folder.
                    </p>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    You can disconnect or reconfigure this integration at any time from the Integrations settings page.
                  </p>
                </div>

                {/* Back Button */}
                <Link
                  href="/sign/guide/integration-guide"
                  className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#34A853] transition-colors text-lg font-medium mt-8"
                >
                  ← Back to Integration Guide
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
