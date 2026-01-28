'use client'

import Image from 'next/image'
import Link from 'next/link'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from './GuideSidebar'


const templatesGuideArticles = [
  {
    number: 1,
    title: 'What pre-built templates are available in Centilio Sign?',
    snippet: 'Explore ready-to-use templates for NDAs, contracts, agreements, and more.',
  },
  {
    number: 2,
    title: 'How do I use a pre-built template?',
    snippet: 'Quick and easy steps to use templates for common business documents.',
  },
  {
    number: 3,
    title: 'How do I create my own custom template?',
    snippet: 'Save time by creating reusable templates for documents you send frequently.',
  },
]

export default function TemplatesGuidePageSign() {
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
                  <span>Templates Guide</span>
                </div>

                {/* Section Header */}
                <div className="mb-12">
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
                    Templates Guide
                  </h1>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Save time and ensure consistency by using pre-built templates or creating your own. This section covers everything you need to know about working with templates in Centilio Sign.
                  </p>
                </div>

                {/* Articles List */}
                <div className="space-y-4">
                  {templatesGuideArticles.map((article) => (
                    <Link
                      key={article.number}
                      href={`/sign/guide/templates-guide/article-tg-${article.number}`}
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
