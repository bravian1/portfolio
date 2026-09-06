# Bravian Nyatoro - Portfolio

> Fullstack Developer & AI Engineer / System Designer

[![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

## 🎯 Overview

A modern, high-performance personal portfolio showcasing full-stack development, AI integrations, and scalable systems engineering. Designed with an editorial aesthetic, fluid micro-interactions, responsive typography, and dynamic handwriting animations.

### 🌟 Key Features

- **Modern Stack**: Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4
- **Refined Editorial Aesthetic**: Warm neutral backgrounds with rich charcoal typography and electric green accents
- **Interactive Micro-animations**: Framer Motion transitions, floating sparkles, and playful typography
- **Handwritten Signature**: Dynamic SVG calligraphy animation using Penflow and Brittany Signature font
- **Collapsible Announcement Ticker**: Marquee header that smoothly collapses on scroll
- **Morphing Mobile Navigation**: Fluid overlay menu with responsive animations
- **Auto-Scrolling Showcase**: Smooth Embla carousel featuring GitHub works and experiments
- **Selected Case Studies**: Alternating layout with rich image zoom reveals and hover interactions
- **Analytics & Insights**: Integrated Vercel Analytics and Speed Insights

## 🚀 Tech Stack

### Frontend & Core
- **Framework**: Next.js 16.1.2 with App Router & Turbopack
- **Framework**: Next.js 16.3.4 with App Router & Turbopack
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation & Motion**: Framer Motion 12, Embla Carousel (`embla-carousel-auto-scroll`), Penflow
- **UI Components**: Radix UI primitives, Lucide Icons, Sonner
- **Typography**: Inter, Playfair Display, Dancing Script, Brittany Signature

### Monitoring & Analytics
- `@vercel/analytics`
- `@vercel/speed-insights`

## 🎨 Color Palette

```css
/* Minimalist Editorial Palette */
--color-background: #fafafa; /* Warm light background */
--color-foreground: #242424; /* Deep charcoal text */
--color-accent:     #75fb4c; /* Electric green accent */
--color-muted:      #e9e9e9; /* Subtle borders & cards */
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Theme variables, typography & base styling
│   │   ├── layout.tsx       # Root layout with metadata & analytics
│   │   ├── page.tsx         # Portfolio single-page structure
│   │   ├── global-error.tsx # Global error boundary
│   │   └── not-found.tsx    # 404 page
│   ├── components/          # React components
│   │   ├── Navbar.tsx       # Header with announcement ticker & mobile navigation
│   │   ├── Hero.tsx         # Hero section with statement typography & sparkles
│   │   ├── Projects.tsx     # Featured selected case studies
│   │   ├── SecondaryProjects.tsx # Auto-scrolling carousel for GitHub projects
│   │   ├── About.tsx        # Bio, credentials, and animated signature
│   │   ├── Footer.tsx       # Large CTA and social links
│   │   └── ui/              # Reusable UI component library (Radix + Tailwind)
│   ├── hooks/               # Custom React hooks (use-mobile, etc.)
│   └── lib/                 # Utility functions
├── public/                  # Static assets
│   ├── fonts/               # BrittanySignature font for Penflow
│   ├── images/projects/     # Case study screenshots
│   ├── pfp.png              # Profile avatar / favicon
│   └── resume.pdf           # Curriculum Vitae
└── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or Bun 1.x / pnpm 9+)

### Installation

```bash
git clone https://github.com/bravian1/portfolio.git
cd portfolio

# Install dependencies (using your preferred package manager)
npm install
# or
bun install
# or
pnpm install
```

### Running Development Server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Featured Projects

- **[Fuel Calc](https://fuelcalc.xyz)** - Automotive performance & fuel efficiency calculator
- **[WebMaker Agency](https://webmaker-chi.vercel.app)** - Modern creative web agency with high-conversion landing pages
- **[PassAfrika](https://passafrika.xyz)** - Secure blockchain event ticketing platform
- **[Medicare Hospital](https://hospital-portfolio-six.vercel.app)** - Comprehensive healthcare scheduling and patient care portal
- **[Baobab POS](https://baobab-pos.co.ke)** - Offline-first Point of Sale and inventory platform for African SMEs
- **[Markdocs](https://github.com/bravian1/markdocs)** - Google Docs-style editor for plain markdown files with live preview and drawing
- **[Bet Agent](https://github.com/bravian1/bet-agent)** - AI-powered sports betting analysis and automation
- **[Textblitz](https://github.com/bravian1/Textblitz)** - High-performance text processing and analysis tool
- **[Gemini CLI Server](https://github.com/bravian1/gemini_cli_server)** - Local server for interacting with Google Gemini AI models

## 🤝 Connect

- **Location**: Nairobi, Kenya • Available Remotely
- **LinkedIn**: [Bravian Nyatoro](https://www.linkedin.com/in/nyatorobravian/)
- **GitHub**: [@bravian1](https://github.com/bravian1)
- **Twitter / X**: [@bravke1](https://twitter.com/bravke1)
- **Email**: [nyatorobravian@gmail.com](mailto:nyatorobravian@gmail.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
