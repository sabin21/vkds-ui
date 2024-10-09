"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function ComViewContent() {
    
  return (
    <div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Primary</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">

            <ul className="tab-group" role="tab">
              <li className="tab-item active" data-bs-toggle="tab">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item" data-bs-toggle="tab">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
            </ul>

          </span>
        </div>  
      </div>
    </div>
    
    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Horizontal</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">

            <ul className="tab-group horizontal" role="tab">
              <li className="tab-item active">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
              <li className="tab-item">
                <a className="tab-link">
                  <i className="vk-icons vk-edit-2_20"></i>
                  <span className="link-text">탭아이템</span>
                  <span className="badge outline sm">24</span>
                </a>
              </li>
            </ul>

          </span>
        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Static White</h4>
    </span>
    <div className="component-view-wrap bg-gray-dark">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">
            
              <ul className="tab-group">
                <li className="tab-item">
                  <a className="tab-link">탭아이템</a>
                </li>
                <li className="tab-item">
                  <a className="tab-link">탭아이템</a>
                </li>
                <li className="tab-item">
                  <a className="tab-link">탭아이템</a>
                </li>
                <li className="tab-item">
                  <a className="tab-link">탭아이템</a>
                </li>
                <li className="tab-item">
                  <a className="tab-link">탭아이템</a>
                </li>
              </ul>
            
          </span>
        </div>  
      </div>
    </div>

    </div>
  );
}