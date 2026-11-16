import { useLanguage } from '../context/LanguageContext';
import { Facebook, ExternalLink, Gift } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';

export function SampleAnalyses() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = language === 'en'
      ? 'Hello! I would like to see sample analyses for stores like Samsung, Nike, or Amazon.'
      : 'مرحباً! أريد رؤية نماذج تحليل لمتاجر مثل سامسونج أو نايكي أو أمازون.';
    const whatsappUrl = `https://wa.me/967773121674?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOrderClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('request-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const sampleStores = [
    { name: 'Amazon', category: language === 'en' ? 'E-commerce Giant' : 'عملاق التجارة الإلكترونية' },
    { name: 'Samsung', category: language === 'en' ? 'Technology Leader' : 'رائد التكنولوجيا' },
    { name: 'Nike', category: language === 'en' ? 'Sports & Lifestyle' : 'الرياضة وأسلوب الحياة' },
    { name: 'Walmart', category: language === 'en' ? 'Retail Chain' : 'سلسلة التجزئة' },
    { name: 'Target', category: language === 'en' ? 'Department Store' : 'متجر متعدد الأقسام' },
    { name: 'eBay', category: language === 'en' ? 'Online Marketplace' : 'السوق عبر الإنترنت' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📂 {t('samplesTitle')}
          </h1>
          <p className="text-xl">{t('samplesDescription')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Facebook Link Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Facebook className="w-12 h-12" style={{ color: '#1877F2' }} />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#007BFF' }}>
              {language === 'en' ? 'View Our Sample Analyses' : 'عرض نماذج تحليلاتنا'}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('samplesDescription')}
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61580401653853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#1877F2', color: 'white' }}
            >
              <span>{t('visitFacebook')}</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Sample Stores Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#007BFF' }}>
              {language === 'en' ? 'Stores We\'ve Analyzed' : 'المتاجر التي قمنا بتحليلها'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleStores.map((store, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                    <span className="text-2xl">✅</span>
                  </div>
                  <h4 className="text-xl font-bold text-center mb-2" style={{ color: '#007BFF' }}>
                    {store.name}
                  </h4>
                  <p className="text-center text-gray-600">{store.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2" style={{ borderColor: '#007BFF' }}>
              <div className="flex items-center mb-4">
                <Gift className="w-8 h-8 mr-3" style={{ color: '#007BFF' }} />
                <h3 className="text-xl font-bold" style={{ color: '#007BFF' }}>
                  {language === 'en' ? 'Request Sample Reports' : 'طلب تقارير نموذجية'}
                </h3>
              </div>
              <p className="text-lg mb-6 text-gray-700">
                {t('samplesOffer1')}
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: '#007BFF', color: 'white' }}
              >
                {language === 'en' ? 'Request Samples' : 'طلب النماذج'}
              </button>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg border-2" style={{ borderColor: '#FFD700' }}>
              <div className="flex items-center mb-4">
                <Gift className="w-8 h-8 mr-3" style={{ color: '#FFD700' }} />
                <h3 className="text-xl font-bold" style={{ color: '#007BFF' }}>
                  {language === 'en' ? 'Free Analysis Offer' : 'عرض التحليل المجاني'}
                </h3>
              </div>
              <p className="text-lg mb-6 text-gray-700">
                {t('samplesOffer2')}
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: '#FFD700', color: '#000' }}
              >
                {language === 'en' ? 'Get Free Analysis' : 'احصل على تحليل مجاني'}
              </button>
            </div>
          </div>

          {/* Visual Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzcyNDM0Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital marketing"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#007BFF' }}>
                  {language === 'en' ? 'Why View Our Samples?' : 'لماذا تشاهد نماذجنا؟'}
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: '#007BFF' }}>✓</span>
                    <span>{language === 'en' ? 'See the depth of our analysis' : 'انظر عمق تحليلنا'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: '#007BFF' }}>✓</span>
                    <span>{language === 'en' ? 'Understand the value you\'ll receive' : 'افهم القيمة التي ستحصل عليها'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: '#007BFF' }}>✓</span>
                    <span>{language === 'en' ? 'Learn from global brand analyses' : 'تعلم من تحليلات العلامات التجارية العالمية'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: '#007BFF' }}>✓</span>
                    <span>{language === 'en' ? 'Discover what AI can find' : 'اكتشف ما يمكن أن يجده الذكاء الاصطناعي'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready for Your Own Analysis?' : 'هل أنت مستعد للحصول على تحليلك الخاص؟'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'en' 
              ? 'Get the same comprehensive analysis for your store at an exclusive price' 
              : 'احصل على نفس التحليل الشامل لمتجرك بسعر حصري'}
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-6 mb-8 inline-block">
            <p className="text-lg mb-2">
              <span className="line-through text-red-500">{t('regularPrice')}: $250</span>
            </p>
            <p className="text-3xl font-bold" style={{ color: '#FFD700' }}>
              {t('yourPrice')} $100
            </p>
          </div>
          <div>
            <a
              href="/#request-form"
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#FFD700', color: '#000' }}
            >
              {t('orderNow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}