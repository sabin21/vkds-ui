"use client"

import * as React from "react"
// import { Minus, Plus } from "lucide-react"
import { ActionButton } from "@/components/ui/action-button"
// import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function ComViewContent() {
  
  return (
    <div className="content-wrap">

      <p>
        Drawer는 페이지를 이탈하지 않고 집중이 필요한 중요 정보를 표시하거나 복잡한 정보 입력을 요청할 시 사용 하는 
        대화 상자의 대안이며 활성화되면 사용자는 페이지의 컨텐츠에서 차단되어 작업을 완료하거나 Drawer를 닫을 때 까지 
        이전 페이지로 돌아갈 수 없기 때문에 꼭 필요한 상황에서만 사용할 수 있도록 해야 합니다.
      </p>   

    <div className="guide-title-level1">
      <h4 className="title">Anatomy</h4>
    </div>

    <img src="/img/guide_doc/drawer_anatomy.png" className="full-img" />

    <div className="guide-title-level1">
      <h4 className="title">Variants</h4>
    </div>
    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Type</h4>
    </span>
    <img src="/img/guide_doc/drawer_type.png" className="full-img" />

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">기본사용예시</h4>
    </span>

    <div className="component-view-wrap" style={{overflow:"visible"}}>
      <div className="inner-view">
        <div className="example-view">

          <Drawer>
            <DrawerTrigger asChild>
              <ActionButton variant="default">Drawer 열기</ActionButton>
            </DrawerTrigger>
            <DrawerContent>
              <div className="drawer-content">
                <DrawerHeader >
                  <DrawerTitle>천리포 수목원 소개</DrawerTitle>
                  <DrawerDescription>
                    숲길을 따라 들어가면 연못, 암석원, 기념관 등 다양한 콘셉트로 이루어진 27개의 테마정원이 펼쳐지는데요.
                    숲속에서 바다를 보면서 산책하는 묘미가 있고 해수욕장부터 어촌마을까지 한눈에 담을 수 있습니다.
                  </DrawerDescription>
                </DrawerHeader>
                <div>
                  <ul className="list-wrap">
                    <li className="list-item">
                      <div className="leading-item circle">
                        <i className="vk-icons vk-magnifier_24"></i>
                      </div>
                      <div className="text-item">
                        <p> 리스트 항목 샘플텍스트 </p>
                      </div>
                      <div className="trailing-item">
                        <Switch defaultChecked={true} />
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="leading-item circle">
                        <i className="vk-icons vk-magnifier_24"></i>
                      </div>
                      <div className="text-item">
                        <p> 리스트 항목 샘플텍스트 </p>
                      </div>
                      <div className="trailing-item">
                      <Switch />
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="leading-item circle">
                        <i className="vk-icons vk-magnifier_24"></i>
                      </div>
                      <div className="text-item">
                        <p> 리스트 항목 샘플텍스트 </p>
                      </div>
                      <div className="trailing-item">
                        <Switch />
                      </div>
                    </li>
                  </ul>
                </div>
                <DrawerFooter className="drawer-footer">
                  <ActionButton>Submit</ActionButton>
                  <DrawerClose asChild>
                    <ActionButton variant="default">Cancel</ActionButton>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

        </div>  
      </div>
    </div>

    </div>
  );
}