"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Button                                    */
/* -------------------------------------------------------------------------- */

type ButtonProps = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export function Button({
  borderRadius = "1.75rem",
  children,
  as,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps) {
  const Component = as || "button";

  return React.createElement(
    Component,
    {
      ...otherProps,
      className: cn(
        "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      ),
      style: { borderRadius },
    },
    [
      <div
        key="border"
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>,
      <div
        key="content"
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    ]
  );
}

/* -------------------------------------------------------------------------- */
/*                               MovingBorder                                  */
/* -------------------------------------------------------------------------- */

type MovingBorderProps = React.SVGProps<SVGSVGElement> & {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
};

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);
  const [isReady, setIsReady] = useState(false);

  // Helper to validate SVG element is rendered and has dimensions
  const isElementReady = useCallback(() => {
    if (!pathRef.current) return false;

    try {
      const length = pathRef.current.getTotalLength();
      const bbox = pathRef.current.getBBox();

      // Validate: length > 0 AND element has actual dimensions
      return length > 0 && bbox.width > 0 && bbox.height > 0;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    const check = () => {
      if (!pathRef.current) return;
      try {
        if (pathRef.current.getTotalLength() > 0) {
          setIsReady(true);
        }
      } catch {
        setTimeout(check, 100);
      }
    };
    check();
  }, []);

  useAnimationFrame((time) => {
    // Continuous validation - check every frame
    if (!isElementReady()) return;

    try {
      const length = pathRef.current!.getTotalLength();
      if (length > 0) {
        progress.set((time * (length / duration)) % length);
      }
    } catch (error) {
      // Silently fail - element not ready yet
      return;
    }
  });

  const x = useTransform(progress, (v) => {
    try {
      if (!pathRef.current || !isElementReady()) return 0;
      return pathRef.current.getPointAtLength(v).x;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (v) => {
    try {
      if (!pathRef.current || !isElementReady()) return 0;
      return pathRef.current.getPointAtLength(v).y;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        {...otherProps}
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};