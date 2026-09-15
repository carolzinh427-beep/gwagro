import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/machines';

export default function MobileWhatsAppBar() {
  const defaultWhatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a equipe da G.W AGRO.'
  )}`;

  return (
    <div className="mobile-whatsapp-bar">
      <a 
        href={defaultWhatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-whatsapp btn-block"
        style={{ padding: '0.75rem 1rem', fontSize: '0.875rem' }}
      >
        <MessageCircle size={18} />
        <span>Falar no WhatsApp (43) 9822-5104</span>
      </a>
    </div>
  );
}
