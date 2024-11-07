"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import Divider from '@/components/ui/divider';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PageTest1() {
  
  return (
    <div className='test-a'>
      <div className="test-common status-bar">
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
          <img src="/img/prototype/header_burger_btn.png" className="btn-burger" />
        </header>
        <div className="app-menu-wrap">
          <img src="/img/prototype/app_menu_a.png" alt="" />
        </div>

        <Swiper
          pagination={true} modules={[Pagination]} 
          slidesPerView={1.2} 
          spaceBetween={10} 
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

        <div className="section-wrap">
          <img src="/img/prototype/a_service_link_full.png" alt="" />
        </div>
        
        <div className="section-wrap">
          <img src="/img/prototype/a_mo_home.png" className="full-dummy-img" />
        </div>
        
      </div>
      
      
    </div>
  );
}