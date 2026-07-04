"use client";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 h-12 px-5 bg-transparent border-2 border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:border-accent transition-colors text-sm dark:border-black/20 dark:text-black dark:placeholder:text-neutral-400"
        required
      />
      <button
        type="submit"
        className="h-12 px-8 bg-accent text-white text-xs font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
