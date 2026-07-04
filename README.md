# STREETWEAR

A modern, premium streetwear e-commerce showcase built with cutting-edge web technologies. Designed to demonstrate a full shopping experience — from product discovery to checkout — with a bold monochromatic aesthetic and vibrant orange accent.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State:** Zustand (cart with persist middleware)
- **Animation:** Framer Motion (page transitions, scroll-triggered entrance)
- **Icons:** Lucide React
- **Theming:** next-themes (class-based dark/light mode)
- **Images:** Unsplash (royalty-free streetwear photography)

## Features

- **Dark / Light Mode** — Persistent theme toggle with smooth transitions
- **Product Catalog** — 8 streetwear products across 4 categories (Sneakers, Apparel, Accessories, Outerwear)
- **Filtering & Sort** — Filter by category, size, and sort by newest / price
- **Product Detail** — Image gallery with thumbnails, color swatches, size selector, quantity controls
- **Shopping Cart** — Slide-out drawer + full-page cart with persistent state
- **3-Step Checkout** — Information → Shipping → Payment flow with confirmation screen
- **Responsive** — Fully adaptive from mobile to desktop
- **Accessible** — Focus-visible rings, semantic HTML, ARIA labels

## Design

| Element | Value |
|---------|-------|
| Primary | `#0A0A0A` (near-black) |
| Accent | `#FF4400` (vibrant orange) |
| Base | `#FAFAFA` (off-white) |
| Font | Inter (sans-serif) |
| Layout | Max-width centered, 6rem padding |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── cart/           # Full cart page
│   ├── checkout/       # 3-step checkout flow
│   ├── shop/
│   │   └── [slug]/     # Product detail page
│   ├── globals.css     # Tailwind theme & design tokens
│   ├── layout.tsx      # Root layout (Navbar, Footer, providers)
│   └── page.tsx        # Homepage (hero, categories, featured)
├── components/
│   ├── layout/         # Navbar, Footer, CartDrawer, MobileNav, ThemeToggle
│   ├── product/        # ProductCard, ProductCardSkeleton
│   ├── ui/             # Button, Badge, Card, Input, Skeleton
│   └── shop/           # FilterDrawer, ProductGrid, SortSelect
├── lib/
│   ├── data.ts         # Product & category mock data
│   ├── store.ts        # Zustand cart store
│   ├── utils.ts        # cn() helper, formatPrice()
└── types/
    └── index.ts        # TypeScript interfaces
```

## Disclaimer

This project is a **showcase only**. All products, images, and content are for demonstration purposes and are not available for purchase.

---

Built with [Next.js](https://nextjs.org)
