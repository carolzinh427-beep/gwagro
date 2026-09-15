import React from 'react';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/machines';

export default function Footer() {
  const whatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Vim pelo site da G.W AGRO.'
  )}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-mark">GW</div>
              <div className="brand-text-wrapper">
                <span className="brand-name">G.W AGRO</span>
                <span className="brand-subtitle" style={{ color: 'var(--color-gray-400)' }}>Máquinas & Implementos</span>
              </div>
            </div>
            <p className="footer-text">
              Máquinas e implementos agrícolas selecionados para quem busca produtividade, desempenho e confiança no campo.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-heading">Navegação</h4>
            <ul className="footer-links">
              <li><a href="#maquinas" className="footer-link">Máquinas</a></li>
              <li><a href="#implementos" className="footer-link">Implementos</a></li>
              <li><a href="#arrendamento" className="footer-link">Arrendamento Rural</a></li>
              <li><a href="#sobre" className="footer-link">Sobre</a></li>
              <li><a href="#contato" className="footer-link">Contato</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="footer-heading">Categorias</h4>
            <ul className="footer-links">
              <li><a href="#maquinas" className="footer-link">Tratores</a></li>
              <li><a href="#maquinas" className="footer-link">Colheitadeiras</a></li>
              <li><a href="#maquinas" className="footer-link">Plantadeiras</a></li>
              <li><a href="#maquinas" className="footer-link">Pulverizadores</a></li>
              <li><a href="#maquinas" className="footer-link">Implementos</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="footer-heading">Contato</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span>Cambé - PR</span>
              </li>
              <li>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-whatsapp)' }}
                >
                  <MessageCircle size={16} />
                  <span>(43) 9822-5104</span>
                </a>
              </li>
              <li>
                <a 
                  href={CONTACT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Instagram size={16} />
                  <span>@g.w_agro</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} G.W AGRO - Todos os direitos reservados. Cambé / PR.
          </div>
          <div style={{ color: 'var(--color-gray-400)' }}>
            Máquinas e Implementos Agrícolas & Arrendamento Rural
          </div>
        </div>
      </div>
    </footer>
  );
}
