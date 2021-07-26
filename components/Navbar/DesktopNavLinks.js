import ThemeToggle from "@components/ThemeToggle";
import React from "react";

export default function DesktopNavLinks() {
  return (
    <div className="hidden  xl:flex xl:flex-row xl:items-center xl:justify-between xl:flex-1 pr-4 sm:pr-6 ">
      {/* Navlinks Desktop Menu Links Container space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center */}
      <div className="flex flex-col lg:flex-row lg:items-center ">
        <a href="/" className="text-lg text-blue-900 dark:text-white px-4 py-5">
          Home
        </a>
        <a
          href="/CarpetCleaning"
          className="text-lg text-blue-900 dark:text-white px-4 py-5">
          <span className="2xl:hidden">Carpets</span>
          <span className="hidden 2xl:inline">Carpet&nbsp;Cleaning</span>
        </a>
        <a
          href="/AirDuctCleaning"
          className="text-lg text-blue-900 dark:text-white px-4 py-5">
          <span className="2xl:hidden">Air&nbsp;Ducts</span>
          <span className="hidden 2xl:inline">Air&nbsp;Duct&nbsp;Cleaning</span>
        </a>

        <a
          href="/WaterDamageRestoration"
          className="text-lg text-blue-900 dark:text-white px-4 py-5">
          Emergency&nbsp;Flood
        </a>

        <a
          href="/StainAndOdorRemoval"
          className="text-lg text-blue-900 dark:text-white px-4 py-5">
          <span className="2xl:hidden">Stain&nbsp;and&nbsp;Odor</span>
          <span className="hidden 2xl:inline">
            Pet&nbsp;Stain&nbsp;and&nbsp;Odor&nbsp;Removal
          </span>
        </a>

        <a
          href="/TileAndGroutCleaning"
          className="text-lg text-blue-900 dark:text-white px-4 py-5">
          <span className="2xl:hidden">Tile&nbsp;and&nbsp;Grout</span>
          <span className="hidden 2xl:inline">
            Tile&nbsp;and&nbsp;Grout&nbsp;Cleaning
          </span>
        </a>
        <a
          href="/UpholsteryCleaning"
          className="text-lg text-blue-900 dark:text-white px-4 py-5">
          <span className="2xl:hidden">Upholstery</span>
          <span className="hidden 2xl:inline">Upholstery&nbsp;Cleaning</span>
        </a>
      </div>
      {/* Navlinks Desktop Menu Schedule Btn */}
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
        {/* Desktop Theme Button */}
        <ThemeToggle />
        {/* <a
          href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="flex items-center justify-center h-12 px-4 text-sm font-bold text-center rounded-md lg:h-10 scheduling-btn bg-blue-500 text-white tracking-wide">
          Schedule <span className="lg:hidden xl:inline">&nbsp;Now!</span>
        </a> */}
      </div>
    </div>
  );
}
