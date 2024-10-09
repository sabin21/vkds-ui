"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
export default function ComViewContent() {
    
  return (
    <div>
    <div className="content-col">
      <div className="block">
        <p>
          목록은 텍스트나 이미지의 연속적인 그룹 형태로 구성됩니다. 
          이 항목들은 아이콘과 텍스트로 표현되는 형태와 Control 요소를 포함하는 항목으로 구성됩니다.
        </p>
      </div>      
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Text with Bullet</h4>
    </span>
    <div className="component-view-wrap">
      <div className="flex flex-row gap-12 px-16 pt-14">
        <div className="w-[48%]">
          <ul className="list-wrap-text">
            <li className="list-item">
              <div className="leading-item">
                <span className="bullet"></span>
              </div>
              <div className="text-item">
                <p>
                  리스트 항목 샘플텍스트<br />리스트 항목 샘플텍스트
                </p>
              </div>
            </li>
            <li className="list-item">
              <div className="leading-item">
                <span className="bullet"></span>
              </div>
              <div className="text-item">
                <p>
                  리스트 항목 샘플텍스트
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[48%]">
          <ul className="list-wrap-text">
            <li className="list-item">
              <div className="leading-item">
                <span className="bullet round"></span>
              </div>
              <div className="text-item">
                <p>
                  리스트 항목 샘플텍스트<br />리스트 항목 샘플텍스트
                </p>
              </div>
            </li>
            <li className="list-item">
              <div className="leading-item">
                <span className="bullet round"></span>
              </div>
              <div className="text-item">
                <p>
                  리스트 항목 샘플텍스트
                </p>
              </div>
            </li>
          </ul>
        </div> 
      </div>

      <div className="flex flex-row gap-12 px-16 py-14">
        <div className="w-[48%]">
          <ul className="list-wrap-text">
            <li className="list-item">
              <div className="leading-item">
                <span className="bullet bullet-image">
                  <img src="/img/list_bullet_star.svg" alt="" />
                </span>
              </div>
              <div className="text-item">
                <p>
                  리스트 항목 샘플텍스트
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[48%]">
          <ul className="list-wrap-text">
            <li className="list-item">
              <div className="leading-item">
                <span className="bullet bullet-image">
                  <img src="/img/list_bullet_point4.svg" alt="" />
                </span>
              </div>
              <div className="text-item">
                <p>
                  리스트 항목 샘플텍스트
                </p>
              </div>
            </li>
          </ul>
        </div> 
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">List Menu</h4>
    </span>
    <div className="component-view-wrap bg-gray-200">
      <div className="flex flex-row gap-12 px-16 py-16">
        <div className="w-[48%]">
          <ul className="list-wrap">
            <li className="list-item menu-link">
              <div className="leading-item">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
            </li>
            <li className="list-item menu-link">
              <div className="leading-item">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
            </li>
            <li className="list-item menu-link">
              <div className="leading-item">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[48%]">
          <ul className="list-wrap">
            <li className="list-item menu-link">
              <div className="leading-item circle pink">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
            </li>
            <li className="list-item menu-link">
              <div className="leading-item circle pink">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
            </li>
            <li className="list-item menu-link">
              <div className="leading-item circle pink">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
            </li>
          </ul>
        </div> 
      </div>

    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">List with Trailing item</h4>
    </span>
    <div className="component-view-wrap bg-gray-200">
      <div className="flex flex-row gap-12 px-16 py-16">
        
        <div className="w-[48%]">
          <ul className="list-wrap">
            <li className="list-item">
              <div className="leading-item circle pink">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
              <div className="trailing-item">
                <Checkbox id="item1" defaultChecked={true} />
              </div>
            </li>
            <li className="list-item">
              <div className="leading-item circle pink">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
              <div className="trailing-item">
                <Checkbox id="item2" />
              </div>
            </li>
            <li className="list-item">
              <div className="leading-item circle pink">
                <i className="vk-icons vk-magnifier_24"></i>
              </div>
              <div className="text-item">
                <p> 리스트 항목 샘플텍스트 </p>
              </div>
              <div className="trailing-item">
                <Checkbox id="item3" />
              </div>
            </li>
          </ul>
        </div> 

        <div className="w-[48%]">
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

      </div>

    </div>

      
    </div>
  );
}