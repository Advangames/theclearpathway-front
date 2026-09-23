import Link from "next/link";
import type React from "react";
import { cn } from "@/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type AnchorButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy shadow-gold hover:bg-gold-dark focus-visible:ring-gold",
  outline:
    "border border-navy/45 bg-white/70 text-navy hover:bg-white focus-visible:ring-navy",
  ghost: "text-navy hover:bg-white/10 focus-visible:ring-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-6 text-sm",
  lg: "min-h-12 px-8 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: AnchorButtonProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-md font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      href={href}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 12h14m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
}
