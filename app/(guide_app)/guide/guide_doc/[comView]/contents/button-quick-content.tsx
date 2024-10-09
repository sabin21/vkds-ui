"use client"

import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function ComViewContent() {
    
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
        이미지 소스를 사용할 수 없는 경우 또는 소스가 지정되지 않은 경우 아바타 구성 요소는 기본 이미지를 표시합니다.
        </p>
      </div>      
    </div>

    </div>
  );
}