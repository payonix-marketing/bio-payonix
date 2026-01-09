<div align="center">

# 🔗 Payonix Bio Link

### Fast, Modern & Mobile-First Bio Link Application

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-red.svg)](LICENSE)

<img src="https://img.shields.io/badge/Status-Active-success" alt="Status">
<img src="https://img.shields.io/badge/Mobile-Optimized-brightgreen" alt="Mobile Optimized">

</div>

---

## 📱 Overview

**Payonix Bio Link** is a beautifully designed, mobile-first single-page application that serves as a centralized hub for all Payonix contact methods, social media links, and app downloads. Built with modern web technologies, it provides a seamless user experience with smooth animations and a stunning glassmorphism UI.

### ✨ Key Features

- 🎨 **Modern Glassmorphism Design** - Beautiful glass-effect cards with smooth blur effects
- 📱 **Mobile-First & Responsive** - Optimized for all screen sizes and devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Engaging fade-in and hover effects
- 🌈 **Brand-Aligned Colors** - Consistent with Payonix brand identity (Blue/Purple)
- 🔗 **Multiple Contact Methods** - WhatsApp, Phone, Email, Instagram, Website
- 📲 **App Download Links** - Direct links to Payonix mobile apps
- 🛡️ **Type-Safe** - Built with TypeScript for reliability
- 🚀 **Easy Deployment** - Ready for Vercel, Netlify, or any static hosting

---

## 🖼️ Preview

The application features:
- **Header Section** - Payonix logo and branding
- **App Download Section** - Quick access to download Payonix mobile apps
- **Contact Methods** - Beautifully organized contact cards including:
  - 💬 WhatsApp Support (+994 77 282 20 21)
  - 📞 Call Center (*2021)
  - 🌐 Official Website (www.payonix.com)
  - 📸 Instagram (@payonix)
  - ✉️ Email (info@payonix.com)
- **Footer** - Additional information and copyright

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19.2.3** | UI Framework |
| **TypeScript 5.8.2** | Type Safety |
| **Vite 6.2.0** | Build Tool & Dev Server |
| **Lucide React** | Icon Library |
| **TailwindCSS** | Styling (via inline classes) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/payonix-marketing/bio-payonix.git
   cd bio-payonix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/payonix-marketing/bio-payonix)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and deploy

The included `vercel.json` handles:
- ✅ SPA routing (redirects all routes to index.html)
- ✅ Security headers
- ✅ Static asset caching

### Deploy to Netlify

```bash
npm run build
```

Then drag & drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop).

---

## 📂 Project Structure

```
payonix-bio-link/
├── components/
│   ├── AppDownloads.tsx    # App download section
│   ├── ButtonCard.tsx       # Reusable card component
│   ├── Footer.tsx           # Footer component
│   └── Header.tsx           # Header with logo
├── App.tsx                  # Main app component
├── constants.ts             # App constants & data
├── types.ts                 # TypeScript type definitions
├── index.tsx                # Entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment config
├── package.json             # Dependencies
└── README.md                # This file
```

---

## 🎨 Customization

### Update Contact Information

Edit `constants.ts` to modify contact details and social links:

```typescript
export const CONTACT_INFO: ContactDetails = {
  phone: "*2021",
  email: "info@payonix.com",
  address: "Malibo Rezidens, Şamil Əzizbəyov küç. 217",
  mapQuery: "Malibo+Rezidens,+Şamil+Əzizbəyov+küç.+217"
};

export const SOCIAL_LINKS: SocialLink[] = [
  // Add or modify links here
];
```

### Update App Download URL

Change the `APP_DOWNLOAD_URL` in `constants.ts`:

```typescript
export const APP_DOWNLOAD_URL = "https://onelink.to/pynxtt";
```

### Modify Colors

The app uses Payonix brand colors defined in the Tailwind-style classes:
- `bg-payonix-blue` - Primary blue (#2D5BFF)
- `bg-payonix-accent` - Accent purple (#9D4EDD)

Update these in `index.html` or create a Tailwind config file.

---

## 🧩 Components

### `<Header />`
Displays the Payonix logo and title.

### `<AppDownloads />`
Prominent call-to-action for downloading Payonix mobile apps.

### `<ButtonCard />`
Reusable glassmorphism card for contact links with:
- Icon support
- Label and sub-label
- Hover animations
- External link handling

### `<Footer />`
Simple footer with copyright information.

---

## 🔧 Configuration Files

### `vercel.json`
- Handles SPA routing for Vite builds
- Sets security headers
- Configures asset caching

### `vite.config.ts`
- Configures Vite build tool
- Sets up React plugin
- Defines build output settings

### `tsconfig.json`
- TypeScript compiler options
- Module resolution settings
- Type checking configuration

---

## 📱 Mobile Optimization

The application is built mobile-first with:
- ✅ Responsive design (max-width: 28rem on desktop)
- ✅ Touch-friendly buttons
- ✅ Optimized font sizes
- ✅ Smooth scrolling
- ✅ Fast load times
- ✅ Minimal JavaScript bundle

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is **private** and proprietary to Payonix.

---

## 📞 Contact & Support

- **Website:** [www.payonix.com](https://www.payonix.com)
- **WhatsApp:** [+994 77 282 20 21](https://wa.me/994772822021)
- **Phone:** *2021
- **Email:** info@payonix.com
- **Instagram:** [@payonix](https://instagram.com/payonix)

---

<div align="center">

**Made with ❤️ by Payonix Marketing Team**

⭐ Star this repo if you find it useful!

</div>
