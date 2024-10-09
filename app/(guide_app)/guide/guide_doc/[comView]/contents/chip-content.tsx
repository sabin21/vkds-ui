"use client"

import { Chip } from "@/components/ui/chip";

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
            <Chip variant="default" selected="inactive"><span>바로가기</span></Chip>
            <Chip variant="default" selected="inactive" className="selected"><span>바로가기</span></Chip>
            <Chip variant="default" selected="inactive">
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>
            <Chip variant="default" selected="inactive" className="selected">
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>  
          </span>

          <span className="example-sub-title">Size: LG</span>
          <span className="example-row">
            <Chip variant="default" selected="inactive" size={'lg'}><span>바로가기</span></Chip>
            <Chip variant="default" selected="inactive" size={'lg'} className="selected"><span>바로가기</span></Chip>
            <Chip variant="default" selected="inactive" size={'lg'}>
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>
            <Chip variant="default" size={'lg'} className="selected">
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>  
          </span>

        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Outline Style</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">Size: Regular</span>
          <span className="example-row">
            <Chip variant="outline" selected="inactive"><span>바로가기</span></Chip>
            <Chip variant="outline" selected="inactive" className="selected"><span>바로가기</span></Chip>
            <Chip variant="outline" selected="inactive">
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>
            <Chip variant="outline" selected="inactive" className="selected">
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>  
          </span>

          <span className="example-sub-title">Size: LG</span>
          <span className="example-row">
            <Chip variant="outline" selected="inactive" size={'lg'}><span>바로가기</span></Chip>
            <Chip variant="outline" selected="inactive" size={'lg'} className="selected"><span>바로가기</span></Chip>
            <Chip variant="outline" selected="inactive" size={'lg'}>
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>
            <Chip variant="outline" selected="inactive" size={'lg'} className="selected">
              <span className="inner-item leading-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
              <span>바로가기</span>
              <span className="inner-item trailing-item">
                <i className="vk-icons vk-arrow-right_20" />
              </span>
            </Chip>
          </span>

        </div>  
      </div>
    </div>

    </span>

  </div>
  );
}