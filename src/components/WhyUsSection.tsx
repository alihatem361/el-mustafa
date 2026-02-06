import { useLanguage } from "./LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sliders, Calculator, MapPin } from "lucide-react";

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("whyUsTransparencyTitle"),
      description: t("whyUsTransparencyDesc"),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Sliders,
      title: t("whyUsFlexibilityTitle"),
      description: t("whyUsFlexibilityDesc"),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Calculator,
      title: t("whyUsPrecisionTitle"),
      description: t("whyUsPrecisionDesc"),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MapPin,
      title: t("whyUsCoverageTitle"),
      description: t("whyUsCoverageDesc"),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="whyus" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("whyUsTitle")}
          </h2>
          <div
            className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-background animate-fade-in-up group"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent
                        className={`h-7 w-7 ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
