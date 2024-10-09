"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { ko } from "date-fns/locale";

import { cn } from "@/lib/utils"
import { ActionButtonVariants } from "@/components/ui/action-button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ko}
      showOutsideDays={showOutsideDays}
      className={cn("calendar", className)}
      classNames={{
        month: "month",
        months: "months",
        caption: "caption",
        caption_label: "caption-label",
        nav: "calendar-nav",
        nav_button: cn(
          ActionButtonVariants({ variant: "quite", size: "xs"  }),
          "h-7 w-7 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1 calendar-table",
        head_row: "calendar-table-head",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] table-head-cell",
        row: "calendar-table-row",
        cell: "calendar-cell [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          ActionButtonVariants({ variant: "quite", size: "xs" }),
          "calendar-day"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-8 w-8" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-8 w-8" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
