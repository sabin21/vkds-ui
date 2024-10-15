"use client"

import { ActionButton } from "@/components/ui/action-button";
import { 
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription, } from "@/components/ui/sheet";


export default function ComViewContent() {
  
  return (
    <div className="content-wrap">

    <span className="section-block level2">
      <h4 className="view-block-title">기본사용 예시</h4>
    
    <div className="component-view-wrap">
      <div className="inner-view" style={{flexDirection:"column"}}>
        <div className="example-row">

        <Sheet>
          <SheetTrigger asChild>
            <ActionButton variant="secondary">Sheet 열기</ActionButton>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>헤드라인 텍스트</SheetTitle>
              <SheetDescription>
                Pagination은 주어진 컨텍스트 내에서 로드된 페이지 또는 다른 콘텐츠의 수를 전달합니다. 사용자에게 현재 위치를 보여주고 이전, 다음 및 마지막 페이지에 액세스할 수 있도록 합니다.
              </SheetDescription>
            </SheetHeader>
            <div className="sheet-body">
              <div className="flex w-full h-16 bg-gray-200 rounded-[8px]"></div>
              <div className="flex w-full h-16 bg-gray-200 rounded-[8px]"></div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <ActionButton type="submit" size={'sm'}>상세보기</ActionButton>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        </div>

        {/* <div className="example-row">
          <div style={{width: "390px", height: "600px", border:"1px solid"}}>          
            <div className="sheet-content" style={{flexShrink:"0", width: "350px"}}>
              <div className="sheet-header">
                <h2 className="sheet-title">
                  헤드라인 텍스트
                </h2>
                <p className="sheet-desc">
                  Pagination은 주어진 컨텍스트 내에서 로드된 페이지 또는 다른 콘텐츠의 수를 전달합니다. 사용자에게 현재 위치를 보여주고 이전, 다음 및 마지막 페이지에 액세스할 수 있도록 합니다.
                </p>
              </div>
              <div className="sheet-body">
                <div className="flex w-full h-16 bg-gray-200 rounded-[8px]"></div>
                <div className="flex w-full h-16 bg-gray-200 rounded-[8px]"></div>
              </div>
              <div className="sheet-footer">
                <ActionButton type="submit" size={'sm'}>상세보기</ActionButton>
              </div>
            </div>
          </div>
        </div> */}
        

      </div>
    </div>

    </span>

  </div>
  );
}