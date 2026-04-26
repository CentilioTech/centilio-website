'use client'

import {
  Globe, Smartphone, KeyRound, Users, Database, Code, FileUp,
  Terminal, Shield, Github, Mail, ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import VaultHeader from '@/components/layout/VaultHeader'
import VaultFooter from '@/components/layout/VaultFooter'
import {
  Eyebrow, SectionHeading, FinalCTA, GradientOrbs, PrimaryButton, SecondaryButton,
} from './_shared'

// =============================================================================
// IntegrationsPage — /vault/integrations
// =============================================================================
// Maps to the three deliverables Vault ships (web app, browser extension,
// native companion) plus the surfaces enterprises need to wire into their
// stack: SSO, SCIM, audit log export, import-from-competitors, CLI/API.
// =============================================================================

interface IntegrationGroup {
  id: string
  title: string
  sub: string
  items: {
    title: string
    body: string
    status: 'shipping' | 'beta' | 'roadmap'
    icon: React.ComponentType<{ className?: string }>
  }[]
}

const GROUPS: IntegrationGroup[] = [
  {
    id: 'apps',
    title: 'Apps + clients',
    sub: 'Wherever your team works, Vault meets them.',
    items: [
      { title: 'Web app', body: 'React 19 SPA. Works in any modern browser. The primary surface for managing items, teams, and policies.', status: 'shipping', icon: Globe },
      { title: 'Chrome extension', body: 'MV3-native. One-click autofill, quick item search, password generator inline. Locked to your Vault domain.', status: 'shipping', icon: Globe },
      { title: 'Native companion (Mac, Windows, Linux)', body: 'Desktop process for biometric unlock. Touch ID, Face ID, Windows Hello. Seals KEK in OS keychain.', status: 'shipping', icon: Smartphone },
      { title: 'Mobile apps (iOS, Android)', body: 'Native mobile clients with face/fingerprint unlock. On the roadmap behind a tested API surface.', status: 'roadmap', icon: Smartphone },
    ],
  },
  {
    id: 'identity',
    title: 'Identity + SSO',
    sub: 'Your IdP stays the source of truth. Vault inherits.',
    items: [
      { title: 'TOTP (RFC 6238)', body: "Add a TOTP factor on the vault itself. Works with Google Authenticator, Authy, 1Password, anything compliant.", status: 'shipping', icon: KeyRound },
      { title: 'WebAuthn / passkeys', body: 'Hardware key (YubiKey, Titan) and platform passkey support. Phishing-resistant by construction.', status: 'shipping', icon: Shield },
      { title: 'SAML SSO', body: 'Bounce login through your IdP — Okta, Azure AD, Google Workspace, OneLogin. Keeps the vault inside your existing access policies.', status: 'beta', icon: Users },
      { title: 'SCIM 2.0 user provisioning', body: 'Auto-provision and deprovision users from your IdP. Off-boarding revokes vault access immediately.', status: 'roadmap', icon: Users },
    ],
  },
  {
    id: 'data',
    title: 'Data in + out',
    sub: 'No lock-in. Your secrets, your data, on your terms.',
    items: [
      { title: 'Import: 1Password (1pif/1pux)', body: 'Bring vaults across in one upload. Categories, custom fields, attachments, all preserved.', status: 'shipping', icon: FileUp },
      { title: 'Import: LastPass', body: 'CSV import with auto-detection of categories. Test it locally before the cutover.', status: 'shipping', icon: FileUp },
      { title: 'Import: Bitwarden + KeePass', body: 'JSON / KDBX import. Same field model — minimal mapping needed.', status: 'shipping', icon: FileUp },
      { title: 'Export: encrypted JSON or plain CSV', body: 'Pull your data anytime. Plain export shows you exactly what we hold.', status: 'shipping', icon: Database },
    ],
  },
  {
    id: 'ops',
    title: 'Audit + observability',
    sub: 'Wire Vault into the rest of your security stack.',
    items: [
      { title: 'Audit-log export', body: 'Stream the append-only audit log to your SIEM (Splunk, Datadog, Sumo, ELK).', status: 'shipping', icon: Database },
      { title: 'Webhooks', body: 'Get notified on item creation, share, unshare, MFA events. Push to Slack, PagerDuty, custom endpoints.', status: 'beta', icon: Code },
      { title: 'Hash-chained audit log', body: 'Tamper-evident log — any modification breaks the chain. Target for next quarter.', status: 'roadmap', icon: Shield },
    ],
  },
  {
    id: 'devs',
    title: 'CLI + API',
    sub: 'Programmatic access for ops teams and CI pipelines.',
    items: [
      { title: 'REST API', body: 'Public API for items, orgs, sharing. JWT-authed. OpenAPI spec in the repo.', status: 'shipping', icon: Code },
      { title: 'CLI', body: 'centilio vault — script secret retrieval into CI/CD without baking credentials into images.', status: 'beta', icon: Terminal },
      { title: 'Terraform provider', body: 'Manage orgs, policies, and shared items as code. Roadmap.', status: 'roadmap', icon: Code },
    ],
  },
]

const STATUS_STYLES: Record<string, string> = {
  shipping: 'bg-green-500/10 text-green-400 border-green-500/30',
  beta:     'bg-amber-500/10 text-amber-400 border-amber-500/30',
  roadmap:  'bg-gray-500/10 text-gray-400 border-gray-500/30',
}

const STATUS_LABEL: Record<string, string> = {
  shipping: 'Shipping',
  beta:     'Beta',
  roadmap:  'Roadmap',
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <VaultHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <GradientOrbs />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Eyebrow icon={Globe}>Integrations</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-6 mb-6">
            Plugs into the stack
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
              you already run.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Centilio Vault is built to fit into existing security and identity
            infrastructure — not replace it. Here&apos;s every surface we expose,
            and where each one is in our roadmap.
          </p>
        </div>
      </section>

      {/* GROUPS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18]">
        <div className="container mx-auto max-w-6xl space-y-16 md:space-y-24">
          {GROUPS.map((g) => (
            <div key={g.id}>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{g.title}</h2>
                <p className="text-gray-400 max-w-2xl">{g.sub}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {g.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-[#6366F1]/40 hover:bg-white/[0.05] transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4338CA] shadow-md shadow-[#6366F1]/30">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
                            <span className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[item.status]}`}>
                              {STATUS_LABEL[item.status]}
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-gray-400 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP — Need a custom integration? */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6366F1] rounded-full opacity-30 blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Need an integration we don&apos;t list?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We add real customer-driven integrations. If you need SCIM with a specific IdP, a custom audit-log exporter, or a Terraform resource we don&apos;t expose yet — tell us. Most additions ship in a sprint.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <PrimaryButton href="/contactpage">
                  Request an integration
                </PrimaryButton>
                <SecondaryButton href="https://github.com/CentilioTech/vault/issues" external icon={Github}>
                  Open an issue
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ship Vault on your terms."
        sub="Self-host, host with us, or run a hybrid. Same code, same security model, same set of integrations."
      />
      <VaultFooter />
    </div>
  )
}
