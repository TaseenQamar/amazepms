export const easeExpo = [0.16, 1, 0.3, 1] as const;
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Replay on every enter (up & down scroll). */
export const scrollViewport = {
  once: false,
  amount: 0.28,
  margin: "-8% 0px -8% 0px",
} as const;
