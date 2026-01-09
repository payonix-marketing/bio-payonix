import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-4 px-4 animate-fade-in-up">
      <div className="relative mb-5 group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/40 to-purple-600/40 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
        <div className="relative w-28 h-28 bg-[#161e2e]/90 backdrop-blur-xl rounded-[2rem] flex items-center justify-center border border-white/10 shadow-2xl p-5 transition-transform hover:scale-105 duration-300">
           <img 
             src="https://payonix.com/logo.svg" 
             alt="Payonix Logo" 
             className="w-full h-full object-contain drop-shadow-lg"
           />
        </div>
      </div>
      
     
      <div className="max-w-sm text-center bg-white/5 px-4 py-3 rounded-xl border border-white/5 backdrop-blur-sm">
        <p className="text-gray-300 text-sm font-medium leading-relaxed">
          Ani Kredit, Sürətli ödənişlər, Endirimlər və Təkliflər üçün Payonix - Sizin Maliyyə Köməkçinizdir!
        </p>
      </div>
    </div>
  );
};