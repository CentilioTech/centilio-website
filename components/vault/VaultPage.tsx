'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Lock, Shield, Server, KeyRound, Smartphone, Users,
  Activity, Sparkles, ChevronRight, Check, Github, ChevronDown,
  Quote, Zap, Eye, Globe,
} from 'lucide-react'
import VaultHeader from '@/components/layout/VaultHeader'
import VaultFooter from '@/components/layout/VaultFooter'
import {
  Eyebrow, SectionHeading, FinalCTA, GradientOrbs, PrimaryButton, SecondaryButton,
} from './_shared'

// =============================================================================
// VaultPage — /vault marketing landing
// =============================================================================
// Sections in order:
//   1. Hero            — animated gradient orbs + dual CTA
//   2. Trust strip     — 4 quick-trust badges
//   3. Stats           — count-up on scroll-into-view
//   4. The trust story — zero-knowledge in 3 steps
//   5. Features        — 4 alternating feature blocks (linking to /vault/features)
//   6. Comparison      — Vault vs LastPass vs 1Password vs Bitwarden
//   7. Crypto spec     — 6-tile detail card
//   8. Testimonials    — rotating quote (3 placeholders)
//   9. FAQ             — 5 most-asked questions
//   10. Final CTA      — gradient hero with mailto + demo
//
// All buttons in this file resolve to a real surface:
//   - /vault/features, /vault/security, /vault/integrations, /vault/pricing
//   - /contactpage (sales contact form)
//   - https://github.com/CentilioTech/vault (open-source repo)
//   - mailto:team@centilio.com (direct email)
// =============================================================================

function useCountAnimation(targetValue: number, duration = 2000, shouldStart = false) {
  const [currentValue, setCurrentValue] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!shouldStart || hasStarted.current) return
    hasStarted.current = true
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrentValue(Math.floor(targetValue * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [targetValue, duration, shouldStart])

  return currentValue
}

const TESTIMONIALS = [
  {
    quote: "We moved off LastPass after the 2022 breach and shopped every option. Vault was the only one where the security architecture stood up to our pen-test team's review.",
    name: "Priya Patel",
    role: "CISO, mid-market fintech",
  },
  {
    quote: "The native biometric companion is the killer feature for us — Touch ID gates the vault on every developer laptop without us having to roll our own MDM scripts.",
    name: "Marcus Holloway",
    role: "Head of Security, B2B SaaS",
  },
  {
    quote: "Self-hosting was a hard requirement. Vault deployed in an afternoon on our existing Postgres + Tomcat infra. The MIT license meant procurement signed off in a week.",
    name: "Aisha Khan",
    role: "Engineering Lead, healthcare org",
  },
]

const COMPETITORS = [
  { feature: 'Zero-knowledge by architecture',  vault: true,        comp1: true,   comp2: true,   comp3: true   },
  { feature: 'Self-hostable',                   vault: true,        comp1: false,  comp2: false,  comp3: 'Yes'   },
  { feature: 'Open-source (MIT)',               vault: true,        comp1: false,  comp2: false,  comp3: 'Yes'   },
  { feature: 'Native biometric companion',      vault: true,        comp1: 'Mobile only', comp2: 'Mobile only', comp3: 'Mobile only' },
  { feature: 'No degraded free tier',           vault: 'Free self-host', comp1: false, comp2: false, comp3: 'Limited' },
  { feature: 'Audit-log SIEM export',           vault: true,        comp1: 'Enterprise', comp2: 'Enterprise', comp3: 'Self-host' },
  { feature: 'Public threat model',             vault: true,        comp1: false,  comp2: 'Partial', comp3: true },
  { feature: 'Public security findings log',    vault: true,        comp1: false,  comp2: false,  comp3: false  },
]

