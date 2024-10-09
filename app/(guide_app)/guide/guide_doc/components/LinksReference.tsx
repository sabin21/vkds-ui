"use client"

import Link from 'next/link';
import Image from 'next/image';
import linkLogoVkds from '../../../../img/logo_krds.svg';
import linkShadcn from '../../../../img/logo_shadcn.svg';

export default function LinksReference(props: any) {
    
  return (
    <div>
      <span className="view-block-title-wrap">
        <h4 className="view-block-title">Reference Link</h4>
      </span>
      <div className="guide-doc-links-wrap">
        <Link className="link-reference" href={props.linkVkds} target='_blank'>
          <Image src={linkLogoVkds} width={160} height={64} alt="" />
        </Link>
        <Link className="link-reference" href={props.linkShadcn} target='_blank'>
          <Image src={linkShadcn} width={160} height={64} alt="" />
        </Link>
      </div>
    </div>
  
  )
}