"use client";
import { ReactNode } from "react";

import Sidebar from "./sidebar";
import Header from "./header";
import MarginWidthWrapper from "./marginWidthWrapper";
import { Footer } from "./footer";

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const c = className || "px-4 pt-2 pb-4";
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden">
          <MarginWidthWrapper>
            <Header />
            <div className={`flex flex-col flex-grow space-y-2 ${c}`}>
              {children}
            </div>
            <Footer />
          </MarginWidthWrapper>
        </main>
      </div>
    </>
  );
}
