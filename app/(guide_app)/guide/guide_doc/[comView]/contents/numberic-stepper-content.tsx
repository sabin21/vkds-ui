"use client"

import BannerInline from '@/components/ui/bannerInline';

// import { ActionButton } from "@/components/ui/action-button";
import NumericStepper from "@/components/ui/numbericStepper";

export default function ComViewContent() {
  const handleChange = (value: number) => {
    console.log('New value:', value);
  };
  return (
    <div>
    <div className="content-col">
      
      <BannerInline type="error" headline="Numberic Stepper에는 항상 최소값과 최대값이 있어야 합니다. 증가값은 변경할 수 있지만 동일해야 하며 정수여야 합니다." />

    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Size Variation</h4>
    </span>
    <div className="component-view-wrap" data-theme="light">
      <div className="inner-view">
        <div className="example-view">

        <span className="example-sub-title">Size: Default</span>
        <span className="example-row">
 
          <NumericStepper
            initialValue={20}
            min={0}
            max={100}
            step={1}
            onChange={handleChange}
          />
        </span>

        <span className="example-sub-title">Size: SM</span>
        <span className="example-row">
          <NumericStepper
            initialValue={5}
            min={0}
            max={100}
            step={1}
            onChange={handleChange}
            className="sm"
          />
        </span>
        
        <span className="example-sub-title">Size: XS</span>
        <span className="example-row">
          <NumericStepper
            initialValue={5}
            min={0}
            max={100}
            step={1}
            onChange={handleChange}
            className="xs"
          />
        </span>

        </div>  
      </div>
    </div>

    </div>
  );
}