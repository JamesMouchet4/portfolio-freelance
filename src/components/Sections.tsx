import { type Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";

export default function Sections({
  locale,
  tr,
}: {
  locale: Locale;
  tr: any;
}) {
  return (
    <>
      {/* HERO */}
      <section style={{padding:"64px 0 24px"}}>
        <div className="container heroGrid">
          <div>
            <p className="pill">{tr.hero.pill}</p>
            <h1 style={{
              margin:"14px 0 14px",
              fontSize:"clamp(2rem, 4vw, 3rem)",
              lineHeight:1.05,
              letterSpacing:"-0.02em"
            }}>
              {tr.hero.titleA} <span className="grad">{tr.hero.titleB}</span> {tr.hero.titleC}
            </h1>
            <p className="p" style={{fontSize:"1.05rem", marginBottom:18}}>{tr.hero.lead}</p>

            <div style={{display:"flex", gap:12, flexWrap:"wrap", margin:"10px 0 18px"}}>
              <a className="btn" href="#contact">{tr.hero.primary}</a>
              <a className="btn btnGhost" href="#realisations">{tr.hero.secondary}</a>
            </div>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
              <div className="card" style={{padding:"12px 14px"}}>
                <span style={{display:"block", color:"var(--muted)", fontSize:".85rem", fontWeight:700}}>{tr.hero.meta1k}</span>
                <span style={{display:"block", fontWeight:900, marginTop:4}}>{tr.hero.meta1v}</span>
              </div>
              <div className="card" style={{padding:"12px 14px"}}>
                <span style={{display:"block", color:"var(--muted)", fontSize:".85rem", fontWeight:700}}>{tr.hero.meta2k}</span>
                <span style={{display:"block", fontWeight:900, marginTop:4}}>{tr.hero.meta2v}</span>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="card" style={{
            borderRadius:22,
            background:"linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
            position:"relative",
            overflow:"hidden"
          }}>
            <div aria-hidden style={{
              position:"absolute", inset:"-40%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(110,231,255,.18), transparent 55%)," +
                "radial-gradient(circle at 70% 40%, rgba(167,139,250,.18), transparent 55%)",
              filter:"blur(22px)"
            }} />
            <div style={{position:"relative"}}>
              <div style={{display:"flex", gap:12, alignItems:"center", marginBottom:14}}>
                <div style={{
                  width:46, height:46, borderRadius:16,
                  display:"grid", placeItems:"center",
                  fontWeight:900,
                  border:"1px solid var(--border)",
                  background:"linear-gradient(135deg, rgba(110,231,255,.25), rgba(167,139,250,.25))"
                }}>JM</div>
                <div>
                  <p style={{margin:0, fontWeight:900}}>James Mouchet</p>
                  <p style={{margin:"2px 0 0", color:"var(--muted)"}}>{tr.hero.cardRole}</p>
                </div>
              </div>

              <div style={{display:"grid", gap:10, margin:"12px 0"}}>
                {[
                  ["Next.js", "SEO • Perf • SSR"],
                  ["Angular", locale === "fr" ? "Apps métiers" : "Business apps"],
                  ["Laravel", "API • Auth • Admin"],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    padding:"12px 14px",
                    border:"1px solid var(--border)",
                    borderRadius:16,
                    background:"rgba(16,26,47,.55)"
                  }}>
                    <span style={{display:"block", fontWeight:900}}>{k}</span>
                    <span style={{display:"block", color:"var(--muted)", marginTop:4}}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{display:"flex", flexWrap:"wrap", gap:8, marginTop:10}}>
                {["HTML","CSS","JavaScript","Next.js","Angular","PHP","Laravel","Linux","Java","Python"].map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>

              <a className="btn" href="#contact" style={{width:"100%", marginTop:12}}>Travaillons ensemble</a>
              <p style={{margin:"10px 0 0", color:"var(--muted)", fontSize:".9rem"}}>{tr.hero.cardNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="h2">{tr.services.title}</h2>
          <p className="p" style={{marginBottom:22}}>{tr.services.desc}</p>

          <div className="grid3">
            {[
              { title: tr.services.s1t, desc: tr.services.s1d, items: tr.services.s1a },
              { title: tr.services.s2t, desc: tr.services.s2d, items: tr.services.s2a },
              { title: tr.services.s3t, desc: tr.services.s3d, items: tr.services.s3a },
            ].map((c) => (
              <article key={c.title} className="card">
                <h3 style={{margin:"0 0 10px"}}>{c.title}</h3>
                <p className="p" style={{marginBottom:12}}>{c.desc}</p>
                <ul style={{margin:0, paddingLeft:18, color:"var(--muted)"}}>
                  {c.items.map((x: string) => <li key={x} style={{margin:"6px 0"}}>{x}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="competences" className="section sectionAlt">
        <div className="container">
          <h2 className="h2">{tr.skills.title}</h2>
          <p className="p" style={{marginBottom:22}}>{tr.skills.desc}</p>

          <div className="grid3">
            <div className="card">
              <h3 style={{margin:"0 0 12px"}}>{tr.skills.front}</h3>
              <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                {["HTML","CSS","JavaScript","Next.js","Angular"].map(s => <span key={s} className="tag" style={{color:"var(--text)"}}>{s}</span>)}
              </div>
            </div>
            <div className="card">
              <h3 style={{margin:"0 0 12px"}}>{tr.skills.back}</h3>
              <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                {["PHP","Laravel","Java","Python"].map(s => <span key={s} className="tag" style={{color:"var(--text)"}}>{s}</span>)}
              </div>
            </div>
            <div className="card">
              <h3 style={{margin:"0 0 12px"}}>{tr.skills.ops}</h3>
              <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                {["Linux","Nginx","CI/CD","Security"].map(s => <span key={s} className="tag" style={{color:"var(--text)"}}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="container">
          <h2 className="h2">{tr.process.title}</h2>
          <p className="p" style={{marginBottom:22}}>{tr.process.desc}</p>

          <div style={{display:"grid", gap:12}}>
            {[
              ["01", tr.process.p1t, tr.process.p1d],
              ["02", tr.process.p2t, tr.process.p2d],
              ["03", tr.process.p3t, tr.process.p3d],
            ].map(([n, title, desc]) => (
              <div key={n} className="card" style={{
                display:"grid", gridTemplateColumns:"46px 1fr", gap:12,
                alignItems:"start"
              }}>
                <div style={{
                  width:46, height:46, borderRadius:16,
                  display:"grid", placeItems:"center",
                  border:"1px solid var(--border)",
                  background:"rgba(16,26,47,.55)",
                  fontWeight:900
                }}>{n}</div>
                <div>
                  <h3 style={{margin:"0 0 6px"}}>{title}</h3>
                  <p className="p">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="realisations" className="section sectionAlt">
        <div className="container">
          <h2 className="h2">{tr.work.title}</h2>
          <p className="p" style={{marginBottom:22}}>{tr.work.desc}</p>

          <div className="grid3">
            {[
  {
    title: locale === "fr"
      ? "Dashboard SaaS — Projet démonstrateur"
      : "SaaS Dashboard — Demo project",
    badge: "Angular",
    desc: locale === "fr"
      ? "Application Angular simulant un back-office SaaS : authentification, rôles et permissions, tableaux de données, filtres avancés et exports."
      : "Angular application simulating a SaaS back-office with authentication, roles and permissions, data tables, advanced filters and exports.",
    tags: ["Angular", "Admin", "Auth", "Charts"],
  },
  {
    title: locale === "fr"
      ? "Site vitrine SEO — Projet personnel"
      : "SEO Website — Personal project",
    badge: "Next.js",
    desc: locale === "fr"
      ? "Site développé avec Next.js, optimisé pour le SEO avec rendu serveur (SSR), pages dynamiques et excellentes performances Lighthouse."
      : "Website built with Next.js, optimized for SEO using server-side rendering (SSR), dynamic pages and strong Lighthouse performance.",
    tags: ["Next.js", "SEO", "SSR", "Performance"],
  },
  {
    title: locale === "fr"
      ? "API REST & Back-office — Cas d’étude technique"
      : "REST API & Back-office — Technical case study",
    badge: "Laravel",
    desc: locale === "fr"
      ? "API REST développée avec Laravel intégrant authentification JWT, gestion des utilisateurs, rôles, logs applicatifs et tâches asynchrones."
      : "REST API built with Laravel featuring JWT authentication, user management, roles, application logs and background jobs.",
    tags: ["Laravel", "API", "JWT", "Security"],
  },
].map((p) => (
  <article key={p.title} className="card">
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginBottom: 6,
      }}
    >
      <h3 style={{ margin: 0 }}>{p.title}</h3>
      <span
        className="tag"
        style={{
          background: "rgba(110,231,255,.10)",
          color: "var(--text)",
          fontWeight: 900,
        }}
      >
        {p.badge}
      </span>
    </div>

    <p className="p">{p.desc}</p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        margin: "10px 0 12px",
      }}
    >
      {p.tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>

<span style={{ color: "var(--muted)", fontWeight: 700 }}>
  {locale === "fr" ? "Démonstrateur technique" : "Technical demo project"}
</span>
  </article>
))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contactGrid">
            <div>
              <h2 className="h2">{tr.contact.title}</h2>
              <p className="p">{tr.contact.desc}</p>

              <div className="contactCards">
                <div className="card" style={{padding:14}}>
                  <p style={{margin:0, color:"var(--muted)", fontSize:".85rem", fontWeight:700}}>{tr.contact.email}</p>
                  <p style={{margin:"6px 0 0", fontWeight:900}}>
                    <a href="mailto:jamesmouchet@hotmail.fr">jamesmouchet@hotmail.fr</a>
                  </p>
                </div>
              </div>
            </div>

            <ContactForm locale={locale} tr={tr} />
          </div>
        </div>
      </section>

    </>
  );
}