"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { CONTACT_INFO, CONTACT_SERVICES } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function ContactDetails() {
  const mid = Math.ceil(CONTACT_SERVICES.length / 2);
  const colA = CONTACT_SERVICES.slice(0, mid);
  const colB = CONTACT_SERVICES.slice(mid);

  return (
    <section className="relative overflow-x-clip bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          {/* Logo — left side */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.65, ease: easeExpo }}
            className="flex shrink-0 justify-center lg:justify-start"
          >
            <div className="inline-flex overflow-hidden rounded-xl border border-ink/15 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-[0_12px_28px_-12px_rgba(26,26,92,0.3)]">
              <Image
                src="/logo-amazepms.png"
                alt="Amaze PMS"
                width={140}
                height={76}
                className="h-16 w-auto object-contain transition-transform duration-500 hover:scale-105 sm:h-[72px]"
              />
            </div>
          </motion.div>

          {/* Services — middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.65, delay: 0.05, ease: easeExpo }}
            className="min-w-0 flex-1"
          >
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Contact For Our Services
            </h2>

            <div className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[colA, colB].map((col, ci) => (
                <ul key={ci} className="space-y-2">
                  {col.map((service, i) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={scrollViewport}
                      transition={{
                        delay: (ci * mid + i) * 0.03,
                        duration: 0.35,
                        ease: easeExpo,
                      }}
                      whileHover={{
                        x: 6,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 22,
                        },
                      }}
                      className="group flex cursor-default items-start gap-2.5 rounded-lg px-1.5 py-0.5 text-[15px] text-ink-soft transition-colors hover:bg-[#1a1a5c]/[0.04] hover:text-ink"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#e89172]" />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              ))}
            </div>
          </motion.div>

          {/* Office — right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.65, delay: 0.1, ease: easeExpo }}
            className="w-full shrink-0 lg:w-[280px] xl:w-[300px]"
          >
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Our Office Address
            </h2>
            <div className="mt-2 h-1 w-14 origin-left rounded-full bg-cyan transition-all duration-500 hover:w-24 hover:bg-[#e89172]" />

            <h3 className="mt-5 text-lg font-bold text-navy">Stay Connected</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {CONTACT_INFO.address}
            </p>

            <div className="mt-5 space-y-3.5">
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                whileHover={{
                  x: 6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="group flex items-center gap-3 text-[15px] font-medium text-ink-soft transition-colors hover:text-navy"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[#e89172]/15 group-hover:text-[#e89172]">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT_INFO.phoneDisplay}
              </motion.a>
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                whileHover={{
                  x: 6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="group flex items-center gap-3 text-[15px] font-medium text-ink-soft transition-colors hover:text-navy"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[#e89172]/15 group-hover:text-[#e89172]">
                  <Mail className="h-4 w-4" />
                </span>
                {CONTACT_INFO.email}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
