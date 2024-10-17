"use client"

import { CodeBlock } from 'react-code-block';
import { ActionButton } from "@/components/ui/action-button"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

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
<AlertDialog>
  <AlertDialogTrigger asChild>
    <ActionButton>삭제하기</ActionButton>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>게시물을 삭제하시겠습니까?</AlertDialogTitle>
      <AlertDialogDescription>
        게시물을 삭제하면 다시 복구할 수 없으며 영구히 삭제됩니다. 본 게시물을
        삭제하시기 전에 확인해 주세요.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>취소</AlertDialogCancel>
      <AlertDialogAction>완료</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
`;

  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
        사용자가 기본 창에서의 주요 플로(Flow)에서 벗어나 완전히 주의를 기울인 상태에서 의사결정을 내려야 하는 작업에 사용되는 모달이다. 
        대개 사용자의 행동을 확인하거나 취소할 수 없는 행동, 기능의 실행 여부를 확인하고자 할 때 사용되므로 실행되는 기능, 결과, 
        위험성에 대한 설명이 반드시 포함되어야 한다. 기본 화면에서의 사용자 행동에 의해 모달이 실행되며 행동을 확정하기 위한 버튼, 
        취소하기 위한 버튼이 제공된다.
        </p>
      </div>      
    </div>

    <div className="component-view-wrap bg-gray-light">
      <div className="inner-view">
        <div className="example-view big-height">

          <span className="example-row justify-center">

          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <ActionButton>삭제하기</ActionButton>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>게시물을 삭제하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  게시물을 삭제하면 다시 복구할 수 없으며 영구히 삭제됩니다. 본 게시물을
                  삭제하시기 전에 확인해 주세요.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction>완료</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
            
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