'use client'

import { useState } from 'react'
import {
  Lock, Shield, KeyRound, Users, Activity, Smartphone, Server,
  Sparkles, RefreshCw, FileSearch, FileUp, Building2, UserCog,
  LifeBuoy, Globe, ShieldCheck, ScanLine, Database, Eye,
} from 'lucide-react'
import VaultHeader from '@/components/layout/VaultHeader'
import VaultFooter from '@/components/layout/VaultFooter'
import {
  Eyebrow, SectionHeading, FinalCTA, GradientOrbs,
} from './_shared'

// =============================================================================
// FeaturesPage — /vault/features
// =============================================================================
// Catalog of every Centilio Vault feature. Sourced from the Vault repo's
// docs/features/ index (17 features) plus the architecture overview. Grouped
// into 5 buckets so the page reads as a story instead of an alphabetical
// list:
//   1. Daily use      — what end-users touch every day
//   2. Team workflow  — what makes Vault work for organizations
//   3. Security       — defenses baked into the product
//   4. Admin / ops    — what admins need (export, recovery, audit)
//   5. Distribution   — extension, native companion, web app
//
// Filterable by category via in-page tabs (no router round-trip).
// =============================================================================

type Cat = 'all' | 'daily' | 'teams' | 'security' | 'admin' | 'apps'

interface Feature {
  id: string
  category: Exclude<Cat, 'all'>
  title: string
  body: string
  icon: React.ComponentType<{ className?: string }>
}

const FEATURES: Feature[] = [
  // ---------- DAILY USE ----------
  {
    id: 'vault-items',
    category: 'daily',
    title: 'Vault items (ciphers)',
    body: 'Logins, secure notes, cards, identities, custom fields. Each item is encrypted client-side under its own per-item DEK before it ever touches the server.',
    icon: Lock,
  },
  {
    id: 'password-generator',
    category: 'daily',
    title: 'Password generator',
    body: 'Policy-driven generator with length, character classes and exclusion rules. Generate per-site or per-org passwords that pass your compliance checks.',
    icon: Sparkles,
  },
  {
    id: 'favicon',
    category: 'daily',
    title: 'Auto favicon detection',
    body: 'Vault items render the right brand mark automatically. Domain extraction + Google Favicon API gives you a recognizable list at a glance.',
    icon: ScanLine,
  },
  {
    id: 'chrome-extension',
    category: 'apps',
    title: 'Chrome extension',
    body: 'MV3-native browser extension for one-click autofill and quick item search. Locked to your domain and gated by the native companion when present.',
    icon: Globe,
  },
  // ---------- TEAMS ----------
  {
    id: 'organizations',
    category: 'teams',
    title: 'Organizations',
    body: 'Multi-tenant from day one. Each org has its own KEK, its own audit trail, its own policies. Move users in and out without re-encrypting their personal vault.',
    icon: Building2,
  },
  {
    id: 'sharing',
    category: 'teams',
    title: 'Role-based sharing',
    body: 'Share credentials inside your org with viewer / editor / owner roles. Recipients receive a wrapped DEK they can unwrap with their own KEK — no plaintext over the wire.',
    icon: Users,
  },
  {
    id: 'activity-center',
    category: 'teams',
    title: 'Activity center',
    body: "Per-user feed of recent vault activity — what was used, when, from where. Catches anomalies before they become incidents.",
    icon: Activity,
  },
  {
    id: 'audit-log',
    category: 'admin',
    title: 'Audit log',
    body: 'Append-only event store. Every login, every reveal, every share. Hash-chained (target) and exportable to your SIEM. Compliance reviews stop being archaeology.',
    icon: FileSearch,
  },
  // ---------- SECURITY ----------
  {
    id: 'mfa',
    category: 'security',
    title: 'Multi-factor authentication',
    body: 'TOTP (RFC 6238) and WebAuthn second factors on the vault itself. Not bolted on as a paid upsell — built into the auth flow from day one.',
    icon: KeyRound,
  },
  {
    id: 'auth',
    category: 'security',
    title: 'Zero-knowledge auth',
    body: 'Master password becomes a key in your browser. Login proof is BCrypt-stretched. The server can verify you without ever knowing what you typed.',
    icon: ShieldCheck,
  },
  {
    id: 'recovery',
    category: 'security',
    title: 'Recovery kit',
    body: 'Generate a printable recovery kit at signup. Lose your phone, lose your laptop, lose your laptop again — your kit gets you back in.',
    icon: LifeBuoy,
  },
  {
    id: 'native-companion',
    category: 'apps',
    title: 'Native biometric companion',
    body: 'Desktop process for Touch ID, Face ID, Windows Hello. Seals the key-encryption-key in the OS keychain, releases it only on biometric.',
    icon: Smartphone,
  },
  // ---------- ADMIN / OPS ----------
  {
    id: 'admin-tools',
    category: 'admin',
    title: 'Admin tools',
    body: "Org-wide policies, member management, force-MFA, session revocation. Everything an IT lead needs to keep the vault clean.",
    icon: UserCog,
  },
  {
    id: 'import-export',
    category: 'admin',
    title: 'Import &amp; export',
    body: 'Bring credentials in from 1Password, LastPass, Bitwarden, KeePass. Export your data anytime — no lock-in, ever.',
    icon: FileUp,
  },
  {
    id: 'onboarding',
    category: 'admin',
    title: 'Onboarding flow',
    body: 'Self-serve signup with org provisioning. New users land in a guided flow that gets them productive in under five minutes.',
    icon: RefreshCw,
  },
  {
    id: 'settings-profile',
    category: 'admin',
    title: 'Settings &amp; profile',
    body: 'Per-user settings, MFA management, session list, device list, notification preferences, signing keys for shared items.',
    icon: Eye,
  },
  // ---------- APPS ----------
  {
    id: 'self-hosted',
    category: 'apps',
    title: 'Self-hosted by design',
    body: "Postgres-backed, runs on your own infrastructure. We don't have to be in the loop for anything sensitive. Open-source under MIT.",
    icon: Server,
  },
  {
    id: 'data-portability',
    category: 'admin',
    title: 'Bring your own data',
    body: "Single Postgres database. No proprietary blob format, no vendor cloud lock-in. The schema is documented and Flyway-migrated.",
    icon: Database,
  },
]

