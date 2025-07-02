import React, { useState, useEffect, useRef } from 'react';
import { SuccessAnimationIcon } from './icons/SuccessAnimationIcon';
import { supabase } from '../lib/supabaseClient';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }: PilotModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      // Reset form state when opening
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current) {
        modalRef.current.classList.add('fade-out-modal');
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && phone && company) {
      const { error } = await supabase
        .from('pilot_requests')
        .insert([{ name, email, phone, company }]);
      if (!error) {
        setIsSubmitted(true);
        setTimeout(handleClose, 2500);
      } else {
        alert('Failed to submit. Please try again.');
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-backdrop-in"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-background rounded-2xl shadow-xl w-full max-w-md animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-8">
            <h2 id="modal-title" className="text-2xl font-bold text-on-background mb-2">Start Your Pilot</h2>
            <p className="text-on-surface-variant mb-6">Enter your details to claim your $100 pilot study.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-surface-container-high border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
               <div>
                <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-surface-container-high border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="jane.doe@innovate.co"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-on-surface-variant mb-1">Mobile Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-surface-container-high border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-on-surface-variant mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-surface-container-high border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Innovate Co."
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button type="button" onClick={handleClose} className="px-6 py-2 rounded-full text-primary font-semibold hover:bg-primary-container/50">Cancel</button>
              <button type="submit" className="px-6 py-2 rounded-full bg-primary text-on-primary font-semibold hover:opacity-90">Submit</button>
            </div>
          </form>
        ) : (
          <div className="text-center p-8 flex flex-col items-center justify-center h-80">
            <SuccessAnimationIcon />
            <h2 className="text-2xl font-bold text-on-background mt-6">Success!</h2>
            <p className="text-on-surface-variant mt-2">We've received your request and will be in touch shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};