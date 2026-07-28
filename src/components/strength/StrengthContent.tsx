"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartHandshake,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { STRENGTH_POINTS } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

const HIGHLIGHTS = [
  { icon: Zap, label: "20M+ Sq.Ft Managed" },
  { icon: Shield, label: "100% In-house Services" },
  { icon: Sparkles, label: "Site-specific SOPs" },
  { icon: HeartHandshake, label: "Staff Welfare First" },
];

export default function StrengthContent() {
  const mid = Math.ceil(STRENGTH_POINTS.length / 2);
  const left = STRENGTH_POINTS.slice(0, mid);
  const right = STRENGTH_POINTS.slice(mid);

  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-lavender/25 blur-[110px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.5, ease: easeExpo }}
            className="mx-auto mb-3 h-0.5 w-12 origin-center bg-gradient-to-r from-cyan to-amber"
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.45em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
            viewport={scrollViewport}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="text-xs font-semibold uppercase text-cyan"
          >
            Strength
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.7, ease: easeExpo }}
            className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Our <span className="text-gradient">Strength</span>
          </motion.h2>
        </div>

        {/* VIP: highlight pills — orbit spring */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.6, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 14,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { type: "spring", stiffness: 380, damping: 18 },
              }}
              className="group soft-card flex cursor-default flex-col items-center gap-2 rounded-2xl px-3 py-5 text-center will-change-transform hover:shadow-[0_20px_40px_-16px_rgba(26,26,92,0.4),0_0_0_1px_rgba(232,145,114,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[#1a1a5c]/10 group-hover:text-[#1a1a5c]">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-ink sm:text-sm">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* VIP: glass panel with staggered checklist reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={scrollViewport}
          transition={{ duration: 0.8, ease: easeExpo }}
          className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_30px_80px_-30px_rgba(26,26,92,0.35)] backdrop-blur-md sm:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-cyan to-amber" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lavender/20 blur-3xl" />

          <div className="relative grid gap-x-10 gap-y-4 md:grid-cols-2">
            {[left, right].map((col, colIdx) => (
              <ul key={colIdx} className="space-y-4">
                {col.map((item, i) => {
                  const isWelfare = item.startsWith("STAFF WELFARE");
                  return (
                    <motion.li
                      key={item}
                      initial={{
                        opacity: 0,
                        x: colIdx === 0 ? -30 : 30,
                        scale: 0.97,
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={scrollViewport}
                      transition={{
                        delay: 0.08 + (colIdx * mid + i) * 0.05,
                        duration: 0.5,
                        ease: easeExpo,
                      }}
                      whileHover={{
                        x: colIdx === 0 ? 8 : -8,
                        scale: 1.01,
                        transition: { type: "spring", stiffness: 400, damping: 22 },
                      }}
                      className={`group flex cursor-default items-start gap-3 rounded-xl px-2 py-1.5 transition-colors ${
                        isWelfare
                          ? "bg-gradient-to-r from-amber/10 to-cyan/10 ring-1 ring-cyan/15"
                          : "hover:bg-[#1a1a5c]/[0.04]"
                      }`}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          isWelfare
                            ? "font-semibold text-ink"
                            : "font-medium text-ink-soft"
                        }`}
                      >
                        {item}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
