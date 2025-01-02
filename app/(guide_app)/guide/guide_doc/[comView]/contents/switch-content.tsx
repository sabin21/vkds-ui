"use client"

import { CodeBlock } from 'react-code-block';
import { Label } from "@/components/ui/label";
import { Switch } from '@/components/ui/switch';

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
<div className="flex gap-16">
  <div className="input-item-wrap">
    <Switch id="airplane-mode1" size={'sm'} />
    <Label htmlFor="airplane-mode1">Airplane Mode</Label>
  </div>
  <div className="input-item-wrap" >
    <Switch id="airplane-mode2" defaultChecked={true} />
    <Label htmlFor="airplane-mode2">Airplane Mode</Label>
  </div>
  <div className="input-item-wrap">
    <Switch id="airplane-mode3" size={'lg'} />
    <Label htmlFor="airplane-mode3">Airplane Mode</Label>
  </div>
</div>

<div className="flex gap-16">
  <div className="input-item-wrap">
    <Switch id="airplane-mode4" size={'sm'} disabled={true} />
    <Label htmlFor="airplane-mode4">Airplane Mode</Label>
  </div>
  <div className="input-item-wrap">
    <Switch id="airplane-mode5" disabled={true} defaultChecked={true} />
    <Label htmlFor="airplane-mode5">Airplane Mode</Label>
  </div>
  <div className="input-item-wrap">
    <Switch id="airplane-mode6" size={'lg'} disabled={true} />
    <Label htmlFor="airplane-mode6">Airplane Mode</Label>
  </div>
</div>
`;

  return (
    <div>

    <div className="guide-title-level1">
      <h4 className="title">Anatomy</h4>
    </div>

    <img src="/img/guide_doc/switch_anatomy.png" className="full-img" />

    <div className="guide-title-level1">
      <h4 className="title">Usage</h4>
    </div>

      <div className="component-view-wrap">
        <div className="inner-view flex-col">
        
            <div className="flex gap-16">
              <div className="input-item-wrap">
                <Switch id="airplane-mode1" size={'sm'} />
                <Label htmlFor="airplane-mode1">Airplane Mode</Label>
              </div>
              <div className="input-item-wrap" >
                <Switch id="airplane-mode2" defaultChecked={true} />
                <Label htmlFor="airplane-mode2">Airplane Mode</Label>
              </div>
              <div className="input-item-wrap">
                <Switch id="airplane-mode3" size={'lg'} />
                <Label htmlFor="airplane-mode3">Airplane Mode</Label>
              </div>
            </div>

            <div className="flex gap-16">
              <div className="input-item-wrap">
                <Switch id="airplane-mode4" size={'sm'} disabled={true} />
                <Label htmlFor="airplane-mode4">Airplane Mode</Label>
              </div>
              <div className="input-item-wrap">
                <Switch id="airplane-mode5" disabled={true} defaultChecked={true} />
                <Label htmlFor="airplane-mode5">Airplane Mode</Label>
              </div>
              <div className="input-item-wrap">
                <Switch id="airplane-mode6" size={'lg'} disabled={true} />
                <Label htmlFor="airplane-mode6">Airplane Mode</Label>
              </div>
            </div>

        </div>
      </div>

      <div className='code-block-wrap'>
        <CodeBlock1 code={codeSample1} language={'tsx'} />
      </div>
    </div>
  );
}