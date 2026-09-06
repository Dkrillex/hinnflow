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
          <p>{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
