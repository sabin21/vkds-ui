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
    <div>

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