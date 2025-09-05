import { useLanguage } from "./LanguageProvider";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { key: "home", href: "hero" },
    { key: "about", href: "about" },
    { key: "products", href: "products" },
    { key: "services", href: "services" },
    { key: "contact", href: "contact" },
  ];

  return (
    <footer className="bg-earth-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="El Mostafa Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              {t("language") === "ar"
                ? "شركة رائدة في تصدير الفاكهة والخضروات المصرية عالية الجودة منذ 15 عاماً"
                : "Leading company in exporting high-quality Egyptian fruits and vegetables for 15 years"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">
              {t("quickLinks")}
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/80 hover:text-accent transition-colors duration-200"
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">
              {t("contactInfo")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 text-accent" />
                <div className="space-y-1">
                  <a
                    href="tel:+201006570319"
                    className="block hover:text-accent transition-colors"
                  >
                    +20 100 657 0319
                  </a>
                  <a
                    href="tel:+201111990118"
                    className="block hover:text-accent transition-colors"
                  >
                    +20 111 199 0118
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-4 w-4 text-accent" />
                <div className="space-y-1">
                  <a
                    href="mailto:nader@elmostafa.co"
                    className="block hover:text-accent transition-colors"
                  >
                    nader@elmostafa.co
                  </a>
                  <a
                    href="mailto:info@elmostafa.co"
                    className="block hover:text-accent transition-colors"
                  >
                    info@elmostafa.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
