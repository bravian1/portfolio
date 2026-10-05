"use client";

import React, { useEffect, useRef } from "react";
import { splitText, type SplitLevel, type MaskReach, type TextSplit } from "kugiri";

export interface SplitRevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  type?: SplitLevel[];
  mask?: SplitLevel | SplitLevel[] | MaskReach | boolean;
  maskReach?: string;
  duration?: number;
  stagger?: number;
  delay?: number;
  inView?: boolean;
  ignore?: string;
  children: React.ReactNode;
}

/**
 * SplitReveal: Editorial typography line/word reveal using `kugiri`.
 * Splits text exactly along browser-painted lines and reveals them out of masks
 * while respecting prefers-reduced-motion and responsive resize.
 */
export function SplitReveal({
  as: Component = "div",
  type = ["lines"],
  mask = true,
  maskReach = ".25em",
  duration = 650,
  stagger = 65,
  delay = 0,
  inView = true,
  ignore = "[data-no-split]",
  className,
  children,
  ...props
}: SplitRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Accessibility: instant display if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let isMounted = true;
    let splitInstance: TextSplit | null = null;
    let resizeTimer: ReturnType<typeof setTimeout>;
    let lastWidth = el.clientWidth;
    let hasAnimated = false;

    // Resolve mask options for kugiri
    let maskOption: SplitLevel | SplitLevel[] | MaskReach | undefined = undefined;
    if (mask === true) {
      maskOption = { lines: maskReach };
    } else if (typeof mask === "string" || Array.isArray(mask) || typeof mask === "object") {
      maskOption = mask;
    }

    const runSplitAndAnimate = async () => {
      if (hasAnimated) return;
      hasAnimated = true;

      // Ensure custom web fonts are loaded so line boxes are exact
      if (typeof document !== "undefined" && document.fonts) {
        try {
          await document.fonts.ready;
        } catch {
          // ignore font loading error
        }
      }

      if (!isMounted || !el) return;

      try {
        splitInstance = splitText(el, {
          type,
          mask: maskOption,
          ignore,
        });

        const units = type.includes("chars")
          ? splitInstance.chars
          : type.includes("words")
          ? splitInstance.words
          : splitInstance.lines;

        if (units.length === 0) return;

        const animations = units.map((unit, index) =>
          unit.animate(
            [
              { transform: "translateY(110%)", opacity: 0 },
              { transform: "translateY(0%)", opacity: 1 },
            ],
            {
              duration,
              delay: delay + index * stagger,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "backwards",
            }
          )
        );

        // After animations complete, remove clip-path so descenders/accents stay unclipped
        await Promise.all(animations.map((a) => a.finished.catch(() => {})));
        if (!isMounted || !splitInstance) return;

        for (const m of splitInstance.masks) {
          m.style.clipPath = "none";
        }
      } catch (err) {
        console.error("kugiri split error:", err);
      }
    };

    let observer: IntersectionObserver | null = null;

    if (inView && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            observer?.disconnect();
            runSplitAndAnimate();
          }
        },
        { rootMargin: "-20px", threshold: 0.05 }
      );
      observer.observe(el);
    } else {
      runSplitAndAnimate();
    }

    // Responsive: re-split when width changes without replaying animations
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (!el || el.clientWidth === lastWidth) return;
        lastWidth = el.clientWidth;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (!isMounted || !splitInstance) return;
          splitInstance.revert();
          splitInstance = splitText(el, {
            type,
            mask: maskOption,
            ignore,
          });
          for (const m of splitInstance.masks) {
            m.style.clipPath = "none";
          }
        }, 150);
      });
      resizeObserver.observe(el);
    }

    return () => {
      isMounted = false;
      observer?.disconnect();
      resizeObserver?.disconnect();
      clearTimeout(resizeTimer);
      splitInstance?.revert();
    };
  }, [type, mask, maskReach, duration, stagger, delay, inView, ignore]);

  return (
    <Component
      ref={containerRef}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
