import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { DocumentIcon } from './icons/DocumentIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { ChartIcon } from './icons/ChartIcon';

const StepCard: React.FC<{ icon: React.ReactNode; step: number; title: string; description: string }> = ({ icon, step, title, description }) => (
  <div className="relative p-8 bg-surface-container rounded-3xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-surface-variant/30 h-full">
    <div className="absolute top-0 right-0 text-primary/5 font-display font-extrabold text-[10rem] leading-none select-none -mr-2 -mt-2" aria-hidden="true">
      {step}
    </div>
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 bg-primary-container text-primary w-12 h-12 flex items-center justify-center rounded-xl text-3xl flex-shrink-0">
          {icon}
      </div>
      <h3 className="text-2xl font-bold font-display text-on-background mb-3">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  </div>
);

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: <TargetIcon />,
      title: "Define Your Goal",
      description: "Simply state your research objective. What do you want to learn about your users?"
    },
    {
      step: 2,
      icon: <DocumentIcon />,
      title: "Expert-Crafted Questionnaire",
      description: "Our system drafts a nuanced, open-ended questionnaire, refined by experts for clarity."
    },
    {
      step: 3,
      icon: <PhoneIcon />,
      title: "Automated Qualitative Interviews",
      description: "Our conversational AI calls your audience, conducting empathetic and natural interviews."
    },
    {
      step: 4,
      icon: <ChartIcon />,
      title: "Receive In-Depth Reports",
      description: "Get full transcripts, thematic analysis, and an executive summary delivered to you."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative"
        style={{
            backgroundImage: 'linear-gradient(rgba(121, 117, 127, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(121, 117, 127, 0.1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
        }}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-on-background tracking-tight mb-4">A Radically Simple Process</h2>
          <p className="text-lg text-on-surface-variant">Unlock deep user insights in four simple steps. Let our platform do the heavy lifting.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
};
