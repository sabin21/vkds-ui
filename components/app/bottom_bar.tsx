"use client"

import React from "react";
import Link from "next/link";

import { IconArrowBack, IconHeart, IconMagnifier } from '@/components/icons/icons_app_ui';
import { IconAlarm, IconCalendar, IconGridFour, IconHome, IconCompass, IconBadgeDiscount  } from '@/components/icons/icons_duo_tone';

export default function BottomBar(){
  return(    
      <div className="bottom-bar-wrap">
        <Link  className="bottom-bar-item" href={"/"}>
          <IconHome />
          <span className="item-title">메뉴명</span>
        </Link>
        <Link  className="bottom-bar-item active" href={"/"}>
          <IconAlarm />
          <span className="item-title">메뉴명</span>
        </Link>
        <Link  className="bottom-bar-item" href={"/"}>
          <IconCompass />
          <span className="item-title">메뉴명</span>
        </Link>
        <Link  className="bottom-bar-item" href={"/"}>
          <IconBadgeDiscount />
          <span className="item-title">메뉴명</span>
        </Link>
        <Link  className="bottom-bar-item" href={"/"}>
          <IconGridFour />
          <span className="item-title">메뉴명</span>
        </Link>
      </div>    
  )
}