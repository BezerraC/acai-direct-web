import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-[#none] disabled:opacity-50 active:scale-[0.98]",
          variant === "default" &&
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
          variant === "outline" &&
            "border border-border bg-transparent hover:bg-muted text-foreground",
          variant === "ghost" && "hover:bg-muted hover:text-foreground",
          variant === "link" && "text-primary underline-offset-4 hover:underline",
          size === "default" && "h-11 px-5 py-2.5",
          size === "sm" && "h-9 rounded-lg px-3 text-xs",
          size === "lg" && "h-14 rounded-2xl px-8 text-base",
          size === "icon" && "h-10 w-10 p-0",
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