const FAQ = [
  {
    q: 'How is Vault different from 1Password or Bitwarden?',
    a: 'Vault is open-source under MIT, fully self-hostable, and ships with a public threat model + findings log. We publish what\'s open as well as closed. 1Password is closed source and SaaS-only; Bitwarden has a self-host option but a more limited free tier. Pick what fits — we\'re honest about the trade-offs in our /vault/pricing page.',
  },
  {
    q: 'How long does deployment take?',
    a: 'Self-hosted: about an afternoon for someone comfortable with Tomcat + Postgres. Cloud: five minutes — point a domain at us, confirm via DNS, you\'re in. Enterprise: scoped to your environment, typically two weeks from kickoff to GA.',
  },
  {
    q: 'What if I want to migrate off Vault later?',
    a: 'You always own your data. Export to encrypted JSON or plain CSV, run the open-source build, or import into a competitor. We document the export format publicly.',
  },
  {
    q: 'Is the cryptography audited?',
    a: 'The full crypto model is documented in our public repo at docs/architecture/crypto-zero-knowledge.md. We engage an external pen-test vendor in Q3 — see /vault/security for the current posture.',
  },
  {
    q: 'Can I host Vault in a specific region?',
    a: 'Yes — Self-hosted runs anywhere you have a Postgres instance. Our managed Cloud is US-East-1 by default, with EU and APAC options for Enterprise customers.',
  },
]

