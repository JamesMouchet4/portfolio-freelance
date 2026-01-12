import { type Locale, t } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const tr = t[locale];
  return (
    <footer style={{padding:"28px 0 40px", borderTop:"1px solid rgba(255,255,255,.06)"}}>
      <div className="container" style={{
        display:"flex", justifyContent:"space-between", alignItems:"center", gap:12,
        color:"var(--muted)", flexWrap:"wrap"
      }}>
        <p style={{margin:0}}>© {new Date().getFullYear()} James Mouchet. {tr.footer.rights}</p>
        <div style={{display:"flex", gap:14}}>
<a href={`/${locale}#services`}>{tr.nav.services}</a>
<a href={`/${locale}#competences`}>{tr.nav.skills}</a>
<a href={`/${locale}#contact`}>{tr.nav.contact}</a>
<a href={`/${locale}/mentions-legales`}>
  {locale === "fr" ? "Mentions légales" : "Legal Notice"}
</a>

<a href={`/${locale}/politique-de-confidentialite`}>
  {locale === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
</a>
        </div>
      </div>
    </footer>
  );
}