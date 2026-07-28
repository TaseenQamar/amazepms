"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeExpo } from "@/lib/animations";
import PageHeroTitle from "@/components/ui/PageHeroTitle";

export default function ClientsPageHero() {
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
        initial={{ scale: 1.18, opacity: 0.45 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.25, ease: easeExpo }}
        style={{ x: imgX, y: imgY, scale: 1.08 }}
        className="absolute inset-[-4%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt="Our Clients"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/72 to-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/25" />
      <div className="pointer-events-none absolute -left-16 -top-8 h-64 w-64 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-12 top-10 h-72 w-72 rounded-full border border-white/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 text-center">
        <PageHeroTitle title="Our Clients" crumb="Our Clients" />
      </div>
    </section>
  );
}
