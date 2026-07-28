"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ABOUT_MISSION,
  ABOUT_VALUES,
  ABOUT_VISION,
} from "@/lib/content";
import { scrollViewport } from "@/lib/animations";

const BLOCKS = [
  {
    title: "Our Mission",
    body: ABOUT_MISSION,
    image: "/about/mission.png",
    alt: "Our Mission",
    imageRight: true,
  },
  {
    title: "Our Vision",
    body: ABOUT_VISION,
    image: "/about/vision.png",
    alt: "Our Vision",
    imageRight: false,
  },
  {
    title: "Our Values",
    body: ABOUT_VALUES,
    image: "/about/values.png",
    alt: "Our Values",
    imageRight: true,
  },
] as const;

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-x-clip bg-white/40 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 150, damping: 14 }}
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Mission <span className="text-cyan">|</span> Vision{" "}
          <span className="text-cyan">|</span>{" "}
          <span className="text-gradient">Values</span>
        </motion.h2>

        <div className="mt-12 space-y-6">
          {BLOCKS.map((block, idx) => {
            const fromRight = block.imageRight;
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 16,
                  delay: idx * 0.06,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: "0 28px 55px -20px rgba(26,26,92,0.28)",
                  transition: { type: "spring", stiffness: 320, damping: 22 },
                }}
                className={`soft-card group flex cursor-default flex-col items-center gap-6 overflow-hidden rounded-[1.25rem] p-6 transition-colors duration-300 hover:border-cyan/30 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10 ${
                  fromRight ? "" : "md:flex-row-reverse"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: fromRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={scrollViewport}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 16,
                    delay: 0.1,
                  }}
                  className="w-full max-w-xl md:flex-1"
                >
                  <h3 className="text-2xl font-bold text-navy transition-colors duration-300 group-hover:text-cyan">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {block.body}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-cyan to-amber transition-all duration-500 group-hover:w-24" />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: fromRight ? 160 : -160,
                    y: fromRight ? -80 : 80,
                    rotate: fromRight ? 22 : -22,
                    scale: 0.45,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }}
                  viewport={scrollViewport}
                  transition={{
                    type: "spring",
                    stiffness: 65,
                    damping: 12,
                    delay: 0.15,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: fromRight ? 4 : -4,
                    transition: { type: "spring", stiffness: 260, damping: 16 },
                  }}
                  className={`flex w-full shrink-0 justify-center bg-white px-[15px] md:w-auto md:max-w-[240px] ${
                    fromRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, fromRight ? 2 : -2, 0],
                    }}
                    transition={{
                      duration: 4 + idx * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative aspect-square w-full max-w-[220px] md:w-[220px]"
                  >
                    <Image
                      src={block.image}
                      alt={block.alt}
                      fill
                      className="object-contain object-center drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                      sizes="220px"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
