import type { Metadata } from "next";
import React, { ReactNode } from "react"
// import Link from "next/link";
import localFont from "next/font/local";

import PreviewNavigationHeader1 from '@/components/app/navigation_header';
import BottomBar from "@/components/app/bottom_bar";

import "../globals.css";
import "@/components/styles/vkds.scss";
import "../styles/guide_doc.scss";

const pretendard = localFont({
  src: "../../public/fonts/pretendard_gov_variable/PretendardGOVVariable.woff2",
  display:"swap",
  weight: "45 920",
  variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${pretendard.variable} antialiased`}>
        <div className="w-full min-h-screen">
          {children}
        </div> 
    </body>
    </html>
  );
}