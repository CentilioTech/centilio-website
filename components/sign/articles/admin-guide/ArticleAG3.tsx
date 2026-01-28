'use client'

import Link from 'next/link'
import Image from 'next/image'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'
import GuideSidebar from '../../GuideSidebar'

const allArticles = [
  { id: 1, title: 'What are the different user roles in Centilio Sign?', href: '/sign/guide/admin-guide/article-ag-1' },
  { id: 2, title: 'How do I add or remove users from my organization?', href: '/sign/guide/admin-guide/article-ag-2' },
  { id: 3, title: 'How do I monitor document activity across my organization?', href: '/sign/guide/admin-guide/article-ag-3' },
]

export default function ArticleAG3() {
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
                    href="/sign/guide/admin-guide"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Admin Guide
                  </Link>
                  <span>›</span>
                  <span>How do I monitor document activity across my organization?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    How do I monitor document activity across my organization?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Image src="/images/guide svgs/admin_guide.svg" alt="Admin Guide" width={20} height={20} />
                      Admin Guide
                    </span>
                    <span>⏱️ 2 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Centilio Sign provides multiple tool to help administrators monitor and track document activity across their organization. You can view real-time statistics, detailed audit logs, and document statuses all in one place.
                  </p>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Method 1: Using the Home Dashboard</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    The Home page provides a quick overview of all document activity in your organization.
                  </p>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 1: Navigate to Home</strong>
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Click Home from the left sidebar</li>
                    <li>View the dashboard that displays key metrics</li>
                  </ul>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 2: Review Activity Statistics</strong>
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    The dashboard shows the following document metrics:
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Total Signed Documents:</strong> Number of completed signatures</li>
                    <li><strong className="text-white">New Documents for Sign:</strong> Pending documents awaiting signatures</li>
                    <li><strong className="text-white">Sent:</strong> Documents shared with recipients</li>
                    <li><strong className="text-white">Viewed:</strong> Documents that have been opened by recipients</li>
                    <li><strong className="text-white">Declined:</strong> Documents rejected by recipients</li>
                    <li><strong className="text-white">Recalled:</strong> Documents recalled before completion</li>
                    <li><strong className="text-white">Expired:</strong> Documents that passed their expiration date</li>
                    <li><strong className="text-white">Completed:</strong> Fully signed and finalized documents</li>
                  </ul>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 3: Check Storage Usage</strong>
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>View storage consumption for documents and signed images</li>
                    <li>Monitor usage to stay within your plan limits</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Method 2: Using Recent Activity (Audit Logs)</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    For detailed tracking of all user actions, use the Recent Activity page.
                  </p>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 1: Access Recent Activity</strong>
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Click Recent Activity from the left sidebar</li>
                    <li>View the All Users Activity section</li>
                  </ul>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 2: Review Audit Logs</strong>
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    The audit logs display comprehensive information for each activity:
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Date and Time:</strong> When the action occurred</li>
                    <li><strong className="text-white">User Name:</strong> Who performed the action</li>
                    <li><strong className="text-white">Action Type:</strong> Category of activity (Document, Template, etc.)</li>
                    <li><strong className="text-white">Document Name:</strong> Which file was affected (clickable link)</li>
                    <li><strong className="text-white">Action Description:</strong> Detailed description of what happened</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Method 3: Document-Level Tracking</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Track individual documents through the My Documents section.
                  </p>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 1: Navigate to My Documents</strong>
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Click My Documents from the left sidebar</li>
                    <li>Browse all documents in your organization</li>
                  </ul>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    <strong className="text-white">Step 2: View Document Details</strong>
                  </p>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>See creation dates for each document</li>
                    <li>Click on any document to view its current status</li>
                    <li>Use the three-dot menu for additional options</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Best Practices for Monitoring</h3>
                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Regular Dashboard Reviews:</strong> Check the Home dashboard daily for quick activity overview</li>
                    <li><strong className="text-white">Audit Log Monitoring:</strong> Review Recent Activity weekly to track user actions and document workflows</li>
                    <li><strong className="text-white">Status Tracking:</strong> Pay attention to declined or expired documents that may need follow-up</li>
                    <li><strong className="text-white">Storage Management:</strong> Monitor storage usage to prevent capacity issues</li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-lg italic mb-0">
                      <strong className="text-white"><Image src="/images/guide svgs/quick_tip.svg" alt="Tip" width={20} height={20} className="inline-block mr-2" />Admin Tip:</strong> The Recent Activity page shows all organizational activities, making it easy to track document workflows, identify bottlenecks, and ensure compliance with your document signing processes.
                    </p>
                  </div>
                </div>

                {/* Back Button */}
                <Link
                  href="/sign/guide/admin-guide"
                  className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#34A853] transition-colors text-lg font-medium mt-8"
                >
                  ← Back to Admin Guide
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
