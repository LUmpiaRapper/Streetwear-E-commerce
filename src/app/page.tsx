"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/product/ProductCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { products, categories } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Home() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const newProducts = products.filter((p) => p.isNew);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <Badge variant="new" className="mb-6">New Season Collection</Badge>
            <h1 className="text-hero md:text-display font-black tracking-tight leading-none">
              WHERE
              <br />
              <span className="text-accent">CULTURE</span>
              <br />
              MEETS
              <br />
              COMFORT
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-400 max-w-lg leading-relaxed">
              Premium streetwear engineered for those who move between the gym, the streets, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/shop">
                <Button variant="secondary" size="lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/shop?tag=new">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-black">
                  New Drops
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-500">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Featured Drops */}
      <motion.section {...fadeUp} className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">Featured</p>
            <h2 className="text-heading-2 md:text-heading-1 font-bold">Featured Drops</h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex text-xs tracking-[0.15em] uppercase font-medium border-b-2 border-black dark:border-white pb-0.5 hover:opacity-60 transition-opacity"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} priority />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/shop">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section {...fadeUp} className="py-16 md:py-24 px-6 md:px-10 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2 text-center">Categories</p>
          <h2 className="text-heading-2 md:text-heading-1 font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.slug}`}
                className="group relative aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                  <p className="text-sm text-neutral-300 mt-1">{cat.productCount} Products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New Arrivals */}
      <motion.section {...fadeUp} className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">Latest</p>
            <h2 className="text-heading-2 md:text-heading-1 font-bold">New Arrivals</h2>
          </div>
          <Link
            href="/shop?tag=new"
            className="hidden md:inline-flex text-xs tracking-[0.15em] uppercase font-medium border-b-2 border-black dark:border-white pb-0.5 hover:opacity-60 transition-opacity"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section {...fadeUp} className="py-20 md:py-28 px-6 md:px-10 bg-black text-white dark:bg-white dark:text-black">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-2">Stay Connected</p>
          <h2 className="text-heading-2 md:text-heading-1 font-bold mb-4">
            Never Miss a Drop
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 mb-8 text-sm md:text-base leading-relaxed">
            Subscribe for early access to new collections, limited releases, and exclusive member-only drops.
          </p>
          <NewsletterForm />
        </div>
      </motion.section>
    </>
  );
}
