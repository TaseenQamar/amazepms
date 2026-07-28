"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-white pb-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={{ duration: 0.8, ease: easeExpo }}
        className="group relative h-[380px] w-full sm:h-[440px] md:h-[500px]"
        data-lenis-prevent
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#1a1a5c] via-[#e89172] to-cyan transition-transform duration-500 group-hover:scale-x-100" />
        <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_0_0_rgba(232,145,114,0)] transition-shadow duration-500 group-hover:shadow-[inset_0_0_0_2px_rgba(232,145,114,0.35)]" />
        <iframe
          title="Amaze PMS Office Location"
          src={CONTACT_INFO.mapEmbed}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </motion.div>
    </section>
  );
}
