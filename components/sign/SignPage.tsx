'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

import { AuroraHero } from '@/components/ui/futuristic-hero-section'
import { Sparkles } from '@/components/ui/sparkles'
import BackgroundGradient from '@/components/ui/background-gradient'
import { VerticalMarquee } from '@/components/ui/cta-with-text-marquee'
import { ShootingStars } from '@/components/ui/shooting-stars'
import SignHeader from '@/components/layout/SignHeader'
import SignFooter from '@/components/layout/SignFooter'

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

export default function SignPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLElement>(null)

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

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <SignHeader />

      {/* Hero Section */}
      <div className="pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px]">
        <div className="-mt-20">
          <AuroraHero />
        </div>
      </div>

      {/* Stats Section */}
      <section ref={statsRef} className="py-6 md:py-10 lg:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-black mb-2">
              +{Math.floor(documentsCount / 1000)}k
            </h3>
            <p
              className="text-xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: 'radial-gradient(circle, #34A853, #4285F4)' }}
            >
              Uploaded Documents
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black mb-2">
              +{Math.floor(signedCount / 1000)}k
            </h3>
            <p
              className="text-xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: 'radial-gradient(circle, #4285F4, #34A853)' }}
            >
              Documents Signed
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black mb-2">
              +{Math.floor(minutesSaved / 1000)}k
            </h3>
            <p
              className="text-xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: 'radial-gradient(circle, #34A853, #4285F4)' }}
            >
              Minutes Saved on Paperwork
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-32 px-6 bg-dark-bg text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Trusted by</h2>
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
              width={220}
              height={60}
              className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/Sign page/third fold/ion8_logo white.png"
              alt="ion8"
              width={450}
              height={80}
              className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/Sign page/third fold/aws logo white.png"
              alt="AWS"
              width={150}
              height={40}
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        
        {/* Sparkles Animation Background */}
        <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
          {/* <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-dark-bg" /> */}
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#ffffff"
          />
        </div>
        
        {/* Ellipse decoration at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none z-20">
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
      <section className="py-10 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 lg:mb-16 leading-tight">
            Get measurable results with
            <span
              className=" bg-clip-text text-transparent inline-block w-full pb-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)',
                lineHeight: '1.2'
              }}
            >
              Centilio Sign
            </span>
          </h2>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Up to <span className="text-blue-500">90%</span> faster<br />
                  document turnaround
                </h4>
                <p className="text-base md:text-lg text-gray-600 max-w-lg">
                  Sign and finalize documents in just minutes accelerate your workflows dramatically.
                </p>
              </div>
              <div className="relative overflow-hidden w-full max-w-[544px] mx-auto md:mx-0" style={{ aspectRatio: '544/402', background: '#181A1E', borderRadius: '20px', border: '1px solid #5A5858' }}>
                <BackgroundGradient />
                {/* <div
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
                /> */}
                <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[117px] md:top-[42px] md:translate-x-0 md:translate-y-0" style={{ width: '310px', height: '360px' }}>
                  <Image
                    src="/images/Sign page/fourth fold/product 1.png"
                    alt="Document Signature Interface"
                    width={310}
                    height={360}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '10px 10px 0 0' }}
                  />
                  <div className="absolute inset-0 -z-10 bg-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,rgba(96,165,250,0.25),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_500px,rgba(244,114,182,0.3),transparent)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden md:order-1 order-2 w-full max-w-[544px] mx-auto md:mx-0" style={{ aspectRatio: '544/402', background: '#181A1E', borderRadius: '20px', border: '1px solid #5A5858' }}>
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
                <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[38px] md:top-[135px] md:translate-x-0 md:translate-y-0" style={{ width: '467.71px', height: '266.8px' }}>
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
                <h4 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight ">
                  Save <span className="text-blue-500">₹2,000</span> or<br />
                  more per agreement
                </h4>
                <p className="text-base md:text-lg text-gray-600 max-w-lg">
                  Eliminate printing, courier, and manual processing costs across departments.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Save <span className="text-blue-500">70+</span> hours per<br />
                  employee annually
                </h4>
                <p className="text-base md:text-lg text-gray-600 max-w-lg">
                  Automate routine tasks and approvals to boost team productivity year-round.
                </p>
              </div>
              <div className="relative overflow-hidden w-full max-w-[544px] mx-auto md:mx-0" style={{ aspectRatio: '544/402', background: '#181A1E', borderRadius: '20px', border: '1px solid #5A5858' }}>
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
                <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[38px] md:top-[135px] md:translate-x-0 md:translate-y-0" style={{ width: '467.71px', height: '266.8px' }}>
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
      <section className="py-10 md:py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 px-4">
            Hear it from{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
            >
              our users
            </span>
          </h2>

          <div className="bg-dark-bg rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative Vector - Hidden on mobile */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
              <Image
                src="/images/Sign page/fifth fold/Vector.svg"
                alt="Decorative Pattern"
                width={328}
                height={150}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
              <div className="text-white flex flex-col justify-center md:justify-end h-full text-center md:text-left order-2 md:order-1">
                <h3 className="text-lg sm:text-xl mb-2">Sonal Mehta</h3>
                <p className="text-gray-400 text-sm">Operations Head, BrightEdge Legal</p>
              </div>
              <div className="bg-[#181A1E] rounded-lg md:rounded-xl p-6 sm:p-8 md:p-10 border border-gray-700 order-1 md:order-2">
                <div className="flex gap-1 mb-4 md:mb-4 lg:mb-12 justify-center md:justify-start">
                  <Image
                    src="/images/Sign page/fifth fold/stars.png"
                    alt="5 star rating"
                    width={120}
                    height={24}
                    className="h-5 sm:h-6 w-auto"
                  />
                </div>
                <p className="text-white text-sm sm:text-base lg:text-md leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-center md:text-left">
                  &quot;Centilio Sign has completely transformed how we handle contracts.
                  What used to take days of back-and-forth now gets done in under an hour.
                  The platform is intuitive, secure, and fits right into our existing tools.
                  We&apos;ve saved both time and money and our clients love the seamless experience.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
            <button
              onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/Sign page/fifth fold/left Vector.svg"
                alt="Previous"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
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
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-20 px-6 bg-dark-bg text-white overflow-visible">
        <div className="container mx-auto overflow-visible">
          <div className="flex flex-col md:flex-row gap-6 overflow-visible">
            <div className="md:w-[45%] px-4 md:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8">
                Why teams choose
                <span
                  className="  bg-clip-text text-transparent inline-block pb-2"
                  style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)', lineHeight: '1.2' }}
                >
                  Centilio Sign
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-lg">
                Trusted by modern teams to move faster, stay compliant, and work smarter.
                Centilio Sign brings simplicity and control to every stage of your document workflow.
              </p>
            </div>

            <div ref={marqueeRef} className="relative md:w-[50%] h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center animate-fade-in-up [animation-delay:400ms] overflow-visible">
              <div className="relative w-full h-full overflow-visible">
                <VerticalMarquee speed={20} className="h-full pl-8">
                  {[
                    {
                      num: "01",
                      title: "Ironclad Security & Legal Compliance",
                      desc: "Bank-grade encryption, blockchain audit trails, and full compliance with ESIGN, eIDAS, and global e-signature laws ensure every document is tamper-proof and legally binding."
                    },
                    {
                      num: "02", 
                      title: "3x Faster Turnaround",
                      desc: "Send contracts and get signatures back in minutes, not days. Automated reminders and real-time tracking keep deals moving."
                    },
                    {
                      num: "03",
                      title: "All-in-One Document Workflow", 
                      desc: "Create, send, sign, and store documents from a single platform. No juggling between apps or tools."
                    },
                    {
                      num: "04",
                      title: "Works with Your Stack",
                      desc: "Integrates with CRMs like Salesforce & HubSpot, and cloud drives like Google Drive & OneDrive. Plus, developer-friendly API for full automation."
                    }
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="relative border border-gray-700 rounded-xl p-3 sm:p-4 md:p-6 hover:border-teal-400 transition-colors marquee-item my-2 sm:my-3 md:my-4"
                    >
                      <div
                        className="absolute -left-4 sm:-left-6 md:-left-7 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-xl z-10"
                        style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #34A853)' }}
                      >
                        {feature.num}
                      </div>
                      <div className="pl-4 sm:pl-6 md:pl-8 py-3 md:py-4">
                        {/* Mobile: Vertical layout */}
                        <div className="flex flex-col md:hidden gap-2 sm:gap-3">
                          <h4 className="text-sm sm:text-base md:text-lg font-bold leading-5 sm:leading-6 md:leading-7">{feature.title}</h4>
                          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7">
                            {feature.desc}
                          </p>
                        </div>
                        
                        {/* Desktop: Horizontal layout */}
                        <div className="hidden md:flex items-center gap-10">
                          <div className='w-[45%]'>
                            <h4 className="text-xl font-bold mb-2 leading-8">{feature.title}</h4>
                          </div>
                          <p className="text-gray-300 w-[55%] text-lg leading-9">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </VerticalMarquee>
                
                {/* Top vignette */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181A1E] via-[#181A1E]/50 to-transparent z-10"></div>
                
                {/* Bottom vignette */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#181A1E] via-[#181A1E]/50 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="demo-section" className="py-10 md:py-20 px-6 bg-dark-bg text-white border-t border-gray-800 relative overflow-hidden">
        {/* Starfield Background */}
        <div className="absolute inset-0 stars opacity-60"></div>

        {/* Shooting Stars Animation */}
        <ShootingStars
          starColor="#FFFFFF"
          trailColor="#4285F4"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
          starWidth={15}
          starHeight={2}
        />
        <ShootingStars
          starColor="#FFFFFF"
          trailColor="#34A853"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
          starWidth={12}
          starHeight={2}
        />
        <ShootingStars
          starColor="#FFFFFF"
          trailColor="#EA4335"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
          starWidth={10}
          starHeight={1}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Enterprise-Grade Security. Effortless
            Signing. Unmatched Speed.
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Join hundreds of growing teams and large enterprises that rely on Centilio Sign to drive
            productivity and maintain compliance without the paperwork delays.
          </p>

          {/* Mobile: Stack vertically */}
          <div className="block md:hidden mb-16 px-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Sign page/seventh fold/tick Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-gray-300 text-sm leading-6">
                  Role-based access control, SSO, and audit logs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Sign page/seventh fold/tick Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-gray-300 text-sm leading-6">
                  Scalable for teams of 5 or 5,000+
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/Sign page/seventh fold/tick Vector.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-gray-300 text-sm leading-6">
                  Seamless integration with your CRM, HRMS, and cloud systems
                </span>
              </div>
            </div>
          </div>

          {/* Desktop: Original absolute positioning */}
          <div className="relative mb-16 hidden md:block" style={{ height: '50px' }}>
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

          {/* Security Badges - Mobile */}
          <div className="block md:hidden px-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="relative">
                <Image
                  src="/images/Sign page/seventh fold/Vector1.svg"
                  alt="ISO 27001 Compliant"
                  width={150}
                  height={150}
                  className="w-28 h-28 sm:w-32 sm:h-32"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <p className="text-black font-semibold text-xs text-center leading-tight">
                    ISO 27001<br />Compliant
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/Sign page/seventh fold/Vector2.svg"
                  alt="GDPR & eIDAS Certified"
                  width={150}
                  height={150}
                  className="w-28 h-28 sm:w-32 sm:h-32"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <p className="text-black font-semibold text-xs text-center leading-tight">
                    GDPR & eIDAS<br />Certified
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/Sign page/seventh fold/Vector3.svg"
                  alt="99.9% Uptime SLA"
                  width={150}
                  height={150}
                  className="w-28 h-28 sm:w-32 sm:h-32"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <p className="text-black font-semibold text-xs text-center leading-tight">
                    99.9% Uptime<br />SLA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Badges - Desktop */}
          <div className="relative justify-center hidden md:flex">
            {/* Outer stroke rectangle (bg) */}
            <div
              className="absolute"
              style={{
                width: '1110px',
                height: '600px',
                border: '1px solid #5A5858',
                borderRadius: '10px',
                top: '-17px',
                left: '50%',
                transform: 'translateX(-50%)',
                pointerEvents: 'none'
              }}
            ></div>

            <div className="rounded-2xl p-16 shadow-2xl min-h-[568px] relative" style={{ width: '1069px', border: '1px solid #5A5858' }}>
              {/* Background Image - Full visibility */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/Sign page/seventh fold/Centilio-Sign-thumbnail.png"
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* Non-clickable overlay for centering */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* Play Button - Only clickable element */}
                <div 
                  onClick={() => window.open('https://youtu.be/qWFaczhSwNA?si=aaPY1OUwYmm3NpUg', '_blank', 'noopener,noreferrer')}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto"
                  role="button"
                  aria-label="Watch demo video"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.open('https://youtu.be/qWFaczhSwNA?si=aaPY1OUwYmm3NpUg', '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <Image
                    src="/images/Sign page/seventh fold/play-music.svg"
                    alt="Play Video"
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              {/* Vector1 - Top Right */}
              {/* <div className="absolute z-20" style={{ top: '44px', right: '-101px', width: '180px', height: '180px' }}>
                <Image
                  src="/images/Sign page/seventh fold/Vector1.svg"
                  alt="SLA Icon"
                  width={180}
                  height={180}
                />
                <p className="text-black font-semibold absolute" style={{ top: '113px', left: '39px', width: '103px', fontSize: '18px', lineHeight: '1.4' }}>ISO 27001 Compliant</p>
              </div> */}

              {/* Vector2 - Middle Right */}
              {/* <div className="absolute z-20" style={{ top: '324px', right: '-101px', width: '180px', height: '180px' }}>
                <Image
                  src="/images/Sign page/seventh fold/Vector2.svg"
                  alt="ISO Icon"
                  width={180}
                  height={180}
                />
                <p className="text-black font-semibold absolute" style={{ top: '113px', left: '22px', width: '137px', fontSize: '18px', lineHeight: '1.4' }}>GDPR & eIDAS Certified</p>
              </div> */}

              {/* Vector3 - Left Side */}
              {/* <div className="absolute z-20" style={{ top: '184px', left: '-101px', width: '180px', height: '180px' }}>
                <Image
                  src="/images/Sign page/seventh fold/Vector3.svg"
                  alt="GDPR Icon"
                  width={180}
                  height={180}
                />
                <p className="text-black font-semibold absolute" style={{ top: '113px', left: '28px', width: '124px', fontSize: '18px', lineHeight: '1.4' }}>99.9% Uptime SLA</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <SignFooter />
      <style jsx>{`
      .stars {
        background-image: 
          radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 200px 160px, #eee, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 240px 50px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 280px 90px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 320px 170px, #ddd, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 360px 20px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 400px 130px, #eee, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 440px 60px, #fff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 480px 140px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 520px 30px, #ddd, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 560px 100px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 600px 150px, #eee, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 300px 200px;
        animation: twinkle 4s ease-in-out infinite alternate;
      }

      @keyframes twinkle {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
      }
    `}</style>
    </div>
  )
}
