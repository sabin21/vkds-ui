"use client"

import React, { ReactNode } from 'react';
import Link from "next/link";
import { MenuItem } from '../types/guideMenu';
import { GuideMenuData } from "../guideMenu";
import { cn } from "@/lib/utils";  // cn 함수를 import 합니다.

interface MenuItemComponentProps {
  item: MenuItem;
  level: number;
}

const MenuItemComponent = ({ item, level }: MenuItemComponentProps): ReactNode => {
  return (
    <li className={cn(
      "menu-item",
      {
        "level-0": level === 0,
        "level-1": level === 1,
        "level-2": level === 2,
        "level-3": level === 3,
      }
    )}>
      {item.url ? (
        <Link href={`guide/${item.url}`} className={`menu-link level-${level}`}>
          <img src={item.thumbSrc} alt="" className="menu-thumb" />
          <span className="menu-title">{item.title}</span>
        </Link>
      ) : (
        <span className={`menu-title level-${level}`}>{item.title}</span>
      )}
      {item.children && (
        <ul className={`submenu level-${level}`}>
          {item.children.map((child) => (
            <MenuItemComponent key={child.id} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const ComponentsView = (): ReactNode => {
  return (
    // <div className="guide-menu-container">
    //   <ul className="guide-menu">
    //     {GuideMenuData.map((item) => (
    //       <MenuItemComponent key={item.id} item={item} level={0} />
    //     ))}
    //   </ul>
    // </div>
    <div className="guide-index-wrap">
      <div className="hero-wrap">
        <img src="/img/guide_doc/index_hero_title.png" className="hero-title" />
      </div>
      <div className="inner-wrap">
        <div className="row">
          <Link className="index-link-item intro" href={'/guide/guide_doc/intro-main'}>
            <h4 className='title1'>Introduction</h4>
          </Link>
          <div className="index-link-item black">
            <h4 className='title1'>Foundation</h4>
            <div className="links-wrap">
              <Link className='link-item' href={'/guide/guide_doc/foundation-color'}>Colors</Link>
              <Link className='link-item' href={'/guide/guide_doc/foundation-typography'}>Typography</Link>
              <Link className='link-item' href={'/guide/guide_doc/foundation-icons'}>Icons</Link>
              <Link className='link-item' href={'/guide/guide_doc/foundation-layout'}>Layout</Link>
              <Link className='link-item dimmed' href={'#'}> </Link>
              <Link className='link-item dimmed' href={'#'}> </Link>
            </div>
          </div>
          
        </div>
        <div className="index-link-item gray">
          <h4 className='title1'>Components</h4>
          <div className="links-wrap">
            <Link className='link-item' href={'/guide/guide_doc/action-button'}>Actions</Link>
            <Link className='link-item' href={'/guide/guide_doc/checkbox'}>Input and Selection</Link>
            <Link className='link-item' href={'/guide/guide_doc/badge'}>Indicator and Status</Link>
            <Link className='link-item' href={'/guide/guide_doc/accordion'}>Content Display</Link>
            <Link className='link-item' href={'/guide/guide_doc/alert-dialog'}>Messaging</Link>
            <Link className='link-item' href={'/guide/guide_doc/drawer'}>Container and layout</Link>
            <Link className='link-item' href={'/guide/guide_doc/breadcrumb'}>Navigation</Link>
          </div>
        </div>
        <div className="index-link-item gray big">
          <h4 className='title1'>Patterns</h4>
          <div className="links-wrap">
            <Link className='link-item' href={'/guide/guide_doc/pattern-common-header'}>
              <h5>App common</h5> 
              <span className='desc'>
                App 전체에 공통적으로 사용되는 UI Components들
              </span>
            </Link>
            <Link className='link-item' href={'/guide/guide_doc/page-home-1'}>
              <h5>Pages</h5> 
              <span className='desc'>
                중요 화면 구조 정의
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsView;