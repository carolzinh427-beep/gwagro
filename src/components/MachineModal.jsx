import React, { useState } from 'react';
import { X, MessageCircle, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/machines';

export default function MachineModal({ machine, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!machine) return null;

  const whatsappMessage = `Olá! Tenho interesse na máquina ${machine.title} anunciada pela G.W AGRO. Gostaria de receber mais informações.`;
  const whatsappUrl = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Navigation Bar */}
        <div className="modal-header-bar">
          <div>
            <span className="badge-agro">{machine.category} • Cambé / PR</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-scroll-body">
          <div className="modal-grid">
            {/* Left Column: Image Gallery */}
            <div className="modal-gallery-col">
              <div className="gallery-main">
                <img 
                  src={machine.images[selectedImage] || machine.mainImage} 
                  alt={machine.title} 
                  className="gallery-main-img"
                />
              </div>

              {machine.images && machine.images.length > 1 && (
                <div className="gallery-thumbs">
                  {machine.images.map((img, index) => (
                    <button
                      key={index}
                      className={`gallery-thumb-btn ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`Visualização ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Security & Inspection Note */}
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--color-gray-50)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-200)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={24} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)' }}>
                  <strong style={{ color: 'var(--color-dark)' }}>Equipamento disponível em Cambé/PR:</strong> Agende sua visita técnica presencial ou solicite vídeos detalhados via WhatsApp.
                </div>
              </div>
            </div>

            {/* Right Column: Information & Actions */}
            <div className="modal-info-col">
              <h2 className="modal-machine-title">{machine.title}</h2>

              {/* Price Banner */}
              <div className="modal-price-box">
                <div>
                  <span className="price-label">Valor / Negociação</span>
                  <div className="price-value">{machine.price}</div>
                </div>
                <span className="badge-agro" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                  Sob Consulta
                </span>
              </div>

              {/* Quick Specs Grid */}
              <div className="specs-grid-full">
                <div className="spec-full-box">
                  <span className="spec-full-label">Marca</span>
                  <div className="spec-full-val">{machine.brand}</div>
                </div>
                <div className="spec-full-box">
                  <span className="spec-full-label">Modelo</span>
                  <div className="spec-full-val">{machine.model}</div>
                </div>
                <div className="spec-full-box">
                  <span className="spec-full-label">Ano de Fabricação</span>
                  <div className="spec-full-val">{machine.year}</div>
                </div>
                <div className="spec-full-box">
                  <span className="spec-full-label">Horas de Uso</span>
                  <div className="spec-full-val">{machine.hours}</div>
                </div>
                <div className="spec-full-box" style={{ gridColumn: 'span 2' }}>
                  <span className="spec-full-label">Localização</span>
                  <div className="spec-full-val">{machine.location}</div>
                </div>
              </div>

              {/* Description */}
              <div className="description-box">
                <h3 className="description-title">Descrição Completa</h3>
                <p className="description-text">{machine.description}</p>
              </div>

              {/* Highlights */}
              {machine.highlights && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="description-title">Destaques da Máquina</h3>
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {machine.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-dark)', fontWeight: '600' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Primary Action Button */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                  style={{ padding: '1rem 1.5rem', fontSize: '1rem' }}
                >
                  <MessageCircle size={22} />
                  <span>Tenho interesse</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
