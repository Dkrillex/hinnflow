"use client";

import { useLang } from "@/lib/i18n";
import Counter from "@/components/counter";
import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";

/* ======================= 数据指标 ======================= */

export function Stats() {
  const { t } = useLang();
  return (
    <section className="section stats" id="stats">
      <div className="container">
        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat-card glass">
              <div className="stat-num">
                <Counter target={s.target} />
                <span className="stat-unit">{s.unit}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= 三大业务支柱 ======================= */

const PILLAR_ICONS = [
  <svg key="a" viewBox="0 0 24 24" fill="none">
    <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 4.5 13.8 10 19.5 12l-5.7 2L12 19.5 10.2 14 4.5 12l5.7-2L12 4.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="m18.5 4.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"
      fill="currentColor"
      opacity=".6"
    />
  </svg>,
];

/* 各支柱对应的独立业务站点；无独立站点的回落到联系我们 */
const PILLAR_LINKS: (string | null)[] = [
  null, // 大模型研究：暂无独立站点
  "https://token.hinnflow.com", // AI Token
  "https://canvas.hinnflow.com", // AIGC 平台
];

export function Products() {
  const { t } = useLang();
  return (
    <section className="section" id="products">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">{t.pillars.eyebrow}</span>
          <h2 className="section-title">
            {t.pillars.titleA}
            <span className="serif-accent">{t.pillars.titleSerif}</span>
            {t.pillars.titleB}
          </h2>
          <p className="section-desc">{t.pillars.desc}</p>
        </Reveal>

        <div className="product-grid">
          {t.pillars.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="product-card glass">
              <div className="product-icon" aria-hidden="true">
                {PILLAR_ICONS[i]}
              </div>
              <div className="pillar-num">{p.num}</div>
              <h3>
                {p.name}
                <em>{p.en}</em>
              </h3>
              <p>{p.desc}</p>
              <ul className="product-feats">
                {p.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className="link-more"
                href={PILLAR_LINKS[i] ?? "#contact"}
                {...(PILLAR_LINKS[i]
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {t.pillars.more}
                {p.name} <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================= 价值链路 ======================= */

export function Solutions() {
  const { t } = useLang();
  return (
    <section className="section" id="solutions">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">{t.chain.eyebrow}</span>
          <h2 className="section-title">
            {t.chain.titleA}
            <span className="serif-accent">{t.chain.titleSerif}</span>
          </h2>
          <p className="section-desc">{t.chain.desc}</p>
        </Reveal>

        <div className="chain-grid">
          {t.chain.nodes.map((n, i) => (
            <div key={n.name} style={{ display: "contents" }}>
              {i > 0 && (
                <div className="chain-arrow" aria-hidden="true">
                  →
                </div>
              )}
              <Reveal
                delay={i * 0.08}
                className={`chain-card glass${"final" in n && n.final ? " final" : ""}`}
              >
                <h3>{n.name}</h3>
                <p>{n.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="chain-tag">{t.chain.tag}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================= 为什么选择希流 ======================= */

const WHY_ICONS = [
  <svg key="a" viewBox="0 0 24 24" fill="none">
    <path
      d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 17 12 21.5l8.5-4.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      opacity=".55"
    />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 8.5c2.6-4.4 5.2 4.4 7.8 0s5.2 4.4 7.8 0M3 15.5c2.6-4.4 5.2 4.4 7.8 0s5.2 4.4 7.8 0"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3 4.5 6v5.2c0 4.6 3.2 8 7.5 9.8 4.3-1.8 7.5-5.2 7.5-9.8V6L12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="m9 11.6 2.2 2.2L15.4 9.6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="d" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M3 12h18M12 3c2.8 2.6 4.2 5.6 4.2 9S14.8 18.4 12 21c-2.8-2.6-4.2-5.6-4.2-9S9.2 5.6 12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>,
];

export function Why() {
  const { t } = useLang();
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="why-layout">
          <div className="why-left">
            <Reveal className="section-head">
              <span className="section-eyebrow">{t.why.eyebrow}</span>
              <h2 className="section-title">
                {t.why.titleA}
                <span className="serif-accent">{t.why.titleSerif}</span>
              </h2>
              <p className="section-desc">{t.why.desc}</p>
            </Reveal>

            <div className="why-features">
              {t.why.items.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08} className="why-item">
                  <div className="why-icon" aria-hidden="true">
                    {WHY_ICONS[i]}
                  </div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="why-quote glass">
            <span className="quote-mark serif-accent" aria-hidden="true">
              “
            </span>
            <p>
              {t.why.quoteA}
              <br />
              {t.why.quoteB}
            </p>
            <footer>{t.why.quoteBy}</footer>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================= 关于我们 ======================= */

export function About() {
  const { t } = useLang();
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">
            {t.about.titleA}
            <span className="serif-accent">{t.about.titleSerif}</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">{t.about.text1}</Reveal>
          <Reveal delay={0.1} className="about-text">
            {t.about.text2Pre}
            <strong>{t.about.text2Strong}</strong>
          </Reveal>
          <Reveal delay={0.2} className="about-facts">
            {t.about.facts.map((fact) => (
              <div key={fact.label} className="fact-card glass">
                <div className="fact-label">{fact.label}</div>
                <div className="fact-value">{fact.value}</div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="about-values">
            {t.about.chips.map((c) => (
              <div key={c} className="value-chip glass">
                {c}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================= 联系我们 ======================= */

export function Contact() {
  const { t } = useLang();
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-layout">
          <Reveal className="contact-intro">
            <span className="section-eyebrow">{t.contact.eyebrow}</span>
            <h2 className="section-title">
              {t.contact.titleA}
              <br />
              <span className="serif-accent">{t.contact.titleSerif}</span>
              {t.contact.titleB}
            </h2>
            <p className="section-desc">{t.contact.desc}</p>
            <ul className="contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 6h16v12H4V6Zm0 1 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
                {t.contact.email}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 4h4l1.5 4L8 10a12 12 0 0 0 6 6l2-2.5 4 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
                {t.contact.phone}
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                {t.contact.addr}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
