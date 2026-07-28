"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { APPROACH_STAGES } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

/**
 * Ladder rise (stage 1 lowest → stage 4 highest).
 * Connector heights match the step gaps between consecutive stages.
 */
const STEP_OFFSET = [
  "lg:mt-36 xl:mt-46",
  "lg:mt-24 xl:mt-36",
  "lg:mt-12 xl:mt-12",
  "lg:mt-0",
] as const;

/** Vertical rise of each L-connector (matches STEP_OFFSET deltas) */
const LADDER_RISE = [
  "h-[5.5rem] xl:h-[1rem]",
  "h-[5.5rem] xl:h-[1rem]",
  "h-[5.5rem] xl:h-[1rem]",
] as const;

function LadderConnector({ riseClass }: { riseClass: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-1/2 left-[calc(100%-4px)] z-20 hidden lg:block"
      style={{ width: "calc(100% + 1.35rem)" }}
    >
      {/* → horizontal to elbow */}
      <div className="absolute top-0 left-0 h-[2px] w-[58%] bg-[#1a1a5c]/70" />

      {/* ↑ vertical from elbow (grows upward) */}
      <div
        className={`absolute top-0 left-[58%] w-[2px] -translate-y-full bg-[#1a1a5c]/70 ${riseClass}`}
      />

      {/* ▲ arrow at top of vertical */}
      <div
        className={`absolute top-0 left-[58%] flex -translate-x-1/2 -translate-y-full flex-col items-center ${riseClass}`}
      >
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          className="-mt-2.5 shrink-0"
        >
          <path d="M7 0L14 11H0L7 0Z" fill="#1a1a5c" fillOpacity="0.85" />
        </svg>
      </div>
    </div>
  );
}

export default function FunctionalApproach() {
  return (
    <section className="relative overflow-x-clip bg-white py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] h-[55%] w-[70%] -translate-x-1/2 rounded-full bg-[#c5d4f5]/35 blur-[80px]"
      />

      <motion.div
        initial={{ opacity: 0, x: 160, y: 80, scale: 0.85 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        viewport={scrollViewport}
        transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.2 }}
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[38%] w-[72%] sm:h-[48%] sm:w-[62%] lg:h-[58%] lg:w-[55%]"
      >
        <Image
          src="/recruitments/approach-skyline.png"
          alt=""
          fill
          className="object-contain object-right-bottom"
          sizes="(max-width: 768px) 85vw, 55vw"
          priority={false}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.45, ease: easeExpo }}
            className="mx-auto mb-3 h-[3px] w-14 origin-center rounded-full bg-[#1a1a5c]"
          />
          <motion.p
            initial={{ opacity: 0, y: -40, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={scrollViewport}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="text-xs font-bold uppercase tracking-[0.28em] text-[#1a1a5c]"
          >
            Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -80, scale: 0.65, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={scrollViewport}
            transition={{ type: "spring", stiffness: 150, damping: 14, delay: 0.05 }}
            className="mt-2 text-3xl font-bold tracking-tight text-[#1a1a5c] sm:text-4xl md:text-[2.75rem]"
          >
            Functional Approach
          </motion.h2>
        </div>

        {/* Ladder staircase */}
        <div className="relative mt-14 sm:mt-16 lg:mt-16 lg:pb-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {APPROACH_STAGES.map((stage, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <motion.article
                  key={stage.stage}
                  initial={{
                    opacity: 0,
                    x: fromLeft ? -100 : 100,
                    y: 80 + i * 20,
                    rotate: fromLeft ? -10 : 10,
                    scale: 0.7,
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
                    stiffness: 160,
                    damping: 15,
                    delay: i * 0.12,
                  }}
                  className={`relative flex flex-col overflow-visible ${STEP_OFFSET[i]}`}
                >
                  <ul className="mb-4 space-y-2.5 px-1">
                    {stage.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={scrollViewport}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                          delay: 0.2 + i * 0.1 + j * 0.04,
                        }}
                        whileHover={{
                          x: 6,
                          transition: { type: "spring", stiffness: 400, damping: 22 },
                        }}
                        className="group flex cursor-default items-start gap-2 rounded-lg px-1 py-0.5 text-[13px] font-medium leading-snug text-[#1a1a5c] transition-colors hover:bg-[#1a1a5c]/[0.04] sm:text-sm"
                      >
                        <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="relative mx-auto w-full max-w-[210px]">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0, y: 24 }}
                      whileInView={{ scale: 1, opacity: 1, y: 0 }}
                      viewport={scrollViewport}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 14,
                        delay: 0.18 + i * 0.1,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 380, damping: 18 },
                      }}
                      className="cursor-default rounded-xl bg-gradient-to-b from-[#dce6f8] to-[#c5d3ef] px-5 py-3 text-center shadow-[0_10px_28px_-12px_rgba(26,26,92,0.45)] ring-1 ring-[#1a1a5c]/10 will-change-transform hover:shadow-[0_18px_36px_-10px_rgba(26,26,92,0.5),0_0_0_1px_rgba(232,145,114,0.35)]"
                    >
                      <p className="text-sm font-bold tracking-wide text-[#1a1a5c]">
                        {stage.stage}
                      </p>
                    </motion.div>

                    {i < 3 ? (
                      <LadderConnector riseClass={LADDER_RISE[i]} />
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
