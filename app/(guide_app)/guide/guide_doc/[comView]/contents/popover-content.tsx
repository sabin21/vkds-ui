"use client"

import Link from "next/link";
import { ActionButton } from "@/components/ui/action-button";
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">
    <span className="view-block-title-wrap">
      <h4 className="view-block-title">구성예시</h4>
    </span>
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view" style={{width:"100%", justifyContent:"center", height: "150px"}}>

        <span className="example-row" style={{width:"100%", display:"flex", gap: "320px", justifyContent:"center"}}>
          <Popover.Root>
            <Popover.Trigger asChild>
              <ActionButton>정보보기</ActionButton>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="popover-content" sideOffset={5}>
                <div className="popover-content-inner">
                  <h5 className="popover-title">헤드라인 타이틀</h5>
                  <span>
                    경주 동궁과 월지는 신라 왕궁의 별궁 터이다. 다른 부속건물들과 함께 왕자가 거처하는 동궁으로 사용되면서, 
                    나라의 경사가 있을 때나 귀한 손님을 맞을 때 이곳에서 연회를 베푼 장소이다.
                  </span>
                </div>
                <div className="popover-footer"> 
                  <ActionButton variant="default" size="xs">상세보기</ActionButton>
                  <ActionButton variant="primary" size="xs">상세보기</ActionButton>
                </div>
                <Popover.Arrow className="popover-arrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <ActionButton>정보보기</ActionButton>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="popover-content" sideOffset={5}>
                <div className="popover-content-inner grid-2x2">
                  <span className="avatar-logo">

                  </span>
                  <div>
                    <h5 className="popover-title sm">대한민국 구석구석</h5>
                      <span>
                        대한민국 국내여행을 위한 필수 동반자
                      </span>
                  </div>
                    
                  </div>
                  <div className="popover-footer">

                  </div>
                <Popover.Arrow className="popover-arrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </span>

        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">구성예시</h4>
    </span>
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view" style={{width:"100%", justifyContent:"center", height: "150px"}}>
        <span className="example-row" style={{width:"100%", display:"flex", gap: "320px", justifyContent:"center"}}>
          <Popover.Root>
            <Popover.Trigger asChild>
              <ActionButton>정보보기</ActionButton>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="popover-content menu" sideOffset={5}>
                <div className="popover-content-inner">
                  <Link className="btn-sns-icon" href={""}><img src="/icons/svg/brands/kakaotalk.svg" alt="" /></Link>
                  <Link className="btn-sns-icon" href={""}><img src="/icons/svg/brands/naver-n.svg" alt="" /></Link>
                  <Link className="btn-sns-icon" href={""}><img src="/icons/svg/brands/kakao-story.svg" alt="" /></Link>
                  <Link className="btn-sns-icon" href={""}><img src="/icons/svg/brands/x.svg" alt="" /></Link>
                </div>
                <Popover.Arrow className="popover-arrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger asChild>
              <ActionButton>정보보기</ActionButton>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="popover-content menu" sideOffset={5}>
                <div className="popover-content-inner">
                  <Link className="btn-icon-link" href={""}><img className="icon" src="/icons/svg/brands/kakaotalk.svg" alt="" />카카오톡</Link>
                  <Link className="btn-icon-link" href={""}><img className="icon" src="/icons/svg/brands/naver-n.svg" alt="" />네이버</Link>
                  <Link className="btn-icon-link" href={""}><img className="icon" src="/icons/svg/brands/kakao-story.svg" alt="" />카카오스토리</Link>
                  <Link className="btn-icon-link" href={""}><img className="icon" src="/icons/svg/brands/x.svg" alt="" />엑스</Link>
                </div>
                <Popover.Arrow className="popover-arrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </span>

        </div>  
      </div>
    </div>


    </div>
  );
}