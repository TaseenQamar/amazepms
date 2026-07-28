"use client";

import { motion } from "framer-motion";
import { CLIENT_DISTRIBUTION } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} L ${cx} ${cy} Z`;
}

export default function ClientDistribution() {
  let angle = 0;
  const slices = CLIENT_DISTRIBUTION.map((item) => {
    const start = angle;
    const sweep = (item.value / 100) * 360;
    angle += sweep;
    return { ...item, start, end: start + sweep };
  });

  return (
    <section className="relative overflow-x-clip bg-white/50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={scrollViewport}
          transition={{ duration: 0.7, ease: easeExpo }}
          className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          Action Group{" "}
          <span className="text-gradient">Portfolio Mix</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ delay: 0.1, duration: 0.5, ease: easeExpo }}
          className="mt-3 text-center text-sm text-muted"
        >
          Distribution of clients across sectors
        </motion.p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* VIP: pie draw animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.9, ease: easeExpo }}
            whileHover={{
              scale: 1.04,
              transition: { type: "spring", stiffness: 280, damping: 18 },
            }}
            className="mx-auto cursor-default will-change-transform"
          >
            <svg viewBox="0 0 220 220" className="h-64 w-64 drop-shadow-[0_16px_32px_-12px_rgba(26,26,92,0.35)] sm:h-72 sm:w-72">
              {slices.map((slice, i) => (
                <motion.path
                  key={slice.label}
                  d={describeArc(110, 110, 95, slice.start, slice.end)}
                  fill={slice.color}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={scrollViewport}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.5,
                    ease: easeExpo,
                  }}
                  whileHover={{
                    scale: 1.06,
                    transition: { type: "spring", stiffness: 360, damping: 16 },
                  }}
                  style={{ transformOrigin: "110px 110px" }}
                  className="cursor-pointer drop-shadow-sm"
                />
              ))}
              <circle cx="110" cy="110" r="48" fill="white" />
              <text
                x="110"
                y="106"
                textAnchor="middle"
                className="fill-ink text-[11px] font-bold"
              >
                ACTION
              </text>
              <text
                x="110"
                y="122"
                textAnchor="middle"
                className="fill-muted text-[10px] font-semibold"
              >
                GROUP
              </text>
            </svg>
          </motion.div>

          <ul className="space-y-3">
            {CLIENT_DISTRIBUTION.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={scrollViewport}
                transition={{
                  delay: 0.1 + i * 0.06,
                  duration: 0.45,
                  ease: easeExpo,
                }}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 22 },
                }}
                className="group flex cursor-default items-center gap-3 rounded-xl border border-transparent bg-white/70 px-4 py-3 shadow-sm transition-all hover:border-[#1a1a5c]/10 hover:bg-white hover:shadow-[0_12px_28px_-14px_rgba(26,26,92,0.3)]"
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: item.color }}
                />
                <span className="flex-1 text-sm font-medium text-ink-soft transition-colors group-hover:text-ink">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-ink">{item.value}%</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
