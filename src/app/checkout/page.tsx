"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCartStore } from "@/lib/store";

type Step = "information" | "shipping" | "payment";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [step, setStep] = useState<Step>("information");
  const [placed, setPlaced] = useState(false);

  if (items.length === 0 && !placed) {
    return (
      <div className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-heading-2 font-bold mb-3">Your Cart is Empty</h1>
          <p className="text-neutral-500 mb-8 text-sm">Add some items before checking out.</p>
          <Link href="/shop">
            <Button variant="primary" size="md">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="pt-28 pb-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-heading-2 font-bold mb-3">Order Placed!</h1>
          <p className="text-neutral-500 text-sm mb-8">
            Thank you for your order. You&apos;ll receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <Link href="/shop">
              <Button variant="primary" size="md">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const steps: { key: Step; label: string }[] = [
    { key: "information", label: "Information" },
    { key: "shipping", label: "Shipping" },
    { key: "payment", label: "Payment" },
  ];

  const currentIdx = steps.findIndex((s) => s.key === step);

  return (
    <div className="pt-28 pb-16 md:pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/cart"
          className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Cart
        </Link>

        <h1 className="text-heading-2 md:text-heading-1 font-bold mb-8">Checkout</h1>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 ${i <= currentIdx ? "text-black dark:text-white" : "text-neutral-400"}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  i <= currentIdx ? "bg-black text-white dark:bg-white dark:text-black" : "bg-neutral-200 dark:bg-neutral-800"
                }`}>
                  {i + 1}
                </div>
                <span className="text-xs font-medium hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 h-px ${i < currentIdx ? "bg-black dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-8">
            {step === "information" && (
              <div className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider">Contact Information</h2>
                <Input label="Email" id="email" type="email" placeholder="your@email.com" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="First Name" id="firstName" placeholder="John" />
                  <Input label="Last Name" id="lastName" placeholder="Doe" />
                </div>
                <Button size="md" onClick={() => setStep("shipping")}>
                  Continue to Shipping
                </Button>
              </div>
            )}

            {step === "shipping" && (
              <div className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider">Shipping Address</h2>
                <Input label="Address" id="address" placeholder="123 Main Street" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="City" id="city" placeholder="New York" />
                  <Input label="State" id="state" placeholder="NY" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="ZIP Code" id="zip" placeholder="10001" />
                  <Input label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="md" onClick={() => setStep("information")}>
                    Back
                  </Button>
                  <Button size="md" onClick={() => setStep("payment")}>
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider">Payment</h2>
                <Input label="Card Number" id="card" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry" id="expiry" placeholder="MM/YY" />
                  <Input label="CVC" id="cvc" placeholder="123" />
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="md" onClick={() => setStep("shipping")}>
                    Back
                  </Button>
                  <Button
                    size="md"
                    onClick={() => {
                      clearCart();
                      setPlaced(true);
                    }}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-2">
            <div className="border border-neutral-200 dark:border-neutral-800 p-6 space-y-4 sticky top-28">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Order Summary</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-3">
                    <div className="w-14 h-16 bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 relative">
                              <Image
                                src={item.product.images[0]}
                                alt={item.product.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium truncate">{item.product.name}</p>
                      <p className="text-[11px] text-neutral-500">{item.selectedColor} / {item.selectedSize} x{item.quantity}</p>
                      <p className="text-xs font-semibold mt-0.5">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Shipping</span>
                  <span className="font-medium text-xs text-neutral-400">Free</span>
                </div>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                <div className="flex justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">{formatPrice(getTotal())}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-neutral-500 pt-2">
                <div className="flex items-center gap-1"><Truck size={14} /> Free Shipping</div>
                <div className="flex items-center gap-1"><Shield size={14} /> Secure Checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
