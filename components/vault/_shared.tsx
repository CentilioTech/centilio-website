'use client'

import Link from 'next/link'
import { ChevronRight, Github } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Shared sub-components for /vault and /vault/* pages.
// Lifted out of the per-page files so the visual language stays consistent
// (eyebrow chips, CTA buttons, section headings, callouts).

// ---------- Brand color shortcuts ----------
export const VAULT_INDIGO   = '#6366F1'
export const VAULT_INDIGO_2 = '#4338CA'
export const VAULT_LIGHT    = '#A5B4FC'

// ---------- Eyebrow / pill chip ----------
export function Eyebrow({ icon: Icon, children }: { icon?: LucideIcon; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-sm font-medium text-[#A5B4FC]">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  )
}

// ---------- Section heading (gradient highlight on the second line) ----------
export function SectionHeading({
  eyebrow, line1, line2, sub,
}: {
  eyebrow?: React.ReactNode
  line1: string
  line2?: string
  sub?: React.ReactNode
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {eyebrow && <div className="mb-4 md:mb-6">{eyebrow}</div>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {line1}
        {line2 && (
          <>
            <br />
            <span className="bg-gradient-to-r from-[#A5B4FC] via-[#6366F1] to-[#4338CA] bg-clip-text text-transparent">
              {line2}
            </span>
          </>
        )}
      </h2>
      {sub && <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-6">{sub}</p>}
    </div>
  )
}

// ---------- Primary CTA button ----------
export function PrimaryButton({
  href, children, external = false, className = '',
}: {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}) {
  const cls = `group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4338CA] hover:from-[#7C7CFA] hover:to-[#5046E5] transition-all shadow-lg shadow-[#6366F1]/40 hover:shadow-[#6366F1]/60 ${className}`
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

// ---------- Secondary (outline) button ----------
export function SecondaryButton({
  href, children, external = false, icon: Icon, className = '',
}: {
  href: string
  children: React.ReactNode
  external?: boolean
  icon?: LucideIcon
  className?: string
}) {
  const cls = `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all ${className}`
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </Link>
  )
}

// ---------- Final CTA section (used at the bottom of every /vault/* page) ----------
export function FinalCTA({ title, sub }: { title?: string; sub?: string }) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#0E0F18] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1] rounded-full opacity-15 blur-[120px]" />
      </div>
      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title || 'Ready to take your secrets back?'}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {sub || "Tell us about your team and what you're storing today. We'll scope a Vault deployment that fits — managed, self-hosted, or a hybrid in between."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryButton href="/contactpage">
            Talk to a security expert
          </PrimaryButton>
          <SecondaryButton href="https://github.com/CentilioTech/vault" external icon={Github}>
            View source
          </SecondaryButton>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Or email us directly at{' '}
          <a href="mailto:team@centilio.com" className="text-[#A5B4FC] hover:text-white underline-offset-4 hover:underline">
            team@centilio.com
          </a>
        </p>
      </div>
    </section>
  )
}

// ---------- Decorative gradient orbs (background flair) ----------
export function GradientOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6366F1] rounded-full opacity-20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4338CA] rounded-full opacity-25 blur-[120px]" />
    </div>
  )
}
