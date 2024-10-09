import React, { useState, ReactNode } from 'react';

import { IconAlertInfo, IconAlertQuestion, IconAlertBang, IconAlertCheck } from '@/components/icons/icons_alert'
import { ChevronDown } from "lucide-react"
import { ChevronUp } from "lucide-react"

type BannerType = 'info' | 'success' | 'warning' | 'error' | 'neutral';

interface BannerProps {
  type: BannerType;
  headline: string;
  expandable?: boolean;
  children?: ReactNode;
}

const bannerConfig: Record<BannerType, { icon: React.ElementType; className: string }> = {
  info: { icon: IconAlertInfo, className: "info" },
  success: { icon: IconAlertCheck, className: "success" },
  warning: { icon: IconAlertBang, className: "warning" },
  error: { icon: IconAlertBang, className: "error" },
  neutral: { icon: IconAlertQuestion, className: "" },
};

const BannerInline: React.FC<BannerProps> = ({ type, headline, children, expandable = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { icon: Icon, className } = bannerConfig[type];

  const toggleExpand = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={"banner banner-inline" +` ${className}`}>
      <div className="headline-wrap" onClick={toggleExpand}>
        <div className="headline-leading">
          <div className="icon-wrap">
            <Icon />
          </div>
          <span className="headline-text">{headline}</span>
        </div>
        
        {expandable && (
          <button className="" onClick={toggleExpand}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        )}
      </div>
      {expandable && isExpanded && children && (
        <div className="content-body">{children}</div>
      )}
    </div>
  );
};

export default BannerInline;