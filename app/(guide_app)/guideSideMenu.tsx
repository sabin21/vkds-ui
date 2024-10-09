 'use client'

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuItem } from './types/guideMenu';

// interface MenuItem {
//   id: number;
//   title: string;
//   url?: string;
//   children?: MenuItem[];
// }

interface MenuProps {
  items: MenuItem[];
  level: number;
}

const GuideSideMenu = ({ items, level }: MenuProps): ReactNode => {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === `/guide${url}`;
  };

  const isParentActive = (item: MenuItem): boolean => {
    if (isActive(item.url || '')) return true;
    if (item.children) {
      return item.children.some(child => isParentActive(child));
    }
    return false;
  };

  return (
    <ul className={`menu-level-${level}`}>
      {items.map(item => (
        <li key={item.id}>
          {item.children ? (
            <>
              <button className={isParentActive(item) ? 'active' : ''}>{item.title}</button>
                <GuideSideMenu items={item.children} level={level + 1} />
            </>
          ) : (
            <Link 
              href={`/guide${item.url}` || '#'}
              className={isActive(item.url || '') ? 'active' : ''}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default GuideSideMenu;