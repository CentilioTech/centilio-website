'use client'

import {
  Shield, Lock, KeyRound, Eye, Server, FileSearch,
  GitBranch, Github, Mail, AlertCircle, CheckCircle2, BookOpen,
} from 'lucide-react'
import VaultHeader from '@/components/layout/VaultHeader'
import VaultFooter from '@/components/layout/VaultFooter'
import {
  Eyebrow, SectionHeading, FinalCTA, GradientOrbs, PrimaryButton, SecondaryButton,
} from './_shared'

// =============================================================================
// SecurityPage — /vault/security
// =============================================================================
// The security page is what a CTO/CISO sees before saying yes to a credentials
// vendor. Sourced from:
//   - vault/docs/architecture/crypto-zero-knowledge.md (key flow)
//   - vault/docs/architecture/threat-model.md (crown jewels, adversaries)
//   - vault/docs/security/posture.md (closed/open findings)
// Honest about what's open: the public posture file already lists open items
// publicly so we mirror that here. Buyers respect that more than vague "we're
// SOC 2 ready" claims.
// =============================================================================

const KEY_FLOW = [
  { step: '1', title: 'Master password',  body: 'Stays in the user\'s browser memory. Never sent across the wire. Never written to disk.' },
  { step: '2', title: 'Argon2id KDF',     body: 'Memory-hard key derivation (m=64 MB, t=3, p=4) turns the master password into a Master Key. GPU- and ASIC-resistant.' },
  { step: '3', title: 'HKDF → KEK',       body: 'HKDF-SHA256 with org salt + info-tag derives a Key-Encryption-Key, also client-only.' },
  { step: '4', title: 'AES-GCM-256 wrap', body: 'Each item gets a random 256-bit DEK. Items are AES-GCM-encrypted with the DEK; the DEK is wrapped under the KEK.' },
  { step: '5', title: 'Server stores ct', body: 'Server receives ciphertext + wrapped DEK. Steals nothing useful if breached.' },
]

const CROWN_JEWELS = [
  { asset: 'Master password',         where: 'Client RAM only',        defense: 'Never sent; KDF transformation' },
  { asset: 'Per-item DEKs',           where: 'Client RAM (transient)', defense: 'Wrapped under KEK before persisting' },
  { asset: 'Wrapped DEKs at rest',    where: 'Postgres ciphers table', defense: "KEK is client-only; server can't unwrap" },
  { asset: 'Login proofs',            where: 'BCrypt-hashed in DB',    defense: 'BCrypt + login rate-limit' },
  { asset: 'JWT signing secret',      where: 'Server env var',         defense: 'Not in repo; rotation playbook' },
  { asset: 'Audit log',               where: 'Append-only DB table',   defense: 'Service-role-only writes; hash-chain target' },
]

const POSTURE_CLOSED = [
  'Auth filter bypasses (extension whitelisting) — 6 vectors closed',
  'CORS wildcard for chrome-extension://* — closed',
  'Hardcoded JWT fallback secret — closed',
  'TRACE-level logging leaking SQL params — closed',
  'application{,-dev}.properties shipped to prod — closed',
  'hbm2ddl.auto=update silently rewriting schema — closed (Hibernate now in validate mode)',
  '6 React dangerouslySetInnerHTML XSS sites — closed',
  'AdminToolServe column-name SQL injection — closed',
  'MySQL driver hardcoded in PG-only DbConnection — closed',
  '/user/public-key user enumeration — closed',
]

