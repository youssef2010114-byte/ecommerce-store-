import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappNumber = '+967773121674';
  const message = 'Hello! I would like to request an analysis for my store.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
