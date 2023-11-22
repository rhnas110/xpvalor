import { IoHome } from "react-icons/io5";
import { FaProjectDiagram, FaMagento } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { SideNavItem } from "@/types/sidebarType";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <IoHome size={24} />,
  },
  {
    title: "Project",
    path: "/project",
    icon: <FaProjectDiagram size={24} />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/project" },
      { title: "Web Design", path: "/project/web-design" },
    ],
  },
  {
    title: "Agent",
    path: "/agent",
    icon: <FaMagento size={24} />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <FaQuestionCircle size={24} />,
  },
];
