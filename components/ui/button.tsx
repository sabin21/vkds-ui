import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        default:"",
        primary:"primary",
        strong:"strong",
        outline:"outline",
        secondary:"secondary",
        secondaryOutline:"secondary outline",
        staticWhite:"static-white",
        staticWhiteOutline:"static-white outline",
        icon: "icon-button",
        iconOutline: "icon-button outline",
        iconSecondary: "icon-button secondary",
        iconStrong: "icon-button strong",
        iconSecondaryOutline: "icon-button secondary outline",
        staticWhiteIcon:"icon-button static-white",
        staticWhiteIconOutline:"icon-button static-white outline",
      },
      size: {
        xs: "xs",
        sm: "sm",
        default: "",
        lg: "lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
