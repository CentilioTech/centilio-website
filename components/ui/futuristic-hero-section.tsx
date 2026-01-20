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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
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
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-10 px-4">
          Centilio Sign is your all-in-one electronic signature and document workflow platform.
          From contracts and HR forms to sales agreements and legal documents, streamline every step,
          create, send, sign, and track without the paperwork hassle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <div className="inline-block rounded-[50px] p-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] w-fit">
             <a href="/signup">
            <button className="px-8 py-3 bg-white text-black font-medium cursor-pointer rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              START FREE TRIAL
            </button>
            </a>
          </div>
          
          <motion.button
            onClick={() => {
              // Check if mobile/small screen
              if (window.innerWidth < 768) {
                // Mobile: Open YouTube link in new tab
                window.open('https://youtu.be/qWFaczhSwNA?si=pQfprr_AsnROO5xP', '_blank', 'noopener,noreferrer');
              } else {
                // Desktop: Keep existing scroll behavior
                const demoSection = document.getElementById('demo-section');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
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
            className="group relative flex w-fit items-center justify-center gap-2  cursor-pointer rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
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

      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};