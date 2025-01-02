"use client"
// import { ActionButton } from "@/components/ui/action-button";

export default function ComViewContent() {
    
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
          indicator는 Badge와 달리 특정 이벤트나 Task의 현재상태를 표시하기 위한 용도로 사용됩니다.<br/>
          Indicator와 달리 Badge는 아이콘과 함께 사용되며 특정 이벤트 뿐만이 아니라 특징과 특성을
          표시하는 목적으로 사용합니다.
        </p>
      </div>
      
    </div>

    <div className="guide-title-level1">
      <h4 className="title">Anatomy</h4>
    </div>

    <img src="/img/guide_doc/indicator_anatomy.png" className="full-img" />

    <div className="guide-title-level1">
      <h4 className="title">Variants</h4>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Text Style</h4>
    </span>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Default</span>
        <span className="example-row">
          <div className="indicator sm">현재상태</div>
          <div className="indicator">현재상태</div>
        </span>

        <span className="example-sub-title">Informative</span>
        <span className="example-row">
          <div className="indicator sm informative">현재상태</div>
          <div className="indicator informative">현재상태</div>
        </span>

        <span className="example-sub-title">Success</span>
        <span className="example-row">
          <div className="indicator sm success">현재상태</div>
          <div className="indicator success">현재상태</div>
        </span>

        <span className="example-sub-title">Waring</span>
        <span className="example-row">
          <div className="indicator sm warning">현재상태</div>
          <div className="indicator warning">현재상태</div>
        </span>

        <span className="example-sub-title">Emphasis</span>
        <span className="example-row">
          <div className="indicator sm emphasis">현재상태</div>
          <div className="indicator emphasis">현재상태</div>
        </span>

        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Dot & light Style</h4>
    </span>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Default</span>
        <span className="example-row">
          <div className="indicator dot-bg sm">현재상태</div>
          <div className="indicator dot-bg">현재상태</div>
        </span>

        <span className="example-sub-title">Informative</span>
        <span className="example-row">
          <div className="indicator dot-bg sm informative">현재상태</div>
          <div className="indicator dot-bg informative">현재상태</div>
        </span>

        <span className="example-sub-title">Success</span>
        <span className="example-row">
          <div className="indicator dot-bg sm success">현재상태</div>
          <div className="indicator dot-bg success">현재상태</div>
        </span>

        <span className="example-sub-title">Waring</span>
        <span className="example-row">
          <div className="indicator dot-bg sm warning">현재상태</div>
          <div className="indicator dot-bg warning">현재상태</div>
        </span>

        <span className="example-sub-title">Emphasis</span>
        <span className="example-row">
          <div className="indicator dot-bg sm emphasis">현재상태</div>
          <div className="indicator dot-bg emphasis">현재상태</div>
        </span>

        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Dot & Static Style</h4>
    </span>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Default</span>
        <span className="example-row">
          <div className="indicator dot-bg static sm">현재상태</div>
          <div className="indicator dot-bg static">현재상태</div>
        </span>

        <span className="example-sub-title">Informative</span>
        <span className="example-row">
          <div className="indicator dot-bg static sm informative">현재상태</div>
          <div className="indicator dot-bg static informative">현재상태</div>
        </span>

        <span className="example-sub-title">Success</span>
        <span className="example-row">
          <div className="indicator dot-bg static sm success">현재상태</div>
          <div className="indicator dot-bg static success">현재상태</div>
        </span>

        <span className="example-sub-title">Waring</span>
        <span className="example-row">
          <div className="indicator dot-bg static sm warning">현재상태</div>
          <div className="indicator dot-bg static warning">현재상태</div>
        </span>

        <span className="example-sub-title">Emphasis</span>
        <span className="example-row">
          <div className="indicator dot-bg static sm emphasis">현재상태</div>
          <div className="indicator dot-bg static emphasis">현재상태</div>
        </span>

        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Dot & Quite Style</h4>
    </span>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Default</span>
        <span className="example-row">
          <div className="indicator dot-bg quite sm">현재상태</div>
          <div className="indicator dot-bg quite">현재상태</div>
        </span>

        <span className="example-sub-title">Informative</span>
        <span className="example-row">
          <div className="indicator dot-bg quite sm informative">현재상태</div>
          <div className="indicator dot-bg quite informative">현재상태</div>
        </span>

        <span className="example-sub-title">Success</span>
        <span className="example-row">
          <div className="indicator dot-bg quite sm success">현재상태</div>
          <div className="indicator dot-bg quite success">현재상태</div>
        </span>

        <span className="example-sub-title">Waring</span>
        <span className="example-row">
          <div className="indicator dot-bg quite sm warning">현재상태</div>
          <div className="indicator dot-bg quite warning">현재상태</div>
        </span>

        <span className="example-sub-title">Emphasis</span>
        <span className="example-row">
          <div className="indicator dot-bg quite sm emphasis">현재상태</div>
          <div className="indicator dot-bg quite emphasis">현재상태</div>
        </span>

        </div>  
      </div>
    </div>

    </div>
  );
}