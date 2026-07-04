"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/store";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag size={64} className="mx-auto text-neutral-300 dark:text-neutral-600 mb-6" />
          <h1 className="text-heading-2 font-bold mb-3">Your Cart is Empty</h1>
          <p className="text-neutral-500 mb-8 text-sm">Looks like you haven&apos;t added anything yet.</p>
          <Link href="/shop">
            <Button variant="primary" size="md">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 md:pb-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-heading-2 md:text-heading-1 font-bold">Shopping Cart</h1>
            <p className="text-sm text-neutral-500 mt-1">{items.length} {items.length === 1 ? "item" : "items"}</p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-neutral-500 hover:text-red-500 transition-colors underline underline-offset-2"
          >
            Clear All
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex gap-4 p-4 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="w-24 h-28 bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 relative">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-500">{item.product.brand}</p>
                      <h3 className="text-sm font-semibold mt-0.5">{item.product.name}</h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        {item.selectedColor} / {item.selectedSize}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">{formatPrice(item.product.price)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-700">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                      className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border border-neutral-200 dark:border-neutral-800 p-6 space-y-4 sticky top-28">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                <div className="flex justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">{formatPrice(getTotal())}</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full" size="md">
                  Checkout
                </Button>
              </Link>
              <Link
                href="/shop"
                className="flex items-center justify-center gap-1 text-xs text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={14} />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
