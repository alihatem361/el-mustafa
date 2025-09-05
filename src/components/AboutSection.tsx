import { Card } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
import logisticsImage from '@/assets/logistics-shipping.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-card border-0">
              <img
                src={logisticsImage}
                alt="El Mustafa Logistics"
                className="w-full h-80 object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('aboutText')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Card className="p-6 text-center shadow-soft border-l-4 border-l-primary">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">
                    {t('language') === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                  </div>
                </Card>
                
                <Card className="p-6 text-center shadow-soft border-l-4 border-l-accent">
                  <div className="text-3xl font-bold text-accent mb-2">12+</div>
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