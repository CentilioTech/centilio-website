import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon/ComingSoon'

export const metadata: Metadata = {
  title: 'Products — Centilio',
  description: 'A unified suite of digital products to help your business grow — Sign, SEO Bot, HR Agent, Email Outreach.',
}

export default function ProductsPage() {
  return (
    <ComingSoon
      title="Our Products"
      description="A unified suite of digital products designed to help your business grow — from digital signatures (Centilio Sign) and AI content automation (Centilio SEO Bot) to HR and email-outreach agents."
      subtext="Detailed product pages are on the way. In the meantime, explore Sign and SEO Bot from the main navigation."
    />
  )
}
