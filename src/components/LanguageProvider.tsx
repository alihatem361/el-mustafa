import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "عنا",
    services: "خدماتنا",
    workflow: "كيف نعمل",
    whyUs: "لماذا نحن",
    contact: "تواصل معنا",

    // Hero Section
    heroTitle: "شركة المصطفى للإستيراد والتصدير",
    heroSubtitle: "شريكك الموثوق في الاستيراد والتصدير والتخليص الجمركي والشحن بين مصر والصين",
    yearsOfExcellence: "خبرة في السوق",

    // About Section
    aboutTitle: "عن شركة المصطفى",
    aboutText:
      "شركة المصطفى للإستيراد والتصدير متخصصة في خدمات الاستيراد والتصدير بين مصر والصين. نقدم حلولاً متكاملة تشمل التخليص الجمركي، الشحن البحري والجوي، الدعم اللوجستي، واستخراج التأشيرات. نسعى لتوفير تجربة استيراد سهلة وشفافة لعملائنا مع ضمان أعلى معايير الجودة والمصداقية.",

    // Services Section
    servicesTitle: "خدماتنا",
    serviceImportTitle: "الاستيراد لحساب الغير",
    serviceImportDesc: "التعامل الكامل مع الموردين في الصين وشحن البضائع حتى باب مخزنك.",
    serviceShippingTitle: "الشحن والتخليص الجمركي",
    serviceShippingDesc: "خدمة مخصصة لمن لديهم بضائع جاهزة ويريدون فقط الشحن والتخليص.",
    serviceLogisticsTitle: "الدعم اللوجستي والسياحي في الصين",
    serviceLogisticsDesc: "استقبال العملاء في جوانزو أو أيوو وتوفير مرافقة لزيارة أماكن العمل والمصانع.",
    serviceVisaTitle: "استخراج التأشيرات",
    serviceVisaDesc: "المساعدة في استخراج تأشيرة السفر للصين.",
    serviceAirFreightTitle: "الشحن الجوي",
    serviceAirFreightDesc: "شحن سريع لكافة المنتجات المسموح بدخولها مصر.",

    // Workflow Section
    workflowTitle: "كيف نعمل",
    step1Title: "الطلب والتسعير",
    step1Desc: "العميل يرسل نوع السلعة، المواصفات، والصور. الرد خلال أسبوع بتقرير مفصل يشمل الأسعار، الجمارك، الشحن، والتكلفة التقريبية.",
    step2Title: "التعاقد والدفع",
    step2Desc: "زيارة العميل للشركة لمناقشة التفاصيل وتوقيع العقد. سداد ثمن البضاعة (كاش أو إيداع بنكي) مقدماً.",
    step3Title: "التنفيذ والشحن",
    step3Desc: "بدء الطلب، الشحن، والتخليص الجمركي. سداد الدفعة الثانية (جمارك، شحن، عمولة) قبل خروج البضاعة من الجمرك بيوم. وصول البضاعة للمخزن في اليوم التالي.",
    step4Title: "التوثيق وإغلاق الملف",
    step4Desc: "زيارة المكتب بعد أسبوع من الاستلام. استلام نسخة من كافة المستندات، الفواتير المختومة، وكشف حساب مفصل وموثق.",

    // Why Us Section
    whyUsTitle: "لماذا نحن؟",
    whyUsTransparencyTitle: "الشفافية المالية",
    whyUsTransparencyDesc: "تقديم فواتير مختومة وموثقة بختم النسر لكل قرش تم دفعه.",
    whyUsFlexibilityTitle: "المرونة",
    whyUsFlexibilityDesc: "خيارات متعددة سواء كنت ستسافر للصين بنفسك أو ستعتمد علينا كلياً.",
    whyUsPrecisionTitle: "الدقة في التقدير",
    whyUsPrecisionDesc: "تقديم دراسة جدوى تقريبية للتكاليف قبل البدء.",
    whyUsCoverageTitle: "التغطية الجغرافية",
    whyUsCoverageDesc: "مكاتب وخدمات تغطي أهم مدن الصين التجارية (جوانزو، أيوو).",

    // Contact Section
    contactTitle: "تواصل معنا",
    contactSubtitle: "لديك استفسار أو ترغب في بدء استيراد شحنتك؟ تواصل معنا عبر الهاتف أو الواتساب، أو زرنا في مقر الشركة.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "الرسالة",
    send: "إرسال",

    // Footer
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات التواصل",
    copyright: "© 2026 شركة المصطفى للإستيراد والتصدير. جميع الحقوق محفوظة.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    workflow: "How We Work",
    whyUs: "Why Us",
    contact: "Contact Us",

    // Hero Section
    heroTitle: "Al-Mustafa Import & Export",
    heroSubtitle:
      "Your trusted partner in import, export, customs clearance, and shipping between Egypt and China",
    yearsOfExcellence: "Market Experience",

    // About Section
    aboutTitle: "About Al-Mustafa",
    aboutText:
      "Al-Mustafa Import & Export Company specializes in import and export services between Egypt and China. We provide comprehensive solutions including customs clearance, sea and air freight, logistics support, and visa processing. We strive to deliver a seamless and transparent import experience for our clients while ensuring the highest standards of quality and credibility.",

    // Services Section
    servicesTitle: "Our Services",
    serviceImportTitle: "Import on Behalf",
    serviceImportDesc: "Complete handling with suppliers in China and shipping goods right to your warehouse door.",
    serviceShippingTitle: "Shipping & Customs Clearance",
    serviceShippingDesc: "Dedicated service for those who have goods ready and only need shipping and customs clearance.",
    serviceLogisticsTitle: "Logistics & Tourism Support in China",
    serviceLogisticsDesc: "Welcoming clients in Guangzhou or Yiwu with guided tours to workplaces and factories.",
    serviceVisaTitle: "Visa Processing",
    serviceVisaDesc: "Assistance in obtaining travel visas to China.",
    serviceAirFreightTitle: "Air Freight",
    serviceAirFreightDesc: "Fast shipping for all products permitted to enter Egypt.",

    // Workflow Section
    workflowTitle: "How We Work",
    step1Title: "Request & Pricing",
    step1Desc: "The client sends the product type, specifications, and photos. Response within a week with a detailed report including prices, customs, shipping, and approximate cost.",
    step2Title: "Contract & Payment",
    step2Desc: "Client visits the company to discuss details and sign the contract. Payment for goods (cash or bank deposit) in advance.",
    step3Title: "Execution & Shipping",
    step3Desc: "Order processing, shipping, and customs clearance begins. Second payment (customs, shipping, commission) due one day before goods leave customs. Goods delivered to warehouse the next day.",
    step4Title: "Documentation & File Closure",
    step4Desc: "Visit the office one week after receiving goods. Receive copies of all documents, stamped invoices, and a detailed certified account statement.",

    // Why Us Section
    whyUsTitle: "Why Choose Us?",
    whyUsTransparencyTitle: "Financial Transparency",
    whyUsTransparencyDesc: "Providing stamped and certified invoices with the eagle seal for every penny spent.",
    whyUsFlexibilityTitle: "Flexibility",
    whyUsFlexibilityDesc: "Multiple options whether you travel to China yourself or rely on us completely.",
    whyUsPrecisionTitle: "Accurate Estimation",
    whyUsPrecisionDesc: "Providing an approximate feasibility study of costs before starting.",
    whyUsCoverageTitle: "Geographic Coverage",
    whyUsCoverageDesc: "Offices and services covering China's most important commercial cities (Guangzhou, Yiwu).",

    // Contact Section
    contactTitle: "Contact Us",
    contactSubtitle: "Have a question or want to start importing your shipment? Contact us by phone or WhatsApp, or visit our office.",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    message: "Message",
    send: "Send",

    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    copyright: "© 2026 Al-Mustafa Import & Export. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className={language === "ar" ? "arabic" : "english"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
