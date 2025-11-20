'use client';

import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'manufacturer' | 'business' | 'promoter'>('promoter');

  return (
    <div className="min-h-screen">
      <Header />

      {/* FIRST FOLD - Hero Section with Grid */}
      <section className="w-full bg-[#181A1E] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Your trusted growth engine.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Designed for businesses that are ready to grow with results that speak for themselves.
              Centilio is your ready-to-use partner for faster, smarter business growth.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-[50px] hover:bg-gray-100 transition-colors">
              LET'S GROW YOUR REVENUE TODAY
              <Image
                src="/images/home page/cta-arrowVector.svg"
                alt="Arrow"
                width={14}
                height={14}
                style={{ filter: 'invert(1)' }}
              />
            </button>
          </div>

          {/* Product Grid - Mixed size tiles with centered 2x2 feature cards */}
          <div className="flex flex-col gap-3 lg:gap-4 max-w-7xl mx-auto overflow-x-auto">
            {/* Row 1 - Small boxes */}
            <div className="flex justify-center gap-3 lg:gap-4 flex-nowrap min-w-min">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={`r1-${i}`} className="w-[121px] h-[112px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] hover:border-gray-400 transition-colors"></div>
              ))}
            </div>

            {/* Center Section - 3x3 tiles (left) + 2x2 feature cards (center) + 3x3 tiles (right) */}
            <div className="flex justify-center gap-3 lg:gap-4 flex-nowrap items-start min-w-min">
              {/* Left 3x3 grid */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
                {Array.from({ length: 3 }).map((_, row) => (
                  <div key={`left-row-${row}`} className="flex gap-3 lg:gap-4">
                    {Array.from({ length: 3 }).map((_, col) => (
                      <div key={`left-${row}-${col}`} className="w-[121px] h-[112px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] hover:border-gray-400 transition-colors"></div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Center 2x2 feature cards */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
                {/* Row 1 of feature cards */}
                <div className="flex gap-3 lg:gap-4">
                  {/* Sign - Large feature card */}
                  <div className="w-[189px] h-[182px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-5 flex flex-col items-center justify-center hover:border-gray-400 transition-all shadow-lg shadow-blue-500/20 relative">
                    <Image
                      src="/images/home page/first fold/Vector1.svg"
                      alt="Sign"
                      width={60}
                      height={60}
                      className="mb-3"
                    />
                    <span className="text-white text-sm font-semibold text-center">Sign</span>
                  </div>

                  {/* SEO Agent - Large feature card */}
                  <div className="w-[189px] h-[182px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-5 flex flex-col items-center justify-center hover:border-gray-400 transition-all shadow-lg shadow-blue-500/20">
                    <Image
                      src="/images/home page/first fold/Vector2.svg"
                      alt="SEO Agent"
                      width={60}
                      height={60}
                      className="mb-3"
                    />
                    <span className="text-white text-sm font-semibold text-center">SEO Agent</span>
                  </div>
                </div>

                {/* Row 2 of feature cards */}
                <div className="flex gap-3 lg:gap-4">
                  {/* HR Agent - Large feature card */}
                  <div className="w-[189px] h-[182px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-5 flex flex-col items-center justify-center hover:border-gray-400 transition-all shadow-lg shadow-purple-500/20">
                    <div className="w-[60px] h-[60px] flex items-center justify-center mb-3">
                      <Image
                        src="/images/home page/first fold/HR Agent logo - white.png"
                        alt="HR Agent"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-center">HR Agent</span>
                  </div>

                  {/* Email Outreach - Large feature card */}
                  <div className="w-[189px] h-[182px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-5 flex flex-col items-center justify-center hover:border-gray-400 transition-all shadow-lg shadow-orange-500/20">
                    <div className="w-[60px] h-[60px] flex items-center justify-center mb-3">
                      <Image
                        src="/images/home page/first fold/email logo white.png"
                        alt="Email Outreach"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-center">Email<br />Outreach</span>
                  </div>
                </div>
              </div>

              {/* Right 3x3 grid */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
                {Array.from({ length: 3 }).map((_, row) => (
                  <div key={`right-row-${row}`} className="flex gap-3 lg:gap-4">
                    {Array.from({ length: 3 }).map((_, col) => (
                      <div key={`right-${row}-${col}`} className="w-[121px] h-[112px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] hover:border-gray-400 transition-colors"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 4 - Small boxes */}
            <div className="flex justify-center gap-3 lg:gap-4 flex-nowrap min-w-min">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={`r4-${i}`} className="w-[121px] h-[112px] flex-shrink-0 bg-[#1F2125] border border-[#5B5858] rounded-[20px] hover:border-gray-400 transition-colors"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECOND FOLD - Why We Exist */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-red-600 text-sm font-semibold mb-6">
              Why We Exist
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Your business needs growth.
              <br />
              <span style={{
                background: 'linear-gradient(to right, #4285F4, #083987)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>We make it happen.</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Most growing businesses struggle to manage everything from marketing to operations with the
              right tools and support. Centilio exists to simplify growth by giving you ready-to-use digital tools
              and systems all in one place, so you can scale faster, smarter, and with less hassle.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-[50px] hover:bg-gray-800 transition-colors">
              TALK TO A GROWTH EXPERT
              <Image
                src="/images/home page/cta-arrowVector.svg"
                alt="Arrow"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </section>

      {/* THIRD FOLD - Trusted By */}
      <section className="w-full bg-[#181A1E] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Trusted by
          </h2>
          <div className="max-w-7xl mx-auto">
            {/* Top Row - 4 logos more spread out */}
            <div className="flex justify-center items-center gap-6 lg:gap-12 mb-6 flex-wrap">
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(-8deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo10.png"
                  alt="mēkā"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(3deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo9.png"
                  alt="ProtonMail"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo8.png"
                  alt="STRATOS"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(4deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo7.png"
                  alt="monday.com"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Row - 6 logos more compact */}
            <div className="flex justify-center items-center gap-4 lg:gap-8 flex-wrap">
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo1.png"
                  alt="AWS"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(2deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo2.png"
                  alt="DigitalOcean"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo3.png"
                  alt="Google Cloud"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(5deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo4.png"
                  alt="G.S.C"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo5.png"
                  alt="ions"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
              <div
                className="p-6 flex items-center justify-center w-[217px] h-[115px]"
                style={{ transform: 'rotate(6deg)' }}
              >
                <Image
                  src="/images/home page/third fold/logo6.png"
                  alt="pipedrive"
                  width={217}
                  height={115}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH FOLD - From Thought to Thrive */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                From thought to thrive
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                From <span className="font-semibold" style={{
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>planning</span> to{' '}
                <span className="font-semibold" style={{
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>automation</span>, from outreach to operations, every Centilio solution works together to power your growth and deliver results.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-[50px] hover:bg-gray-800 transition-colors mt-6">
                LEARN MORE
                <Image
                  src="/images/home page/cta-arrowVector.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                />
              </button>
            </div>
            <div className="bg-gray-200 rounded-[20px] aspect-video flex items-center justify-center">
              <span className="text-gray-500">Content Image/Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* FIFTH FOLD - Testimonials */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-6">
              Your business needs growth. We<br className="hidden sm:inline" /> make it happen.
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Most growing businesses struggle to manage everything from marketing to operations with the
              right tools and support. Centilio exists to simplify growth by giving you ready-to-use digital tools
              and systems all in one place, so you can scale faster, smarter, and with less hassle.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <button
                onClick={() => setActiveTab('manufacturer')}
                className={`pb-2 text-base transition-colors ${
                  activeTab === 'manufacturer'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                I'M A MANUFACTURER
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`pb-2 text-base font-semibold transition-colors ${
                  activeTab === 'business'
                    ? 'border-b-2'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={activeTab === 'business' ? {
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderImage: 'linear-gradient(to right, #4285F4, #083987) 1'
                } : {}}
              >
                I'M A BUSINESS OWNER
              </button>
              <button
                onClick={() => setActiveTab('promoter')}
                className={`pb-2 text-base font-semibold transition-colors ${
                  activeTab === 'promoter'
                    ? 'border-b-2'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={activeTab === 'promoter' ? {
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderImage: 'linear-gradient(to right, #4285F4, #083987) 1'
                } : {}}
              >
                I'M A PROMOTER
              </button>
            </div>

            {/* Testimonial Section with Background Frame */}
            <div className="relative flex justify-center items-center">
              {/* Background gradient frame */}
              <div
                className="absolute rounded-[40px] p-[2px]"
                style={{
                  width: '820px',
                  height: '414px',
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.3) 0%, rgba(255,165,0,0.3) 25%, rgba(0,255,127,0.3) 50%, rgba(64,224,208,0.3) 75%, rgba(30,144,255,0.3) 100%)',
                  zIndex: 0,
                  transform: 'translateY(30%)'
                }}
              >
                <div className="w-full h-full bg-white rounded-[40px]"></div>
              </div>

              {/* Content wrapper */}
              <div className="relative pt-16 pb-8" style={{ width: '820px', minHeight: '414px' }}>
                {/* Customer photo with multicolor halo - positioned above card */}
                <div className="flex justify-center mb-[-80px] relative z-20">
                  <div className="relative w-40 h-40">
                    {/* Multicolor gradient halo */}
                    <div
                      className="absolute inset-0 rounded-full blur-3xl"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #00FF7F 50%, #40E0D0 75%, #1E90FF 100%)',
                        opacity: 0.6
                      }}
                    ></div>
                    <Image
                      src="/images/home page/fifthfoldimage.png"
                      alt="Testimonial"
                      width={160}
                      height={160}
                      className="rounded-full relative z-10"
                    />
                  </div>
                </div>

                {/* Dark testimonial card */}
                <div className="relative z-10 bg-[#181A1E] rounded-[20px] mx-auto" style={{ width: '480px', height: '441px' }}>
                  <div className="flex flex-col items-center text-center justify-center h-full px-8 pt-24 pb-8">
                    <p className="text-lg text-white mb-8 max-w-md mx-auto">
                      "We were exploring ways to streamline operations and drive consistent growth. Centilio delivered on both. The
                      platform is intuitive, reliable, and packed with tools that actually work. It's like having a growth team built into our
                      business."
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="font-bold text-white text-lg mb-3">Prathesh Kumar, Owner</p>
                      <Image
                        src="/images/home page/fifth fold/logo - transparent- vkv white 1.svg"
                        alt="VEG TRON"
                        width={100}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIXTH FOLD - Tamil Nadu Stats */}
      <section className="w-full bg-[#181A1E] py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
              From Tamil Nadu. For Growing<br /> Business Globally.
            </h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-left">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</h3>
                <p className="text-sm lg:text-base text-gray-300">Businesses<br />Served</p>
              </div>
              <div className="text-left">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">10+</h3>
                <p className="text-sm lg:text-base text-gray-300">Countries<br />Supported</p>
              </div>
              <div className="text-left">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</h3>
                <p className="text-sm lg:text-base text-gray-300">CRM Setups<br />Done</p>
              </div>
            </div>
          </div>
        </div>
        {/* Large illustration on the right spanning full height */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end">
          <Image
            src="/images/home page/mapimage-sixthfold.png"
            alt="Tamil Nadu Illustration"
            width={454}
            height={618}
            className="h-full w-auto object-contain"
          />
        </div>
      </section>

      {/* SEVENTH FOLD - Your Growth */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Your Growth Is{' '}
                <span style={{
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Our Responsibility.</span>
              </h2>
              <p className="text-lg text-gray-700">
                We don't just offer services—we take ownership of your success.
                From the first conversation to ongoing optimization, we're committed to delivering
                measurable results that move your business forward.
              </p>
            </div>
            <div className="bg-gray-200 rounded-[20px] aspect-video flex items-center justify-center">
              <span className="text-gray-500">Content Image/Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* EIGHTH FOLD - Values */}
      <section className="w-full bg-[#181A1E] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
              The values that drive Centilio
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Value 1 - Accountability */}
              <div className="bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-8 hover:border-gray-400 transition-colors flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/home page/eightth fold/Vector1.svg"
                    alt="Accountability"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Accountability for Growth
                </h3>
                <p className="text-gray-300">
                  We don't just advise, we own the outcome. Your goals become our responsibility, and we stand behind our results.
                </p>
              </div>

              {/* Value 2 - Plug-and-Play */}
              <div className="bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-8 hover:border-gray-400 transition-colors flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/home page/eightth fold/Vector2.svg"
                    alt="Plug-and-Play"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Plug-and-Play Excellence
                </h3>
                <p className="text-gray-300">
                  We bring a full team to your table researchers, tech experts, recruiters, marketers, all ready to execute.
                </p>
              </div>

              {/* Value 3 - Customer-Led */}
              <div className="bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-8 hover:border-gray-400 transition-colors flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/home page/eightth fold/Vector3.svg"
                    alt="Customer-Led"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Customer-Led Innovation
                </h3>
                <p className="text-gray-300">
                  We listen, we understand, and we build solutions around your real challenges not templates or assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NINTH FOLD - Final CTA */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to{' '}
              <span style={{
                background: 'linear-gradient(to right, #4285F4, #083987)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Grow Your Revenue?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's build a strategy that works for you. Talk to our growth experts today
              and see how Centilio can transform your business.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-[50px] hover:bg-gray-800 transition-colors">
              TALK TO A GROWTH EXPERT
              <Image
                src="/images/home page/cta-arrowVector.svg"
                alt="Arrow"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
