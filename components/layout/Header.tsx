'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
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
    <header className={`w-full bg-[#181A1E] border-b border-[#2A2C30] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4 lg:py-5'}`}>
          <div className='flex items-center gap-20'>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/home page/centilio logo vERSION 1 (1).png"
                alt="Centilio"
                width={140}
                height={80}
                className={`object-contain transition-all duration-300 ${
                  isScrolled 
                    ? 'w-20 h-10 sm:w-22 sm:h-11 md:w-24 md:h-12 lg:w-32 lg:h-20' 
                    : 'w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-48 lg:h-36'
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
