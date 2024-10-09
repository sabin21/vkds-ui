"use client"

import {
  SegmentControl,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
} from "@/components/ui/segment-control"

export default function ComViewContent() {
    
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
          Use default buttons for most actions that aren't the main call to action for a page or area. 
          Default buttons are less prominent than primary buttons.
        </p>
      </div>      
    </div>

    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-column">

          <SegmentControl defaultValue="account" className="w-[400px]">
            <SegmentList className="grid w-full grid-cols-2">
              <SegmentTrigger value="account">Account</SegmentTrigger>
              <SegmentTrigger value="password">Password</SegmentTrigger>
            </SegmentList>
            <SegmentContent value="account">
              jjhkkkhh
            </SegmentContent>
            <SegmentContent value="password">
              dsfdsdf
            </SegmentContent>
          </SegmentControl>
          </span>

        </div>  
      </div>
    </div>

    </div>
  );
}