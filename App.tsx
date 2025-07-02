import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-background text-on-background font-sans antialiased overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <HowItWorks />
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Features />
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
         <Testimonials />
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Pricing onOpenModal={handleOpenModal} />
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <FAQ />
        </div>
      </main>
      <Footer />
      <PilotModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;