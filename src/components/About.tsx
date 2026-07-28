"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { easeExpo, scrollViewport } from "@/lib/animations";

const HIGHLIGHTS = [
  "Strong 15000+ Work Force",
  "200+ Clients",
  "Presence PAN INDIA",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-x-clip bg-white/60"
    >
      {/* Soft dots grid — reference accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 opacity-40 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,92,0.35) 1.2px, transparent 1.3px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* ——— Left: content ——— */}
        <motion.div
          initial={{ opacity: 0, x: -70, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
        >
          <motion.p
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{ type: "spring", stiffness: 170, damping: 15 }}
            className="text-gradient mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            About Us
          </motion.p>
          {/* <motion.h2
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{ type: "spring", stiffness: 170, damping: 15 }}
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            Integrated facility management{" "}
            <span className="text-gradient">
              built for India&apos;s campuses.
            </span>
          </motion.h2> */}

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ delay: 0.08, duration: 0.6, ease: easeExpo }}
            className="mt-5 text-base leading-relaxed text-muted"
          >
            Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of
            ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani
            Abdul — a veteran from the Indian Navy, a Certified Security
            Practitioner, and a renowned name in the Service Industry. Amaze
            has its Head Quarters in Cyberabad, Telangana – INDIA, providing
            Property Management Solutions PAN INDIA, partnering with leading
            clientele with 15,000+ strong professionals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ delay: 0.14, duration: 0.6, ease: easeExpo }}
            className="mt-4 text-base leading-relaxed text-muted"
          >
            We specialize in offering comprehensive Integrated Property
            Management Services such as Housekeeping, MEP (Mechanical,
            Electrical, Plumbing), Security, Pest Control, Gardening, STP &amp;
            WTP, Parking, Swimming Pool Maintenance, office support services,
            deep cleaning services etc — all these services are in-house.
          </motion.p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -50, rotate: -4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 17,
                  delay: 0.18 + i * 0.08,
                }}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className={`group flex cursor-default items-center gap-2.5 rounded-xl border border-transparent px-2.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-cyan/25 hover:bg-cyan/5 hover:text-ink ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
              delay: 0.35,
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 18 },
            }}
            whileTap={{ scale: 0.97 }}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_-10px_rgba(232,145,114,0.55)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-10px_rgba(232,145,114,0.7)]"
          >
            Get Started With Us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.a>
        </motion.div>

        {/* ——— Right: crest + team collage ——— */}
        <div className="relative mx-auto w-full max-w-md pb-10 lg:max-w-none lg:pb-8">
          {/* Tall AG crest card */}
          <motion.div
            initial={{ opacity: 0, x: 130, y: -90, rotate: 16, scale: 0.55 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{
              type: "spring",
              stiffness: 75,
              damping: 13,
              mass: 0.9,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
              rotate: 1.5,
              transition: { type: "spring", stiffness: 280, damping: 18 },
            }}
            className="group relative ml-auto aspect-[3/4] w-[86%] cursor-default overflow-hidden rounded-[1.75rem] bg-[#2f6db5] shadow-[0_28px_60px_-20px_rgba(26,26,92,0.45)] ring-1 ring-white/60 will-change-transform hover:shadow-[0_36px_70px_-18px_rgba(26,26,92,0.55),0_0_0_1px_rgba(232,145,114,0.35)]"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-3 sm:inset-4"
            >
              <Image
                src="/about/action-group-crest.png"
                alt="Action Group ESTD 2001"
                fill
                className="object-contain object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="(max-width: 1024px) 80vw, 38vw"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Overlapping team photo */}
          <motion.div
            initial={{ opacity: 0, x: -130, y: 110, rotate: -12, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={scrollViewport}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 13,
              delay: 0.2,
              mass: 0.85,
            }}
            whileHover={{
              y: -8,
              scale: 1.04,
              rotate: -1.5,
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
            className="group absolute -bottom-1 left-0 z-10 w-[82%] cursor-default overflow-hidden rounded-[1.35rem] border-[6px] border-white shadow-[0_22px_48px_-16px_rgba(26,26,92,0.4)] will-change-transform hover:shadow-[0_28px_56px_-14px_rgba(26,26,92,0.5)] sm:-bottom-3 sm:w-[78%]"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="relative aspect-[16/10] w-full"
            >
              <Image
                src="/about/home-team.png"
                alt="Amaze PMS leadership and team"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                sizes="(max-width: 1024px) 80vw, 36vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
