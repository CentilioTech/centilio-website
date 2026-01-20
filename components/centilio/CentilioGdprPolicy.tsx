'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function CentilioGdprPolicy() {
  const sections = [
    // Title//
    { id: 'section1', title: '1. Data Controller and Data Protection Officer' },
    { id: 'section2', title: '2. Lawful Basis for Processing' },
    { id: 'section3', title: '3. Data Subject Rights' },
    { id: 'section4', title: '4. Data Retention' },
    { id: 'section5', title: '5. Data Security' },
    { id: 'section6', title: '6. Data Breach Notification' },
    { id: 'section7', title: '7. International Data Transfers' },
    { id: 'section8', title: '8. Third-Party Processors' },
    { id: 'section9', title: '9. Privacy by Design' },
    { id: 'section10',title: '10. Training and Awareness' },
    { id: 'section11',title: '11. Contact Us' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-[#0E0F18] border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          Logo
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/centiliogdprpolicy/centilio logo vERSION 1 (1).png"
              alt="Centilio Logo"
              width={150}
              height={50}
            />
          </Link>

          Navigation
          <div className="flex items-center gap-8">
            <Link href="/products" className="text-white hover:text-gray-300 transition-colors">Products</Link>
            <Link href="/industries" className="text-white hover:text-gray-300 transition-colors">Industries</Link>
            <Link href="/customers" className="text-white hover:text-gray-300 transition-colors">Customers</Link>
            <Link href="/partners" className="text-white hover:text-gray-300 transition-colors">Partners</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          </div>

          Actions
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-gray-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/sign-in" className="text-white hover:text-gray-300 transition-colors">Sign In</Link>
            <Link
              href="/sign-up"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #34A853, #EA4435, #FBBC05, #4285F4) border-box',
                border: '2px solid transparent'
              }}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header> */}
      <Header/>

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#0E0F18]">
        {/* Background blur layer */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #083987 0%, #083987 50%, transparent 70%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">GDPR Policy</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-[#0E0F18]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Sidebar - Table of Contents - Hidden on mobile, visible on large screens */}
            <div className="hidden lg:block lg:col-span-3">
              <nav className="sticky top-32">
                <ul className="space-y-3">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed block border-l-2 border-transparent hover:border-blue-500 pl-4 py-1"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9">
              <div className="prose prose-invert max-w-none">
                {/* Introduction */}
                <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                  At Centilio, we are committed to protecting the privacy and security of our users. This GDPR Policy explains how we comply with the General Data Protection Regulation (GDPR) and outlines our approach to data protection.
                </p>

                {/* Section 1 */}
                <div id="section1" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">1. Data Controller and Data Protection Officer</h2>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    Centilio is the data controller for the personal data that we collect and process. We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. Our DPO can be contacted at team@centilio.com.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="section2" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">2. Lawful Basis for Processing</h2>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We process personal data only when we have a lawful basis for doing so. Our lawful bases include:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-3 md:ml-4 text-sm md:text-base" style={{ lineHeight: '22px' }}>
                    <p>a. Consent: We obtain consent from users before collecting and processing their personal data.</p>
                    <p>b. Contractual necessity: We process personal data that is necessary to fulfill our contractual obligations to our users.</p>
                    <p>c. Legitimate interests: We process personal data that is necessary for our legitimate interests, such as improving our products and services and preventing fraud.</p>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="section3" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">3. Data Subject Rights</h2>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    Under the GDPR, individuals have certain rights with respect to their personal data. These rights include:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-3 md:ml-4 text-sm md:text-base" style={{ lineHeight: '22px' }}>
                    <p>a. Right of access: Individuals have the right to request access to their personal data that we hold.</p>
                    <p>b. Right to rectification: Individuals have the right to request that we correct any inaccuracies in their personal data.</p>
                    <p>c. Right to erasure: Individuals have the right to request that we delete their personal data.</p>
                    <p>d. Right to restrict processing: Individuals have the right to request that we limit the processing of their personal data.</p>
                    <p>e. Right to data portability: Individuals have the right to receive a copy of their personal data in a structured, commonly used, and machine-readable format.</p>
                    <p>f. Right to object: Individuals have the right to object to the processing of their personal data on certain grounds.</p>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="section4" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">4. Data Retention</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected and processed, or as required by law. We have retention policies in place to ensure that we do not retain personal data for longer than necessary.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="section5" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">5. Data Security</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We take appropriate technical and organizational measures to ensure the security of personal data. We use encryption, firewalls, and access controls to protect personal data from unauthorized access, disclosure, and destruction.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="section6" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">6. Data Breach Notification</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    In the event of a data breach, we will notify affected individuals and the supervisory authority in accordance with the GDPR requirements.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="section7" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">7. International Data Transfers</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We may transfer personal data to countries outside of the European Economic Area (EEA) that do not provide an adequate level of protection for personal data. In such cases, we will ensure that appropriate safeguards are in place to protect personal data.
                  </p>
                </div>

                {/* Section 8 */}
                <div id="section8" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">8. Third-Party Processors</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We use third-party processors to process personal data on our behalf. We have contracts in place with these processors that require them to comply with the GDPR and provide appropriate security measures.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="section9" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">9. Privacy by Design</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We incorporate privacy by design principles into our products and services. We consider the privacy implications of our products and services from the outset and implement appropriate measures to protect personal data.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="section10" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">10. Training and Awareness</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We provide training and awareness programs to our employees and contractors to ensure that they are aware of their GDPR obligations and responsibilities.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="section11" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">11. Contact Us</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    If you have any questions or concerns about our GDPR compliance, please contact our Data Protection Officer at team@centilio.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#181A1E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            Logo Section
            <div>
              <Image
                src="/images/centiliogdprpolicy/centilio logo vERSION 1 (1).png"
                alt="Centilio Logo"
                width={150}
                height={50}
              />
            </div>

            Product Links
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3">
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

            Company Links
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            Legal Links
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
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

          Social Media Icons
          <div className="flex items-center justify-end pt-8 border-t border-gray-700 gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/centiliogdprpolicy/footer/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/centiliogdprpolicy/footer/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/centiliogdprpolicy/footer/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/centiliogdprpolicy/footer/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/images/centiliogdprpolicy/footer/twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
  )
}
