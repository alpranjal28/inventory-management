"use client";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  Settings,
  SlidersHorizontal,
  User,
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux";
import { setIsSidebarCollapsed } from "@/state";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? " w-0 md:w-16 " : " w-72 md:w-64 "
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-center md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-4" : "px-12"
        }`}
      >
        <Image
          src={`https://s3-inventory-mgmt.s3.ap-south-1.amazonaws.com/logo1.png`}
          alt="logo"
          width={27}
          height={27}
          className="rounded-full text-2xl"
          style={{ width: "27px", height: "27px" }}
        />
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          STOX
        </h1>
        <button
          className="md:hidden px-3 py-3 mx-4 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">© 2022 STOX</p>
      </div>
    </div>
  );
};

export default Sidebar;
