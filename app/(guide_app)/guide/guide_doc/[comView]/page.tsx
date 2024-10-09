"use client"
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ComViewHead from "../components/ComViewHead";
import { GuideMenuData } from "../../../guideMenu";

interface MenuItem {
  id: number;
  title: string;
  url?: string;
  headlineTitle?: string;
  headlineCopy?: string;
  thumbSrc?: string;
  contentSrc?: string;
  children?: MenuItem[];
}

function findMenuItem(items: MenuItem[], url: string): MenuItem | null {
  for (const item of items) {
    if (item.url === url) {
      return item;
    }
    if (item.children) {
      const found = findMenuItem(item.children, url);
      if (found) return found;
    }
  }
  return null;
}

export default function ComPage({ params }: { params: { comView: string } }) {
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const found = findMenuItem(GuideMenuData, `/guide_doc/${params.comView}`);
    if (found) {
      setMenuItem(found);
    } else {
      setError(`No data found for the given comView: ${params.comView}`);
    }
  }, [params.comView]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!menuItem) {
    return <div>Loading...</div>;
  }

  const ComViewContent = menuItem.contentSrc 
    ? dynamic(() => {
        if (typeof menuItem.contentSrc === 'string') {
          return import(`./contents/${menuItem.contentSrc}`);
        }
        throw new Error('Invalid contentSrc');
      }, { ssr: false })
    : () => <div>Content not available</div>;

  return (
    <main>
      <div className="guide-wrap">
        <ComViewHead 
          componentHeadline={menuItem.headlineTitle}
          headlineCopy={menuItem.headlineCopy}
        />
        <ComViewContent />
      </div>
    </main>
  );
}
