'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const guideCategories = [
    { id: 'getting-started', title: 'Getting Started Guide', icon: '/images/guide svgs/getting_started_guide.svg', href: '/sign/guide' },
    { id: 'user-guide', title: 'User Guide', icon: '/images/guide svgs/userguide.svg', href: '/sign/guide/user-guide' },
    { id: 'admin-guide', title: 'Admin Guide', icon: '/images/guide svgs/admin_guide.svg', href: '/sign/guide/admin-guide' },
    { id: 'integration-guide', title: 'Integration Guide', icon: '/images/guide svgs/integration_guide.svg', href: '/sign/guide/integration-guide' },
    { id: 'templates-guide', title: 'Templates Guide', icon: '/images/guide svgs/templateguide.svg', href: '/sign/guide/templates-guide' },
    { id: 'security-compliance', title: 'Security & Compliance', icon: '/images/guide svgs/security&complianceguide.svg', href: '/sign/guide/security-compliance' },
]

interface GuideSidebarProps {
    variant?: 'main' | 'article'
}

export default function GuideSidebar({ variant = 'main' }: GuideSidebarProps) {
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === '/sign/guide') {
            // For Getting Started, only active if it's the exact path or it's an article-gs-* page
            return pathname === '/sign/guide' || pathname.includes('/sign/guide/article-gs-')
        }
        // For others, active if the pathname starts with the category href
        return pathname.startsWith(href)
    }

    const containerStyles = variant === 'main'
        ? 'bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8'
        : 'bg-white/[0.03] border border-white/10 rounded-2xl p-6'

    const titleStyles = variant === 'main'
        ? 'text-2xl font-bold mb-8 bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent'
        : 'text-xl font-bold mb-6 bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent'

    const itemPadding = variant === 'main' ? 'p-4' : 'p-3'
    const iconSize = variant === 'main' ? 24 : 20
    const fontSize = variant === 'main' ? 'text-base' : 'text-sm'

    return (
        <aside className={`${variant === 'main' ? 'w-full lg:w-[320px]' : 'w-full lg:w-[280px]'} lg:sticky lg:top-24 h-fit`}>
            <div className={containerStyles}>
                <h2 className={titleStyles}>
                    Customer Guide
                </h2>
                <ul className="space-y-2">
                    {guideCategories.map((category) => {
                        const active = isActive(category.href)
                        return (
                            <li key={category.id}>
                                <Link
                                    href={category.href}
                                    className={`flex items-center ${itemPadding} rounded-xl transition-all duration-300 ${active
                                        ? 'bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-white'
                                        : 'bg-white/[0.03] border border-transparent text-white/80 hover:bg-white/[0.05] hover:text-white'
                                        }`}
                                >
                                    <Image src={category.icon} alt={category.title} width={iconSize} height={iconSize} className="mr-3" />
                                    <span className={`${fontSize} font-medium`}>{category.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}
