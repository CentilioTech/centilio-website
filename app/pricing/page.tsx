import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon/ComingSoon'

export const metadata: Metadata = {
  title: 'Pricing — Centilio',
  description: 'Centilio pricing — flexible plans for businesses ready to scale. Talk to us for a tailored quote.',
}

export default function PricingPage() {
  return (
    <ComingSoon
      title="Pricing"
      description="Centilio plans are tailored to your business stage and the products you need. We're publishing public pricing tiers soon."
      subtext="In the meantime, tell us what you're trying to achieve and we'll send back a tailored proposal."
    />
  )
}
