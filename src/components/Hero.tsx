import { Button } from "./ui/button";
import { translations, Locale } from "@/lib/translations";
import trainingImage from "@/assets/training-1.jpg";

interface HeroProps {
  locale: Locale;
}

export const Hero = ({ locale }: HeroProps) => {
  const t = translations[locale];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t.heroTitle}
            </h1>
            
            <p className="text-lg text-muted-foreground">
              {t.heroSubtitle}
            </p>
            
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>{t.heroTagline}</span>
            </div>
            
            <p className="text-sm italic text-accent font-medium">
              {t.heroSmallEnglishTag}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("contacts")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {t.heroPrimaryButton}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacts")}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                {t.heroSecondaryButton}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              {t.heroHelperText}
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={trainingImage} 
                alt={t.heroImageAlt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
