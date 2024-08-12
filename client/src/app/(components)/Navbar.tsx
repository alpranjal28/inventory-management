"use client";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu />
          Home
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start typing to search groups and products"
            className="pl-10 pr-4 py-2 w-52 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}

      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div className="">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.open("https://github.com/alpranjal28")}
          >
            <Image
              src={`https://s3-inventory-mgmt.s3.ap-south-1.amazonaws.com/pp.jpg`}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full h-full object-cover"
            />
            <span className="font-semibold">alpranjal28</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
