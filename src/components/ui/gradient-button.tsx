import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group rounded-full h-14 px-8 text-lg",
          "bg-gray-900/80 text-white",
          "before:absolute before:-inset-[2px] before:rounded-full before:bg-gradient-to-r before:from-rose-400 before:to-purple-400",
          "after:absolute after:inset-0 after:rounded-full after:bg-gray-900",
          "hover:before:opacity-100 hover:after:bg-gray-900/95",
          "before:animate-[shimmer_2s_linear_infinite]",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);