"use client";
import { navlinks } from "../../../Constent/Constent"; // Ensure correct import path
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div
      className={`fixed inset-0 z-[10000] transition-opacity duration-300 ${
        showNav ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay - Click to Close */}
      <div
        onClick={closeNav}
        className="absolute inset-0 bg-black opacity-65"
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-0 h-full bg-indigo-900 text-white w-[70%] sm:w-[40%] pt-16 pl-10 space-y-6 z-[110] 
        transition-transform duration-500 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon Fix */}
        <div
          onClick={closeNav}
          className="absolute top-4 right-4 p-2 z-[150] cursor-pointer"
        >
          <CgClose className="w-8 h-8 text-white hover:scale-110 transition-transform duration-200" />
        </div>

        {/* Navigation Links */}
        {navlinks.map((item) => (
          <Link href={item.url} key={item.id} onClick={closeNav}>
            <p
              className="relative text-base font-medium w-fit block 
                after:block after:content-[''] after:absolute 
                after:h-[3px] after:w-full after:bg-pink-700 
                after:scale-x-0 hover:after:scale-x-100 
                after:transition after:duration-300 after:origin-right mt-2"
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
