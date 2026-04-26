'use client'

import { useState } from 'react'
import {
  Check, X, Server, Users, Building2, ChevronDown, Github, Sparkles,
} from 'lucide-react'
import VaultHeader from '@/components/layout/VaultHeader'
import VaultFooter from '@/components/layout/VaultFooter'
import {
  Eyebrow, SectionHeading, FinalCTA, GradientOrbs, PrimaryButton, SecondaryButton,
} from './_shared'

// =============================================================================
// PricingPage — /vault/pricing
// =============================================================================
// Three tiers. The numbers are an opening position — Ravi can edit any of
// them in this file (PRICING constant) and a redeploy reflects them.
// Everything below the table is decision-support: comparison table, FAQ.
// Every CTA goes to a real surface (mailto / /contactpage / GitHub).
// =============================================================================

interface Tier {
  id: 'self' | 'team' | 'enterprise'
  name: string
  tagline: string
  price: string
  cadence: string
  cta: { label: string; href: string; primary: boolean; external?: boolean }
  features: string[]
  highlight?: boolean
}

const PRICING: Tier[] = [
  {
    id: 'self',
    name: 'Self-hosted',
    tagline: 'Run it on your own infrastructure. Forever free, MIT-licensed.',
    price: 'Free',
    cadence: 'Open source — MIT',
    cta: { label: 'View on GitHub', href: 'https://github.com/CentilioTech/vault', primary: false, external: true },
    features: [
      'Full Vault, every feature',
      'Unlimited users, unlimited items',
      'You host, you own the data',
      'Community support (GitHub Issues)',
      'No telemetry, no phone-home',
      'Postgres + Tomcat 9 + Nginx',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    tagline: 'Hosted by us. Up and running in five minutes.',
    price: '$5',
    cadence: 'per user / month',
    cta: { label: 'Start a Team trial', href: '/contactpage', primary: true },
    features: [
      'Everything in Self-hosted',
      'We host, manage, back up, monitor',
      'Unlimited shared collections',
      'Web app, browser extension, native app',
      'Email + chat support (24h response SLA)',
      'Daily encrypted backups',
      'Audit-log retention: 90 days',
    ],
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: "When the procurement team wants a contract.",
    price: 'Custom',
    cadence: 'Annual contract',
    cta: { label: 'Talk to sales', href: '/contactpage', primary: false },
    features: [
      'Everything in Team',
      'SSO (SAML) + SCIM provisioning',
      'Dedicated cloud or on-prem deploy',
      'Custom data residency',
      'Audit-log retention: unlimited',
      'SIEM export + webhook integrations',
      'Named CSM, 4h response SLA',
      'Vendor security questionnaire pre-filled',
    ],
  },
]

// Comparison-table feature matrix. true = included, false = not, string = qualifier.
type Cell = boolean | string
const COMPARE: { feature: string; cells: [Cell, Cell, Cell] }[] = [
  { feature: 'Vault items + folders',           cells: ['Unlimited', 'Unlimited', 'Unlimited'] },
  { feature: 'Users',                            cells: ['Unlimited', 'Per seat', 'Unlimited'] },
  { feature: 'Browser extension + native app',   cells: [true, true, true] },
  { feature: 'Zero-knowledge encryption',        cells: [true, true, true] },
  { feature: 'MFA (TOTP + WebAuthn)',            cells: [true, true, true] },
  { feature: 'Password generator + policy',      cells: [true, true, true] },
  { feature: 'Team sharing + roles',             cells: [true, true, true] },
  { feature: 'Audit log',                        cells: ['DIY export', '90 days', 'Unlimited'] },
  { feature: 'Hosting + ops',                    cells: ['Self', 'Centilio cloud', 'Cloud or on-prem'] },
  { feature: 'Backups',                          cells: ['DIY', 'Daily, encrypted', 'Daily + DR'] },
  { feature: 'Support',                          cells: ['Community', 'Email + chat', 'Named CSM, 4h SLA'] },
  { feature: 'SAML SSO + SCIM',                  cells: [false, false, true] },
  { feature: 'SIEM export + webhooks',           cells: ['Beta build', 'Beta build', true] },
  { feature: 'Custom data residency',            cells: [true, false, true] },
  { feature: 'Vendor questionnaire pre-fill',    cells: [false, false, true] },
]

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is Centilio Vault really free if I self-host?',
    a: 'Yes. The full source is MIT-licensed. Run it forever, modify it, never pay us a cent. We make money from teams who would rather pay us than host Postgres themselves.',
  },
  {
    q: "Why isn't there a per-user free tier on the cloud?",
    a: "We've seen too many password managers degrade their free tier into a security risk. We'd rather charge $5/user and ship every feature than give you a worse free experience.",
  },
  {
    q: 'Can I move from Cloud to Self-hosted later (or back)?',
    a: 'Yes. Your encrypted vault data is portable in either direction. Export to encrypted JSON, stand up the open-source build, import. We document this in the deployment runbook.',
  },
  {
    q: 'How does Enterprise pricing work?',
    a: "Annual contract with seat-based licensing, custom for each deployment. Floor is around $15/user/month for SSO+SCIM and 4h-response SLA, but we'd rather scope a real proposal than quote a list price.",
  },
  {
    q: "What happens if Centilio shuts down?",
    a: "Self-hosted users keep running their copy of MIT-licensed software, forever. Cloud users get 90 days' notice + an encrypted export they can drop into the open-source build. We won't trap your secrets.",
  },
  {
    q: 'Do you offer a discount for nonprofits / open-source / education?',
    a: "Yes — 50% off the Team tier for verified nonprofits and open-source maintainers. Free for student organizations. Email team@centilio.com with proof.",
  },
  {
    q: 'Where does my data live?',
    a: "Self-hosted: wherever you put it. Team: AWS us-east-1 by default. Enterprise: pick your region or run on-prem. We document data residency in the security review packet.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: '30 days, no questions. Cancel within 30 days of paying us, you get refunded. After that, prorated against your remaining annual term.',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#0E0F18]">
      <VaultHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 px-4 sm:px-6 md:px-8">
        <GradientOrbs />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Eyebrow icon={Sparkles}>Pricing</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-6 mb-6">
            Honest pricing.
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
              No degraded free tier.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Self-host for free, run on our cloud for $5/user/month, or bring
            procurement to the table for Enterprise. Every tier ships every
            security feature.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {PRICING.map((tier) => <TierCard key={tier.id} tier={tier} />)}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            All prices in USD. Billed monthly or annually (10% discount for annual). Cancel anytime.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Side-by-side comparison
            </h2>
            <p className="text-gray-600">Every feature, every tier, no asterisks.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="bg-gray-50">
                <tr className="text-sm font-semibold text-gray-700">
                  <th className="px-5 py-4">Feature</th>
                  <th className="px-5 py-4 text-center">Self-hosted</th>
                  <th className="px-5 py-4 text-center bg-[#6366F1]/5">Team</th>
                  <th className="px-5 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COMPARE.map((row) => (
                  <tr key={row.feature} className="bg-white hover:bg-gray-50 transition-colors text-sm">
                    <td className="px-5 py-3.5 font-medium text-black">{row.feature}</td>
                    {row.cells.map((cell, i) => (
                      <td key={i} className={`px-5 py-3.5 text-center text-gray-700 ${i === 1 ? 'bg-[#6366F1]/5' : ''}`}>
                        {cell === true && <Check className="w-5 h-5 text-[#6366F1] inline" />}
                        {cell === false && <X className="w-5 h-5 text-gray-300 inline" />}
                        {typeof cell === 'string' && cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#0E0F18]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
              Things people ask before signing up.
            </h2>
            <p className="text-gray-400">
              Don&apos;t see your question?{' '}
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
        </div>
      </section>

      <FinalCTA
        title="Pick your tier. Or send questions first."
        sub="Procurement reviews, security questionnaires, custom contract terms — we've done all of it. Tell us where you are and we'll meet you there."
      />
      <VaultFooter />
    </div>
  )
}

function TierCard({ tier }: { tier: Tier }) {
  const isHighlight = tier.highlight
  return (
    <div
      className={`relative rounded-3xl p-7 md:p-8 flex flex-col ${
        isHighlight
          ? 'bg-gradient-to-br from-[#6366F1] to-[#4338CA] text-white shadow-2xl shadow-[#6366F1]/40 scale-100 lg:scale-105 z-10'
          : 'bg-white/[0.03] border border-white/10 text-white'
      }`}
    >
      {isHighlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-[#4338CA] text-xs font-bold uppercase tracking-wider shadow-lg">
          Most popular
        </div>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${isHighlight ? 'bg-white/20' : 'bg-[#6366F1]/20 border border-[#6366F1]/40'}`}>
          {tier.id === 'self'       && <Server className="w-5 h-5" />}
          {tier.id === 'team'       && <Users className="w-5 h-5" />}
          {tier.id === 'enterprise' && <Building2 className="w-5 h-5" />}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold">{tier.name}</h3>
      </div>
      <p className={`text-sm mb-6 ${isHighlight ? 'text-white/90' : 'text-gray-400'}`}>{tier.tagline}</p>
      <div className="mb-6">
        <p className="text-4xl md:text-5xl font-bold">{tier.price}</p>
        <p className={`text-sm mt-1 ${isHighlight ? 'text-white/80' : 'text-gray-500'}`}>{tier.cadence}</p>
      </div>
      <ul className={`space-y-3 mb-8 flex-1 ${isHighlight ? 'text-white/95' : 'text-gray-300'}`}>
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm md:text-base">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlight ? 'text-white' : 'text-[#A5B4FC]'}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {tier.cta.external ? (
        <a
          href={tier.cta.href}
          target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
            isHighlight
              ? 'bg-white text-[#4338CA] hover:bg-gray-100'
              : 'bg-gradient-to-r from-[#6366F1] to-[#4338CA] text-white hover:from-[#7C7CFA] hover:to-[#5046E5] shadow-md shadow-[#6366F1]/30'
          }`}
        >
          {tier.cta.label === 'View on GitHub' && <Github className="w-4 h-4" />}
          {tier.cta.label}
        </a>
      ) : (
        <a
          href={tier.cta.href}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
            isHighlight
              ? 'bg-white text-[#4338CA] hover:bg-gray-100'
              : 'bg-gradient-to-r from-[#6366F1] to-[#4338CA] text-white hover:from-[#7C7CFA] hover:to-[#5046E5] shadow-md shadow-[#6366F1]/30'
          }`}
        >
          {tier.cta.label}
        </a>
      )}
    </div>
  )
}
