import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
import { Ship, Plane, FileCheck } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileCheck,
      title: t('customsClearance'),
      description: 'تخليص جمركي سريع وموثوق'
    },
    {
      icon: Ship,
      title: t('seaFreight'),
      description: 'شحن بحري آمن واقتصادي'
    },
    {
      icon: Plane,
      title: t('airLandFreight'),
      description: 'شحن جوي وبري سريع'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="text-center p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-background animate-fade-in-up group"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;