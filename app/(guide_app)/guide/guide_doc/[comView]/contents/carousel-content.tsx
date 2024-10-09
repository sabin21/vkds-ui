"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
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
    <div>

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">Single Slide</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view w-full">
        
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-sample-1"
          >
            <SwiperSlide className="sample-slide-1">
              <p>Slide 1</p>
            </SwiperSlide>
            <SwiperSlide className="sample-slide-1">
              <p>Slide 2</p>
            </SwiperSlide>
            <SwiperSlide className="sample-slide-1">
              <p>Slide 3</p>
            </SwiperSlide>
            <SwiperSlide className="sample-slide-1">
              <p>Slide 4</p>
            </SwiperSlide>
          </Swiper> 

        </div>
      </div>

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">Single Slide</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view w-full">
        
          <Carousel className="w-full max-w-[60%]">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  
                    <Card className="rounded-[16px] bg-gray-200 border-none">
                      <CardContent className="flex aspect-[5/3] items-center justify-center">
                        <span className="text-[40px] font-bold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>  

        </div>
      </div>

    </div>
  );
}