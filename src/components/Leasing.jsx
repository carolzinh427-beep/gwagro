import React from 'react';
import { MessageCircle, Sprout, MapPin, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, LEASING_OPPORTUNITIES } from '../data/machines';

export default function Leasing() {
  const leasingWhatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Olá! Tenho interesse em obter mais informações sobre as Oportunidades de Arrendamento Rural divulgadas pela G.W AGRO.'
  )}`;

  return (
    <section id="arrendamento" className="section-padding leasing-section">
      <div className="container">
        <div className="leasing-grid">
          {/* Left Text */}
          <div className="leasing-content">
            <span className="badge-agro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>
              Divulgação & Intermediação Rural
            </span>

            <h2 className="section-title">Oportunidades de arrendamento rural</h2>

            <p className="section-subtitle">
              Além da compra e venda de máquinas e implementos agrícolas, a G.W AGRO divulga e conecta proprietários rurais e produtores a excelentes oportunidades de arrendamento de terras na região norte do Paraná.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--color-whatsapp)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#fff', display: 'block' }}>Avaliação e Seleção de Áreas</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-400)' }}>Áreas rurais verificadas quanto à aptidão agrícola, topografia e logística.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--color-whatsapp)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#fff', display: 'block' }}>Negociação Direta e Transparente</strong>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-400)' }}>Intermediação com sigilo, seriedade e agilidade para ambas as partes.</span>
                </div>
              </div>
            </div>

            <a 
              href={leasingWhatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Quero saber mais</span>
            </a>
          </div>

          {/* Right Card / Highlight Opportunity */}
          <div className="leasing-card-wrapper">
            {LEASING_OPPORTUNITIES.map((item) => (
              <div key={item.id} className="leasing-card">
                <span className="leasing-badge">{item.status}</span>
                <h3 className="leasing-card-title">{item.title}</h3>

                <ul className="leasing-details-list">
                  <li>
                    <MapPin size={16} style={{ color: 'var(--color-whatsapp)' }} />
                    <span>Região: <strong>{item.location}</strong></span>
                  </li>
                  <li>
                    <Sprout size={16} style={{ color: 'var(--color-whatsapp)' }} />
                    <span>Aptidão: <strong>{item.aptitude}</strong></span>
                  </li>
                  <li>
                    <span>Área / Hectares: <strong>{item.hectares}</strong></span>
                  </li>
                </ul>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-300)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  {item.description}
                </p>

                <a 
                  href={leasingWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: '#ffffff', color: 'var(--color-dark)', borderColor: '#ffffff' }}
                >
                  Consultar Disponibilidade
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
