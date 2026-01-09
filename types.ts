import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  subLabel?: string;
  url: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary' | 'glass' | 'whatsapp';
  featured?: boolean;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  mapQuery: string;
}

export interface DownloadLink {
  platform: 'ios' | 'android';
  url: string;
}

export interface PlatformConfig {
  name: string;
  slug: string;
  customLinks?: Partial<Record<string, Partial<SocialLink>>>;
}