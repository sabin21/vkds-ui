"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const checkboxVariants = cva(
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

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ className:"checkbox", variant:"default", size:"default" }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("")}
    >
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
