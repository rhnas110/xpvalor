"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    // STICKY HEADER DOESNT WORK PROPERLY
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all shadow-[0_5px_5px_-2px_rgba(1,2,3,0.3)]`,
        {
          "bg-white/75 backdrop-blur-lg": scrolled,
          "bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[70px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center lg:hidden"
          >
            <Logo className="w-auto h-12" />
          </Link>
        </div>

        <div className="hidden lg:block">
          <div className="h-8 w-8 rounded-full bg-logo flex items-center justify-center text-center">
            <span className="font-semibold text-sm text-logoSecondary">XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
