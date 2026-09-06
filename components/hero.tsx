"use client";

import { useLang } from "@/lib/i18n";

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
        <span className="orbit-dot" />
      </div>

      <a className="scroll-hint" href="#stats" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
