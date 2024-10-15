"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Divider from '@/components/ui/divider';
import { BrandsNaverN } from '@/components/icons/icons_brands';
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCodeIcon, ShareIcon, EllipsisVerticalIcon, HomeIcon } from "lucide-react";
import CarouselCards from '@/components/ui/carousel-cards';

export default function ComViewContent() {
    
  return (
    <div className='content-wrap'>
      <p>
      Basic 스타일 카드 Carousel
      </p>   

    <div className="section-block level2">

      <h4>Basic 스타일 카드 Carousel</h4>
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

      <h4>Borded 스타일 카드 Carousel</h4>
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