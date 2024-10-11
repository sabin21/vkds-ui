"use client"

import React, { ReactNode } from 'react';
import Link from "next/link";
import { MenuItem } from '../types/guideMenu';
import { GuideMenuData } from "../guideMenu";

interface MenuItemComponentProps {
  item: MenuItem;
  level: number;
}

const MenuItemComponent = ({ item, level }: MenuItemComponentProps): ReactNode => {
  return (
    <li style={{ marginLeft: `${level * 20}px` }}>
      {item.url ? (
        <Link href={`guide/${item.url}`}>
          <img src={item.thumbSrc} alt="" />
          {item.title}
        </Link>
      ) : (
        <span>{item.title}</span>
      )}
      {item.children && (
        <ul>
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
    <nav>
      <ul>
        {GuideMenuData.map((item) => (
          <MenuItemComponent key={item.id} item={item} level={0} />
        ))}
      </ul>
    </nav>
  );
};

export default ComponentsView;