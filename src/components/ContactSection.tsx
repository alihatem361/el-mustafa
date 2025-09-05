import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "./LanguageProvider";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    toast({
      title: "رسالتك تم إرسالها بنجاح",
      description: "سنتواصل معك قريباً",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contactTitle")}
          </h2>
          <div
            className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Card className="shadow-card border-0 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <User className="h-5 w-5 animate-pulse-slow" />
                  {t("generalManager")}
                </CardTitle>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <Card
                className="p-6 shadow-soft border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("language") === "ar"
                        ? "أرقام الهاتف"
                        : "Phone Numbers"}
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+201006570319"
                        className="block text-muted-foreground hover:text-primary transition-colors font-mono text-lg"
                        dir="ltr"
                      >
                        +201006570319
                      </a>
                      <a
                        href="tel:+201111990118"
                        className="block text-muted-foreground hover:text-primary transition-colors font-mono text-lg"
                        dir="ltr"
                      >
                        +201111990118
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card
                className="p-6 shadow-soft border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("email")}
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:nader@elmostafa.co"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        nader@elmostafa.co
                      </a>
                      <a
                        href="mailto:info@elmostafa.co"
                        className="block text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@elmostafa.co
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className="shadow-card border-0 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t("language") === "ar" ? "إرسال رسالة" : "Send Message"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {t("send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
