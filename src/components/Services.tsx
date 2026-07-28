"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* VIP: title — scale from tiny */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.75, ease: easeExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Our Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            One partner.{" "}
            <span className="text-gradient">Every facility need covered.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Premium in-house service lines designed for campuses, commercial
            towers, clinics and industrial estates across South &amp; East India.
          </p>
        </motion.div>

        {/* VIP ANIMATION: 3D fan / card deck unfold */}
        <div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {SERVICES.map((service, i) => {
            const col = i % 3;
            const rotateY = col === 0 ? 18 : col === 2 ? -18 : 0;
            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  rotateY,
                  rotateX: 25,
                  y: 60,
                  scale: 0.88,
                }}
                whileInView={{
                  opacity: 1,
                  rotateY: 0,
                  rotateX: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={scrollViewport}
                transition={{
                  duration: 0.75,
                  delay: col * 0.12,
                  ease: easeExpo,
                }}
                whileHover={{
                  y: -10,
                  rotateY: col === 0 ? -4 : col === 2 ? 4 : 0,
                  transition: { duration: 0.3 },
                }}
                className="group soft-card relative overflow-hidden rounded-[1.5rem] will-change-transform [transform-style:preserve-3d]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.3 }}
                    whileInView={{ scale: 1 }}
                    viewport={scrollViewport}
                    transition={{ duration: 1, delay: 0.1 + col * 0.08, ease: easeExpo }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                </div>

                <div className="relative px-5 py-5">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-ink">
                      {service.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan transition-all duration-300 group-hover:rotate-45 group-hover:bg-cyan group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
