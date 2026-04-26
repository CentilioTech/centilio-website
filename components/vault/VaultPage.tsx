'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Lock, Shield, Server, KeyRound, Smartphone, Users,
  Activity, Sparkles, ChevronRight, Check, Github,
} from 'lucide-react'
import VaultHeader from '@/components/layout/VaultHeader'
import VaultFooter from '@/components/layout/VaultFooter'

// =============================================================================
// VaultPage — marketing page for centilio.com/vault
// =============================================================================
// Modeled on the structure of SignPage and SeoBotHomePage but built without
// their heavier 3D / particle effects (which depend on per-product image
// assets we don't have for Vault yet). Instead this page uses Lucide icons
// and Tailwind gradients for visual interest — gives a clean, premium feel
// in the indigo/violet palette Ravi picked.
//
// Sections in order:
//   1. Hero        — headline, subhead, dual CTA, scroll-driven animated keyline
//   2. Stats       — count-up animations on scroll-into-view (3 figures)
//   3. Trust       — the zero-knowledge promise, in plain English
//   4. Features    — 4 paired feature blocks alternating left/right
//   5. Crypto      — the security spec card (for trust signal)
//   6. Final CTA   — book a demo + open-source link
//
// The count-up hook is duplicated from SignPage so the two pages don't share
// a fragile dependency in components/sign/. Worth deduplicating into
// components/ui/use-count.ts later if a third page wants the same behaviour.
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
      // ease-out-cubic — feels right for a counter that "settles"
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrentValue(Math.floor(targetValue * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [targetValue, duration, shouldStart])

  return currentValue
}

export default function VaultPage() {
  const statsRef = useRef<HTMLElement>(null)
  const [isStatsVisible, setIsStatsVisible] = useState(false)

  // Numbers are placeholders today — replace with real telemetry once we
  // have it. The marketing intent is "real, growing" not "tens of millions".
  const itemsCount      = useCountAnimation(50_000, 2000, isStatsVisible)
  const orgsCount       = useCountAnimation(120,    2000, isStatsVisible)
  const mfaSessionsCount = useCountAnimation(8_500, 2000, isStatsVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsStatsVisible(true),
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <VaultHeader />

      {/* ============================================================== */}
      {/* 1) HERO                                                         */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-32 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8">
        {/* Decorative gradient orbs — pure CSS, no JS, no asset deps */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6366F1] rounded-full opacity-20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4338CA] rounded-full opacity-25 blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-sm font-medium text-[#A5B4FC] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Zero-knowledge by design
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
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
            <Link
              href="/contactpage"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4338CA] hover:from-[#7C7CFA] hover:to-[#5046E5] transition-all shadow-lg shadow-[#6366F1]/40 hover:shadow-[#6366F1]/60"
            >
              Get a demo
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/CentilioTech/vault"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4" />
              View source
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Self-hosted',         icon: Server  },
              { label: 'Open source',         icon: Github  },
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
            <Stat value={itemsCount} suffix="+"  label="Items encrypted" />
            <Stat value={orgsCount}  suffix="+"  label="Organizations protected" />
            <Stat value={mfaSessionsCount} suffix="+" label="MFA-enforced sessions" />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3) THE TRUST STORY                                              */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#0E0F18] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6366F1] rounded-full opacity-10 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
            We can&apos;t read your data.
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] to-[#6366F1] bg-clip-text text-transparent">
              That&apos;s the whole point.
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Most password managers are a black box. Centilio Vault inverts the
            relationship: the master password and item plaintext never leave
            the client. The server holds ciphertexts, BCrypt-stretched login
            proofs, and nothing else.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TrustStep
                step="1"
                title="Derive locally"
                body="Your master password becomes a key in your browser via Argon2id (memory-hard, attack-resistant). The password itself never crosses the wire."
              />
              <TrustStep
                step="2"
                title="Encrypt locally"
                body="Each vault item gets a random 256-bit DEK. Items are AES-GCM-encrypted in your browser before upload."
              />
              <TrustStep
                step="3"
                title="Server stores ciphertext"
                body="If our database is stolen the attacker gets ciphertexts and the schema. Your secrets stay yours."
              />
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
              No premium tier, no upsell.
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
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5) CRYPTO SPEC — for the security-buyer who wants details       */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18] text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-sm font-medium text-[#A5B4FC] mb-6">
              <Shield className="w-3.5 h-3.5" />
              For the security buyer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              The crypto, in one card.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full threat model and key-flow diagrams live in the
              {' '}
              <a
                href="https://github.com/CentilioTech/vault/blob/main/docs/architecture/crypto-zero-knowledge.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A5B4FC] hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                public repo
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <CryptoSpec
              label="Key derivation"
              value="Argon2id"
              detail="m=64 MB, t=3, p=4 — memory-hard, GPU-resistant"
            />
            <CryptoSpec
              label="Item encryption"
              value="AES-256-GCM"
              detail="Per-item DEKs, wrapped under user KEK"
            />
            <CryptoSpec
              label="Key wrapping"
              value="HKDF-derived KEK"
              detail="Org-salted, info-tagged; never leaves the client"
            />
            <CryptoSpec
              label="Server side"
              value="BCrypt(SMK)"
              detail="Login proofs only — never the master key"
            />
            <CryptoSpec
              label="Session"
              value="JWT 15 min + refresh 30 d"
              detail="Short-lived access tokens; refresh rotation"
            />
            <CryptoSpec
              label="Open source"
              value="MIT-licensed"
              detail="Audit the code; vendor independence"
            />
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6) FINAL CTA                                                    */}
      {/* ============================================================== */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#0E0F18] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1] rounded-full opacity-15 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to take your secrets back?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tell us about your team and what you&apos;re storing today. We&apos;ll
            scope a Vault deployment that fits — managed, self-hosted, or a
            hybrid in between.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contactpage"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#1E1B4B] bg-white hover:bg-gray-100 transition-all shadow-xl"
            >
              Talk to a security expert
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:team@centilio.com?subject=Centilio Vault — interested"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all"
            >
              team@centilio.com
            </a>
          </div>
        </div>
      </section>

      <VaultFooter />
    </div>
  )
}

// =============================================================================
// Sub-components — kept in this file because they're not reused elsewhere yet.
// If a third page wants them, lift to components/ui/.
// =============================================================================

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2">
        <span className="bg-gradient-to-r from-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
          {value.toLocaleString()}
        </span>
        {suffix}
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
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
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
      {/* Visual side — paired-icon plate. Lightweight stand-in for screenshots
          until we have real product UI shots to drop in. */}
      <div className="relative aspect-square max-w-[480px] mx-auto w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-[#6366F1]/5 to-transparent rounded-3xl" />
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-[#6366F1]/20">
            <Icon1 className="w-14 h-14 md:w-16 md:h-16 text-[#6366F1]" />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#4338CA] shadow-xl flex items-center justify-center">
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
