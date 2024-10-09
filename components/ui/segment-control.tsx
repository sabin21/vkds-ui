"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const SegmentControl = TabsPrimitive.Root

const SegmentList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(

      "segment-control-list",
      className
    )}
    {...props}
  />
))

SegmentList.displayName = TabsPrimitive.List.displayName

const SegmentTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "segment-control-trigger",
      className
    )}
    {...props}
  />
))
SegmentTrigger.displayName = TabsPrimitive.Trigger.displayName

const SegmentContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "segment-control-content",
      className
    )}
    {...props}
  />
))
SegmentContent.displayName = TabsPrimitive.Content.displayName

export { SegmentControl, SegmentList, SegmentTrigger, SegmentContent }
