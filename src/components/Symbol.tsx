import { translations, Locale } from "@/lib/translations";
import brandSlide1 from "@/assets/brand-slide-1.jpg";
import brandSlide2 from "@/assets/brand-slide-2.jpg";
import brandSlide3 from "@/assets/brand-slide-3.jpg";
import brandSlide4 from "@/assets/brand-slide-4.jpg";
import brandSlide5 from "@/assets/brand-slide-5.jpg";
import brandSlide6 from "@/assets/brand-slide-6.jpg";

interface SymbolProps {
  locale: Locale;
}

export const Symbol = ({ locale }: SymbolProps) => {
  const t = translations[locale];

  const slides = [
    {
      image: brandSlide1,
      title: t.symbolSlide1Title,
      text: t.symbolSlide1Text,
      alt: t.symbolSlide1Alt,
    },
    {
      image: brandSlide2,
      title: t.symbolSlide2Title,
      text: t.symbolSlide2Text,
      alt: t.symbolSlide2Alt,
    },
    {
      image: brandSlide3,
      title: t.symbolSlide3Title,
      text: t.symbolSlide3Text,
      alt: t.symbolSlide3Alt,
    },
    {
      image: brandSlide4,
      title: t.symbolSlide4Title,
      text: t.symbolSlide4Text,
      alt: t.symbolSlide4Alt,
    },
    {
      image: brandSlide5,
      title: t.symbolSlide5Title,
      text: t.symbolSlide5Text,
      alt: t.symbolSlide5Alt,
    },
    {
      image: brandSlide6,
      title: t.symbolSlide6Title,
      text: t.symbolSlide6Text,
      alt: t.symbolSlide6Alt,
    },
  ];

  return (
    <section id="symbol" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.symbolSectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.symbolIntro}
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto lg:overflow-visible pb-6">
          <div className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-8 min-w-max lg:min-w-0">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="relative w-[85vw] lg:w-auto aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
