import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, FileText, Search, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const { t, language } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: FileText,
    },
    {
      number: '2',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: Search,
    },
    {
      number: '3',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: TrendingUp,
    },
    {
      number: '4',
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: CheckCircle,
    },
  ];

  const reportIncludes = [
    t('speedAnalysis'),
    t('weaknesses'),
    t('aiRecommendations'),
    t('strengths'),
    t('untappedOpportunities'),
    t('competitorAnalysis'),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🛠️ {t('servicesTitle')}
          </h1>
          <p className="text-xl">{t('heroDescription')}</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#007BFF' }}>
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <step.icon className="w-12 h-12 mx-auto mb-4" style={{ color: '#FFD700' }} />
                  <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#007BFF' }}>
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-700">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-1" style={{ backgroundColor: '#007BFF' }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            {t('step3Title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600766728170-d8f2ab8f6078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI0ODI3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Analytics report"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Your Detailed PDF Report Includes:' : 'تقريرك التفصيلي بصيغة PDF يتضمن:'}
              </h3>
              <ul className="space-y-4">
                {reportIncludes.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-2" style={{ borderColor: '#FFD700' }}>
                <p className="text-lg font-semibold" style={{ color: '#007BFF' }}>
                  {t('pdfReport')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            {language === 'en' ? 'Why Our Process Works' : 'لماذا تعمل عمليتنا'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl font-bold mb-4" style={{ color: '#FFD700' }}>500+</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'AI Tools' : 'أداة ذكاء اصطناعي'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'Working together to analyze every aspect of your store' 
                  : 'تعمل معًا لتحليل كل جانب من جوانب متجرك'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl font-bold mb-4" style={{ color: '#FFD700' }}>100%</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Data-Driven' : 'مدفوع بالبيانات'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'Every recommendation is backed by real data and AI analysis' 
                  : 'كل توصية مدعومة ببيانات حقيقية وتحليل الذكاء الاصطناعي'}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-5xl font-bold mb-4" style={{ color: '#FFD700' }}>24/7</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Deep Analysis' : 'تحليل عميق'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'Our AI works around the clock to uncover hidden opportunities' 
                  : 'يعمل ذكاؤنا الاصطناعي على مدار الساعة لاكتشاف الفرص المخفية'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready to Get Started?' : 'هل أنت مستعد للبدء؟'}
          </h2>
          <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 inline-block">
            <p className="text-xl mb-2">
              <span className="line-through text-red-500">{t('regularPrice')}: $250</span>
            </p>
            <p className="text-lg font-semibold text-red-600 mb-2">🔥 {t('discount')}</p>
            <p className="text-4xl font-bold" style={{ color: '#FFD700' }}>
              ✨ {t('yourPrice')} $100
            </p>
          </div>
          <div>
            <a
              href="/#request-form"
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#FFD700', color: '#000' }}
            >
              {t('orderNow')} 🚀
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
