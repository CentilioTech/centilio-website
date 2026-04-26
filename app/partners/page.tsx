import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon/ComingSoon'

export const metadata: Metadata = {
  title: 'Partners — Centilio',
  description: 'Become a Centilio partner — extend our growth platform to your customers and grow your own revenue alongside.',
}

export default function PartnersPage() {
  return (
    <ComingSoon
      title="Partner With Centilio"
      description="Resellers, agencies, and integration partners — we're building a partner program to help you offer Centilio's growth platform to your customers."
      subtext="Partner program details are being finalized. Tell us about your business and we'll loop you in as soon as we open applications."
    />
  )
}
