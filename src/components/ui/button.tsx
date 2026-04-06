import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'secondary' | 'ghost' | 'tertiary' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    let variantClasses = "bg-primary text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-primary/90";
    if (variant === 'secondary') variantClasses = "bg-surface-container-lowest text-on-surface border border-outline-variant/15 hover:bg-surface-container-low";
    if (variant === 'ghost') variantClasses = "hover:bg-surface-container hover:text-on-surface";
    if (variant === 'tertiary') variantClasses = "text-primary font-bold hover:bg-primary/10";
    if (variant === 'link') variantClasses = "text-primary underline-offset-4 hover:underline";

    let sizeClasses = "h-9 px-4 py-2";
    if (size === 'sm') sizeClasses = "h-8 rounded-md px-3 text-xs";
    if (size === 'lg') sizeClasses = "h-14 rounded-md px-8";
    if (size === 'icon') sizeClasses = "h-9 w-9";

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantClasses,
          sizeClasses,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
