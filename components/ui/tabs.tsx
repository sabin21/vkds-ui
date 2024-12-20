"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

type TabsListSize = "sm" | "md" | "lg"

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  orientation?: "horizontal" | "vertical"
  size?: TabsListSize
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, orientation = "horizontal", size = "md", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tabs-group",
      orientation === "horizontal" ? "" : "flex-col",
      {
        "sm": size === "sm" && orientation === "horizontal",
        "md": size === "md" && orientation === "horizontal",
        "lg": size === "lg" && orientation === "horizontal",
        "sm vertical": size === "sm" && orientation === "vertical",
        "md vertical": size === "md" && orientation === "vertical",
        "lg vertical": size === "lg" && orientation === "vertical",
      },
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  size?: TabsListSize
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, size = "md", ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "",
      {
      },
      "tab-item"
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "tabs-content-wrap",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }