"use client"

import { ActionButton } from '@/components/ui/action-button';
import { BrandsNaverN } from '@/components/icons/icons_brands';

export default function ComViewContent() {
    
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
        배지는 새로운 업데이트와 알림에 대한 정보를 제공하는 데 사용되는 구성 요소입니다. 
        다른 구성 요소와 함께 사용되며 단독으로 사용할 수 없습니다. 배지는 숫자가 있거나 없이 사용할 수 있습니다. 
        아이콘 및 아바타와 같은 다른 구성 요소와 함께 사용되어 새로운 알림을 나타냅니다.
        </p>
      </div>      
    </div>


    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Digit</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view flex-col">
          <span className="flex gap-32">
            <ActionButton>바로가기<span className="badge align-tr">99</span></ActionButton> 
            <ActionButton>바로가기<span className="badge sm align-tr">99</span></ActionButton>
            <ActionButton>바로가기<span className="badge regular align-tr">99+</span></ActionButton>    
          </span>
          <span className="flex gap-32">
            <ActionButton>바로가기<span className="badge strong align-tr">99</span></ActionButton> 
            <ActionButton>바로가기<span className="badge strong sm align-tr">99</span></ActionButton>
            <ActionButton>바로가기<span className="badge strong regular align-tr">99+</span></ActionButton>      
          </span>
        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Dot</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="flex gap-32">
            <div className="relative w-[28px] h-[28px] bg-gray-300 rounded-full">
              <span className="badge align-tr dot gray xs"></span>
            </div>
            <div className="relative w-[32px] h-[32px] bg-gray-300 rounded-full">
              <span className="badge align-tr dot blue sm"></span>
            </div>
            <div className="relative w-[40px] h-[40px] bg-gray-300 rounded-full">
              <span className="badge align-tr dot green"></span>
            </div>
            <div className="relative w-[52px] h-[52px] bg-gray-300 rounded-full">
              <span className="badge align-tr dot red lg"></span>
            </div>
            <div className="relative w-[64px] h-[64px] bg-gray-300 rounded-full">
              <span className="badge align-tr dot purple xl"></span>
            </div>
          </span>
        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Icon</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="flex gap-32">
            <div className="relative w-[28px] h-[28px] bg-gray-300 rounded-full">
              <div className="badge icon xs align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>
            <div className="relative w-[32px] h-[32px] bg-gray-300 rounded-full">
              <div className="badge icon sm align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] bg-gray-300 rounded-full">
              <div className="badge icon align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>
            <div className="relative w-[52px] h-[52px] bg-gray-300 rounded-full">
              <div className="badge icon lg align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>
            <div className="relative w-[64px] h-[64px] bg-gray-300 rounded-full">
              <div className="badge icon xl align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>
          </span>
        </div>  
      </div>
    </div>
      
    </div>
  );
}