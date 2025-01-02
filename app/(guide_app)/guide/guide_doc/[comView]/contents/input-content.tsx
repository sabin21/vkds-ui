"use client"

import {Input, inputVariants} from "@/components/ui/input";

export default function ComViewContent() {
    
  return (
    <div>

    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-column">

            <div className="form-block">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                이메일 주소 <sup>*</sup>
              </label>
              <span className="input-wrap leading-item">
                <i className="leading-icon vk-icons vk-arrow-right_20" ></i>
                <Input type={"email"} className={inputVariants({inputSize:"sm", className:"input-text"})} id="exampleFormControlInput1" placeholder="이메일 주소를 입력해주세요" ></Input>
              </span>
            </div>

            <div className="form-block">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                이메일 주소 <sup>*</sup>
              </label>
              <span className="input-wrap leading-item">
                <i className="leading-icon vk-icons vk-arrow-right_20" ></i>
                <Input type={"email"} className={inputVariants({inputSize:"default", className:"input-text"})} id="exampleFormControlInput1" placeholder="이메일 주소를 입력해주세요" ></Input>
              </span>
            </div>

            <div className="form-block">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                이메일 주소 <sup>*</sup>
              </label>
              <span className="input-wrap leading-item">
                <i className="leading-icon vk-icons vk-arrow-right_20" ></i>
                <Input type={"email"} className={inputVariants({inputSize:"default", className:"input-text"})} id="exampleFormControlInput1" placeholder="이메일 주소를 입력해주세요" ></Input>
              </span>
            </div>
            
            <div className="form-block">
            <label htmlFor="exampleFormControlInput2" className="form-label">내용글 작성</label>
            <span className="input-wrap">
              <textarea className="input-text textarea" id="exampleFormControlInput2" rows={4} placeholder="1000자 이내로 작성해 주세요"></textarea>
            </span>
            </div>
          </span>

        </div>  
      </div>
    </div>

    </div>
  );
}