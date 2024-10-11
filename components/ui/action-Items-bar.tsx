
import React, { ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { ChevronDownIcon } from 'lucide-react'
import { Chip } from '@/components/ui/chip';
import Tile from '@/components/ui/tile/tile';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

interface ActionItemsProps {
  children: ReactNode;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
}

const ActionItemsBar = ({ 
  children, 
  slidesPerView = 'auto', 
  spaceBetween = 10 
}: ActionItemsProps): ReactNode => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="action-items-bar">
      <div className={`bar-area ${
        isExpanded ? 'expanded' : 'default'
      }`}>
        {isExpanded ? (
          <div className="swiper-expanded">
            {React.Children.map(children, (child, index) => (
              <div key={index}>{child}</div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            // navigation
          >
            {React.Children.map(children, (child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <button 
        onClick={toggleExpand}
        className={`btn-expand ${
          isExpanded ? 'active' : ''
        }`}
      >
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default ActionItemsBar;