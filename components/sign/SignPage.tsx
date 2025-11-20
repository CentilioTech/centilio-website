'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function SignPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-dark-bg text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Sign page/header/sign logo vector.svg"
              alt="Centilio Sign Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-semibold">Sign</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-white hover:text-accent-blue transition-colors text-sm">
              Features
            </a>
            <a href="#integrations" className="text-white hover:text-accent-blue transition-colors text-sm">
              Integrations
            </a>
            <a href="#pricing" className="text-white hover:text-accent-blue transition-colors text-sm">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:text-accent-blue transition-colors text-sm">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-dark-bg text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Get documents{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
            >
              signed in
            </span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
            >
              minutes
            </span>
            , not days
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            Centilio Sign is your all-in-one electronic signature and document workflow platform.
            From contracts and HR forms to sales agreements and legal documents, streamline every step,
            create, send, sign, and track without the paperwork hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
              START FREE TRIAL
            </button>
            <button
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              style={{ boxShadow: 'inset 0 0 0 1px #ffffff' }}
            >
              <Image
                src="/images/Sign page/firstfoldvideoplay vector.svg"
                alt="Play"
                width={20}
                height={20}
              />
              WATCH DEMO
            </button>
          </div>

          {/* Sign-up Form Mockup */}
          <div className="max-w-6xl mx-auto relative flex justify-center">
            <div
              className="relative rounded-lg shadow-2xl overflow-visible"
              style={{ width: '1109.33px', height: '624px' }}
            >
              <Image
                src="/images/Sign page/first fold/Image 1.2.1.jpg"
                alt="Document Interface"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white rounded-lg p-6 w-80 shadow-xl" style={{ top: '50%', transform: 'translateY(-50%)', right: '-40px' }}>
                <h3 className="text-2xl font-bold text-black mb-6">Start a 28-day free trial</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-accent-blue"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-accent-blue"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <Image
                        src="/images/Sign page/first fold/eyeVector.svg"
                        alt="Toggle password visibility"
                        width={23}
                        height={22}
                      />
                    </button>
                  </div>
                  <p className="text-xs text-gray-600">
                    By clicking, you're accepting the{' '}
                    <a href="#" className="text-accent-red hover:underline">terms of use</a>,{' '}
                    <a href="#" className="text-accent-red hover:underline">Privacy Policy</a> and{' '}
                    Data Processing Agreement.
                  </p>
                  <button
                    type="submit"
                    className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                  >
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-black mb-2">+12k</h3>
            <p
              className="text-xl bg-clip-text text-transparent"
              style={{ backgroundImage: 'radial-gradient(circle, #34A853, #4285F4)' }}
            >
              Uploaded Documents
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black mb-2">+17k</h3>
            <p
              className="text-xl bg-clip-text text-transparent"
              style={{ backgroundImage: 'radial-gradient(circle, #4285F4, #34A853)' }}
            >
              Documents Signed
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black mb-2">+800k</h3>
            <p
              className="text-xl bg-clip-text text-transparent"
              style={{ backgroundImage: 'radial-gradient(circle, #34A853, #4285F4)' }}
            >
              Minutes Saved on Paperwork
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="pt-16 pb-32 px-6 bg-dark-bg text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by</h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mb-16">
            <Image
              src="/images/Sign page/third fold/digitalocean-2-lwhite.png"
              alt="DigitalOcean"
              width={150}
              height={40}
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/Sign page/third fold/Google_Cloud_logo.white.png"
              alt="Google Cloud"
              width={150}
              height={40}
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/Sign page/third fold/monday.com logo white.png"
              alt="Monday.com"
              width={150}
              height={40}
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/Sign page/third fold/ion8_logo white.png"
              alt="ion8"
              width={80}
              height={40}
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/Sign page/third fold/aws logo white.png"
              alt="AWS"
              width={80}
              height={40}
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        {/* Ellipse decoration at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none">
          <Image
            src="/images/Sign page/third fold/Ellipse 39.svg"
            alt=""
            width={1440}
            height={145}
            className="w-full"
          />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get measurable results with
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent inline-block w-full pb-2"
            style={{
              backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)',
              lineHeight: '1.2'
            }}
          >
            Centilio Sign
          </h3>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-3xl md:text-4xl font-bold mb-4">
                  Up to <span className="text-blue-500">90%</span> faster<br />
                  document turnaround
                </h4>
                <p className="text-lg text-gray-600">
                  Sign and finalize documents in just minutes accelerate your workflows dramatically.
                </p>
              </div>
              <div className="relative overflow-hidden" style={{ width: '544px', height: '402px', background: '#181A1E', borderRadius: '20px', border: '1px solid #5A5858' }}>
                <div
                  className="absolute"
                  style={{
                    background: 'linear-gradient(180deg, rgba(66, 133, 244, 1) 0%, rgba(234, 68, 53, 1) 32.21%, rgba(251, 188, 5, 1) 63.46%, rgba(52, 168, 83, 1) 100%)',
                    filter: 'blur(100px)',
                    borderRadius: '10px',
                    left: '117px',
                    top: '42px',
                    width: '310px',
                    height: '360px'
                  }}
                />
                <div className="absolute z-10" style={{ left: '117px', top: '42px', width: '310px', height: '360px' }}>
                  <Image
                    src="/images/Sign page/fourth fold/product 1.png"
                    alt="Document Signature Interface"
                    width={310}
                    height={360}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '10px 10px 0 0' }}
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden md:order-1 order-2" style={{ width: '544px', height: '402px', background: '#181A1E', borderRadius: '20px', border: '1px solid #5A5858' }}>
                <div
                  className="absolute"
                  style={{
                    background: 'linear-gradient(180deg, rgba(66, 133, 244, 1) 0%, rgba(234, 68, 53, 1) 32.21%, rgba(251, 188, 5, 1) 63.46%, rgba(52, 168, 83, 1) 100%)',
                    filter: 'blur(100px)',
                    borderRadius: '10px',
                    left: '38px',
                    top: '135px',
                    width: '467.71px',
                    height: '266.8px'
                  }}
                />
                <div className="absolute z-10" style={{ left: '38px', top: '135px', width: '467.71px', height: '266.8px' }}>
                  <Image
                    src="/images/Sign page/fourth fold/prouduct 2.png"
                    alt="Document Management Dashboard"
                    width={468}
                    height={267}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '9.19px 9.19px 0 0' }}
                  />
                </div>
              </div>
              <div className="md:order-2 order-1">
                <h4 className="text-3xl md:text-4xl font-bold mb-4">
                  Save <span className="text-blue-500">₹2,000</span> or<br />
                  more per agreement
                </h4>
                <p className="text-lg text-gray-600">
                  Eliminate printing, courier, and manual processing costs across departments.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-3xl md:text-4xl font-bold mb-4">
                  Save <span className="text-blue-500">70+</span> hours per<br />
                  employee annually
                </h4>
                <p className="text-lg text-gray-600">
                  Automate routine tasks and approvals to boost team productivity year-round.
                </p>
              </div>
              <div className="relative overflow-hidden" style={{ width: '544px', height: '402px', background: '#181A1E', borderRadius: '20px', border: '1px solid #5A5858' }}>
                <div
                  className="absolute"
                  style={{
                    background: 'linear-gradient(180deg, rgba(66, 133, 244, 1) 0%, rgba(234, 68, 53, 1) 32.21%, rgba(251, 188, 5, 1) 63.46%, rgba(52, 168, 83, 1) 100%)',
                    filter: 'blur(100px)',
                    borderRadius: '10px',
                    left: '38px',
                    top: '135px',
                    width: '467.71px',
                    height: '266.8px'
                  }}
                />
                <div className="absolute z-10" style={{ left: '38px', top: '135px', width: '467.71px', height: '266.8px' }}>
                  <Image
                    src="/images/Sign page/fourth fold/prouduct 3.png"
                    alt="Document Analytics Dashboard"
                    width={468}
                    height={267}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '9.19px 9.19px 0 0' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Hear it from{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
            >
              our users
            </span>
          </h2>

          <div className="bg-dark-bg rounded-2xl p-12 shadow-xl relative overflow-hidden">
            {/* Decorative Vector */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                src="/images/Sign page/fifth fold/Vector.svg"
                alt="Decorative Pattern"
                width={328}
                height={150}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold mb-2">Sonal Mehta</h3>
                <p className="text-gray-400">Operations Head, BrightEdge Legal</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed">
                  "Centilio Sign has completely transformed how we handle contracts.
                  What used to take days of back-and-forth now gets done in under an hour.
                  The platform is intuitive, secure, and fits right into our existing tools.
                  We've saved both time and money and our clients love the seamless experience."
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/Sign page/fifth fold/left Vector.svg"
                alt="Previous"
                width={48}
                height={48}
              />
            </button>
            <button
              onClick={() => setCurrentTestimonial(currentTestimonial + 1)}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/Sign page/fifth fold/right Vector.svg"
                alt="Next"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-dark-bg text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why teams choose
              </h2>
              <h3
                className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent inline-block pb-2"
                style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)', lineHeight: '1.2' }}
              >
                Centilio Sign
              </h3>
              <p className="text-lg text-gray-300">
                Trusted by modern teams to move faster, stay compliant, and work smarter.
                Centilio Sign brings simplicity and control to every stage of your document workflow.
              </p>
            </div>

            <div className="space-y-8 pl-8">
              {/* Feature 1 */}
              <div className="relative border border-gray-700 rounded-xl p-6 hover:border-teal-400 transition-colors">
                <div
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl"
                  style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
                >
                  01
                </div>
                <div className="pl-8">
                  <h4 className="text-xl font-bold mb-2">Ironclad Security & Legal Compliance</h4>
                  <p className="text-gray-400">
                    Bank-grade encryption, blockchain audit trails, and full compliance with ESIGN,
                    eIDAS, and global e-signature laws ensure every document is tamper-proof and legally binding.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative border border-gray-700 rounded-xl p-6 hover:border-teal-400 transition-colors">
                <div
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl"
                  style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
                >
                  02
                </div>
                <div className="pl-8">
                  <h4 className="text-xl font-bold mb-2">3x Faster Turnaround</h4>
                  <p className="text-gray-400">
                    Send contracts and get signatures back in minutes, not days.
                    Automated reminders and real-time tracking keep deals moving.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative border border-gray-700 rounded-xl p-6 hover:border-teal-400 transition-colors">
                <div
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl"
                  style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
                >
                  03
                </div>
                <div className="pl-8">
                  <h4 className="text-xl font-bold mb-2">All-in-One Document Workflow</h4>
                  <p className="text-gray-400">
                    Create, send, sign, and store documents from a single platform.
                    No juggling between apps or tools.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative border border-gray-700 rounded-xl p-6 hover:border-teal-400 transition-colors">
                <div
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl"
                  style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
                >
                  04
                </div>
                <div className="pl-8">
                  <h4 className="text-xl font-bold mb-2">Works with Your Stack</h4>
                  <p className="text-gray-400">
                    Integrates with CRMs like Salesforce & HubSpot, and cloud drives like Google Drive & OneDrive.
                    Plus, developer-friendly API for full automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-6 bg-dark-bg text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Enterprise-Grade Security. Effortless
            <br />
            Signing. Unmatched Speed.
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Join hundreds of growing teams and large enterprises that rely on Centilio Sign to drive
            productivity and maintain compliance without the paperwork delays.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors mb-12">
            REQUEST ENTERPRISE DEMO
          </button>

          <div className="relative mb-16" style={{ height: '50px' }}>
            {/* Point 1 */}
            <div className="absolute flex items-center gap-3" style={{ left: '35px', top: '0' }}>
              <Image
                src="/images/Sign page/seventh fold/tick Vector.svg"
                alt="Check"
                width={24}
                height={24}
              />
              <span className="text-gray-300" style={{ fontSize: '18px', lineHeight: '25px', width: '241px' }}>
                Role-based access control, SSO, and audit logs
              </span>
            </div>
            {/* Point 2 */}
            <div className="absolute flex items-center gap-3" style={{ left: '365px', top: '0' }}>
              <Image
                src="/images/Sign page/seventh fold/tick Vector.svg"
                alt="Check"
                width={24}
                height={24}
              />
              <span className="text-gray-300" style={{ fontSize: '18px', lineHeight: '25px', width: '222px' }}>
                Scalable for teams of 5 or 5,000+
              </span>
            </div>
            {/* Point 3 */}
            <div className="absolute flex items-center gap-3" style={{ left: '676px', top: '0' }}>
              <Image
                src="/images/Sign page/seventh fold/tick Vector.svg"
                alt="Check"
                width={24}
                height={24}
              />
              <span className="text-gray-300" style={{ fontSize: '18px', lineHeight: '25px', width: '318px' }}>
                Seamless integration with your CRM, HRMS, and cloud systems
              </span>
            </div>
          </div>

          {/* Security Badges */}
          <div className="relative flex justify-center">
            {/* Outer stroke rectangle (bg) */}
            <div
              className="absolute"
              style={{
                width: '1110px',
                height: '582px',
                border: '1px solid #5A5858',
                borderRadius: '10px 10px 0 0',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                pointerEvents: 'none'
              }}
            ></div>

            <div className="bg-white rounded-2xl p-16 shadow-2xl min-h-[568px] relative" style={{ width: '1069px', border: '1px solid #5A5858', borderRadius: '10px 10px 0 0' }}>
              {/* Floating Badges */}
              {/* Vector1 - Top Right */}
              <div className="absolute" style={{ top: '44px', right: '-101px', width: '180px', height: '180px' }}>
                <Image
                  src="/images/Sign page/seventh fold/Vector1.svg"
                  alt="SLA Icon"
                  width={180}
                  height={180}
                />
                <p className="text-black font-semibold absolute" style={{ top: '113px', left: '39px', width: '103px', fontSize: '18px', lineHeight: '1.4' }}>ISO 27001 Compliant</p>
              </div>

              {/* Vector2 - Middle Right */}
              <div className="absolute" style={{ top: '324px', right: '-101px', width: '180px', height: '180px' }}>
                <Image
                  src="/images/Sign page/seventh fold/Vector2.svg"
                  alt="ISO Icon"
                  width={180}
                  height={180}
                />
                <p className="text-black font-semibold absolute" style={{ top: '113px', left: '22px', width: '137px', fontSize: '18px', lineHeight: '1.4' }}>GDPR & eIDAS Certified</p>
              </div>

              {/* Vector3 - Left Side */}
              <div className="absolute" style={{ top: '184px', left: '-101px', width: '180px', height: '180px' }}>
                <Image
                  src="/images/Sign page/seventh fold/Vector3.svg"
                  alt="GDPR Icon"
                  width={180}
                  height={180}
                />
                <p className="text-black font-semibold absolute" style={{ top: '113px', left: '28px', width: '124px', fontSize: '18px', lineHeight: '1.4' }}>99.9% Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image
                src="/images/Sign page/footer/Vector1.svg"
                alt="Centilio Sign Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sign</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Bot</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="relative" style={{ height: '50px' }}>
              {/* Facebook */}
              <a href="#" className="absolute hover:opacity-80 transition-opacity" style={{ left: '887px', top: '10px' }}>
                <Image
                  src="/images/Sign page/footer/social media icons/facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </a>
              {/* Instagram */}
              <a href="#" className="absolute hover:opacity-80 transition-opacity" style={{ left: '931px', top: '10px' }}>
                <Image
                  src="/images/Sign page/footer/social media icons/insta.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              {/* YouTube */}
              <a href="#" className="absolute hover:opacity-80 transition-opacity" style={{ left: '975px', top: '10px' }}>
                <Image
                  src="/images/Sign page/footer/social media icons/youtube.svg"
                  alt="YouTube"
                  width={30}
                  height={30}
                />
              </a>
              {/* LinkedIn */}
              <a href="#" className="absolute hover:opacity-80 transition-opacity" style={{ left: '1019px', top: '10px' }}>
                <Image
                  src="/images/Sign page/footer/social media icons/link in (1).svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              {/* Twitter */}
              <a href="#" className="absolute hover:opacity-80 transition-opacity" style={{ left: '1063px', top: '10px' }}>
                <Image
                  src="/images/Sign page/footer/social media icons/twitter.svg"
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
