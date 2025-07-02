import React from 'react';
import { MotifSpeechBubbleIcon } from './icons/MotifSpeechBubbleIcon';
import { MotifPersonIcon } from './icons/MotifPersonIcon';
import { MotifChartIcon } from './icons/MotifChartIcon';
import { MotifSearchIcon } from './icons/MotifSearchIcon';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-28 md:py-40 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[80%]">
          <div className="w-[600px] h-[600px] bg-accent/10 rounded-full filter blur-3xl opacity-40"></div>
        </div>
         <div className="absolute top-1/2 left-1/2 translate-x-[30%] translate-y-[40%]">
          <div className="w-[500px] h-[500px] bg-secondary-container/20 rounded-full filter blur-3xl opacity-50"></div>
        </div>
        
        <MotifSpeechBubbleIcon className="absolute top-[20%] left-[15%] w-16 h-16 text-primary/10 animate-float" style={{ animationDuration: '8s' }} />
        <MotifPersonIcon className="absolute top-[30%] right-[10%] w-20 h-20 text-primary/10 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <MotifChartIcon className="absolute bottom-[25%] left-[25%] w-14 h-14 text-primary/10 animate-float" style={{ animationDuration: '9s' }} />
        <MotifSearchIcon className="absolute bottom-[20%] right-[20%] w-12 h-12 text-primary/10 animate-float" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-tight mb-6">
            Stop guessing, start knowing.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10">
            Foresight gives you the qualitative data you need to build products with confidence. Supervised by senior experts, delivered in days.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={onOpenModal}
              className="bg-primary text-on-primary font-bold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Start Your $100 Pilot Study
            </button>
          </div>
        </div>
      </div>

       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center space-y-2">
          <span className="text-sm text-on-surface-variant/70">Scroll</span>
          <div className="relative w-6 h-10 border-2 border-on-surface-variant/50 rounded-full">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-on-surface-variant/50 rounded-full animate-bounce"></div>
          </div>
        </div>
    </section>
  );
};