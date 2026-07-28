"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SEGMENTS } from "@/lib/content";
import { scrollViewport } from "@/lib/animations";

export default function Segments() {
  const mid = Math.ceil(SEGMENTS.length / 2);
  const left = SEGMENTS.slice(0, mid);
  const right = SEGMENTS.slice(mid);

  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={scrollViewport}
          transition={{ type: "spring", stiffness: 130, damping: 16 }}
          whileHover={{
            boxShadow: "0 30px 60px -24px rgba(26,26,92,0.28)",
            transition: { duration: 0.3 },
          }}
          className="soft-card grid items-center gap-8 overflow-hidden rounded-[1.5rem] p-8 sm:p-10 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={scrollViewport}
              transition={{ type: "spring", stiffness: 160, damping: 15 }}
              className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Segments We{" "}
              <span className="text-gradient">Cater To</span>
            </motion.h2>

            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[left, right].map((col, colIdx) => (
                <ul key={colIdx} className="space-y-2.5">
                  {col.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{
                        opacity: 0,
                        x: colIdx === 0 ? -50 : 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={scrollViewport}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                        delay: (colIdx * mid + i) * 0.04,
                      }}
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        },
                      }}
                      className="group flex cursor-default items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-cyan/5 hover:text-ink"
                    >
                      <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 140,
              y: -60,
              rotate: 16,
              scale: 0.4,
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
              stiffness: 70,
              damping: 12,
              delay: 0.12,
            }}
            whileHover={{
              scale: 1.08,
              rotate: -3,
              transition: { type: "spring", stiffness: 260, damping: 16 },
            }}
            className="group mx-auto flex w-full max-w-[240px] cursor-pointer items-center justify-center bg-white px-[15px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square w-full"
            >
              <Image
                src="/about/segments.png"
                alt="Segments we cater to"
                fill
                className="object-contain object-center drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                sizes="240px"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
