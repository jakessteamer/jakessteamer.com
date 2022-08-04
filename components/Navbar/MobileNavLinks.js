import React from "react";
import clsx from "clsx";
import ThemeToggle from "@components/ThemeToggle";
import { useAppContext } from "../../context/AppState";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

export default function MobileNavLinks() {
  const { isNavMenuOpen, toggleNavMenu } = useAppContext();
  return (
    <div
      id="mobile-navlinks"
      className=" flex h-full w-full px-4 sm:px-6 justify-between items-center"
    >
      <div id="mobile-navlinks__container" className="flex items-center">
        {/* Company Logo or company name */}
        <div className="flex items-center gap-x-4 h-full">
          <a href="/" className="">
            <img
              src="/images/logos/jakessteamer-carpet-cleaning-company-logo-40w-37h.png"
              alt=""
              className="pr-4"
            />
          </a>
          <a href="/">
            <strong className="prose-lg sm:prose-2xl text-blue-500">
              Jake's&nbsp;Steamer
            </strong>
          </a>
        </div>
      </div>
      {/* Navbar Rightside */}
      {/* Schedule Now Container */}

      <div className="flex justify-end items-center gap-x-2 xl:hidden">
        {/* <a
          href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="flex items-center justify-center h-10 px-4 text-sm font-bold text-center rounded-md scheduling-btn bg-blue-500 text-white tracking-wide">
          Schedule <span className=" xl:inline">&nbsp;Now!</span>
        </a> */}
        <ThemeToggle />
        {/* <ThemeSwitchBtn /> */}
        <div id="mobile-navlinks__menu" className="relative flex-none ">
          <button
            type="button"
            className="text-blue-900 w-10 h-10 relative focus:outline-none  rounded-md xl:hidden "
            onClick={toggleNavMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2 text-blue-900 dark:text-white">
              <span
                aria-hidden="true"
                className={`${
                  isNavMenuOpen ? "rotate-45" : "-translate-y-1.5"
                } block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}
              />
              <span
                aria-hidden="true"
                className={`${
                  isNavMenuOpen ? "opacity-0" : ""
                } block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}
              />
              <span
                aria-hidden="true"
                className={`${
                  isNavMenuOpen ? "-rotate-45" : "translate-y-1.5"
                } block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
