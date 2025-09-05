import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import { ArrowDown, Sparkles, TrendingUp, Globe } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-background"
    >
      {/* Enhanced Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/80 via-primary/60 to-fresh-green/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-golden-yellow/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-harvest-orange/20 rounded-full animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20 animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-golden-yellow" />
          <span className="text-white/90 text-sm font-medium">
            15 {t("yearsOfExcellence")}
          </span>
          <TrendingUp className="h-4 w-4 text-fresh-green" />
        </div>

        {/* Main Title with Enhanced Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-golden-yellow/90 to-white bg-clip-text text-transparent drop-shadow-2xl">
            {t("heroTitle")}
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-3xl lg:text-4xl text-white/95 mb-4 leading-relaxed font-medium drop-shadow-lg animate-fade-in-up max-w-4xl mx-auto animation-delay-300">
          {t("heroSubtitle")}
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-500">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Globe className="h-5 w-5 text-accent" />
            <span className="text-white text-sm font-medium">
              {t("language") === "ar" ? "تصدير عالمي" : "Global Export"}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Sparkles className="h-5 w-5 text-golden-yellow" />
            <span className="text-white text-sm font-medium">
              {t("language") === "ar" ? "جودة مضمونة" : "Premium Quality"}
            </span>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-700">
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="group bg-accent hover:bg-accent-hover text-accent-foreground px-10 py-4 text-xl font-bold shadow-hero transition-all duration-500 hover:scale-110 hover:shadow-2xl transform border-2 border-transparent hover:border-golden-yellow/30 rounded-xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("products")}
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-harvest-orange to-golden-yellow opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="group border-2 border-white/40 hover:border-white/80 hover:bg-white/15 px-10 py-4 text-xl font-bold backdrop-blur-md transition-all duration-500 hover:scale-110 hover:shadow-xl rounded-xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("contact")}
              <Globe className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-golden-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-900">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-golden-yellow mb-2">
              15+
            </div>
            <div className="text-white/90 text-sm">
              {t("language") === "ar" ? "سنة خبرة" : "Years Experience"}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-white/90 text-sm">
              {t("language") === "ar" ? "دولة تصدير" : "Export Countries"}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-fresh-green mb-2">100%</div>
            <div className="text-white/90 text-sm">
              {t("language") === "ar" ? "منتجات طبيعية" : "Natural Products"}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-xs font-medium">
            {t("language") === "ar" ? "اكتشف المزيد" : "Discover More"}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-golden-yellow p-3 transition-all duration-300 hover:scale-125 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-golden-yellow/50"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
