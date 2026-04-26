import type { Metadata } from 'next'
import SecurityPage from '@/components/vault/SecurityPage'

export const metadata: Metadata = {
  title: 'Security — Centilio Vault',
  description:
    "Centilio Vault's security architecture, in detail: the zero-knowledge key flow, AES-256-GCM + Argon2id specs, threat model, current security posture (closed and open findings), and disclosure policy.",
  openGraph: {
    title: 'Security — Centilio Vault',
    description: 'Zero-knowledge architecture, public threat model, public findings log. Honest security disclosure.',
    url: 'https://centilio.com/vault/security',
    type: 'website',
  },
}

export default function VaultSecurityRoute() {
  return <SecurityPage />
}
