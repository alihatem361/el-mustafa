import { Card } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
import { Ship, Globe, Shield, FileCheck } from 'lucide-react';

const AboutSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Key Stats */}
          <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-soft border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Ship className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'شحن بحري وجوي' : 'Sea & Air Freight'}
                </div>
              </Card>
              <Card className="p-6 text-center shadow-soft border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
                <FileCheck className="h-10 w-10 mx-auto mb-3 text-accent" />
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'تخليص جمركي' : 'Customs Clearance'}
                </div>
              </Card>
              <Card className="p-6 text-center shadow-soft border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Globe className="h-10 w-10 mx-auto mb-3 text-accent" />
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'تغطية جغرافية' : 'Geographic Coverage'}
                </div>
              </Card>
              <Card className="p-6 text-center shadow-soft border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'شفافية كاملة' : 'Full Transparency'}
                </div>
              </Card>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {t('aboutText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;