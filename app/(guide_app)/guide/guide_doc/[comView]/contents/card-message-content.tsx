"use client"

import { ActionButton } from "@/components/ui/action-button";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">
    <div className="content-col">
      <div className="block">
        <p>
          Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 
          단순한 형태와 색상으로 지나치게 시선을 끌지 않도록 디자인되었습니다. 또한 다양한 곳에 적용될 수 있도록
          스타일과 사이즈의 Variation을 다양하게 사용합니다. 
        </p>
      </div>
      
    </div>

    <div className="section-block level2">

    <h4>Solid Color Style</h4>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-row">
          
          <div style={{width:'358px'}}>
            <div className="card-message solid-color bg-3">
              <div className="card-body">
                <div className="text-block">
                  <h4 className="title">헤드라인 타이틀</h4>
                  <p className="desc">사용자가 특정 행동이나 액션을 수행하기 위해 사용합니다.</p>
                </div>
                <Button variant={'staticWhite'} size={'xs'}>바로가기</Button>
              </div>
              <button className="btn-close">
                <XIcon />
              </button>
            </div>
          </div>

          <div style={{width:'358px'}}>
            <div className="card-message solid-color">
              <div className="card-body">
                <div className="text-block">
                  <h4 className="title">헤드라인 타이틀</h4>
                  <p className="desc">사용자가 특정 행동이나 액션을 수행하기 위해 사용합니다.</p>
                </div>
                <Button variant={'staticWhite'} size={'xs'}>바로가기</Button>
              </div>
              <div className="artwork">
                <img src="/img/sample/card_sample_1_square.png" alt="" />
              </div>
              <button className="btn-close">
                <XIcon />
              </button>
            </div>
          </div>

        </span>

        <span className="example-row">
          
          <div style={{width:'358px'}}>
            <div className="card-message solid-color bg-5">
              <div className="card-body">
                <div className="text-block">
                  <h4 className="title">헤드라인 타이틀</h4>
                  <p className="desc">사용자가 특정 행동이나 액션을 수행하기 위해 사용합니다.</p>
                </div>
                <Button variant={'staticWhite'} size={'xs'}>바로가기</Button>
              </div>
              <div className="artwork">
                <img src="/img/sample/card_sample_1_square.png" alt="" />
              </div>
              <button className="btn-close">
                <XIcon />
              </button>
            </div>
          </div>

          <div style={{width:'358px'}}>
            <div className="card-message solid-color bg-12">
              <div className="card-body">
                <div className="text-block">
                  <h4 className="title">헤드라인 타이틀</h4>
                  <p className="desc">사용자가 특정 행동이나 액션을 수행하기 위해 사용합니다.</p>
                </div>
                <Button variant={'staticWhite'} size={'xs'}>바로가기</Button>
              </div>
              <div className="artwork">
                <img src="/img/sample/card_sample_1_square.png" alt="" />
              </div>
              <button className="btn-close">
                <XIcon />
              </button>
            </div>
          </div>

        </span>

        <span className="example-row" style={{borderTop: '1px solid var(--vk-color-global-gray-30)', marginTop:'24px'}}>
          <img src="/img/guide_doc/card_message_bg.png" alt="" style={{marginTop: '40px', width:'752px'}} />
        </span>

        </div>  
      </div>
    </div>

    <h4>Solid Color Style</h4>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-row">
          
          <div style={{width:'358px'}}>
            <div className="card-message">
              <div className="artwork-wrap">
                <img src="/img/sample/card_sample_1_3x2.png" alt="" />
              </div>
              <div className="card-body">
                <div className="text-block">
                  <h4 className="title">헤드라인 타이틀</h4>
                  <p className="desc">사용자가 특정 행동이나 액션을 수행하기 위해 사용합니다.</p>
                </div>
                <Button variant={'secondary'} size={'xs'}>바로가기</Button>
              </div>
              <button className="btn-close">
                <XIcon />
              </button>
            </div>
          </div>

          <div style={{width:'358px'}}>
            
          </div>

        </span>

        <span className="example-row">
          
          <div style={{width:'358px'}}>
            <div className="card-message list-type">
              <div className="artwork-wrap">
                <img src="/img/sample/card_sample_1_square.png" alt="" />
              </div>
              <div className="card-body">
                <div className="text-block">
                  <h4 className="title">헤드라인 타이틀</h4>
                  <p className="desc">사용자가 특정 행동이나 액션을 수행하기 위해 사용합니다.</p>
                </div>
                <Button variant={'secondary'} size={'xs'}>바로가기</Button>
              </div>
              <button className="btn-close">
                <XIcon />
              </button>
            </div>
          </div>

          <div style={{width:'358px'}}>
            
          </div>

        </span>

        </div>  
      </div>
    </div>


    </div>
  </div>
  );
}