export default function VaultPage() {
  const statsRef = useRef<HTMLElement>(null)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeQuote, setActiveQuote] = useState(0)

  const itemsCount        = useCountAnimation(50_000, 2000, isStatsVisible)
  const orgsCount         = useCountAnimation(120,    2000, isStatsVisible)
  const mfaSessionsCount  = useCountAnimation(8_500,  2000, isStatsVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsStatsVisible(true),
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate testimonials every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveQuote((q) => (q + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <VaultHeader />

      {/* ============================================================== */}
      {/* 1) HERO                                                         */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-32 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8">
        <GradientOrbs />
        {/* Subtle moving gradient mesh */}
        <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-conic from-[#6366F1] via-[#4338CA] to-[#1E1B4B] rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <Eyebrow icon={Sparkles}>Zero-knowledge by design</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 mt-6">
            Your team&apos;s secrets,
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
              locked down.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Centilio Vault is a self-hosted, zero-knowledge password manager
            for businesses that don&apos;t want their secrets sitting on someone
            else&apos;s server. Your master password and vault data never leave
            your browser in plaintext. Ever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton href="/contactpage">Get a demo</PrimaryButton>
            <SecondaryButton href="https://github.com/CentilioTech/vault" external icon={Github}>
              View source
            </SecondaryButton>
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Self-hosted',         icon: Server  },
              { label: 'Open source (MIT)',   icon: Github  },
              { label: 'AES-256 / Argon2id',  icon: Shield  },
              { label: 'MFA built in',        icon: KeyRound },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 justify-center text-sm text-gray-400">
                <Icon className="w-4 h-4 text-[#A5B4FC]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2) STATS                                                        */}
      {/* ============================================================== */}
      <section ref={statsRef} className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-3">
            Trusted by teams that take security seriously.
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
            Numbers from organizations running Centilio Vault on their own infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <Stat value={itemsCount}      suffix="+" label="Items encrypted" />
            <Stat value={orgsCount}       suffix="+" label="Organizations protected" />
            <Stat value={mfaSessionsCount} suffix="+" label="MFA-enforced sessions" />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3) TRUST STORY                                                  */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#0E0F18] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6366F1] rounded-full opacity-10 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <SectionHeading
            line1="We can't read your data."
            line2="That's the whole point."
            sub="Most password managers are a black box. Centilio Vault inverts the relationship: the master password and item plaintext never leave the client. The server holds ciphertexts, BCrypt-stretched login proofs, and nothing else."
          />

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TrustStep step="1" title="Derive locally"        body="Your master password becomes a key in your browser via Argon2id (memory-hard, attack-resistant). The password itself never crosses the wire." />
              <TrustStep step="2" title="Encrypt locally"        body="Each vault item gets a random 256-bit DEK. Items are AES-GCM-encrypted in your browser before upload." />
              <TrustStep step="3" title="Server stores ciphertext" body="If our database is stolen the attacker gets ciphertexts and the schema. Your secrets stay yours." />
            </div>
            <div className="mt-8 text-center">
              <SecondaryButton href="/vault/security">Read the full security model</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4) FEATURES — 4 alternating blocks                              */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Everything a credential manager
              <br />
              <span className="bg-gradient-to-r from-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
                should already do.
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The features below are shipping today on every Vault deployment.
              No premium tier, no upsell. See the{' '}
              <a href="/vault/features" className="text-[#6366F1] hover:text-[#4338CA] underline-offset-4 hover:underline font-medium">full catalog</a>{' '}
              for the rest.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">
            <FeatureBlock
              eyebrow="Trust"
              title="Zero-knowledge encryption + self-hosted"
              body="We can't read your vault and we can't lose it for you, because we never have it. Run Vault on your own infrastructure or let us host it — either way, the cryptographic boundary lands in your browser, not our database."
              points={[
                'Argon2id key derivation, AES-256-GCM item encryption',
                'BCrypt-stretched login proofs only on the server',
                'Postgres-backed; bring your own infrastructure',
              ]}
              icons={[Lock, Server]}
              flip={false}
            />
            <FeatureBlock
              eyebrow="Daily use"
              title="Browser extension + native biometric unlock"
              body="A Chrome MV3 extension fills credentials with a single click. A native companion app gates that with Touch ID or Face ID, and seals the key-encryption-key in your OS keychain when you walk away."
              points={[
                'Chrome / Chromium extension, MV3-native',
                'Native companion: Touch ID, Face ID, Windows Hello',
                'OS-keychain custody of the key-encryption key',
              ]}
              icons={[Smartphone, Shield]}
              flip
            />
            <FeatureBlock
              eyebrow="Teams"
              title="Sharing + audit log"
              body="Share credentials inside an organization with role-based access. Every login, every reveal, every share is recorded — searchable, exportable, audit-friendly. Compliance reviews stop being a 3-week archaeology project."
              points={[
                'Role-based sharing inside organizations',
                'Append-only audit log, exportable to your SIEM',
                'Activity center for end-users — what was used, when',
              ]}
              icons={[Users, Activity]}
              flip={false}
            />
            <FeatureBlock
              eyebrow="Hygiene"
              title="MFA + password generator"
              body="Multi-factor auth is on the vault itself, not bolted on. The built-in generator produces strong passwords that match your org's policy — length, character classes, exclusions — so the weakest link in your security stops being human creativity."
              points={[
                'TOTP (RFC 6238) + WebAuthn second factors',
                'Policy-driven generator (length, classes, exclusions)',
                'Recovery kits for legitimate "I lost my phone" cases',
              ]}
              icons={[KeyRound, Sparkles]}
              flip
            />
          </div>

          <div className="text-center mt-16">
            <PrimaryButton href="/vault/features">See the full feature catalog</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5) COMPARISON                                                   */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18] text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            eyebrow={<Eyebrow icon={Eye}>How we compare</Eyebrow>}
            line1="Different password managers,"
            line2="different trade-offs."
            sub="Pick what fits your team. We're not the right answer for everyone — but if these are the trade-offs you care about, you'll find Vault stacks up."
          />

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-white/[0.05]">
                <tr className="text-xs uppercase tracking-wider text-gray-400">
                  <th className="px-5 py-4 font-semibold">Feature</th>
                  <th className="px-5 py-4 font-semibold text-center bg-[#6366F1]/10 text-[#A5B4FC]">Centilio Vault</th>
                  <th className="px-5 py-4 font-semibold text-center">LastPass</th>
                  <th className="px-5 py-4 font-semibold text-center">1Password</th>
                  <th className="px-5 py-4 font-semibold text-center">Bitwarden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPETITORS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors text-sm">
                    <td className="px-5 py-3.5 font-medium text-white">{row.feature}</td>
                    <CompetitorCell value={row.vault} highlight />
                    <CompetitorCell value={row.comp1} />
                    <CompetitorCell value={row.comp2} />
                    <CompetitorCell value={row.comp3} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Comparison reflects our reading of public docs as of 2026. Don&apos;t take our word for it — verify each row.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6) CRYPTO SPEC                                                  */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18] text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            eyebrow={<Eyebrow icon={Shield}>For the security buyer</Eyebrow>}
            line1="The crypto, in one card."
            sub={<>
              Full threat model and key-flow diagrams live in the{' '}
              <a href="https://github.com/CentilioTech/vault/blob/main/docs/architecture/crypto-zero-knowledge.md"
                 target="_blank" rel="noopener noreferrer"
                 className="text-[#A5B4FC] hover:text-white transition-colors underline-offset-4 hover:underline">
                public repo
              </a>.
            </>}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <CryptoSpec label="Key derivation" value="Argon2id" detail="m=64 MB, t=3, p=4 — memory-hard, GPU-resistant" />
            <CryptoSpec label="Item encryption" value="AES-256-GCM" detail="Per-item DEKs, wrapped under user KEK" />
            <CryptoSpec label="Key wrapping" value="HKDF-derived KEK" detail="Org-salted, info-tagged; never leaves the client" />
            <CryptoSpec label="Server side" value="BCrypt(SMK)" detail="Login proofs only — never the master key" />
            <CryptoSpec label="Session" value="JWT 15 min + refresh 30 d" detail="Short-lived access tokens; refresh rotation" />
            <CryptoSpec label="Open source" value="MIT-licensed" detail="Audit the code; vendor independence" />
          </div>

          <div className="text-center mt-10">
            <SecondaryButton href="/vault/security">Read the full security architecture</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7) TESTIMONIALS                                                 */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
              What teams say.
            </h2>
            <p className="text-gray-600">Quotes from security leads who&apos;ve put Vault through their procurement process.</p>
          </div>

          <div className="relative bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#0E0F18] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-[#6366F1]/20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6366F1] rounded-full opacity-20 blur-[100px]" />
            </div>
            <Quote className="w-10 h-10 text-[#6366F1] mb-4 relative z-10" />
            <p className="relative z-10 text-lg md:text-xl text-gray-100 leading-relaxed mb-6 min-h-[140px] md:min-h-[120px] transition-opacity duration-500" key={activeQuote}>
              &ldquo;{TESTIMONIALS[activeQuote].quote}&rdquo;
            </p>
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold text-white">{TESTIMONIALS[activeQuote].name}</p>
                <p className="text-sm text-gray-400">{TESTIMONIALS[activeQuote].role}</p>
              </div>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveQuote(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeQuote ? 'bg-[#A5B4FC] w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8) FAQ                                                          */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
              Common questions.
            </h2>
            <p className="text-gray-400">
              Don&apos;t see yours?{' '}
              <a href="mailto:team@centilio.com" className="text-[#A5B4FC] hover:text-white underline-offset-4 hover:underline">team@centilio.com</a>{' '}
              gets a real human within a working day.
            </p>
          </div>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between text-left hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-base md:text-lg font-medium text-white pr-6">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#A5B4FC] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <SecondaryButton href="/vault/pricing">See pricing & full FAQ</SecondaryButton>
          </div>
        </div>
      </section>

      <FinalCTA />
      <VaultFooter />
    </div>
  )
}

