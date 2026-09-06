"use client";

import { useEffect, useRef, useState } from "react";

/** 进入视口后从 0 缓动计数到目标值 */
export default function Counter({
  target,
  decimals = 0,
}: {
  target: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started.current) return;
        started.current = true;
        io.disconnect();

        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduced) {
          setValue(target);
          return;
        }

        const dur = 1600;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
