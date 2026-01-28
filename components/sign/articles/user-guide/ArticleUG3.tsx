'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from '../../GuideSidebar'

const allArticles = [
  { id: 1, title: 'How do I upload a document for signing?', href: '/sign/guide/user-guide/article-ug-1' },
  { id: 2, title: 'How do I add recipients to my document?', href: '/sign/guide/user-guide/article-ug-2' },
  { id: 3, title: 'How do I set the signing order for multiple recipients?', href: '/sign/guide/user-guide/article-ug-3' },
  { id: 4, title: 'How do I place signature fields on my document?', href: '/sign/guide/user-guide/article-ug-4' },
  { id: 5, title: 'How do I track the status of documents I have sent?', href: '/sign/guide/user-guide/article-ug-5' },
  { id: 6, title: 'How do I sign a document that was sent to me?', href: '/sign/guide/user-guide/article-ug-6' },
]

export default function ArticleUG3() {
  const currentArticleId = 3

  return (
    <div className="min-h-screen bg-white">
      <WhiteHeader />
      <SignHeader />

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
                  <Link href="/sign" className="text-[#4285F4] hover:text-[#34A853] transition-colors">
                    Home
                  </Link>
                  <span>›</span>
                  <Link href="/sign/guide/user-guide" className="text-[#4285F4] hover:text-[#34A853] transition-colors">
                    User Guide
                  </Link>
                  <span>›</span>
                  <span>How do I set the signing order for multiple recipients?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    How do I set the signing order for multiple recipients?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span>👤 User Guide</span>
                    <span>⏱️ 2 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    When you have multiple signers, you can control the order in which they receive and sign the document:
                  </p>

                  <ol className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li><strong className="text-white">After adding all your recipients</strong>, enable the &apos;Signing Order&apos; toggle</li>
                    <li><strong className="text-white">Assign each recipient a number</strong> (1, 2, 3, etc.)</li>
                    <li><strong className="text-white">Recipients will receive the document in numerical order</strong></li>
                  </ol>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">How Sequential Signing Works:</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Recipient #1 receives the document first</li>
                    <li>Once #1 completes their signature, #2 is automatically notified</li>
                    <li>This continues until all recipients have signed in order</li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-base leading-relaxed">
                      <strong className="text-white">
                        <Image src="/images/guide svgs/quick_tip.svg" alt="Tip" width={24} height={24} className="inline-block mr-2" />
                        Use Case Example:
                      </strong> This is perfect for approval workflows where a manager must approve before team members can sign, or for hierarchical signing processes in contracts.
                    </p>
                  </div>
                </div>

                {/* Back Button */}
                <Link
                  href="/sign/guide/user-guide"
                  className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#34A853] transition-colors text-lg font-medium mt-8"
                >
                  ← Back to User Guide
                </Link>
              </div>
            </main>

            {/* Right Sidebar */}
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
