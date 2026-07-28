"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AUDIT_TYPES } from "@/lib/content";
import { scrollViewport } from "@/lib/animations";

const AUDIT_IMAGES = [
  {
    src: "/recruitments/audit-meeting-1.jpg",
    alt: "Audit review meeting — team analysing documents",
  },
  {
    src: "/recruitments/audit-meeting-2.jpg",
    alt: "Audit collaboration — data review around the table",
  },
] as const;

export default function AuditsSection() {
  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -70, scale: 0.7, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Audits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.12em" }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.08 }}
          className="mt-3 text-center text-xs font-semibold uppercase text-muted"
        >
          MMR | QBR | BI-ANNUAL | ANNUAL
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.88 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 140, damping: 15, delay: 0.1 }}
          className="soft-card mt-10 grid overflow-hidden rounded-[1.5rem] lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-8 sm:p-10">
            <ul className="space-y-3">
              {AUDIT_TYPES.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -80, rotate: -4 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={scrollViewport}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                    delay: Math.min(0.15 + i * 0.045, 0.55),
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400, damping: 22 },
                  }}
                  className="group flex cursor-default items-center gap-2.5 rounded-xl border border-transparent px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-[#1a1a5c]/12 hover:bg-[#1a1a5c]/[0.04] hover:text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 bg-gradient-to-br from-lavender/15 to-cyan/10 p-6 sm:p-8">
            {AUDIT_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{
                  opacity: 0,
                  x: 120,
                  y: i === 0 ? -40 : 40,
                  rotate: i === 0 ? 8 : -8,
                  scale: 0.75,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 14,
                  delay: 0.2 + i * 0.14,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 320, damping: 18 },
                }}
                className="group relative aspect-[16/10] cursor-default overflow-hidden rounded-2xl shadow-lg will-change-transform hover:shadow-[0_20px_40px_-14px_rgba(26,26,92,0.45),0_0_0_1px_rgba(232,145,114,0.3)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
