
import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Chip } from '@/components/ui/chip';
import Tile from '@/components/ui/tile/tile';

import 'swiper/css';
import 'swiper/css/navigation';

interface Item {
  id: number;
  name: string;
  icon?: string;
}
type ItemComponentType = 'chip' | 'tile';

interface ItemBarProps {
  items: Item[];
  onItemChange?: (itemName: string, isActive: boolean) => void;
  itemComponent?: ItemComponentType;
  renderItem?: (item: Item) => ReactNode;
}

const ItemBar = ({ items, onItemChange, itemComponent = 'chip', renderItem }: ItemBarProps) => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);

  const handleItemChange = (itemName: string, isActive: boolean) => {
    if (onItemChange) {
      onItemChange(itemName, isActive);
    }
  };

  const ItemComponent = itemComponent === 'chip' ? Chip : Tile;

  return (
    <div className='item-bar-wrap'>
      <Swiper
        modules={[Navigation, FreeMode]}
        slidesPerView="auto"
        spaceBetween={8}
        freeMode={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevRef} className="swiper-button-prev" />
      <button ref={nextRef} className="swiper-button-next" />
    </div>
  );
};

export default ItemBar;