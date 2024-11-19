"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import Divider from '@/components/ui/divider';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Test1Page() {
  
  const [isModalActive, setIsModalActive] = useState(false);
  const openModal = () => setIsModalActive(true);
  const closeModal = () => setIsModalActive(false);

  return (
    
      <div className='mo-page-wrap pt-[48px] test-a scrollbar-mo'>
        <div className="test-common status-bar bg-white">
          <img src="/img/prototype/status_bar_iphone.png" alt="" />
        </div>
        <div className="page-wrap">
          <header className="app-header b-header">
            
            <img src="/img/prototype/b_header_full.png" />
          </header>


          <Swiper
            pagination={false} modules={[Pagination]} 
            slidesPerView={1.2} 
            spaceBetween={0} 
            navigation = {false}
            className='hero-carousel-a'
          >
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/b_hero_slide_1.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/b_hero_slide_2.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/b_hero_slide_3.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/b_hero_slide_4.png" />
            </SwiperSlide>
          </Swiper>

          <div className="pagination-wrap">
            <img src="/img/prototype/a_hero_pagination.png" alt="" />
          </div>

          <Divider variant="default" size="lg" orientation='horizontal' />

          <img src="/img/prototype/b_content_full.png" className="mt-[24px]" />
          
        </div>
        
        <div className="bottom-bar b-bottom-bar">
          <img src="/img/prototype/b_bottom_bar.png" alt="" />
          <div className='btn-menu' onClick={openModal}>
          </div>
        </div>

        <div className={`mo-menu-modal ${isModalActive ? 'active' : ''}`}>
          <div className="menu-wrap">
            <img src="/img/prototype/b_menu_1.png" alt="" />
          </div>
          <div className="btn-menu-close back" onClick={closeModal}></div>
          <div className="btn-menu-close" onClick={closeModal}></div>
        </div>

      </div>
      
  );
}