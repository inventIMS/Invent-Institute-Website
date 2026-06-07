"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-reveal animations
 * Observes elements with reveal classes and adds 'visible' class when they enter viewport
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const selectors = [
      ".reveal-up",
      ".reveal-down",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
    ];
    const targets = el.querySelectorAll(selectors.join(", "));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
