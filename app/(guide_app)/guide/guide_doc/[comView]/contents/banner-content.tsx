"use client"

import BannerInline from '@/components/ui/bannerInline';

export default function ComViewContent() {
  
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
          Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 
          단순한 형태와 색상으로 지나치게 시선을 끌지 않도록 디자인되었습니다. 또한 다양한 곳에 적용될 수 있도록
          스타일과 사이즈의 Variation을 다양하게 사용합니다. 
        </p>
      </div>
      
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">기본형</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">Infomative</span>
          <span className="example-row">
            <BannerInline type="info" headline="인라인배너 헤드라인 타이틀 텍스트" />
          </span>

          <span className="example-sub-title">Warning</span>
          <span className="example-row">
            <BannerInline type="warning" headline="인라인배너 헤드라인 타이틀 텍스트" />
          </span>

          <span className="example-sub-title">Success</span>
          <span className="example-row">
            <BannerInline type="success" headline="인라인배너 헤드라인 타이틀 텍스트" />
          </span>

          <span className="example-sub-title">Error</span>
          <span className="example-row">
            <BannerInline type="error" headline="인라인배너 헤드라인 타이틀 텍스트" />
          </span>

          <span className="example-sub-title">Neutral</span>
          <span className="example-row">
            <BannerInline type="neutral" headline="인라인배너 헤드라인 타이틀 텍스트 인라인배너 헤드라인 타이틀 텍스트 인라인배너 헤드라인 타이틀 텍스트 인라인배너 헤드라인 타이틀 텍스트" />
          </span>
        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Expandable</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">
          <BannerInline
              type="info"
              headline="인라인배너 헤드라인 타이틀 텍스트"
              expandable
          >
            <p>지도나 사진과 같은 복잡한 배경에서 플로팅 탐색 헤더를 사용합니다. 플로팅 탐색 헤더는 아이콘 뒤에 배경색이 있어(배경 보호) 항상 볼 수 있습니다.</p>
          </BannerInline>
          </span>
        </div>  
      </div>
    </div>

    </div>
  );
}