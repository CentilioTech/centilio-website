import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon/ComingSoon'

export const metadata: Metadata = {
  title: 'Book a Demo — Centilio',
  description: 'See Centilio in action. Book a personalized walkthrough of the products that match your business goals.',
}

export default function DemoPage() {
  return (
    <ComingSoon
      title="Book a Demo"
      description="See Centilio's products in action — a 20-minute walkthrough tailored to your business and the outcomes you're after."
      subtext="Self-serve demo booking is coming soon. For now, drop us a note with your preferred time and a Centilio specialist will reach out."
    />
  )
}
