import React from 'react';
import { MessageCircle, MapPin, Instagram, Phone, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/machines';

export default function Contact() {
  const whatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Gostaria de entrar em contato com a G.W AGRO.'
  )}`;

  return (
    <section id="contato" className="section-padding contact-section">
      <div className="container">
        <div className="contact-card-box">
          {/* Left info */}
          <div>
            <span className="badge-agro" style={{ marginBottom: '1rem' }}>Atendimento Direto</span>
            <h2 className="section-title">Fale com a G.W AGRO</h2>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '1.0625rem', marginTop: '0.5rem' }}>
              Entre em contato direto pelo WhatsApp ou acesse nosso perfil no Instagram para acompanhar novidades e novos equipamentos.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-600)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Localização</span>
                  <span>Cambé - PR</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', color: 'var(--color-whatsapp)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-600)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>WhatsApp</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-dark)' }}>
                    (43) 9822-5104
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ backgroundColor: 'rgba(225, 48, 108, 0.1)', color: '#e1306c' }}>
                  <Instagram size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-600)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Instagram</span>
                  <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-dark)' }}>
                    @g.w_agro
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div style={{ backgroundColor: 'var(--color-gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '1rem' }}>
              Procurando uma máquina específica?
            </h3>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9375rem', marginBottom: '2rem' }}>
              Caso não encontre a máquina que precisa em nosso estoque online, consulte nossa equipe via WhatsApp. Buscamos a melhor oportunidade para você.
            </p>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-block"
              style={{ padding: '1.1rem 1.75rem', fontSize: '1rem' }}
            >
              <MessageCircle size={22} />
              <span>Falar com a G.W AGRO</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
