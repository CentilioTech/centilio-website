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

export default function ArticleGS1() {
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
                    href="/sign/guide"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Getting Started Guide
                  </Link>
                  <span>›</span>
                  <span>How do I sign up for Centilio Sign?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    How do I sign up for Centilio Sign?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Image src="/images/guide svgs/getting_started_guide.svg" alt="Getting Started" width={20} height={20} />
                      Getting Started Guide
                    </span>
                    <span>⏱️ 2 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Signing up for Centilio Sign is quick and easy. Follow these steps to create your account and start your free trial:
                  </p>

                  <ol className="space-y-4 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li>
                      <strong className="text-white">Visit the Centilio website</strong> at{' '}
                      <a
                        href="https://www.centilio.com"
                        className="text-[#EA4335] hover:text-[#EA4335]/80 transition-colors underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.centilio.com
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Click on the &apos;Sign Up&apos; button</strong> located at the top right corner of the homepage
                    </li>
                    <li>
                      <strong className="text-white">Enter your email address</strong> and create a secure password. Make sure your password is strong and includes a mix of letters, numbers, and special characters.
                    </li>
                    <li>
                      <strong className="text-white">Complete the registration form</strong> with your personal or business details including your name, company name (if applicable), and phone number.
                    </li>
                    <li>
                      <strong className="text-white">Click &apos;Create Account&apos;</strong> to finish the registration process
                    </li>
                  </ol>

                  {/* Preview Box */}
                  <div className="my-8 p-6 bg-white/[0.05] border border-white/10 rounded-xl">
                    <p className="mb-4 text-white/90 font-semibold text-base">
                      Centilio Sign Up Page Preview:
                    </p>
                    <div className="bg-white/[0.03] border border-[#EA4335]/30 rounded-lg overflow-hidden">
                      <Image
                        src="/images/guide_images/Getting_Started_Guide/GS_Guide_1.png"
                        alt="Centilio Sign Up Page"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="mt-4 text-sm text-white/60 italic">
                      The Centilio sign-up page where you can start your free 28-day trial with no credit card required.
                    </p>
                  </div>

                  {/* Pro Tip Info Box */}
                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-base leading-relaxed">
                      <strong className="text-white"><Image src="/images/guide svgs/quick_tip.svg" alt="Tip" width={20} height={20} className="inline-block mr-2" />Pro Tip:</strong> New users receive a free 28-day trial with full access to all features. No credit card is required to start your trial, so you can explore Centilio Sign risk-free!
                    </p>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Once you click &apos;Create Account&apos;, you&apos;ll receive a confirmation email to verify your email address. Click the verification link in the email to activate your account.
                  </p>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    After verification, you&apos;ll have immediate access to your Centilio Sign dashboard where you can:
                  </p>

                  <ul className="space-y-2 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Upload documents for signing</li>
                    <li>Create your digital signature</li>
                    <li>Send documents to others</li>
                    <li>Track signing status</li>
                    <li>Manage your account settings</li>
                  </ul>

                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Congratulations! You&apos;re now ready to start sending and signing documents with Centilio Sign.
                  </p>
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
