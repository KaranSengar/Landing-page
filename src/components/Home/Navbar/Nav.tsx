"use client";
import React, { useEffect, useState } from "react";
import { navlinks } from "../../../Constent/Constent"; // Check spelling
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-[1000] transition-all duration-200 
        ${navBg ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-extrabold">
          <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
        </h1>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navlinks.map((item) => (
            <Link href={item.url} key={item.id}>
              <p className="relative text-base font-medium w-fit block 
                after:block after:content-[''] after:absolute 
                after:h-[3px] after:w-full after:bg-pink-700 
                after:scale-x-0 hover:after:scale-x-100 
                after:transition after:duration-300 after:origin-right">
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white text-base bg-blue-700 font-semibold hover:bg-blue-900 transition-all duration-300 rounded-full">
            Join Now
          </button>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
