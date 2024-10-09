"use client"

import React from "react";

import { IconArrowBack, IconHeart, IconMagnifier } from '@/components/icons/icons_app_ui';

export default function PreviewNavigationHeader1(){
  return(    
      <div className="nav-header-wrap">
        <span className='upper-wrap'>
          <div className="leading-wrap">
            <button className='navigation-header-btn'>
              <IconArrowBack />
            </button>
          </div>
          <div className='nav-header-title'></div>
          <div className="trailing-wrap">
            <button className='navigation-header-btn'>
              <IconHeart />
            </button>
            <button className='navigation-header-btn'>
              <IconMagnifier />
            </button>
          </div>
        </span>
        <span className="bottom-wrap">
          <div className='nav-header-title'>타이틀</div>
        </span>
      </div>    
  )
}