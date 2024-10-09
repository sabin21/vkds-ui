"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ActionButton } from "@/components/ui/action-button";
import { Button } from "@/components/ui/button";
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCodeIcon, ShareIcon, EllipsisVerticalIcon } from "lucide-react";

export default function ComViewContent() {
    
  return (
    <div className='content-wrap'>
      <p>
      이미지 소스를 사용할 수 없는 경우 또는 소스가 지정되지 않은 경우 아바타 구성 요소는 기본 이미지를 표시합니다.
      </p>   

    <div className="section-block level2">

      <h4 className="view-block-title">Subtle</h4>

      <span className="flex flex-row mb-24 gap-12 flex-wrap">

        <div className="frame-390">
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
                  {/* <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MessageCircleCodeIcon />
                    </span>
                    <span className='number'>432</span>
                  </ActionButton>  */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-390">
          <div className="card-base swipe-size-lg">
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
                  {/* <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MessageCircleCodeIcon />
                    </span>
                    <span className='number'>432</span>
                  </ActionButton>  */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-390">
          <div className="card-base swipe-size-col2">
            <Link href={""}>
            <figure className="_media aspect-3x2">
              <img src="/img/sample/card_1_4x4.png" alt="" />
            </figure>
            </Link>
            <div className="card-body">
              <Link href={""}>
              <div className="_text-block">
                <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="frame-390">
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
                  {/* <ActionButton variant={"link"} size={"lg"}>
                    <span className="inner-item">
                      <MessageCircleCodeIcon />
                    </span>
                    <span className='number'>432</span>
                  </ActionButton>  */}
                </span>
              </div>
            </div>
          </div>
        </div>

      </span>

      <h4>Media middle</h4>
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
                <img src="/img/sample/card_1_4x4.png" alt="" />
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

    </div>

    </div>
  );
}