
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline:
          "border border-primary/10 bg-transparent hover:border-primary/40 text-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-6 text-base",
        icon: "h-9 w-9",
      },
      hasArrow: {
        true: "pr-12", // Extra padding for arrow
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hasArrow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, hasArrow, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, hasArrow, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
        {hasArrow && (
          <ArrowRight className="absolute right-4 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
