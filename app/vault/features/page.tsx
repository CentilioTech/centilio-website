import type { Metadata } from 'next'
import FeaturesPage from '@/components/vault/FeaturesPage'

export const metadata: Metadata = {
  title: 'Features — Centilio Vault',
  description:
    'Every Centilio Vault feature in one place: vault items, password generator, MFA, sharing, audit log, browser extension, native biometric companion, organizations, recovery, import/export, admin tools.',
  openGraph: {
    title: 'Features — Centilio Vault',
    description: 'Every Vault feature in one place — daily use, teams, security, admin, apps.',
    url: 'https://centilio.com/vault/features',
    type: 'website',
  },
}

export default function VaultFeaturesRoute() {
  return <FeaturesPage />
}
