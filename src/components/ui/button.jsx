import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95";
  
  const variants = {
    default: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-xl",
    outline: "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-white/90 backdrop-blur-sm",
    gold: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white hover:shadow-xl",
    glass: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
  };
  
  const sizes = {
    sm: "h-9 px-4 py-2 text-sm",
    default: "h-12 px-6 py-3 text-base",
    lg: "h-14 px-8 py-4 text-lg",
    xl: "h-16 px-10 py-5 text-xl"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }
