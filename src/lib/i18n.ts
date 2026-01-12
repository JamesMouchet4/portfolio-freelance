export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

export const t = {
  fr: {
    nav: { services: "Services", skills: "Compétences", process: "Process", work: "Réalisations", contact: "Contact", cta: "Me contacter" },
    hero: {
      pill: "Disponible pour missions • Web & API",
      titleA: "Développeur freelance",
      titleB: "full-stack",
      titleC: "orienté performance.",
      lead:
        "Je conçois des applications web modernes, des API robustes et des interfaces soignées. Stack : Next.js, Angular, Laravel, PHP, JavaScript — avec déploiement sur serveur Linux.",
      primary: "Demander un devis",
      secondary: "Voir des projets",
      meta1k: "Spécialités",
      meta1v: "Web app • API • Dashboard",
      meta2k: "Qualité",
      meta2v: "Code propre • Tests • CI/CD",
      cardRole: "Développeur Freelance",
      cardNote: "Réponse sous 24–48h (jours ouvrés)",
    },
    services: {
      title: "Services",
      desc: "Un accompagnement complet : du design technique au déploiement.",
      s1t: "Applications web",
      s1d: "Sites vitrines premium, landing pages, web apps (SSR/SPA), optimisation Core Web Vitals.",
      s1a: ["Next.js (SEO, SSR, perf)", "Angular (apps métiers)", "UI responsive & accessible"],
      s2t: "API & Back-end",
      s2d: "Conception d’API sécurisées, intégrations, auth, paiements, back-office.",
      s2a: ["PHP / Laravel", "REST, JWT, rôles/permissions", "Logs, monitoring, tests"],
      s3t: "Serveur & Déploiement",
      s3d: "Mise en production, Linux, reverse proxy, SSL, CI/CD, maintenance.",
      s3a: ["Nginx, HTTPS, sécurité", "Docker (si besoin)", "Automatisation & backups"],
    },
    skills: {
      title: "Compétences",
      desc: "Stack full-stack orientée fiabilité, performance et maintenabilité.",
      front: "Front",
      back: "Back",
      ops: "Ops",
    },
    process: {
      title: "Process de collaboration",
      desc: "Clair, structuré, avec des livrables à chaque étape.",
      p1t: "Cadrage",
      p1d: "Objectifs, périmètre, contraintes, planning. Proposition technique + estimation.",
      p2t: "Construction",
      p2d: "Développement itératif, revues régulières, qualité (lint/tests) et documentation.",
      p3t: "Mise en production",
      p3d: "Déploiement, monitoring, optimisation performance & sécurité, passation.",
    },
    work: {
      title: "Réalisations",
      desc: "",
      w1t: "Dashboard SaaS",
      w1d: "Interface admin + analytics, rôles/permissions, tables, filtres, exports.",
      w2t: "Site SEO",
      w2d: "SSR, score Lighthouse élevé, pages dynamiques, tracking propre, formulaires.",
      w3t: "API & Back-office",
      w3d: "API REST, auth JWT, gestion utilisateurs, logs, jobs, emails transactionnels.",
      view: "Voir le projet →",
    },
    contact: {
      title: "Parlons de votre projet",
      desc:
        "Dites moi ce que vous voulez construire (site, app, API, refonte). Je vous réponds avec une proposition claire : scope, techno, délais, budget.",
      email: "Email",
      name: "Nom",
      yourName: "Votre nom",
      yourEmail: "votre@email.com",
      message: "Message",
      placeholder: "Décrivez votre besoin, votre délai, votre budget…",
      send: "Envoyer",
      ok: "Merci ! Ton message a bien été envoyé ✅",
      err: "Oups — l’envoi a échoué. Réessaiez plus tard ou contactez-moi par email.",
      loading: "Envoi…",
    },
    footer: { rights: "Tous droits réservés." },
    seo: {
      title: "James Mouchet — Développeur Freelance",
      description:
        "Développeur freelance : Next.js, Angular, Laravel, PHP, JavaScript. Sites web performants, API, dashboards, déploiement Linux.",
    },
  },

  en: {
    nav: { services: "Services", skills: "Skills", process: "Process", work: "Work", contact: "Contact", cta: "Contact me" },
    hero: {
      pill: "Available for projects • Web & API",
      titleA: "Freelance",
      titleB: "full-stack",
      titleC: "developer focused on performance.",
      lead:
        "I build modern web apps, robust APIs, and polished interfaces. Stack: Next.js, Angular, Laravel, PHP, JavaScript — plus Linux server deployments.",
      primary: "Request a quote",
      secondary: "View projects",
      meta1k: "Focus",
      meta1v: "Web apps • APIs • Dashboards",
      meta2k: "Quality",
      meta2v: "Clean code • Tests • CI/CD",
      cardRole: "Freelance Developer",
      cardNote: "Reply within 24–48h (business days)",
    },
    services: {
      title: "Services",
      desc: "End-to-end delivery: from technical design to production deployment.",
      s1t: "Web applications",
      s1d: "Premium websites, landing pages, web apps (SSR/SPA), Core Web Vitals optimization.",
      s1a: ["Next.js (SEO, SSR, perf)", "Angular (business apps)", "Responsive & accessible UI"],
      s2t: "API & Back-end",
      s2d: "Secure APIs, integrations, auth, payments, admin/back-office.",
      s2a: ["PHP / Laravel", "REST, JWT, roles/permissions", "Logs, monitoring, tests"],
      s3t: "Server & Deployment",
      s3d: "Production setup, Linux, reverse proxy, SSL, CI/CD, maintenance.",
      s3a: ["Nginx, HTTPS, security", "Docker (if needed)", "Automation & backups"],
    },
    skills: {
      title: "Skills",
      desc: "A reliable full-stack toolkit focused on performance and maintainability.",
      front: "Front-end",
      back: "Back-end",
      ops: "Ops",
    },
    process: {
      title: "How i work",
      desc: "Clear, structured, with deliverables at every step.",
      p1t: "Discovery",
      p1d: "Goals, scope, constraints, timeline. Technical proposal + estimate.",
      p2t: "Build",
      p2d: "Iterative development, regular check-ins, quality (lint/tests) and documentation.",
      p3t: "Launch",
      p3d: "Deployment, monitoring, performance & security tuning, handover.",
    },
    work: {
      title: "Work",
      desc: "",
      w1t: "SaaS Dashboard",
      w1d: "Admin UI + analytics, roles/permissions, tables, filters, exports.",
      w2t: "SEO Website",
      w2d: "SSR, high Lighthouse score, dynamic pages, clean tracking, forms.",
      w3t: "API & Admin",
      w3d: "REST API, JWT auth, user management, logs, jobs, transactional emails.",
      view: "View project →",
    },
    contact: {
      title: "Let’s talk about your project",
      desc:
        "Tell me what you want to build (website, app, API, redesign). I’ll reply with a clear proposal: scope, stack, timeline, budget.",
      email: "Email",
      name: "Name",
      yourName: "Your name",
      yourEmail: "you@email.com",
      message: "Message",
      placeholder: "Describe your needs, deadline, budget…",
      send: "Send",
      ok: "Thanks! Your message was sent ✅",
      err: "Oops — sending failed. Try again later or email me directly.",
      loading: "Sending…",
    },
    footer: { rights: "All rights reserved." },
    seo: {
      title: "James Mouchet — Freelance Developer",
      description:
        "Freelance developer: Next.js, Angular, Laravel, PHP, JavaScript. High-performance websites, APIs, dashboards, Linux deployment.",
    },
  },
} as const;