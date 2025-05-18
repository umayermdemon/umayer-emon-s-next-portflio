"use client";

import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/UE.png";

import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const navList = [
  {
    path: "/#home",
    label: "Home",
  },
  {
    path: "/#about",
    label: "About",
  },
  {
    path: "/#skills",
    label: "Skills",
  },
  {
    path: "/#projects",
    label: "Projects",
  },
  {
    path: "/#education",
    label: "Educations",
  },
  {
    path: "/blogs",
    label: "Blogs",
  },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home");
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
        setOpenNav(false);
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
    <nav className="fixed z-50 px-4 pt-2 md:pt-0 pb-2 w-screen mx-auto shadow-none rounded-none ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="ml-0 md:ml-4 lg:ml-0">
          <div className="text-2xl font-bold text-blue-600">
            <Image src={logo} alt="Umayer's Image" width={35} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4  items-center flex-1 justify-center text-white navLink">
          {navList.map((item) => (
            <Link
              href={item?.path}
              key={item?.path}
              onClick={() => setActiveLink(item.path)}
              className={`flex items-center text-base font-medium transition-colors
                 ${
                   activeLink === item?.path
                     ? "bg-[#00BFFF] text-[#06002C] border-b border-secondaryColor border-opacity-40 px-4 py-2 rounded-xl text-base"
                     : "hover:text-[#00BFFF] text-white border-b border-secondaryColor border-opacity-40 px-4 py-2 text-base rounded-xl"
                 }`}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link
            href={"/#contact"}
            onClick={() => setActiveLink("/#contact")}
            className={`flex items-center text-base font-medium transition-colors
                 ${
                   activeLink === "/#contact"
                     ? "bg-[#00BFFF] text-[#06002C] border-b border-secondaryColor border-opacity-40 px-4 py-2 rounded-xl text-base"
                     : "hover:text-[#00BFFF] text-white border-b border-secondaryColor border-opacity-40 px-4 py-2 text-base rounded-xl"
                 }`}>
            Contact Me
          </Link>
        </div>

        {/* Mobile & Tab Menu */}
        <div className="flex items-center mr-0 md:mr-8 lg:mr-0">
          <div
            className="h-6 w-6 text-inherit hover:bg-transparent mr-2 focus:bg-transparent active:bg-transparent lg:hidden"
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
                onClick={() => setActiveLink(item.path)}
                className={
                  activeLink === item?.path
                    ? "bg-[#00BFFF] text-[#06002C] border-b border-secondaryColor border-opacity-40 px-4 py-2 rounded-xl text-base"
                    : "hover:text-[#00BFFF] text-white border-b border-secondaryColor border-opacity-40 px-4 py-2 text-base rounded-xl"
                }>
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setActiveLink("/#contact")}
              className={
                activeLink === "/#contact"
                  ? "bg-[#00BFFF] text-[#06002C] border-b border-secondaryColor border-opacity-40 px-4 py-2 rounded-xl text-base"
                  : "hover:text-[#00BFFF] text-white border-b border-secondaryColor border-opacity-40 px-4 py-2 text-base rounded-xl"
              }>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
