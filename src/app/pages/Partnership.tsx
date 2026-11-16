import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, Award, Users, Gift, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Partnership() {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    const message = language === 'en'
      ? 'Hello! I am interested in the partnership opportunity for agencies.'
      : 'مرحباً! أنا مهتم بفرصة الشراكة للوكالات.';
    const whatsappUrl = `https://wa.me/967773121674?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    {
      icon: Award,
      title: language === 'en' ? '30% Commission' : '30% عمولة',
      desc: t('commission'),
    },
    {
      icon: Users,
      title: language === 'en' ? 'White-Label Solution' : 'حل العلامة البيضاء',
      desc: t('whiteLabel'),
    },
    {
      icon: Gift,
      title: language === 'en' ? 'Free Sample' : 'نموذج مجاني',
      desc: t('freeAnalysis'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🤝 {t('partnershipTitle')}
          </h1>
          <p className="text-xl md:text-2xl">
            {t('partnershipSubtitle')}
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            {t('whatYouGet')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                  <benefit.icon className="w-10 h-10" style={{ color: '#007BFF' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#007BFF' }}>
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-700">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjM3MDA2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Why Partner With Us?' : 'لماذا تشاركنا؟'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <div>
                    <h4 className="font-bold text-lg mb-1" style={{ color: '#007BFF' }}>
                      {language === 'en' ? 'Unique Value Proposition' : 'عرض قيمة فريد'}
                    </h4>
                    <p className="text-gray-700">
                      {language === 'en' 
                        ? 'Offer your clients something no other agency can - AI-powered insights that surpass human analysis' 
                        : 'قدم لعملائك شيئًا لا يمكن لأي وكالة أخرى تقديمه - رؤى مدعومة بالذكاء الاصطناعي تتفوق على التحليل البشري'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <div>
                    <h4 className="font-bold text-lg mb-1" style={{ color: '#007BFF' }}>
                      {language === 'en' ? 'Expand Your Services' : 'وسع خدماتك'}
                    </h4>
                    <p className="text-gray-700">
                      {language === 'en' 
                        ? 'Add a high-value service to your portfolio without any additional investment or training' 
                        : 'أضف خدمة عالية القيمة إلى محفظتك دون أي استثمار أو تدريب إضافي'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <div>
                    <h4 className="font-bold text-lg mb-1" style={{ color: '#007BFF' }}>
                      {language === 'en' ? 'Recurring Revenue' : 'إيرادات متكررة'}
                    </h4>
                    <p className="text-gray-700">
                      {language === 'en' 
                        ? 'Earn 30% commission on every client referral - a sustainable income stream' 
                        : 'احصل على عمولة 30% على كل إحالة عميل - مصدر دخل مستدام'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <div>
                    <h4 className="font-bold text-lg mb-1" style={{ color: '#007BFF' }}>
                      {language === 'en' ? 'Your Brand, Your Rules' : 'علامتك التجارية، قواعدك'}
                    </h4>
                    <p className="text-gray-700">
                      {language === 'en' 
                        ? 'White-label option allows you to present this as your own service' 
                        : 'يتيح لك خيار العلامة البيضاء تقديم هذا كخدمة خاصة بك'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target All Clients */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Zap className="w-16 h-16 mx-auto mb-4" style={{ color: '#FFD700' }} />
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#007BFF' }}>
                {t('targetClients')}
              </h2>
              <p className="text-xl text-gray-700">
                {t('evenThriving')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#007BFF' }}>
                  {language === 'en' ? 'For Struggling Stores' : 'للمتاجر المتعثرة'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'Help them identify critical issues and provide actionable solutions to turn things around' 
                    : 'ساعدهم في تحديد المشاكل الحرجة وتقديم حلول قابلة للتنفيذ لتحويل الأمور'}
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#007BFF' }}>
                  {language === 'en' ? 'For Successful Stores' : 'للمتاجر الناجحة'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'Uncover hidden opportunities they\'re missing and help them reach the next level' 
                    : 'اكتشف الفرص المخفية التي يفتقدونها وساعدهم في الوصول إلى المستوى التالي'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📞 {language === 'en' ? 'Exceptional Offer' : 'عرض استثنائي'}
            </h2>
            <div className="bg-white text-gray-900 rounded-xl p-6 mb-8 inline-block">
              <p className="text-2xl font-bold" style={{ color: '#FFD700' }}>
                {t('exceptionalOffer')}
              </p>
            </div>
            <p className="text-xl mb-8">
              {language === 'en' 
                ? 'We\'ll provide a free comprehensive analysis for one of your top clients. See the value firsthand before committing to partnership.' 
                : 'سنقدم تحليلًا شاملاً مجانيًا لأحد أفضل عملائك. انظر القيمة بنفسك قبل الالتزام بالشراكة.'}
            </p>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#FFD700', color: '#000' }}
            >
              {t('contactPartnership')} 🚀
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            {language === 'en' ? 'How Partnership Works' : 'كيف تعمل الشراكة'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#007BFF' }}>
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' ? 'Reach out via WhatsApp or email' : 'تواصل معنا عبر واتساب أو البريد الإلكتروني'}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#007BFF' }}>
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Free Sample' : 'نموذج مجاني'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' ? 'Get a free analysis for one client' : 'احصل على تحليل مجاني لعميل واحد'}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#007BFF' }}>
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Setup Partnership' : 'إعداد الشراكة'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' ? 'Agree on terms and branding' : 'الاتفاق على الشروط والعلامة التجارية'}
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#FFD700' }}>
                <span className="text-3xl font-bold text-gray-900">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Start Earning' : 'ابدأ الكسب'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' ? 'Refer clients and earn 30%' : 'أحل العملاء واحصل على 30%'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready to Partner With Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'en' 
              ? 'Join us in revolutionizing e-commerce analysis and grow your agency\'s revenue' 
              : 'انضم إلينا في ثورة تحليل التجارة الإلكترونية وزيادة إيرادات وكالتك'}
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: '#FFD700', color: '#000' }}
          >
            {t('contactPartnership')} 💼
          </button>
        </div>
      </section>
    </div>
  );
}
