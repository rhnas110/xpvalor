"use client";
import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "@/constants";
import { FaChevronDown } from "react-icons/fa6";
import { SideNavItem } from "@/types/sidebarType";
import Logo from "./logo";

const Sidebar = () => {
  return (
    <div className="lg:w-60 h-screen flex-1 fixed hidden lg:flex shadow-[5px_0_10px_-2px_rgba(1,2,3,0.3)]">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start lg:px-6 shadow-[0_5px_5px_-2px_rgba(1,2,3,0.3)] h-[70px] w-full"
        >
          <Logo />
        </Link>

        <div className="flex flex-col space-y-2 lg:px-6">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className="flex flex-row items-center p-2 rounded-lg w-full justify-between group"
          >
            <div className="flex flex-row space-x-4 items-center">
              <div
                className={`group-hover:text-logo ${
                  pathname.includes(item.path) ? "text-logo scale-125" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="font-semibold text-xl flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <FaChevronDown size={24} />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`hover:text-logo ${
                      subItem.path === pathname ? "font-bold text-logo" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className="flex flex-row space-x-4 items-center p-2 rounded-lg group"
        >
          <div
            className={`group-hover:text-logo transition duration-300 ${
              item.path === pathname ? "text-logo scale-125" : ""
            }`}
          >
            {item.icon}
          </div>
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
