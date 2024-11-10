"use client"

export default function ComViewContent() {
  
  return (
    <div className='content-wrap'>
      <div className="section-block level2">

        <div className="guide-title-level1">
          <h4 className="title">Typeface</h4>
          <p>중앙행정기관 사이트에서는 기본 글꼴로 국문과 영문 모두 Pretendard GOV를 사용한다.</p>
        </div>

        <img src="/img/guide_doc/typo_typeface.png" className="full-img" />
        
        <div className="guide-title-level1">
          <h4 className="title">Type Scale</h4>
          <ul>
            <li>-다양한 크기의 텍스트를 일관되게 사용할 수 있도록 스타일에 따라 구분하여 정의한다. </li>
            <li>-반응형에 대응하기 위하여 폰트 규격은 개발 시 코드상에서는 rem 값을 사용한다. </li>
            <li>-rem 기본값은 개발의 용이함을 위해 html 루트 요소의 폰트 크기를 기준으로 10px or 62.5%를 기준점으로 px로 환산하여 사용한다. </li>
          </ul>
          


        </div>

        <img src="/img/guide_doc/typo_scale_table.png" className="full-img" />
                
        <div className="guide-title-level1">
          <h4 className="title">Text Hierarchy</h4>
          <p>타이포그래피 시스템에는 독자가 헤더나 타이틀, 부제목, 본문 카피 등과 같은 상위 수준의 정보를 구별하는 데 도움이 되는 계층구조가 있습니다. 
            가장 기본적인 디자인 규칙은 중요한 것이 있다면 독자가 가장 먼저 알아차릴 수 있도록 해야 한다는 것입니다. 크게, 굵게, 눈에 띄게 만들어야 합니다. 
            다른 텍스트 스타일은 중요성이 낮아짐에 따라 크기와 굵기가 낮아져야 합니다. 소제목은 헤더보다 약간 작고, 본문 카피는 소제목보다 약간 작고, 캡션이나 Detail은 본문보다 더 작습니다. <br /><br />

가장 큰 것부터 가장 작은 것 순으로, 위에서 아래로 텍스트를 배치하면 계층 구조가 매우 명확해지고, 화면 판독기를 사용하는 방문자는 해당 계층 구조에 따라 페이지 콘텐츠를 훑어볼 수도 있습니다. 즉, 방문자는 H1 태그를 페이지에서 가장 중요한 정보로 해석하고, 그다음 H2, H3 등으로 해석한 다음, 이러한 헤더를 기준으로 페이지의 섹션을 더 자세히 살펴볼 수 있습니다.  </p>
        </div>

        <img src="/img/guide_doc/typo_hierarchy.png" className="full-img" />

      </div>
    </div>
  );
}