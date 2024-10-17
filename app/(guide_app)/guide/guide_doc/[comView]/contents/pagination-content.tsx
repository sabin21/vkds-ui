"use client"

import { CodeBlock } from 'react-code-block';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
// import { ActionButton } from "@/components/ui/action-button";
// import { Toaster } from "@/components/ui/toaster"
// import { useToast } from "@/hooks/use-toast"

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
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`;

  return (
    <div>
    <div className="content-col">
      
      <div className="block">
        <h3 className="block-title">Usage</h3>
        <p>
          한 페이지에 표시할 결과가 너무 많은 경우 페이지 분할을 사용하면 시스템 로드 시간이 짧아지고 사용자가 너무 많은 정보에 압도당하지 않습니다.
        </p>
      </div>
      
    </div>

    {/* <span className="view-block-title-wrap">
      <h4 className="view-block-title">기본형</h4>
    </span> */}
    <div className="component-view-wrap bg-gray-100 items-center h-[320px]">
      <div className="inner-view flex items-center justify-center h-full">
        <div className="example-view flex items-center justify-centerr">

          <span className="example-row flex items-center justify-center">
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          </span>


        </div>  
      </div>
    </div>
    <div className='code-block-wrap'>
      <CodeBlock1 code={codeSample1} language={'tsx'} />
    </div>
    
    </div>
  );
}