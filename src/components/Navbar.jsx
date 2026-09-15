import React, { useState } from 'react';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../data/machines';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultWhatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a equipe da G.W AGRO sobre máquinas e implementos.'
  )}`;

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo / Brand Name */}
          <a href="#" className="brand-logo" title="G.W AGRO - Página Inicial">
            <div className="brand-mark">GW</div>
            <div className="brand-text-wrapper">
              <span className="brand-name">G.W AGRO</span>
              <span className="brand-subtitle">Máquinas & Implementos</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links-desktop">
            <ul className="nav-links">
              <li><a href="#maquinas" className="nav-link">Máquinas</a></li>
              <li><a href="#implementos" className="nav-link">Implementos</a></li>
              <li><a href="#arrendamento" className="nav-link">Arrendamento</a></li>
              <li><a href="#sobre" className="nav-link">Sobre</a></li>
              <li><a href="#contato" className="nav-link">Contato</a></li>
            </ul>
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="header-actions">
            <a 
              href={defaultWhatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp header-cta-desktop"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <a href="#maquinas" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Máquinas</a>
            <a href="#implementos" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Implementos</a>
            <a href="#arrendamento" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Arrendamento Rural</a>
            <a href="#sobre" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Sobre</a>
            <a href="#contato" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contato</a>
            
            <a 
              href={defaultWhatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-block"
              style={{ marginTop: '0.5rem' }}
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
