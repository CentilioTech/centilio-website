'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function WhiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productItems = [
    { name: 'Sign', href: '/sign', description: 'Digital signature solution' },
    { name: 'SEO Bot', href: '/seo-bot', description: 'Content automation tool' },
  ];

  const navItems = [
    { name: 'Industries', href: '/home' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Partners', href: '/home' },
    { name: 'About', href: '/home' },
  ];

  return (
    <header className="w-full bg-white border-b border-[#E5E7EB]">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex items-center justify-between py-2">
          <div className='flex items-center gap-20'>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/home page/centilio logo - black primary logo.png"
                alt="Centilio"
                width={140}
                height={80}
                className="object-contain w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-20"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Products Dropdown */}
              <div className="relative group">
                <button className="text-base font-normal text-black hover:text-blue-600 transition-colors flex items-center gap-1">
                  Products
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {productItems.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-black">{product.name}</div>
                        <div className="text-sm text-gray-600">{product.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-normal text-black hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Sign In Button */}
            <Link
              href="https://account.centilio.com/#/login"
              className="px-6 py-2 text-base font-normal text-black hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/signup"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #34A853, #EA4435, #FBBC05, #4285F4) border-box',
                border: '2px solid transparent'
              }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black"
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
          <div className="lg:hidden py-4 border-t border-[#E5E7EB]">
            <nav className="flex flex-col space-y-4">
              {/* Products Section */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-500 px-2">Products</div>
                {productItems.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="block text-base font-medium text-black hover:text-blue-600 transition-colors px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-black hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#E5E7EB]">
                <Link
                  href="https://account.centilio.com/#/login"
                  className="text-base font-semibold text-black hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-colors text-center border border-gray-300"
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
