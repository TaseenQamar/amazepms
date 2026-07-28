"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SKILL_DEVELOPMENT } from "@/lib/content";
import { scrollViewport } from "@/lib/animations";

const FLY_FROM = [
  { x: -120, y: 80, rotate: -12 },
  { x: 40, y: -100, rotate: 8 },
  { x: -40, y: 110, rotate: -6 },
  { x: 120, y: 70, rotate: 14 },
] as const;

export default function SkillDevelopment() {
  return (
    <section className="relative overflow-x-clip bg-white/45 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -60, scale: 0.7, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Skill Development
        </motion.h2>

        <div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1200 }}
        >
          {SKILL_DEVELOPMENT.map((card, i) => {
            const fly = FLY_FROM[i % FLY_FROM.length];
            return (
              <motion.article
                key={card.title}
                initial={{
                  opacity: 0,
                  x: fly.x,
                  y: fly.y,
                  rotate: fly.rotate,
                  scale: 0.55,
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
                  stiffness: 170,
                  damping: 15,
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  transition: { type: "spring", stiffness: 380, damping: 18 },
                }}
                className="group soft-card flex h-full cursor-default flex-col rounded-[1.25rem] p-5 will-change-transform hover:shadow-[0_24px_48px_-18px_rgba(26,26,92,0.4),0_0_0_1px_rgba(232,145,114,0.25)]"
              >
                <h3 className="relative inline-block text-lg font-bold text-ink">
                  {card.title}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#e89172] transition-all duration-500 group-hover:w-full" />
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {card.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={scrollViewport}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                        delay: 0.2 + i * 0.08 + j * 0.04,
                      }}
                      whileHover={{
                        x: 4,
                        transition: { type: "spring", stiffness: 400, damping: 22 },
                      }}
                      className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft transition-colors hover:text-ink"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
