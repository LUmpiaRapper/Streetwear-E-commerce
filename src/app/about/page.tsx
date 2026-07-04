"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, RefreshCw, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const values = [
  {
    icon: Sparkles,
    title: "Quality First",
    description: "Every piece is selected for its craftsmanship, fit, and durability. We only carry what we'd wear ourselves.",
  },
  {
    icon: RefreshCw,
    title: "Limited Drops",
    description: "Small batches, no restocks. Each drop is a moment in time — once it's gone, it's gone.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders within the US. International shipping available on select drops.",
  },
  {
    icon: Shield,
    title: "Authentic Guarantee",
    description: "Every product is 100% authentic. We source directly from brands and trusted distributors.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-black text-white overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              About
              <span className="block text-accent mt-1">STREETWEAR</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
              More than a store — a curation of style, culture, and the rare finds that define a generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  STREETWEAR was born from a simple belief: what you wear says who you are. 
                  Founded in 2024, we set out to bridge the gap between high-end fashion and 
                  the raw, unfiltered energy of street culture.
                </p>
                <p>
                  We partner with emerging and established brands that push boundaries — 
                  brands that care about cut, fabric, and the stories their pieces tell. 
                  Every drop is curated, not collected.
                </p>
                <p>
                  Whether you are here for the latest sneaker release, a limited-apparel drop, 
                  or the accessory that finishes the fit — you are part of a community that 
                  values authenticity over hype.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="relative aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 overflow-hidden"
            >
              <Image
                src="/images/category-collections.jpg"
                alt="Streetwear collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              What We Stand For
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              Four principles that guide every decision we make.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                className="bg-white dark:bg-black p-8"
              >
                <value.icon size={24} className="text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to find your next piece?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
              Browse the latest drops and build a fit that is unmistakably yours.
            </p>
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}