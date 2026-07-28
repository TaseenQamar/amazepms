"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeExpo } from "@/lib/animations";
import PageHeroTitle from "@/components/ui/PageHeroTitle";

export default function RecruitmentsPageHero() {
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
        initial={{ scale: 1.28, opacity: 0.35, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.35, ease: easeExpo }}
        style={{ x: imgX, y: imgY, scale: 1.08 }}
        className="absolute inset-[-4%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt="Recruitments"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 text-center">
        <PageHeroTitle title="Recruitments" crumb="Recruitments & Training" />
      </div>
    </section>
  );
}
