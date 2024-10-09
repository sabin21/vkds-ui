"use client"

import { ActionButton } from "@/components/ui/action-button";
import { ArrowRight } from "lucide-react";

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

    <h4>Standard</h4>
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Text</span>
        <span className="example-row">
          <ActionButton variant="default" size="xxs"><span>바로가기</span></ActionButton> 
          <ActionButton variant="default" size="xs"><span>바로가기</span></ActionButton>
          <ActionButton variant="default" size="sm"><span>바로가기</span></ActionButton>  
          <ActionButton variant="default" size="default"><span>바로가기</span></ActionButton> 
          <ActionButton variant="default" size="lg"><span>바로가기</span></ActionButton>
        </span>
        
        <span className="example-sub-title">with Leading Icon</span>
        <span className="example-row">
          <ActionButton variant="default" size="xxs">
            <span className="inner-item leading-item">
            <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton> 
          <ActionButton variant="default" size="xs">
            <span className="inner-item leading-item">
            <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
          <ActionButton variant="default" size="sm">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
          <ActionButton variant="default" size="default">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
          <ActionButton variant="default" size="lg">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
        </span>

        <span className="example-sub-title">with Trailing Icon</span>
        <span className="example-row">
          <ActionButton variant="default" size="xxs">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton> 
          <ActionButton variant="default" size="xs">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="default" size="sm">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="default" size="default">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="default" size="lg">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton> 
        </span>

        <span className="example-sub-title">only Icon</span>
        <span className="example-row">
          <ActionButton variant="icon" size="xxs">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton> 
          <ActionButton variant="icon" size="xs">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="icon" size="sm">
            <span className="inner-item">
             <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="icon" size="default">
            <span className="inner-item">
             <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="icon" size="lg">
            <span className="inner-item">
             <ArrowRight />
            </span>
          </ActionButton>
        </span>

        <span className="example-row">
          <ActionButton variant="iconCircle" size="xxs">
            <span className="inner-item">
             <ArrowRight />
            </span>
          </ActionButton> 
          <ActionButton variant="iconCircle" size="xs">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="iconCircle" size="sm">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="iconCircle" size="default">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="iconCircle" size="lg">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
        </span>

        </div>  
      </div>
    </div>

    <h4>Link</h4>
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Text</span>
        <span className="example-row">
          <ActionButton variant="link" size="xxs"><span>바로가기</span></ActionButton> 
          <ActionButton variant="link" size="xs"><span>바로가기</span></ActionButton>
          <ActionButton variant="link" size="sm"><span>바로가기</span></ActionButton>  
          <ActionButton variant="link" size="default"><span>바로가기</span></ActionButton> 
          <ActionButton variant="link" size="lg"><span>바로가기</span></ActionButton>
        </span>
        
        <span className="example-sub-title">with Leading Icon</span>
        <span className="example-row">
          <ActionButton variant="link" size="xxs">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton> 
          <ActionButton variant="link" size="xs">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
          <ActionButton variant="link" size="sm">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
          <ActionButton variant="link" size="default">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
          <ActionButton variant="link" size="lg">
            <span className="inner-item leading-item">
              <ArrowRight />
            </span>
            <span>바로가기</span>
          </ActionButton>
        </span>

        <span className="example-sub-title">with Trailing Icon</span>
        <span className="example-row">
          <ActionButton variant="link" size="xxs">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton> 
          <ActionButton variant="link" size="xs">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="link" size="sm">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="link" size="default">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="link" size="lg">
            <span>바로가기</span>
            <span className="inner-item trailing-item">
              <ArrowRight />
            </span>
          </ActionButton> 
        </span>

        <span className="example-sub-title">only Icon</span>
        <span className="example-row">
          <ActionButton variant="linkIcon" size="xxs">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton> 
          <ActionButton variant="linkIcon" size="xs">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="linkIcon" size="sm">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="linkIcon" size="default">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
          <ActionButton variant="linkIcon" size="lg">
            <span className="inner-item">
              <ArrowRight />
            </span>
          </ActionButton>
        </span>

        </div>  
      </div>
    </div>

    <h4>Primary</h4>
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">only Text</span>
          <span className="example-row">
            <ActionButton variant="primary" size="xxs"><span>바로가기</span></ActionButton> 
            <ActionButton variant="primary" size="xs"><span>바로가기</span></ActionButton>
            <ActionButton variant="primary" size="sm"><span>바로가기</span></ActionButton>
            <ActionButton variant="primary" size="default"><span>바로가기</span></ActionButton>
            <ActionButton variant="primary" size="lg"><span>바로가기</span></ActionButton>            
          </span>

          <span className="example-sub-title">with Leading Icon</span>
          <span className="example-row">
            <ActionButton variant="primary" size="xxs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="primary" size="xs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="primary" size="sm">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="primary" size="default">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="primary" size="lg">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
          </span>

          <span className="example-sub-title">with Trailing Icon</span>
          <span className="example-row">
            <ActionButton variant="primary" size="xxs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="primary" size="xs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="primary" size="sm">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="primary" size="default">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="primary" size="lg">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-sub-title">only Icon</span>

          <span className="example-row">
            <ActionButton variant="iconPrimary" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconPrimary" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconPrimary" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconPrimary" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconPrimary" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-row">
            <ActionButton variant="iconCirclePrimary" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCirclePrimary" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCirclePrimary" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCirclePrimary" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCirclePrimary" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

        </div>  
      </div>
    </div>

    <h4>Secondary</h4>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">only Text</span>
          <span className="example-row">
            <ActionButton variant="secondary" size="xxs"><span>바로가기</span></ActionButton> 
            <ActionButton variant="secondary" size="xs"><span>바로가기</span></ActionButton>
            <ActionButton variant="secondary" size="sm"><span>바로가기</span></ActionButton>
            <ActionButton variant="secondary" size="default"><span>바로가기</span></ActionButton>
            <ActionButton variant="secondary" size="lg"><span>바로가기</span></ActionButton>            
          </span>

          <span className="example-sub-title">with Leading Icon</span>
          <span className="example-row">
            <ActionButton variant="secondary" size="xxs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="secondary" size="xs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="secondary" size="sm">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="secondary" size="default">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="secondary" size="lg">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
          </span>

          <span className="example-sub-title">with Trailing Icon</span>
          <span className="example-row">
            <ActionButton variant="secondary" size="xxs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="secondary" size="xs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="secondary" size="sm">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="secondary" size="default">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="secondary" size="lg">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-sub-title">only Icon</span>

          <span className="example-row">
            <ActionButton variant="iconSecondary" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconSecondary" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconSecondary" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconSecondary" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconSecondary" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-row">
            <ActionButton variant="iconCircleSecondary" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleSecondary" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleSecondary" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleSecondary" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleSecondary" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

        </div>  
      </div>
    </div>

    
    <h4 className="view-block-title">Accent Style</h4>
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">only Text</span>
          <span className="example-row">
            <ActionButton variant="accent" size="xxs"><span>바로가기</span></ActionButton> 
            <ActionButton variant="accent" size="xs"><span>바로가기</span></ActionButton>
            <ActionButton variant="accent" size="sm"><span>바로가기</span></ActionButton>
            <ActionButton variant="accent" size="default"><span>바로가기</span></ActionButton>
            <ActionButton variant="accent" size="lg"><span>바로가기</span></ActionButton>            
          </span>

          <span className="example-sub-title">with Leading Icon</span>
          <span className="example-row">
            <ActionButton variant="accent" size="xxs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="accent" size="xs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="accent" size="sm">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="accent" size="default">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="accent" size="lg">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
          </span>

          <span className="example-sub-title">with Trailing Icon</span>
          <span className="example-row">
            <ActionButton variant="accent" size="xxs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="accent" size="xs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="accent" size="sm">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="accent" size="default">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="accent" size="lg">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-sub-title">only Icon</span>

          <span className="example-row">
            <ActionButton variant="iconAccent" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconAccent" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconAccent" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconAccent" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconAccent" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-row">
            <ActionButton variant="iconCircleAccent" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleAccent" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleAccent" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleAccent" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleAccent" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

        </div>  
      </div>
    </div>

    
    <h4 className="view-block-title">Quite Style</h4>
    
    <div className="component-view-wrap bg-gray-light" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">only Text</span>
          <span className="example-row">
            <ActionButton variant="quite" size="xxs"><span>바로가기</span></ActionButton> 
            <ActionButton variant="quite" size="xs"><span>바로가기</span></ActionButton>
            <ActionButton variant="quite" size="sm"><span>바로가기</span></ActionButton>
            <ActionButton variant="quite" size="default"><span>바로가기</span></ActionButton>
            <ActionButton variant="quite" size="lg"><span>바로가기</span></ActionButton>             
          </span>

          <span className="example-sub-title">with Leading Icon</span>
          <span className="example-row">
            <ActionButton variant="quite" size="xxs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="quite" size="xs">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="quite" size="sm">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="quite" size="default">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
            <ActionButton variant="quite" size="lg">
              <span className="inner-item leading-item"> <ArrowRight /> </span>
              <span>바로가기</span>
            </ActionButton>
          </span>

          <span className="example-sub-title">with Trailing Icon</span>
          <span className="example-row">
            <ActionButton variant="quite" size="xxs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="quite" size="xs">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="quite" size="sm">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="quite" size="default">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="quite" size="lg">
              <span>바로가기</span>
              <span className="inner-item trailing-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-sub-title">with Trailing Icon</span>
          <span className="example-row">
            <ActionButton variant="iconQuite" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconQuite" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconQuite" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconQuite" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconQuite" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

          <span className="example-row">
            <ActionButton variant="iconCircleQuite" size="xxs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleQuite" size="xs">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleQuite" size="sm">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleQuite" size="default">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
            <ActionButton variant="iconCircleQuite" size="lg">
              <span className="inner-item"> <ArrowRight /> </span>
            </ActionButton>
          </span>

        </div>  
      </div>
    </div>

      <h4>Static White</h4>
      <div className="component-view-wrap bg-gray-dark">
        <div className="inner-view">
          <div className="example-view">

            <span className="example-sub-title">only Text</span>
            <span className="example-row">
              <ActionButton variant="staticWhite" size="xxs"><span>바로가기</span></ActionButton> 
              <ActionButton variant="staticWhite" size="xs"><span>바로가기</span></ActionButton>
              <ActionButton variant="staticWhite" size="sm"><span>바로가기</span></ActionButton>
              <ActionButton variant="staticWhite" size="default"><span>바로가기</span></ActionButton>
              <ActionButton variant="staticWhite" size="lg"><span>바로가기</span></ActionButton>            
            </span>

            <span className="example-sub-title">with Leading Icon</span>
            <span className="example-row">
              <ActionButton variant="staticWhite" size="xxs">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="xs">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="sm">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="default">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="lg">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
            </span>

            <span className="example-sub-title">with Trailing Icon</span>
            <span className="example-row">
              <ActionButton variant="staticWhite" size="xxs">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="xs">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="sm">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="default">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="staticWhite" size="lg">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
            </span>

            <span className="example-sub-title">only Icon</span>

            <span className="example-row">
              <ActionButton variant="iconStaticWhite" size="xxs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconStaticWhite" size="xs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconStaticWhite" size="sm">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconStaticWhite" size="default">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconStaticWhite" size="lg">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
            </span>

            <span className="example-row">
              <ActionButton variant="iconCircleStaticWhite" size="xxs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleStaticWhite" size="xs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleStaticWhite" size="sm">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleStaticWhite" size="default">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleStaticWhite" size="lg">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
            </span>

          </div>  
        </div>
      </div>

      <h4>Overlay</h4>
      <div className="component-view-wrap bg-gray-dark">
        <div className="inner-view">
          <div className="example-view">

            <span className="example-sub-title">only Text</span>
            <span className="example-row">
              <ActionButton variant="overlay" size="xxs"><span>바로가기</span></ActionButton> 
              <ActionButton variant="overlay" size="xs"><span>바로가기</span></ActionButton>
              <ActionButton variant="overlay" size="sm"><span>바로가기</span></ActionButton>
              <ActionButton variant="overlay" size="default"><span>바로가기</span></ActionButton>
              <ActionButton variant="overlay" size="lg"><span>바로가기</span></ActionButton>            
            </span>

            <span className="example-sub-title">with Leading Icon</span>
            <span className="example-row">
              <ActionButton variant="overlay" size="xxs">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="overlay" size="xs">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="overlay" size="sm">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="overlay" size="default">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
              <ActionButton variant="overlay" size="lg">
                <span className="inner-item leading-item"> <ArrowRight /> </span>
                <span>바로가기</span>
              </ActionButton>
            </span>

            <span className="example-sub-title">with Trailing Icon</span>
            <span className="example-row">
              <ActionButton variant="overlay" size="xxs">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="overlay" size="xs">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="overlay" size="sm">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="overlay" size="default">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="overlay" size="lg">
                <span>바로가기</span>
                <span className="inner-item trailing-item"> <ArrowRight /> </span>
              </ActionButton>
            </span>

            <span className="example-sub-title">only Icon</span>

            <span className="example-row">
              <ActionButton variant="iconOverlay" size="xxs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconOverlay" size="xs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconOverlay" size="sm">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconOverlay" size="default">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconOverlay" size="lg">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
            </span>

            <span className="example-row">
              <ActionButton variant="iconCircleOverlay" size="xxs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleOverlay" size="xs">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleOverlay" size="sm">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleOverlay" size="default">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
              <ActionButton variant="iconCircleOverlay" size="lg">
                <span className="inner-item"> <ArrowRight /> </span>
              </ActionButton>
            </span>

          </div>  
        </div>
      </div>

    </div>
  </div>
  );
}