'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SeobotHeader from '@/components/layout/SeobotHeader'
import SeobotFooter from '@/components/layout/SeobotFooter'
import { TextRevealCard } from '@/components/ui/text-reveal-card'
import { Button } from '@/components/ui/moving-border'

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

export default function SeoBotHomePage() {
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(1)
  const statsRef = useRef<HTMLElement>(null)
  const featureRefs = useRef<Array<HTMLDivElement | null>>([])

  // Animation values
  const documentsCount = useCountAnimation(12000, 2000, isStatsVisible)
  const signedCount = useCountAnimation(17000, 2000, isStatsVisible)
  const minutesSaved = useCountAnimation(800000, 2000, isStatsVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  // Scroll-based feature detection for image switching
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const viewportCenter = window.innerHeight / 2
        let closestFeature = 1
        let minDistance = Infinity

        featureRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect()
            const elementCenter = rect.top + rect.height / 2
            const distanceFromCenter = Math.abs(viewportCenter - elementCenter)
            
            // Find the feature closest to viewport center (and is visible)
            if (distanceFromCenter < minDistance && rect.bottom > 0 && rect.top < window.innerHeight) {
              minDistance = distanceFromCenter
              closestFeature = index + 1
            }
          }
        })

        console.log('Closest feature to center:', closestFeature, 'Distance:', minDistance) // Debug log
        setActiveFeature(closestFeature)
      }, 10) // Small delay to throttle
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial call to set the first feature
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const formatNumber = (num: number, suffix: string) => {
    if (num >= 1000000) {
      return `+${Math.floor(num / 1000)}k${suffix}`
    } else if (num >= 1000) {
      return `+${Math.floor(num / 1000)}k${suffix}`
    }
    return `+${num}${suffix}`
  }

  return (
    <div className="min-h-screen bg-white">
      <SeobotHeader />

      {/* First Fold - Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0E0F18] to-[#4285F4] pt-16 sm:pt-20 md:pt-24 lg:h-[750px] overflow-visible">
        <div className="container relative w-full h-full mx-auto px-4 lg:px-0">
          
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Left Content */}
            <div className="absolute" style={{ left: '102px', top: '102px' }}>
              {/* Heading with Text Reveal Animation */}
              <div className="mb-6" style={{ maxWidth: '700px' }}>
                <TextRevealCard
                  text="Automated SEO Blogging Made Effortless"
                  revealText="Automated SEO Blogging Made Effortless"
                  className="bg-transparent border-none p-0 w-full max-w-none"
                />
              </div>

              {/* Subheading */}
              <p className="text-white mb-10" style={{ fontSize: '24px', lineHeight: '29px', width: '414px' }}>
                Centilio SEO Bot finds, writes, and<br />schedules content for you.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                 <a href="/signup">
              <Button
                borderRadius="50px"
                className="bg-white text-black font-semibold  cursor-pointer hover:bg-gray-100 transition-colors"
                containerClassName="w-[202px] h-[52px]"
                borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_60%,transparent_80%)]"
                duration={3000}
              >
                START CREATING
              </Button>
              </a>
             
            </div>
          </div>

          {/* White Rectangle Container - Positioned at bottom, extending beyond section */}
          <div className="absolute left-4 xl:left-[102px] right-4 xl:right-auto bottom-[-180px] z-10">
            <div className="bg-white border border-[#D2E5F7] rounded-md p-6 xl:p-12 w-full xl:w-[1284px] min-h-[250px] xl:h-[298px]">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left Column - Feature Description */}
                <div className="flex-1 lg:max-w-[423px]">
                  <p className="text-black font-light text-lg lg:text-2xl leading-relaxed lg:leading-9">
                    Discover articles by keyword, edit with ease, and schedule them to your site, no writing needed.
                  </p>
                </div>

                {/* Right Column - Icon-based Benefits */}
                <div className="flex-1 space-y-4 lg:space-y-8">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/seobothomepage/first fold/icons/Vector1.svg"
                      alt="Auto-crawls"
                      width={40}
                      height={40}
                    />
                    <p className="text-black text-sm lg:text-base leading-6 pt-2">
                      Auto-crawls the web for related articles
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/seobothomepage/first fold/icons/Vector2.svg"
                      alt="Customize"
                      width={40}
                      height={40}
                    />
                    <p className="text-black text-sm lg:text-base leading-6 pt-2">
                      Customize and enhance with images
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/seobothomepage/first fold/icons/Vector3.svg"
                      alt="Review"
                      width={40}
                      height={40}
                    />
                    <p className="text-black text-sm lg:text-base leading-6 pt-2">
                      Review, refine, and publish instantly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>


          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden py-12 px-4">
            <div className="text-center mb-12">
              {/* Mobile Heading */}
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Automated SEO Blogging Made Effortless
              </h1>
              
              {/* Mobile Subheading */}
              <p className="text-white text-lg sm:text-xl mb-8 max-w-md mx-auto">
                Centilio SEO Bot finds, writes, and schedules content for you.
              </p>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="/signup">
                <button className="w-full sm:w-auto min-w-[200px] h-12 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm px-8">
                  START CREATING
                </button>
                </a>
              
              </div>
            </div>

            {/* Mobile Product Image - Hidden on small screens */}
            <div className="hidden sm:flex justify-center mb-8">
              <Image
                src="/images/seobothomepage/first fold/images/image1.png"
                alt="SEO Bot Dashboard"
                width={600}
                height={590}
                className="max-w-full h-auto"
              />
            </div>

            {/* Mobile Features */}
            <div className="bg-white rounded-xl p-6 mx-4 shadow-lg">
              <p className="text-black text-lg font-light mb-6 text-center">
                Discover articles by keyword, edit with ease, and schedule them to your site, no writing needed.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/seobothomepage/first fold/icons/Vector1.svg"
                    alt="Auto-crawls"
                    width={32}
                    height={32}
                  />
                  <p className="text-black text-sm">
                    Auto-crawls the web for related articles
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/seobothomepage/first fold/icons/Vector2.svg"
                    alt="Customize"
                    width={32}
                    height={32}
                  />
                  <p className="text-black text-sm">
                    Customize and enhance with images
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/seobothomepage/first fold/icons/Vector3.svg"
                    alt="Review"
                    width={32}
                    height={32}
                  />
                  <p className="text-black text-sm">
                    Review, refine, and publish instantly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
                  {/* Right Product Image - Desktop Only */}
          <div className="hidden lg:block absolute right-0 xl:right-0 top-[30%] z-20">
            <Image
              src="/images/seobothomepage/first fold/images/image1.png"
              alt="SEO Bot Dashboard"
              width={817}
              height={811}
              className="w-[500px] xl:w-[650px] 2xl:w-[817px] h-auto"
            />
          </div>

      </section>

      {/* Second Fold - Trusted By Section */}
      <section className="bg-white pt-32 sm:pt-40 lg:pt-60 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-8 sm:mb-12 lg:mb-16">Trusted by</h2>

          {/* Desktop Layout - Hidden on mobile/tablet */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-16">
            <Image
              src="/images/seobothomepage/second fold/digitalocean-2-logo-png-transparent.png"
              alt="DigitalOcean"
              width={180}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/Google_Cloud_logo.svg.png"
              alt="Google Cloud"
              width={180}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/monday.com logo option 1.png"
              alt="Monday.com"
              width={180}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/ion8_logo option1.png"
              alt="ion8"
              width={120}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/seobothomepage/second fold/aws logo.png"
              alt="AWS"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Mobile & Tablet Layout - Grid */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
            <Image
              src="/images/seobothomepage/second fold/digitalocean-2-logo-png-transparent.png"
              alt="DigitalOcean"
              width={140}
              height={40}
              className="object-contain max-w-full h-auto"
            />
            <Image
              src="/images/seobothomepage/second fold/Google_Cloud_logo.svg.png"
              alt="Google Cloud"
              width={140}
              height={40}
              className="object-contain max-w-full h-auto"
            />
            <Image
              src="/images/seobothomepage/second fold/monday.com logo option 1.png"
              alt="Monday.com"
              width={140}
              height={40}
              className="object-contain max-w-full h-auto"
            />
            <Image
              src="/images/seobothomepage/second fold/ion8_logo option1.png"
              alt="ion8"
              width={100}
              height={40}
              className="object-contain max-w-full h-auto"
            />
            <div className="col-span-2 sm:col-span-1 flex justify-center">
              <Image
                src="/images/seobothomepage/second fold/aws logo.png"
                alt="AWS"
                width={80}
                height={40}
                className="object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Fold - Stats Section */}
      <section ref={statsRef} className="bg-[#181A1E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                +{Math.floor(documentsCount / 1000)}k
              </h2>
              <p className="text-gray-300 text-lg">Uploaded Documents</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                +{Math.floor(signedCount / 1000)}k
              </h2>
              <p className="text-gray-300 text-lg">Documents Signed</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                +{Math.floor(minutesSaved / 1000)}k
              </h2>
              <p className="text-gray-300 text-lg">Minutes Saved on Paperwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Fold - Why Teams Choose Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-black mb-6" style={{ fontSize: '48px', lineHeight: '58px' }}>
              Why teams choose<br />Centilio SEO Bot
            </h2>
            <p className="text-xl" style={{ fontSize: '20px', lineHeight: '30px', color: '#181A1E' }}>Get ranked faster. Post smarter. Save time.</p>
          </div>

          {/* Desktop Two Column Layout with Absolute Positioning */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 relative" style={{ minHeight: '2200px' }}>
            {/* Left Column - Features with Absolute Positioning */}
            <div className="relative max-w-lg">
              {/* Feature 1 - Instant Content Discovery */}
              <div 
                ref={(el) => {
                  if (el) featureRefs.current[0] = el;
                }}
                className="absolute w-full"
                style={{ top: '100px' }}
              >
                <div className="flex items-start gap-6 py-20">
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon1.png"
                    alt="Instant Content Discovery"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instant Content Discovery</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Just type a keyword SEO Bot fetches top-matching articles and ideas from across the web.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Complete Content Control */}
              <div 
                ref={(el) => {
                  if (el) featureRefs.current[1] = el;
                }}
                className="absolute w-full"
                style={{ top: '400px' }}
              >
                <div className="flex items-start gap-6 py-20">
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon2.png"
                    alt="Complete Content Control"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Complete Content Control</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Easily edit text, add visuals, or rewrite sections. Make every blog post truly yours
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 - One-Click Scheduling */}
              <div 
                ref={(el) => {
                  if (el) featureRefs.current[2] = el;
                }}
                className="absolute w-full"
                style={{ top: '800px' }}
              >
                <div className="flex items-start gap-6 py-20">
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon3.png"
                    alt="One-Click Scheduling"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">One-Click Scheduling</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Pick a date and let the bot handle the rest. Stay consistent with zero manual effort
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 - Built-In Review Flow */}
              <div 
                ref={(el) => {
                  if (el) featureRefs.current[3] = el;
                }}
                className="absolute w-full"
                style={{ top: '1200px' }}
              >
                <div className="flex items-start gap-6 py-20">
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon4.png"
                    alt="Built-In Review Flow"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Built-In Review Flow</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Collaborate with your team send drafts for review before publishing live.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 - Boost Your Website SEO */}
              <div 
                ref={(el) => {
                  if (el) featureRefs.current[4] = el;
                }}
                className="absolute w-full"
                style={{ top: '1600px' }}
              >
                <div className="flex items-start gap-6 py-20">
                  <Image
                    src="/images/seobothomepage/fourth fold/icon image/icon5.png"
                    alt="Boost Your Website SEO"
                    width={50}
                    height={50}
                    className="flex-shrink-0 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Boost Your Website SEO</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Fresh, optimized content published regularly helps increase search visibility and traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Product Image with Straight Line Background */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="relative bg-[#181A1E] rounded-2xl p-8 h-[500px] flex items-center justify-center transition-all duration-700 ease-in-out overflow-hidden">
                {/* Straight Line Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{ 
                    backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 49%, #4285F4 49%, #4285F4 51%, transparent 51%, transparent 100%)`,
                    backgroundSize: '60px 100%'
                  }}></div>
                  <div className="absolute inset-0" style={{ 
                    backgroundImage: `linear-gradient(0deg, transparent 0%, transparent 49%, #34A853 49%, #34A853 51%, transparent 51%, transparent 100%)`,
                    backgroundSize: '100% 60px'
                  }}></div>
                </div>
                
                {/* Product Image */}
                <div className="relative z-10 transition-all duration-700 ease-out transform">
                  <Image
                    src={`/images/seobothomepage/fourth fold/sc images/product${activeFeature}.png`}
                    alt="SEO Bot Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg transition-all duration-700 ease-out max-w-full h-auto shadow-2xl"
                    key={activeFeature}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Mobile Card Layout */}
          <div className="lg:hidden space-y-8">
            {/* Feature 1 - Instant Content Discovery */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <Image
                  src="/images/seobothomepage/fourth fold/icon image/icon1.png"
                  alt="Instant Content Discovery"
                  width={50}
                  height={50}
                  className="flex-shrink-0 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instant Content Discovery</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Just type a keyword SEO Bot fetches top-matching articles and ideas from across the web.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Complete Content Control */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <Image
                  src="/images/seobothomepage/fourth fold/icon image/icon2.png"
                  alt="Complete Content Control"
                  width={50}
                  height={50}
                  className="flex-shrink-0 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Complete Content Control</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Easily edit text, add visuals, or rewrite sections. Make every blog post truly yours
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - One-Click Scheduling */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <Image
                  src="/images/seobothomepage/fourth fold/icon image/icon3.png"
                  alt="One-Click Scheduling"
                  width={50}
                  height={50}
                  className="flex-shrink-0 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">One-Click Scheduling</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Pick a date and let the bot handle the rest. Stay consistent with zero manual effort
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - Built-In Review Flow */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <Image
                  src="/images/seobothomepage/fourth fold/icon image/icon4.png"
                  alt="Built-In Review Flow"
                  width={50}
                  height={50}
                  className="flex-shrink-0 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Built-In Review Flow</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Collaborate with your team send drafts for review before publishing live.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 - Boost Your Website SEO */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-6">
                <Image
                  src="/images/seobothomepage/fourth fold/icon image/icon5.png"
                  alt="Boost Your Website SEO"
                  width={50}
                  height={50}
                  className="flex-shrink-0 rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Boost Your Website SEO</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fresh, optimized content published regularly helps increase search visibility and traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Fold - Testimonials Section */}
      <section className="bg-[#181A1E] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What our users say</h2>

          <div className="border-2 border-[#5A5858] rounded-2xl p-12 relative">
            <div className="flex items-start justify-between mb-6">
              <Image
                src="/images/seobothomepage/fifth fold/quote.png"
                alt="Quote"
                width={24}
                height={24}
                className="opacity-80"
              />
              <div className="flex gap-1">
                <Image
                  src="/images/seobothomepage/fifth fold/stars_Vector.svg"
                  alt="5 Stars"
                  width={160}
                  height={24}
                />
              </div>
            </div>

            <p className="text-white text-xl leading-relaxed mb-8">
              &ldquo;From content discovery to final review, everything is streamlined. We&apos;ve seen a 40% boost in organic traffic since using SEO Bot. It&apos;s like having a content team on autopilot.&rdquo;
            </p>

            <div className="text-white">
              <p className="font-semibold">Shafiq, <span className="font-normal">Meka Innovations,</span></p>
              <p className="text-gray-400">Singapore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Fold - CTA Section */}
      <section className="bg-[#181A1E] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Automate Your Blog?</h2>
            <p className="text-xl text-gray-300 mb-4">
              Let Centilio SEO Bot do the heavy lifting from finding content ideas to publishing them live.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              No writers. No delays. Just consistent, SEO-friendly content that grows your traffic
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <a href="/signup">
              <button className="bg-white text-black px-8 py-4 rounded-full  cursor-pointer font-semibold hover:bg-gray-100 transition-colors">
                GET STARTED NOW
              </button>
              </a>
            </div>

            {/* Feature Checkmarks */}
            <div className="flex items-center justify-center gap-16 mb-16">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/seobothomepage/sixth fold/tick_Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-white">No learning curve</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/seobothomepage/sixth fold/tick_Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-white">Works for any industry</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/seobothomepage/sixth fold/tick_Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-white">Results from day one</span>
              </div>
            </div>

            {/* Demo Video */}
            <div className="max-w-5xl mx-auto border border-[#5A5858] rounded-2xl" style={{ padding: '19px' }}>
              <div className="bg-white rounded-2xl overflow-hidden" style={{ height: '500px' }}>
                <Image
                  src="/images/seobothomepage/sixth fold/seobothomepage.gif"
                  alt="SEO Bot Demo"
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Fold - Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Join hundreds of businesses using Centilio SEO Bot
          </h2>
          <p className="text-3xl font-bold text-black">
            to stay ahead in the content game.
          </p>
        </div>
      </section>

      <SeobotFooter />
    </div>
  )
}
