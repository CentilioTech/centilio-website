'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import AnimatedIntegrationsSection from '@/components/ui/animated-integrations'
import WhiteHeader from '@/components/layout/WhiteHeader'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'

const integrations = [
  {
    name: 'Google Drive',
    logo: '/images/Integration page - sign/first fold 2group/logos/googledrive.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/google drive_screenshot.png',
    description: 'Bring your documents straight from Google Drive. Sign, send, and store with one click.',
    logoWidth: 183,
    logoHeight: 103
  },
  {
    name: 'Dropbox',
    logo: '/images/Integration page - sign/first fold 2group/logos/dropbox8.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/dropbox_screenshot.png',
    description: 'Access your Dropbox files seamlessly. Sign, send, and store with one click.',
    logoWidth: 60,
    logoHeight: 80
  },
  {
    name: 'Box',
    logo: '/images/Integration page - sign/first fold 2group/logos/box.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/box_screenshot.png',
    description: 'Connect with Box to manage your documents. Sign, send, and store with one click.',
    logoWidth: 90,
    logoHeight: 55
  },
  {
    name: 'HubSpot',
    logo: '/images/Integration page - sign/first fold 2group/logos/hubspot_logo.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/hubspot_screenshot.png',
    description: 'Integrate with HubSpot for seamless workflows. Sign, send, and store with one click.',
    logoWidth: 163,
    logoHeight: 103
  },
  {
    name: 'Monday',
    logo: '/images/Integration page - sign/first fold 2group/logos/monday.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/monday_screenshot.png',
    description: 'Connect Monday.com to streamline your processes. Sign, send, and store with one click.',
    logoWidth: 173,
    logoHeight: 103
  },
  {
    name: 'Pipedrive',
    logo: '/images/Integration page - sign/first fold 2group/logos/pipedrive.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/pipedrive_screenshot.png',
    description: 'Sync with Pipedrive for better sales management. Sign, send, and store with one click.',
    logoWidth: 170,
    logoHeight: 103
  }
]


export default function IntegrationPageSign() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? integrations.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === integrations.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrevious()
    }
  }

  const currentIntegration = integrations[currentIndex]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <WhiteHeader />
      <SignHeader />

      {/* Hero Section */}
      <section className="pt-12 pb-10 sm:pb-[70px] lg:pb-[80px] px-2 sm:px-4 md:px-8 lg:px-[120px]">
        <div className="w-full max-w-[1440px] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[56px] font-semibold leading-[1.2] mb-[30px] sm:mb-[40px] lg:mb-[80px] px-2 sm:px-4 lg:px-0">
            <span className="bg-gradient-to-r from-[#4285F4] via-[#00CEA1] to-[#00CEA1] bg-clip-text text-transparent">
              Connect with the apps
            </span>
            <br />
            <span className="text-white">you use every day</span>
          </h1>

          {/* Animated Integrations Layout */}
          <div className="px-2 sm:px-4 lg:px-0 w-full overflow-hidden">
            <AnimatedIntegrationsSection />
          </div>
        </div>
      </section>

      {/* Integration Carousel Section */}
      <section className="py-[40px] md:py-[60px] lg:py-[80px] px-2 sm:px-4 md:px-8 lg:px-[120px] pb-[80px] sm:pb-[100px] md:pb-[120px] lg:pb-[80px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div 
            className="relative bg-[#181A1E] border border-[#5B5858] rounded-[10px] overflow-visible h-[450px] sm:h-[500px] lg:h-[400px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Side - Content */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-[80px] flex flex-col justify-center h-full">
                <div className="flex flex-col justify-center h-full text-center lg:text-left">
                  <Image
                    src={currentIntegration.logo}
                    alt={currentIntegration.name}
                    width={currentIntegration.logoWidth}
                    height={currentIntegration.logoHeight}
                    className="mb-6 lg:mb-8 object-contain mx-auto lg:mx-0"
                  />
                  <p className="text-base sm:text-lg text-white/90 leading-[1.6] sm:leading-[2] line-clamp-4">
                    {currentIntegration.description}
                  </p>
                </div>
              </div>

              {/* Right Side - Screenshot */}
              <div className="bg-[#181A1E] border-t lg:border-t-0 lg:border-l border-[#5B5858] rounded-b-[10px] lg:rounded-b-none lg:rounded-r-[10px] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-[40px] h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={currentIntegration.screenshot}
                    alt={`${currentIntegration.name} Screenshot`}
                    width={553}
                    height={251}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="hidden lg:block absolute -left-[24px] top-1/2 -translate-y-1/2 w-12 h-12 hover:scale-110 transition-transform"
              aria-label="Previous integration"
            >
              <Image
                src="/images/Integration page - sign/left Vector.svg"
                alt="Previous"
                width={48}
                height={48}
              />
            </button>

            <button
              onClick={handleNext}
              className="hidden lg:block absolute -right-[24px] top-1/2 -translate-y-1/2 w-12 h-12 hover:scale-110 transition-transform"
              aria-label="Next integration"
            >
              <Image
                src="/images/Integration page - sign/right Vector.svg"
                alt="Next"
                width={48}
                height={48}
              />
            </button>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              {/* Mobile Arrow Buttons */}
              <div className="flex justify-between items-center px-4 mt-4 pb-4">
                <button
                  onClick={handlePrevious}
                  className="flex items-center justify-center w-10 h-10 bg-[#2A2C30] border border-[#5B5858] rounded-full hover:bg-[#3A3C40] transition-colors"
                  aria-label="Previous integration"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex gap-2">
                  {integrations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
                      }`}
                      aria-label={`Go to integration ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 bg-[#2A2C30] border border-[#5B5858] rounded-full hover:bg-[#3A3C40] transition-colors"
                  aria-label="Next integration"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Swipe Indicator */}
              {/* <p className="text-center text-xs text-gray-500 mt-3">
                Swipe left or right to browse integrations
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <SignFooter />
    </div>
  )
}
