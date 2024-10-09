import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps  } from "class-variance-authority";

import { cn } from "@/lib/utils"

const ActionButtonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "action-btn",
        primary: "action-btn primary",
        accent:"action-btn accent",
        secondary:"action-btn secondary",
        quite: "action-btn quite",        
        link:"action-btn link",
        staticWhite: "action-btn static-white",
        icon: "action-btn icon-button",
        iconCircle: "action-btn icon-button circle",
        iconCirclePrimary: "action-btn icon-button circle primary",
        iconSecondary: "action-btn icon-button secondary",
        iconPrimary: "action-btn icon-button primary",
        iconCircleSecondary: "action-btn icon-button circle secondary",
        linkIcon:"action-btn icon-button link",
        iconAccent: "action-btn icon-button accent",
        iconCircleAccent: "action-btn icon-button circle accent",
        iconQuite: "action-btn icon-button quite",
        iconCircleQuite: "action-btn icon-button circle quite",
        iconStaticWhite: "action-btn icon-button static-white",
        iconCircleStaticWhite: "action-btn icon-button circle static-white",
        overlay: "action-btn overlay",
        iconOverlay: "action-btn icon-button overlay",
        iconCircleOverlay: "action-btn icon-button circle overlay",
      },
      size: {
        xxs: "xxs",
        xs: "xs",
        default: "",
        sm: "sm",
        lg: "lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ActionButtonVariants> {
  asChild?: boolean
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ActionButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
ActionButton.displayName = "ActionButton"

export { ActionButton, ActionButtonVariants }
