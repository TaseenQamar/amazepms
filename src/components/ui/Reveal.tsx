"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  clipCenter,
  clipUp,
  fadeUp,
  popIn,
  scaleIn,
  scrollTransition,
  scrollViewport,
  staggerContainer,
  tiltIn,
  zoomBlur,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const perspective = { perspective: 1200 } as const;

export function RevealUp({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      custom={0}
      transition={{ ...scrollTransition, delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Modern clip wipe from bottom */
export function RevealClip({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={clipUp}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      transition={{ ...scrollTransition, delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Expand from center mask */
export function RevealCenter({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={clipCenter}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      transition={{ ...scrollTransition, delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Spring pop */
export function RevealPop({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      transition={{ delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** 3D tilt */
export function RevealTilt({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      style={perspective}
      variants={tiltIn}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      transition={{ ...scrollTransition, delay }}
      className={cn(
        "will-change-transform [transform-style:preserve-3d]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Cinematic zoom blur */
export function RevealZoom({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={zoomBlur}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      transition={{ ...scrollTransition, delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealScale({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      transition={{ ...scrollTransition, delay }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* Back-compat aliases — now unique styles, not left/right */
export const RevealLeft = RevealClip;
export const RevealRight = RevealCenter;
