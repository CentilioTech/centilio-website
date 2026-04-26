import type { Metadata } from 'next'
import VaultPage from '@/components/vault/VaultPage'

export const metadata: Metadata = {
  title: 'Centilio Vault — Self-hosted, zero-knowledge password manager',
  description:
    'Centilio Vault is a self-hosted, zero-knowledge password manager for businesses. Master password and vault data never leave your browser in plaintext. AES-256-GCM, Argon2id, MFA, team sharing, audit log, browser extension, native biometric unlock — open source.',
  keywords: [
    'password manager',
    'zero-knowledge',
    'self-hosted password manager',
    'enterprise password manager',
    'centilio vault',
    'open source password manager',
    'team password sharing',
  ],
  openGraph: {
    title: 'Centilio Vault — Self-hosted, zero-knowledge password manager',
    description:
      'Master password and vault data never leave your browser in plaintext. Self-hosted, open source, MFA built in.',
    url: 'https://centilio.com/vault',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centilio Vault — Self-hosted, zero-knowledge password manager',
    description:
      'Master password and vault data never leave your browser in plaintext. Self-hosted, open source, MFA built in.',
  },
}

export default function VaultRoute() {
  return <VaultPage />
}
