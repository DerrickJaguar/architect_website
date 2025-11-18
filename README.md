# Above Architects - Next.js Website

Modern, responsive website for Above Architects built with Next.js 14+, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Next.js 14+ App Router** - Modern React framework with server components
- **TypeScript** - Full type safety throughout the codebase
- **Tailwind CSS v4** - Latest utility-first CSS framework with CSS-based configuration
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **SEO Optimized** - Metadata, OpenGraph, and Twitter cards configured
- **Performance** - Optimized images with next/image, font optimization with next/font
- **Animations** - Smooth transitions and hover effects
- **Form Handling** - Contact form with API route

## 📁 Project Structure

```
nextjs-abovearchitects/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── projects/page.tsx     # Projects portfolio
│   │   ├── about/page.tsx        # About us
│   │   ├── contact/page.tsx      # Contact form
│   │   ├── blog/page.tsx         # Blog listing
│   │   ├── api/contact/route.ts  # Contact form API
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── globals.css           # Global styles + Tailwind config
│   └── components/
│       ├── Navbar.tsx            # Fixed navigation
│       ├── Footer.tsx            # Site footer
│       ├── WhatsAppButton.tsx    # Floating WhatsApp button
│       ├── PageLoader.tsx        # Loading animation
│       └── BackToTop.tsx         # Scroll to top button
└── public/images/                # Static images
```

## 🎨 Design System

### Colors

- **Primary**: `#2c3e50` - Dark blue-gray
- **Accent**: `#d4633f` - Terracotta/burnt orange
- **Secondary**: `#8b9d83` - Sage green
- **Dark**: `#1a3a52` - Deep navy
- **Light**: `#f8f6f3` - Off-white

### Typography

- **Body**: Inter (Google Fonts)
- **Headings**: Playfair Display (Google Fonts)

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📄 Pages

- **Home** (`/`) - Hero, services, stats, CTA
- **Projects** (`/projects`) - Filterable portfolio with 9 projects
- **About** (`/about`) - Company story, values, team
- **Contact** (`/contact`) - Contact form, office info, map
- **Blog** (`/blog`) - Featured post, blog grid, newsletter

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

## 🚧 TODO

- [ ] Implement email service for contact form
- [ ] Add actual project images
- [ ] Add individual project/blog detail pages
- [ ] Integrate Google Maps
- [ ] Add analytics

## 📞 Contact

- Website: https://www.abovearchitects.com
- Email: info@abovearchitects.com

## 📄 License

© 2024 Above Architects. All rights reserved.
