import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Page Not Found' : 'الصفحة غير موجودة'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'en' 
              ? 'Sorry, the page you are looking for does not exist.' 
              : 'عذراً، الصفحة التي تبحث عنها غير موجودة.'}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: '#FFD700', color: '#000' }}
          >
            <Home className="w-5 h-5" />
            <span>{language === 'en' ? 'Back to Home' : 'العودة للرئيسية'}</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105 bg-white text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'en' ? 'Go Back' : 'رجوع'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
