import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle,
  Globe
} from 'lucide-react';
import { Music } from 'lucide-react'; // TikTok icon
import { SocialLink, ContactDetails, PlatformConfig } from './types';

export const APP_DOWNLOAD_URL = "https://onelink.to/pynxtt";

export const CONTACT_INFO: ContactDetails = {
  phone: "*2021",
  email: "info@payonix.com",
  address: "Malibo Rezidens, Şamil Əzizbəyov küç. 217",
  mapQuery: "Malibo+Rezidens,+Şamil+Əzizbəyov+küç.+217"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    subLabel: '+994 77 282 20 21',
    url: 'https://wa.me/994772822021',
    icon: MessageCircle,
    variant: 'glass',
    featured: true
  },
  {
    id: 'call-center',
    label: 'Əlaqə Mərkəzi',
    subLabel: '*2021',
    url: 'tel:*2021',
    icon: Phone,
    variant: 'glass'
  },
  {
    id: 'website',
    label: 'Vebsayt',
    subLabel: 'www.payonix.com',
    url: 'https://www.payonix.com',
    icon: Globe,
    variant: 'glass'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    subLabel: '@payonix',
    url: 'https://instagram.com/payonix',
    icon: Instagram,
    variant: 'glass'
  },
  {
    id: 'email',
    label: 'Email yazın',
    subLabel: 'info@payonix.com',
    url: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
    variant: 'glass'
  }
];

// Platform-specific configurations
export const PLATFORM_CONFIGS: Record<string, PlatformConfig> = {
  default: {
    name: 'Default',
    slug: '/',
    customLinks: {}
  },
  tiktok: {
    name: 'TikTok',
    slug: '/tiktok',
    customLinks: {
      instagram: {
        id: 'tiktok',
        label: 'TikTok',
        subLabel: '@payonix.official',
        url: 'https://www.tiktok.com/@payonix.official?lang=en',
        icon: Music,
      }
    }
  },
  instagram: {
    name: 'Instagram',
    slug: '/instagram',
    customLinks: {}
  }
};

// Function to get social links for a specific platform
export const getSocialLinksForPlatform = (platform: string): SocialLink[] => {
  const config = PLATFORM_CONFIGS[platform] || PLATFORM_CONFIGS.default;
  
  return SOCIAL_LINKS.map(link => {
    const customLink = config.customLinks?.[link.id];
    if (customLink) {
      return {
        ...link,
        ...customLink,
        // Ensure icon is properly assigned
        icon: customLink.icon || link.icon
      } as SocialLink;
    }
    return link;
  });
};