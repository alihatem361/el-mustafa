import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';
import heroImage from '@/assets/hero-produce.jpg';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/70 via-primary/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in-up">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {t('heroSubtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection('products')}
            className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-3 text-lg font-semibold shadow-hero transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
          >
            {t('products')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/60"
          >
            {t('contact')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-white/80 p-2 transition-all duration-300 hover:scale-110"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;