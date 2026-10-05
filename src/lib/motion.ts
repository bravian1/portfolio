import type { Transition } from "framer-motion";

/**
 * Motion Tokens adhering to the Motion Guide specification:
 * - EASE_OUT: entrances and exits that respond immediately, then settle quietly.
 * - EASE_IN_OUT: objects already on screen moving between positions.
 * - SPRING_PRESS: fast, weighted feedback for pressable surfaces (100–160ms feel).
 * - SPRING_LAYOUT: shared surfaces and indicators that preserve spatial continuity.
 */

export const EASE_OUT: Transition = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
};

export const EASE_IN_OUT: Transition = {
  duration: 0.28,
  ease: [0.4, 0, 0.2, 1],
};

export const SPRING_PRESS: Transition = {
  type: "spring",
  stiffness: 600,
  damping: 35,
  mass: 0.5,
};

export const SPRING_LAYOUT: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
  mass: 0.8,
};

export const TAP_SCALE = { scale: 0.97 };
