"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { CAREER_OPENINGS, CAREERS_EMAIL } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

const mailto = (role: string) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application — ${role}`)}&body=${encodeURIComponent(
    `Hello Amaze PMS Team,\n\nI would like to apply for the position of ${role}.\n\nPlease find my CV attached.\n\nRegards,`
  )}`;

export default function CareersContent() {
  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-lavender/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.65, ease: easeExpo }}
          className="mb-10 text-center"
        >
          <motion.span
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.5, ease: easeExpo }}
            className="inline-flex rounded-full bg-navy px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
          >
            Careers
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Work With Us
          </h2>
          <p className="mt-2 text-base text-muted sm:text-lg">
            Take the next step in your career with Amaze
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-ink/20 bg-white shadow-[0_24px_60px_-28px_rgba(26,26,92,0.25)]">
          <div className="grid items-center lg:grid-cols-2">
            {/* Left — openings */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.7, ease: easeExpo }}
              className="p-6 sm:p-8 md:p-10"
            >
              <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
                We are hiring passionate professionals working in the field of
                property management services. Apply with your Curriculum Vitae
                to{" "}
                <a
                  href={`mailto:${CAREERS_EMAIL}`}
                  className="font-bold text-navy underline decoration-cyan/40 underline-offset-2 transition-colors hover:text-cyan"
                >
                  {CAREERS_EMAIL}
                </a>
              </p>

              <h3 className="mt-8 text-xl font-bold text-navy">
                Current Openings
              </h3>

              <ul className="mt-5">
                {CAREER_OPENINGS.map((role, i) => (
                  <motion.li
                    key={role}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={scrollViewport}
                    transition={{
                      delay: Math.min(i * 0.035, 0.35),
                      duration: 0.35,
                      ease: easeExpo,
                    }}
                    whileHover={{
                      x: 6,
                      transition: { type: "spring", stiffness: 400, damping: 22 },
                    }}
                    className="group flex items-center gap-3 border-b border-ink/10 py-3.5 last:border-b-0"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy/45 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#e89172]" />
                    <span className="flex-1 text-[15px] text-ink-soft transition-colors group-hover:text-navy">
                      {role}
                    </span>
                    <motion.a
                      href={mailto(role)}
                      whileHover={{
                        scale: 1.06,
                        transition: { type: "spring", stiffness: 400, damping: 18 },
                      }}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1a1a5c]/[0.04] px-3 py-1.5 text-sm font-semibold text-navy transition-colors hover:bg-[#e89172]/15 hover:text-[#1a1a5c]"
                    >
                      Apply
                      <Send className="h-3.5 w-3.5 text-[#e89172] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right — full hiring image, not cropped */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.75, delay: 0.08, ease: easeExpo }}
              className="flex items-center justify-center border-t border-ink/15 bg-white px-[15px] py-6 lg:sticky lg:top-28 lg:min-h-full lg:border-l lg:border-t-0 lg:py-8"
            >
              <div className="group relative aspect-[612/434] w-full overflow-hidden rounded-xl shadow-md transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_rgba(26,26,92,0.4),0_0_0_1px_rgba(232,145,114,0.25)]">
                <Image
                  src="/careers-hiring.png"
                  alt="Now hiring — career opportunities at Amaze PMS"
                  fill
                  priority
                  className="object-contain object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
