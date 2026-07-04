import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "new" | "sale" | "limited" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]",
        variant === "default" && "bg-black text-white dark:bg-white dark:text-black",
        variant === "new" && "bg-accent text-white",
        variant === "sale" && "bg-red-600 text-white",
        variant === "limited" && "bg-black text-white dark:bg-white dark:text-black",
        variant === "outline" && "border border-current text-neutral-600 dark:text-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
