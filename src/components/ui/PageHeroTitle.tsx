"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeExpo } from "@/lib/animations";

type Props = {
  title: string;
  /** Current page label in breadcrumb */
  crumb: string;
};

/**
 * Gallery-style page label: letter-by-letter cascade + per-letter peach hover.
 */
export default function PageHeroTitle({ title, crumb }: Props) {
  const chars = title.split("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: easeExpo }}
      className="relative mx-auto inline-block cursor-default"
    >
      {/* VIP: letter-by-letter cascade */}
      <h1 className="flex flex-wrap justify-center gap-[0.02em] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: 60, rotateX: -80, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: 0.12 + i * 0.055,
              ease: easeExpo,
            }}
            whileHover={{
              y: -6,
              color: "#e89172",
              scale: 1.08,
              transition: { type: "spring", stiffness: 420, damping: 16 },
            }}
            className="inline-block origin-bottom"
            style={{ perspective: 600 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35 + chars.length * 0.055,
          duration: 0.55,
          ease: easeExpo,
        }}
        className="mt-3 text-sm text-white/70"
      >
        <Link
          href="/"
          className="relative inline-block transition-colors hover:text-[#e89172] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#e89172] after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
        <span className="mx-2 text-white/40">&gt;</span>
        <span className="font-medium text-[#e89172]">{crumb}</span>
      </motion.p>
    </motion.div>
  );
}
