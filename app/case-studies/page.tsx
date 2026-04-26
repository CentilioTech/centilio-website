import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon/ComingSoon'

export const metadata: Metadata = {
  title: 'Case Studies — Centilio',
  description: 'Real results from real Centilio customers — manufacturers, business owners, and promoters scaling with our platform.',
}

export default function CaseStudiesPage() {
  return (
    <ComingSoon
      title="Customer Stories"
      description="See how manufacturers, business owners, and promoters use Centilio to scale revenue and simplify operations."
      subtext="We're publishing detailed case studies soon. In the meantime, the homepage includes early customer testimonials."
    />
  )
}
