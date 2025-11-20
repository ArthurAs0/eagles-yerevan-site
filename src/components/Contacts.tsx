import { useState } from "react";
import { translations, Locale } from "@/lib/translations";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface ContactsProps {
  locale: Locale;
}

export const Contacts = ({ locale }: ContactsProps) => {
  const t = translations[locale];
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    messenger: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success(t.contactsSuccess);
    setFormData({ name: "", age: "", phone: "", messenger: "", message: "" });
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            {t.contactsTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            {t.contactsDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">{t.contactsFormNameLabel}</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-foreground">{t.contactsFormAgeLabel}</Label>
                <Input
                  id="age"
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="bg-card border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">{t.contactsFormPhoneLabel}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t.contactsPhonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="messenger" className="text-foreground">{t.contactsFormMessengerLabel}</Label>
                <Select value={formData.messenger} onValueChange={(value) => setFormData({ ...formData, messenger: value })}>
                  <SelectTrigger className="bg-card border-border text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="telegram">Telegram</SelectItem>
                    <SelectItem value="viber">Viber</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">{t.contactsFormMessageLabel}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-card border-border text-foreground resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {t.contactsFormSubmit}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t.contactsBlockTitle}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>{t.contactsCity}</p>
                  <p className="text-accent">@libertyeagles.am</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="https://www.instagram.com/libertyeagles.am" target="_blank" rel="noopener noreferrer">
                    {t.contactsInstagramButton}
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href="https://www.youtube.com/@libertyeagles" target="_blank" rel="noopener noreferrer">
                    {t.contactsYouTubeButton}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
