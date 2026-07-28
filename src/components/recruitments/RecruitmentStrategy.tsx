"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { MANPOWER_SOURCES } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function RecruitmentStrategy() {
  const mid = Math.ceil(MANPOWER_SOURCES.length / 2);
  const left = MANPOWER_SOURCES.slice(0, mid);
  const right = MANPOWER_SOURCES.slice(mid);

  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={scrollViewport}
          transition={{ duration: 0.5, ease: easeExpo }}
          className="mx-auto mb-2 h-0.5 w-10 origin-center bg-cyan"
        />
        <motion.p
          initial={{ opacity: 0, y: -30, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan"
        >
          Recruitment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -70, scale: 0.75, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 150, damping: 14, delay: 0.06 }}
          className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Recruitment Strategy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.82, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.1 }}
          whileHover={{
            y: -4,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="soft-card mt-10 rounded-[1.5rem] p-8 text-left will-change-transform hover:shadow-[0_28px_56px_-22px_rgba(26,26,92,0.4),0_0_0_1px_rgba(232,145,114,0.2)] sm:p-10"
          style={{ transformPerspective: 1000 }}
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollViewport}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 16 }}
            className="text-center text-xl font-bold text-ink"
          >
            Man Power Sourcing
          </motion.h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-x-10">
            {[left, right].map((col, colIdx) => (
              <ul key={colIdx} className="space-y-3.5">
                {col.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: colIdx === 0 ? -90 : 90,
                      y: 20,
                      rotate: colIdx === 0 ? -8 : 8,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                    viewport={scrollViewport}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                      delay: 0.18 + (colIdx * mid + i) * 0.06,
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.01,
                      transition: { type: "spring", stiffness: 400, damping: 22 },
                    }}
                    className="group flex cursor-default items-start gap-2.5 rounded-xl border border-transparent px-2 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-[#1a1a5c]/10 hover:bg-[#1a1a5c]/[0.04] hover:text-ink"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 160, damping: 15, delay: 0.12 }}
          whileHover={{
            y: -4,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="mt-12 cursor-default rounded-2xl border border-transparent px-4 py-6 transition-colors hover:border-[#1a1a5c]/8 hover:bg-[#1a1a5c]/[0.03]"
        >
          <h3 className="text-xl font-bold text-ink">Background Verification</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Antecedent verification will be carried out by our in-house
            background check team under the supervision of a retired police
            officer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
