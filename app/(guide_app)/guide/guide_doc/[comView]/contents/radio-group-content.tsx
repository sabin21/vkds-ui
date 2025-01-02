"use client"

import { CodeBlock } from 'react-code-block';
import { Label } from "@/components/ui/label";
// import { ActionButton } from '@/components/ui/action-button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ComViewContent() {
  
  function CodeBlock1(props:{code:string, language:string}){
    return(
      <CodeBlock code={codeSample1} language={'tsx'}>
      <CodeBlock.Code>
        <div className="table-row">
          <CodeBlock.LineNumber className="table-cell table-cell-num" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
    )
  }

const codeSample1 = 
`
<RadioGroup defaultValue="firstValue" orientation={'vertical'}>
  <div className="item-wrap">
    <RadioGroupItem value="firstValue" id="r1" />
    <Label htmlFor="r1">기본 설정값</Label>
  </div>
  <div className="item-wrap">
    <RadioGroupItem value="secondValue" id="r2" />
    <Label htmlFor="r2">두번째 설정값</Label>
  </div>
  <div className="item-wrap">
    <RadioGroupItem value="thirdValue" id="r3" />
    <Label htmlFor="r3">세번째 설정값</Label>
  </div>
  <div className="item-wrap">
    <RadioGroupItem value="fourthValue" id="r4" disabled={true} />
    <Label htmlFor="r4">네번째 설정값</Label>
  </div>
</RadioGroup>
`;

  return (
    <div className='content-wrap'>

      <div className="guide-title-level1">
        <h4 className="title">Anatomy</h4>
      </div>

      <img src="/img/guide_doc/radio_anatomy.png" className="full-img" />


      <div className="guide-title-level1">
        <h4 className="title">Usage</h4>
      </div>

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">기본사용예시</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view">
        
            <div className="input-item-wrap">
              <RadioGroup defaultValue="firstValue" orientation={'vertical'}>
                <div className="item-wrap">
                  <RadioGroupItem value="firstValue" id="r1" />
                  <Label htmlFor="r1">기본 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="secondValue" id="r2" />
                  <Label htmlFor="r2">두번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="thirdValue" id="r3" />
                  <Label htmlFor="r3">세번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="fourthValue" id="r4" disabled={true} />
                  <Label htmlFor="r4">네번째 설정값</Label>
                </div>
              </RadioGroup>
            </div>  

        </div>
      </div>

      <div className='code-block-wrap'>
        <CodeBlock1 code={codeSample1} language={'tsx'} />
      </div>

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">Size & Emphasis</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view flex gap-24">
            <div className="min-w-[180px] flex-col">
              <RadioGroup defaultValue="firstValue" orientation={'vertical'} className='sm'>
                <div className="item-wrap">
                  <RadioGroupItem value="firstValue" id="r1" />
                  <Label htmlFor="r1">기본 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="secondValue" id="r2" />
                  <Label htmlFor="r2">두번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="thirdValue" id="r3" />
                  <Label htmlFor="r3">세번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="fourthValue" id="r4" disabled={true} />
                  <Label htmlFor="r4">네번째 설정값</Label>
                </div>
              </RadioGroup>

              <div className="example-inner-block">
                Size: "sm"
              </div>
            </div>

            <div className="min-w-[180px] flex-col">
              <RadioGroup defaultValue="firstValue" orientation={'vertical'}>
                <div className="item-wrap">
                  <RadioGroupItem value="firstValue" id="r1" />
                  <Label htmlFor="r1">기본 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="secondValue" id="r2" />
                  <Label htmlFor="r2">두번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="thirdValue" id="r3" />
                  <Label htmlFor="r3">세번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="fourthValue" id="r4" disabled={true} />
                  <Label htmlFor="r4">네번째 설정값</Label>
                </div>
              </RadioGroup>

              <div className="example-inner-block">
                Size: "regular"
              </div>
            </div> 

            <div className="min-w-[180px] flex-col">
              <RadioGroup defaultValue="firstValue" orientation={'vertical'} className='lg emphasis'>
                <div className="item-wrap">
                  <RadioGroupItem value="firstValue" id="r1" />
                  <Label htmlFor="r1">기본 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="secondValue" id="r2" />
                  <Label htmlFor="r2">두번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="thirdValue" id="r3" />
                  <Label htmlFor="r3">세번째 설정값</Label>
                </div>
                <div className="item-wrap">
                  <RadioGroupItem value="fourthValue" id="r4" disabled={true} />
                  <Label htmlFor="r4">네번째 설정값</Label>
                </div>
              </RadioGroup>

              <div className="example-inner-block">
                Size: "lg" | Style: "emphasis"
              </div>
            </div> 
        </div>
      </div>

    </div>
  );
}