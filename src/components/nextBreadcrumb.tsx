"use client";
import { Fragment, ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

type TBreadCrumbProps = {
  homeElement?: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  lengthCantMoreThanTen?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  lengthCantMoreThanTen,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => {
    if (lengthCantMoreThanTen) return path.length < 10 && path;
    else return path;
  });

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement ? homeElement : <IoHome size={24}/>}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
