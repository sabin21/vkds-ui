"use client"

import { BrandsNaverN } from '@/components/icons/icons_brands';

export default function ComViewContent() {
    
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
        이미지 소스를 사용할 수 없는 경우 또는 소스가 지정되지 않은 경우 아바타 구성 요소는 기본 이미지를 표시합니다.
        </p>
      </div>      
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">기본사용예시</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row justify-center">

            <div className="avatar xs">
              <div className="avatar-inner"></div>
              <div className="badge icon xs align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div> 
            
            <div className="avatar sm">
              <div className="avatar-inner"></div>
              <div className="badge icon sm align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar regular">
              <div className="avatar-inner"></div>
              <div className="badge icon align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar lg">
              <div className="avatar-inner"></div>
              <div className="badge icon lg align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar xl">
              <div className="avatar-inner"></div>
              <div className="badge icon xl align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar xs" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon xs align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div> 

            <div className="avatar sm" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon sm align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar regular" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar lg" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon lg align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar xl" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon xl align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

          </span>
          
        </div>  
      </div>
    </div>

    <div className="component-view-wrap" data-theme="dark">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row justify-center">

          <div className="avatar xs">
              <div className="avatar-inner"></div>
              <div className="badge icon xs align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div> 
            
            <div className="avatar sm">
              <div className="avatar-inner"></div>
              <div className="badge icon sm align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar regular">
              <div className="avatar-inner"></div>
              <div className="badge icon align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar lg">
              <div className="avatar-inner"></div>
              <div className="badge icon lg align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar xl">
              <div className="avatar-inner"></div>
              <div className="badge icon xl align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar xs" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon xs align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div> 

            <div className="avatar sm" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon sm align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar regular" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar lg" avatar-type="initial">
              <div className="avatar-inner">김</div>
              <div className="badge icon lg align-br icon-bg-naver">
                <BrandsNaverN />
              </div>
            </div>

            <div className="avatar xl" avatar-type="initial">
              <div className="avatar-inner">김</div>
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