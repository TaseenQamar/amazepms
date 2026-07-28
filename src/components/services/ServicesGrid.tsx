"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SERVICE_PAGE_MORE,
  SERVICE_PAGE_PRIMARY,
} from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

/** Crash-in: cards drop hard from above, bounce on land */
function crashTransition(index: number) {
  return {
    type: "spring" as const,
    stiffness: 320,
    damping: 22,
    mass: 0.95,
    delay: Math.min(index * 0.05, 0.55),
  };
}

function crashInitial(index: number) {
  const tilt = index % 2 === 0 ? -8 : 8;
  return {
    opacity: 0,
    y: -72,
    scale: 1.12,
    rotate: tilt,
  };
}

function ServiceCard({
  title,
  logo,
  index,
}: {
  title: string;
  logo: string;
  index: number;
}) {
  return (
    <motion.article
      initial={crashInitial(index)}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ ...scrollViewport, amount: 0.35 }}
      transition={crashTransition(index)}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      className="group relative aspect-[3/4] origin-top overflow-hidden rounded-2xl border-2 border-white shadow-[0_12px_32px_-10px_rgba(26,26,92,0.35)] will-change-transform hover:shadow-[0_0_28px_rgba(255,255,255,0.7),0_16px_40px_-12px_rgba(26,26,92,0.45)]"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #ffffff 36%, #1a1a5c 100%)",
      }}
    >
      {/* Blue Amaze mark — drops from top on hover */}
      <div className="pointer-events-none absolute right-2.5 top-2.5 z-20 h-8 w-8 -translate-y-10 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 sm:h-9 sm:w-9">
        <Image
          src="/services/logos/amaze-mark.png"
          alt=""
          fill
          className="object-contain drop-shadow-md"
          sizes="36px"
          unoptimized
        />
      </div>

      {/* Logo — fixed from top / left / right */}
      <div className="absolute top-5 right-3 bottom-[30%] left-3 z-10">
        <Image
          src={logo}
          alt={title}
          fill
          className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 45vw, 160px"
          unoptimized
        />
      </div>

      {/* Title — bottom left on navy */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3.5">
        <h3 className="text-left text-[12px] font-bold leading-snug text-white sm:text-[13px]">
          {title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="section-pad relative overflow-x-clip bg-white/50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 320, damping: 16 }}
          className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
        >
          Property and Asset Management
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SERVICE_PAGE_PRIMARY.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              logo={service.logo}
              index={i}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SERVICE_PAGE_MORE.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              logo={service.logo}
              index={i + 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
