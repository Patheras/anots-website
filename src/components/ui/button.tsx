import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]",
  {
    variants: {
      variant: {
        primary: "group relative overflow-hidden bg-[#0A0A0B] border border-white/10 text-white shadow-[0_0_16px_-4px_rgba(255,255,255,0.2)] hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.4)] hover:border-white/20 hover:scale-[1.02] transition-all duration-500",
        magic: "group relative overflow-hidden bg-gradient-to-r from-[#5E6AD2] via-[#7C85E3] to-[#5E6AD2] bg-[length:200%_100%] text-white shadow-[0_0_16px_-4px_rgba(94,106,210,0.4)] hover:shadow-[0_0_24px_-6px_rgba(94,106,210,0.6)] hover:bg-[position:100%_0] hover:scale-[1.02] transition-all duration-500 disabled:hover:shadow-[0_0_16px_-4px_rgba(94,106,210,0.4)] disabled:hover:scale-100",
        secondary: "bg-transparent border border-white/20 text-[#D4D4D8] hover:border-[#5E6AD2] hover:text-[#FAFAFA] anots-hover",
        ghost: "bg-transparent text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  // Primary and Magic variants with shimmer effect
  if (variant === "primary" || variant === "magic") {
    return (
      <Comp
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl" />
        
        {/* Shimmer sweep - WOOOOSH! */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </div>
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        {/* Border glow */}
        <div className={`absolute inset-0 ${variant === "primary" ? "rounded-md" : "rounded-2xl"} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ${variant === "magic" ? "ring-[#5E6AD2]/30" : "ring-white/20"}`} />
      </Comp>
    )
  }

  // Standard variants
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
