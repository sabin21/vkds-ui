"use client"

import React, { useRef, useState } from 'react';
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Divider from '@/components/ui/divider';
import { BrandsNaverN } from '@/components/icons/icons_brands';
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCodeIcon, ShareIcon, EllipsisVerticalIcon, HomeIcon } from "lucide-react";
import CarouselCards from '@/components/ui/carousel-cards';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function ComViewContent() {
    
  return (
    <div className='content-wrap'>
 
    <div className="section-block level2">

    <h4>Background Cards / Cards Effect Carousel</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">

          <div className="frame-390 min-h-[400px]" style={{padding:"0"}}>

            <div className="_section-block no-padding" style={{marginTop:"40px"}}>

              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                cardsEffect={{
                  perSlideRotate: 0
                }}
                className="carousel-cards-effect-wrap"
              >
                <SwiperSlide>
                  <Link className="card-background aspect-4x4 overlay-bottom-top" href={""}>
                    <img src="/img/sample/card_2_4x4.png" alt="" />
                    <div className="card-front-layer to-bottom">
                      <div className="_text-block lg">
                        <h4 className="title">법곡지 계곡</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>

                      <div className="top-leading-item">
                        <div className="indicator white sm">강원도</div>
                        <div className="indicator white sm">강원도</div>
                      </div>

                      <div className="top-right-icon"></div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className="card-background aspect-4x4 overlay-bottom-top" href={""}>
                    <img src="/img/sample/card_1_4x4.png" alt="" />
                    <div className="card-front-layer to-bottom">
                      <div className="_text-block lg">
                        <h4 className="title">법곡지 계곡</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>

                      <div className="top-leading-item">
                        <div className="indicator white sm">강원도</div>
                        <div className="indicator white sm">강원도</div>
                      </div>

                      <div className="top-right-icon"></div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className="card-background aspect-4x4 overlay-bottom-top" href={""}>
                    <img src="/img/sample/card_3_4x4.png" alt="" />
                    <div className="card-front-layer to-bottom">
                      <div className="_text-block lg">
                        <h4 className="title">법곡지 계곡</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>

                      <div className="top-leading-item">
                        <div className="indicator white sm">강원도</div>
                        <div className="indicator white sm">강원도</div>
                      </div>

                      <div className="top-right-icon"></div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className="card-background aspect-4x4 overlay-bottom-top" href={""}>
                    <img src="/img/sample/card_2_4x4.png" alt="" />
                    <div className="card-front-layer to-bottom">
                      <div className="_text-block lg">
                        <h4 className="title">법곡지 계곡</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>

                      <div className="top-leading-item">
                        <div className="indicator white sm">강원도</div>
                        <div className="indicator white sm">강원도</div>
                      </div>

                      <div className="top-right-icon"></div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
            
        </div>
      </div>
      
      <h4>Basic Cards / Carousel</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">

          <div className="frame-390 min-h-[1200px]" style={{padding:"0"}}>

            <div className="_section-block no-padding">
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
              <CarouselCards spaceBetween={16} perView={'perViewFull'}>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_1_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_1_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_1_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselCards>
            </div>

            <Divider variant="default" size="lg" orientation='horizontal' />

            <div className="_section-block no-padding">
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
              <CarouselCards spaceBetween={16} perView={'perView1'}>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_2_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_2_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_2_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselCards>
            </div>

            <Divider variant="default" size="lg" orientation='horizontal' />

            <div className="_section-block no-padding">
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
              <CarouselCards spaceBetween={16} perView={'perView2'}>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_3_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_3_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_3_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselCards>
            </div>

          </div>
            
        </div>
      </div>

      <h4>Borded Cards / Carousel</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">

          <div className="frame-390 min-h-[1200px]" style={{padding:"0"}}>

            <div className="_section-block no-padding">
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
              <CarouselCards spaceBetween={16} perView={'perViewFull'}>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_1_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_1_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_1_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselCards>
            </div>

            <Divider variant="default" size="lg" orientation='horizontal' />

            <div className="_section-block no-padding">
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
              <CarouselCards spaceBetween={16} perView={'perView1'}>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_2_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_2_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_2_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselCards>
            </div>

            <Divider variant="default" size="lg" orientation='horizontal' />

            <div className="_section-block no-padding">
              <div className="_section-heading">
                <span className="heading-wrap">
                  <h3 className="section-heading">섹션영역 헤드라인 텍스트</h3>
                  <p className="section-heading-desc">섹션영역 헤드라인 서브라인 텍스트</p>
                </span>
              </div>
              <CarouselCards spaceBetween={16} perView={'perView2'}>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_3_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_3_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="card-base outline">
                  <Link href={""}>
                    <figure className="_media aspect-3x2">
                      <img src="/img/sample/card_3_4x4.png" alt="" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselCards>
            </div>

          </div>
            
        </div>
      </div>
      
    </div>

    </div>
  );
}