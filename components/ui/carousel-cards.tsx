import React, { ReactNode, useState } from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import { ChevronDownIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselCardsVariants = cva(
  "carousel-cards-wrap",
  {
    variants: {
      variant: {
        default: "",
        border: "border border-gray-200 rounded-lg"
      },
      perView: {
        perView2: "per-view-2",
        perView1: "",
        perViewFull: "per-view-1" 
      }
    },
    defaultVariants: {
      variant: "default",
      perView: "perView1"
    }
  }
)

export interface CarouselCardsProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselCardsVariants> {
      children: ReactNode;
      slidesPerView?: number | 'auto';
      spaceBetween?: number;
      navigation?: boolean;
      pagination?: boolean | { clickable: boolean };
}

const CarouselCards = React.forwardRef<HTMLDivElement, CarouselCardsProps>(
  ({ 
    className, children, variant, perView,
    slidesPerView = 'auto', 
    spaceBetween = 10, 
    navigation = false,
    pagination = { clickable: true },
    ...props
  }, ref) => {

  return (
    <div 
      ref={ref}
      className={cn(carouselCardsVariants({ variant, perView, className }))}
      {...props}
    >
      <Swiper
        modules={[Navigation, FreeMode, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={pagination}
        navigation={navigation}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

CarouselCards.displayName = 'CarouselCards';

export default CarouselCards;