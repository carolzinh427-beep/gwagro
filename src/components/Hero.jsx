import React from 'react';
import { MessageCircle, ChevronRight, ShieldCheck, MapPin, Award } from 'lucide-react';
import { CONTACT_INFO, MACHINES } from '../data/machines';

export default function Hero() {
  const featuredMachine = MACHINES[0];

  const defaultWhatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Vim pelo site da G.W AGRO e gostaria de consultar as máquinas disponíveis.'
  )}`;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="hero-badge">
              <MapPin size={14} />
              <span>Cambé - Paraná | Revenda & Negócios Agrícolas</span>
            </div>

            <h1 className="hero-headline">
              Máquinas que movem o campo.
            </h1>

            <p className="hero-subtext">
              Máquinas e implementos agrícolas selecionados para quem busca produtividade, desempenho e confiança no campo.
            </p>

            <div className="hero-ctas">
              <a href="#maquinas" className="btn btn-primary">
                <span>Ver máquinas disponíveis</span>
                <ChevronRight size={18} />
              </a>

              <a 
                href={defaultWhatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Trust Indicators Bar */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-number">CAMBÉ / PR</span>
                <span className="trust-label">Localização Estratégica</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">SELECIONADOS</span>
                <span className="trust-label">Equipamentos Revisados</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">DIRETO</span>
                <span className="trust-label">Atendimento WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src={featuredMachine.mainImage} 
                alt={featuredMachine.title} 
                className="hero-image"
              />
              <div className="hero-image-tag">
                <div>
                  <div className="hero-tag-title">{featuredMachine.title}</div>
                  <div className="hero-tag-sub">{featuredMachine.brand} • Ano {featuredMachine.year} • {featuredMachine.hours}</div>
                </div>
                <a href="#maquinas" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                  Ver Estoque
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
