"use client"

import { Tag } from "@/components/ui/tag";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { CodeBlock } from 'react-code-block';

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
<span className="example-sub-title">Variant: Default</span>
<span className="example-row">
  <Tag variant="default" size={"default"} closable={true} >
    <div className="leading-item"><FmdGoodIcon /></div>
    <span>바로가기</span>
  </Tag>
  <Tag variant="default" size={"lg"} closable={true} >
    <div className="leading-item"><FmdGoodIcon /></div>
    <span>바로가기</span>
  </Tag> 
</span>

<span className="example-sub-title">Variant: Secondary</span>
<span className="example-row">
  <Tag variant="secondary" size={"default"} closable={true} >
    <div className="leading-item"><FmdGoodIcon /></div>
    <span>바로가기</span>
  </Tag>
  <Tag variant="secondary" size={"lg"} closable={true} >
    <div className="leading-item"><FmdGoodIcon /></div>
    <span>바로가기</span>
  </Tag> 
</span>
`;

  return (
    <div className="content-wrap">

    <span className="section-block level2">
      <h4 className="view-block-title">Variant & Size</h4>
    
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">

          <span className="example-sub-title">Variant: Default</span>
          <span className="example-row">
            <Tag variant="default" size={"default"} closable={true} >
              <div className="leading-item"><FmdGoodIcon /></div>
              <span>바로가기</span>
            </Tag>
            <Tag variant="default" size={"lg"} closable={true} >
              <div className="leading-item"><FmdGoodIcon /></div>
              <span>바로가기</span>
            </Tag> 
          </span>

          <span className="example-sub-title">Variant: Secondary</span>
          <span className="example-row">
            <Tag variant="secondary" size={"default"} closable={true} >
              <div className="leading-item"><FmdGoodIcon /></div>
              <span>바로가기</span>
            </Tag>
            <Tag variant="secondary" size={"lg"} closable={true} >
              <div className="leading-item"><FmdGoodIcon /></div>
              <span>바로가기</span>
            </Tag> 
          </span>

        </div>  
      </div>
    </div>

    </span>

    <div className='code-block-wrap'>
      <CodeBlock1 code={codeSample1} language={'tsx'} />
    </div>

  </div>
  );
}