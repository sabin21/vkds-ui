"use client"

import { CodeBlock } from 'react-code-block';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
<Accordion type="single" className="accordion-outer" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>광양만의 장엄한 파노라마</AccordionTrigger>
    <AccordionContent>
      해발 473m의 구봉산에 설치한 전망대로 순천, 여수, 하동, 남해까지 한눈에 볼 수 있으며 정상에는 9.4m의 봉수대가 
      자리하고 있어 일출, 일몰 명소로 각광받고 있다. 정상부 하단 주차장까지 차량 진입이 가능하며, 데이트 코스로도 
      인기가 높아 해마다 찾는 인파가 늘어나고 있다. 구봉산 전망대에는 광양만권을 한눈에 바라볼 수 있도록 망원경이 
      설치되어 있으며, 야간에는 광양만의 멋진 야경을 볼 수 있는 관광명소로 빼놓을 수 없는 코스이다.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>파도와 바람에 씻겨 빚어진 용두암</AccordionTrigger>
    <AccordionContent>
      제주공항 인근의 북쪽 바닷가에 있는 용두암은 높이 10m가량의 바위로 오랜 세월에 걸쳐 파도와 바람에 씻겨 빚어진 
      모양이 용의 머리와 닮았다 하여 용두암이라 불린다.
      전설에 의하면 용 한 마리가 한라산 신령의 옥구슬을 훔쳐 달아나자 화가 난 한라산 신령이 활을 쏘아 용을 바닷가에 
      떨어뜨려 몸은 바닷물에 잠기게 하고 머리는 하늘로 
      향하게 하여 그대로 굳게 했다고 전해진다.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>바다를 한눈에 내려다 볼 수 있는 달맞이 공원</AccordionTrigger>
    <AccordionContent>
      달맞이 동산은 부산시 해운대구 달맞이 길에 있는 산책로 겸 공원이다. 넓이는 약 4만 4,000㎡로 
      해운대해수욕장 동쪽에서 청사포(靑沙浦)로 넘어가는 와우산 중턱, 달맞이 고개를 말한다, 짙은 숲으로 
      드리워진 달맞이 고개에서 바라보는 월출(月出)은 대한 팔경의 하나로 예로부터 시인과 묵객들이 즐겨 찾았다. 
      현대에 들어와서도 음력 정월대보름 등에 보름달을 구경하는 관람객이 많이 찾는다. 특히 봄철에는 
      길가에 벚나무가 화사하게 꽃을 피워 장관을 이룬다. 1997년에 세워진 해월정은 달맞이 공원의 상징물이기도 하다. 
      달맞이와 꽃구경을 한꺼번에 할 수 있다는 곳으로 야외음악당과 달맞이 조각공원, 야생초화원도 있다. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
`;

  return (
    <div>
      <div className="content-col">
        <div className="block">
          <p>
            아코디언은 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로 콘텐츠 
            섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현된다. 일반적으로 헤더 목록은 컨트롤 요소로 활용되며 
            사용자는 필요에 따라 헤더를 선택하여 하위 콘텐츠 섹션을 표시하거나 숨길 수 있다.
          </p>
        </div>      
      </div>

      <span className="view-block-title-wrap">
        <h4 className="view-block-title">사용예시</h4>
      </span>
      <div className="component-view-wrap">
        <div className="inner-view">
          <div className="example-view">

            <span className="example-row">
          
            <Accordion type="single" className="accordion-outer" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>광양만의 장엄한 파노라마</AccordionTrigger>
                <AccordionContent>
                  해발 473m의 구봉산에 설치한 전망대로 순천, 여수, 하동, 남해까지 한눈에 볼 수 있으며 정상에는 9.4m의 봉수대가 
                  자리하고 있어 일출, 일몰 명소로 각광받고 있다. 정상부 하단 주차장까지 차량 진입이 가능하며, 데이트 코스로도 
                  인기가 높아 해마다 찾는 인파가 늘어나고 있다. 구봉산 전망대에는 광양만권을 한눈에 바라볼 수 있도록 망원경이 
                  설치되어 있으며, 야간에는 광양만의 멋진 야경을 볼 수 있는 관광명소로 빼놓을 수 없는 코스이다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>파도와 바람에 씻겨 빚어진 용두암</AccordionTrigger>
                <AccordionContent>
                  제주공항 인근의 북쪽 바닷가에 있는 용두암은 높이 10m가량의 바위로 오랜 세월에 걸쳐 파도와 바람에 씻겨 빚어진 
                  모양이 용의 머리와 닮았다 하여 용두암이라 불린다.
                  전설에 의하면 용 한 마리가 한라산 신령의 옥구슬을 훔쳐 달아나자 화가 난 한라산 신령이 활을 쏘아 용을 바닷가에 
                  떨어뜨려 몸은 바닷물에 잠기게 하고 머리는 하늘로 
                  향하게 하여 그대로 굳게 했다고 전해진다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>바다를 한눈에 내려다 볼 수 있는 달맞이 공원</AccordionTrigger>
                <AccordionContent>
                  달맞이 동산은 부산시 해운대구 달맞이 길에 있는 산책로 겸 공원이다. 넓이는 약 4만 4,000㎡로 
                  해운대해수욕장 동쪽에서 청사포(靑沙浦)로 넘어가는 와우산 중턱, 달맞이 고개를 말한다, 짙은 숲으로 
                  드리워진 달맞이 고개에서 바라보는 월출(月出)은 대한 팔경의 하나로 예로부터 시인과 묵객들이 즐겨 찾았다. 
                  현대에 들어와서도 음력 정월대보름 등에 보름달을 구경하는 관람객이 많이 찾는다. 특히 봄철에는 
                  길가에 벚나무가 화사하게 꽃을 피워 장관을 이룬다. 1997년에 세워진 해월정은 달맞이 공원의 상징물이기도 하다. 
                  달맞이와 꽃구경을 한꺼번에 할 수 있다는 곳으로 야외음악당과 달맞이 조각공원, 야생초화원도 있다. 
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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