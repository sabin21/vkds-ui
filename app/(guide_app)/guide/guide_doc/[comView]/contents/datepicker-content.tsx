"use client"

import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"
 
// import { cn } from "@/lib/utils"
// import { ActionButton } from "@/components/ui/action-button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

export default function ComViewContent() {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="content-wrap">
    
    <div className="guide-title-level1">
      <h4 className="title">Anatomy</h4>
    </div>

    <img src="/img/guide_doc/datepicker_anatomy.png" className="full-img" />

    <div className="guide-title-level1">
      <h4 className="title">Variants</h4>
    </div>
    <img src="/img/guide_doc/datepicker_size.png" className="full-img" />

    {/* <div className="component-view-wrap">
      <div className="inner-view" style={{backgroundColor:"var(#{$prefix}-color-global-gray-5"}}>
        <div className="example-view" style={{height: "400px", alignItems:"start", paddingTop:"60px"}}>

        <Popover>
          <PopoverTrigger asChild>
            <ActionButton
              variant={"default"}
              size={"sm"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </ActionButton>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        </div>  
      </div>
    </div> */}

    </div>
  );
}