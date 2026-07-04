"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-black z-50",
          "transform transition-transform duration-300 ease-out",
          "border-l border-neutral-200 dark:border-neutral-800",
          "flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="text-sm font-semibold">Cart ({items.length})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <ShoppingBag size={48} className="text-neutral-300 dark:text-neutral-600" />
            <p className="text-sm text-neutral-500">Your cart is empty</p>
            <Button variant="outline" size="sm" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                >
                  <div className="w-20 h-24 bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 relative">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold uppercase tracking-wider truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() =>
                          removeItem(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="ml-auto text-xs text-neutral-400 hover:text-red-500 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                <span className="font-semibold">{formatPrice(getTotal())}</span>
              </div>
              <p className="text-xs text-neutral-500">
                Shipping & taxes calculated at checkout
              </p>
              <Link href="/checkout" onClick={closeCart}>
                <Button className="w-full" size="md">
                  Checkout
                </Button>
              </Link>
              <button
                onClick={closeCart}
                className="w-full text-xs text-neutral-500 hover:text-black dark:hover:text-white transition-colors underline underline-offset-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
