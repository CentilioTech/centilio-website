'use client'

import Image from 'next/image'
import { useState } from 'react'

const integrations = [
  {
    name: 'Google Drive',
    logo: '/images/Integration page - sign/first fold 2group/logos/googledrive.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/google drive_screenshot.png',
    description: 'Bring your documents straight from Google Drive. Sign, send, and store with one click.'
  },
  {
    name: 'Dropbox',
    logo: '/images/Integration page - sign/first fold 2group/logos/dropbox.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/dropbox_screenshot.png',
    description: 'Access your Dropbox files seamlessly. Sign, send, and store with one click.'
  },
  {
    name: 'Box',
    logo: '/images/Integration page - sign/first fold 2group/logos/box.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/box_screenshot.png',
    description: 'Connect with Box to manage your documents. Sign, send, and store with one click.'
  },
  {
    name: 'HubSpot',
    logo: '/images/Integration page - sign/first fold 2group/logos/hubspot_logo.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/hubspot_screenshot.png',
    description: 'Integrate with HubSpot for seamless workflows. Sign, send, and store with one click.'
  },
  {
    name: 'Monday',
    logo: '/images/Integration page - sign/first fold 2group/logos/monday.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/monday_screenshot.png',
    description: 'Connect Monday.com to streamline your processes. Sign, send, and store with one click.'
  },
  {
    name: 'Pipedrive',
    logo: '/images/Integration page - sign/first fold 2group/logos/pipedrive.png',
    screenshot: '/images/Integration page - sign/first fold 2group/screenshots/pipedrive_screenshot.png',
    description: 'Sync with Pipedrive for better sales management. Sign, send, and store with one click.'
  }
]

const circularLogos = [
  { src: '/images/Integration page - sign/first fold 1group/logos/pipedrive_logo.png', alt: 'Pipedrive', position: 'top-left' },
  { src: '/images/Integration page - sign/first fold 1group/logos/hubspot_logo.png', alt: 'HubSpot', position: 'top-right' },
  { src: '/images/Integration page - sign/first fold 1group/logos/monday_logo.png', alt: 'Monday', position: 'left' },
  { src: '/images/Integration page - sign/first fold 1group/logos/dropbox_logo.png', alt: 'Dropbox', position: 'center-left' },
  { src: '/images/Integration page - sign/first fold 1group/logos/box_logo.png', alt: 'Box', position: 'center-right' },
  { src: '/images/Integration page - sign/first fold 1group/logos/googledrive_logo.png', alt: 'Google Drive', position: 'right' }
]

