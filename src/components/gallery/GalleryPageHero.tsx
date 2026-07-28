"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeExpo } from "@/lib/animations";
import PageHeroTitle from "@/components/ui/PageHeroTitle";

export default function GalleryPageHero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const imgX = useTransform(sx, [-0.5, 0.5], ["-3%", "3%"]);
  const imgY = useTransform(sy, [-0.5, 0.5], ["-2%", "2%"]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex h-[42vh] min-h-[280px] w-full items-end overflow-hidden sm:h-[46vh]"
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: easeExpo }}
        style={{ x: imgX, y: imgY, scale: 1.08 }}
        className="absolute inset-[-4%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt="Gallery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />

      <svg
        className="pointer-events-none absolute left-0 top-0 h-48 w-48 text-white/15 sm:h-64 sm:w-64"
        viewBox="0 0 200 200"
        fill="none"
      >
        <motion.path
          d="M20 20 C20 80, 20 120, 100 120 C180 120, 180 80, 180 20"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: easeExpo }}
        />
        <motion.path
          d="M40 20 C40 70, 40 100, 100 100 C160 100, 160 70, 160 20"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: easeExpo }}
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-0 h-48 w-48 text-white/15 sm:h-64 sm:w-64"
        viewBox="0 0 200 200"
        fill="none"
      >
        <motion.path
          d="M180 20 C180 80, 180 120, 100 120 C20 120, 20 80, 20 20"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: easeExpo }}
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 text-center">
        <PageHeroTitle title="Gallery" crumb="Gallery" />
      </div>
    </section>
  );
}
