"use client"

export default function ComViewContent() {
  
  return (
    <div className='content-wrap'>
      <div className="section-block level2">
        
        <div className="guide-title-level1">
          <h4 className="title">Spacing Rule</h4>
          <p>
            4의 배수에 기반한 20개의 Spacing Rule에 따라 모든 요소의 간격을 정합니다. 
            예외 규칙으로 2px사이즈를 사용합니다. 
            이 Spacing Rule는 모든 구성 요소 사이의 공간에 적용해야하는 것이 원칙이며 특수한 상황이어서 
            이 룰을 적용할 수 없는 불가피한 경우에만 예외를 인정합니다.
          </p>
        </div>

        <img src="/img/guide_doc/layout_spacing_unit.png" className="full-img" />
        <img src="/img/guide_doc/layout_spacing_sample.png" className="full-img" />

        <div className="guide-title-level1">
          <h4 className="title">Column Grid / Mobile</h4>
          <p>
            390픽셀 화면 너비의 모바일 기기를 기준으로, 열 그리드는 4개의 열을 포함합니다. 
            열의 수는 기기 크기에 따라 다릅니다. 태블릿에는 8개의 열이 사용되고 PC에는 12개의 열이 사용됩니다. 
            일관성을 유지하기 위해 좌우 여백은 16px로 설정되었습니다. 
          </p>
        </div>
        <h4 className="img-caption">전체 컨테이너</h4>
        <img src="/img/guide_doc/layout_column_1.png" className="full-img" />
        <h4 className="img-caption">2 Column grid</h4>
        <img src="/img/guide_doc/layout_column_2.png" className="full-img" />
        <h4 className="img-caption">3 Column grid</h4>
        <img src="/img/guide_doc/layout_column_3.png" className="full-img" />
        <h4 className="img-caption">4 Column grid</h4>
        <img src="/img/guide_doc/layout_column_4.png" className="full-img" />

      </div>
    </div>
  );
}