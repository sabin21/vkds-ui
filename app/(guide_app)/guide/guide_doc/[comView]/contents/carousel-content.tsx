"use client"

import * as React from "react"

import { Button } from '@/components/ui/button';
import { ChevronRightIcon, HeartIcon } from 'lucide-react';
import FavoriteIcon from '@mui/icons-material/Favorite';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ComViewContent() {
  
  return (
    <div className="content-wrap">

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">Single Slide - Wide Promotion Card</h4>
      </span>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiper-sample-1"
        >
          <SwiperSlide className="sample-slide-1">
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
              </span>
            </article>
          </SwiperSlide>
          <SwiperSlide className="sample-slide-1">
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
              </span>
            </article>
          </SwiperSlide>
          <SwiperSlide className="sample-slide-1">
            <p>Slide 3</p>
          </SwiperSlide>
          <SwiperSlide className="sample-slide-1">
            <p>Slide 4</p>
          </SwiperSlide>
        </Swiper> 

    </div>
  );
}