'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#' },
    { name: 'Industries', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={`w-full bg-[#181A1E] border-b border-[#2A2C30] sticky top-0 z-50 transition-shadow duration-500 ease-in-out ${
      hasMounted && isScrolled ? 'shadow-lg backdrop-blur-sm' : ''
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          !hasMounted 
            ? 'py-4 lg:py-5' // SSR fallback - original padding
            : isScrolled 
            ? 'py-3' // Reduced padding when scrolled
            : 'py-4 lg:py-5' // Original padding
        }`}>
          <div className='flex items-center gap-20'>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/home page/centilio logo vERSION 1 (1).png"
                alt="Centilio"
                width={140}
                height={80}
                className={`object-contain transition-all duration-500 ease-in-out ${
                  !hasMounted
                    ? 'w-32 h-16 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-48 lg:h-28' // SSR fallback
                    : isScrolled 
                    ? 'w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-18 lg:w-40 lg:h-24' 
                    : 'w-32 h-16 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-48 lg:h-28'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-normal text-white hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side - Search and Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Image
                src="/images/home page/headersearchicon.svg"
                alt="Search"
                width={20}
                height={20}
              />
            </button>          
            {/* Sign In Button */}
            <Link
              href="#"
              className="px-6 py-2 text-base font-normal text-white hover:text-blue-400 transition-colors"
            >
              Sign In
            </Link>

            {/* Sign Up Button */}
            <Link
              href="#"
              className="px-6 py-2 text-base text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </Link>


          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#2A2C30]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#2A2C30]">
                <Link
                  href="#"
                  className="text-base font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  className="px-6 py-2 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-colors text-center"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
