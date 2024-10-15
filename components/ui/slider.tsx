"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  onValueChange?: (value: number[]) => void;
  // showMinMax?: boolean;
}

const Slider = React.forwardRef<
React.ElementRef<typeof SliderPrimitive.Root>,
SliderProps
>(({ className, onValueChange,  ...props }, ref) => {
const handleValueChange = (value: number[]) => {
  if (onValueChange) {
    onValueChange(value);
  }
};


  return (
    <div className="slider-wrap-inner">
      
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "touch-none select-none slider",
          className
        )}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className="slider-track">
          <SliderPrimitive.Range className="absolute h-full bg-primary slider-track-range" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="slider-thumb" />
      </SliderPrimitive.Root>
      
    </div>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
