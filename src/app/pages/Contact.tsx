import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MessageCircle, Facebook, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Contact() {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    const message = language === 'en'
      ? 'Hello! I would like to get more information about your services.'
      : 'مرحباً! أريد الحصول على مزيد من المعلومات حول خدماتكم.';
    const whatsappUrl = `https://wa.me/967773121674?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📞 {t('contactUs')}
          </h1>
          <p className="text-xl">
            {language === 'en' 
              ? 'Get in touch with us - We\'re here to help!' 
              : 'تواصل معنا - نحن هنا للمساعدة!'}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
              </h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#25D366' }}>
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>WhatsApp</h3>
                      <p className="text-lg text-gray-700 mb-3">+967 773 121 674</p>
                      <button
                        onClick={handleWhatsApp}
                        className="px-6 py-2 rounded-lg font-semibold transition-transform hover:scale-105"
                        style={{ backgroundColor: '#25D366', color: 'white' }}
                      >
                        {t('messageWhatsApp')}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#007BFF' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                        {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                      </h3>
                      <a 
                        href="mailto:mohammedalhag190@gmail.com"
                        className="text-lg text-gray-700 hover:underline"
                      >
                        mohammedalhag190@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#1877F2' }}>
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>Facebook</h3>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61580401653853"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-700 hover:underline"
                      >
                        {language === 'en' ? 'Visit our Facebook page' : 'زيارة صفحتنا على فيسبوك'}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: '#FFD700' }}>
                      <Phone className="w-6 h-6 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#007BFF' }}>
                        {language === 'en' ? 'Phone' : 'الهاتف'}
                      </h3>
                      <p className="text-lg text-gray-700">+967 773 121 674</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image & CTA */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600766728170-d8f2ab8f6078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI0ODI3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Contact us"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#007BFF' }}>
                    {language === 'en' ? 'Ready to Transform Your Store?' : 'هل أنت مستعد لتحويل متجرك؟'}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    {language === 'en' 
                      ? 'Contact us today and get a comprehensive AI-powered analysis of your e-commerce store.' 
                      : 'اتصل بنا اليوم واحصل على تحليل شامل مدعوم بالذكاء الاصطناعي لمتجر التجارة الإلكترونية الخاص بك.'}
                  </p>
                  <a
                    href="/#request-form"
                    className="inline-block w-full text-center px-6 py-3 rounded-lg font-bold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#FFD700', color: '#000' }}
                  >
                    {t('orderNow')}
                  </a>
                </div>
              </div>

              {/* Special Offer Box */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎁 {t('exclusiveOffer')}</h3>
                  <p className="text-lg mb-4">
                    <span className="line-through text-red-300">{t('regularPrice')}: $250</span>
                  </p>
                  <p className="text-lg font-semibold mb-2 text-red-300">
                    🔥 {t('discount')}
                  </p>
                  <p className="text-4xl font-bold mb-4" style={{ color: '#FFD700' }}>
                    ✨ {t('yourPrice')} $100
                  </p>
                  <p className="text-sm italic">
                    {t('limitedOffer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#007BFF' }}>
            {language === 'en' ? 'Why Contact Us?' : 'لماذا تتصل بنا؟'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                <MessageCircle className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Quick Response' : 'استجابة سريعة'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'We respond to all inquiries within 24 hours' 
                  : 'نرد على جميع الاستفسارات خلال 24 ساعة'}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
                <Phone className="w-8 h-8" style={{ color: '#FFD700' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Multiple Channels' : 'قنوات متعددة'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'Reach us via WhatsApp, email, or Facebook' 
                  : 'تواصل معنا عبر واتساب أو البريد الإلكتروني أو فيسبوك'}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                <Mail className="w-8 h-8" style={{ color: '#007BFF' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#007BFF' }}>
                {language === 'en' ? 'Personal Support' : 'دعم شخصي'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'Direct communication with the founder' 
                  : 'تواصل مباشر مع المؤسس'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
