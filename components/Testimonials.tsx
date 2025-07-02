import React from 'react';
import { QuoteIcon } from './icons/QuoteIcon';


const Avatar: React.FC<{initials: string}> = ({ initials }) => (
  <div className="h-full w-full flex items-center justify-center bg-primary-container rounded-full">
    <span className="text-xl font-bold text-on-primary-container select-none">{initials}</span>
  </div>
);


const TestimonialCard: React.FC<{ quote: string; author: string; title: string; initials: string }> = ({ quote, author, title, initials }) => (
  <div className="bg-surface-container p-8 rounded-2xl flex flex-col h-full shadow-sm relative overflow-hidden border border-surface-variant/50">
    <QuoteIcon className="absolute -top-2 -right-2 text-primary-container/40 text-9xl opacity-70" />
    <div className="relative z-10 flex flex-col flex-grow">
        <p className="text-on-surface-variant text-lg mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center mt-auto">
            <div className="h-14 w-14 mr-4 flex-shrink-0">
              <Avatar initials={initials} />
            </div>
            <div>
            <p className="font-bold text-on-background">{author}</p>
            <p className="text-sm text-secondary">{title}</p>
            </div>
        </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-surface-container-high/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-on-background tracking-tight mb-4">Trusted by Innovative Teams</h2>
          <p className="text-lg text-on-surface-variant">See what product leaders and founders are saying about Foresight.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <TestimonialCard
            quote="In the fintech space, understanding user trust is critical. Foresight delivered deep insights into investor psychology, allowing us to build more user-centric features. It's an indispensable tool for rapid validation."
            author="Riken Patel"
            title="UX Research Manager, Groww"
            initials="RP"
          />
          <TestimonialCard
            quote="Foresight's interviews helped us understand the nuanced preferences of our customers for natural food products. The qualitative data was richer than any survey we've ever run, and much faster."
            author="Aayushi Khandelwal"
            title="Co-Founder, Anveshan"
            initials="AK"
          />
        </div>
      </div>
    </section>
  );
};