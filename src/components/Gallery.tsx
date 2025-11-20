import { translations, Locale } from "@/lib/translations";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";
import training4 from "@/assets/training-4.jpg";

interface GalleryProps {
  locale: Locale;
}

export const Gallery = ({ locale }: GalleryProps) => {
  const t = translations[locale];

  const images = [
    {
      src: training1,
      alt: t.galleryImage1Alt,
    },
    {
      src: training2,
      alt: t.galleryImage2Alt,
    },
    {
      src: training3,
      alt: t.galleryImage3Alt,
    },
    {
      src: training4,
      alt: t.galleryImage4Alt,
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.galleryTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            {t.gallerySubtitle}
          </p>
          <p className="text-sm text-accent">
            {t.galleryMoreText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
