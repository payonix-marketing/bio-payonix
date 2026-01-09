import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './Header';
import { ButtonCard } from './ButtonCard';
import { AppDownloads } from './AppDownloads';
import { Footer } from './Footer';
import { getSocialLinksForPlatform, getAppDownloadUrlForPlatform } from '../constants';

const BioLinkPage: React.FC = () => {
  const { platform } = useParams<{ platform?: string }>();
  const currentPlatform = platform || 'default';
  const socialLinks = getSocialLinksForPlatform(currentPlatform);
  const appDownloadUrl = getAppDownloadUrlForPlatform(currentPlatform);

  return (
    <div className="min-h-screen w-full bg-[#0B0F19] relative overflow-hidden">
      {/* Dynamic multi-color background glow matching Payonix brand vibes (Blue/Purple) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-payonix-blue/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-payonix-accent/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-[40%] bg-gradient-to-t from-payonix-accent/10 to-transparent blur-[100px] pointer-events-none"></div>

      <main className="max-w-md mx-auto min-h-screen px-5 flex flex-col relative z-10">
        
        <Header />

        <div className="flex flex-col w-full z-10">
          {/* App Download Section */}
          <AppDownloads appDownloadUrl={appDownloadUrl} />

          {/* Contact Methods Heading */}
          <div className="w-full flex justify-start mb-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-white font-semibold text-lg pl-1">Əlaqə vasitələri</h3>
          </div>

          {/* All Action Links */}
          {socialLinks.map((link, index) => (
            <ButtonCard key={link.id} link={link} index={index + 3} /> 
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default BioLinkPage;

