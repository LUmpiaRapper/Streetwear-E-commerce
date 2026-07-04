import Link from "next/link";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=sneakers", label: "Sneakers" },
    { href: "/shop?category=apparel", label: "Apparel" },
    { href: "/shop?category=accessories", label: "Accessories" },
  ],
  Company: [
    { href: "#", label: "About" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Sustainability" },
    { href: "#", label: "Press" },
  ],
  Support: [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Shipping & Returns" },
    { href: "#", label: "Size Guide" },
    { href: "#", label: "Contact" },
  ],
  Connect: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Twitter / X" },
    { href: "#", label: "TikTok" },
    { href: "#", label: "YouTube" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-neutral-400 dark:text-neutral-500">
                {title}
              </h4>
              <ul className="space-y-3">
                  {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-white dark:text-neutral-600 dark:hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-neutral-800 dark:border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-bold tracking-[0.25em] uppercase"
          >
            STREETWEAR
          </Link>
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} STREETWEAR. All rights reserved.
          </p>
        </div>
        <p className="mt-6 text-center text-[10px] text-neutral-600 dark:text-neutral-400 tracking-wide">
          This website is a project showcase only. All products, images, and content are for demonstration purposes and are not available for purchase.
        </p>
      </div>
    </footer>
  );
}
