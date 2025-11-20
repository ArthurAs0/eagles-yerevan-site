import { translations, Locale } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CoachesProps {
  locale: Locale;
}

export const Coaches = ({ locale }: CoachesProps) => {
  const t = translations[locale];

  const coaches = [
    {
      name: t.coach1Name,
      role: t.coach1Role,
      text: t.coach1Text,
    },
    {
      name: t.coach2Name,
      role: t.coach2Role,
      text: t.coach2Text,
    },
  ];

  return (
    <section id="coaches" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          {t.coachesTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coaches.map((coach, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {coach.name}
                </CardTitle>
                <p className="text-sm text-accent font-medium">{coach.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {coach.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
