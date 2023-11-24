"use client";
import { ReactNode } from "react";

import Sidebar from "./sidebar";
import Header from "./header";
import HeaderMobile from "./headerMobile";
import MarginWidthWrapper from "./marginWidthWrapper";
import { Footer } from "./footer";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden">
          <MarginWidthWrapper>
            <Header />
            <div className="flex flex-col flex-grow pt-2 pb-4 px-4 space-y-2">
              {children}
            </div>
            <Footer />
          </MarginWidthWrapper>
        </main>
      </div>
    </>
  );
}
