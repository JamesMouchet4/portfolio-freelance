import { isLocale, type Locale } from "@/lib/i18n";

export default async function PolitiqueConfidentialitePage({
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
          {isFR ? "Politique de confidentialité" : "Privacy Policy"}
        </h1>

        <p className="p">
          {isFR
            ? "Le présent site collecte des données personnelles uniquement via son formulaire de contact."
            : "This website collects personal data only through its contact form."}
        </p>

        <h3>{isFR ? "Données collectées" : "Collected data"}</h3>
        <p className="p">
          {isFR ? "Les données collectées sont :" : "The collected data includes:"}
          <br />– Name
          <br />– Email
          <br />– Message
        </p>

        <h3>{isFR ? "Finalité du traitement" : "Purpose of processing"}</h3>
        <p className="p">
          {isFR
            ? "Ces données sont utilisées uniquement pour répondre aux demandes envoyées via le formulaire de contact."
            : "This data is used solely to respond to messages sent via the contact form."}
        </p>

        <h3>{isFR ? "Base légale" : "Legal basis"}</h3>
        <p className="p">
          {isFR
            ? "Le traitement des données repose sur le consentement explicite de l’utilisateur."
            : "Data processing is based on the user’s explicit consent."}
        </p>

        <h3>{isFR ? "Durée de conservation" : "Data retention"}</h3>
        <p className="p">
          {isFR
            ? "Les données sont conservées uniquement le temps nécessaire au traitement de la demande."
            : "Data is retained only for the time necessary to process the request."}
        </p>

        <h3>{isFR ? "Destinataires" : "Recipients"}</h3>
        <p className="p">
          {isFR
            ? "Les données ne sont transmises à aucun tiers. Les emails sont envoyés via le service Brevo."
            : "Data is not shared with third parties. Emails are sent via Brevo as a technical relay."}
        </p>

        <h3>{isFR ? "Droits des utilisateurs" : "User rights"}</h3>
        <p className="p">
          {isFR
            ? "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression."
            : "In accordance with GDPR, you have the right to access, rectify and delete your data."}
          <br />
          Contact: jamesmouchet@hotmail.fr
        </p>

        <h3>Cookies</h3>
        <p className="p">
          {isFR
            ? "Ce site n’utilise aucun cookie de suivi ou de mesure d’audience."
            : "This website does not use tracking or analytics cookies."}
        </p>
      </div>
    </main>
  );
}