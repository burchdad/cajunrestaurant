import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl card-hover",
    gradient: "rounded-2xl bg-gradient-to-br from-white/95 to-red-50/95 backdrop-blur-sm border border-red-200/50 shadow-xl card-hover",
    glass: "rounded-2xl glass-effect shadow-2xl card-hover",
    dark: "rounded-2xl bg-gradient-dark text-white shadow-2xl card-hover"
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        variants[variant],
        "overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("font-bold text-2xl tracking-tight", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
