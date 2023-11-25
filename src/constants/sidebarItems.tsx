import { IoHome } from "react-icons/io5";
import { FaMagento, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

import { SideNavItem } from "@/types/sidebarType";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Discover",
    path: "/",
    icon: <IoHome size={24} />,
  },
  {
    title: "Topup",
    path: "/topup",
    icon: <AiOutlineTransaction size={24} />,
  },
  // {
  //   title: "Agent",
  //   path: "/agent",
  //   icon: <FaMagento size={24} />,
  // },
  // {
  //   title: "Help",
  //   path: "/help",
  //   icon: <FaQuestionCircle size={24} />,
  //   submenu: true,
  //   subMenuItems: [
  //     {
  //       title: "Help",
  //       path: "/help",
  //     },
  //     {
  //       title: "FAQ",
  //       path: "/help/faq",
  //     },
  //   ],
  // },
];
