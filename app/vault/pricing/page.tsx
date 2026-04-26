import type { Metadata } from 'next'
import PricingPage from '@/components/vault/PricingPage'

export const metadata: Metadata = {
  title: 'Pricing — Centilio Vault',
  description:
    'Self-hosted (free, MIT-licensed), Team Cloud ($5/user/month), or Enterprise (custom) — every tier ships every Vault feature. Side-by-side comparison + FAQ.',
  openGraph: {
    title: 'Pricing — Centilio Vault',
    description: 'Self-hosted free, Team $5/user/mo, Enterprise custom. Every tier ships every feature.',
    url: 'https://centilio.com/vault/pricing',
    type: 'website',
  },
}

export default function VaultPricingRoute() {
  return <PricingPage />
}
