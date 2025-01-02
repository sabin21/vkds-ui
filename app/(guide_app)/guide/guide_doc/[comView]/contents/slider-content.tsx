"use client"

import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";

export default function ComViewContent() {
  const [sliderValue, setSliderValue] = useState<number[]>([50]);
  const min = 0;
  const max = 100;

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
  };
  return (
    <div className="content-wrap">

    <div className="guide-title-level1">
      <h4 className="title">Anatomy</h4>
    </div>

    <img src="/img/guide_doc/slider_anatomy.png" className="full-img" />


    <div className="guide-title-level1">
      <h4 className="title">Usage</h4>
    </div>

      <div className="section-block level2">
        <div className="component-view-wrap">
          <div className="inner-view">
            <div className="example-view">

              <span className="example-row" style={{width:"360px"}}>

                <div className="slider-wrap">
                  <div className="slider-value-wrap">
                    <span className='value-label'>현재값 : </span>
                    <span className='value-input'>{sliderValue[0]}</span> 
                  </div>
                  <Slider 
                  defaultValue={[50]} min={min} max={max} step={1} 
                  onValueChange={handleSliderChange}
                  />
                  <div className="slider-minmax">
                    <span>{min}</span>
                    <span>{max}</span>
                  </div>
                </div>
              
              </span>

            </div>  
          </div>
        </div>
      </div>

    </div>
  );
}