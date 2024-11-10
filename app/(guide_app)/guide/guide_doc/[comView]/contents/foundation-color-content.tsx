"use client"

export default function ComViewContent() {
  
  return (
    <div className='content-wrap'>
      <div className="section-block level2">

        <div className="guide-title-level1">
          <h4 className="title">Key colors</h4>
          <p>Key colors는 Gray Color, Primary color로 구성됩니다.</p>
        </div>
        
        <div className="guide-title-level2">
          <h4 className="title">Gray color</h4>
          <p>Gray color는 전체 Text 및 UI Component 요소들에 전반적으로 적용되는 중성적인 컬러입니다. </p>
        </div>
        <img src="/img/guide_doc/color_gray.png" className="full-img" />


        <div className="guide-title-level2">
          <h4 className="title">Primary color</h4>
          <p>Primary Color는 대구석의 Brand Identity를 상징함과 동시에 Point Color로서 사용됩니다.</p>
        </div>
        <img src="/img/guide_doc/color_primary.png" className="full-img" />
        

        
        <div className="guide-title-level1">
          <h4 className="title">Static colors</h4>
          <p>Static colors는 Theme에 따라 변화하지 않는 고정된 색상들의 팔레트 입니다. 배경에 색상이나 이미지가 있는 UI요소나 텍스트에 사용됩니다. App의 상태나 사용자 알림에서도 이 Static colors palette를 사용합니다.</p>
        </div>

        <img src="/img/guide_doc/color_static.png" className="full-img" />
        <span className='block h-[32px]'></span>
        <img src="/img/guide_doc/color_static_example.png" className="full-img" />

        <div className="guide-title-level2">
          <h4 className="title">Color Semantic</h4>
          <p>Color Semantic는 App의 상태나 맥락정보를 제공하기위해 사용됩니다. 예를 들어 특정 Task상태가 Success, Error, Warning 상태일때 그 상태를 상징하기 위해 사용됩니다.</p>
        </div>
        <span className='block h-[32px]'></span>
        <img src="/img/guide_doc/color_semantic_example.png" className="full-img" />

        <div className="guide-title-level1">
          <h4 className="title">Palette</h4>
          
        </div>
        <img src="/img/guide_doc/color_palette.png" className="full-img" />

      </div>
    </div>
  );
}