"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [active, close, prev, next]);

  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-lavender/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.6, ease: easeExpo }}
          className="mx-auto mb-12 max-w-xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Moments on Site
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Our people. Our{" "}
            <span className="text-gradient">craft.</span>
          </h2>
        </motion.div>

        {/* VIP: staggered clip-reveal mosaic */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={scrollViewport}
              transition={{
                duration: 0.65,
                delay: (i % 4) * 0.1,
                ease: easeExpo,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 380, damping: 18 },
              }}
              className={`group relative overflow-hidden rounded-sm border-2 border-[#e89172]/80 bg-white shadow-[0_16px_40px_-20px_rgba(26,26,92,0.35)] will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan hover:shadow-[0_24px_48px_-16px_rgba(26,26,92,0.45),0_0_0_1px_rgba(232,145,114,0.4)] ${
                i === 0 || i === 3 || i === 6
                  ? "sm:col-span-1 lg:row-span-1"
                  : ""
              } ${i === 6 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i === 6 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-3 text-left text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-[#e89172]/80"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-[#1a1a5c]/80 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-[#1a1a5c]/80 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={GALLERY_IMAGES[active].src}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: easeExpo }}
              className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-lg border-2 border-[#e89172]/60 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-navy">
                <Image
                  src={GALLERY_IMAGES[active].src}
                  alt={GALLERY_IMAGES[active].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <p className="bg-navy/95 px-4 py-3 text-center text-sm font-medium text-white">
                {GALLERY_IMAGES[active].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
