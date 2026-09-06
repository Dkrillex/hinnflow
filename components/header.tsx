"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { useLang, type Lang } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#products", label: t.nav.products },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#why", label: t.nav.why },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLang = () => setLang((lang === "zh" ? "en" : "zh") as Lang);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="希流 Hinnflow 首页">
            <BrandMark />
            <span className="brand-name">
              希流 <i className="brand-latin">Hinnflow</i>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label={t.nav.switch}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <a className="btn btn-white btn-sm" href="#contact">
              {t.nav.cta}
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17 17 7M17 7H7M17 7v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              className="nav-toggle"
              aria-label={t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
