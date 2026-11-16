import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About Us', ar: 'من نحن' },
  services: { en: 'Services', ar: 'خدماتنا' },
  samples: { en: 'Sample Analyses', ar: 'نماذج التحليل' },
  contact: { en: 'Contact', ar: 'اتصل بنا' },
  partnership: { en: 'Partnership', ar: 'الشراكة' },
  
  // Hero Section
  heroTitle: { en: 'Tijarati Althakiyah', ar: 'تجارتي الذكية' },
  heroSubtitle: { en: "World's First AI-Powered E-commerce Analysis Platform", ar: 'أول منصة عالمية لتحليل المتاجر الإلكترونية بالذكاء الاصطناعي' },
  heroDescription: { en: "We don't just analyze stores – we uncover hidden gaps and buried opportunities that human experts can't see.", ar: 'نحن لا نحلل المتاجر فقط - بل نكشف الثغرات المخفية والفرص المدفونة التي لا يراها الخبراء البشريون.' },
  orderNow: { en: 'Order Your Analysis Now', ar: 'اطلب تحليلك الآن' },
  
  // Special Offer
  exclusiveOffer: { en: 'Exclusive Website Offer', ar: 'عرض حصري من الموقع' },
  regularPrice: { en: 'Regular Price', ar: 'السعر العادي' },
  discount: { en: '60% Discount', ar: 'خصم 60%' },
  yourPrice: { en: 'Your Price: Only', ar: 'سعرك: فقط' },
  limitedOffer: { en: 'Limited time offer – Order now at this exceptional price', ar: 'عرض لفترة محدودة - اطلب الآن بهذا السعر الاستثنائي' },
  
  // Why Different
  whyDifferentTitle: { en: "What We Discover (That Humans Can't)", ar: 'ما نكتشفه (وما لا يستطيع البشر اكتشافه)' },
  hiddenOpportunities: { en: 'Hidden search opportunities buried in Google', ar: 'فرص البحث المخفية المدفونة في جوجل' },
  competitiveWeaknesses: { en: 'Competitive weaknesses invisible to the naked eye', ar: 'نقاط الضعف التنافسية غير المرئية للعين المجردة' },
  lostConversion: { en: 'Lost conversion points even successful stores miss', ar: 'نقاط التحويل المفقودة التي تفوتها حتى المتاجر الناجحة' },
  purchasePatterns: { en: 'Purchase pattern anomalies only AI can detect', ar: 'شذوذ أنماط الشراء التي لا يمكن إلا للذكاء الاصطناعي اكتشافها' },
  
  // Unique Advantage
  uniqueAdvantageTitle: { en: "Why We're Different & Unprecedented", ar: 'لماذا نحن مختلفون وغير مسبوقين' },
  fusionTools: { en: "First-ever fusion of Google's core algorithms + 500+ AI tools", ar: 'أول دمج على الإطلاق بين خوارزميات جوجل الأساسية + 500+ أداة ذكاء اصطناعي' },
  detectHidden: { en: 'We detect hidden weaknesses & opportunities that escape traditional analysis', ar: 'نكتشف نقاط الضعف والفرص المخفية التي تفلت من التحليل التقليدي' },
  outperformHuman: { en: 'Our AI-powered insights outperform human analysis – every time', ar: 'رؤيتنا المدعومة بالذكاء الاصطناعي تتفوق على التحليل البشري - في كل مرة' },
  
  // What We Offer
  whatWeOfferTitle: { en: 'Comprehensive Analysis Reports', ar: 'تقارير تحليل شاملة' },
  speedAnalysis: { en: 'Website speed and technical performance analysis', ar: 'تحليل سرعة الموقع والأداء التقني' },
  weaknesses: { en: 'Discovering store weaknesses', ar: 'اكتشاف نقاط ضعف المتجر' },
  aiRecommendations: { en: 'AI-powered recommendations to strengthen these weaknesses', ar: 'توصيات مدعومة بالذكاء الاصطناعي لتقوية نقاط الضعف' },
  strengths: { en: 'Discovering store strengths', ar: 'اكتشاف نقاط قوة المتجر' },
  untappedOpportunities: { en: 'Discovering untapped opportunities in the store', ar: 'اكتشاف الفرص غير المستغلة في المتجر' },
  competitorAnalysis: { en: "Competitor analysis: identifying competitors' weaknesses and strengths", ar: 'تحليل المنافسين: تحديد نقاط ضعف وقوة المنافسين' },
  pdfReport: { en: 'All of this is delivered in a clearly designed PDF report that the store owner receives.', ar: 'كل هذا يتم تسليمه في تقرير PDF مصمم بوضوح يتلقاه صاحب المتجر.' },
  
  // Trusted Stores
  trustedStoresTitle: { en: 'Global Stores Trusting Us', ar: 'المتاجر العالمية التي تثق بنا' },
  viewSamples: { en: 'View Sample Analyses', ar: 'عرض نماذج التحليل' },
  
  // Request Form
  requestFormTitle: { en: 'Request Your Store Analysis Now – Special Price', ar: 'اطلب تحليل متجرك الآن - سعر خاص' },
  fillForm: { en: "Fill the form and we'll contact you immediately:", ar: 'املأ النموذج وسنتصل بك على الفور:' },
  storeName: { en: 'Store Name', ar: 'اسم المتجر' },
  storeUrl: { en: 'Store URL', ar: 'رابط المتجر' },
  storeType: { en: 'Store Type', ar: 'نوع المتجر' },
  briefDescription: { en: 'Brief Description', ar: 'وصف مختصر' },
  biggestChallenge: { en: 'Biggest Challenge', ar: 'أكبر تحدي' },
  submitRequest: { en: 'Submit Request', ar: 'إرسال الطلب' },
  
  // Contact Info
  contactUs: { en: 'Contact Us', ar: 'اتصل بنا' },
  messageWhatsApp: { en: 'Message Us on WhatsApp', ar: 'راسلنا عبر واتساب' },
  
  // Partnership
  partnershipTitle: { en: 'Smart Partnership for Agencies', ar: 'شراكة ذكية للوكالات' },
  partnershipSubtitle: { en: 'Become the only agency offering analysis that surpasses human capability.', ar: 'كن الوكالة الوحيدة التي تقدم تحليلًا يتفوق على القدرات البشرية.' },
  whatYouGet: { en: 'What You Get:', ar: 'ما ستحصل عليه:' },
  commission: { en: '30% commission on every referred client', ar: '30% عمولة على كل عميل تحيله' },
  whiteLabel: { en: "White-label option under your agency's brand", ar: 'خيار العلامة البيضاء تحت علامة وكالتك التجارية' },
  freeAnalysis: { en: 'Free sample analysis for one of your top clients', ar: 'تحليل نموذجي مجاني لأحد أفضل عملائك' },
  targetClients: { en: 'Target All Your Clients – Even Successful Ones:', ar: 'استهدف جميع عملائك - حتى الناجحين منهم:' },
  evenThriving: { en: 'Yes, even thriving stores need us to uncover their next growth frontier.', ar: 'نعم، حتى المتاجر المزدهرة تحتاجنا لكشف حدود نموها التالية.' },
  exceptionalOffer: { en: '"Test us with one client – see the invisible gaps yourself."', ar: '"اختبرنا مع عميل واحد - اكتشف الفجوات غير المرئية بنفسك."' },
  contactPartnership: { en: 'Contact Us for Partnership', ar: 'اتصل بنا للشراكة' },
  
  // Footer
  footerMessage: { en: "Please don't hesitate to contact me and request an analysis for your store 😉💫 We will not disagree on price or work. I want to show my skills to everyone. So order your analysis now.", ar: 'لا تتردد في التواصل معي وطلب تحليل لمتجرك 😉💫 لن نختلف على السعر أو العمل. أريد إظهار مهاراتي للجميع. لذا اطلب تحليلك الآن.' },
  exclusiveFooter: { en: 'Get your store analysis for only $100 (was $250) – Order now through the website!', ar: 'احصل على تحليل متجرك مقابل 100 دولار فقط (كان 250 دولار) - اطلب الآن من خلال الموقع!' },
  allRightsReserved: { en: 'All Rights Reserved', ar: 'جميع الحقوق محفوظة' },
  
  // About Page
  aboutTitle: { en: 'Strategic Ecommerce Growth Analyst', ar: 'محلل استراتيجي لنمو التجارة الإلكترونية' },
  founderName: { en: 'Mohammed Al-Haj', ar: 'محمد الحاج' },
  founderTitle: { en: 'Founder of Tijarati Althakiyah', ar: 'مؤسس تجارتي الذكية' },
  aboutDescription1: { en: 'Specializing in transforming complex ecommerce data into strategic insights that drive profits and uncover critical gaps. I have extensive experience in deconstructing systems.', ar: 'متخصص في تحويل بيانات التجارة الإلكترونية المعقدة إلى رؤى استراتيجية تدفع الأرباح وتكشف الثغرات الحرجة. لدي خبرة واسعة في تفكيك الأنظمة.' },
  aboutDescription2: { en: "I'm experienced with competitor systems (Amazon, Walmart, Shopify) and developing innovative AI-powered solutions to improve user experience, secure reviews, and enhance logistics efficiency.", ar: 'لدي خبرة في أنظمة المنافسين (أمازون، وول مارت، شوبيفاي) وتطوير حلول مبتكرة مدعومة بالذكاء الاصطناعي لتحسين تجربة المستخدم وتأمين المراجعات وتعزيز كفاءة اللوجستيات.' },
  aboutDescription3: { en: "My expertise is the result of over 18 months of self-directed research and development until I achieved this unique quality that I offer today. I'm less concerned with money and more focused on showcasing these strong skills to the world.", ar: 'خبرتي هي نتيجة أكثر من 18 شهرًا من البحث والتطوير الذاتي حتى حققت هذه الجودة الفريدة التي أقدمها اليوم. أنا أقل اهتمامًا بالمال وأكثر تركيزًا على عرض هذه المهارات القوية للعالم.' },
  aboutDescription4: { en: "Look, I have experience using AI agents, extracting data from Google search engines, and creating analytics for online stores using this data via AI.", ar: 'انظر، لدي خبرة في استخدام وكلاء الذكاء الاصطناعي، واستخراج البيانات من محركات بحث جوجل، وإنشاء تحليلات للمتاجر عبر الإنترنت باستخدام هذه البيانات عبر الذكاء الاصطناعي.' },
  
  // Services Page
  servicesTitle: { en: 'Our Analysis Process', ar: 'عملية التحليل لدينا' },
  step1Title: { en: 'Submit Your Store', ar: 'أرسل متجرك' },
  step1Desc: { en: 'Fill out the simple request form', ar: 'املأ نموذج الطلب البسيط' },
  step2Title: { en: 'AI Deep Scan', ar: 'فحص عميق بالذكاء الاصطناعي' },
  step2Desc: { en: 'Our 500+ AI tools analyze every aspect', ar: 'أكثر من 500 أداة ذكاء اصطناعي تحلل كل جانب' },
  step3Title: { en: 'Comprehensive Report', ar: 'تقرير شامل' },
  step3Desc: { en: 'You receive a detailed PDF with:', ar: 'تتلقى ملف PDF مفصل يحتوي على:' },
  step4Title: { en: 'Review & Growth', ar: 'المراجعة والنمو' },
  step4Desc: { en: 'Use insights to dominate your market', ar: 'استخدم الرؤى للسيطرة على سوقك' },
  
  // Sample Analyses Page
  samplesTitle: { en: 'Sample Analyses', ar: 'نماذج التحليل' },
  samplesDescription: { en: 'You can view samples of our analyses for global stores by visiting our Facebook page:', ar: 'يمكنك عرض نماذج من تحليلاتنا للمتاجر العالمية من خلال زيارة صفحتنا على فيسبوك:' },
  samplesOffer1: { en: "If you'd like me to send you copies of my work and analyses I've done for global stores like Samsung, Nike, or Amazon, just let me know.", ar: 'إذا كنت تريد أن أرسل لك نسخًا من عملي والتحليلات التي قمت بها للمتاجر العالمية مثل سامسونج أو نايكي أو أمازون، فقط أخبرني.' },
  samplesOffer2: { en: "If you want to learn more about my service, send me a link to your store or any store you know, and I'll create a free analysis so you can see the quality yourself.", ar: 'إذا كنت تريد معرفة المزيد عن خدمتي، أرسل لي رابط متجرك أو أي متجر تعرفه، وسأنشئ تحليلًا مجانيًا حتى تتمكن من رؤية الجودة بنفسك.' },
  visitFacebook: { en: 'Visit Facebook Page', ar: 'زيارة صفحة فيسبوك' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}