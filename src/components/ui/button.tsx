import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#5E6AD2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]",
  {
    variants: {
      variant: {
        primary: "bg-[#5E6AD2] text-white hover:bg-[#7C85E3] active:bg-[#4E5AC2] shadow-sm",
        secondary: "bg-transparent border border-[#1A1A1B] text-[#D4D4D8] hover:border-[#5E6AD2] hover:text-[#FAFAFA]",
        ghost: "bg-transparent text-[#D4D4D8] hover:bg-[#1A1A1B] hover:text-[#FAFAFA]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
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
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
