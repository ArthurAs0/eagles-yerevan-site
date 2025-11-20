import { useState } from "react";
import { Button } from "./ui/button";
import { translations, Locale } from "@/lib/translations";

interface HeaderProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const Header = ({ locale, setLocale }: HeaderProps) => {
  const t = translations[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex flex-col text-left hover:opacity-80 transition-opacity"
          >
            <span className="text-lg md:text-xl font-bold text-foreground leading-tight">
              ФК «Орлы Свободы»
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              Liberty Eagles FC
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.navAbout}
            </button>
            <button onClick={() => scrollToSection("symbol")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.navSymbol}
            </button>
            <button onClick={() => scrollToSection("training")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.navTraining}
            </button>
            <button onClick={() => scrollToSection("coaches")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.navCoaches}
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.navGallery}
            </button>
            <button onClick={() => scrollToSection("contacts")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.navContacts}
            </button>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Button
              variant={locale === "ru" ? "default" : "outline"}
              size="sm"
              onClick={() => setLocale("ru")}
              className="min-w-[50px]"
            >
              {t.langRU}
            </Button>
            <Button
              variant={locale === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => setLocale("en")}
              className="min-w-[50px]"
            >
              {t.langEN}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {t.navAbout}
            </button>
            <button onClick={() => scrollToSection("symbol")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {t.navSymbol}
            </button>
            <button onClick={() => scrollToSection("training")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {t.navTraining}
            </button>
            <button onClick={() => scrollToSection("coaches")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {t.navCoaches}
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {t.navGallery}
            </button>
            <button onClick={() => scrollToSection("contacts")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {t.navContacts}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
