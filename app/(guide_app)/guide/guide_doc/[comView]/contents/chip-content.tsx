"use client"

import { Chip } from "@/components/ui/chip";
import ActionItemsBar from "@/components/ui/action-Items-bar";
import { ChevronDownIcon, MapPinIcon } from "lucide-react";

export default function ComViewContent() {
  
  return (
    <div className="content-wrap">

    <span className="section-block level2">
      <h4 className="view-block-title">Standard Style</h4>
    
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">Size: Regular</span>
          <span className="example-row">
            <Chip variant="default" selected="inactive"><span>선택항목</span></Chip>
            <Chip variant="default" selected="inactive" className="selected"><span>선택항목</span></Chip>
            <Chip variant="default" selected="inactive">
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>
            <Chip variant="default" selected="inactive" className="selected">
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>  
          </span>

          <span className="example-sub-title">Size: LG</span>
          <span className="example-row">
            <Chip variant="default" selected="inactive" size={'lg'}><span>선택항목</span></Chip>
            <Chip variant="default" selected="inactive" size={'lg'} className="selected"><span>선택항목</span></Chip>
            <Chip variant="default" selected="inactive" size={'lg'}>
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>
            <Chip variant="default" size={'lg'} className="selected">
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>  
          </span>

        </div>  
      </div>
    </div>

    
    <h4 className="view-block-title">Outline Style</h4>
    
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">Size: Regular</span>
          <span className="example-row">
            <Chip variant="outline" selected="inactive"><span>선택항목</span></Chip>
            <Chip variant="outline" selected="inactive" className="selected"><span>선택항목</span></Chip>
            <Chip variant="outline" selected="inactive">
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>
            <Chip variant="outline" selected="inactive" className="selected">
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>  
          </span>

          <span className="example-sub-title">Size: LG</span>
          <span className="example-row">
            <Chip variant="outline" selected="inactive" size={'lg'}><span>선택항목</span></Chip>
            <Chip variant="outline" selected="inactive" size={'lg'} className="selected"><span>선택항목</span></Chip>
            <Chip variant="outline" selected="inactive" size={'lg'}>
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>
            <Chip variant="outline" selected="inactive" size={'lg'} className="selected">
              <span className="inner-item leading-item">
                <MapPinIcon />
              </span>
              <span>선택항목</span>
              <span className="inner-item trailing-item">
                <ChevronDownIcon />
              </span>
            </Chip>
          </span>

        </div>  
      </div>
    </div>

    <h4 className="view-block-title">Action Items Bar 적용</h4>
    
    <div className="component-view-wrap bg-gray-light">
      <div className="inner-view">
        <div className="example-view">

          <div className="frame-390" style={{height:"400px"}}>
            <ActionItemsBar spaceBetween={4}>
              <Chip variant="outline" selected="inactive">
                <span className="inner-item leading-item">
                  <MapPinIcon />
                </span>
                <span>아이템 1</span>
              </Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 2</span></Chip>
              <Chip variant="outline" selected="inactive">
                <span className="inner-item leading-item">
                  <MapPinIcon />
                </span>
                <span>세번째 아이템</span>
              </Chip>
              <Chip variant="outline" selected="inactive"><span>네번째 아이템</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 5</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 6</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 7</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 8</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 9</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 10</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 11</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 12</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 13</span></Chip>
              <Chip variant="outline" selected="inactive"><span>아이템 14</span></Chip>
            </ActionItemsBar>
          </div>


        </div>  
      </div>
    </div>

    </span>

  </div>
  );
}