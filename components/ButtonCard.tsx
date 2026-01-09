import React from 'react';
import { SocialLink } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonCardProps {
  link: SocialLink;
  index: number;
}

export const ButtonCard: React.FC<ButtonCardProps> = ({ link, index }) => {
  const isPrimary = link.variant === 'primary';
  
  // Stagger animation based on index
  const style = {
    animationDelay: `${index * 100}ms`
  };

  const baseClasses = "relative w-full group flex items-center justify-between p-4 mb-3 rounded-2xl transition-all duration-300 transform active:scale-[0.98] animate-fade-in-up border";
  
  let variantClasses = "";
  
  if (isPrimary) {
    variantClasses = "bg-gradient-to-r from-payonix-blue to-payonix-accent hover:opacity-90 border-transparent text-white font-semibold";
  } else {
    // Glass/Secondary/Whatsapp (Unified style)
    variantClasses = "bg-payonix-card hover:bg-[#1f2937] border-white/5 text-white hover:border-payonix-accent/30";
  }

  // Icon color logic
  const iconColorClass = isPrimary ? 'text-white' : 'text-payonix-accent';

  return (
    <a 
      href={link.url}
      target={link.url.startsWith('http') ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
      style={style}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-full ${isPrimary ? 'bg-white/20' : 'bg-white/5'} backdrop-blur-sm`}>
          <link.icon size={24} className={iconColorClass} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col text-left">
          <span className={`font-medium text-lg ${isPrimary ? 'text-white' : 'text-white'}`}>
            {link.label}
          </span>
          {link.subLabel && (
            <span className={`text-xs ${isPrimary ? 'text-white/80' : 'text-gray-400'}`}>
              {link.subLabel}
            </span>
          )}
        </div>
      </div>
      
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-4">
        {link.url.startsWith('tel:') ? (
           <ArrowRight size={18} className="text-white/50" />
        ) : (
           <ExternalLink size={18} className="text-white/50" />
        )}
      </div>
    </a>
  );
};