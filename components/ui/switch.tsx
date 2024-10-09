"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"

const switchVariants = cva(
  "",{
    variants:{
      variant:{
        default:"",
        emphasis:"emphasis"
      },
      size:{
        sm: "sm",
        default:"",
        lg:"lg"
      }
    },
    defaultVariants:{
      variant: "default",
      size: "default"
    }
  }
)

export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof switchVariants> {
    asChild?: boolean
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ className:"switch", variant, size}))}
    {...props}
    ref={ref}
  >
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch, switchVariants }
