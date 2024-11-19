"use client"

import React, { useState } from 'react';
import PageTest1 from "./test_1/page";
import PageTest2 from "./test_2/page";

export default function TestMain() {

  const [activePage, setActivePage] = useState<'pageTest1' | 'pageTest2'>('pageTest1');
  const handlePageChange = (pageTest: 'pageTest1' | 'pageTest2')=>{
    setActivePage(pageTest);
  }
  
  return (
    <div className='test-home'>
      <div className="left-block">
        <div className="inner-wrap">
          <div className="title-block">
            <h4>Type-A</h4>
            <p>
            Content Curation 원칙에 따라 사용자에게 유용한 컨텐츠를 선별하여 제시하는 형태의 홈 화면 디자인.
            주요 컨텐츠 섹션들(추천 여행기사, 서비스 링크,시즌 프로모션, 행사 캘린더, 추천 컨텐츠)을 중요도에 따라 배치하는 형태.
            </p>
          </div>
          <button
            onClick={()=> handlePageChange('pageTest1')}
          >
            Type-A 보기
          </button>

          <div className="title-block">
            <h4>Type-B</h4>
            <p>
            Content Curation 원칙에 따라 사용자에게 유용한 컨텐츠를 선별하여 제시하는 형태의 홈 화면 디자인.
            주요 컨텐츠 섹션들(추천 여행기사, 서비스 링크,시즌 프로모션, 행사 캘린더, 추천 컨텐츠)을 중요도에 따라 배치하는 형태.
            </p>
          </div>
          <button
            onClick={()=> handlePageChange('pageTest2')}
          >
            Type-B 보기
          </button>
        </div>
      </div>
      <div className="right-block">
        { activePage === 'pageTest1' ? <PageTest1 /> : <PageTest2 /> }
      </div>
    </div>
  );
}