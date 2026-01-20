'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { GlobalHoverCard } from '@/components/ui/global-hover-card';
import { useState, useEffect, useRef } from 'react';
import { testimonialData } from '@/lib/testimonials';

function useCountAnimation(targetValue: number, duration: number = 2000, shouldStart: boolean = false) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!shouldStart || hasStarted) return

    setHasStarted(true)
    let startTime: number | null = null
    const startValue = 0

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const value = Math.floor(startValue + (targetValue - startValue) * easeOutCubic)
      
      setCurrentValue(value)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [targetValue, duration, shouldStart, hasStarted])

  return currentValue
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'manufacturer' | 'business' | 'promoter'>('promoter');
  const [trustedByVisible, setTrustedByVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const trustedByRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  // Animation values for Tamil Nadu stats
  const businessesCount = useCountAnimation(100, 2000, statsVisible);
  const countriesCount = useCountAnimation(10, 2000, statsVisible);
  const crmSetupsCount = useCountAnimation(50, 2000, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrustedByVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (trustedByRef.current) {
      observer.observe(trustedByRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* FIRST FOLD - Hero Section with Grid */}
      <section className="w-full bg-[#181A1E] py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-12">
              Your trusted growth engine.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-18 max-w-3xl mx-auto">
              Designed for businesses that are ready to grow with results that speak for themselves.
              Centilio is your ready-to-use partner for faster, smarter business growth.
            </p>
            <div className="inline-block rounded-[50px] p-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]">
              <Link
                href="/contactpage"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-[50px] hover:bg-gray-100 transition-colors"
              >
                LET&apos;S GROW YOUR REVENUE TODAY
                <Image
                  src="/images/home page/cta-arrowVector.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                  style={{ filter: 'invert(1)' }}
                />
              </Link>
            </div>
          </div>

          {/* Mobile Only - 2x2 Feature Cards */}
          <div className="lg:hidden mt-12 max-w-md mx-auto px-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Sign */}
              <div 
                className="cursor-pointer"
                onClick={() => window.location.href = '/sign'}
              >
                <GlowCard 
                  customSize={true}
                  glowColor="blue"
                  width={160}
                  height={140}
                  className="bg-[#1F2125] p-4 flex flex-col items-center justify-center hover:bg-[#2A2D35] transition-colors"
                >
                  <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Image
                      src="/images/home page/first fold/Vector1.svg"
                      alt="Sign"
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-white text-sm font-semibold text-center">Sign</span>
                  </div>
                </GlowCard>
              </div>

              {/* SEO Agent */}
              <div 
                className="cursor-pointer"
                onClick={() => window.location.href = '/seo-bot'}
              >
                <GlowCard 
                  customSize={true}
                  glowColor="blue"
                  width={160}
                  height={140}
                  className="bg-[#1F2125] p-4 flex flex-col items-center justify-center hover:bg-[#2A2D35] transition-colors"
                >
                  <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Image
                      src="/images/home page/first fold/Vector2.svg"
                      alt="SEO Agent"
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-white text-sm font-semibold text-center">SEO Bot</span>
                  </div>
                </GlowCard>
              </div>

              {/* HR Agent */}
              <GlowCard 
                customSize={true}
                glowColor="purple"
                width={160}
                height={140}
                className="bg-[#1F2125] p-4 flex flex-col items-center justify-center"
              >
                <div className="w-[40px] h-[40px] flex items-center justify-center mb-2">
                  <Image
                    src="/images/home page/first fold/HR Agent logo - white.png"
                    alt="HR Agent"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-sm font-semibold text-center">HR Agent</span>
              </GlowCard>

              {/* Email Outreach */}
              <GlowCard 
                customSize={true}
                glowColor="orange"
                width={160}
                height={140}
                className="bg-[#1F2125] p-4 flex flex-col items-center justify-center"
              >
                <div className="w-[40px] h-[40px] flex items-center justify-center mb-2">
                  <Image
                    src="/images/home page/first fold/email logo white.png"
                    alt="Email Outreach"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-sm font-semibold text-center">Email<br />Outreach</span>
              </GlowCard>
            </div>
          </div>

          {/* Desktop Product Grid - Mixed size tiles with centered 2x2 feature cards */}
          <div className="hidden lg:flex flex-col gap-3 lg:gap-4 max-w-7xl mx-auto overflow-x-auto">
            {/* Row 1 - Small boxes */}
            <div className="flex justify-center gap-3 lg:gap-4 flex-nowrap min-w-min">
              {Array.from({ length: 9 }).map((_, i) => (
                <GlobalHoverCard 
                  key={`r1-${i}`}
                  width={121}
                  height={112}
                  className="flex-shrink-0"
                />
              ))}
            </div>

            {/* Center Section - 3x3 tiles (left) + 2x2 feature cards (center) + 3x3 tiles (right) */}
            <div className="flex justify-center gap-3 lg:gap-4 flex-nowrap items-start min-w-min">
              {/* Left 3x3 grid */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
                {Array.from({ length: 3 }).map((_, row) => (
                  <div key={`left-row-${row}`} className="flex gap-3 lg:gap-4">
                    {Array.from({ length: 3 }).map((_, col) => (
                      <GlobalHoverCard 
                        key={`left-${row}-${col}`}
                        width={121}
                        height={112}
                        className="flex-shrink-0"
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Center 2x2 feature cards */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
                {/* Row 1 of feature cards */}
                <div className="flex gap-3 lg:gap-4">
                  {/* Sign - Large feature card */}
                  <div 
                    className="cursor-pointer"
                    onClick={() => window.location.href = '/sign'}
                  >
                    <GlowCard 
                      customSize={true}
                      glowColor="blue"
                      width={189}
                      height={182}
                      className="flex-shrink-0 bg-[#1F2125] p-5 flex flex-col items-center justify-center hover:bg-[#2A2D35] transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
                        <Image
                          src="/images/home page/first fold/Vector1.svg"
                          alt="Sign"
                          width={60}
                          height={60}
                          className="mb-3"
                        />
                        <span className="text-white text-sm font-semibold text-center">Sign</span>
                      </div>
                    </GlowCard>
                  </div>

                  {/* SEO Agent - Large feature card */}
                  <div 
                    className="cursor-pointer"
                    onClick={() => window.location.href = '/seo-bot'}
                  >
                    <GlowCard 
                      customSize={true}
                      glowColor="blue"
                      width={189}
                      height={182}
                      className="flex-shrink-0 bg-[#1F2125] p-5 flex flex-col items-center justify-center hover:bg-[#2A2D35] transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
                        <Image
                          src="/images/home page/first fold/Vector2.svg"
                          alt="SEO Agent"
                          width={60}
                          height={60}
                          className="mb-3"
                        />
                        <span className="text-white text-sm font-semibold text-center">SEO Bot</span>
                      </div>
                    </GlowCard>
                  </div>
                </div>

                {/* Row 2 of feature cards */}
                <div className="flex gap-3 lg:gap-4">
                  {/* HR Agent - Large feature card */}
                  <GlowCard 
                    customSize={true}
                    glowColor="purple"
                    width={189}
                    height={182}
                    className="flex-shrink-0 bg-[#1F2125] p-5 flex flex-col items-center justify-center"
                  >
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
                  </GlowCard>

                  {/* Email Outreach - Large feature card */}
                  <GlowCard 
                    customSize={true}
                    glowColor="orange"
                    width={189}
                    height={182}
                    className="flex-shrink-0 bg-[#1F2125] p-5 flex flex-col items-center justify-center"
                  >
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
                  </GlowCard>
                </div>
              </div>

              {/* Right 3x3 grid */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
                {Array.from({ length: 3 }).map((_, row) => (
                  <div key={`right-row-${row}`} className="flex gap-3 lg:gap-4">
                    {Array.from({ length: 3 }).map((_, col) => (
                      <GlobalHoverCard 
                        key={`right-${row}-${col}`}
                        width={121}
                        height={112}
                        className="flex-shrink-0"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
              

            {/* Row 4 - Small boxes */}
            <div className="flex justify-center gap-3 lg:gap-4 flex-nowrap min-w-min">
              {Array.from({ length: 9 }).map((_, i) => (
                <GlobalHoverCard 
                  key={`r4-${i}`}
                  width={121}
                  height={112}
                  className="flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECOND FOLD - Why We Exist */}
      <section className="w-full bg-white py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-red-600 text-2xl font-light mb-4">
              Why We Exist
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 lg:mb-8 leading-tight">
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
           
            <div className="relative inline-block">
              
              <style jsx>{`
                .rainbow-border-animated {
                  position: relative;
                  background: black;
                  border: none;
                  border-radius: 50px;
                  padding: 3px;
                  overflow: hidden;
                }
                .rainbow-border-animated::before {
                  content: '';
                  position: absolute;
                  inset: 0;
                  padding: 3px;
                  background: conic-gradient(from 0deg, #4285F4, #EA4435, #FBBC05, #34A853, #4285F4);
                  border-radius: inherit;
                  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  mask-composite: xor;
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  animation: rainbow-rotate 3s linear infinite;
                }
                .rainbow-button-content {
                  position: relative;
                  background: black;
                  border-radius: 47px;
                  z-index: 1;
                }
                @keyframes rainbow-rotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>

              <div className="rainbow-border-animated">
                <a href="/contactpage">
                <button className="rainbow-button-content inline-flex items-center cursor-pointer gap-2 px-8 py-3 text-white font-semibold hover:bg-gray-800 transition-colors w-full">
                  TALK TO A GROWTH EXPERT
                  <Image
                    src="/images/home page/cta-arrowVector.svg"
                    alt="Arrow"
                    width={14}
                    height={14}
                  />
                </button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* THIRD FOLD - Trusted By */}
      <section ref={trustedByRef} className="w-full bg-[#181A1E] pt-8 lg:pt-24 pb-8 lg:pb-0 trusted-section lg:h-[80vh]">
        <div className="w-full mx-auto px-4 lg:px-8 h-full flex flex-col">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8 lg:mb-12">
            Trusted by
          </h2>

          {/* Mobile/Small Screen Layout */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mobile-logo-grid">
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo10.png" alt="mēkā" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo9.png" alt="ProtonMail" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo8.png" alt="STRATOS" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo7.png" alt="monday.com" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo1.png" alt="AWS" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo2.png" alt="DigitalOcean" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo3.png" alt="Google Cloud" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo4.png" alt="G.S.C" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo5.png" alt="ions" width={120} height={65} className="mobile-logo-image" />
            </div>
            <div className="mobile-logo-item p-4 flex items-center justify-center">
              <Image src="/images/home page/third fold/logo6.png" alt="pipedrive" width={120} height={65} className="mobile-logo-image" />
            </div>
          </div>
          <style jsx>{`
            /* Mobile styles - clean and straight */
            @media (max-width: 1023px) {
              .mobile-logo-grid {
                filter: none !important;
              }
              .mobile-logo-item {
                transform: none !important;
                opacity: 1 !important;
                animation: none !important;
              }
              .mobile-logo-image {
                transform: none !important;
                opacity: 0.8 !important;
                transition: opacity 0.3s ease !important;
                filter: none !important;
                object-fit: contain !important;
              }
              .mobile-logo-image:hover {
                opacity: 1 !important;
              }
            }
            
            /* Desktop styles - only apply on lg screens and up */
            @media (min-width: 1024px) {
              .logo-item {
                opacity: 0;
                transform: translateY(-400px) rotate(0deg) scale(0.8);
                animation: none;
              }
              .logo-item.animate {
                animation: smoothFall 1.5s ease-out forwards;
              }
              .logo-item.animate:nth-child(1) { animation-delay: 0.1s; }
              .logo-item.animate:nth-child(2) { animation-delay: 0.2s; }
              .logo-item.animate:nth-child(3) { animation-delay: 0.4s; }
              .logo-item.animate:nth-child(4) { animation-delay: 0.3s; }
              .logo-item.animate:nth-child(5) { animation-delay: 0.5s; }
              .logo-item.animate:nth-child(6) { animation-delay: 0.6s; }
              
              .logo-row-1 .logo-item.animate:nth-child(1) { animation-delay: 0.1s; }
              .logo-row-1 .logo-item.animate:nth-child(2) { animation-delay: 0.3s; }
              .logo-row-1 .logo-item.animate:nth-child(3) { animation-delay: 0.5s; }
              .logo-row-1 .logo-item.animate:nth-child(4) { animation-delay: 0.2s; }
              
              .logo-row-2 .logo-item.animate:nth-child(1) { animation-delay: 0.7s; }
              .logo-row-2 .logo-item.animate:nth-child(2) { animation-delay: 0.4s; }
              .logo-row-2 .logo-item.animate:nth-child(3) { animation-delay: 0.9s; }
              .logo-row-2 .logo-item.animate:nth-child(4) { animation-delay: 0.6s; }
              .logo-row-2 .logo-item.animate:nth-child(5) { animation-delay: 0.8s; }
              .logo-row-2 .logo-item.animate:nth-child(6) { animation-delay: 1.0s; }
              
              .trusted-section {
                position: relative;
                overflow: hidden;
              }
            }
            
            @keyframes smoothFall {
              0% {
                opacity: 0;
                transform: translateY(-500px) scale(0.9);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
          {/* Desktop/Large Screen Layout */}
          <div className="hidden lg:flex relative w-full flex-1 justify-center items-end pb-8">
            {/* Scattered logos at bottom like fallen cards */}
            <div className="relative w-full h-80">
              {/* mēkā - top left */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  left: '5%', 
                  bottom: '60%', 
                  transform: trustedByVisible ? 'rotate(-25deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.1s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo10.png"
                  alt="mēkā"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* ProtonMail - top center */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  left: '25%', 
                  bottom: '45%', 
                  transform: trustedByVisible ? 'rotate(8deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.3s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo9.png"
                  alt="ProtonMail"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* STRATOS - center */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  left: '47%', 
                  bottom: '0%', 
                  transform: trustedByVisible ? 'rotate(-5deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.5s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo8.png"
                  alt="STRATOS"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* monday.com - top right */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  right: '8%', 
                  bottom: '50%', 
                  transform: trustedByVisible ? 'rotate(15deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.2s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo7.png"
                  alt="monday.com"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* AWS - bottom left */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  left: '8%', 
                  bottom: '5%', 
                  transform: trustedByVisible ? 'rotate(-18deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.7s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo1.png"
                  alt="AWS"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* DigitalOcean - bottom left center */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  left: '22%', 
                  bottom: '0%', 
                  transform: trustedByVisible ? 'rotate(12deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.4s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo2.png"
                  alt="DigitalOcean"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* Google Cloud - center bottom */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  left: '35%', 
                  bottom: '0%', 
                  transform: trustedByVisible ? 'rotate(-8deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.9s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo3.png"
                  alt="Google Cloud"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* G.S.C - right center */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  right: '25%', 
                  bottom: '0%', 
                  transform: trustedByVisible ? 'rotate(20deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.6s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo4.png"
                  alt="G.S.C"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* ions - right */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  right: '12%', 
                  bottom: '8%', 
                  transform: trustedByVisible ? 'rotate(-12deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '0.8s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo5.png"
                  alt="ions"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* pipedrive - far right */}
              <div
                className={`logo-item absolute p-6 flex items-center justify-center w-[240px] h-[130px] ${trustedByVisible ? 'animate' : ''}`}
                style={{ 
                  right: '3%', 
                  bottom: '25%', 
                  transform: trustedByVisible ? 'rotate(25deg)' : 'translateY(-400px) rotate(0deg) scale(0.8)',
                  animationDelay: '1.0s'
                }}
              >
                <Image
                  src="/images/home page/third fold/logo6.png"
                  alt="pipedrive"
                  width={240}
                  height={130}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH FOLD - From Thought to Thrive */}
      <section className="w-full bg-white py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className='max-w-lg'>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
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
              
            </div>
            <div className="rounded-[20px] aspect-video flex items-center justify-center overflow-hidden">
              <Image
                src="/images/home page/From thought to thrive.gif"
                alt="From Thought to Thrive Animation"
                width={640}
                height={360}
                className="w-full h-full object-cover rounded-[20px]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* FIFTH FOLD - Testimonials */}
      <section className="w-full bg-white py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black text-center mb-6 leading-tight">
              Real Results, Real Stories
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Discover the inspiring success stories of businesses that have partnered with Centilio to unlock their true potential. Our clients share how Centilio&apos;s innovative solutions have empowered them to overcome obstacles, simplify their processes, and achieve their dreams. These heartfelt stories reflect the real, life-changing impact we&apos;ve made, helping businesses grow stronger, thrive, and reach new heights, no matter the challenges they face.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-[#7F8394] max-w-xl mx-auto">
              <button
                onClick={() => setActiveTab('manufacturer')}
                className={`pb-2 text-base font-semibold transition-colors ${
                  activeTab === 'manufacturer'
                    ? 'border-b-2'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={activeTab === 'manufacturer' ? {
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderImage: 'linear-gradient(to right, #4285F4, #083987) 1'
                } : {}}
              >
                I&apos;M A MANUFACTURER
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
                I&apos;M A BUSINESS OWNER
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
                I&apos;M A PROMOTER
              </button>
            </div>

            {/* Testimonial Section with Background Frame */}
            {/* Get current testimonial based on active tab */}
            {(() => {
              const currentTestimonial = testimonialData[activeTab];

              // Image mapping for each testimonial
              const testimonialImages = {
                manufacturer: "/images/home page/fifth fold/Rajesh Mehta,.png",
                business: "/images/home page/fifth fold/priya sharma.png",
                promoter: "/images/home page/fifthfoldimage.png"
              };

              const currentImage = testimonialImages[activeTab];

              return (
                <>
            {/* Mobile Layout */}
            <div className="lg:hidden px-4 group">
              {/* Customer photo with multicolor halo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300 group-hover:scale-110">
                  {/* Multicolor gradient halo */}
                  <div
                    className="absolute inset-0 rounded-full blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #00FF7F 50%, #40E0D0 75%, #1E90FF 100%)'
                    }}
                  ></div>
                  <Image
                    src={currentImage}
                    alt={currentTestimonial.name}
                    width={160}
                    height={160}
                    className="rounded-full relative z-10 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial card */}
              <div className="bg-[#181A1E] rounded-xl p-6 sm:p-8 mx-auto max-w-md transition-transform duration-300 group-hover:scale-105">
                <p className="text-base sm:text-lg text-white mb-6 text-center leading-relaxed">
                  &quot;{currentTestimonial.quote}&quot;
                </p>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-white text-base sm:text-lg text-center">
                    {currentTestimonial.name}, <span className='font-thin'>{currentTestimonial.title}</span>
                  </p>
                  <span className='font-thin text-white'>{currentTestimonial.company}</span>
                  {/* <Image
                    src="/images/home page/fifth fold/logo - transparent- vkv white 1.svg"
                    alt="VEG TRON"
                    width={80}
                    height={32}
                    className="object-contain mt-2"
                  /> */}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative flex justify-center items-center">
              {/* Styled-jsx for sliding gradient animation */}
              <style jsx>{`
                .testimonial-sliding-gradient {
                  position: absolute;
                  border-radius: 40px;
                  padding: 4px;
                  width: 840px;
                  height: 434px;
                  z-index: 0;
                  transform: translateY(30%);
                  overflow: hidden;
                  background: linear-gradient(
                    135deg,
                    rgba(255,215,0,0.3) 0%,
                    rgba(255,165,0,0.3) 12.5%,
                    rgba(0,255,127,0.3) 25%,
                    rgba(64,224,208,0.3) 37.5%,
                    rgba(30,144,255,0.3) 50%,
                    rgba(255,215,0,0.3) 62.5%,
                    rgba(255,165,0,0.3) 75%,
                    rgba(0,255,127,0.3) 87.5%,
                    rgba(64,224,208,0.3) 100%
                  );
                  background-size: 200% 200%;
                  animation: gradient-slide 2s linear infinite;
                }

                @keyframes gradient-slide {
                  0% {
                    background-position: 0% 50%;
                  }
                  100% {
                    background-position: 200% 50%;
                  }
                }
              `}</style>

              {/* Background gradient frame with sliding animation */}
              <div className="testimonial-sliding-gradient">
                <div className="w-full h-full bg-white rounded-[40px]"></div>
              </div>

              {/* Content wrapper */}
              <div className="relative pb-8 group" style={{ width: '820px', minHeight: '414px' }}>
                {/* Customer photo with multicolor halo - positioned above card */}
                <div className="flex justify-center mb-[-80px] relative z-20">
                  <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-110">
                    {/* Multicolor gradient halo */}
                    <div
                      className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #00FF7F 50%, #40E0D0 75%, #1E90FF 100%)'
                      }}
                    ></div>
                    <Image
                      src={currentImage}
                      alt={currentTestimonial.name}
                      width={160}
                      height={160}
                      className="rounded-full relative z-10"
                    />
                  </div>
                </div>

                {/* Dark testimonial card */}
                <div className="relative z-10 bg-[#181A1E] rounded-xl mx-auto transition-transform duration-300 group-hover:scale-105" style={{ width: '480px', height: '441px' }}>
                  <div className="flex flex-col items-center text-center justify-center h-full px-8 pt-24 pb-8">
                    <p className="text-lg text-white mb-8 max-w-md mx-auto mt-[40px] text-justify leading-6">
                      &quot;{currentTestimonial.quote}&quot;
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="font-bold text-white text-lg">{currentTestimonial.name}, <span className='font-thin'>{currentTestimonial.title}</span></p>
                      <span className='font-thin text-white'>{currentTestimonial.company}</span>
                      {/* <Image
                        src="/images/home page/fifth fold/logo - transparent- vkv white 1.svg"
                        alt="VEG TRON"
                        width={100}
                        height={40}
                        className="object-contain"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* SIXTH FOLD - Tamil Nadu Stats */}
      <section ref={statsRef} className="w-full bg-[#181A1E] py-8 lg:py-30 relative overflow-hidden">
        <div className="container px-4 lg:px-8">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-16 leading-tight">
              From Tamil Nadu. For Growing<br /> Business Globally.
            </h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-left">
                <h3 className="text-2xl lg:text-5xl font-semibold text-white mb-2">{businessesCount}+</h3>
                <p className="text-sm lg:text-base text-gray-300">Businesses<br />Served</p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl lg:text-5xl font-semibold text-white mb-2">{countriesCount}+</h3>
                <p className="text-sm lg:text-base text-gray-300">Countries<br />Supported</p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl lg:text-5xl font-semibold text-white mb-2">{crmSetupsCount}+</h3>
                <p className="text-sm lg:text-base text-gray-300">CRM Setups<br />Done</p>
              </div>
            </div>
          </div>
        </div>
        {/* Large illustration on the right spanning full height - Desktop only */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 items-center justify-end">
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
      <section className="w-full bg-white py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className=" mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className='max-w-lg'>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6 lg:mb-14 leading-tight">
                Your Growth Is{' '}
                <span style={{
                  background: 'linear-gradient(to right, #4285F4, #083987)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Our Responsibility.</span>
              </h2>
              <p className="text-lg text-gray-700">
                We don&apos;t just offer services—we take ownership of your success.
                From the first conversation to ongoing optimization, we&apos;re committed to delivering
                measurable results that move your business forward.
              </p>
            </div>
            <div className="rounded-[20px] aspect-video flex items-center justify-center overflow-hidden">
              <Image
                src="/images/home page/Your Growth Is Our Responsibility..gif"
                alt="Your Growth Is Our Responsibility Animation"
                width={640}
                height={360}
                className="w-full h-full object-cover rounded-[20px]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* EIGHTH FOLD - Values */}
      <section className="w-full bg-[#181A1E] py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center mb-12 lg:mb-24">
              The values that drive Centilio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Value 1 - Accountability */}
              <div className="bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-6 md:p-8 hover:border-gray-400 transition-colors flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center">
                  <Image
                    src="/images/home page/eightth fold/Vector1.svg"
                    alt="Accountability"
                    width={48}
                    height={48}
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Accountability for Growth
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  We don&apos;t just advise, we own the outcome. Your goals become our responsibility, and we stand behind our results.
                </p>
              </div>

              {/* Value 2 - Plug-and-Play */}
              <div className="bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-6 md:p-8 hover:border-gray-400 transition-colors flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center">
                  <Image
                    src="/images/home page/eightth fold/Vector2.svg"
                    alt="Plug-and-Play"
                    width={48}
                    height={48}
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Plug-and-Play Excellence
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  We bring a full team to your table researchers, tech experts, recruiters, marketers, all ready to execute.
                </p>
              </div>

              {/* Value 3 - Customer-Led */}
              <div className="bg-[#1F2125] border border-[#5B5858] rounded-[20px] p-6 md:p-8 hover:border-gray-400 transition-colors flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center">
                  <Image
                    src="/images/home page/eightth fold/Vector3.svg"
                    alt="Customer-Led"
                    width={48}
                    height={48}
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Customer-Led Innovation
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  We listen, we understand, and we build solutions around your real challenges not templates or assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NINTH FOLD - Final CTA */}
      <section className="w-full bg-white py-8 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6">
              Ready to{' '}
              <span style={{
                background: 'linear-gradient(to right, #4285F4, #083987)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Grow Your Revenue?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Plug Centilio into your business and watch the momentum kick in. We are ready when you are. Let us build your revenue engine today.
            </p>
            <div className="inline-block rounded-[50px] p-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]">
              <Link
                href="/contactpage"
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-[50px] hover:bg-gray-800 transition-colors"
              >
                TALK TO A GROWTH EXPERT
                <Image
                  src="/images/home page/cta-arrowVector.svg"
                  alt="Arrow"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
