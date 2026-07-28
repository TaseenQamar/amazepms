"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { easeExpo, scrollViewport } from "@/lib/animations";

const HIGHLIGHTS = [
  "Strong 15000+ Work Force",
  "200+ Clients",
  "Presence PAN INDIA",
];

export default function AboutIntro() {
  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-full bg-lavender/20 blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan"
          >
            About Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{ type: "spring", stiffness: 160, damping: 14 }}
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Amaze PMS{" "}
            <span className="text-gradient">Pvt Ltd</span>
          </motion.h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
            ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani
            Abdul — a veteran from the Indian Navy, a Certified Security
            Practitioner, and a renowned name in the Service Industry. Amaze
            has its Head Quarters in Cyberabad, Telangana – INDIA, providing
            Property Management Solutions PAN INDIA, partnering with leading
            clientele with 15,000+ strong professionals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We specialize in offering comprehensive Integrated Property
            Management Services such as Housekeeping, MEP (Mechanical,
            Electrical, Plumbing), Security, Pest Control, Gardening, STP &amp;
            WTP, Parking, Swimming Pool Maintenance, office support services,
            deep cleaning services etc — all these services are in-house.
          </p>

          <ul className="mt-7 space-y-3">
            {HIGHLIGHTS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                  delay: 0.1 + i * 0.08,
                }}
                whileHover={{
                  x: 10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="group flex cursor-default items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-cyan/25 hover:bg-cyan/5 hover:text-ink"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollViewport}
            transition={{ delay: 0.35, type: "spring", stiffness: 150, damping: 14 }}
            className="mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-cyan bg-white px-6 py-3 text-sm font-bold text-cyan shadow-[0_8px_24px_-10px_rgba(232,145,114,0.45)] transition-all duration-300 hover:bg-cyan hover:text-white hover:shadow-[0_14px_36px_-10px_rgba(232,145,114,0.65)]"
              >
                Get Started With Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-white transition-all duration-300 group-hover:bg-white group-hover:text-cyan group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md pb-8 lg:max-w-none lg:pb-6">
          <motion.div
            initial={{ opacity: 0, x: 120, y: -100, rotate: 18, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              mass: 0.9,
            }}
            whileHover={{
              y: -12,
              rotate: 2,
              scale: 1.03,
              boxShadow: "0 32px 60px -18px rgba(26,26,92,0.45)",
              transition: { type: "spring", stiffness: 280, damping: 18 },
            }}
            className="group relative ml-auto aspect-[3/4] w-[88%] cursor-pointer overflow-hidden rounded-[1.25rem] border border-white bg-[#2f6db5] shadow-[0_24px_50px_-20px_rgba(26,26,92,0.35)]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-3 sm:inset-4"
            >
              <Image
                src="/about/action-group-crest.png"
                alt="Action Group ESTD 2001"
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-white/10 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -140, y: 120, rotate: -14, scale: 0.55 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{
              type: "spring",
              stiffness: 75,
              damping: 13,
              delay: 0.22,
              mass: 0.85,
            }}
            whileHover={{
              y: -10,
              rotate: -2,
              scale: 1.04,
              boxShadow: "0 28px 55px -16px rgba(26,26,92,0.5)",
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
            className="group absolute -bottom-2 left-0 z-10 w-[78%] cursor-pointer overflow-hidden rounded-[1.15rem] border-[5px] border-white shadow-[0_20px_40px_-16px_rgba(26,26,92,0.4)] sm:-bottom-4"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative aspect-[16/10] w-full"
            >
              <Image
                src="/about/home-team.png"
                alt="Amaze PMS leadership and team"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 80vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
