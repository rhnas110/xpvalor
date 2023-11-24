"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useSession } from "next-auth/react";

import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

import { Logo, LogoMobile } from "./logo";
import AuthButton from "./button/authButton";
import HeaderMobile from "./headerMobile";
import ProfileButton from "./user/profileButton";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const { data: session } = useSession();

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
          <HeaderMobile />
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center lg:hidden"
          >
            <Logo className="w-auto h-12 hidden sm:block ml-4" />
            <LogoMobile className="w-auto h-10 sm:hidden" />
          </Link>
        </div>

        <div>
          {session?.user?.email ? (
            <ProfileButton username={session?.user?.username} />
          ) : (
            <AuthButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
