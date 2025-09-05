import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'عنا',
    products: 'منتجاتنا',
    services: 'خدماتنا',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'شركة المصطفى للاستيراد والتصدير',
    heroSubtitle: 'خبرة 15 عاماً في تصدير أجود أنواع الفاكهة والخضروات المصرية',
    
    // About Section
    aboutTitle: 'عن شركة المصطفى',
    aboutText: 'نحن مكتب المصطفى للأستيراد والتصدير نعمل في هذا المجال منذ 15 عاما. نقوم بتصدير جميع الخضروات والفاكهة الطازجه والمجمده من جمهورية مصر العربيه. وقد قمنا بتصدير منتجاتنا الى جميع الدول العربية ( السعودية. الكويت. سلطنة عمان. الأمارات) وايضا الى الدول الأجنبية منها ( هولندا . الهند أوكرانيا . يوغسلافيا البوسنه والهرسك بنجلاديش). ونقوم بأستيراد ( الثوم / التفاح / الخوخ / البرقوق / النكتارين ) من ( ايطاليا - اليونان - الصين - فرنسا ).',
    
    // Products Section
    productsTitle: 'منتجاتنا ومواسم الحصاد',
    filterAll: 'الكل',
    filterCitrus: 'موالح',
    filterFruits: 'فاكهة',
    filterVegetables: 'خضروات',
    availableMonths: 'متاح في شهور:',
    
    // Services Section
    servicesTitle: 'خدمات لوجستية متكاملة',
    customsClearance: 'تخليص جمركي',
    seaFreight: 'شحن بحري',
    airLandFreight: 'شحن جوي وبري',
    
    // Contact Section
    contactTitle: 'تواصل معنا',
    generalManager: 'المدير العام: السيد نادر عمران',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Footer
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات التواصل',
    copyright: '© 2025 شركة المصطفى للاستيراد والتصدير. جميع الحقوق محفوظة.',
    
    // Months
    january: 'يناير',
    february: 'فبراير',
    march: 'مارس',
    april: 'أبريل',
    may: 'مايو',
    june: 'يونيو',
    july: 'يوليو',
    august: 'أغسطس',
    september: 'سبتمبر',
    october: 'أكتوبر',
    november: 'نوفمبر',
    december: 'ديسمبر',
    yearRound: 'متوفر طوال العام'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    products: 'Our Products',
    services: 'Our Services',
    contact: 'Contact Us',
    
    // Hero Section
    heroTitle: 'El Mustafa for Import & Export',
    heroSubtitle: '15 years of experience in exporting the finest Egyptian fruits and vegetables',
    
    // About Section
    aboutTitle: 'About El Mustafa',
    aboutText: 'We are El Mustafa Office for Import & Export. We have been working in this field for 15 years. We export all vegetables and fresh and frozen fruits from Egypt. We exported our products to all the Arab countries (Saudi Arabia, Kuwait, Sultanate of Oman, UAE, etc.) to foreign countries including the Netherlands, India, Ukraine, Bosnia and Herzegovina, Bangladesh. We import (garlic / apple / peach / plum / nectarine) from (Italy - Greece - China - France).',
    
    // Products Section
    productsTitle: 'Our Products & Harvest Seasons',
    filterAll: 'All',
    filterCitrus: 'Citrus',
    filterFruits: 'Fruits',
    filterVegetables: 'Vegetables',
    availableMonths: 'Available in:',
    
    // Services Section
    servicesTitle: 'Integrated Logistics Services',
    customsClearance: 'Customs Clearance',
    seaFreight: 'Sea Freight',
    airLandFreight: 'Air & Land Freight',
    
    // Contact Section
    contactTitle: 'Contact Us',
    generalManager: 'General Manager: Mr. Nader Omran',
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    message: 'Message',
    send: 'Send',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    copyright: '© 2025 El Mustafa for Import & Export. All rights reserved.',
    
    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    yearRound: 'Available year-round'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'arabic' : 'english'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}