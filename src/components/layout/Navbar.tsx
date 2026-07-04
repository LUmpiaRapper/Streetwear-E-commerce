"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?tag=new", label: "New Drops" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const itemCount = useCartStore((s) => s.items.reduce((acc, item) => acc + item.quantity, 0));
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const transparent = !scrolled && isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 h-18 max-w-7xl mx-auto">
          <Link
            href="/"
            className={cn(
              "text-lg font-bold tracking-[0.25em] uppercase transition-colors",
              transparent ? "text-white" : ""
            )}
          >
            STREETWEAR
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase font-medium transition-colors",
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "hover:text-neutral-600 dark:hover:text-neutral-300"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              className={cn(
                "p-2 rounded-full transition-colors",
                transparent
                  ? "text-white hover:bg-white/10"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <ThemeToggle transparent={transparent} />
            <button
              onClick={openCart}
              className={cn(
                "p-2 rounded-full transition-colors relative",
                transparent
                  ? "text-white hover:bg-white/10"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                transparent
                  ? "text-white hover:bg-white/10"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
