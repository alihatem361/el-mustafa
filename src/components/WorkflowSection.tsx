import { useLanguage } from "./LanguageProvider";
import { Card } from "@/components/ui/card";
import {
  ClipboardList,
  Handshake,
  Truck,
  FileText,
} from "lucide-react";

const WorkflowSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: ClipboardList,
      number: 1,
      title: t("step1Title"),
      description: t("step1Desc"),
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-l-primary",
    },
    {
      icon: Handshake,
      number: 2,
      title: t("step2Title"),
      description: t("step2Desc"),
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-l-accent",
    },
    {
      icon: Truck,
      number: 3,
      title: t("step3Title"),
      description: t("step3Desc"),
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-l-primary",
    },
    {
      icon: FileText,
      number: 4,
      title: t("step4Title"),
      description: t("step4Desc"),
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-l-accent",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("workflowTitle")}
          </h2>
          <div
            className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 ltr:left-8 rtl:right-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center shadow-lg border-4 border-background transition-all duration-300 hover:scale-110`}
                      >
                        <span className={`text-2xl font-bold ${step.color}`}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <Card
                      className={`flex-1 p-6 shadow-card border-0 border-l-4 ${step.borderColor} hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}
                        >
                          <IconComponent
                            className={`h-6 w-6 ${step.color}`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
