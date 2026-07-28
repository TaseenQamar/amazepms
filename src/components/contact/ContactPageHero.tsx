"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { AtSign, Mail, Phone } from "lucide-react";
import { easeExpo } from "@/lib/animations";
import PageHeroTitle from "@/components/ui/PageHeroTitle";

export default function ContactPageHero() {
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
        initial={{ scale: 1.12, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: easeExpo }}
        style={{ x: imgX, y: imgY, scale: 1.08 }}
        className="absolute inset-[-4%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2400&q=80"
          alt="Contact Us"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: easeExpo }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center gap-16 sm:gap-28"
      >
        <Mail className="h-16 w-16 text-white sm:h-24 sm:w-24" />
        <Phone className="h-14 w-14 text-white sm:h-20 sm:w-20" />
        <AtSign className="h-16 w-16 text-white sm:h-24 sm:w-24" />
      </motion.div>

      <svg
        className="pointer-events-none absolute left-0 top-0 h-40 w-40 text-white/20 sm:h-56 sm:w-56"
        viewBox="0 0 200 200"
        fill="none"
      >
        <motion.path
          d="M10 40 C40 10, 80 10, 110 40"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: easeExpo }}
        />
        <motion.path
          d="M20 55 C50 25, 90 25, 120 55"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 0.1, ease: easeExpo }}
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-28 text-center">
        <PageHeroTitle title="Contact Us" crumb="Contact" />
      </div>
    </section>
  );
}
