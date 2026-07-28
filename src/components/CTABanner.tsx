"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16"
    >
      {/* VIP ANIMATION: banner — morph from pill to full bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, borderRadius: "999px" }}
        whileInView={{ opacity: 1, scale: 1, borderRadius: "1.75rem" }}
        viewport={scrollViewport}
        transition={{ duration: 0.85, ease: easeExpo }}
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 300, damping: 22 },
        }}
        className="group relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 overflow-hidden bg-[#12124a] px-6 py-8 shadow-[0_30px_80px_-24px_rgba(18,18,74,0.55)] transition-shadow duration-500 hover:shadow-[0_36px_90px_-20px_rgba(18,18,74,0.7),0_0_40px_rgba(232,145,114,0.15)] sm:flex-row sm:gap-8 sm:px-10 sm:py-9"
      >
        <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rotate-12 rounded-3xl border border-white/10 transition-transform duration-700 group-hover:rotate-[18deg]" />
        <div className="pointer-events-none absolute -bottom-10 -right-6 h-44 w-44 rounded-[2rem] border border-cyan/20 bg-cyan/5 transition-all duration-700 group-hover:scale-110 group-hover:bg-cyan/10" />

        <motion.a
          href="tel:9908538137"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={scrollViewport}
          transition={{ delay: 0.2, duration: 0.55, ease: easeExpo }}
          whileHover={{ x: 4, scale: 1.02 }}
          className="relative z-10 flex items-center gap-4"
        >
          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white transition-colors duration-300 hover:border-cyan hover:bg-cyan"
          >
            <Phone className="h-6 w-6" />
          </motion.span>
          <div>
            <div className="text-sm font-medium text-white/70">
              Call For More Info
            </div>
            <div className="text-xl font-bold tracking-wide text-white sm:text-2xl">
              99085 38137
            </div>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={scrollViewport}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="relative z-10 hidden h-12 w-px bg-white/25 sm:block"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ delay: 0.28, duration: 0.55, ease: easeExpo }}
          className="relative z-10 text-center text-2xl font-bold tracking-tight text-white sm:flex-1 sm:text-left sm:text-3xl"
        >
          Call Us For Our Services
        </motion.h2>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={scrollViewport}
          transition={{ delay: 0.35, type: "spring", stiffness: 160, damping: 14 }}
          whileHover={{
            scale: 1.06,
            y: -2,
            transition: { type: "spring", stiffness: 400, damping: 18 },
          }}
          whileTap={{ scale: 0.97 }}
          className="group/btn relative z-10 inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:border-cyan hover:bg-cyan"
        >
          Contact Us
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
