"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">
    <div className="content-col">
      <div className="block">
        <p>
          Button은 주요 이벤트나 동작을 유도하기위해 중요하게 사용되므로 Action Button보다 시각적으로 강조된 Design Style을 적용합니다. 
        </p>
      </div>
      
    </div>

    <div className="section-block level2">
      <h4>Primary</h4>
      <div className="component-view-wrap">
        <div className="inner-view">
          <div className="example-view">
            <span className="example-row" style={{gap:"24px"}}>
              <Button variant={"default"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"default"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"default"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"default"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"icon"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"icon"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"icon"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"icon"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>

            </span>
            <span className="example-row" style={{gap:"24px"}}>

              <Button variant={"outline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"outline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"outline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"outline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"iconOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
            </span>
          </div>  
        </div>
      </div>

      <h4>Secondary</h4>
      <div className="component-view-wrap">
        <div className="inner-view">
          <div className="example-view">
            <span className="example-row" style={{gap:"24px"}}>
              <Button variant={"secondary"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondary"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondary"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondary"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"iconSecondary"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondary"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondary"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondary"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>

            </span>
            <span className="example-row" style={{gap:"24px"}}>

              <Button variant={"secondaryOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondaryOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondaryOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondaryOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"iconSecondaryOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondaryOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondaryOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondaryOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
            </span>
          </div>  
        </div>
      </div>

      <h4>Strong</h4>
      <div className="component-view-wrap">
        <div className="inner-view">
          <div className="example-view">
            <span className="example-row" style={{gap:"24px"}}>
              <Button variant={"strong"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"strong"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"strong"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"strong"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"iconStrong"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconStrong"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconStrong"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconStrong"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>

            </span>
            <span className="example-row" style={{gap:"24px"}}>

              <Button variant={"secondaryOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondaryOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondaryOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"secondaryOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"iconSecondaryOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondaryOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondaryOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"iconSecondaryOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
            </span>
          </div>  
        </div>
      </div>

      <h4>Static White</h4>
      <div className="component-view-wrap bg-gray-dark">
        <div className="inner-view">
          <div className="example-view">
            <span className="example-row" style={{gap:"24px"}}>
              <Button variant={"staticWhite"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"staticWhite"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"staticWhite"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"staticWhite"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"staticWhiteIcon"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"staticWhiteIcon"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"staticWhiteIcon"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"staticWhiteIcon"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>

            </span>
            <span className="example-row" style={{gap:"24px"}}>

              <Button variant={"staticWhiteOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"staticWhiteOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"staticWhiteOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>
              <Button variant={"staticWhiteOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
                <span>바로가기</span>
              </Button>

              <Button variant={"staticWhiteIconOutline"} size={"xs"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"staticWhiteIconOutline"} size={"sm"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"staticWhiteIconOutline"} size={"default"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
              <Button variant={"staticWhiteIconOutline"} size={"lg"} >
                <span className="inner-item leading-item">
                  <ArrowRight />
                </span> 
              </Button>
            </span>
          </div>  
        </div>
      </div>
    </div>

    </div>
  );
}