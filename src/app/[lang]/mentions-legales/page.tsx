import { isLocale, type Locale } from "@/lib/i18n";

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "fr";

  const isFR = locale === "fr";

  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">
          {isFR ? "Mentions légales" : "Legal Notice"}
        </h1>

        <p className="p">
          {isFR
            ? "Conformément aux dispositions de la loi pour la Confiance dans l’Économie Numérique (LCEN), il est précisé aux utilisateurs du site les présentes mentions légales."
            : "In accordance with applicable laws, users of this website are informed of the following legal information."}
        </p>

        <h3>{isFR ? "Éditeur du site" : "Website publisher"}</h3>
        <p className="p">
          Name: James Mouchet<br />
          {isFR
            ? "Statut : Développeur web freelance"
            : "Status: Freelance web developer"}
          <br />
          Email: jamesmouchet@hotmail.fr
        </p>

        <h3>{isFR ? "Hébergement" : "Hosting"}</h3>
        <p className="p">
          Vercel Inc.<br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723<br />
          {isFR ? "États-Unis" : "United States"}
          <br />
          https://vercel.com
        </p>

        <h3>{isFR ? "Propriété intellectuelle" : "Intellectual property"}</h3>
        <p className="p">
          {isFR
            ? "L’ensemble du contenu présent sur ce site est la propriété exclusive de James Mouchet, sauf mention contraire."
            : "All content on this website is the exclusive property of James Mouchet unless otherwise stated."}
        </p>

        <h3>{isFR ? "Responsabilité" : "Liability"}</h3>
        <p className="p">
          {isFR
            ? "L’éditeur du site s’efforce de fournir des informations aussi précises que possible mais ne saurait être tenu responsable des omissions ou inexactitudes."
            : "The website publisher strives to provide accurate information but cannot be held responsible for errors, omissions or outdated content."}
        </p>
      </div>
    </main>
  );
}