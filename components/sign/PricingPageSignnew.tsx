'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../layout/WhiteHeader';
import SignHeader from '../layout/SignHeader';
import SignFooter from '../layout/SignFooter';

export default function PricingPageSign() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCard, setSelectedCard] = useState<number>(1); // Default to Professional (index 1)

  const pricingTiers = [
    {
      name: 'Free',
      description: 'For individuals and sole proprietors with basic eSignature needs',
      price: 0,
      yearlyPrice: 0,
      features: [
        '1 User',
        '5 Envelopes per month',
        'Unlimited Sign requests',
        'Unlimited Templates',
        'Folder Management',
        'Contacts Management',
        // 'Document management',
        // 'Google Drive integration',
        // 'Dropbox integration',
        // 'Box Integration',
        // 'Salesforce Integration(Coming soon)',
        // 'HubSpot Integration(Coming soon)',
        // 'Notifications and reminders',
        // 'Audit log and history'
      ]
    },
    {
      name: 'Professional',
      description: 'For small to medium teams that need to send, sign and collaborate',
      price: 10,
      yearlyPrice: 90,
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
        'HubSpot Integration',
        'Oauth API Token',
        'Salesforce Integration(Coming soon)',
        'Notifications and reminders',
        'Audit log and history'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For teams or individuals starting out with process work',
      price: 30,
      yearlyPrice: 270,
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
        'HubSpot Integration',
        'Oauth API Token',
        'Salesforce Integration(Coming soon)',
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
      <SignHeader/>

      {/* Hero Section with Red Gradient */}
      <section className="relative bg-[#181A1E] pt-12 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight sm:leading-[1.2] lg:leading-[62px] mb-6 sm:mb-8 lg:mb-12">
            Choose the plan that<br className="hidden sm:block" /><span className="sm:hidden"> </span>suits for you.
          </h1>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div className="relative bg-[#181A1E] border border-[#5A5858] rounded-full p-1 flex items-center gap-1 w-full max-w-[280px] sm:max-w-[254px] h-[48px] sm:h-[59px]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 h-[40px] sm:h-[51px] rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-[#4285F4] text-white'
                    : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 h-[40px] sm:h-[51px] rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
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
          <p className="text-[#FBBC05] text-sm sm:text-base font-semibold mb-6 sm:mb-8 lg:mb-12">
            Save 25% with Yearly
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative max-w-[1254px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Red Ellipse Blur Effect - Right Semicircle (Behind Professional Card) */}
        <div className="hidden lg:block absolute left-[382px] top-[150px] w-[504px] h-[510px] pointer-events-none z-0">
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
        <div className="hidden lg:block absolute left-[382px] top-[150px] w-[504px] h-[510px] pointer-events-none z-[10]">
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

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(index)}
              className={`relative rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-pointer ${
                index === 0 ? 'z-[5]' : index === 1 ? 'z-[20]' : 'z-[5]'
              } ${
                selectedCard === index
                  ? 'bg-[#1f2937] border-2 border-white/30 shadow-[0_0_4px_rgba(255,255,255,0.3)] opacity-100'
                  : 'bg-[#181A1E] border border-[#5A5858] opacity-60'
              }`}
            >

              {/* Tier Name */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">{tier.name}</h3>

              {/* Description */}
              <p className="text-[#EBEBEB] text-xs sm:text-sm leading-4 sm:leading-5 mb-4 sm:mb-6" style={{ fontFamily: 'Figtree, sans-serif' }}>
                {tier.description}
              </p>

              {/* Price */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                    ${billingCycle === 'monthly' ? tier.price : tier.yearlyPrice}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-50">
                      User/month
                    </span>
                    <span className="text-xs sm:text-sm text-gray-50">Billed {billingCycle === 'monthly'? 'monthly': "annually"}</span>
                  </div>
                </div>
              </div>
              {/* Try for free button */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                {selectedCard === index ? (
                  <div
                    className="rounded-full p-[2px]"
                    style={{
                      background: 'linear-gradient(to right, #4285F4, #FBBC05, #EA4435, #34A853)'
                    }}
                  >
                    <a href="/signup">
                    <button className="w-full bg-white text-[#181A1E] cursor-pointer font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-opacity-90 transition-all text-sm sm:text-base">
                      Try for free
                    </button>
                    </a>
                  </div>
                ) : (
                  <button
                    className="w-full bg-transparent text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full border-2 border-white hover:bg-white hover:text-[#181A1E] transition-all text-sm sm:text-base"
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
                <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Highlights</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] mt-0.5">
                        <Image
                          src="/images/pricingpage-sign/Vector.svg"
                          alt=""
                          width={25}
                          height={25}
                        />
                      </div>
                      <span className="text-[#EBEBEB] text-xs sm:text-sm lg:text-base leading-5 sm:leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Free Plan Banner */}
         {/* <div className="bg-[#181A1E] border border-[#5A5858] rounded-[16px] sm:rounded-[20px] lg:rounded-[25px] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-1 max-w-4xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Free Plan</h3>
              <p className="text-[#EBEBEB] text-sm sm:text-base lg:text-lg leading-5 sm:leading-6 lg:leading-7 max-w-2xl" style={{ fontFamily: 'Figtree, sans-serif' }}>
                Try Centilio Sign with 3 signs per month, that&apos;s usually enough for hobby projects, students or new businesses.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">$0</h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-50 leading-4 sm:leading-5 lg:leading-6 text-center sm:text-left">
                  Upto 3 users &<br className="hidden sm:block" /><span className="sm:hidden"> </span>28 days of enterprise trial
                </p>
              </div>
              <div
                className="rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(to right, #4285F4, #FBBC05, #EA4435, #34A853)'
                }}
              >
                <a href="/signup">
                <button className="bg-white text-[#181A1E] cursor-pointer font-semibold py-2 sm:py-3 lg:py-4 px-6 sm:px-8 lg:px-12 xl:px-16 rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap text-sm sm:text-base lg:text-lg min-h-[44px] sm:min-h-[48px] lg:min-h-[52px]">
                  Try for free
                </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Footer */}
      <SignFooter/>
    </div>
  );
}