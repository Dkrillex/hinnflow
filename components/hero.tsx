"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

/**
 * 参考 mlaanimate 的 bloub 小脸：白色圆盘，mask 挖出两只眼睛。
 * 外层 g 由 JS 写入 transform 让眼睛跟随鼠标（最大偏移 6 个视区单位），
 * 内层 g 挂 CSS 眨眼动画，两者互不覆盖。
 */
function BloubMark() {
  const svgRef = useRef<SVGSVGElement>(null);
  const eyesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const svg = svgRef.current;
        const eyes = eyesRef.current;
        if (!svg || !eyes) return;
        const r = svg.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const len = Math.hypot(dx, dy);
        const k = Math.min(len / 120, 1) * 6;
        const x = len ? (dx / len) * k : 0;
        const y = len ? (dy / len) * k : 0;
        eyes.setAttribute(
          "transform",
          `translate(${x.toFixed(2)} ${y.toFixed(2)})`
        );
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg ref={svgRef} className="bloub-mark" viewBox="-50 -50 100 100" aria-hidden="true">
      <defs>
        <mask
          id="bloub-mask"
          maskUnits="userSpaceOnUse"
          x="-50"
          y="-50"
          width="100"
          height="100"
        >
          <circle cx="0" cy="0" r="46" fill="#fff" />
          <g ref={eyesRef}>
            <g className="bloub-eyes">
              <rect x="-21" y="-10" width="15" height="17" rx="7.5" fill="#000" />
              <rect x="6" y="-10" width="15" height="17" rx="7.5" fill="#000" />
            </g>
          </g>
        </mask>
      </defs>
      <rect
        x="-50"
        y="-50"
        width="100"
        height="100"
        fill="#fff"
        mask="url(#bloub-mask)"
      />
    </svg>
  );
}

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="glass-badge">
          <span className="badge-topline" aria-hidden="true" />
          <span className="badge-text">{t.hero.badge}</span>
        </div>

        {lang === "zh" ? (
          <h1 className="hero-title">
            让每一个 <span className="latin-accent">Token</span>
            <br />
            <span className="serif-accent">都流向创造</span>
          </h1>
        ) : (
          <h1 className="hero-title">
            Let Every Token
            <br />
            <span className="serif-accent">Flow to Creation</span>
          </h1>
        )}

        <p className="hero-sub">{t.hero.sub}</p>

        <div className="hero-actions">
          <a className="btn btn-white" href="#contact">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href="#products">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="orbit-badge" aria-hidden="true">
        <div className="orbit-ring" />
        <svg className="orbit-text" viewBox="0 0 100 100">
          <defs>
            <path
              id="orbitCircle"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text>
            <textPath href="#orbitCircle">
              HINNFLOW · TOKEN TO CREATION · HINNFLOW · LET IT FLOW ·
            </textPath>
          </text>
        </svg>
        <BloubMark />
      </div>

      <a className="scroll-hint" href="#stats" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
