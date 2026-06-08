"use client";

import { useEffect, useRef } from "react";

export default function ScrollRevealWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Delay scroll reveal initialization to after page interactive
    const timeoutId = setTimeout(() => {
      const selectors = [
        ".reveal-up",
        ".reveal-down",
        ".reveal-left",
        ".reveal-right",
        ".reveal-scale",
      ];
      const targets = el.querySelectorAll(selectors.join(", "));

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observerRef.current?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      targets.forEach((t) => observerRef.current?.observe(t));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
