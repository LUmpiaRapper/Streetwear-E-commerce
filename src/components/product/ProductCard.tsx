"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 overflow-hidden mb-4"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          priority={priority}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.originalPrice && <Badge variant="sale">Sale</Badge>}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Add to wishlist"
        >
          <Heart size={16} />
        </button>
      </motion.div>
      <div className="space-y-1">
        <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-500 dark:text-neutral-400">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold leading-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-neutral-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
