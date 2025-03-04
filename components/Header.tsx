"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { navs, socials } from "../constants/constants";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full md:h-[22rem] h-[10rem] opacity-80 bg-black">
      <nav className="mt-4">
        {/* Dropdown Menu */}
        <div className="dropdown-menu text-right md:hidden block">
          <div
            className="float-right text-white mr-3"
            onClick={handleMenuToggle}
            ref={menuRef}
          >
            <FaBars />
          </div>
          {showMenu && (
            <div className="dropdown-list nav-menu bg-[#828470] shadow-lg absolute right-3 top-10">
              <ul className="no-list-style p-2 text-left">
                {navs.map((nav, index) => {
                  return (
                    <li className="my-1" key={index}>
                      <Link
                        onClick={handleMenuToggle}
                        href={nav.link}
                        className="text-white text-sm no-underline"
                      >
                        {nav.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Horizontal List */}
        <div className="w-full md:flex justify-center items-center hidden">
          <ul className="flex gap-20">
            {navs.map((nav, index) => {
              return (
                <li className="my-1" key={index}>
                  <Link
                    href={nav.link}
                    className="text-white no-underline hover:text-[#eb822d] transition-colors duration-500"
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="w-full md:mt-[3rem] mt-[1.5rem] flex flex-col md:gap-5 gap-2">
        <div className="text-center">
          <h1 className="md:text-[3rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-bold ">
            Deepak Singh
          </h1>
        </div>
        <div>
          <ul className="flex justify-center gap-4">
            {socials &&
              socials.map((social, index) => (
                <li className="inline-block cursor-pointer" key={index}>
                  <a
                    href={social.link}
                    className="text-white no-underline"
                    target="_blank"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
