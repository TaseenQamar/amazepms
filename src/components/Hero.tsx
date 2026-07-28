"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/content";
import { easeExpo } from "@/lib/animations";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = HERO_SLIDES[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      {/* VIP: cinematic zoom crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.15, ease: easeExpo }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-amber/10" />

      <div className="relative z-10 flex h-full w-full flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.7, ease: easeExpo }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 160, damping: 14 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
                Trusted by 200+ partners across India
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65, ease: easeExpo }}
                className="mb-4 inline-block rounded-2xl border border-white/20 bg-navy/50 px-5 py-3 backdrop-blur-xl sm:px-6 sm:py-4"
              >
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.55, ease: easeExpo }}
                className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {slide.subtitle}. One-stop integrated facility management with a
                15,000+ strong in-house workforce across PAN India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.55, ease: easeExpo }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 18 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy shadow-[0_12px_36px_-10px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-10px_rgba(232,145,114,0.55)]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 text-cyan transition-transform duration-300 group-hover:translate-x-1.5" />
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 18 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan/60 hover:bg-white/25"
                >
                  Explore More
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${s.title}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-cyan"
                      : "w-2.5 bg-white/45 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <motion.button
                onClick={() => go(-1)}
                aria-label="Previous slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan hover:bg-cyan hover:shadow-[0_0_24px_rgba(232,145,114,0.55)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={() => go(1)}
                aria-label="Next slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan hover:bg-cyan hover:shadow-[0_0_24px_rgba(232,145,114,0.55)]"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
