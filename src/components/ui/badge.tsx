import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "outline";

const badgeVariants: Record<BadgeVariant, string> = {
  default: "bg-[color:var(--accent)] text-white hover:bg-[color:var(--accent-strong)]",
  secondary:
    "bg-[color:rgba(31,138,112,0.12)] text-[color:var(--accent-strong)] hover:bg-[color:rgba(31,138,112,0.22)]",
  outline: "border border-[color:var(--border)] text-[color:var(--text)]",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
