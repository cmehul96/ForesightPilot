import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background">
      <div className="bg-surface-container">
        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
              <div className="flex items-center space-x-3">
                <LogoIcon className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-display text-on-background">Foresight</span>
              </div>
               <div className="flex space-x-6">
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms</a>
                <a href="mailto:hello@foresight.com" className="text-on-surface-variant hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
        </div>
      </div>
       <div className="bg-background">
        <div className="container mx-auto px-6 py-4">
             <p className="text-on-surface-variant text-sm text-center">
                © {new Date().getFullYear()} Foresight Research Inc. All rights reserved.
             </p>
        </div>
       </div>
    </footer>
  );
};