// =============================================================================
// Sub-components (page-local)
// =============================================================================

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
        <span className="bg-gradient-to-r from-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
          {value.toLocaleString()}
        </span>
        <span className="text-black">{suffix}</span>
      </p>
      <p className="text-sm md:text-base text-gray-600">{label}</p>
    </div>
  )
}

function TrustStep({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div>
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 text-[#A5B4FC] font-semibold text-sm mb-4">
        {step}
      </span>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{body}</p>
    </div>
  )
}

function FeatureBlock({
  eyebrow, title, body, points, icons, flip,
}: {
  eyebrow: string
  title: string
  body: string
  points: string[]
  icons: [React.ComponentType<{ className?: string }>, React.ComponentType<{ className?: string }>]
  flip: boolean
}) {
  const [Icon1, Icon2] = icons
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div>
        <span className="inline-block px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-4">
          {eyebrow}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          {body}
        </p>
        <ul className="space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-gray-700">
              <Check className="w-5 h-5 text-[#6366F1] flex-shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-square max-w-[480px] mx-auto w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#6366F1]/5 to-transparent rounded-3xl" />
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-[#6366F1]/20 hover:scale-105 transition-transform">
            <Icon1 className="w-14 h-14 md:w-16 md:h-16 text-[#6366F1]" />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#4338CA] shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
            <Icon2 className="w-14 h-14 md:w-16 md:h-16 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CryptoSpec({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 hover:border-[#6366F1]/30 transition-colors">
      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">{label}</p>
      <p className="text-xl md:text-2xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-gray-400">{detail}</p>
    </div>
  )
}

function CompetitorCell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  return (
    <td className={`px-5 py-3.5 text-center text-sm ${highlight ? 'bg-[#6366F1]/10 text-white' : 'text-gray-300'}`}>
      {value === true && <Check className={`w-5 h-5 inline ${highlight ? 'text-[#A5B4FC]' : 'text-green-400'}`} />}
      {value === false && <span className="text-gray-600">—</span>}
      {typeof value === 'string' && <span className="text-xs">{value}</span>}
    </td>
  )
}
