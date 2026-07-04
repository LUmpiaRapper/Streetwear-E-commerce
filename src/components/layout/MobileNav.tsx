"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  { href: "/shop?tag=new", label: "New Drops" },
  { href: "/shop?category=sneakers", label: "Sneakers" },
  { href: "/shop?category=apparel", label: "Apparel" },
  { href: "/shop?category=accessories", label: "Accessories" },
  { href: "/about", label: "About" },
];

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-black z-50",
          "transform transition-transform duration-300 ease-out md:hidden",
          "border-r border-neutral-200 dark:border-neutral-800",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-sm font-bold tracking-[0.25em] uppercase">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="p-6 space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-3 text-sm tracking-[0.1em] uppercase font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
