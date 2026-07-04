"use client";

import { useState, useMemo, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { products, categories } from "@/lib/data";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showFilters]);

  const sizes = ["US 7", "US 8", "US 9", "US 10", "S", "M", "L", "XL"];

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedSize !== "all") {
      result = result.filter((p) => p.sizes.includes(selectedSize));
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      default:
        result.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1));
    }

    return result;
  }, [selectedCategory, selectedSize, sortBy]);

  const filterContent = (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4">Category</h4>
        <div className="space-y-2">
          {[
            { id: "all", label: "All" },
            ...categories.map((c) => ({ id: c.slug, label: c.name })),
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "block w-full text-left py-1.5 text-sm transition-colors",
                selectedCategory === cat.id
                  ? "font-semibold text-black dark:text-white"
                  : "text-neutral-500 hover:text-black dark:hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4">Size</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedSize("all")}
            className={cn(
              "px-3 py-1.5 text-xs border transition-colors",
              selectedSize === "all"
                ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                : "border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white"
            )}
          >
            All
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "px-3 py-1.5 text-xs border transition-colors",
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

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full h-10 px-3 bg-transparent border-2 border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:border-black dark:focus:border-white"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-heading-2 md:text-heading-1 font-bold">Shop All</h1>
            <p className="text-sm text-neutral-500 mt-1">{filtered.length} Products</p>
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="md:hidden p-2 border border-neutral-300 dark:border-neutral-700 rounded"
            aria-label="Toggle filters"
          >
            <SlidersHorizontal size={18} />
          </button>
          <div className="hidden md:block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-3 bg-transparent border-2 border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:border-black dark:focus:border-white"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          <aside className="hidden md:block w-56 flex-shrink-0">
            {filterContent}
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-neutral-500">No products match your filters.</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedSize("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <>
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden",
            showFilters ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setShowFilters(false)}
        />
        <div
          className={cn(
            "fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-black z-50",
            "transform transition-transform duration-300 ease-out md:hidden",
            "border-r border-neutral-200 dark:border-neutral-800",
            showFilters ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
            <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
            <button
              onClick={() => setShowFilters(false)}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-full pb-24">
            {filterContent}
          </div>
        </div>
      </>
    </div>
  );
}
