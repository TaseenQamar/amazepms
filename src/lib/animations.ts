export const easeExpo = [0.16, 1, 0.3, 1] as const;
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Replay on every enter (up & down scroll). Tuned to avoid enter/leave thrash. */
export const scrollViewport = {
  once: false,
  amount: 0.28,
  margin: "-8% 0px -8% 0px",
} as const;

/** Heavy one-shot entrances (crash-in grids, etc.) */
export const scrollViewportOnce = {
  once: true,
  amount: 0.15,
  margin: "0px",
} as const;

export const scrollTransition = {
  duration: 0.55,
  ease: easeExpo,
} as const;

/* ---------- Shared basics ---------- */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.05, ease: easeExpo },
  }),
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const fadeInItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeExpo },
  },
};

export const fadeInLeftItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeExpo },
  },
};

export const fadeInRightItem = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeExpo },
  },
};

/* Aliases for Reveal components */
export const clipUp = fadeUp;
export const clipCenter = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeExpo },
  },
};
export const popIn = {
  hidden: { opacity: 0, scale: 0.82, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
};
export const tiltIn = {
  hidden: { opacity: 0, rotateX: 12, y: 24 },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.65, ease: easeExpo },
  },
};
export const zoomBlur = {
  hidden: { opacity: 0, scale: 1.06 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeExpo },
  },
};
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeExpo },
  },
};
export const fadeLeft = clipUp;
export const fadeRight = clipCenter;
