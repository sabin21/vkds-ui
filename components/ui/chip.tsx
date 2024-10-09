import * as React from "react"
import { useState } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "chip",
  {
    variants: {
      variant: {
        default: "",
        outline: "outline"
      },
      size: {
        sm: "sm",
        default: "",
        lg: "lg",
      },
      selected:{
        inactive: "",
        active: "selected"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      selected: "inactive"
    },
  }
)

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof chipVariants> {
    asChild?: boolean
    onChange?: (value: string, isActive: boolean) => void
  }

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, size, asChild = false, selected, children, onChange, ...props }, ref) => {
    const Chip = asChild ? Slot : "button"
    const [chipState, setChipState] = useState(false)

    function toggleAction(e: React.MouseEvent<HTMLElement, MouseEvent>) {
      const newState = !chipState
      setChipState(newState)
      
      if (onChange && typeof children === 'string') {
        onChange(children, newState)
      }
    }

    const selectVariant = chipState ? 'active' : 'inactive'

    return (
      <Chip
        className={cn(chipVariants({ variant, size, selected: selectVariant, className }))}
        ref={ref}
        {...props}
        onClick={toggleAction}
      >
        {children}
      </Chip>
    )
  }
)
Chip.displayName = "Chip"

export { Chip, chipVariants }

