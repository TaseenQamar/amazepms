"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICE_PARTNERS } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

const BADGE_GRADIENTS = [
  "bg-gradient-to-r from-[#1a1a5c] via-[#2c2c8a] to-[#e89172]",
  "bg-gradient-to-r from-[#1a0a08] via-[#8b1a1a] to-[#e8454a]",
  "bg-gradient-to-r from-[#004a99] via-[#f58220] to-[#f5c542]",
] as const;

export default function ServicePartners() {
  return (
    <section className="relative overflow-x-clip py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={scrollViewport}
          transition={{ duration: 0.7, ease: easeExpo }}
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Our Service Partners
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICE_PARTNERS.map((partner, i) => (
            <motion.article
              key={partner.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: easeExpo,
              }}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 380, damping: 22 },
              }}
              className="group soft-card relative cursor-default overflow-hidden rounded-[1.25rem] will-change-transform hover:shadow-[0_24px_48px_-16px_rgba(26,26,92,0.35),0_0_0_1px_rgba(232,145,114,0.35)]"
            >
              {/* Soft peach glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(232,145,114,0.12) 0%, transparent 55%)",
                }}
              />

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ececec]">
                <Image
                  src={partner.logo}
                  alt={partner.brand}
                  fill
                  className={`${
                    i === 0
                      ? "object-contain object-center p-5"
                      : "object-cover object-center"
                  } transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                  unoptimized
                />

                {/* Darken edge slightly on hover for depth */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span
                  className={`absolute left-3 top-3 z-10 rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-lg ${BADGE_GRADIENTS[i]}`}
                >
                  {partner.badge}
                </span>
              </div>

              <div className="relative z-10 border-t border-ink/5 bg-white p-5 transition-colors duration-400 group-hover:bg-[#faf9fc]">
                <h3 className="text-base font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-[#1a1a5c]">
                  {partner.title}
                </h3>
                {/* Accent underline grows on hover */}
                <span
                  aria-hidden
                  className="mt-2 block h-0.5 w-0 rounded-full bg-gradient-to-r from-[#1a1a5c] to-[#e89172] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16"
                />
                <p className="mt-2 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-ink/70">
                  {partner.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
