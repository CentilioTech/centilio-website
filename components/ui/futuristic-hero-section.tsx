'use client';

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative overflow-hidden bg-gray-950 px-4 py-20 text-gray-200"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <div className="inline-block rounded-[50px] p-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] w-fit">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              START FREE TRIAL
            </button>
          </div>
          
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center justify-center gap-2 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <Image
              src="/images/Sign page/firstfoldvideoplay vector.svg"
              alt="Play"
              width={20}
              height={20}
            />
            WATCH DEMO
          </motion.button>
        </div>

        {/* Sign-up Form Mockup */}
        <div className="max-w-6xl mx-auto relative flex justify-center overflow-visible">
          <div
            className="relative rounded-lg shadow-2xl overflow-visible"
            style={{ width: '1109.33px', height: '624px' }}
          >
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
              <Image
                src="/images/Sign page/first fold/Image 1.2.1.jpg"
                alt="Document Interface"
                fill
                className="object-cover filter blur-sm"
              />
              {/* Light overlay for better brightness */}
              <div className="absolute inset-0 bg-white/10" />
            </div>

            {/* Form with Brand Color Frame - Right Side Position */}
            <div className="absolute shadow-2xl md:right-[-50px] right-1/2 md:translate-x-0 translate-x-1/2" style={{ 
              top: '50%', 
              transform: 'translateY(-50%)', 
              border: '3px solid',
              borderImage: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853) 1',
              borderRadius: '20px',
              background: 'transparent',
              padding: '20px'
            }}>
              <div className="bg-white rounded-lg p-10 w-[30rem]" style={{ marginTop: '0' }}>
                <h3 className="text-xl font-semibold text-black mb-6">Start a 28-day free trial</h3>
                  <form className="space-y-6">
                    <div>
                      <input
                        type="email"
                        placeholder="Email *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
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
                    <p className="text-xs text-gray-600 text-left">
                      By clicking, you&apos;re accepting the{' '}
                      <a href="#" className="text-red-500 hover:underline">terms of use</a>,{' '}
                      <a href="#" className="text-red-500 hover:underline">Privacy Policy</a> and{' '}
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
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};