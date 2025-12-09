"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
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
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);
  const [isReady, setIsReady] = useState(false);

  // Check if SVG is ready and set state
  useEffect(() => {
    const checkReadiness = () => {
      if (pathRef.current) {
        try {
          const length = pathRef.current.getTotalLength();
          if (length && length > 0) {
            setIsReady(true);
          }
        } catch (error) {
          // SVG not ready yet, try again after a short delay
          setTimeout(checkReadiness, 100);
        }
      }
    };
    
    checkReadiness();
  }, []);

  useAnimationFrame((time) => {
    if (!pathRef.current || !isReady) return;
    try {
      const length = pathRef.current.getTotalLength();
      if (length && length > 0) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    } catch (error) {
      // Handle case where path is not ready yet
      setIsReady(false);
      return;
    }
  });

  const x = useTransform(
    progress,
    (val) => {
      if (!pathRef.current || !isReady) return 0;
      try {
        const length = pathRef.current.getTotalLength();
        if (!length || length === 0) return 0;
        const point = pathRef.current.getPointAtLength(val);
        return point ? point.x : 0;
      } catch (error) {
        // SVG element not ready yet, return safe default
        return 0;
      }
    }
  );
  const y = useTransform(
    progress,
    (val) => {
      if (!pathRef.current || !isReady) return 0;
      try {
        const length = pathRef.current.getTotalLength();
        if (!length || length === 0) return 0;
        const point = pathRef.current.getPointAtLength(val);
        return point ? point.y : 0;
      } catch (error) {
        // SVG element not ready yet, return safe default
        return 0;
      }
    }
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};