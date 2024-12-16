"use client"

export default function ComViewContent() {
  
  return (
    <div className='content-wrap guide-main-wrap'>
      <div className="section-block level2">

        <div className="guide-title-level2">
          <h4 className="title">소개</h4>
          <p>
          '대한민국 구석구석 Design System'은 디지털 서비스를 구성하는 여러 User interface 요소 중 사용 빈도가 높고 User Experience 품질에 큰 영향을 주는 공통 구성 요소, 
          설계 및 구현에 대한 일반 원칙과 세부 사항을 제시합니다.
          </p>
        </div>
        
        <div className="guide-title-level2 mb-12">
          <h4 className="title">목적</h4>
          본 Design System의 개발 목적은 다음과 같습니다.
          <ul className="guide-list-wrap">
            <li>
              <span className="guide-list-title">1. 사용자 경험의 제고와 이용자 만족도 향상</span>
              <span className="guide-list-body">
                대한민국 구석구석의 UI/UX를 일관된 기준에 따라 설계함으로써 사용자가 편리하고 효과적으로 서비스를 이용할 수 있도록 만든다.
              </span>
            </li>
            <li>
              <span className="guide-list-title">2. 사용자 경험을 향상하기 위한 접근 방법과 지침 제시</span>
              <span className="guide-list-body">
              좋은 사용자 경험이란 무엇인가에 대한 방향성을 제시하고 제시된 기준을 따를 수 있는 방법을 안내한다. 
              사용자 인터페이스와 경험을 설계하는 방법에 대한 가이드라인과 Design System 내용 들 중에서 공통적으로 제시하고 있는 항목을 적용하였습니다.
              </span>
            </li>
            <li>
              <span className="guide-list-title">3. UI/UX 개발 및 관리에 투입되는 비용 절약</span>
              <span className="guide-list-body">
              본 디자인시스템은 대한민국 구석구석 서비스를 개발하는 데 참고할 수 있는 일관된 기준을 제시하여 참여자들 간 소통을 지원하고 의사결정에 필요한 노력을 줄여줍니다. 
              또한 잘못된 설계로 인한 수정·보완을 최소화하여 비용 절감에 도움을 줄 수 있습니다.
 
              </span>
            </li>
          </ul>
       </div>
      
       <div className="guide-title-level2">
          <h4 className="title">디지털정부 가이드라인과 대한민국 구석구석 Design System</h4>
          <p className="mb-16">
            대한민국 구석구석 Design System (이하 VKDS)는 디지털정부 가이드라인에서 규정된 일반원칙과 스타일을 기반으로 대한민국 구석구석의 
            특성을 반영하고 관광 마케팅 필요를 충족시킬 수 있도록 수정되었습니다.
          </p>
        </div>
        <img src="/img/guide_doc/intro_1.png" className="full-img" />

      </div>
    </div>
  );
}