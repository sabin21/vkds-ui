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
          <div className="gusuk-logo">
            <img src="/img/prototype/gusuk_logo.png" alt="" />
          </div>
          <header className="app-header">
            <div className="search-wrap">
              <img src="/img/prototype/header_search.png" alt="" />
            </div>
            <img src="/img/prototype/header_login.png" className="btn-burger" />
          </header>
          <div className="app-menu-wrap">
            <img src="/img/prototype/app_menu_a.png" alt="" />
          </div>

          <Swiper
            pagination={false} modules={[Pagination]} 
            slidesPerView={1.2} 
            spaceBetween={0} 
            navigation = {false}
            className='hero-carousel-a'
          >
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/hero_card_a_1.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/hero_card_a_2.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/hero_card_a_3.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/hero_card_a_4.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/hero_card_a_5.png" />
            </SwiperSlide>
            <SwiperSlide className='hero-card-a'>
              <img src="/img/prototype/hero_card_a_6.png" />
            </SwiperSlide>
          </Swiper>

          <div className="pagination-wrap">
            <img src="/img/prototype/a_hero_pagination.png" alt="" />
          </div>

          <Divider variant="default" size="lg" orientation='horizontal' />

          <div className="push-notice-wrap">
            <img src="/img/prototype/push_notice_1.png" className="push-notice-item" />
            <img src="/img/prototype/push_notice_2.png" className="push-notice-item" />
            <img src="/img/prototype/push_notice_3.png" className="push-notice-item" />
            <img src="/img/prototype/push_notice_4.png" className="push-notice-item" />
          </div>

          <div className='a-link-wrap'>
            <img src="/img/prototype/a_link_1.png" alt="" />
          </div>

          <div className='a-link-wrap-2'>
            <img src="/img/prototype/a_link_title_2.png" alt="" />
            <img src="/img/prototype/a_link_2.png" alt="" />
          </div>

          <img src="/img/prototype/a_content_full.png" alt="" />
          
        </div>
        
        <div className="bottom-bar">
          <img src="/img/prototype/a_bottom_bar.png" alt="" />
          <div className='btn-menu' onClick={openModal}>
          </div>
        </div>

        <div className={`mo-menu-modal ${isModalActive ? 'active' : ''}`}>
          <div className="menu-wrap">
            <img src="/img/prototype/a_menu_1.png" alt="" />
          </div>
          <div className="btn-menu-close back" onClick={closeModal}></div>
          <div className="btn-menu-close" onClick={closeModal}></div>
        </div>

      </div>
      
  );
}