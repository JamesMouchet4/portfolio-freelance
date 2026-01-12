import { type Locale, t } from "@/lib/i18n";
import Sections from "@/components/Sections";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const tr = t[lang];

  return (
    <main>
      <Sections locale={lang} tr={tr} />
    </main>
  );
}