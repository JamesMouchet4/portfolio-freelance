"use client";

import { usePathname } from "next/navigation";
import { type Locale, t } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const tr = t[locale];
  const pathname = usePathname();

  // Change uniquement la langue dans l’URL en gardant le reste
  const switchLocale = (target: Locale) => {
    if (!pathname) return `/${target}`;

    const segments = pathname.split("/").filter(Boolean);

    // Remplace le premier segment (lang)
    segments[0] = target;

    return "/" + segments.join("/");
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(10,15,25,.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          gap: 12,
        }}
      >
        {/* Logo / Nom */}
        <a
          href={`/${locale}`}
          style={{
            fontWeight: 900,
            fontSize: "1.05rem",
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
              boxShadow: "0 0 6px rgba(110,231,255,.8)",
            }}
          />
          James Mouchet
        </a>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a href={`/${locale}#services`}>{tr.nav.services}</a>
          <a href={`/${locale}#competences`}>{tr.nav.skills}</a>
          <a href={`/${locale}#process`}>{tr.nav.process}</a>
          <a href={`/${locale}#realisations`}>{tr.nav.work}</a>

          <a className="btnGhost btn" href={`/${locale}#contact`}>
            {tr.nav.cta}
          </a>

          {/* Sélecteur de langue */}
          <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
            <a
              href={switchLocale("fr")}
              style={{
                fontWeight: locale === "fr" ? 900 : 600,
                opacity: locale === "fr" ? 1 : 0.6,
              }}
            >
              FR
            </a>
            <span style={{ opacity: 0.4 }}>|</span>
            <a
              href={switchLocale("en")}
              style={{
                fontWeight: locale === "en" ? 900 : 600,
                opacity: locale === "en" ? 1 : 0.6,
              }}
            >
              EN
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}