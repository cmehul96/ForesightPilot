import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-surface-variant">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-on-background pr-4">{question}</span>
        <span className="material-symbols-outlined text-primary text-3xl">
          {isOpen ? 'remove' : 'add'}
        </span>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pb-6 text-on-surface-variant pr-8">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "How does the AI actually conduct interviews?",
      answer: "Our conversational AI is built on advanced large language models, specifically trained for empathetic and neutral questioning. It engages contacts in a natural, human-like phone conversation to explore topics in-depth, adapting its questions based on the flow of the discussion."
    },
    {
      question: "Is it ethical and how do you handle consent?",
      answer: "Ethics and consent are paramount. At the beginning of every call, the AI clearly identifies itself as an AI researcher for Foresight, explains the purpose of the call, and obtains explicit verbal consent to be interviewed and recorded. All data is anonymized in the final report."
    },
    {
      question: "What kind of contacts can I provide?",
      answer: "You can provide a list of contacts (phone numbers) for your target audience who have opted-in to be contacted for research purposes. We handle all scheduling and outreach."
    },
    {
      question: "What happens after the pilot study?",
      answer: "We're confident you'll love the results! After your pilot, we offer flexible subscription plans based on the volume of interviews you need per month. We'll reach out with options once your pilot report is delivered."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-background tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};