const POSTURE_OPEN = [
  { item: 'PBKDF2-100k → Argon2id KDF', detail: 'Migration in flight. Argon2id is the target; PBKDF2 is current. Rotation runbook exists.' },
  { item: 'TOTP secrets unencrypted at rest', detail: 'Tracked. Encrypting under user KEK in next quarter.' },
  { item: 'Criteria value-injection SQLi (R&D)', detail: 'Identified, fix queued. Not user-reachable today.' },
  { item: 'No JUnit harness, near-zero unit tests', detail: 'Test scaffold landing this quarter. Smoke tests in CI today.' },
  { item: 'No external pen test on record', detail: 'Vendor-gated. Engaging Q3 for first formal pen test.' },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <VaultHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <GradientOrbs />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Eyebrow icon={Shield}>Security &amp; cryptographic posture</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-6 mb-6">
            Built so the worst-case
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
              isn&apos;t catastrophic.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Centilio Vault is zero-knowledge by architecture, not by marketing.
            If our database is stolen, the attacker walks away with ciphertexts
            and a schema. Your secrets stay yours.
          </p>
        </div>
      </section>

      {/* KEY FLOW */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18] relative">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={<Eyebrow icon={KeyRound}>How keys flow</Eyebrow>}
            line1="Five steps."
            line2="Four of them happen in your browser."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 relative">
            {KEY_FLOW.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 md:p-6 h-full hover:border-[#6366F1]/40 transition-colors">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 text-[#A5B4FC] font-semibold text-sm mb-3">
                    {s.step}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
                </div>
                {i < KEY_FLOW.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 text-[#6366F1]/40 text-xl pointer-events-none" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Full diagram in{' '}
            <a
              href="https://github.com/CentilioTech/vault/blob/main/docs/architecture/crypto-zero-knowledge.md"
              target="_blank" rel="noopener noreferrer"
              className="text-[#A5B4FC] hover:text-white underline-offset-4 hover:underline"
            >
              docs/architecture/crypto-zero-knowledge.md
            </a>.
          </p>
        </div>
      </section>

      {/* CROWN JEWELS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-sm font-medium text-[#4338CA]">
              <Lock className="w-3.5 h-3.5" />
              The crown jewels
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-6 mb-4">
              What lives where —
              <br />
              <span className="bg-gradient-to-r from-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
                and what protects it.
              </span>
            </h2>
            <p className="text-gray-600">From our public threat model. No hand-waving.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr className="text-xs uppercase tracking-wider text-gray-600">
                  <th className="px-5 py-4 font-semibold">Asset</th>
                  <th className="px-5 py-4 font-semibold">Where it lives</th>
                  <th className="px-5 py-4 font-semibold">What protects it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {CROWN_JEWELS.map((row) => (
                  <tr key={row.asset} className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-black">{row.asset}</td>
                    <td className="px-5 py-4 text-gray-700">{row.where}</td>
                    <td className="px-5 py-4 text-gray-700">{row.defense}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* POSTURE — closed and open */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18]">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={<Eyebrow icon={FileSearch}>Posture, in public</Eyebrow>}
            line1="What we&apos;ve fixed."
            line2="What&apos;s still on the list."
            sub={<>We publish what&apos;s open as well as what&apos;s closed. Vague claims help nobody. Full ledger in{' '}
              <a href="https://github.com/CentilioTech/vault/blob/main/docs/security/findings-log.md"
                 target="_blank" rel="noopener noreferrer"
                 className="text-[#A5B4FC] hover:text-white underline-offset-4 hover:underline">
                docs/security/findings-log.md
              </a>.</>}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Closed */}
            <div className="bg-white/[0.03] border border-green-500/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/40">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">Closed (recent)</h3>
              </div>
              <ul className="space-y-3">
                {POSTURE_CLOSED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Open */}
            <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">Open + tracked</h3>
              </div>
              <ul className="space-y-4">
                {POSTURE_OPEN.map((row) => (
                  <li key={row.item}>
                    <p className="text-sm md:text-base font-semibold text-white mb-1">{row.item}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{row.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLOSURE + RESOURCES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Found something? Tell us.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We respond to security reports within 48 hours and credit
              discoverers in our public CHANGELOG.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ResourceCard
              icon={Mail}
              title="Disclose privately"
              body="security@centilio.com — PGP fingerprint in SECURITY.md."
              href="mailto:security@centilio.com"
              external
              cta="Email"
            />
            <ResourceCard
              icon={Github}
              title="Read the source"
              body="Vault is MIT-licensed. Read the code, run the build, audit it yourself."
              href="https://github.com/CentilioTech/vault"
              external
              cta="View on GitHub"
            />
            <ResourceCard
              icon={BookOpen}
              title="Threat model + posture"
              body="Public docs: threat-model.md, posture.md, findings-log.md."
              href="https://github.com/CentilioTech/vault/tree/main/docs/security"
              external
              cta="Open docs"
            />
          </div>
        </div>
      </section>

      <FinalCTA
        title="Bring your security review."
        sub="Send us your standard vendor questionnaire. We answer it, share our threat model, and walk your team through the architecture. Honest answers, in writing."
      />
      <VaultFooter />
    </div>
  )
}

function ResourceCard({
  icon: Icon, title, body, href, external, cta,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
  href: string
  external?: boolean
  cta: string
}) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-[#6366F1]/40 hover:shadow-md transition-all">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/20 mb-4">
        <Icon className="w-5 h-5 text-[#4338CA]" />
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{body}</p>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="inline-flex items-center gap-1 text-sm font-semibold text-[#4338CA] hover:text-[#6366F1] transition-colors"
      >
        {cta} →
      </a>
    </div>
  )
}
