"use client"

import Link from "next/link";
import { ActionButton } from "@/components/ui/action-button";
import { Button } from "@/components/ui/button";
import { XIcon, ChevronRight, HouseIcon, MapIcon, MessageCircleCode } from "lucide-react";

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

      <span className="example-row-mobile">
        <div className="example-mobile-frame">
          <div className="_section-block">
            <div className="card-base">
              <figure className="_thumbnail aspect-4x2">
                <img src="/img/sample/card_1_4x4.png" alt="" />
              </figure>
              <div className="card-body">
                <div className="_text-block lg">
                  <h4 className="title">별캉스 떠나기 좋은 영양 가볼 만한 곳</h4>
                  <p className="desc">Action Button은 반복적이고 복잡한 작업을 수행하기 위해 사용되는 버튼이므로</p>
                </div>
                <div className="_line-item">
                  <span className="leading-item">
                    <ActionButton variant={"link"} size={"lg"}>
                      <span className="inner-item">
                        <HouseIcon />
                      </span>
                    </ActionButton>
                    <ActionButton variant={"link"} size={"lg"}>
                      <span className="inner-item">
                        <HouseIcon />
                      </span>
                    </ActionButton>  
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>

    <h4>Solid Color Style</h4>

    <span className="example-row-mobile">

      <div className="example-mobile-frame">
        <ul className="list-ul list-underline">
          <li>
            <div className="list-item">
              <Link className="_text-block" href={"#"}>
                <h4 className="title">아이템 헤드라인</h4>
                <p className="desc">아이템 상세 설명 텍스트</p>
              </Link>
              <div className="trailing-item">
                <Button variant={'secondary'} size={'xs'}>상세보기</Button>
              </div>
            </div>
          </li>
          <li>
            <div className="list-item">
              <Link className="_text-block" href={"#"}>
                <h4 className="title">아이템 헤드라인</h4>
                <p className="desc">아이템 상세 설명 텍스트</p>
              </Link>
              <div className="trailing-item">
                <Button variant={'secondary'} size={'xs'}>상세보기</Button>
              </div>
            </div>
          </li>
          <li>
            <div className="list-item">
              <Link className="_text-block" href={"#"}>
                <h4 className="title">아이템 헤드라인</h4>
                <p className="desc">아이템 상세 설명 텍스트</p>
              </Link>
              <div className="trailing-item">
                <Button variant={'secondary'} size={'xs'}>상세보기</Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="example-mobile-frame">
        <ul className="list-ul list-underline">
          <li>
            <div className="list-item">
              <Link href={""}>
                <div className="leading-item">
                  <div className="icon-wrap"></div>
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
                  <div className="icon-wrap"></div>
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
                  <div className="icon-wrap"></div>
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

    </span>

    <span className="example-row-mobile">
      
      <div className="example-mobile-frame">
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

    </span>

    </div>
  </div>
  );
}