"use client"

import {
  SegmentControl,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
} from "@/components/ui/segment-control"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">
      
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