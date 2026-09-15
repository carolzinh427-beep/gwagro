import React from 'react';
import { Award, CheckCircle2, ShieldAlert, Wrench, Compass, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Text Column */}
          <div className="about-content">
            <span className="badge-agro" style={{ marginBottom: '0.75rem' }}>Tradição e Foco em Resultados</span>
            <h2 className="section-title">Experiência e oportunidade no campo.</h2>

            <p className="section-subtitle" style={{ marginTop: '1rem', lineHeight: '1.7' }}>
              Com sede em <strong>Cambé - PR</strong>, a <strong>G.W AGRO</strong> atua no mercado de <strong>máquinas e implementos agrícolas</strong> com o compromisso de entregar oportunidades reais para o produtor rural.
            </p>

            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem', fontSize: '0.9375rem', lineHeight: '1.7' }}>
              Entendemos que cada operação exige alta <strong>produtividade</strong>, robustez e equipamentos prontos para o trabalho pesado. Por isso, selecionamos tratores, colheitadeiras, pulverizadores e implementos com transparência total na <strong>negociação</strong> e agilidade no <strong>atendimento</strong>.
            </p>

            {/* Bullets Grid */}
            <div className="about-bullets">
              <div className="about-bullet-box">
                <Wrench className="bullet-icon" />
                <h4 className="bullet-title">Máquinas & Implementos</h4>
                <p className="bullet-desc">Equipamentos inspecionados com foco no rendimento operacional.</p>
              </div>

              <div className="about-bullet-box">
                <Compass className="bullet-icon" />
                <h4 className="bullet-title">Foco em Produtividade</h4>
                <p className="bullet-desc">Soluções que maximizam o desempenho do plantio à colheita.</p>
              </div>

              <div className="about-bullet-box">
                <Award className="bullet-icon" />
                <h4 className="bullet-title">Negociação Transparente</h4>
                <p className="bullet-desc">Condições claras e atendimento direto com quem entende do negócio.</p>
              </div>

              <div className="about-bullet-box">
                <Building2 className="bullet-icon" />
                <h4 className="bullet-title">Sede em Cambé / PR</h4>
                <p className="bullet-desc">Localização estratégica para atender todo o Paraná e regiões agrícolas.</p>
              </div>
            </div>
          </div>

          {/* Image Stack Column */}
          <div className="about-image-stack">
            <img 
              src="/images/maquina-1.jpg" 
              alt="G.W AGRO Máquinas Agrícolas em Cambé PR" 
              className="about-img-main"
            />
            <div className="about-location-tag">
              <Building2 size={32} />
              <div>
                <strong style={{ fontSize: '1.1rem', display: 'block' }}>G.W AGRO</strong>
                <span style={{ fontSize: '0.8125rem', opacity: 0.9 }}>Cambé • Paraná</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
