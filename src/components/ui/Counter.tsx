"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
    margin: "0px 0px -10% 0px",
  });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 90,
  });

  useEffect(() => {
    motionValue.set(isInView ? value : 0);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Math.floor(latest).toLocaleString("en-IN") + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
