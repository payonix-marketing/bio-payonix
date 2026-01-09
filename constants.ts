import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle,
  Globe
} from 'lucide-react';
import { SocialLink, ContactDetails } from './types';

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