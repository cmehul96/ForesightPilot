import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-container/80 backdrop-blur-lg border-b border-outline/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-display font-bold text-on-background">Foresight</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-on-surface-variant hover:text-primary transition-colors">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="text-on-surface-variant hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-on-surface-variant hover:text-primary transition-colors">FAQ</button>
          </nav>
          <button 
            onClick={onOpenModal}
            className="hidden md:block bg-primary text-on-primary font-bold py-2 px-6 rounded-full hover:opacity-90 transition-all transform hover:scale-105"
          >
            Start Pilot Study
          </button>
        </div>
      </div>
    </header>
  );
};