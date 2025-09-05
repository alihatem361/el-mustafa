import { Card } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
import logisticsImage from '@/assets/logistics-shipping.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

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
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="overflow-hidden shadow-card border-0 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <img
                src={logisticsImage}
                alt="El Mustafa Logistics"
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {t('aboutText')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Card className="p-6 text-center shadow-soft border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  <div className="text-3xl font-bold text-primary mb-2 animate-pulse-slow">15+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('language') === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                  </div>
                </Card>
                
                <Card className="p-6 text-center shadow-soft border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-bold text-accent mb-2 animate-pulse-slow">12+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('language') === 'ar' ? 'دولة مصدرة إليها' : 'Export Countries'}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;