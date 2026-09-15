import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import MachineCard from './MachineCard';
import { MACHINES, CATEGORIES } from '../data/machines';

export default function Inventory({ onSelectMachine }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter machines based on category and search query
  const filteredMachines = MACHINES.filter((machine) => {
    const matchesCategory =
      activeCategory === 'Todos' ||
      machine.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      machine.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      machine.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="maquinas" className="section-padding inventory-section">
      <div className="container">
        {/* Section Title Header */}
        <div className="section-header">
          <span className="badge-agro" style={{ marginBottom: '0.75rem' }}>Estoque em Cambé / PR</span>
          <h2 className="section-title">Máquinas disponíveis</h2>
          <p className="section-subtitle">Encontre o equipamento ideal para sua operação.</p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="filter-bar">
          {/* Category Pill Buttons */}
          <div className="category-pills" id="implementos">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`pill-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar por marca, modelo ou tipo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Machine Cards Grid */}
        {filteredMachines.length > 0 ? (
          <div className="machines-grid">
            {filteredMachines.map((machine) => (
              <MachineCard
                key={machine.id}
                machine={machine}
                onSelect={onSelectMachine}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--color-gray-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-gray-200)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Nenhum equipamento encontrado</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>Tente alterar a categoria ou o termo de busca.</p>
            <button
              onClick={() => { setActiveCategory('Todos'); setSearchQuery(''); }}
              className="btn btn-outline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
