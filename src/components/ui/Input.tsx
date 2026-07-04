"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-xs font-medium uppercase tracking-[0.1em] text-neutral-600 dark:text-neutral-400">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full h-12 px-4 bg-transparent border-2 border-neutral-200 dark:border-neutral-700",
            "text-sm text-black dark:text-white placeholder:text-neutral-400",
            "transition-colors duration-200",
            "focus:outline-none focus:border-black dark:focus:border-white",
            "hover:border-neutral-400 dark:hover:border-neutral-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
