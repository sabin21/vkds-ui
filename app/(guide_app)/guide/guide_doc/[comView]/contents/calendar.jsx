"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

export default function ComViewContent() {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
         이 Calendar 컴포넌트는 
         <Link href={"https://daypicker.dev/"} target="_blank"> React DayPicker </Link>
         
          를 기반으로 제작되었습니다. 세부적인 설정과 정보는 링크를 확인하시기 바랍니다.
        </p>
      </div>      
    </div>

    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-column">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </span>

        </div>  
      </div>
    </div>

    </div>
  );
}