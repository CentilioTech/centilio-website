'use client'

import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function CentilioCookiePolicy() {
  const sections = [
    // tittle //
    { id: 'section1', title: '1. What are Cookies?' },
    { id: 'section2', title: '2. How We Use Cookies' },
    { id: 'section3', title: '3. Third-Party Cookies' },
    { id: 'section4', title: '4. Your Cookie Choices' },
    { id: 'section5', title: '5. Contact Us' }
  ]

  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Cookies Policy</h1>
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
                <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                  At Centilio.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a website operated by Centilio Corporation, providing various services related to data analytics and software solutions. This Cookie Policy explains how we use cookies and similar technologies on Centilio.com (&quot;the Website&quot;) and provides information about the options available to you regarding their use.
                </p>

                {/* Section 1 - What are Cookies? */}
                <div id="section1" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">1. What are Cookies?</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    Cookies are small data files that are sent to your computer or mobile device when you browse a website. They are widely used on the internet and can serve various purposes, both for businesses and users. Cookies can enhance your browsing experience and provide valuable insights to website owners. However, they can also impact your privacy.
                  </p>
                </div>

                {/* Section 2 - How We Use Cookies */}
                <div id="section2" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">2. How We Use Cookies</h2>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    We use cookies and similar technologies on Centilio.com to improve the functionality and performance of our Website, as well as to provide a personalized user experience. The cookies we use can be classified into the following categories:
                  </p>
                  <div className="text-gray-300 space-y-3 md:space-y-4 ml-3 md:ml-4 text-sm md:text-base" style={{ lineHeight: '22px' }}>
                    <p>
                      <strong className="text-white">Essential Cookies:</strong> These cookies are necessary for the operation of the Website and enable you to navigate and use its features. They may include cookies that allow you to log in to secure areas of the Website, authenticate your identity, and maintain session information. Without these cookies, certain features of the Website may not be accessible.
                    </p>
                    <p>
                      <strong className="text-white">Functional Cookies:</strong> Functional cookies enable the Website to remember your preferences and provide enhanced functionality. For example, these cookies may remember your language preferences or personalize certain features according to your choices. Disabling functional cookies may result in the loss of certain customizations and preferences.
                    </p>
                    <p>
                      <strong className="text-white">Performance Cookies:</strong> Performance cookies help us analyze how visitors use the Website and assess its performance. These cookies collect information about your interactions with the Website, such as the pages you visit most frequently and any error messages encountered. The data collected is aggregated and anonymized, and it helps us improve the overall user experience and optimize the Website&apos;s performance.
                    </p>
                    <p>
                      <strong className="text-white">Targeting Cookies:</strong> Targeting cookies are used to deliver relevant advertisements to you based on your interests and browsing behavior. These cookies may be placed by our advertising partners or third-party service providers. They allow us to measure the effectiveness of our advertising campaigns and deliver personalized content. Disabling targeting cookies may result in less relevant advertising being displayed to you.
                    </p>
                  </div>
                </div>

                {/* Section 3 - Third-Party Cookies */}
                <div id="section3" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">3. Third-Party Cookies</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                   We may also allow third-party cookies to be placed on Centilio.com. These cookies are provided by trusted third parties to assist us in analyzing website usage, improving our services, and delivering targeted advertisements. We do not have direct control over these cookies, and their use is subject to the respective third party&apos;s privacy policies. We recommend reviewing the privacy policies of these third parties for more information on their cookie usage and opt-out options.
                  </p>
                </div>

                {/* Section 4 - Your Cookie Choices */}
                <div id="section4" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">4. Your Cookie Choices</h2>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                   You have the option to manage your cookie preferences and control their use through your web browser settings. Most web browsers allow you to delete or block cookies and configure preferences for different websites. However, please note that disabling certain cookies may impact the functionality and user experience of Centilio.com.
                  </p>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    For more information on how to manage cookies in your browser, you can refer to the help pages or settings of your specific browser. The following links provide guidance for popular browsers:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-3 md:ml-4 text-sm md:text-base" style={{ lineHeight: '22px' }}>
                    <p>• Google Chrome: <a href="https://support.google.com/chrome/answer/95647" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Google Chrome Help</a></p>
                    <p>• Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Microsoft Edge Cookie Help</a></p>
                    <p>• Opera: <a href="https://help.opera.com/en/latest/web-preferences/#cookies" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Opera Cookie Help</a></p>
                    <p>• Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Firefox Desktop Tracking Protection</a></p>
                    <p>• Apple Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Apple Cookie Help</a></p>
                  </div>
                  <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    You can also manage cookie preferences through our Cookie Banner. By accepting cookies, you consent to the use of cookies as explained in this Cookie Policy. If you choose to decline non-essential cookies, certain features of the Website may be limited, but the use of essential cookies will not be affected.
                  </p>
                  <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    Additionally, you can manage third-party cookies by adjusting your browser settings or by visiting the respective third-party websites for more information on their cookie management and opt-out options. You may find further resources at the following websites:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-3 md:ml-4 mt-3 md:mt-4 text-sm md:text-base" style={{ lineHeight: '22px' }}>
                    <p>• All About Cookies: <a href="http://www.allaboutcookies.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org/</a></p>
                    <p>• Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/</a></p>
                    <p>• Wikipedia: <a href="https://en.wikipedia.org/wiki/HTTP_cookie" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/HTTP_cookie</a></p>
                  </div>
                </div>

                {/* Section 5 - Contact Us */}
                <div id="section5" className="mb-8 md:mb-12 scroll-mt-32">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">5. Contact Us</h2>
                  <p className="text-gray-300 text-sm md:text-base md:leading-8" style={{ lineHeight: '24px' }}>
                    If you have any questions or concerns about our Cookie Policy, please contact us at team@centilio.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
      <Footer/>
    </div>
  )
}
