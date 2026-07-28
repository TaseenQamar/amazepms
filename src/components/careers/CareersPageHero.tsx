"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeExpo } from "@/lib/animations";
import PageHeroTitle from "@/components/ui/PageHeroTitle";

export default function CareersPageHero() {
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
        initial={{ scale: 1.15, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1.3, ease: easeExpo }}
        style={{ x: imgX, y: imgY, scale: 1.08 }}
        className="absolute inset-[-4%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt="Careers"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/72 to-navy/48" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/25" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: easeExpo }}
        className="pointer-events-none absolute -left-4 top-10 hidden h-36 w-36 border border-white/25 sm:block [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
      />
      <div className="pointer-events-none absolute left-16 top-20 hidden h-20 w-20 border border-white/15 sm:block [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
      <div className="pointer-events-none absolute -right-6 top-14 hidden h-40 w-40 border border-white/20 sm:block [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 text-center">
        <PageHeroTitle title="Careers" crumb="Careers" />
      </div>
    </section>
  );
}
