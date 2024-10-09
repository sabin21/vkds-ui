"use client"

import Link from "next/link";
export default function ComViewContent() {
    
  return (
    <div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Standard</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">
            <Link href="" className="link xxs"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link xs"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link sm"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link regular"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link lg"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>            
          </span>
          <span className="example-row">
            <Link href="" className="link xxs">링크텍스트<i className="trailing-icon vk-icons vk-arrow-right-circle_20"></i></Link>
            <Link href="" className="link xs">링크텍스트<i className="trailing-icon vk-icons vk-arrow-right-circle_20"></i></Link>
            <Link href="" className="link sm">링크텍스트<i className="trailing-icon vk-icons vk-arrow-right-circle_20"></i></Link>
            <Link href="" className="link regular">링크텍스트<i className="trailing-icon vk-icons vk-arrow-right-circle_20"></i></Link>
            <Link href="" className="link lg">링크텍스트<i className="trailing-icon vk-icons vk-arrow-right-circle_20"></i></Link>            
          </span>
        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Primary</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">
            <Link href="" className="link xxs primary"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link xs primary"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link sm primary"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link regular primary"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link lg primary"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>            
          </span>
        </div>  
      </div>
    </div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Subtle</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view">
        <div className="example-view">
          <span className="example-row">
            <Link href="" className="link xxs subtle"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link xs subtle"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link sm subtle"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link regular subtle"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link lg subtle"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>            
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
            <Link href="" className="link xxs static-white"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link xs static-white"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link sm static-white"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link regular static-white"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>
            <Link href="" className="link lg static-white"><i className="leading-icon vk-icons vk-arrow-right-circle_20"></i>링크텍스트</Link>            
          </span>
        </div>  
      </div>
    </div>

    </div>
  );
}