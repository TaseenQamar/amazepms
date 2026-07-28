"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WHY_US } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

const BENEFITS = [
  ...WHY_US,
  "STAFF WELFARE — Diwali sweets, festival gifts & rewards, ₹2L insurance, funeral support, compensation & merit rewards",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-pad relative overflow-x-visible bg-white"
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[5%] h-48 w-64 text-ink/[0.06]"
        viewBox="0 0 200 160"
        fill="none"
      >
        {[0, 14, 28, 42, 56, 70].map((y) => (
          <path
            key={y}
            d={`M10 ${20 + y} Q 60 ${5 + y} 100 ${25 + y} T 190 ${20 + y}`}
            stroke="currentColor"
            strokeWidth="1.2"
          />
        ))}
      </svg>

      {/* ~90% section width */}
      <div className="relative z-10 mx-auto w-[92%] max-w-[1400px] sm:w-[90%]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.2fr] lg:gap-6 xl:gap-8">
          {/* ——— Left visual ——— */}
          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={scrollViewport}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative aspect-[3/4] cursor-default overflow-hidden rounded-[1.5rem] bg-[#ececef] shadow-[0_24px_50px_-22px_rgba(26,26,92,0.3)] will-change-transform hover:shadow-[0_32px_60px_-18px_rgba(26,26,92,0.42),0_0_0_1px_rgba(232,145,114,0.3)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 14,
                  delay: 0.12,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/why-us/silhouettes.png"
                  alt="Why choose us — team silhouettes"
                  fill
                  className="object-fill object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority={false}
                />
              </motion.div>
            </motion.div>

            {/* WHY US — bottom overlap (user position) */}
            <motion.div
              initial={{ opacity: 0, x: 80, y: 80, rotate: 10, scale: 0.55 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={scrollViewport}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 12,
                delay: 0.28,
              }}
              whileHover={{
                y: -10,
                scale: 1.06,
                rotate: -2,
                transition: { type: "spring", stiffness: 320, damping: 16 },
              }}
              className="group absolute -bottom-4 -right-2 z-20 w-[62%] max-w-[260px] cursor-default overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-[0_20px_45px_-14px_rgba(26,26,92,0.4)] will-change-transform hover:shadow-[0_28px_50px_-12px_rgba(26,26,92,0.5)] sm:-bottom-6 sm:-right-4 sm:w-[58%]"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-square w-full"
              >
                <Image
                  src="/why-us/why-us-graphic.png"
                  alt="Why Us"
                  fill
                  className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-110"
                  sizes="280px"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ——— Right content — padded so graphic never covers list ——— */}
          <div className="lg:pl-4 xl:pl-6">
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.5, ease: easeExpo }}
              className="text-xs font-bold uppercase tracking-[0.22em] text-[#1a1a5c]"
            >
              Our Service Benefits
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -50, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={scrollViewport}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 14,
                delay: 0.05,
              }}
              className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]"
            >
              Why Choose <span className="text-gradient">Us</span>
            </motion.h2>

            <ul className="mt-7 space-y-2.5 sm:space-y-3">
              {BENEFITS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={scrollViewport}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                    delay: Math.min(0.1 + i * 0.04, 0.5),
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400, damping: 22 },
                  }}
                  className="group flex cursor-default items-start gap-3 rounded-xl border border-transparent px-2.5 py-2 text-sm leading-relaxed text-ink-soft transition-colors hover:border-[#1a1a5c]/12 hover:bg-[#1a1a5c]/[0.04] hover:text-ink"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#1a1a5c] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    <Sparkles className="h-4 w-4 fill-[#1a1a5c]/15" />
                  </span>
                  <span
                    className={
                      i === BENEFITS.length - 1
                        ? "font-semibold text-ink"
                        : undefined
                    }
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
