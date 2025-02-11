"use client";

import React, { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const navList = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/blog",
    label: "Blogs",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const NavBar = () => {
  const pathName = usePathname();
  const [openNav, setOpenNav] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenNav(false); // Close the menu if clicked outside
      }
    };

    if (openNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openNav]);
  return (
    <nav className="fixed z-50 px-4 pt-2 mt-2 md:pt-2 pb-2 w-screen mx-auto shadow-none rounded-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Image src={logo} alt="Umayer's Image" width={45} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 flex-1 items-center justify-end  text-white">
          {navList.map((item) => (
            <Link
              href={item?.path}
              key={item?.path}
              className={
                pathName === item?.path
                  ? "bg-[#00BFFF] text-[#06002C] border-b border-secondaryColor border-opacity-40 px-4 py-2 rounded-xl text-base"
                  : "hover:text-[#00BFFF] text-white border-b border-secondaryColor border-opacity-40 px-4 py-2 text-base rounded-xl"
              }>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center">
          <div
            className="h-6 w-6 text-inherit hover:bg-transparent mr-2 focus:bg-transparent active:bg-transparent md:hidden"
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <FaXmark className="h-8 w-8 text-white" strokeWidth={2} />
            ) : (
              <GiHamburgerMenu className="h-8 w-8 text-white" strokeWidth={2} />
            )}
          </div>
          <div
            id="navList"
            ref={menuRef}
            className={`fixed top-20 right-2 rounded-xl w-44 bg-[#1c2c5066] flex flex-col gap-4 p-2 transition-transform transform ${
              openNav ? "translate-x-0" : "translate-x-full"
            }`}>
            {navList.map((item) => (
              <Link
                href={item?.path}
                key={item?.path}
                className={
                  pathName === item?.path
                    ? "bg-[#00BFFF] text-[#06002C] border-b border-secondaryColor border-opacity-40 px-4 py-2 rounded-xl text-base"
                    : "hover:text-[#00BFFF] text-white border-b border-secondaryColor border-opacity-40 px-4 py-2 text-base rounded-xl"
                }>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
