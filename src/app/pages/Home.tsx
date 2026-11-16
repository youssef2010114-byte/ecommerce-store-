import { useLanguage } from '../context/LanguageContext';
import { Search, Zap, Target, TrendingUp, CheckCircle, FileText, Users, Gift, Award, ShoppingCart, Package } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    storeName: '',
    storeUrl: '',
    storeType: '',
    description: '',
    challenge: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least store name is provided
    if (!formData.storeName.trim()) {
      alert(language === 'en' 
        ? 'Please enter your store name' 
        : 'الرجاء إدخال اسم المتجر');
      return;
    }

    // Format the message for WhatsApp with all form data
    const messageLines = [
      language === 'en' 
        ? '🔥 *NEW ANALYSIS REQUEST* 🔥' 
        : '🔥 *طلب تحليل جديد* 🔥',
      '',
      language === 'en' ? '📊 *Store Information:*' : '📊 *معلومات المتجر:*',
      `${language === 'en' ? '🏪 Store Name:' : '🏪 اسم المتجر:'} ${formData.storeName}`,
    ];

    if (formData.storeUrl.trim()) {
      messageLines.push(`${language === 'en' ? '🔗 Store URL:' : '🔗 رابط المتجر:'} ${formData.storeUrl}`);
    }

    if (formData.storeType.trim()) {
      messageLines.push(`${language === 'en' ? '📦 Store Type:' : '📦 نوع المتجر:'} ${formData.storeType}`);
    }

    if (formData.description.trim()) {
      messageLines.push('');
      messageLines.push(language === 'en' ? '📝 *Description:*' : '📝 *الوصف:*');
      messageLines.push(formData.description);
    }

    if (formData.challenge.trim()) {
      messageLines.push('');
      messageLines.push(language === 'en' ? '⚠️ *Main Challenge:*' : '⚠️ *التحدي الرئيسي:*');
      messageLines.push(formData.challenge);
    }

    messageLines.push('');
    messageLines.push(language === 'en' 
      ? '✅ Ready to receive the analysis!' 
      : '✅ جاهز لاستلام التحليل!');

    const message = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/967773121674?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert(language === 'en' 
      ? 'WhatsApp will open with your request. Please click SEND to complete your order!' 
      : 'سيتم فتح واتساب مع طلبك. الرجاء الضغط على إرسال لإتمام الطلب!');
    
    // Clear the form
    setFormData({
      storeName: '',
      storeUrl: '',
      storeType: '',
      description: '',
      challenge: ''
    });
  };

  const handleWhatsApp = () => {
    const message = language === 'en'
      ? 'Hello! I would like to request an analysis for my store.'
      : 'مرحباً! أريد طلب تحليل لمتجري.';
    const whatsappUrl = `https://wa.me/967773121674?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const trustedStores = [
    { name: 'Amazon', desc: language === 'en' ? 'Global Marketplace Giant' : 'عملاق السوق العالمي' },
    { name: 'Samsung', desc: language === 'en' ? 'Technology Leader' : 'رائد التكنولوجيا' },
    { name: 'Nike', desc: language === 'en' ? 'Sports Icon' : 'أيقونة الرياضة' },
    { name: 'Walmart', desc: language === 'en' ? 'Retail Giant' : 'عملاق التجزئة' },
    { name: 'Target', desc: language === 'en' ? 'Strong Competitor' : 'منافس قوي' },
    { name: 'eBay', desc: language === 'en' ? 'Global Marketplace' : 'سوق عالمي' },
    { name: 'Shopify', desc: language === 'en' ? 'E-commerce Platform' : 'منصة تجارة إلكترونية' },
    { name: 'Etsy', desc: language === 'en' ? 'Handmade Marketplace' : 'سوق المنتجات اليدوية' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1592773307163-962d25055c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjQ4Mjc3OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
              <Zap className="w-5 h-5" style={{ color: '#FFD700' }} />
              <span className="font-semibold" style={{ color: '#FFD700' }}>{t('heroSubtitle')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🚀 {t('heroTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('heroDescription')}
            </p>

            {/* Special Offer Banner */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 mr-3" style={{ color: '#FFD700' }} />
                <h3 className="text-2xl font-bold" style={{ color: '#007BFF' }}>
                  🎁 {t('exclusiveOffer')}
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="text-gray-600">{t('regularPrice')}:</span>{' '}
                  <span className="line-through text-red-500 font-bold text-2xl">$250</span>
                </p>
                <p className="text-lg font-semibold text-red-600">
                  🔥 {t('discount')}
                </p>
                <p className="text-3xl font-bold" style={{ color: '#FFD700' }}>
                  ✨ {t('yourPrice')} $100
                </p>
                <p className="text-sm text-gray-600 italic">
                  {t('limitedOffer')}
                </p>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#FFD700', color: '#000' }}
            >
              {t('orderNow')} 💫
            </button>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            🔍 {t('whyDifferentTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Search className="w-12 h-12 mb-4" style={{ color: '#007BFF' }} />
              <p className="text-lg">{t('hiddenOpportunities')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="w-12 h-12 mb-4" style={{ color: '#007BFF' }} />
              <p className="text-lg">{t('competitiveWeaknesses')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#007BFF' }} />
              <p className="text-lg">{t('lostConversion')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="w-12 h-12 mb-4" style={{ color: '#007BFF' }} />
              <p className="text-lg">{t('purchasePatterns')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Advantage */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            ✅ {t('uniqueAdvantageTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                <Award className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <p className="text-lg">{t('fusionTools')}</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                <Search className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <p className="text-lg">{t('detectHidden')}</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                <Zap className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <p className="text-lg">{t('outperformHuman')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#007BFF' }}>
            📊 {t('whatWeOfferTitle')}
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc3MjQ3OTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Business analytics"
              className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, text: t('speedAnalysis') },
              { icon: Search, text: t('weaknesses') },
              { icon: Zap, text: t('aiRecommendations') },
              { icon: CheckCircle, text: t('strengths') },
              { icon: Target, text: t('untappedOpportunities') },
              { icon: Users, text: t('competitorAnalysis') },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow">
                <item.icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#FFD700' }} />
              <p className="text-lg">{t('pdfReport')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Stores */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            🌍 {t('trustedStoresTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {trustedStores.map((store, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                  <ShoppingCart className="w-8 h-8" style={{ color: '#007BFF' }} />
                </div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#007BFF' }}>✅ {store.name}</h3>
                <p className="text-sm text-gray-600">{store.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/samples"
              className="inline-block px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: '#007BFF', color: 'white' }}
            >
              {t('viewSamples')}
            </a>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            📝 {t('requestFormTitle')}
          </h2>
          <div className="text-center mb-8">
            <p className="text-xl mb-4">
              <span className="line-through text-red-300">{t('regularPrice')}: $250</span>
            </p>
            <p className="text-3xl font-bold mb-2" style={{ color: '#FFD700' }}>
              {t('discount')} - {t('yourPrice')} $100
            </p>
          </div>
          <p className="text-center text-lg mb-8">{t('fillForm')}</p>
          
          <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">{t('storeName')}:</label>
                <input
                  type="text"
                  required
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">{t('storeUrl')}:</label>
                <input
                  type="url"
                  required
                  value={formData.storeUrl}
                  onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">{t('storeType')}:</label>
                <select
                  required
                  value={formData.storeType}
                  onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- {language === 'en' ? 'Select' : 'اختر'} --</option>
                  <option value="Shopify">Shopify</option>
                  <option value="WooCommerce">WooCommerce</option>
                  <option value="Etsy">Etsy</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Other">{language === 'en' ? 'Other' : 'آخر'}</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">{t('briefDescription')}:</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">{t('biggestChallenge')}:</label>
                <textarea
                  required
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: '#FFD700', color: '#000' }}
              >
                {t('submitRequest')}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#007BFF' }}>
            📞 {t('contactUs')}
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="space-y-4 text-lg">
              <p><strong>WhatsApp:</strong> +967 773 121 674</p>
              <p><strong>Email:</strong> mohammedalhag190@gmail.com</p>
              <p><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61580401653853" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit our page</a></p>
            </div>
          </div>
          <button
            onClick={handleWhatsApp}
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: '#25D366', color: 'white' }}
          >
            {t('messageWhatsApp')} 💬
          </button>
        </div>
      </section>

      {/* Partnership Offer */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#007BFF' }}>
            🤝 {t('partnershipTitle')}
          </h2>
          <p className="text-xl text-center mb-12 text-gray-700">
            {t('partnershipSubtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>
                {t('whatYouGet')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <span className="text-lg">{t('commission')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <span className="text-lg">{t('whiteLabel')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                  <span className="text-lg">{t('freeAnalysis')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjM3MDA2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                {t('targetClients')}
              </h4>
              <p className="text-gray-700 mb-4">{t('evenThriving')}</p>
              <p className="text-lg font-semibold" style={{ color: '#FFD700' }}>
                📞 {t('exceptionalOffer')}
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleWhatsApp}
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#007BFF', color: 'white' }}
            >
              {t('contactPartnership')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}