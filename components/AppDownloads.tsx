import React from 'react';
import { APP_DOWNLOAD_URL } from '../constants';

export const AppDownloads: React.FC = () => {
  return (
    <div className="w-full mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-white font-medium text-lg mb-2">Tətbiqi yüklə</h3>
        <p className="text-gray-400 text-xs mb-4 max-w-[90%] leading-relaxed">
          Kredit əldə etmək və digər maliyyə xidmətləri üçün tətbiqi endirin.
        </p>
        
        <div className="flex flex-row justify-center items-center gap-4 w-full px-2">
          <a 
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 hover:opacity-90 w-[140px] h-[48px] flex items-center justify-center bg-black rounded-lg border border-white/10 overflow-hidden"
            aria-label="Download on the App Store"
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="w-full h-full object-contain p-1"
            />
          </a>
          
          <a 
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 hover:opacity-90 w-[140px] h-[48px] flex items-center justify-center bg-black rounded-lg border border-white/10 overflow-hidden"
            aria-label="Get it on Google Play"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="w-[120%] h-[120%] object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};