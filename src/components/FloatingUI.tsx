"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

export default function FloatingUI() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col overflow-hidden rounded-r-2xl border border-white/80 border-l-0 bg-white/80 shadow-lg backdrop-blur-xl md:flex">
        {[
          { Icon: FacebookIcon, label: "Facebook" },
          { Icon: InstagramIcon, label: "Instagram" },
          { Icon: LinkedinIcon, label: "LinkedIn" },
        ].map(({ Icon, label }) => (
          <motion.a
            key={label}
            href="#"
            aria-label={label}
            whileHover={{
              scale: 1.12,
              x: 2,
              transition: { type: "spring", stiffness: 420, damping: 18 },
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-11 w-11 items-center justify-center text-ink-soft/50 transition-colors duration-300 hover:bg-[#1a1a5c] hover:text-white"
          >
            <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </motion.a>
        ))}
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            whileHover={{
              scale: 1.12,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 16 },
            }}
            whileTap={{ scale: 0.94 }}
            onClick={() => {
              if (window.__lenis) {
                window.__lenis.scrollTo(0, { duration: 1.1 });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#e89172] text-white shadow-[0_8px_30px_-8px_rgba(232,145,114,0.75)] will-change-transform hover:shadow-[0_12px_36px_-8px_rgba(26,26,92,0.45)]"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
