"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, ChevronLeft, ChevronRight, Star, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/data";
import { useCartStore } from "@/lib/store";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.id === slug);
  const addItem = useCartStore((s) => s.addItem);

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [imageIdx, setImageIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, product.colors[selectedColor].name, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6 pt-4">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black dark:hover:text-white transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-black dark:text-white">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 overflow-hidden group">
              <Image
                src={product.images[imageIdx]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImageIdx((i) => (i - 1 + product.images.length) % product.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setImageIdx((i) => (i + 1) % product.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIdx(i)}
                    className={cn(
                      "w-16 h-20 flex-shrink-0 bg-neutral-100 dark:bg-neutral-900 border-2 transition-colors overflow-hidden relative",
                      imageIdx === i ? "border-black dark:border-white" : "border-transparent"
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-500 mb-1">{product.brand}</p>
              <h1 className="text-heading-2 md:text-heading-1 font-bold leading-tight">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={cn(i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-neutral-300 dark:text-neutral-600")}
                    />
                  ))}
                </div>
                <span className="text-xs text-neutral-500">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-heading-2 font-bold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-neutral-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {product.description}
            </p>

            {/* Color */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Color: <span className="text-neutral-500 font-normal normal-case">{product.colors[selectedColor].name}</span>
              </h4>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={cn(
                      "w-9 h-9 rounded-full border-2 transition-all duration-200",
                      selectedColor === i ? "border-black dark:border-white scale-110" : "border-neutral-300 dark:border-neutral-600"
                    )}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Size
                </h4>
                <button className="text-xs text-neutral-500 underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-[3.5rem] h-10 px-3 text-xs font-medium border-2 transition-all duration-200",
                      selectedSize === size
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : "border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-3">Quantity</h4>
              <div className="flex items-center gap-3 border-2 border-neutral-200 dark:border-neutral-700 w-fit">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAdd}
                disabled={!selectedSize}
              >
                {added ? "Added!" : selectedSize ? "Add to Cart" : "Select a Size"}
              </Button>
              <Button variant="outline" size="lg" aria-label="Add to wishlist">
                <Heart size={18} />
              </Button>
              <Button variant="outline" size="lg" aria-label="Share">
                <Share2 size={18} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            {/* Accordion Details */}
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 space-y-4">
              {[
                { title: "Shipping & Returns", content: "Free shipping on orders over $150. Standard delivery 3-5 business days. Free returns within 30 days of delivery." },
                { title: "Materials & Care", content: "Premium materials. Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Iron on low heat." },
              ].map((item) => (
                <details key={item.title} className="group">
                  <summary className="text-xs font-semibold uppercase tracking-[0.15em] cursor-pointer list-none flex items-center justify-between py-3">
                    {item.title}
                    <ChevronRight size={14} className="transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 pb-3 leading-relaxed">
                    {item.content}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
