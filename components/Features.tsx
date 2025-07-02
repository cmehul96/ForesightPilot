import React from 'react';
import { BoltIcon } from './icons/BoltIcon';
import { DollarIcon } from './icons/DollarIcon';
import { BeakerIcon } from './icons/BeakerIcon';
import { ScaleIcon } from './icons/ScaleIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="feature-card p-6 bg-surface-container border border-surface-variant/70 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-primary-container p-3 rounded-full flex items-center justify-center w-12 h-12 text-on-primary-container">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-display text-on-background">{title}</h3>
    </div>
    <p className="text-on-surface-variant">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-background">
       <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-on-background tracking-tight mb-4">The Future of Research is Here</h2>
          <p className="text-lg text-on-surface-variant">Stop choosing between speed, cost, and quality. With Foresight, you get all three, supervised by experts.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={<BoltIcon className="text-3xl" />}
            title="Unprecedented Speed"
            description="Get results in 24-48 hours, not weeks or months. Move faster and make decisions with confidence."
          />
           <FeatureCard
            icon={<DollarIcon className="text-3xl" />}
            title="Drastically Lower Cost"
            description="Achieve the results of a full research agency for up to 90% less cost, making deep research accessible."
          />
           <FeatureCard
            icon={<BeakerIcon className="text-3xl" />}
            title="True Qualitative Depth"
            description="Go beyond surveys with real conversations that uncover the 'why'. Each project is monitored by a senior UX researcher with 7+ years of experience."
          />
           <FeatureCard
            icon={<ScaleIcon className="text-3xl" />}
            title="Infinitely Scalable"
            description="Whether you need 10 interviews or 500, our platform scales instantly to meet your research demands."
          />
        </div>
      </div>
    </section>
  );
};