import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${CONTACT_INFO.mapQuery}`;

  return (
    <footer className="mt-8 pb-12 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 cursor-pointer"
      >
        <div className="bg-payonix-card p-3 rounded-full border border-white/10 group-hover:border-payonix-accent/50 transition-colors">
            <MapPin size={20} className="text-payonix-muted group-hover:text-payonix-accent transition-colors" />
        </div>
        <div className="flex flex-col">
            <span className="text-xs text-payonix-muted uppercase tracking-wider mb-1">Ünvan</span>
            <span className="text-sm text-white max-w-[200px] leading-relaxed">
            {CONTACT_INFO.address}
            </span>
        </div>
      </a>

      <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
        <div className="w-1 h-1 rounded-full bg-payonix-blue"></div>
        <p className="text-[10px] text-gray-500">
          © {new Date().getFullYear()} Payonix. Bütün hüquqlar qorunur.
        </p>
        <div className="w-1 h-1 rounded-full bg-payonix-accent"></div>
      </div>
    </footer>
  );
};