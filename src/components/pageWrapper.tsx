"use client";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import HeaderMobile from "./headerMobile";
import MarginWidthWrapper from "./marginWidthWrapper";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 flex-grow pb-4">
              {children}
            </div>
          </MarginWidthWrapper>
        </main>
      </div>
    </>
  );
}
