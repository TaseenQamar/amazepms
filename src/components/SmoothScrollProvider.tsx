"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      // Snappier — less “stuck mid-ease” feel while animations replay
      duration: 0.85,
      lerp: 0.09,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 1,
      allowNestedScroll: true,
      overscroll: true,
      stopInertiaOnNavigate: true,
      prevent: (node) => {
        if (!(node instanceof HTMLElement)) return false;
        return Boolean(
          node.closest("[data-lenis-prevent]") ||
            node.closest("iframe") ||
            node.closest("[class*='Stripe']") ||
            node.closest("input, textarea, select, [contenteditable='true']")
        );
      },
    });

    window.__lenis = lenis;
    document.documentElement.classList.add("lenis");

    let settleTimer = 0;
    const onScroll = () => {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        lenis.resize();
      }, 180);
    };
    const unsubScroll = lenis.on("scroll", onScroll);

    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(settleTimer);
      unsubScroll();
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("lenis");
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
