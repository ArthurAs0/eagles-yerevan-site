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

        {/* Горизонтальный скролл на мобиле, сетка на десктопе */}
        <div className="overflow-x-auto lg:overflow-visible pb-6">
          <div className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-8 min-w-max lg:min-w-0">
            {slides.map((slide, index) => (
              <article
                key={index}
                className="w-[85vw] lg:w-auto flex-shrink-0 flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-black/50 transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Картинка */}
                <div className="w-full h-56 md:h-64 bg-background overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Текст под картинкой */}
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {slide.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
