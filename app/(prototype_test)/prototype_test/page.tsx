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
        <div className='block-title'>
          <h2>대구석 디자인 시안</h2>
          <p>
            하단 내비게이션의 [메뉴] 버튼을 클릭하면 메뉴화면이 열립니다.
          </p>
        </div>
        <div className="inner-wrap">
          <div className="title-block">
            <h4>디자인 시안 A</h4>
            <div className='draft-desc'>
              <span className='strong'>
                주요 서비스 및 콘텐츠 나열 형태의 구성
              </span>
              <ul>
                <li>
                주요 서비스 퀵 메뉴를 통한 빠른 접근 제공
                </li>
                <li>
                여행지, 축제, 이벤트 등 대한민국 구석구석의 주요 콘텐츠를 메인화면에서 모아보고 접근할 수 있음
                </li>
                <li>
                메인화면 상단에 시의성 있는 여행기사 소개 (A안/B안 및 기존화면 모두 동일)
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={()=> handlePageChange('pageTest1')}
            className={`type-button ${activePage === 'pageTest1' ? 'active' : ''}`}
          >
            A안 보기
          </button>

          <div className="title-block">
            <h4>디자인 시안 B</h4>
            <div className='draft-desc'>
              <span className='strong'>
                지역 기반의 여행지/맛집/숙박 선택 구성
              </span>
              <ul>
                <li>
                  지역별 여행지, 맛집, 숙박 정보를 메인화면에서 볼 수 있도록 구성
                </li>
                <li>
                여행지, 축제 등 대한민국 구석구석의 주요 콘텐츠를 메인화면에서 모아보고 접근할 수 있음
                </li>
                <li>
                메인화면 상단에 시의성 있는 여행기사 소개 (A안/B안 및 기존화면 모두 동일)
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={()=> handlePageChange('pageTest2')}
            className={`type-button ${activePage === 'pageTest2' ? 'active' : ''}`}
          >
            B안 보기
          </button>
        </div>
      </div>
      <div className="right-block">
        { activePage === 'pageTest1' ? <PageTest1 /> : <PageTest2 /> }
      </div>
    </div>
  );
}