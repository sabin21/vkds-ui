import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "",
  {
    variants: {
      variant:{
        default: "",
        strong:"strong"
      },
      inputSize: {
        xs: "xs",
        sm: "sm",
        default: "",
        lg: "lg"
      },
    },
    defaultVariants: {
      variant:"default",
      inputSize: "default",
    }
  }
)

export interface InputProps 
 extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input"
    return (
      <Comp
        type={type}
        className={cn(inputVariants({ variant, inputSize:"default" }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }