import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full rounded-md border border-[#1A1A1B] bg-[#0A0A0B] px-3 py-2 text-sm text-[#FAFAFA] placeholder:text-[#71717A] transition-all duration-150",
        "focus:border-[#5E6AD2] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2]/20",
        "hover:border-[#2A2A2B]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-[#EF4444] aria-invalid:ring-[#EF4444]/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
