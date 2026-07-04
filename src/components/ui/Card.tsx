import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group/card",
        hover && "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100 dark:bg-neutral-900",
        "aspect-[4/5]",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-4 space-y-1.5", className)} {...props} />;
}
