import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Can Innovative Digital Tools Drive Your Business Growth? – Centilio Blog',
  description: 'Discover how innovative digital tools can revolutionize your business growth. Learn about cutting-edge solutions including electronic signatures, digital marketing, and SEO automation to drive success.',
  openGraph: {
    title: 'How Can Innovative Digital Tools Drive Your Business Growth?',
    description: 'Discover how innovative digital tools can revolutionize your business growth. Learn about cutting-edge solutions including electronic signatures, digital marketing, and SEO automation to drive success.',
    type: 'article',
    publishedTime: '2024-12-28T00:00:00.000Z',
    authors: ['Ravi Gandhi'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Can Innovative Digital Tools Drive Your Business Growth?',
    description: 'Discover how innovative digital tools can revolutionize your business growth. Learn about cutting-edge solutions including electronic signatures, digital marketing, and SEO automation to drive success.',
  },
  robots: 'max-image-preview:large',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}