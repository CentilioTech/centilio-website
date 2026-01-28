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

export default function ArticleAG1() {
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
                    href="/sign/guide/admin-guide"
                    className="text-[#4285F4] hover:text-[#34A853] transition-colors"
                  >
                    Admin Guide
                  </Link>
                  <span>›</span>
                  <span>What are the different user roles in Centilio Sign?</span>
                </div>

                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                    What are the different user roles in Centilio Sign?
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <Image src="/images/guide svgs/admin_guide.svg" alt="Admin Guide" width={20} height={20} />
                      Admin Guide
                    </span>
                    <span>⏱️ 8 min read</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Centilio Sign provides a flexible role-based access control system that allows administrators to manage permissions for organization members. User roles determine what actions members can perform within the Centilio Sign application, ensuring proper security and workflow management.
                  </p>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Role Management</h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Roles are managed through the CentilioAccount portal under Organization &gt; Roles &amp; Permissions. Administrators can view existing roles, create new custom roles, and modify permissions to suit their organization&apos;s needs.
                  </p>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Default System Roles</h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Centilio Sign comes with two built-in system roles:
                  </p>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">1. Super Admin</h3>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    The Super Admin role has the highest level of access in the organization. This role typically includes:
                  </p>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Full access to all modules and features</li>
                    <li>Ability to manage organization settings</li>
                    <li>Permission to create and manage other roles</li>
                    <li>Access to invite and manage members</li>
                    <li>Control over all documents, templates, and contacts</li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-lg italic mb-0">
                      <strong className="text-white">Best Practice:</strong> Limit Super Admin access to key personnel who manage the overall organization.
                    </p>
                  </div>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">2. Admin</h3>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    The Admin role provides comprehensive access to Centilio Sign features with appropriate oversight capabilities:
                  </p>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Manage documents and templates</li>
                    <li>Access signing workflows</li>
                    <li>Manage contacts</li>
                    <li>Oversee organizational activities</li>
                  </ul>

                  <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 rounded-xl p-6 mb-8">
                    <p className="text-white/90 text-lg italic mb-0">
                      <strong className="text-white">Best Practice:</strong> Assign Admin roles to team leads or department managers who need broad access but don&apos;t require full system administration capabilities.
                    </p>
                  </div>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Custom Roles</h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Organizations can create custom roles tailored to specific job functions or departments. Custom roles allow granular control over permissions across different modules.
                  </p>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Permission Structure</h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Centilio Sign permissions are organized into five key modules, each with four permission types:
                  </p>
                  <div className="my-8 p-6 bg-white/[0.05] border border-white/10 rounded-xl">
                    <p className="mb-4 text-white/90 font-semibold text-base">
                      Permission Structure:
                    </p>
                    <div className="bg-white/[0.03] border border-[#EA4335]/30 rounded-lg overflow-hidden">
                      <Image
                        src="/images/guide_images/Admin_Guide/Admin_Guide_1(1).png"
                        alt="Centilio Log In Page"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Modules</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Document:</strong> Controls access to document management features</li>
                    <li><strong className="text-white">Template:</strong> Manages template creation and usage</li>
                    <li><strong className="text-white">Sign-For-Others:</strong> Permissions for initiating signature requests on behalf of others</li>
                    <li><strong className="text-white">Sign-My-Self:</strong> Controls self-signing capabilities</li>
                    <li><strong className="text-white">Contacts:</strong> Manages contact list access and modifications</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Permission Types</h3>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    For each module, you can assign the following permissions:
                  </p>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Read:</strong> View and access items in the module</li>
                    <li><strong className="text-white">Create:</strong> Generate new documents, templates, or contacts</li>
                    <li><strong className="text-white">Edit:</strong> Modify existing items</li>
                    <li><strong className="text-white">Delete:</strong> Remove items from the system</li>
                  </ul>
                  <div className="my-8 p-6 bg-white/[0.05] border border-white/10 rounded-xl">
                    <p className="mb-4 text-white/90 font-semibold text-base">
                      Permission Types:
                    </p>
                    <div className="bg-white/[0.03] border border-[#EA4335]/30 rounded-lg overflow-hidden">
                      <Image
                        src="/images/guide_images/Admin_Guide/Admin_Guide_1(2).png"
                        alt="Centilio Log In Page"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Creating a New Role</h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    To create a custom role:
                  </p>

                  <ol className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li>Navigate to CentilioAccount portal</li>
                    <li>Go to Organization section</li>
                    <li>Scroll to Roles &amp; Permissions</li>
                    <li>Click + New Role</li>
                    <li>Enter a Role Name</li>
                    <li>Configure permissions for each module by checking the appropriate boxes (Read, Create, Edit, Delete)</li>
                    <li>Click Save Changes</li>
                  </ol>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Assigning Roles to Members</h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Once roles are created:
                  </p>

                  <ol className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-decimal list-inside">
                    <li>Go to Organization Members section</li>
                    <li>Click + Invite Member to add a new member or edit an existing member</li>
                    <li>Select the appropriate Role from the dropdown</li>
                    <li>Assign a Designation (optional)</li>
                    <li>Save the changes</li>
                  </ol>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Best Practices</h2>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Security Considerations</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Principle of Least Privilege:</strong> Assign users only the permissions they need to perform their job functions</li>
                    <li><strong className="text-white">Regular Audits:</strong> Periodically review role assignments and permissions</li>
                    <li><strong className="text-white">Role Separation:</strong> Create distinct roles for different departments or functions</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Organizational Structure</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Define Clear Roles:</strong> Create roles that align with your organizational structure</li>
                    <li><strong className="text-white">Document Permissions:</strong> Maintain documentation of what each role can access</li>
                    <li><strong className="text-white">Standardize Naming:</strong> Use clear, descriptive role names</li>
                  </ul>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Common Role Examples</h2>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Document Manager</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Read, Create, Edit, Delete: Documents, Templates, Contacts</li>
                    <li>Limited or no access to Sign-For-Others</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Signing Officer</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Full access to Sign-For-Others and Sign-My-Self</li>
                    <li>Read access to Documents and Templates</li>
                    <li>Limited edit capabilities</li>
                  </ul>

                  <h3 className="text-[#EA4335] text-2xl font-bold mt-8 mb-4">Viewer/Auditor</h3>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li>Read-only access across all modules</li>
                    <li>No Create, Edit, or Delete permissions</li>
                  </ul>

                  <h2 className="text-white text-2xl font-bold mt-8 mb-4">Role Management Tips</h2>

                  <ul className="space-y-3 mb-8 text-white/80 text-lg leading-relaxed list-disc ml-6">
                    <li><strong className="text-white">Start Simple:</strong> Begin with the default roles and create custom roles as needs arise</li>
                    <li><strong className="text-white">Test Permissions:</strong> Verify that role permissions work as expected before rolling out to all users</li>
                    <li><strong className="text-white">Communication:</strong> Ensure team members understand their role capabilities and limitations</li>
                    <li><strong className="text-white">Scalability:</strong> Design roles that can accommodate organizational growth</li>
                  </ul>
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
