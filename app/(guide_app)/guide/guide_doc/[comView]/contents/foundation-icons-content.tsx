"use client"

import Link from 'next/link';
import { ActionButton } from "@/components/ui/action-button";

export default function ComViewContent() {
  
  return (
    <div className='content-wrap'>
      <div className="section-block level2">

        <div className="guide-title-level1">
          <h4 className="title">System Icons</h4>
        </div>

        <p className='mb-16'>
          대한민국 구석구석 디자인시스템에는 MIT라이센스로 상업적 사용 및 배포가 가능한 Lucide Icon을 사용합니다.
          Lucide Icon은 Rounded Corner, Minimal Shape가 적용되어 대한민국 구석구석의 BI와 잘 매치되는 디자인 특성을 가지고 있기 때문에 선정되었습니다.

        </p>
        <img src="/img/guide_doc/icon_sample.png" className="full-img" />

        <div className="w-full flex justify-center pt-8">
          <ActionButton variant="default" size="default"><Link href={'https://lucide.dev/icons/'} target='_blank'>전체 아이콘 보기</Link></ActionButton> 
        </div>

        

        <div className="guide-title-level1">
          <h4 className="title">System Icons Guideline</h4>
        </div>

        <img src="/img/guide_doc/icon_guideline.png" className="full-img" />

        

      </div>
    </div>
  );
}