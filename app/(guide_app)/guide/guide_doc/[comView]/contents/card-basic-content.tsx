"use client"

import React, { useState } from 'react';
// import Image from 'next/image'
import Link from 'next/link'
import { ActionButton } from "@/components/ui/action-button";
import { Tag } from "@/components/ui/tag";
import RatingStar from '@/components/ui/rating-star';
import { Button } from "@/components/ui/button";
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCodeIcon, ShareIcon, EllipsisVerticalIcon, HomeIcon } from "lucide-react";

export default function ComViewContent() {

  return (
    <div className='content-wrap'>
      <p>
      카드안에 사용되는 Media 유형은 사진이미지, Artwork, 지도, 영상입니다.
      </p>   

    <div className="section-block level2">

    <h4>Card Body - 구성예시</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="w-full px-24 py-16 grid grid-cols-2 auto-rows-min gap-16 items-start">
          
          <div className="card-base outline" style={{maxWidth:"358px", minHeight:"0", justifySelf:"center"}}>
            <div className="_padding-wrap">
              <div className="_flex-row-wrap">
                <div className="card-body">
                  <span className='card-body-top'>
                    <span className='small-text'>카드항목 카테고리 타이틀</span>
                  </span>
                  <span className='card-body-main'>
                    <Link href={""}>
                      <div className="_text-block">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link> 
                  </span>
                  <div className="_line-item">
                    <span className="leading-item">
                      <ActionButton variant={"link"} size={"lg"}>
                        <span className="inner-item">
                          <HouseIcon />
                        </span>
                      </ActionButton>
                      <ActionButton variant={"link"} size={"lg"}>
                        <span className="inner-item">
                          <MapIcon />
                        </span>
                      </ActionButton>
                      <ActionButton variant={"link"} size={"lg"}>
                        <span className="inner-item">
                          <MessageCircleCodeIcon />
                        </span>
                        <span className='number'>432</span>
                      </ActionButton> 
                    </span>
                  </div>
                </div>
                <div className="trailing-item icon emphasis">
                  <HouseIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="card-base outline" style={{maxWidth:"358px", minHeight:"0", justifySelf:"center"}}>
            <div className="_padding-wrap">
              <div className="_flex-row-wrap">
                <div className="card-body">
                  <span className='card-body-top'>
                    <span className='small-text'>카드항목 카테고리 타이틀</span>
                  </span>
                  <span className='card-body-main'>
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                      </div>
                    </Link> 
                  </span>
                  <div className="_line-item">
                    <span className="leading-item">
                      <Button variant={"secondary"} size={"xs"}>
                        <span> 바로가기 </span>
                      </Button>
                    </span>
                  </div>
                </div>
                <div className="trailing-item artwork">
                  <div className="artwork">
                    <img src="/img/sample/artwork_2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-base outline" style={{maxWidth:"358px", minHeight:"0", justifySelf:"center"}}>
            <div className="_padding-wrap">
              <div className="_flex-row-wrap">
                <div className="card-body">
                  <span className='card-body-top'>
                    <span className='small-text'>카드항목 카테고리 타이틀</span>
                  </span>
                  <span className='card-body-main'>
                    <Link href={""}>
                      <div className="_text-block lg">
                        <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                        <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                      </div>
                    </Link> 
                  </span>
                </div>
              </div>
              <div className="_line-item">
                <div className='rating-star'>
                  <RatingStar rating={4.5} />
                  <span>고객평점</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-base outline" style={{maxWidth:"358px", justifySelf:"center"}}>
            <div className="_padding-wrap">
              <div className="card-body">
                <span className='card-body-top'>
                  <span className='small-text'>카드항목 카테고리 타이틀</span>
                </span>
                <span className='card-body-main'>
                  <Link href={""}>
                    <div className="_text-block">
                      <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                      <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로 텍스트 길이에 대한 문제를 해결하기위한 </p>
                    </div>
                    <div className="currency-line">
                      <span className='currency-number'>350,000</span>
                      <span className='currency-unit'>원</span>
                    </div>
                  </Link>
                  <div className='trailing-item'>
                    <div className="artwork">
                      <img src="/img/sample/artwork_1.png" alt="" />
                    </div>
                  </div>
                </span>
                <span className="tag-line">
                  <Tag>태그명1</Tag><Tag>태그명2</Tag><Tag>태그명3</Tag><Tag>태그명4</Tag>
                </span>
              </div>
            </div>
          </div>

          <div className="card-base outline" style={{maxWidth:"358px", justifySelf:"center"}}>
          <ul className="list-ul list-underline">
              <li>
                <div className="list-item">
                  <Link href={""}>
                    <div className="leading-item">
                      <div className="icon-wrap">
                        <MessageCircleCodeIcon />
                      </div>
                    </div>
                    <div className="_text-block">
                      <h4 className="title">아이템 헤드라인</h4>
                    </div>
                    <div className="trailing-item">
                      <Button variant={'secondary'} size={'xs'}>상세보기</Button>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <Link href={""}>
                    <div className="leading-item">
                      <div className="icon-wrap">
                        <HomeIcon />
                      </div>
                    </div>
                    <div className="_text-block">
                      <h4 className="title">아이템 헤드라인</h4>
                    </div>
                    <div className="trailing-item">
                      <Button variant={'secondary'} size={'xs'}>상세보기</Button>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <Link href={""}>
                    <div className="leading-item">
                      <div className="icon-wrap">
                        <MapIcon />
                      </div>
                    </div>
                    <div className="_text-block">
                      <h4 className="title">아이템 헤드라인</h4>
                    </div>
                    <div className="trailing-item">
                      <Button variant={'secondary'} size={'xs'}>상세보기</Button>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
            
          </div>

        </div>
      </div>

      <h4>Simple</h4>
      <div className="component-view-wrap">
        <div className="inner-view">
          
          <div className="card-base" style={{width: '360px'}}>
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
              <div className="_line-item">
                <span className="leading-item">
                  <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <HouseIcon />
                    </span>
                  </ActionButton>
                  <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MapIcon />
                    </span>
                  </ActionButton>
                  <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MessageCircleCodeIcon />
                    </span>
                    <span className='number'>432</span>
                  </ActionButton> 
                </span>
                <span className="trailing-item">
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <h4>Outline</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">
          
          <div className="card-base outline" style={{maxWidth:"358px"}}>
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
              <div className="_line-item">
                <span className="leading-item">
                  <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <HouseIcon />
                    </span>
                  </ActionButton>
                  <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MapIcon />
                    </span>
                  </ActionButton>
                  <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MessageCircleCodeIcon />
                    </span>
                    <span className='number'>432</span>
                  </ActionButton> 
                </span>
                <span className="trailing-item">
                </span>
              </div>
            
          </div>
          </div>  
        </div>
      </div>
      
      <h4>Media middle</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">
          
          <div className="card-base outline media-middle" style={{maxWidth:"358px"}}>
            <div className="card-header">
              <Link href={""}>
                <div className="_text-block">
                  <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                </div>
              </Link>
              <span className='trailing-item'>
                <ActionButton variant={"quite"} size={"sm"}>
                  <span className="inner-item">
                    <EllipsisVerticalIcon />
                  </span>
                </ActionButton>
              </span>
            </div>
            <Link href={""}>
              <figure className="_media aspect-3x2">
                <img src="/img/sample/card_2_4x4.png" alt="" />
              </figure>
            </Link>
            <div className="card-bottom">
              <ActionButton variant={"quite"} size={"default"}>
                <span className="inner-item leading-item">
                  <ShareIcon />
                </span>
                <span>공유하기</span>
              </ActionButton>
              <ActionButton variant={"quite"} size={"default"}>
                <span className="inner-item leading-item">
                  <ShareIcon />
                </span>
                <span>공유하기</span>
              </ActionButton>
            </div>
          </div>  
        </div>
      </div>

      <h4>Background</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">
          
          <Link className="card-background aspect-4x4 overlay-bottom-top" href={""} style={{width:"358px"}}>
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

        </div>
      </div>

    </div>

    </div>
  );
}