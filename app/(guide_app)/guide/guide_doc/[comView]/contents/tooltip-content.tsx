"use client"

import { CodeBlock } from 'react-code-block';
import { Label } from "@/components/ui/label";
import { ActionButton } from '@/components/ui/action-button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <ActionButton variant="default">마우스 호버</ActionButton>
    </TooltipTrigger>
    <TooltipContent>
      <p>항목에 대한 설명입니다</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
`;

  return (
    <div>

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">기본사용예시</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view flex-col">
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ActionButton variant="default">마우스 호버</ActionButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>항목에 대한 설명입니다</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        </div>
      </div>

      <div className='code-block-wrap'>
        <CodeBlock1 code={codeSample1} language={'tsx'} />
      </div>
    </div>
  );
}