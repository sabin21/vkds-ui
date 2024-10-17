"use client"

import PreviewNavigationHeader1 from '@/components/app/navigation_header';

export default function ComViewContent() {
  
  return (
    <div className='content-wrap'>

      <div className='page-mobile-wrap'>
        <div className='device-mobile-wrap'>
          <iframe src="/prototype_mobile/" className="mobile-iframe">
          </iframe>
        </div>
      </div>

    </div>
  );
}