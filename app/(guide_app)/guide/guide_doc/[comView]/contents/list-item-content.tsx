"use client"


import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { BrandsNaverN } from '@/components/icons/icons_brands';
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCodeIcon, ShareIcon, EllipsisVerticalIcon, HomeIcon } from "lucide-react";

export default function ComViewContent() {
    
  return (
    <div className='content-wrap'>
      {/* <p>
      이미지 소스를 사용할 수 없는 경우 또는 소스가 지정되지 않은 경우 아바타 구성 요소는 기본 이미지를 표시합니다.
      </p>    */}

    <div className="guide-title-level1">
      <h4 className="title">Anatomy</h4>
    </div>

    <img src="/img/guide_doc/list_item_anatomy.png" className="full-img" />

    <div className="guide-title-level1">
      <h4 className="title">Variants</h4>
    </div>
    <img src="/img/guide_doc/list_item_variant.png" className="full-img" />

    <div className="section-block pt-16">
      <h3>구성 예시</h3>
    </div>
    
    <div className="section-block level2">

      <h4>Text block + Button</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">

          <div className="frame-390" style={{padding:"0"}}>
            <ul className="list-ul list-underline">
              <li>
                <div className="list-item">
                  <Link href={"#"}>
                    <div className="_text-block">
                      <h4 className="title">아이템 헤드라인</h4>
                      <p className="desc">아이템 상세 설명 텍스트</p>
                    </div>
                  </Link>
                  <div className="trailing-item">
                    <Button variant={'secondary'} size={'xs'}>상세보기</Button>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <Link href={"#"}>
                    <div className="_text-block">
                      <h4 className="title">아이템 헤드라인</h4>
                      <p className="desc">아이템 상세 설명 텍스트</p>
                    </div>
                  </Link>
                  <div className="trailing-item">
                    <Button variant={'secondary'} size={'xs'}>상세보기</Button>
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <Link href={"#"}>
                    <div className="_text-block">
                      <h4 className="title">아이템 헤드라인</h4>
                      <p className="desc">아이템 상세 설명 텍스트</p>
                    </div>
                  </Link>
                  <div className="trailing-item">
                    <Button variant={'secondary'} size={'xs'}>상세보기</Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
            
        </div>
      </div>
      
      <h4>Leading item + Text block + Button</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">
          
          <div className="frame-390" style={{padding:"0"}}>
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
                      <p className="desc">아이템 상세 설명 텍스트</p>
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
                      <p className="desc">아이템 상세 설명 텍스트</p>
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
                      <p className="desc">아이템 상세 설명 텍스트</p>
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

      <h4>Artwork + Text block + Chevron</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">
          
          <div className="frame-390" style={{padding:"0"}}>
            <ul className="list-ul list-underline">
            <li>
              <div className="list-item">
                <Link href={""}>
                  <div className="leading-item artwork">
                    <img src="/img/sample/artwork_1.png" alt="" />
                  </div>
                  <div className="_text-block">
                    <h4 className="title">아이템 헤드라인</h4>
                    <p className="desc">아이템 상세 설명 텍스트</p>
                  </div>
                  <div className="trailing-item icon">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div className="list-item">
                <Link href={""}>
                  <div className="leading-item artwork">
                    <img src="/img/sample/artwork_1.png" alt="" />
                  </div>
                  <div className="_text-block">
                    <h4 className="title">아이템 헤드라인</h4>
                    <p className="desc">아이템 상세 설명 텍스트</p>
                  </div>
                  <div className="trailing-item icon">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div className="list-item">
                <Link href={""}>
                  <div className="leading-item artwork">
                    <img src="/img/sample/artwork_1.png" alt="" />
                  </div>
                  <div className="_text-block">
                    <h4 className="title">아이템 헤드라인</h4>
                    <p className="desc">아이템 상세 설명 텍스트</p>
                  </div>
                  <div className="trailing-item icon">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </li>
            </ul>
          </div>

        </div>
      </div>

      <h4>Avatar + Text block + Chevron</h4>
      <div className="component-view-wrap bg-gray-light">
        <div className="inner-view">
          
          <div className="frame-390" style={{padding:"0"}}>
            <ul className="list-ul list-underline">
            <li>
              <div className="list-item">
                <Link href={""}>
                  <div className="leading-item">
                    <div className="avatar regular">
                      <div className="avatar-inner"></div>
                      <div className="badge icon align-br icon-bg-naver">
                        <BrandsNaverN />
                      </div>
                    </div>
                  </div>
                  <div className="_text-block">
                    <h4 className="title">아이템 헤드라인</h4>
                    <p className="desc">아이템 상세 설명 텍스트</p>
                  </div>
                  <div className="trailing-item icon">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div className="list-item">
                <Link href={""}>
                  <div className="leading-item">
                    <div className="avatar regular">
                      <div className="avatar-inner"></div>
                      <div className="badge icon align-br icon-bg-naver">
                        <BrandsNaverN />
                      </div>
                    </div>
                  </div>
                  <div className="_text-block">
                    <h4 className="title">아이템 헤드라인</h4>
                    <p className="desc">아이템 상세 설명 텍스트</p>
                  </div>
                  <div className="trailing-item icon">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div className="list-item">
                <Link href={""}>
                  <div className="leading-item">
                    <div className="avatar regular">
                      <div className="avatar-inner"></div>
                      <div className="badge icon align-br icon-bg-naver">
                        <BrandsNaverN />
                      </div>
                    </div>
                  </div>
                  <div className="_text-block">
                    <h4 className="title">아이템 헤드라인</h4>
                    <p className="desc">아이템 상세 설명 텍스트</p>
                  </div>
                  <div className="trailing-item icon">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </li>
            </ul>
          </div>

        </div>
      </div>

    </div>

    </div>
  );
}