import React from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "_divider",
  {
    variants: {
      variant: {
        default: "color-default",
        primary: "bg-blue-500",
        secondary: "bg-green-500",
        accent: "bg-purple-500"
      },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: ""
      },
      orientation: {
        horizontal: "",
        vertical: "vertical"
      }
    },
    compoundVariants: [
      { orientation: "horizontal", size: "xs", className: "h-xs" },
      { orientation: "horizontal", size: "sm", className: "h-sm" },
      { orientation: "horizontal", size: "md", className: "h-md" },
      { orientation: "horizontal", size: "lg", className: "h-lg" },
      { orientation: "vertical", size: "xs", className: "w-xs" },
      { orientation: "vertical", size: "sm", className: "w-sm" },
      { orientation: "vertical", size: "md", className: "w-md" },
      { orientation: "vertical", size: "lg", className: "w-lg" }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      orientation: "horizontal"
    }
  }
)

export interface DividerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className, 
    variant,
    size,
    orientation,
    ...props
  }, ref) => {

  return (
    <div 
      ref={ref}
      className={cn(dividerVariants({ variant, size, orientation, className }))}
      {...props}
    />
  );
});

Divider.displayName = 'Divider';

export default Divider;