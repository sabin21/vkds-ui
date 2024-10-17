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
        // 필요한 만큼 레벨을 추가할 수 있습니다.
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
    <div className="guide-menu-container">
      <ul className="guide-menu">
        {GuideMenuData.map((item) => (
          <MenuItemComponent key={item.id} item={item} level={0} />
        ))}
      </ul>
    </div>
  );
};

export default ComponentsView;