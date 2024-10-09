import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const tagVariants = cva(
  "tag",
  {
    variants: {
      variant: {
        default:"",
        secondary:"secondary",
      },
      size: {
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

export interface TagProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagVariants> {
    asChild?: boolean
    closable?: boolean
    onClose?: () => void
    tagIcon?: React.ReactNode
}

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  ({ className, variant, size, asChild = false, closable = false, onClose, tagIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(tagVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {tagIcon && <span className="leading-item">{tagIcon}</span>}
        {children}
        {closable && (
          <div
            className="btn-close"
            onClick={(e) => {
              e.stopPropagation()
              onClose?.()
            }}
          >
            <XIcon />
          </div>
        )}
      </Comp>
    )
  }
)
Tag.displayName = "Tag"

export { Tag, tagVariants }
