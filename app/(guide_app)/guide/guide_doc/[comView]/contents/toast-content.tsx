"use client"

import { CodeBlock } from 'react-code-block';
import { ActionButton } from "@/components/ui/action-button";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

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
<ActionButton
  size="sm"
  onClick={() => {
    toast({
      title: "여행지 기사를 목록에 추가",
      description: "내 정보보기에서 추가목록을 확인하세요",
    })
  }}
>
토스트 열기
</ActionButton>
`;

  const { toast } = useToast();
  return (
    <div>
    <div className="content-col">
      
      <div className="block">
        <h3 className="block-title">Usage</h3>
        <p>
          웹 또는 태블릿 환경에서 토스트 구성 요소를 사용하여 작업을 완료한 후 사용자에게 피드백을 제공합니다. 
          이는 사용자에게 성공적인 작업을 알리거나 오류를 알릴 수 있는 비모달 알림입니다.
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
          
            <ActionButton
              size="sm"
              onClick={() => {
                toast({
                  title: "여행지 기사를 목록에 추가",
                  description: "내 정보보기에서 추가목록을 확인하세요",
                })
              }}
            >
            토스트 열기
            </ActionButton>
          </span>


        </div>  
      </div>
    </div>
    <div className='code-block-wrap'>
      <CodeBlock1 code={codeSample1} language={'tsx'} />
    </div>
    <Toaster />
    </div>
  );
}