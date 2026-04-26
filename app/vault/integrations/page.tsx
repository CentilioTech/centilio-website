import type { Metadata } from 'next'
import IntegrationsPage from '@/components/vault/IntegrationsPage'

export const metadata: Metadata = {
  title: 'Integrations — Centilio Vault',
  description:
    'Centilio Vault integrates with the stack you already run: SSO (SAML), SCIM, TOTP, WebAuthn, Chrome extension, native companion (Touch ID/Windows Hello), import from 1Password/LastPass/Bitwarden/KeePass, audit-log SIEM export, REST API + CLI.',
  openGraph: {
    title: 'Integrations — Centilio Vault',
    description: 'Web app, browser extension, native biometric companion, SSO, SCIM, audit-log export, CLI, API.',
    url: 'https://centilio.com/vault/integrations',
    type: 'website',
  },
}

export default function VaultIntegrationsRoute() {
  return <IntegrationsPage />
}
