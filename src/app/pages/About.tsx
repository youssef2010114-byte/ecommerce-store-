import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Target, Zap } from 'lucide-react';

export function About() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about')}</h1>
          <p className="text-xl">{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}>
                    <Award className="w-10 h-10" style={{ color: '#007BFF' }} />
                  </div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: '#007BFF' }}>
                    👤 {t('aboutTitle')}
                  </h2>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFD700' }}>
                    {t('founderName')}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {t('founderTitle')}
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGFuYWx5c2lzfGVufDF8fHx8MTc3MjQ4Mjc3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                <p className="text-lg leading-relaxed">
                  {t('aboutDescription1')}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#007BFF' }} />
                <p className="text-lg leading-relaxed">
                  {t('aboutDescription2')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-xl border-2" style={{ borderColor: '#FFD700' }}>
              <p className="text-lg leading-relaxed mb-4">
                {t('aboutDescription3')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-lg leading-relaxed">
                {t('aboutDescription4')}
              </p>
            </div>
          </div>

          {/* Expertise Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold mb-2" style={{ color: '#007BFF' }}>500+</div>
              <p className="text-gray-700">{language === 'en' ? 'AI Tools' : 'أداة ذكاء اصطناعي'}</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FFD700' }}>18+</div>
              <p className="text-gray-700">{language === 'en' ? 'Months Research' : 'شهر بحث'}</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold mb-2" style={{ color: '#007BFF' }}>100%</div>
              <p className="text-gray-700">{language === 'en' ? 'AI-Powered' : 'مدعوم بالذكاء الاصطناعي'}</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'en' 
                ? 'Ready to Transform Your E-commerce Business?' 
                : 'هل أنت مستعد لتحويل أعمال التجارة الإلكترونية الخاصة بك؟'}
            </h3>
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
