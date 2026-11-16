import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router';
import { Mail, Facebook } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleOrderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('request-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFD700' }}>
              {t('heroTitle')}
            </h3>
            <p className="text-gray-300">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#FFD700' }}>
              {t('contact')}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">WhatsApp: +967 773 121 674</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:mohammedalhag190@gmail.com" className="text-gray-300 hover:text-white">
                  mohammedalhag190@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4" />
                <a 
                  href="https://www.facebook.com/profile.php?id=61580401653853" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#FFD700' }}>
              {t('exclusiveOffer')}
            </h4>
            <p className="text-gray-300 mb-4">
              {t('exclusiveFooter')}
            </p>
            <button
              onClick={handleOrderClick}
              className="inline-block px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: '#FFD700', color: '#000' }}
            >
              {t('orderNow')}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 mb-4">
            {t('footerMessage')}
          </p>
          <p className="text-center text-gray-500 text-sm">
            © 2026 {t('heroTitle')} – {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}