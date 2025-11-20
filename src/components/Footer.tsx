import { translations, Locale } from "@/lib/translations";

interface FooterProps {
  locale: Locale;
}

export const Footer = ({ locale }: FooterProps) => {
  const t = translations[locale];

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {t.footerText}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.footerInstagram}
          </p>
        </div>
      </div>
    </footer>
  );
};
