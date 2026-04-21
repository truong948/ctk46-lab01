import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
	| "default"
	| "destructive"
	| "outline"
	| "secondary"
	| "ghost"
	| "link";
type ButtonSize = "default" | "sm" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
	default:
		"bg-[color:var(--accent)] text-white shadow-[0_14px_30px_-20px_rgba(21,95,79,0.95)] hover:bg-[color:var(--accent-strong)]",
	destructive:
		"bg-red-600 text-white shadow-[0_14px_30px_-20px_rgba(127,29,29,0.95)] hover:bg-red-700",
	outline:
		"border border-[color:var(--border)] bg-white/70 text-[color:var(--text)] hover:bg-[color:var(--surface-soft)]",
	secondary:
		"bg-[color:rgba(31,138,112,0.12)] text-[color:var(--accent-strong)] hover:bg-[color:rgba(31,138,112,0.2)]",
	ghost: "text-[color:var(--text)] hover:bg-[color:var(--surface-soft)]",
	link: "text-[color:var(--accent-strong)] underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
	default: "h-10 px-4 py-2",
	sm: "h-9 rounded-md px-3",
	lg: "h-11 rounded-md px-8",
};

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "default", size = "default", ...props }, ref) => {
		return (
			<button
				className={cn(
					"inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background-soft)] disabled:pointer-events-none disabled:opacity-50",
					variantClasses[variant],
					sizeClasses[size],
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Button.displayName = "Button";
