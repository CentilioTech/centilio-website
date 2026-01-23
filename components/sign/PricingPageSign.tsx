'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '@/components/layout/WhiteHeader';

export default function PricingPageSign() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: 'Basic',
      description: 'For teams or individuals starting out with process work',
      price: 12,
      yearlyPrice: 9,
      features: [
        '1 User',
        '5 Envelopes per month',
        'Unlimited Sign requests',
        'Unlimited Templates',
        'Folder Management',
        'Contacts Management',
        'Document management',
        'Google Drive integration',
        'Dropbox integration',
        'Box Integration',
        'Salesforce Integration(Coming soon)',
        'HubSpot Integration(Coming soon)',
        'Notifications and reminders',
        'Audit log and history'
      ]
    },
    {
      name: 'Professional',
      description: 'For teams or individuals starting out with process work',
      price: 18,
      yearlyPrice: 13.5,
      mostPopular: true,
      features: [
        'Upto 50 Users',
        'Unlimited Envelopes',
        'Unlimited Sign requests',
        'Unlimited Templates',
        'AI Template',
        'Folder Management',
        'Contacts Management',
        'Document management',
        'Google Drive integration',
        'Dropbox integration',
        'Box Integration',
        'Salesforce Integration(Coming soon)',
        'HubSpot Integration(Coming soon)',
        'Notifications and reminders',
        'Audit log and history'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For teams or individuals starting out with process work',
      price: 24,
      yearlyPrice: 18,
      features: [
        '50+ User',
        'Unlimited Envelopes',
        'Unlimited Sign requests',
        'Unlimited Templates',
        'AI Template',
        'Folder Management',
        'Contacts Management',
        'Custom Branding',
        'Document management',
        'Google Drive integration',
        'Dropbox integration',
        'Box Integration',
        'Salesforce Integration(Coming soon)',
        'HubSpot Integration(Coming soon)',
        'Notifications and reminders',
        'Audit log and history',
        'Team Management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      <WhiteHeader />
      {/* Header */}
      <header className="bg-[#181A1E] border-b border-[#5B5858]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/sign" className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/pricingpage-sign/Layer 1.svg"
                  alt="Sign Logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-white text-lg font-semibold">Sign</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/sign" className="text-white text-sm hover:text-gray-300 transition-colors">
                Features
              </Link>
              <Link href="/sign/integrations" className="text-white text-sm hover:text-gray-300 transition-colors">
                Integrations
              </Link>
              <Link href="/sign/pricing-sign" className="text-white text-sm hover:text-gray-300 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-white text-sm hover:text-gray-300 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Red Gradient */}
      <section className="relative bg-[#181A1E] py-16 overflow-hidden">
        {/* Red gradient blur background - SVG */}
        <div className="absolute inset-0 flex items-start justify-center">
          <Image
            src="/images/pricingpage-sign/Rectangle 30313.svg"
            alt=""
            width={1437}
            height={472}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Main Heading */}
          <h1 className="text-[42px] font-bold text-white leading-[62px] mb-12">
            Choose the plan that<br />suits for you.
          </h1>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative bg-[#181A1E] border border-[#5A5858] rounded-full p-1 flex items-center gap-1 w-[254px] h-[59px]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 h-[51px] rounded-full text-sm font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-[#4285F4] text-white'
                    : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 h-[51px] rounded-full text-sm font-semibold transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#4285F4] text-white'
                    : 'text-gray-400'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Save 25% badge */}
          <p className="text-[#FBBC05] text-base font-semibold mb-12">
            Save 25% with Yearly
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative max-w-[1254px] mx-auto px-6 py-16">
        {/* Red Ellipse Blur Effect - Right Semicircle (Behind Professional Card) */}
        <div className="absolute left-[382px] top-[150px] w-[504px] h-[510px] pointer-events-none z-0">
          <div className="absolute -left-[200px] -top-[200px] w-[904px] h-[910px] overflow-hidden">
            <Image
              src="/images/pricingpage-sign/Ellipse 5.svg"
              alt=""
              width={904}
              height={910}
              style={{ clipPath: 'inset(0 0 0 50%)' }}
            />
          </div>
        </div>

        {/* Red Ellipse Blur Effect - Left Semicircle (Front of Basic Card only) */}
        <div className="absolute left-[382px] top-[150px] w-[504px] h-[510px] pointer-events-none z-[10]">
          <div className="absolute -left-[200px] -top-[200px] w-[904px] h-[910px] overflow-hidden">
            <Image
              src="/images/pricingpage-sign/Ellipse 5.svg"
              alt=""
              width={904}
              height={910}
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
          </div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6 mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-[#181A1E] border border-[#5A5858] rounded-[24px] p-8 flex flex-col ${
                index === 0 ? 'z-[5]' : index === 1 ? 'z-[20]' : 'z-[5]'
              }`}
            >

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>

              {/* Description */}
              <p className="text-[#EBEBEB] text-lg leading-7 mb-6" style={{ fontFamily: 'Figtree, sans-serif' }}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${billingCycle === 'monthly' ? tier.price : tier.yearlyPrice}
                  </span>
                  <span className="text-base text-gray-400">
                    User/month
                  </span>
                </div>
                <p className="text-base text-gray-400 mt-1">Billed monthly</p>
              </div>

              {/* Try for free button */}
              <div className="mb-8">
                {index === 1 ? (
                  <div
                    className="rounded-full p-[2px]"
                    style={{
                      background: 'linear-gradient(to right, #4285F4, #FBBC05, #EA4435, #34A853)'
                    }}
                  >
                    <button className="w-full bg-white text-[#181A1E] font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all">
                      Try for free
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full bg-transparent text-white font-semibold py-3 px-6 rounded-full border-2 border-white hover:bg-white hover:text-[#181A1E] transition-all"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.4)'
                    }}
                  >
                    Try for free
                  </button>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-base font-semibold text-white mb-4">Highlights</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-[25px] h-[25px] mt-0.5">
                        <Image
                          src="/images/pricingpage-sign/Vector.svg"
                          alt=""
                          width={25}
                          height={25}
                        />
                      </div>
                      <span className="text-[#EBEBEB] text-base leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Free Plan Banner */}
        <div className="bg-[#181A1E] border border-[#5A5858] rounded-[25px] p-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Free Plan</h3>
              <p className="text-[#EBEBEB] text-lg leading-7 max-w-2xl" style={{ fontFamily: 'Figtree, sans-serif' }}>
                Try Centilio Sign with 3 signs per month, that&apos;s usually enough for hobby projects, students or new businesses.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <div className="text-5xl font-bold text-white mb-2">$0</div>
                <p className="text-sm text-gray-400">
                  Upto 3 users &<br />28 days of enterprise trial
                </p>
              </div>
              <div
                className="rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(to right, #4285F4, #FBBC05, #EA4435, #34A853)'
                }}
              >
                <button className="bg-white text-[#181A1E] font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1D21] py-16 border-t border-[#2A2D31]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo */}
            <div>
              <Image
                src="/images/pricingpage-sign/Vector1.svg"
                alt="Centilio Logo"
                width={62}
                height={77}
              />
            </div>

            {/* Product Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/sign" className="text-gray-400 hover:text-white transition-colors">
                    Sign
                  </Link>
                </li>
                <li>
                  <Link href="/seo-bot" className="text-gray-400 hover:text-white transition-colors">
                    SEO Bot
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                    GDPR Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section - Social Media Icons */}
          <div className="border-t border-[#2A2D31] pt-8">
            <div className="flex items-center justify-end gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/pricingpage-sign/footer/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/pricingpage-sign/footer/insta.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/pricingpage-sign/footer/youtube.svg"
                  alt="YouTube"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/pricingpage-sign/footer/link in (1).svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/pricingpage-sign/footer/twitter.svg"
                  alt="X (Twitter)"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
