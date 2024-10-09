"use client"

import { CodeBlock } from 'react-code-block';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";

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
<Checkbox id="terms" />
<label htmlFor="terms" className="form-label-inline" >
  본 사용약관에 동의합니다.
</label>
`;

  return (
    <div>
      <span className="view-block-title-wrap">
        <h4 className="view-block-title">기본사용예시</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view">
        <ul>
          <li>
            <div className="input-item-wrap">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="form-label-inline"
              >
                본 사용약관에 동의합니다.
              </Label>
            </div>  
          </li>
        </ul>

        </div>
      </div>

      <div className='code-block-wrap'>
        <CodeBlock1 code={codeSample1} language={'tsx'} />
      </div>
    </div>
  );
}