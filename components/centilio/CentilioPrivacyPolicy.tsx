'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CentilioPrivacyPolicy() {
  const sections = [
    { id: 'section1', title: 'About us' },
    { id: 'section2', title: 'About this Privacy Notice' },
    { id: 'section3', title: 'Third-Party Websites and Services' },
    { id: 'section4', title: 'Types of Information We Collect' },
    { id: 'section5', title: 'Information You Provide Us' },
    { id: 'section6', title: 'Information Collected via Technology' },
    { id: 'section7', title: 'Use and Processing of Personal Information' },
    { id: 'section8', title: 'Use of Non-Personal Information' },
    { id: 'section9', title: 'Sharing of Your Personal Information' },
    { id: 'section10', title: 'Retention of Your Personal Information' },
    { id: 'section11', title: 'How We Protect Your Personal Information' },
    { id: 'section12', title: 'Your Choices' },
    { id: 'section13', title: 'International Data Transfers' },
    { id: 'section14', title: 'Children and Minors' },
    { id: 'section15', title: 'Accessibility' },
    { id: 'section16', title: 'Changes to our Privacy Notice' },
    { id: 'section17', title: 'Contacting us' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0E0F18] border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/centiliogdprpolicy/centilio logo vERSION 1 (1).png"
              alt="Centilio Logo"
              width={150}
              height={50}
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/products" className="text-white hover:text-gray-300 transition-colors">Products</Link>
            <Link href="/industries" className="text-white hover:text-gray-300 transition-colors">Industries</Link>
            <Link href="/customers" className="text-white hover:text-gray-300 transition-colors">Customers</Link>
            <Link href="/partners" className="text-white hover:text-gray-300 transition-colors">Partners</Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
          </div>

          {/* Actions */}
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
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#0E0F18]">
        {/* Background blur layer */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #083987 0%, #083987 50%, transparent 70%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#0E0F18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            {/* Sidebar - Table of Contents */}
            <div className="col-span-3">
              <nav className="sticky top-6">
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
            <div className="col-span-9">
              <div className="prose prose-invert max-w-none">
                 {/* Section 1 - About us */}
                <div id="section2" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">About us</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    We are a global company based in Middletown, Delaware, USA.
                  </p>
                </div>
                {/* Section 2 - About this Privacy Notice */}
                <div id="section1" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">About this Privacy Notice</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    The following Privacy Notice outlines the procedures employed by Centilio, Inc. and its associated branches (referred to in various contexts as &quot;Centilio&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) concerning the gathering, application, and release of your personal data. The data may be gathered through various means: use of our website (www.centilio.com), utilization of any of our products or services, interaction with the Centilio software-as-a-service product (&quot;SaaS&quot;), usage of the Centilio mobile application (&quot;App&quot;), account creation, interactions with us, opting to receive SMS messages, or interaction with any other websites, pages, or content we own or provide (collectively referred to as &quot;Services&quot;).
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    If you do not agree with this Privacy Notice or fail to adhere to the outlined provisions, we recommend refraining from using our Services. By accepting this Privacy Notice and utilizing our Services, you consent to our data gathering, storage, usage, and dissemination practices as outlined in both this Privacy Notice and our Cookie Notice, which can be found at https://www.centilio.com/cookie-notice/. The use of our website and app is regulated by Centilio&apos;s Terms of Service, accessible at https://www.centilio.com/terms-of-use/.
                  </p>
                </div>
                {/* Section 3 - Third-Party Websites and Services */}
                <div id="section3" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Websites and Services</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    We might process your personal data in collaboration with third-party entities. For instance, this may occur when you log into our Services via a third-party site or interact with a link from a third party. In these cases, the third-party's terms and privacy notice govern the processing of your personal information. We advise you to review these terms and notices before interacting with third-party links. Centilio does not have any influence over the privacy practices of sites or apps that we do not own.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    We are not responsible for the privacy practices of any websites or services linked to our Website, nor for their content. Please note that our Privacy Notice is not applicable to third-party websites or services. Your actions on any third-party website or service, even those with links on our Website, fall under their respective rules and policies. Additionally, we are not liable for third parties that you authorize to access your personal data. If you permit a third-party site or service to access your data, you do so at your own discretion.
                  </p>
                </div>

                {/* Section 4 - Types of Information We Collect */}
                <div id="section4" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Types of Information We Collect</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    We collect "Non-Personal Information" and "Personal Information," and the information we collect from you depends on how you use the Services. "Non-Personal Information" includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, referring/exit pages and URLs, platform types, preferences you submit, and preferences that are generated based on the data you submit and a number of clicks. "Personal Information" means data that allows someone to identify or contact you, including, for example, your name, address, telephone number, and email address, as well as any other non-public information about you that is associated with or linked to any of the foregoing data. The following provides examples of the type of information that we collect from you and how we use that information.
                  </p>

                  {/* Data Collection Table */}
                  <div className="overflow-x-auto mt-8">
                    <table className="w-full border-collapse" style={{ border: '1px solid #5A5858' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <th className="px-4 py-3 text-left text-white font-semibold" style={{ border: '1px solid #5A5858' }}>Context</th>
                          <th className="px-4 py-3 text-left text-white font-semibold" style={{ border: '1px solid #5A5858' }}>Types of data</th>
                          <th className="px-4 py-3 text-left text-white font-semibold" style={{ border: '1px solid #5A5858' }}>Primary purpose for collection and use of data</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300" style={{ lineHeight: '28px' }}>
                       <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Client information</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect the name, username, and contact information, of our clients and their employees with whom we may interact.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in contacting our clients and communicating with them concerning normal business administration such as projects, services, and billing</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Client user account information</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect personal information from our clients when they create an account to access and use the Services. or request certain free Services from our Website. This information could include business contact information such as name, email address, IP address, geolocation, title, company information, industry, and password for our Services.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in providing account-related functionalities to our users, monitoring account log-ins, and detecting potential fraudulent logins or account misuse. Additionally, we use this information to fulfill our contract to provide you with Services.</td>
                        </tr>
                       <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>28-day free trial and/or free e-sign account</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect personal information from our clients when they request a 28-day free trial or free e-sign account from our Website. This Personal Information includes name, IP address, geolocation, and business contact information such as email address, title, and password for your Centilio account. Clients may also provide a credit card number or other billing details.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in providing account-related functionalities to our users, monitoring account log-ins, and detecting potential fraudulent logins or account misuse. Additionally, we use this information to facilitate ease of account creation if a user chooses to purchase the service during or immediately following a free trial period.</td>
                        </tr>
                       <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Contact information of vendors</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Users of our Service may ask their vendors or service providers to submit company and security-related information on our platform (e.g., to complete a security questionnaire). When a user invites a vendor we collect the name and email address of the vendor.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in contacting vendors on behalf of our clients in order to invite them to communicate with companies through our platform. Among other things, the communication allows our clients to efficiently solicit, and receive, security questionnaires, and allows vendors to efficiently solicit, and transmit security questionnaires. Additionally, we use this information to fulfill our contract to provide Services which may include soliciting, receiving, transmitting, and hosting responses to security questions.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Account information — vendors</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect personal information from vendors when they create an account to access and use the Services or request certain free Services from our Website.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in providing account-related functionalities to our vendor users, monitoring account log-ins, and detecting potential fraudulent logins or account misuse. Additionally, in some cases, we use this information to fulfill our contract to provide vendor-users with Services.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Cookies and first-party tracking</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We use pixels, beacons, cookies, and clear GIFs. &quot;Cookies&quot; are small pieces of information that a website sends to a computer&apos;s hard drive while a website is viewed. See our Cookie Notice for further information.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in providing account-related functionalities to our vendor users, monitoring account log-ins, and detecting potential fraudulent logins or account misuse. Additionally, in some cases, we use this information to fulfill our contract to provide vendor-users with Services.</td>
                        </tr>
                      <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Cookies and third-party tracking</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We participate in behavior-based advertising, this means that a third party uses technology (e.g., a cookie) to collect information about your use of our website so that they can provide advertising about products and services tailored to your interests on our website, or on other websites. To learn more about our third-party partners, please read their respective privacy policies. Google Analytics is an analytics service provided by Google LLC. (US).: Privacy Disclosures Policy How Google uses information from sites or apps that use our services Safeguarding your data You may opt-out of Google Analytics for display advertising or customize Google display network ads by managing your privacy controls on Google&apos;s website. Looker Analytics is a business intelligence tool that we use and this service is provided by Google LLC (US): Privacy Policy – Privacy & Terms – Google.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in understanding our users and providing tailored services. Non-essential/non-service provider cookies will not be deployed until opt-in consent is obtained. For individuals that expressly consent, we may engage in behavior-based advertising, capturing Website, SaaS, and mobile application analytics, and engaging third parties to assist with providing Services that are tailored to your interests. See our Cookie Notice for more information on how we use Cookies.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Demographic information</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We use IP information to 1). Ensure the legality of our documents (under eSignature law); 2). Understand how user behavior varies in different locations in order to improve our software; 3.) Depending on location, provide better support and success service.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in ensuring that our product/service is legal and providing tailored services based on the location (Country) – such as appropriate 1) support, 2) contract content, and 3) templates. IP information will not be used for behavioral purposes absent explicit consent.</td>
                        </tr>
                       <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Email interconnectivity</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>If you receive email from us, we use certain tools to capture data related to when you open our message, click on any links or banners it contains and make purchases. If you choose to connect your Gmail account to Centilio, we collect personal data such as name, IP address and Gmail account address to enable the functionality of displaying the Gmail account address to your chosen recipients. Centilio&apos;s use and transfer of information received from Google APIs to any other app will adhere to Google API Services User Data Policy, including the Limited Use requirements.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in understanding how you interact with our communications to you. Such data capture will only be deployed following receipt of explicit consent. Explicit user consent is captured when a user chooses to connect their Gmail account; Centilio has a legitimate interest in improving the functionality of our platform.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Employment</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>When you apply for a job posting or become an employee or contractor, we collect information necessary to process your application or to retain you as an employee or contractor. This may include, among other things, your Social Security Number, diversity or demographic information, including race or ethnicity, gender or gender identity, and veteran or disability status. Providing this information is required for employment.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We use information about current employees to perform our contract of employment or the anticipation of a contract of employment with you. In some contexts, we are also required by law to collect information about our employees. We also have a legitimate interest in using your information to have efficient staffing and workforce operations and provide the Website, the Services, and App to our clients</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Feedback/Support</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect Personal Information from you contained in any inquiry you submit to us regarding our Website or Services, such as completing our online forms, calling, or emailing for the purposes of general inquiries, support requests, or to report an issue. When you communicate with us over the phone or over a video-call platform, your calls may be recorded and sent to you as a support measure. These calls may also be analyzed for training, quality control, and for sales and marketing purposes by Centilio. During such calls we will notify you of the recording via either voice prompt or script. We may collect sensory information such as audio and visual image.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in receiving, and acting upon, your feedback, issues, or inquiries.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Mailing list</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>When you sign up for one of our mailing lists, we collect your email address along with your first and last name.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We share information about our products and services with individuals that consent to receive such information. We also have a legitimate interest in sharing information about our products or services.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Marketing data</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>When you subscribe to one of our mailing list(s), we collect your email address along with your first and last name.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We share information about our products and services with individuals that consent to receive such information. We also have a legitimate interest in sharing information about our products or services.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Mobile device data</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect information from your mobile device when visiting our Website. Such information may include operating system type and/or mobile device model, browser type, domain, and other system settings, the language your system uses and the country and time zone of your device, geo-location, unique device identifier and/or other device identifier, mobile phone carrier identification, and device software platform and firmware information.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in identifying unique visitors, and in understanding how users interact with us on their mobile devices.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Order placement</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Subsequent to Service enrollment (where we collect name, email and phone number, job role, company name and size), to place an order, we collect billing address, and credit or debit card details.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We use your information to perform our contract to provide you with products or services.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Social Media Connectors</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Our Website uses social media connectors. They are social media buttons, such as LinkedIn, Facebook, Twitter, Instagram and YouTube, you see on our Website that allow you to connect and learn more about us and interact with us, our users and marketing partners.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We may engage in behavior-based advertising, capturing website and mobile application analytics and engaging third parties to assist with providing services that may be of interest to you.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Transactional Data/Event Data</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Names and email addresses of parties to a transaction, subject line, history of actions individuals take related to a transaction (i.e. sign and forward features) and personal information about those individuals or their devices, such as name, IP address, email address and other authentication methods.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We use this information to fulfill our contractual duties to our Customers. We also have a legitimate interest in creating and maintaining an audit trail proving the authenticity and legality of signatures and documents created by Centilio.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Surveys</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>When you participate in a survey we collect information that you provide through the survey. If the survey is provided by a third party service provider, the third party&apos;s privacy policy applies to the collection, use, and disclosure of your information. Participation in any such surveys is completely voluntary and you therefore have a choice whether to disclose such information.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in understanding your opinions, and collecting information relevant to our organization.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Usage Data</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Such as referring and exit pages and URLs, domain names, landing pages and content viewed and the order of those pages, the amount of time spent on particular pages, the frequency of your use of our Services and other related information.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in understanding how you interact with our website to better improve it, and to understand your preferences and interests in order to select offerings that you might find most useful. We also have a legitimate interest in detecting and preventing fraud.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Website interactions</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We use technology to monitor how you interact with our website. This may include which links you click on, or information that you type into our online forms. This may also include information about your device or browser.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in understanding how you interact with our website to better improve it, and to understand your preferences and interests in order to select offerings that you might find most useful. We also have a legitimate interest in detecting and preventing fraud.</td>
                        </tr>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>Web logs</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We collect information, including your browser type, operating system, Internet Protocol (IP) address (a number that is automatically assigned to a computer when the Internet is used), domain name, click-activity, referring website, and/or a date/time stamp for visitors.</td>
                          <td className="px-4 py-3 align-top" style={{ border: '1px solid #5A5858' }}>We have a legitimate interest in monitoring our networks and the visitors to our Website and App as well as the access and use of the Services to enhance the Services. Web logs also help us understand which of our services is the most popular.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  </div>

                {/* Section 5 - Information You Provide Us */}
                <div id="section5" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Information You Provide Us</h2>
                    <div className="text-gray-300 space-y-2 ml-4" style={{ lineHeight: '32px' }}>
                    <p>• We collect Personal Information from you such as your role/title, first and last name, e-mail, mailing address, phone, password when you choose to subscribe to our Services/set up an account through the Services.</p>
                    <p>• When you engage us to provide Services, our payment processor will collect all information necessary to complete the transaction, including your name, company name, credit card information, billing information, and direct deposit/ACH information.</p>
                    <p>• If you provide us feedback or contact us via email, we may collect your name, if stated, and email address, as well as any other content included in the email, in order to send you a reply.</p>
                    <p>• When you participate in one of our surveys, we may collect additional information that you knowingly provide.</p>
                    <p>• We will maintain the information you send via email in accordance with applicable federal law. In compliance with the CAN-SPAM Act, all emails sent from our organization will clearly state who the email is from and provide clear information on how to contact the sender. In addition, all email messages will also contain concise information on how to remove yourself from our mailing list so that you receive no further e-mail communication from us.</p>
                    <p>• If you connect your Gmail account to the Centilio application, we collect your Gmail account address, IP address, and name to enable this functionality.</p>
                  </div>
                </div>

                {/* Section 6 - Information Collected via Technology */}
                <div id="section6" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Information Collected via Technology</h2>
                    <div className="text-gray-300 space-y-2 ml-4" style={{ lineHeight: '32px' }}>
                    <p>• In an effort to improve the quality of the Services, we reserve the right to track information provided to us by your browser or by our software application when you view or use the Services, such as the website you came from (known as the "referring URL"), the type of browser you use, the device from which you connected to the Services, the time and date of access, and other information that does not personally identify you.</p>
                    <p>• We track this information using Cookies. Cookies are sent to a user's browser from our servers and are stored on the user's computer hard drive or mobile device. Sending a Cookie to a user's browser enables us to collect Non-Personal Information about that user and keep a record of the user's preferences when utilizing our Services, both on an individual and aggregate basis. Please review the Cookie Notice for more information.</p>
                    <p>• We may also use third-party analytics services such as Google Analytics to collect information about how you use and interact with our Services. Such third-party analytics services may use Cookies to gather information such as the pages you visited, your IP address, a date/time stamp for your visit, and which website referred you to the Website, SaaS, or App.</p>
                    <p>• We reserve the right to use technological equivalents of Cookies, including social media, beacons, or pixels. These pixels allow social media sites to track visitors to outside websites so as to tailor advertising messages users see while visiting that social media website. We reserve the right to use these pixels in compliance with the policies of the various social media sites.</p>
                    <p>• Some content or applications, including advertisements, on the Services are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third-parties may use Cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our Services.</p>
                    <p>• The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.</p>
                    <p>• We do not control these third-parties' tracking technologies or how they may be used, and we are not liable for any third-party providers, acts, or omissions. If you have any questions about an advertisement or other targeted content, you should contact the third-party provider directly.</p>
                    </div>
                </div>

                {/* Section 7 - Use and Processing of Personal Information */}
                <div id="section7" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Use and Processing of Personal Information</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    In addition to the purposes and uses described above, we use information in the following ways:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-4" style={{ lineHeight: '32px' }}>
                    <p>• To identify you when you visit our Website or App.</p>
                    <p>• To create your account on the Website, SaaS, and/or App and maintain your relationship with us (providing you with requested information and communicating with you).</p>
                    <p>• To provide our Services, including sending you records of our relationship, including for purchases and other requests.</p>
                    <p>• To improve our Services and offerings, including testing Services and testing changes in our Services, and to develop new products or features.</p>
                    <p>• To manage the security of our Website and Services, including support systems.</p>
                    <p>• To conduct analytics, for example, to create and review data about our users and how they utilize our Services.</p>
                    <p>• To record details about transactions with our Services involving electronic signatures (e.g., who initiated, viewed, or signed documents; signer’s IP addresses; timestamps).</p>
                    <p>• To respond to inquiries related to support, employment opportunities, or other requests.</p>
                    <p>• To send marketing and promotional materials, including information relating to our products, services, sales, or promotions, or those of our business partners.</p>
                    <p>• To provide you with and collect payment for the Services and products requested.</p>
                    <p>• To comply with legal obligations, including legal retention periods.</p>
                    <p>• To defend or exercise our rights in legal claims.</p>
                  </div>
                  <p className="text-gray-300 mt-4" style={{ lineHeight: '32px' }}>
                    Although the sections above describe our primary purpose in collecting your information, in many situations, we have more than one purpose. For example, if you sign up for Services, we may collect your information to complete that transaction, but we also collect your information as we have a legitimate interest in maintaining your information after your transaction is complete so that we can quickly and easily respond to any questions about your Services. As a result, our collection and processing of your information are based on different contexts upon your consent, our need to perform a contract, our obligations under the law, and/or our legitimate interest in conducting our business.
                  </p>
                </div>

                {/* Section 8 - Use of Non-Personal Information */}
                <div id="section8" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Use of Non-Personal Information</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    In general, we use non-personal information to help us improve the Services and customize the user experience. We also aggregate non-personal information in order to track trends and analyze use patterns on the Services. This Privacy Notice does not limit in any way our use or disclosure of non-personal information, and we reserve the right to use and disclose such non-personal information to our partners, advertisers, and other third parties at our discretion.
                  </p>
                </div>

                {/* Section 9 - Sharing of Your Personal Information */}
                <div id="section9" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Sharing of Your Personal Information</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    In addition to the specific situations discussed elsewhere in this policy, we may share personal information in the following situations:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-4" style={{ lineHeight: '32px' }}>
                    <p>• Affiliates and acquisitions. We may share information with our corporate affiliates (e.g., parent company, sister companies, subsidiaries, joint ventures, or other companies under common control). If another company acquires, or plans to acquire, our company, business, or our assets, we will also share information with that company, including at the negotiation stage.</p>
                    <p>• Other disclosures with your consent. We may ask if you would like us to share your information with other unaffiliated third parties who are not described elsewhere in this policy.</p>
                    <p>• Other disclosures without your consent. We may disclose information in response to subpoenas, warrants, or court orders, or in connection with any legal process, or to comply with relevant laws. We may also share your information in order to establish or exercise our rights, to defend against a legal claim, to investigate, prevent, or take action regarding possible illegal activities, suspected fraud, safety of person or property, or a violation of our policies, or to comply with your request for the shipment of products to or the provision of services by a third-party intermediary.</p>
                    <p>• Public. Some of our websites may provide the opportunity to post comments or reviews in a public forum. If you decide to submit information on these pages, that information may be publicly available.</p>
                    <p>• Service providers. We share your information with service providers. Among other things, service providers help us to administer our website, send email communications, conduct surveys, provide technical support, detect fraud, process payments, and assist in the fulfillment of orders. Our service providers will be given access to your personal information as is reasonably necessary to provide the Website and related Services. Our service providers are contractually obligated to use your personal information only at our direction and in accordance with our Privacy Notice, to handle your personal information in confidence, and to not disclose your personal information to unauthorized third parties. Service providers who violate these obligations are subject to appropriate discipline, including, but not limited to, termination as a service provider.</p>
                  </div>
                  <p className="text-gray-300 mt-4" style={{ lineHeight: '32px' }}>
                   Except as otherwise stated in this Privacy Notice, we do not sell, trade, rent, or otherwise share for marketing purposes your personal information with third parties without your consent.
                  </p>
                </div>

                {/* Section 10 - Retention of Your Personal Information */}
                <div id="section10" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Retention of Your Personal Information</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    The length of time for which we retain personal information depends on the purposes for which we collected and use it and/or as required to comply with applicable laws. We keep your personal information for no longer than necessary for the purposes for which it was collected and/or processed. Where there are technical limitations that prevent deletion or anonymization, we safeguard personal information and limit active use of it. See the Section “Your choices” about storage of your personal information.
                  </p>
                </div>

                {/* Section 11 - How We Protect Your Personal Information */}
                <div id="section11" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Protect Your Personal Information</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                   We implement security measures designed to protect your personal information from unauthorized access. We apply these tools based on the sensitivity of the personal information we collect, use, and store, and the current state of technology. We protect your personal information through technical and organizational security measures to minimize risks associated with data loss, misuse, unauthorized access, and unauthorized disclosure and alteration. We periodically review our information collection, storage, and processing practices, including technical and organizational measures, to guard against unauthorized access to systems. Any account you have on our Website, SaaS, or App is protected by your account password, and we urge you to take steps to keep your personal information safe by not disclosing your password and by logging out of your account after each use.
                  </p>
                  <p className="text-gray-300 mt-4" style={{ lineHeight: '32px' }}>
                    Because the internet is not a completely secure environment, Centilio cannot warrant the security of any information you transmit to Centilio or guarantee that information on the Website may not be accessed, disclosed, altered, and/or destroyed by a breach of any of our physical, technical, and/or managerial safeguards. In addition, while we take reasonable measures to ensure that service providers keep your information confidential and secure, such service providers' practices are ultimately beyond our control.
                  </p>
                  <p className="text-gray-300 mt-4" style={{ lineHeight: '32px' }}>
                   We are not responsible for the functionality, privacy, and/or security measures of any other organization. By using our Website, you acknowledge that you understand and agree to assume these risks. You may ask for a list of technical and organizational measures taken to protect your personal data by emailing us at privacyteam@centilio.com.
                  </p>
                </div>

                {/* Section 12 - Your Choices */}
                <div id="section12" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Your Choices</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                   You may take the below actions to change or limit the collection or use of your Personal Information:
                  </p>
                  <div className="text-gray-300 space-y-2 ml-4" style={{ lineHeight: '32px' }}>
                    <p>• Promotional/Marketing emails. You may choose to provide us with your email address for the purpose of allowing us to send free newsletters, surveys, offers, and other promotional/marketing materials to you, as well as targeted offers from third parties. You can stop receiving promotional/marketing emails by following the unsubscribe instructions in e-mails that you receive and also adjust your email preferences here.</p>
                    <p>• Communication Preferences. If you decline to receive promotional and/or marketing emails, we may still send you transactional and service-related messages.</p>
                    <p>• Device and usage information.If you do not want us to see your device location, you can turn off location sharing on your device, change your device privacy settings, or decline to share location on your browser.</p>
                    <p>• Deletion Of Your Personal Information.Typically, we retain your personal information for the period necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law, or as otherwise described in this Privacy Notice. You may, however, request information about how long we keep a specific type of information, or request that we delete your personal information by contacting us at the address below. If required by law we will grant a request to delete information, but you should note that in many situations we must keep your personal information to comply with our legal obligations, resolve disputes, enforce our agreements, or for another one of our business purposes.</p>
                    <p>• Deleting your In-App account.If you decide to delete your In-App account, you may do so by selecting “Delete Account” on your profile page. Deleting your Centilio account In-App will:</p>
                    <p>• Sign you out immediately</p>
                    <p>• Remove or anonymize any identifiable user information</p>
                  </div>
                </div>

                {/* Section 13 - International Data Transfers */}
                <div id="section13" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    Our company operates globally and has a global infrastructure. We utilize cloud computing, which means your personal data may be transferred to a country with data protection laws not as strong as where you reside. We will transfer your Personal Data to countries deemed having adequate levels of data protection as determined by the European Commission.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    If we share your personal information with entities located in the United States or other non-EEA jurisdictions which, according to the European Commission and the Court of Justice of the European Union through its Schrems II decision, do not offer an adequate level of protection to personal information, the GDPR authorizes other solutions to address lawful cross-border transfers. Centilio may rely on data processing agreements (DPAs) with attached standard contractual clauses (SCCs) approved by the European Commission or other appropriate solutions to address cross-border transfers as required or permitted by Articles 46 and 49 of the GDPR. Where required by such laws, you may request a copy of the suitable mechanisms we have in place by contacting us.
                  </p>
                </div>

                {/* Section 14 - Children and Minors */}
                <div id="section14" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Children and Minors</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    Centilio does not knowingly collect personal data from children under the age of thirteen (13). If we learn that we have collected Personal Information from a child under age thirteen (13), we will delete such information as quickly as possible. If you believe that a child under the age of thirteen (13) may have provided us Personal Information, please contact us at privacyteam@centilio.com. By using the Services, you represent that you are at least eighteen (18) years old and understand that you must be at least eighteen (18) years old in order to create an account and/or purchase goods and/or services through the Website.
                  </p>
                </div>

                {/* Section 15 - Accessibility */}
                <div id="section15" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Accessibility</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    If you are visually impaired, you may access this notice through your browser’s audio reader.
                  </p>
                </div>

                {/* Section 16 - Changes to our Privacy Notice */}
                <div id="section16" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Changes to our Privacy Notice</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    In general, changes will be made to this Privacy Notice to address new or modified laws and/or new or modified business procedures. However, we may update this Privacy Notice at any time, with or without advance notice, so please review it periodically. We may provide you additional forms of notice of modifications and/or updates as appropriate under the circumstances. Your continued use of the Website after any modification to this Privacy Notice will constitute your acceptance of such modifications and/or updates. You can determine when this Privacy Notice was last revised by referring to the date it was last "Updated" above.
                  </p>
                </div>

                {/* Section 17 - Contacting us */}
                <div id="section17" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">Contacting us</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    For questions or complaints regarding our use of your personal information or Privacy Notice or to forward deletion requests, please contact us at: privacyteam@centilio.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181A1E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            {/* Logo Section */}
            <div>
              <Image
                src="/images/centiliogdprpolicy/centilio logo vERSION 1 (1).png"
                alt="Centilio Logo"
                width={150}
                height={50}
              />
            </div>

            {/* Product Links */}
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

            {/* Company Links */}
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

            {/* Legal Links */}
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

          {/* Social Media Icons */}
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
      </footer>
    </div>
  )
}