const TABS: { id: Cat; label: string }[] = [
  { id: 'all',      label: 'All features' },
  { id: 'daily',    label: 'Daily use' },
  { id: 'teams',    label: 'Teams' },
  { id: 'security', label: 'Security' },
  { id: 'admin',    label: 'Admin & ops' },
  { id: 'apps',     label: 'Apps' },
]

export default function FeaturesPage() {
  const [activeCat, setActiveCat] = useState<Cat>('all')
  const filtered = activeCat === 'all'
    ? FEATURES
    : FEATURES.filter((f) => f.category === activeCat)

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <VaultHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <GradientOrbs />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Eyebrow icon={Shield}>The full feature catalog</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-6 mb-6">
            Everything Centilio Vault
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
              ships with on day one.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No premium tier, no upsell, no enterprise-only flag. The {FEATURES.length} features
            below are in every Vault deployment — managed cloud or self-hosted.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#0E0F18]">
        <div className="container mx-auto max-w-7xl">
          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveCat(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCat === t.id
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#4338CA] text-white shadow-lg shadow-[#6366F1]/40'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-[#6366F1]/40 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((f) => (
              <FeatureCard key={f.id} feature={f} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 mt-12">No features in this category yet.</p>
          )}
        </div>
      </section>

      <FinalCTA
        title="Want a guided tour?"
        sub="Book 20 minutes with a Centilio engineer. We'll walk through any feature in detail and show you the running product."
      />
      <VaultFooter />
    </div>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-7 hover:border-[#6366F1]/40 hover:bg-white/[0.05] transition-all">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
           style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)' }} />

      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4338CA] shadow-md shadow-[#6366F1]/30 mb-5">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2.5">{feature.title}</h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.body }} />
      </div>
    </div>
  )
}
