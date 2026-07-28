"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

function LogoTrack({
  logos,
  duration = "40s",
}: {
  logos: typeof CLIENT_LOGOS;
  duration?: string;
}) {
  const loop = [...logos, ...logos];

  return (
    <div
      className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused] sm:gap-10"
      style={{ animationDuration: duration }}
    >
      {loop.map((logo, i) => (
        <motion.div
          key={`${logo.name}-${i}`}
          whileHover={{
            y: -6,
            scale: 1.08,
            transition: { type: "spring", stiffness: 400, damping: 18 },
          }}
          className="group relative h-[56px] w-[156px] shrink-0 cursor-default rounded-xl border border-transparent bg-white/0 px-2 py-1 transition-all duration-300 hover:border-ink/8 hover:bg-white hover:shadow-[0_12px_28px_-14px_rgba(26,26,92,0.35)] sm:h-[64px] sm:w-[180px]"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            sizes="180px"
            className="object-contain p-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        </motion.div>
      ))}
    </div>
  );
}

type Props = {
  id?: string;
  title?: string;
};

export default function ClientsMarquee({
  id = "clients",
  title = "Trusted by 200+ valued partners across India",
}: Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-y border-ink/5 bg-white/50 py-12 sm:py-14"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.35em", y: 12 }}
        whileInView={{ opacity: 1, letterSpacing: "0.12em", y: 0 }}
        viewport={scrollViewport}
        transition={{ duration: 0.8, ease: easeExpo }}
        className="mb-8 text-center text-xs font-semibold uppercase text-muted"
      >
        {title}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={{ duration: 0.7, ease: easeExpo }}
        className="relative"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#f7f5fb] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#f3f0f9] to-transparent sm:w-24" />

        <LogoTrack logos={CLIENT_LOGOS} duration="38s" />
      </motion.div>
    </section>
  );
}
