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

export default function ArticleUG6() {
  const currentArticleId = 6

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
                  <span>How do I sign a document that was sent to me?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    How do I sign a document that was sent to me?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Image src="/images/guide svgs/userguide.svg" alt="User Guide" width={20} height={20} />
                      User Guide
                    </span>
                    <span>⏱️ 2 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    When someone sends you a document to sign, follow these steps:
                  </p>

                  <ol className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li><strong className="text-white">Check your email</strong> for a notification with a &apos;Proceed to Sign&apos; button</li>
                    <li><strong className="text-white">Click the button</strong> to open the Document Details page</li>
                    <li><strong className="text-white">Review the document</strong> and click &apos;Accept&apos; to proceed (or &apos;Decline&apos; if needed)</li>
                    <li><strong className="text-white">The document opens</strong> with fields pre-assigned to you highlighted</li>
                    <li>
                      <strong className="text-white">For signature fields, choose your preferred method:</strong>
                      <ul className="mt-2 ml-6 space-y-2 list-disc">
                        <li><strong className="text-white">Draw:</strong> Use your mouse or touchscreen to draw your signature</li>
                        <li><strong className="text-white">Type:</strong> Type your name to create a signature</li>
                        <li><strong className="text-white">Upload:</strong> Upload a saved signature image</li>
                      </ul>
                    </li>
                    <li><strong className="text-white">Complete any other required fields</strong> (name, date, text inputs, checkboxes)</li>
                    <li><strong className="text-white">Click &apos;Submit&apos;</strong> to finalize your signature</li>
                  </ol>

                  <div className="my-8 p-6 bg-white/[0.05] border border-white/10 rounded-xl">
                    <p className="mb-4 text-white/90 font-semibold text-base">
                      E-Sign Request:
                    </p>
                    <div className="bg-white/[0.03] border border-[#EA4335]/30 rounded-lg overflow-hidden">
                      <Image
                        src="/images/guide_images/User_Guide/User_Guide_6(1).png"
                        alt="Centilio Log In Page"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-4 text-sm text-white/60 italic">
                      Click the &apos;Click to Sign&apos; button in the bottom.
                    </p>
                  </div>

                  <div className="my-8 p-6 bg-white/[0.05] border border-white/10 rounded-xl">
                    <p className="mb-4 text-white/90 font-semibold text-base">
                      Review Document Info:
                    </p>
                    <div className="bg-white/[0.03] border border-[#EA4335]/30 rounded-lg overflow-hidden">
                      <Image
                        src="/images/guide_images/User_Guide/User_Guide_6(2).png"
                        alt="Centilio Log In Page"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-4 text-sm text-white/60 italic">
                      Click the &apos;ACCEPT&apos; button in the top bottom left corner.
                    </p>
                  </div>

                  <div className="my-8 p-6 bg-white/[0.05] border border-white/10 rounded-xl">
                    <p className="mb-4 text-white/90 font-semibold text-base">
                      Choose Preferred Method:
                    </p>
                    <div className="bg-white/[0.03] border border-[#EA4335]/30 rounded-lg overflow-hidden">
                      <Image
                        src="/images/guide_images/User_Guide/User_Guide_6(3).png"
                        alt="Centilio Log In Page"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-4 text-sm text-white/60 italic">
                      Click the &apos;SUBMIT&apos; button in the bottom right corner to Sign the document.
                    </p>
                  </div>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-base leading-relaxed">
                      <strong className="text-white">
                        <Image src="/images/guide svgs/quick_tip.svg" alt="Tip" width={24} height={24} className="inline-block mr-2" />
                        Automatic Delivery:
                      </strong> The signed document is automatically sent back to the sender, and you&apos;ll receive a copy via email once all parties have signed.
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
