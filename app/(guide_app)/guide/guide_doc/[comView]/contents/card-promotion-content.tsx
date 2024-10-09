"use client"

import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function ComViewContent() {
    
  return (
    <div className='content-wrap'>
      <p>
      이미지 소스를 사용할 수 없는 경우 또는 소스가 지정되지 않은 경우 아바타 구성 요소는 기본 이미지를 표시합니다.
      </p>   

    <div className="section-block level2">

      <h4 className="view-block-title">Subtle</h4>

      <span className="flex flex-row gap-16 mb-24">

        <article className="card-promotion ratio-3x4 overlay-top-bottom">
          <img src="/sample_image/sample_2.png" alt="" />
          <span className="card-front-layer">
            <span className="card-inner-wrap">
              <span className="card-text-block">
                <h4>법수치계곡</h4>
                <span className='desc'>기암절벽과 투명한 계곡물이 절경인 계곡 여행지</span>
              </span>
            </span>
          </span>
        </article>

        <article className="card-promotion ratio-3x4 overlay-bottom-top">
          <img src="/sample_image/sample_1.jpg" alt="" />
          <span className="card-front-layer overlay-bottom-top">
            <span className="card-inner-wrap">
              <span className="card-text-block">
                <h4>법수치계곡</h4>
                <span className='desc'>기암절벽과 투명한 계곡물이 절경인 계곡 여행지</span>
              </span>
            </span>
          </span>
        </article>
        
      </span>


      <h4 className="view-block-title">Wide</h4>
      <span className="flex w-full mb-24">

        <article className="card-promotion ratio-5x2 wide-big overlay-left-right">
          <img src="/sample_image/sample_1.jpg" alt="" />
          <span className="card-front-layer">
            <span className="card-inner-wrap">
              <span className="card-text-block">
                <span className='category'>여행지</span>
                <h4>법수치계곡</h4>
                <span className='desc'>기암절벽과 투명한 계곡물이 절경인 계곡 여행지</span>
              </span>
              <button className="btn static-white">
                <span className="inner-item leading-item">
                  <i className="vk-icons vk-arrow-right_20" />
                </span> 
                <span>바로가기</span>
              </button>
            </span>
          </span>
        </article>

      </span>
    </div>

    </div>
  );
}