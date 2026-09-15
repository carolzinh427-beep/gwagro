import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import MachineModal from './components/MachineModal';
import Leasing from './components/Leasing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileWhatsAppBar from './components/MobileWhatsAppBar';

export default function App() {
  const [selectedMachine, setSelectedMachine] = useState(null);

  return (
    <div className="app-container">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Main Content Areas */}
      <main>
        {/* Hero Banner */}
        <Hero />

        {/* Machinery Stock / Vitrine Inventory */}
        <Inventory onSelectMachine={(machine) => setSelectedMachine(machine)} />

        {/* Rural Leasing Opportunities */}
        <Leasing />

        {/* Institutional About */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Discrete Sticky Mobile WhatsApp CTA */}
      <MobileWhatsAppBar />

      {/* Machine Details Overlay / Modal */}
      {selectedMachine && (
        <MachineModal 
          machine={selectedMachine} 
          onClose={() => setSelectedMachine(null)} 
        />
      )}
    </div>
  );
}