export default function IntegrationPageSign() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? integrations.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === integrations.length - 1 ? 0 : prev + 1))
  }

  const currentIntegration = integrations[currentIndex]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0F13]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-[120px] py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Integration page - sign/Layer 1.svg"
              alt="Sign Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-semibold">Sign</span>
          </div>
          <nav className="flex items-center gap-12">
            <a href="#" className="text-base font-medium hover:text-blue-400 transition-colors">Features</a>
            <a href="#" className="text-base font-medium hover:text-blue-400 transition-colors">Integrations</a>
            <a href="#" className="text-base font-medium hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#" className="text-base font-medium hover:text-blue-400 transition-colors">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[100px] pb-[80px] px-[120px]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-[56px] font-semibold leading-[1.2] mb-[80px]">
            <span className="bg-gradient-to-r from-[#4285F4] via-[#00CEA1] to-[#00CEA1] bg-clip-text text-transparent">
              Connect with the apps
            </span>
            <br />
            <span className="text-white">you use every day</span>
          </h1>

          {/* Circular Integration Layout */}
          <div className="relative w-full max-w-[800px] h-[640px] mx-auto">
            {/* Background Ellipse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[598px] h-[598px]">
              <Image
                src="/images/Integration page - sign/first fold 1group/bg_Ellipse.svg"
                alt="Background"
                width={598}
                height={598}
                className="opacity-80"
              />
            </div>

            {/* Vector Circle */}
            <div className="absolute top-[135px] left-[201px] w-[398px] h-[398px]">
              <Image
                src="/images/Integration page - sign/first fold 1group/Vector.svg"
                alt="Vector Circle"
                width={398}
                height={398}
              />
            </div>

            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-[#000000] border border-[#5B5858]/20 flex items-center justify-center z-10 shadow-lg">
              <Image
                src="/images/Integration page - sign/Vector1.svg"
                alt="Sign Logo"
                width={62}
                height={77}
              />
            </div>

            {/* Circular Logos - Positioned according to Figma coordinates */}
            {/* Pipedrive - Top Left */}
            <div className="absolute top-[50px] left-[181px]">
              <Image
                src={circularLogos[0].src}
                alt={circularLogos[0].alt}
                width={80}
                height={80}
              />
            </div>

            {/* HubSpot - Top Right */}
            <div className="absolute top-[50px] left-[543px]">
              <Image
                src={circularLogos[1].src}
                alt={circularLogos[1].alt}
                width={80}
                height={80}
              />
            </div>

            {/* Monday - Left */}
            <div className="absolute top-[221px] left-[48px]">
              <Image
                src={circularLogos[2].src}
                alt={circularLogos[2].alt}
                width={80}
                height={80}
              />
            </div>

            {/* Dropbox - Center Left */}
            <div className="absolute top-[239px] left-[168px]">
              <Image
                src={circularLogos[3].src}
                alt={circularLogos[3].alt}
                width={80}
                height={80}
              />
            </div>

            {/* Box - Center Right */}
            <div className="absolute top-[239px] left-[551px]">
              <Image
                src={circularLogos[4].src}
                alt={circularLogos[4].alt}
                width={80}
                height={80}
              />
            </div>

            {/* Google Drive - Right */}
            <div className="absolute top-[221px] left-[671px]">
              <Image
                src={circularLogos[5].src}
                alt={circularLogos[5].alt}
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Carousel Section */}
      <section className="py-[80px] px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative bg-[#181A1E] border border-[#5B5858] rounded-[10px] overflow-visible">
            <div className="grid grid-cols-2">
              {/* Left Side - Content */}
              <div className="p-[80px] flex flex-col justify-center">
                <Image
                  src={currentIntegration.logo}
                  alt={currentIntegration.name}
                  width={183}
                  height={103}
                  className="mb-8"
                />
                <p className="text-lg text-white/90 leading-[2]">
                  {currentIntegration.description}
                </p>
              </div>

              {/* Right Side - Screenshot */}
              <div className="bg-[#181A1E] border-l border-[#5B5858] rounded-r-[10px] flex items-center justify-center p-[40px]">
                <Image
                  src={currentIntegration.screenshot}
                  alt={`${currentIntegration.name} Screenshot`}
                  width={553}
                  height={251}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute -left-[24px] top-1/2 -translate-y-1/2 w-12 h-12 hover:scale-110 transition-transform"
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
              className="absolute -right-[24px] top-1/2 -translate-y-1/2 w-12 h-12 hover:scale-110 transition-transform"
              aria-label="Next integration"
            >
              <Image
                src="/images/Integration page - sign/right Vector.svg"
                alt="Next"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181A1E] mt-[100px]">
        <div className="max-w-[1440px] mx-auto px-[120px] py-[100px]">
          <div className="grid grid-cols-3 gap-[160px]">
            {/* Logo */}
            <div>
              <Image
                src="/images/Integration page - sign/Vector1.svg"
                alt="Sign Logo"
                width={62}
                height={77}
              />
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-base font-semibold text-white/90 hover:text-blue-400 transition-colors">
                    Sign
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-semibold text-white/90 hover:text-blue-400 transition-colors">
                    SEO Bot
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-base font-semibold text-white/90 hover:text-blue-400 transition-colors">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-semibold text-white/90 hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-semibold text-white/90 hover:text-blue-400 transition-colors">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base font-semibold text-white/90 hover:text-blue-400 transition-colors">
                    GDPR Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20">
          <div className="max-w-[1440px] mx-auto px-[120px] py-6 flex items-center justify-end">
            <div className="flex items-center gap-11">
              <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
                <Image
                  src="/images/Integration page - sign/footer/facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </a>
              <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
                <Image
                  src="/images/Integration page - sign/footer/insta.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
                <Image
                  src="/images/Integration page - sign/footer/youtube.svg"
                  alt="YouTube"
                  width={30}
                  height={30}
                />
              </a>
              <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
                <Image
                  src="/images/Integration page - sign/footer/link in (1).svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
                <Image
                  src="/images/Integration page - sign/footer/twitter.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
