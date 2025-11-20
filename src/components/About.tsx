import { translations, Locale } from "@/lib/translations";

interface AboutProps {
  locale: Locale;
}

export const About = ({ locale }: AboutProps) => {
  const t = translations[locale];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {t.aboutTitle}
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
