'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CentilioTermsOfUse() {
  const sections = [
    { id: 'section1', title: 'Acceptance of Terms of Service' },
    { id: 'section2', title: 'Eligibility' },
    { id: 'section3', title: 'Registration' },
    { id: 'section4', title: 'The Services' },
    { id: 'section5', title: 'Customer Content' },
    { id: 'section6', title: 'Third Party Services' },
    { id: 'section7', title: 'Payments and Billing' },
    { id: 'section8', title: 'Copyright Policy' },
    { id: 'section9', title: 'Termination' },
    { id: 'section10', title: 'Warranty Disclaimer' },
    { id: 'section11', title: 'Indemnification' },
    { id: 'section12', title: 'Limitation of Liability' },
    { id: 'section13', title: 'Arbitration' },
    { id: 'section14', title: 'Governing Law and Jurisdiction' },
    { id: 'section15', title: 'Modification' },
    { id: 'section16', title: 'Miscellaneous' },
    { id: 'section17', title: 'Force Majeure' },
    { id: 'section18', title: 'Assignment' },
    { id: 'section19', title: 'Agency' },
    { id: 'section20', title: 'Notices' },
    { id: 'section21', title: 'No Waiver' },
    { id: 'section22', title: 'Headings; Interpretation' },
    { id: 'section23', title: 'Publicity' },
    { id: 'section24', title: 'Contact' }
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
          <h1 className="text-5xl font-bold text-white">Terms of Use</h1>
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
                <p className="text-gray-300 mb-8" style={{ lineHeight: '32px' }}>
                  Please read these Terms of Service (collectively with Centilio Inc, Inc.’s (d/b/a CENTILIO) Privacy Policy centilio.com/privacy and DMCA Copyright Policy below, the “Terms of Service”) fully and carefully before using centilio.com (the “Website”) or any of the services, features, Content (defined below) or applications made available by Centilio Inc, Inc. (“CENTILIO” or “our”) through the Website, including without limitation CENTILIO’s website design and hosting platform (the “Platform”) (collectively, the “Services”). These Terms of Service set forth the legally binding terms and conditions for your use of the Services. If you are using the services on behalf of an entity, you represent and warrant that you have all necessary right, authority and consent to bind such entity. in such cases, all references to “you” or “your” shall refer to both the individual and the entity.
                </p>

                {/* Section 1 - Acceptance of Terms of Service */}
                <div id="section1" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms of Service</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    a. By registering for and/or using any of the Services in any manner, including visiting or browsing the Website, you agree to these Terms of Service and all other operating rules, policies and procedures that may be published from time to time through the Services by CENTILIO, each of which is incorporated by reference and each of which may be updated from time to time with or without notice to you.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    b. Certain of the Services may be subject to additional terms and conditions specified by CENTILIO from time to time; your use of such Services is subject to those additional terms and conditions, which are incorporated into these Terms of Service by this reference.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                  c. These Terms of Service apply to all users of the Services, including, without limitation, users who are contributors of content, information, and other materials or services, registered or otherwise.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                  d. Arbitration Notice and Class Action Waiver:except for certain types of disputes described in the arbitration section below, you agree that disputes between you and centilio will be resolved by binding, individual arbitration and you waive your right to participate in a class action lawsuit or classwide arbitration.
                  </p>
                </div>

                {/* Section 2 - Eligibility */}
                <div id="section2" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                  a. You represent and warrant that you are at least 18 years of age. If you are under age 18, you may not, under any circumstances or for any reason, use the Services. CENTILIO may, in our sole discretion, refuse to offer the Services to any person or entity and change its eligibility criteria at any time. You are solely responsible for ensuring that these Terms of Service and your use of the Services (a) are in compliance with all laws, rules and regulations applicable to you and (b) do not violate any other agreement to which you are a party. The right to access the Services is revoked where these Terms of Service or use of the Services is prohibited or to the extent offering, sale or provision of the Services conflicts with any applicable law, rule or regulation. Further, the Services are offered only for your use, and not for the use or benefit of any third party.
                  </p>
                </div>

                {/* Section 3 - Registration */}
                <div id="section3" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Registration</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. To register for an account on the Services you must provide an email address and create a password (an “Account”). You must provide accurate and complete information and keep your Account information updated. You shall not: (i) select or use as a username a name of another person with the intent to impersonate that person; (ii) use as a username a name subject to any rights of a person other than you without appropriate authorization; or (iii) use, as a username, a name that is otherwise offensive, vulgar or obscene. You are solely responsible for the activity that occurs under your Account, and for keeping your Account password secure. You may never use another person’s user Account or registration information for the Services without permission or share your Account or access credentials with any other individual. You should never publish, distribute or post login information for your Account. You must notify us immediately of any change in your eligibility to use the Services or breach of security or unauthorized use of your Account. You have the ability to delete your Account, either directly or through a request made to one of our employees or affiliates, but Account deletion requests are subject to any additional terms governing use of any Paid Services (as defined below) for which you have signed up.
                  </p>
                </div>

                {/* Section 4 - The Services */}
                <div id="section4" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. The Services</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">a. Services:</strong> Subject to these Terms of Service, CENTILIO will use commercially reasonable efforts to make the Services available to you.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">b. Content:</strong> “Content” means information, data, text, photographs, videos, audio clips, artwork, designs, templates, written posts and comments, software, scripts, graphics, and interactive features generated, provided, or otherwise made accessible on or through the Services. Excluding Customer Content (as defined below and which shall be owned by you and licensed to CENTILIO in accordance with these Terms of Service), CENTILIO hereby grants you a nonexclusive, non sublicensable and non-transferable license to use and display all other Content solely for purposes of using the Services for your personal internal use on your own behalf. Use, reproduction, modification, distribution or storage of any Content (other than Customer Content (as defined below)) for any purpose other than using the Services is expressly prohibited without prior written permission from CENTILIO. As between the parties, all Content, except for Customer Content, is owned by CENTILIO or its licensors. You acknowledge that all Content accessed by you while using the Services is at your own risk and you will be solely responsible for any damage or loss to you or any other party resulting therefrom.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">c. Restrictions on Use of the Services:</strong> You will not directly or indirectly (i) sell, license, sublicense, distribute, copy, rent or lease the Services or any Content, or include the Services in a service bureau, timeshare outsourcing offering, or otherwise make the Services available to, or use the Services for the benefit of, any third party, or transfer any of the rights that you receive hereunder; (ii) interfere with or disrupt the integrity or performance of the Services, or any third party data contained therein, or attempt to gain unauthorized access to the Services or its related systems or networks; (iii) copy, modify, translate, or create derivative works based on the Services, Content or any underlying software or any part, feature, function or user interface thereof, including by framing or mirroring any part of any Services or any Content; (iv) access or use the Services for benchmarking or similar competitive analysis purposes or in order to build a competitive product, service or website; (v) decompile, disassemble, decipher or reverse engineer the Services, or otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the Services (except to the extent such restriction is prohibited by applicable statutory law); (vi) remove any copyright notices, information, and restrictions contained in the Services or any Content; (vii) bypass, circumvent or attempt to bypass or circumvent any measures CENTILIO may use to prevent or restrict access to the Services (or other accounts, computer systems or networks connected to the Services) or take any action that imposes or may impose (as determined by CENTILIO in our sole discretion) an unreasonable or disproportionately large load on our (or our third party providers’) infrastructure; (viii) use manual or automated software, devices, or other processes to “crawl” or “spider” any page of the Website or Services; or (ix) otherwise take any action in violation of our guidelines and policies, including these Terms of Service.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">d. Availability:</strong> CENTILIO will not be responsible or liable for any failure in the Platform or Services resulting from or attributable to (i) Customer Content, or failures to deliver Customer Content to CENTILIO; (ii) failures in any telecommunications, network or other service or equipment outside of CENTILIO’s facilities; or (iii) any force majeure event or other cause beyond CENTILIO’s reasonable control. CENTILIO does not guarantee that the Services or any Content will be available, or that any Content that is available is or will continue to be accurate. CENTILIO reserves the right, but does not have any obligation, to remove, edit, modify or block access to any Content in our sole discretion, at any time, without notice to you and for any reason (including upon receipt of claims or allegations from third parties or authorities relating to such Content or if CENTILIO is concerned that you may have violated these Terms of Service).
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">e. Ownership:</strong> You acknowledge and agrees that as between you and CENTILIO, all right, title and interest in and to the Services and our Platform (excluding any Customer Content) and including all modifications and configurations thereto, all Content and all of CENTILIO’s proprietary technology, including, without limitation, all software, products, processes, algorithms, user interfaces, know-how, techniques, designs and other tangible or intangible technical material or information made available to you by CENTILIO in providing the Services and all derivatives thereof are and shall remain CENTILIO’s or its licensors’.
                  </p>
                </div>

                {/* Section 5 - Customer Content */}
                <div id="section5" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Customer Content</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    a. Definition. “Customer Content” means (i) any and all electronic data, content and information submitted to the Services or CENTILIO by you or by a third party on your behalf, or that is collected and processed by you or by a third party on your behalf directly in connection with your use of the Services (“Customer Data”) (ii) any trademarks, trade names, logos, service marks, branding materials, designs or artwork provided to the Services or CENTILIO by you or by a third party on your behalf (“Customer Marks”), and (iii) any custom trademarks, logos, written text or artwork that CENTILIO agrees in writing to design or create specifically for you as a commissioned work for hire.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    b. License to Customer Content. By using the Services, including by providing your Customer Content, you hereby grant CENTILIO a nonexclusive, worldwide, royaltyfree, fully paid right and license to use, copy, access, process, reproduce, perform, display, modify, distribute and transmit your Customer Content on the Platform and in connection with providing the Services to you. You acknowledge and agree that (i) the quality of the Services and the Platform depend on the uploading or other provisioning of the Customer Content into the Platform or the Services, as applicable, and (ii) CENTILIO will not assume any responsibility for, or undertake to verify, the legality, accuracy or completeness of the Customer Content provided by you or on your behalf, all of which shall be your sole responsibility.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    c. Representations and Warranties. You represent, warrant and covenant that (i) all Customer Content is accurate and compliant with all applicable laws, rules and regulations; (ii) you own all rights, title and interest in and to the Customer Content, or have otherwise secured all necessary rights in the Customer Content as may be necessary to permit the access, use and distribution thereof as contemplated by these Terms of Service; (iii) you shall only use the Services in accordance with all applicable laws, rules and regulations, these Terms of Service and any relevant documentation provided by CENTILIO; and (iv) you will not, and will not permit any third party to upload, download, post, submit, provide, transmit, distribute or otherwise make available to or through the Services any content or data that (A) is unlawful, infringing, deceptive, fraudulent, invasive of another’s privacy, tortious, obscene, or that otherwise violates any other right of any third party, including any intellectual property, proprietary or privacy rights, or that is otherwise inappropriate, as determined by CENTILIO in our sole discretion; (B) contains any viruses, code, malware, files, trojan horses, or programs designed or intended to disrupt, damage, limit or interfere with the proper function of any software, hardware, or telecommunications equipment or that is or can be otherwise malicious or disruptive; (C) constitutes unauthorized or unsolicited advertising, junk or bulk email (“spamming”) or otherwise violates federal CAN-SPAM regulation; or (D) contains any personally identifying information that is subject to specialized security regimes including without limitation the Health Insurance Portability and Accountability Act (“HIPAA”) and the standards promulgated by the PCI Security Standards Council. You acknowledge and agree that CENTILIO is not a “Business Associate” under HIPAA, and you will not provide any protected health information to the Services or to CENTILIO. If you do not adhere to any of the preceding, CENTILIO has the right to terminate your account without a refund.
                  </p>
                </div>

                {/* Section 6 - Third Party Services */}
                <div id="section6" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Third Party Services</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. The Services may integrate with or permit you to link to other websites, plug-ins, services or resources on the Internet, and other websites, plug-ins, services or resources may contain links to the Services. When you access third party resources, you do so at your own risk. These other resources are not under our control, and you acknowledge that CENTILIO is not responsible or liable for the content, functions, accuracy, legality, appropriateness or any other aspect of such resources. The inclusion of any such link or the availability or use of any such integration does not imply our endorsement or any association between CENTILIO and their operators. You further acknowledge and agree that CENTILIO shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services available on or through any such resource. CENTILIO will also not be responsible or liable for any failure in the Services attributable to your or any third party's products, services, negligence, willful misconduct, breach of this Agreement or other unauthorized access or use.
                  </p>
                </div>

                {/* Section 7 - Payments and Billing */}
                <div id="section7" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Payments and Billing</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">a. Paid Services:</strong> Certain of our Services are or may in the future become subject to payments (the "Paid Services"). Please see our Paid Services page (https://centilio.com/pricing) for a description of the currently available Paid Services and to sign up for Paid Services. Please note that any payment terms presented by CENTILIO to you in the process of using or signing up for a Paid Service are deemed part of these Terms of Services. All amounts are stated in, and shall be paid in, U.S. dollars. CENTILIO does not transmit invoices automatically, but they can be provided in PDF format from our billing department upon your request to billing@centilio.com.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">b. Payment and Late Fees:</strong> By signing up to receive any Paid Services, you agree to pay CENTILIO, in accordance with all applicable payment terms set forth on CENTILIO's Paid Services page and herein, the Fees for such Paid Services, and you authorize CENTILIO, through the Payment Processor (defined below), to charge your chosen payment provider ("Payment Method") for the applicable Fees and agree to make payment using that selected Payment Method. Unpaid invoices are subject to a finance charge of 1.5% per month on any outstanding balance, or the maximum permitted by law, whichever is lower, plus all expenses of collection (including, without limitation, reasonable attorney's fees). If our collection efforts fail, unpaid debts will be reported to all available credit reporting agencies. Any account that is 15 days past due is subject to suspension of the Services. Any account that is 30 or more days past due may be terminated.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">c. Taxes:</strong> Fees are exclusive of any taxes. You shall be responsible for all taxes, tariffs, levies and duties associated with the Services other than U.S. taxes based on CENTILIO's net income.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">d. Billing Information:</strong> CENTILIO uses a third party payment processor (the "Payment Processor") to bill you through a payment account linked to your Account on the Services (your "Billing Account") for use of the Paid Services. The processing of payments will be subject to the terms, conditions and privacy policies of the Payment Processor in addition to these Terms of Service. CENTILIO is not responsible for the acts, omissions or errors by the Payment Processor but CENTILIO reserves the right to correct any errors or mistakes that the Payment Processor makes, even if the Payment Processor has already requested or received payment. The terms of your payment will be based on your Payment Method and may be determined by agreements between you and the financial institution, credit card issuer or other provider of your chosen Payment Method. If CENTILIO, through the Payment Processor, does not receive payment from you, you agree to pay all amounts due on your Billing Account upon demand.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">e. Auto Renewal:</strong> Fees for Paid Services ordered on a subscription or auto-renewing basis will be automatically charged their agreed upon subscription amount on the agreed upon schedule. When signing up for a Paid Service, you will be able to select a recurring billing level and renewal term ("Subscription"). Unless you cancel or change your Subscription in accordance with these Terms of Service, any Subscription you have signed up for will be automatically extended for successive renewal periods of the same duration as you selected, at the then current non-promotional rate. By signing up for a Subscription, you agree that CENTILIO may submit the charges associated with such Subscription for payment on the applicable schedule and you will be responsible for such charges. Your charges may be payable in advance, in arrears, per usage, or as otherwise described when you select to use the Subscription. By signing up for a subscription you acknowledge and agree that centilio may submit periodic charges (e.g., monthly) without further authorization from you, until you provide prior notice (receipt of which is confirmed by centilio) that you have terminated this authorization or wish to change your payment method. Such notice will not affect charges submitted before centilio reasonably could act to terminate or alter your subscription please contact our support team at team@centilio.com. This does not waive our right to seek payment directly from you.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">f. Current Information Required:</strong> You must provide current, complete and accurate information for your billing account. you must promptly update all information to keep your billing account current, complete and accurate (such as a change in billing address, credit card number, or credit card expiration date), and you must promptly notify centilio or our payment processor if your payment method is modified or canceled (e.g., for loss or theft) or if you become aware of a potential breach of security, such as the unauthorized disclosure or use of your account credentials or password. changes to such information can be made at https://centilio.com/account/#/. If you fail to provide any of the foregoing information, you agree that centilio may continue charging you for any use of paid services under your billing account unless you have terminated your paid services as set forth above.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">g. Canceling or Changing Paid Services:</strong> To change or cancel your Paid Services at any time, contact CENTILIO at team@centilio.com. Any request for cancellation must be sent at least ten (10) business days prior to the end of the Subscription term to allow for adequate processing time. Your nontermination or continued use of the relevant Paid Service reaffirms that CENTILIO is authorized to charge your Payment Method the Fees for such Paid Service, including any associated fees (e.g. overage fees or late fees, to the extent applicable). If you terminate a Subscription, you may use the applicable Paid Service until the end of your then current Subscription term; however, your Subscription, and therefore access to the Paid Services, will not be renewed after your then current Subscription term expires. You will not be eligible for a prorated refund of any portion of any Fees paid for the then current Subscription period.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">h. Change in Amount Authorized:</strong> If the amount to be charged to your Billing Account varies from the amount you preauthorized (other than due to the imposition or change in the amount of state sales taxes), you have the right to receive, and CENTILIO shall provide, notice of the amount to be charged and the date of the charge before the scheduled date of the transaction. Any agreement you have with your payment provider will govern your use of your Payment Method. You agree that CENTILIO may accumulate charges incurred and submit them as one or more aggregate charges during or at the end of each billing cycle.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">i. No Refunds:</strong> Payment obligations are non cancelable. Except as expressly set forth in these Terms of Service, CENTILIO will not, under any circumstances, issue refunds or prorate any Fees for early cancellation or termination of the Services, or for any other reason.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    <strong className="text-white">j. Chargeback Policy and Disputes:</strong> If you have a question about charges made to your Account, please contact CENTILIO immediately at team@centilio.com. If the charges were made in error, CENTILIO will credit your Billing Account or Payment Method for the appropriate amount. Please note that CENTILIO has a zero tolerance policy for chargebacks. Any customer who disputes a credit card payment that is found to be valid may be permanently banned by CENTILIO from use of any and all CENTILIO Services.
                  </p>
                </div>

                {/* Section 8 - Copyright Policy */}
                <div id="section8" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Copyright Policy</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    a. CENTILIO has adopted the following general policy toward copyright infringement in accordance with the Digital Millennium Copyright Act (http://lcweb.loc.gov/copyright/legislation/dmca.pdf). The address of the Designated Agent to Receive Notification of Claimed Infringement ("Designated Agent") is listed at the end of this paragraph.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    b. Procedure for Reporting Copyright Infringement:
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    c. If you believe that material or content residing on or accessible through our websites, application, or services infringes a copyright, please send a notice of copyright infringement containing the following information to the Designated Agent listed below:
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    <p>• A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed.</p>
                    <p>• Identification of works or materials being infringed.</p>
                    <p>• Identification of the material that is claimed to be infringing including information regarding the location of the infringing materials that the copyright owner seeks to have removed, with sufficient detail so that CENTILIO is capable of finding and verifying its existence.</p>
                    <p>• Contact information about the notifier including address, telephone number and, if available, email address.</p>
                    <p>• A statement that the notifier has a good faith belief that the material is not authorized by the copyright owner, its agent, or the law.</p>
                    <p>• A statement made under penalty of perjury that the information provided is accurate and the notifying party is authorized to make the complaint on behalf of the copyright owner.</p>
 
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    Please contact the Designated Agent to Receive Notification of Claimed Infringement at: Centilio, Inc. (d/b/a CENTILIO), 651 N Broad St, 201Middletown, DE 19709, USA or team@centilio.com
                  </p>
                </div>

                {/* Section 9 - Termination */}
                <div id="section9" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    a. Termination by Either Party. You have the option of canceling your Account at any time by following the instructions in Section 7(g) or otherwise available through the Services, subject to any terms applicable to Paid Services for which you have signed up. CENTILIO reserves the right to terminate your Account or access to all or any part of the Services at any time, with or without cause, with or without notice, effective immediately without refund. All provisions of these Terms of Service which by their nature should survive termination or expiration shall survive termination, including ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    b. Customer Content after Termination. Termination or cancellation of your Account by either party may result in the forfeiture and destruction of all information, content and data, including Customer Content, associated with your Account. An Account terminated by CENTILIO will not be backed up for any reason and will be immediately deleted from our servers. Upon your request, which must be made within thirty (30) calendar days after the effective date of termination or expiration of your Account in accordance with these Terms of Service, CENTILIO will use commercially reasonable efforts to make your Customer Content available to you for export or download in a CENTILIO supported format. After that 30-day period, CENTILIO will have no obligation to maintain or provide your Customer Content, and may thereafter delete or destroy all copies of Customer Content in our systems or otherwise in our possession or control, unless legally prohibited. CENTILIO reserves the right, including after termination, to access, read, preserve, and disclose any information or content as CENTILIO reasonably believes is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request; (ii) enforce these Terms of Service, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security or technical issues; (iv) respond to user support requests or (v) protect the rights, property or safety of CENTILIO, our users and the public.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    c. Fees Due Upon Termination. In the event of termination of any Subscription, you shall pay CENTILIO all Fees due for the entire Subscription period.
                  </p>
                </div>

                {/* Section 10 - Warranty Disclaimer */}
                <div id="section10" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Warranty Disclaimer</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                   a. You release CENTILIO from all liability for you having acquired or not acquired Content through the Services. CENTILIO makes no representations concerning any Content contained in or accessed through the Services, and CENTILIO will not be responsible or liable for the accuracy, copyright compliance, or legality of material or Content contained in or accessed through the Services.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    b. The services and content are provided “as is”, “as available” and without warranty of any kind, express or implied, including, but not limited to, the implied warranties of title, noninfringement, merchantability and fitness for a particular purpose, and any warranties implied by any course of performance or usage of trade, all of which are expressly disclaimed. CENTILIO, and our directors, employees, agents, suppliers, partners and content providers do not warrant that: (a) the services will be secure or available at any particular time or location; (b) any defects or errors will be corrected; (c) any content or software available at or through the services is free of viruses or other harmful components; or (d) the results of using the services or content will meet your requirements. Your use of the services and content are solely at your own risk. Without limiting the foregoing, you acknowledge and agree that the services are not designed or licensed for use in hazardous environments requiring failsafe controls, including without limitation: operation of nuclear facilities, aircraft navigation/communication systems, air traffic control, and life support or weapons systems.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    c. You shall and hereby do waive California Civil Code Section 1542 or any other similar law of any jurisdiction, which says in substance: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which, if known by him must have materially affected his settlement with the debtor”.
                 </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    d. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you. You may have other rights which vary from jurisdiction to jurisdiction.
                  </p>
                </div>

                {/* Section 11 - Indemnification */}
                <div id="section11" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. You are solely responsible for your conduct related to the Services and for Customer Content. You shall defend, indemnify, and hold CENTILIO harmless, our affiliates and each of our and their respective employees, contractors, directors, suppliers and representatives from all liabilities, claims, and expenses, including reasonable attorneys' fees, that arise from or relate to your use or misuse of, or access to, the Services, Content, or otherwise from your Customer Content, violation of these Terms of Service, or infringement by you, or any third party using your Account or identity in the Services, of any intellectual property or other right of any person or entity. CENTILIO reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist and cooperate with CENTILIO in asserting any available defenses.
                  </p>
                </div>

                {/* Section 12 - Limitation of Liability */}
                <div id="section12" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">12. Limitation of Liability</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. In no event shall centilio, nor our directors, employees, agents, partners, suppliers or content providers, be liable under contract, tort, strict liability, negligence or any other legal or equitable theory with respect to the services (a) for any lost profits, data loss, cost of procurement of substitute goods or services, or special, indirect, incidental, punitive, compensatory or consequential damages of any kind whatsoever (however arising); (b) for any bugs, viruses, trojan horses, or the like (regardless of the source of origination); or (c) for any direct damages in excess of (in the aggregate) of the greater of (i) fees paid to centilio for the particular services during the immediately previous three (3) month period or (ii) $500.00. Arbitration clause & class action waiver – important – please review as this affects your legal rights
                  </p>
                </div>

                {/* Section 13 - Arbitration */}
                <div id="section13" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">13. Arbitration</h2>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    a. All disputes between you and centilio (whether or not such dispute involves a third party) with regard to your relationship with centilio, including without limitation disputes related to these terms of service, your use of the services, and/or rights of privacy and/or publicity, will be resolved by binding, individual arbitration in new york, new york under the streamlined arbitration rules and procedures ("rules") of jams, inc. ("jams") Then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of jams arbitrators in accordance with such rules, and you and centilio hereby expressly waive trial by jury. Discovery and rights to appeal in arbitration are generally more limited than in a lawsuit, and other rights that you and centilio would have in court may not be available in arbitration.
                  </p>
                  <p className="text-gray-300 mb-4" style={{ lineHeight: '32px' }}>
                    b. As an alternative, you may bring your claim in your local "small claims" court, if permitted by that small claims court's rules and if within such court's jurisdiction, unless such action is transferred, removed or appealed to a different court. You may bring claims only on your own behalf. Neither you nor CENTILIO will participate in a class action or classwide arbitration for any claims covered by this agreement. You are giving up your right to participate as a class representative or class member on any class claim you may have against centilio including any right to class arbitration or any consolidation of individual arbitrations. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person's account, if CENTILIO is a party to the proceeding. This dispute resolution provision will be governed by the Federal Arbitration Act and not by any state law concerning arbitration. Judgment on the award rendered by the arbitrator may be entered in any court having competent jurisdiction. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms of Service. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of, related to or connected with the use of the Services or these Terms of Services must be filed within one (1) year after such claim of action arose or be forever banned.
                  </p>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    c.Severability. If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration section will be null and void. This arbitration agreement will survive the termination of your relationship with CENTILIO.
                  </p>
                </div>

                {/* Section 14 - Governing Law and Jurisdiction */}
                <div id="section14" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law and Jurisdiction</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, including its conflicts of law rules, and the United States of America. You agree that, subject to Section 13, any dispute arising from or relating to the subject matter of these Terms of Service shall be resolved in New York County, New York.
                  </p>
                </div>

                {/* Section 15 - Modification */}
                <div id="section15" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">15. Modification</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. CENTILIO reserves the right, in our sole discretion, to modify or replace any of these Terms of Service, or change, suspend, or discontinue the Services (including without limitation, the availability of any feature, database, or content) at any time by posting a notice on the Site or by sending you notice through the Services, via email or by another appropriate means of electronic communication. CENTILIO may also impose limits on certain features and services or restrict your access to parts or all of the Services without notice or liability. While CENTILIO will provide timely notice of modifications, it is also your responsibility to check these Terms of Service periodically for changes. Your continued use of the Services following notification of any changes to these Terms of Service constitutes acceptance of those changes, which will apply to your continued use of the Services going forward. Your use of the Services is subject to the Terms of Service in effect at the time of such use.
                  </p>
                </div>

                {/* Section 16 - Miscellaneous */}
                <div id="section16" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">16. Miscellaneous</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. Entire Agreement and Severability. These Terms of Service are the entire agreement between you and CENTILIO with respect to the Services, including use of the Website, and supersede all prior or contemporaneous communications and proposals (whether oral, written or electronic) between you and CENTILIO with respect to the Services. If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms of Service will otherwise remain in full force and effect and enforceable. The failure of either party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder.
                  </p>
                </div>

                {/* Section 17 - Force Majeure */}
                <div id="section17" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">17. Force Majeure</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. CENTILIO shall not be liable for any failure to perform our obligations hereunder where such failure results from any cause beyond our reasonable control, including, without limitation, mechanical, electronic or communications failure or degradation, fire, flood, governmental acts or orders or restrictions, recognized health threats as determined by the World Health Organization, the Centers for Disease Control, or local government authority or health agencies (including but not limited to the health threats of COVID-19, H1N1, or similar infectious diseases), curtailment of transportation facilities and the failure of suppliers.
                  </p>
                </div>

                {/* Section 18 - Assignment */}
                <div id="section18" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">18. Assignment</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. These Terms of Service are personal to you, and are not assignable, transferable or sublicensable by you except with our prior written consent. CENTILIO may assign, transfer or delegate any of our rights and obligations hereunder without consent.
                  </p>
                </div>

                {/* Section 19 - Agency */}
                <div id="section19" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">19. Agency</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. No agency, partnership, joint venture, or employment relationship is created as a result of these Terms of Service and neither party has any authority of any kind to bind the other in any respect.
                  </p>
                </div>

                {/* Section 20 - Notices */}
                <div id="section20" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">20. Notices</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. Unless otherwise specified in these Term of Service, all notices under these Terms of Service will be in writing and will be deemed to have been duly given when received, if personally delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically confirmed, if transmitted by facsimile or email; or the day after it is sent, if sent for next day delivery by recognized overnight delivery service. Electronic notices to CENTILIO should be sent to team@centilio.com. You acknowledge and agree that CENTILIO may send you communications regarding your account or the Service via email to the email address listed in your Account.
                  </p>
                </div>

                {/* Section 21 - No Waiver */}
                <div id="section21" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">21. No Waiver</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. Our failure to enforce any part of these Terms of Service shall not constitute a waiver of our right to later enforce that or any other part of these Terms of Service. Waiver of compliance in any particular instance does not mean that CENTILIO will waive compliance in the future. In order for any waiver of compliance with these Terms of Service to be binding, CENTILIO must provide you with written notice of such waiver through one of our authorized representatives.
                  </p>
                </div>

                {/* Section 22 - Headings; Interpretation */}
                <div id="section22" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">22. Headings; Interpretation</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. The section and paragraph headings in these Terms of Service are for convenience only and shall not affect their interpretation. Any use of "including" "for example" or "such as" in this Agreement shall be read as being followed by "without limitation" where appropriate.
                  </p>
                </div>

                {/* Section 23 - Publicity */}
                <div id="section23" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">23. Publicity</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                    a. You hereby consent to our use of your name, logo and website as part of CENTILIO's marketing and promotional efforts. You also agree that we may display any of your websites that we are providing Services for in our customer website gallery (or similar materials).
                  </p>
                </div>

                {/* Section 24 - Contact */}
                <div id="section24" className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-4">24. Contact</h2>
                  <p className="text-gray-300" style={{ lineHeight: '32px' }}>
                     You may contact CENTILIO at the following: Email: team@centilio.com; Mailing Address: Centilio Inc, Inc (d/b/a CENTILIO), 651 N Broad St, 201Middletown, DE 19709, USA
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
