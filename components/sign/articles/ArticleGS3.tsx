'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'

const guideCategories = [
  { id: 'getting-started', title: 'Getting Started Guide', icon: '/images/guide svgs/getting_started_guide.svg', active: true, href: '/sign/guide' },
  { id: 'user-guide', title: 'User Guide', icon: '/images/guide svgs/userguide.svg', active: true, href: '/sign/guide/user-guide' },
  { id: 'admin-guide', title: 'Admin Guide', icon: '/images/guide svgs/admin_guide.svg', active: true, href: '/sign/guide/admin-guide' },
  { id: 'integration-guide', title: 'Integration Guide', icon: '/images/guide svgs/integration_guide.svg', active: true, href: '/sign/guide/integration-guide' },
  { id: 'templates-guide', title: 'Templates Guide', icon: '/images/guide svgs/templateguide.svg', active: true, href: '/sign/guide/templates-guide' },
  { id: 'security-compliance', title: 'Security & Compliance', icon: '/images/guide svgs/security&complianceguide.svg', active: true, href: '/sign/guide/security-compliance' },
]

const allArticles = [
  { id: 1, title: 'How do I sign up for Centilio Sign?', href: '/sign/guide/article-gs-1' },
  { id: 2, title: 'How do I log in to my Centilio Sign account?', href: '/sign/guide/article-gs-2' },
  { id: 3, title: 'How do I navigate the Centilio Sign dashboard?', href: '/sign/guide/article-gs-3' },
  { id: 4, title: 'What are the key features of Centilio Sign?', href: '/sign/guide/article-gs-4' },
]

export default function ArticleGS3() {
  const currentArticleId = 3
  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />
      <SignHeader />

      {/* Main Article Container */}
      <div className="bg-[#181A1E] min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-[280px] lg:sticky lg:top-24 h-fit">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">
                  Customer Guide
                </h2>
                <ul className="space-y-2">
                  {guideCategories.map((category) => (
                    <li key={category.id}>
                      {category.href ? (
                        <Link
                          href={category.href}
                          className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                            category.id === 'getting-started'
                              ? 'bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-white'
                              : 'bg-white/[0.03] border border-transparent text-white/80 hover:bg-white/[0.05] hover:text-white'
                          }`}
                        >
                          <Image src={category.icon} alt={category.title} width={20} height={20} className="mr-3" />
                          <span className="text-sm font-medium">{category.title}</span>
                        </Link>
                      ) : (
                        <div className="flex items-center p-3 rounded-xl bg-white/[0.03] border border-transparent opacity-50 cursor-not-allowed">
                          <Image src={category.icon} alt={category.title} width={20} height={20} className="mr-3" />
                          <span className="text-sm font-medium text-white/60">{category.title}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

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
                  <span>How do I navigate the Centilio Sign dashboard?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    How do I navigate the Centilio Sign dashboard?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>🚀 Getting Started Guide</span>
                    <span>⏱️ 3 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Once you&apos;re logged in, you&apos;ll see the Centilio dashboard. To access Centilio Sign:
                  </p>

                  <ol className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li><strong className="text-white">Go to &apos;My Apps&apos;</strong> in the main Centilio dashboard</li>
                    <li><strong className="text-white">Select &apos;Centilio Sign&apos;</strong> from the list of available applications</li>
                    <li><strong className="text-white">You&apos;ll land on the Centilio Sign home page</strong></li>
                  </ol>

                  <p className="text-white text-xl font-semibold mb-4">
                    The Centilio Sign dashboard features:
                  </p>

                  <ul className="space-y-4 mb-8 text-white/80 text-lg leading-relaxed list-none pl-0">
                    <li>
                      <strong className="text-white">Sidebar Navigation:</strong> Located on the left side with tabs for different features:
                      <ul className="mt-2 ml-6 space-y-2 list-disc">
                        <li>My Documents - Upload and manage documents</li>
                        <li>Send for Sign - Track documents you&apos;ve sent</li>
                        <li>Sign Myself - Documents awaiting your signature</li>
                        <li>Templates - Pre-built and custom templates</li>
                        <li>Contacts - People you&apos;ve worked with</li>
                        <li>Recent Activity - Your document history</li>
                        <li>Settings - Account preferences and signature setup</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-white">Main View:</strong> Shows a summary of your documents with status indicators (signed, sent, in progress)
                    </li>
                    <li>
                      <strong className="text-white">Quick Action Buttons:</strong> Located at the top for common tasks like uploading documents or creating from templates
                    </li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-base leading-relaxed">
                      <strong className="text-white"><Image src="/images/guide svgs/quick_tip.svg" alt="Tip" width={20} height={20} className="inline-block mr-2" />Navigation Tip:</strong> Use the sidebar to quickly switch between different sections. Each tab provides access to specific functionality, making it easy to manage your e-signature workflows.
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
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                          article.id === currentArticleId
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
