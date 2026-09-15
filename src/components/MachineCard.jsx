import React from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function MachineCard({ machine, onSelect }) {
  return (
    <article className="machine-card">
      <div className="card-media">
        <img 
          src={machine.mainImage} 
          alt={machine.title} 
          className="card-image"
          loading="lazy"
        />
        <span className="card-badge-status">{machine.status || 'Disponível'}</span>
        <span className="card-badge-category">{machine.category}</span>
      </div>

      <div className="card-content">
        <div className="card-brand-year">
          <span>{machine.brand}</span>
          <span>{machine.year}</span>
        </div>

        <h3 className="card-title">{machine.title}</h3>

        <div className="card-specs-summary">
          <div className="spec-item">
            <Calendar className="spec-icon" />
            <span>Ano: <strong className="spec-value">{machine.year}</strong></span>
          </div>
          <div className="spec-item">
            <Clock className="spec-icon" />
            <span>Horas: <strong className="spec-value">{machine.hours}</strong></span>
          </div>
          <div className="spec-item" style={{ gridColumn: 'span 2' }}>
            <MapPin className="spec-icon" />
            <span>Local: <strong className="spec-value">{machine.location}</strong></span>
          </div>
        </div>

        <div className="card-footer">
          <div>
            <span className="card-price-label">Preço</span>
            <span className="card-price-val">{machine.price}</span>
          </div>

          <button 
            onClick={() => onSelect(machine)}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.8125rem' }}
          >
            <span>Ver detalhes</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
