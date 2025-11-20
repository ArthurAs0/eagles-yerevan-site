import { translations, Locale } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TrainingProps {
  locale: Locale;
}

export const Training = ({ locale }: TrainingProps) => {
  const t = translations[locale];

  const programs = [
    {
      title: t.trainingAdultTitle,
      short: t.trainingAdultShort,
      bullets: [
        t.trainingAdultBullet1,
        t.trainingAdultBullet2,
        t.trainingAdultBullet3,
        t.trainingAdultBullet4,
      ],
      color: "primary",
    },
    {
      title: t.trainingKidsTitle,
      short: t.trainingKidsShort,
      bullets: [
        t.trainingKidsBullet1,
        t.trainingKidsBullet2,
        t.trainingKidsBullet3,
        t.trainingKidsBullet4,
      ],
      color: "accent",
    },
    {
      title: t.trainingFitnessTitle,
      short: t.trainingFitnessShort,
      bullets: [
        t.trainingFitnessBullet1,
        t.trainingFitnessBullet2,
        t.trainingFitnessBullet3,
        t.trainingFitnessBullet4,
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="training" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          {t.trainingTitle}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="bg-secondary border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {program.short}
                </p>
                <ul className="space-y-2">
                  {program.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1 flex-shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Format */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t.formatTitle}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">1</span>
              </div>
              <h4 className="font-semibold text-foreground">{t.formatBlock1Title}</h4>
              <p className="text-sm text-muted-foreground">{t.formatBlock1Text}</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">2</span>
              </div>
              <h4 className="font-semibold text-foreground">{t.formatBlock2Title}</h4>
              <p className="text-sm text-muted-foreground">{t.formatBlock2Text}</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">3</span>
              </div>
              <h4 className="font-semibold text-foreground">{t.formatBlock3Title}</h4>
              <p className="text-sm text-muted-foreground">{t.formatBlock3Text}</p>
            </div>
          </div>

          <p className="text-center text-muted-foreground bg-secondary p-6 rounded-lg">
            {t.formatScheduleNote}
          </p>
        </div>
      </div>
    </section>
  );
};
