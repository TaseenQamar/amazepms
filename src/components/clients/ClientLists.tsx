"use client";

import { motion } from "framer-motion";
import { CLIENT_CATEGORIES } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function ClientLists() {
  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-lavender/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.65, ease: easeExpo }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Trusted Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Brands & campuses we{" "}
            <span className="text-gradient">proudly serve</span>
          </h2>
        </motion.div>

        {/* Clean directory columns — no cards */}
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_CATEGORIES.map((category, cIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{
                duration: 0.55,
                delay: (cIdx % 3) * 0.08,
                ease: easeExpo,
              }}
              className="group/cat"
            >
              <h3 className="text-lg font-bold tracking-tight text-navy transition-colors group-hover/cat:text-[#1a1a5c]">
                {category.title}
              </h3>
              <div className="mt-2 mb-5 h-[3px] w-12 origin-left rounded-full bg-gradient-to-r from-[#e89172] to-cyan transition-all duration-500 group-hover/cat:w-20" />

              <ol className="space-y-2.5">
                {category.clients.map((client, i) => (
                  <motion.li
                    key={client + i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={scrollViewport}
                    transition={{
                      delay: Math.min(i * 0.015, 0.2),
                      duration: 0.3,
                      ease: easeExpo,
                    }}
                    whileHover={{
                      x: 6,
                      transition: { type: "spring", stiffness: 400, damping: 22 },
                    }}
                    className="group flex cursor-default gap-2.5 rounded-lg px-1.5 py-0.5 text-[15px] leading-snug text-ink-soft transition-colors hover:bg-[#1a1a5c]/[0.04]"
                  >
                    <span className="w-5 shrink-0 text-[13px] font-bold tabular-nums text-cyan/90 transition-colors group-hover:text-[#e89172]">
                      {i + 1}.
                    </span>
                    <span className="transition-colors group-hover:text-navy">
                      {client}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
