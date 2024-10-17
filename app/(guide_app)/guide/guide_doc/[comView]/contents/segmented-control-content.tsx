"use client"

import {
  SegmentControl,
  SegmentContent,
  SegmentList,
  SegmentTrigger,
} from "@/components/ui/segment-control"
import BannerInline from '@/components/ui/bannerInline';

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">
      <BannerInline type="error" headline="Segment Control은 양옆 스크롤을 사용하지 않으며 화면 최대 너비값 보다 크게 사용하지 않습니다. 이 때문에 항목을 2~4개로 고정합니다." />
      <br />
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
              <div className="w-full h-[80px] rounded-[8px] bg-red-200 mt-[32px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
            </SegmentContent>
            <SegmentContent value="password">
              <div className="w-full h-[120px] rounded-[8px] bg-indigo-200 mt-[32px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
              <div className="w-full h-[24px] rounded-[8px] bg-gray-200 mt-[12px]"> </div>
            </SegmentContent>
          </SegmentControl>
          </span>

        </div>  
      </div>
    </div>

    </div>
  );
}