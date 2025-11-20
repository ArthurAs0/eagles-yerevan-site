import { useState } from "react";
import { Locale } from "@/lib/translations";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Symbol } from "@/components/Symbol";
import { Training } from "@/components/Training";
import { Coaches } from "@/components/Coaches";
import { Gallery } from "@/components/Gallery";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [locale, setLocale] = useState<Locale>("ru");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} setLocale={setLocale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Symbol locale={locale} />
      <Training locale={locale} />
      <Coaches locale={locale} />
      <Gallery locale={locale} />
      <Contacts locale={locale} />
      <Footer locale={locale} />
    </div>
  );
};

export default Index;
