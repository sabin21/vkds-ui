"use client"

import { ActionButton } from "@/components/ui/action-button";
import { Button } from "@/components/ui/button";
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCodeIcon, ShareIcon, EllipsisVerticalIcon, HomeIcon } from "lucide-react";

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">

      <img src="/img/guide_doc/doc_heading.png" className="full-img" />

      <div className="guide-title-level1">
        <h4 className="title">Usage</h4>
      </div>

      <div className="section-block level2">
        <div className="component-view-wrap bg-gray-light">
          <div className="inner-view">
            <div className="frame-390" style={{height: '700px', padding: '0'}}>

              <div className="_section-block">
                <span className="block w-full bg-gray-200 rounded-[8px] h-[80px] mt-6"></span>
              </div>
              
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>

              <div className="_section-block">
                <span className="block w-full bg-gray-200 rounded-[8px] h-[140px] "></span>
              </div>

              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
                <span className="trailing-item">
                  <ActionButton variant={'secondary'} size={'xs'}>바로가기</ActionButton>
                </span>
              </div>

              <div className="_section-sub-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">서브레벨 헤드라인</h3>
                  {/* <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p> */}
                </span>
                {/* <span className="trailing-item">
                  <ActionButton variant={'secondary'} size={'xs'}>바로가기</ActionButton>
                </span> */}
              </div>

              <div className="_section-block">
                <span className="block w-full bg-gray-200 rounded-[8px] h-[40px] mt-4"></span>
              </div>
              <div className="_section-block">
                <span className="block w-full bg-gray-200 rounded-[8px] h-[40px] mt-4"></span>
              </div>
              <div className="_section-block">
                <span className="block w-full bg-gray-200 rounded-[8px] h-[40px] mt-4"></span>
              </div>

            </div>  
          </div>
        </div>

        <h4>Trailing item 적용예시</h4>
        <div className="component-view-wrap bg-gray-light">
          <div className="p-20 grid grid-cols-2 gap-16 ">

            <div className="frame-390" style={{minHeight: 'auto', padding: '0'}}>
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
            </div>

            <div className="frame-390" style={{minHeight: 'auto', padding: '0'}}>
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
                <span className="trailing-item">
                  <ActionButton variant={'secondary'} size={'xs'}>바로가기</ActionButton>
                </span>
              </div>
            </div>

            <div className="frame-390" style={{minHeight: 'auto', padding: '0'}}>
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
                <span className="trailing-item">
                  <Button variant={'iconSecondary'} size={'xs'}>
                    <span className="inner-item">
                    <HomeIcon />
                    </span>
                  </Button>
                </span>
              </div>
            </div>

            <div className="frame-390" style={{minHeight: 'auto', padding: '0'}}>
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
                <span className="trailing-item">
                  <Button variant={'iconSecondary'} size={'xs'}>
                    <span className="inner-item">
                    <HomeIcon />
                    </span>
                  </Button>
                </span>
              </div>
            </div>

          </div>
        </div>

        <h4>텍스트 적용예시</h4>
        <div className="component-view-wrap bg-gray-light">
          <div className="p-20 grid grid-cols-2 gap-16 ">

            <div className="frame-390" style={{minHeight: 'auto', padding: '0'}}>
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트 길이 테스트를 위한 예시용 입력 내용</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
                <span className="trailing-item">
                  <Button variant={'iconSecondary'} size={'xs'}>
                    <span className="inner-item">
                    <HomeIcon />
                    </span>
                  </Button>
                </span>
              </div>
            </div>

            <div className="frame-390" style={{minHeight: 'auto', padding: '0'}}>
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading _text-hidden">섹션영역 헤드라인 텍스트 길이 테스트를 위한 예시용 입력한 내용</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
                <span className="trailing-item">
                  <Button variant={'iconSecondary'} size={'xs'}>
                    <span className="inner-item">
                    <HomeIcon />
                    </span>
                  </Button>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}