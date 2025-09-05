import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';
import { Languages, Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems = [
    { key: 'home', href: 'hero' },
    { key: 'about', href: 'about' },
    { key: 'products', href: 'products' },
    { key: 'services', href: 'services' },
    { key: 'contact', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft animate-slide-down' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-primary hover:scale-110 transition-transform duration-300 cursor-pointer">
              المصطفى
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <Languages className="h-4 w-4 animate-pulse-slow" />
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-down">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-right rtl:text-right ltr:text-left py-2 text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 rtl:hover:-translate-x-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {t(item.key)}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2 mt-4 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${navItems.length * 0.1}s` }}
              >
                <Languages className="h-4 w-4" />
                {language === 'ar' ? 'English' : 'العربية'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;