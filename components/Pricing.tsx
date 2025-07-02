import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface PricingProps {
  onOpenModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-surface-container border border-outline/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/10 text-center ring-2 ring-primary/50 hover:ring-primary transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-on-primary-container tracking-tight mb-2">Start Your Pilot Study</h2>
          <p className="text-on-surface-variant text-lg mb-8">Experience the power of supervised autonomous research with a no-brainer offer.</p>
          
          <div className="mb-8">
            <span className="text-6xl font-extrabold font-display text-primary">$100</span>
            <span className="text-on-surface-variant ml-2">one-time payment</span>
          </div>

          <ul className="text-left space-y-5 mb-10 max-w-md mx-auto">
            <li className="flex items-center">
              <CheckIcon className="text-3xl text-primary mr-4 flex-shrink-0" />
              <span className="text-lg text-on-surface-variant">Up to <span className="font-bold text-on-background">10</span> automated interviews</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-3xl text-primary mr-4 flex-shrink-0" />
              <span className="text-lg text-on-surface-variant">Full interview transcripts & recordings</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-3xl text-primary mr-4 flex-shrink-0" />
              <span className="text-lg text-on-surface-variant">In-depth thematic summary</span>
            </li>
             <li className="flex items-center">
              <CheckIcon className="text-3xl text-primary mr-4 flex-shrink-0" />
              <span className="text-lg text-on-surface-variant">End-to-end project monitoring by a <span className="font-bold text-on-background">Senior UX Researcher</span> (7+ years exp.)</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-3xl text-primary mr-4 flex-shrink-0" />
              <span className="text-lg text-on-surface-variant">Topline report with actionable insights</span>
            </li>
          </ul>

          <button 
            onClick={onOpenModal}
            className="w-full max-w-md bg-primary text-on-primary font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
          >
            Claim Your $100 Pilot
          </button>
        </div>
      </div>
    </section>
  );
};