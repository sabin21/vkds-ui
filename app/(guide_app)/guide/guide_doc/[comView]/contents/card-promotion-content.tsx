"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, HeartIcon } from 'lucide-react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ComViewContent() {
    
  return (
    <div className='content-wrap'>
      <p>
      프로모션 카드는 Background Image를 요소 전체에 사용하며 제목타이틀, 서브 설명 문구, CTA 요소만으로 구성합니다.
      부수적인 추가 정보나 상호작용 요소를 임의로 추가할 경우 일반적 유형의 카드와 차별성이 없어지며 집중도가 떨어지므로
      안에 들어가는 요소를 제한해서 사용해야 합니다.
      </p>   

    <div className="section-block level2">

      <h4>Portrait</h4>

      <span className="flex flex-row gap-16 mb-24">

        <article className="card-promotion ratio-3x4 overlay-top-bottom">
          <img src="/sample_image/sample_2.png" alt="" />
          <span className="card-front-layer">
            <span className="card-inner-wrap">
              <span className="card-text-block">
                <h4>법수치계곡</h4>
                <span className='desc'>기암절벽과 투명한 계곡물이 절경인 계곡 여행지</span>
              </span>
              <div className="action-bar">
                <Button variant={'staticWhite'} size={'sm'}>
                  <span>바로가기</span>
                  <span className="inner-item trailing-item">
                    <ChevronRightIcon />
                  </span>
                </Button>
              </div>
            </span>
            <button className="btn-add-wishlist">
              <FavoriteIcon />
            </button>
          </span>
        </article>

        <article className="card-promotion ratio-3x4 overlay-top-bottom">
          <img src="/sample_image/sample_1.jpg" alt="" />
          <span className="card-front-layer">
            <span className="card-inner-wrap">
              <span className="card-text-block">
                <h4>법수치계곡</h4>
                <span className='desc'>기암절벽과 투명한 계곡물이 절경인 계곡 여행지</span>
              </span>
              <div className="action-bar">
                <Button variant={'staticWhite'} size={'sm'}>
                  <span>바로가기</span>
                  <span className="inner-item trailing-item">
                    <ChevronRightIcon />
                  </span>
                </Button>
              </div>
            </span>
            <button className="btn-add-wishlist">
              <FavoriteIcon />
            </button>
          </span>
        </article>
        
      </span>


      <h4 className="view-block-title">Wide - Full width</h4>
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
              <Button variant={'staticWhite'} >
                <span>바로가기</span>
                <span className="inner-item trailing-item">
                    <ChevronRightIcon />
                  </span>
              </Button>
            </span>
            <button className="btn-add-wishlist">
              <FavoriteIcon />
            </button>
          </span>
        </article>

      </span>
    </div>

    </div>
  );
}