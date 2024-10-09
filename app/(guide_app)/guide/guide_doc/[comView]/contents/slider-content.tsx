"use client"

import { Slider } from "@/components/ui/slider";

export default function ComViewContent() {
    
  return (
    <div className="content-wrap">

      <div className="section-block level2">
        <h4>Primary</h4>
        <div className="component-view-wrap">
          <div className="inner-view">
            <div className="example-view">

              <span className="example-row" style={{width:"360px"}}>
                <Slider defaultValue={[33]} max={100} step={1} />
              </span>

            </div>  
          </div>
        </div>
      </div>

    </div>
  );
}