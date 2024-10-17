import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import { GuideMenu } from "./guideMenu";
import "../globals.css";
import "@/components/styles/vkds.scss";
import "../styles/guide_doc.scss";
import { Toaster } from "@/components/ui/toaster"

const pretendard = localFont({
  src: "../../public/fonts/pretendard_gov_variable/PretendardGOVVariable.woff2",
  display:"swap",
  weight: "45 920",
  variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "대한민국 구석구석",
  description: "대한민국 구석구석",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" data-theme=" ">
      <body className={`${pretendard.variable} antialiased`} >
        <main className="guide-main">

          <nav className="left-nav-wrap">
            <div className="left-menu-wrap">
              <Link className="logo" href={"/guide/"}>
                <img src="/img/logo_vkds.png" alt="" />
              </Link>
              <GuideMenu />
            </div>  
          </nav>

          <div className="content-wrap">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
