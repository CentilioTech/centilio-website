'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')

  // Email validation function from jQuery code
  const isValidEmailAddress = (emailAddress: string): boolean => {
    const pattern = /^([a-zA-Z0-9]{1,})+([.]?[a-zA-Z0-9])+@\w+([.-]?\w+)*(\.[a-zA-Z]{2,6}[.]?)+$/i
    return pattern.test(emailAddress)
  }

  // Email validation function
  const validateEmail = (): boolean => {
    if (!email) {
      setEmailError('* Please enter an email address')
      return false
    }
    if (!isValidEmailAddress(email)) {
      setEmailError('* Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  // Password validation function
  const validatePassword = (): boolean => {
    if (password.length < 8) {
      setPasswordError('* Please enter minimum 8 characters')
      return false
    }
    setPasswordError('')
    return true
  }

  const calculatePasswordStrength = (pwd: string): number => {
    let strength = 0
    if (pwd.length >= 8) strength++
    if (pwd.length >= 12) strength++
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++
    if (/\d/.test(pwd)) strength++
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++

    // Map to 4 levels: 0=very weak, 1=weak, 2=medium, 3-5=strong
    if (strength === 0) return 0
    if (strength <= 2) return 1
    if (strength === 3) return 2
    return 3
  }

  // Handle signup submission
  const handleSignup = async () => {
    // Clear previous errors
    setGeneralError('')
    setEmailError('')
    setPasswordError('')

    const isEmailValid = validateEmail()
    const isPasswordValid = validatePassword()

    if (isEmailValid && isPasswordValid) {
      setIsLoading(true)
      
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        // https://account.centilio.com/signup
        const response = await fetch('https://account.centilio.com/signup', {
          method: 'POST',
          credentials: 'include',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify({
            emailId: email,
            password: password,
            timezone: timezone
          })
        })

        if (response.ok) {
          const data = await response.json()
          
          if (data.success === true) {
            // Handle successful signup
            setTimeout(() => {
              let baseRedirect = 'https://account.centilio.com/#/onboarding?action=no_org'
              
              // Check for redirect_url parameter
              const urlParams = new URLSearchParams(window.location.search)
              const redirectUrlParam = urlParams.get('redirect_url')
              
              if (redirectUrlParam) {
                baseRedirect += '&redirect_url=' + encodeURIComponent(redirectUrlParam)
              }
              
              window.location.href = baseRedirect
            }, 100)
          } else {
            setIsLoading(false)
            setGeneralError('Signup failed. Please try again.')
          }
        } else {
          setIsLoading(false)
          const errorText = await response.text()
          
          if (errorText === 'email_id_exist' || response.status === 409) {
            setEmailError('This email is already in use. You can log in or try another email address')
          } else {
            setGeneralError('An error occurred. Please try again.')
          }
        }
      } catch (error) {
        setIsLoading(false)
        console.error('Signup error:', error)
        setGeneralError('Network error. Please check your connection and try again.')
      }
    }
  }

  // Handle Enter key navigation
  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (validateEmail()) {
        document.getElementById('password')?.focus()
      }
    }
  }

  const handlePasswordKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (validatePassword()) {
        handleSignup()
      }
    }
  }

  return (
    <div className="h-screen bg-[#0E0F13]  flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#0E0F13] border-b border-[#2A2C30] py-4 lg:py-6">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 lg:gap-3">
            <Image
              src="/images/signup/centilio-logo-v1.png"
              alt="Centilio Logo"
              width={1024}
              height={1024}
              className="h-15 xs:h-7 sm:h-8 md:h-10 lg:h-25 w-auto"
            />
            {/* <span className="text-lg lg:text-xl xl:text-2xl font-normal text-white">
              Sign
            </span> */}
          </Link>

          <div className="flex items-center gap-2 lg:gap-4">
            <span className="text-xs sm:text-sm lg:text-base text-gray-300">
              Already have an account?
            </span>
            <Link
              href="https://account.centilio.com/#/login"
              className="inline-flex items-center justify-center px-2 sm:px-16 sm:py-1 lg:py-3 text-xs sm:text-sm font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F13]"
            >
              LOG IN
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-stretch flex-1">
        {/* Promotional Card - Left Column */}
        <div className="flex w-full lg:w-1/2 items-center justify-center px-4 lg:px-8 py-6 lg:py-16">
          <div className="max-w-xl w-full ">
            <Card className="bg-[#1A1D2E] border-[#2A2C30] h-full min-h-[300px] lg:min-h-[410px]">
              <CardHeader className="p-6 lg:p-14 text-center">
                <CardTitle className="text-2xl lg:text-4xl font-semibold text-white">
                  Start your <span className="text-[#4285F4]">28-day free trial</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 lg:px-12 pb-6 lg:pb-14  flex flex-col items-center">
                <ul className="space-y-4 lg:space-y-6 ">
                  {/* Credit card - No credit card required */}
                  <li className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[black] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/signup/Vector.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-5 h-5 lg:w-6 lg:h-6"
                      />
                    </div>
                    <span className="text-base lg:text-xl text-white">No credit card required</span>
                  </li>

                  {/* Support - 24/7 online support */}
                  <li className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[black] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/signup/Vector (1).svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-5 h-5 lg:w-6 lg:h-6"
                      />
                    </div>
                    <span className="text-base lg:text-xl text-white">24/7 online support</span>
                  </li>

                  {/* Cancel - Cancel anytime */}
                  <li className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[black] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/signup/Vector (2).svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-5 h-5 lg:w-6 lg:h-6"
                      />
                    </div>
                    <span className="text-base lg:text-xl text-white">Cancel anytime</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SignUp Form - Right Column */}
        <section className="bg-[#181A1E] w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-10 py-6 lg:py-16">
          <div className="max-w-xl w-full ">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              Create your<br />Centilio account
            </h2>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) setEmailError('')
                    }}
                    onBlur={validateEmail}
                    onKeyDown={handleEmailKeyDown}
                    className={cn(
                      "w-full pl-12 pr-4 py-3 bg-[#0E0F13] border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                      emailError ? "border-red-500" : "border-[#D4D4D4]"
                    )}
                    placeholder="Enter Your Email"
                    aria-required="true"
                  />
                </div>
                {emailError && (
                  <div className="text-red-400 text-xs mt-1">
                    {emailError.includes('log in') ? (
                      <span>
                        This email is already in use. You can{' '}
                        <Link href="https://account.centilio.com/#/login" className="text-[#4285F4] underline">
                          log in
                        </Link>{' '}
                        or try another email address
                      </span>
                    ) : (
                      emailError
                    )}
                  </div>
                )}
              </div>

              {/* Password Input with Toggle */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setPasswordStrength(calculatePasswordStrength(e.target.value))
                      if (passwordError) setPasswordError('')
                    }}
                    onBlur={validatePassword}
                    onKeyDown={handlePasswordKeyDown}
                    className={cn(
                      "w-full pl-12 pr-12 py-3 bg-[#0E0F13] border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                      passwordError ? "border-red-500" : "border-[#D4D4D4]"
                    )}
                    placeholder="Enter Your Password"
                    aria-required="true"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0E0F13] rounded p-1 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                  >
                    <Image
                      src="/images/signup/eye-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      className={cn("transition-opacity", !showPassword && "opacity-50")}
                    />
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full transition-all duration-500 ease-out",
                          passwordStrength === 0 && "w-1/4 bg-red-500",
                          passwordStrength === 1 && "w-2/4 bg-orange-500",
                          passwordStrength === 2 && "w-3/4 bg-yellow-500",
                          passwordStrength === 3 && "w-full bg-green-500"
                        )}
                      />
                    </div>
                    <p className={cn(
                      "text-xs mt-1 transition-colors duration-300",
                      passwordStrength === 0 && "text-red-400",
                      passwordStrength === 1 && "text-orange-400",
                      passwordStrength === 2 && "text-yellow-400",
                      passwordStrength === 3 && "text-green-400"
                    )}>
                      {passwordStrength === 0 && "Very weak password"}
                      {passwordStrength === 1 && "Weak password"}
                      {passwordStrength === 2 && "Medium password"}
                      {passwordStrength === 3 && "Strong password"}
                    </p>
                  </div>
                )}
                {passwordError && (
                  <div className="text-red-400 text-xs mt-1">
                    {passwordError}
                  </div>
                )}
              </div>

              {/* Terms Text */}
              <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                By clicking, you&apos;re accepting the{' '}
                <a
                  href="/terms" target='blank'
                  className="text-[#4285F4] underline focus:outline-none "
                >
                  terms of use
                </a>
                ,{' '}
                <a
                  href="/privacy" target='blank'
                  className="text-[#4285F4] underline  focus:outline-none"
                  
                >
                  Privacy Policy
                </a>
                {' '}and Data Processing Agreement.
              </p>

              {/* General Error Message */}
              {generalError && (
                <div className="text-red-400 text-sm text-center">
                  {generalError}
                </div>
              )}

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full border-2 border-white py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#181A1E]",
                  isLoading
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed border-gray-600"
                    : "bg-white text-black hover:bg-gray-100"
                )}
                style={{
                  boxShadow: 'inset 0px 1px 12px rgba(255, 255, 255, 0.1)'
                }}
              >
                {isLoading ? 'PLEASE WAIT...' : 'SIGN UP'}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
