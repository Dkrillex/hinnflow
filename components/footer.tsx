"use client";

import { BrandMark } from "@/components/brand-mark";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t, lang, setLang } = useLang();

  const links = [
    { href: "#products", label: t.nav.products },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#why", label: t.nav.why },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <BrandMark />
            <span className="brand-name">
              希流 <i className="brand-latin">Hinnflow</i>
            </span>
          </a>
          <p className="footer-slogan">
            {t.footer.slogan}
            {lang === "zh" && (
              <>
                {" · "}
                <span className="latin-accent">{t.footer.sloganEn}</span>
              </>
            )}
          </p>
        </div>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              aria-label={t.nav.switch}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </nav>
        </div>

        <div className="footer-meta">
          <p>{t.footer.copyright}</p>
          <div className="footer-beian">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3.2"
                  y="2.8"
                  width="17.6"
                  height="18.4"
                  rx="2.4"
                  fill="#1d4ed8"
                />
                <path
                  d="M7.2 7.2h9.6M7.2 11h6.4M7.2 14.8h4.2"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="16.4" cy="16.2" r="3.1" fill="#f8d35a" />
                <path
                  d="M16.4 14.6 17 16h1.5l-1.2.9.5 1.4-1.3-.8-1.3.8.5-1.4-1.2-.9H15.8Z"
                  fill="#c2410c"
                />
              </svg>
              {t.footer.icp}
            </a>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=44010502001234"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2.2 4.4 5.4v6c0 5.1 3.5 8.9 7.6 10.6 4.1-1.7 7.6-5.5 7.6-10.6v-6L12 2.2Z"
                  fill="#e11d48"
                />
                <path
                  d="M12 3.6 5.8 6.2v5.2c0 4.4 2.9 7.6 6.2 9.1 3.3-1.5 6.2-4.7 6.2-9.1V6.2L12 3.6Z"
                  fill="#f8d35a"
                />
                <path
                  d="m12 6.2 1.05 2.2 2.4.28-1.8 1.64.5 2.34L12 11.4l-2.15 1.26.5-2.34-1.8-1.64 2.4-.28Z"
                  fill="#e11d48"
                />
                <path
                  d="M7.4 15.4c1.3 1.6 2.9 2.6 4.6 3 .1-1.5.1-3 0-4.4-1.7.2-3.3.7-4.6 1.4Zm9.2 0c-1.3 1.6-2.9 2.6-4.6 3-.1-1.5-.1-3 0-4.4 1.7.2 3.3.7 4.6 1.4Z"
                  fill="#b45309"
                  opacity=".7"
                />
              </svg>
              {t.footer.police}
            </a>
          </div>
          <p>{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
