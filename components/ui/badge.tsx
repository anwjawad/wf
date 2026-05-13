import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'blue' | 'teal' | 'purple' | 'orange' | 'green';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    outline: "text-foreground",
    blue: "border-transparent bg-medical-blue/10 text-medical-blue hover:bg-medical-blue/20",
    teal: "border-transparent bg-medical-teal/10 text-medical-teal hover:bg-medical-teal/20",
    purple: "border-transparent bg-medical-purple/10 text-medical-purple hover:bg-medical-purple/20",
    orange: "border-transparent bg-medical-orange/10 text-medical-orange hover:bg-medical-orange/20",
    green: "border-transparent bg-medical-green/10 text-medical-green hover:bg-medical-green/20",
  }
  
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  )
}

export { Badge }
