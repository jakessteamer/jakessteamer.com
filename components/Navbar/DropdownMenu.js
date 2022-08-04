import React, { useEffect } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/AppState";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

export default function DropdownMenu() {
  const { isNavMenuOpen, toggleNavMenu } = useAppContext();

  const router = useRouter();
  useEffect(() => {
    if (isNavMenuOpen) {
      toggleNavMenu(!isNavMenuOpen);
    }
  }, [router.asPath]);

  return (
    <div
      id="DropdownMenu"
      className={clsx(
        "flex-col hidden overscroll-contain px-4",
        "prose-lg text-blue-900 dark:text-white bg-white dark:bg-blue-900",
        { showNavDropdownMenu: isNavMenuOpen }
      )}>
      <div
        id="nav-links-content"
        className="flex flex-col  lg:flex-row  lg:items-center">
        <a href="/" className="text-primary font-semibold px-4 py-4">
          Home
        </a>
        <a href="/CarpetCleaning" className=" px-3 py-4">
          Carpet&nbsp;Cleaning
        </a>
        <a href="/AirDuctCleaning" className=" px-3 py-4">
          Air&nbsp;Duct&nbsp;Cleaning
        </a>

        <a href="/WaterDamageRestoration" className=" px-3 py-4">
          Emergency&nbsp;Flood
        </a>

        <a href="/StainAndOdorRemoval" className=" px-3 py-4">
          Pet&nbsp;Stain&nbsp;and&nbsp;Odor&nbsp;Removal
        </a>

        <a href="/TileAndGroutCleaning" className=" px-3 py-4">
          Tile&nbsp;and&nbsp;Grout&nbsp;Cleaning
        </a>
        <a href="/UpholsteryCleaning" className=" px-3 py-4">
          Upholstery&nbsp;Cleaning
        </a>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center px-4">
        {/* Mobile Theme Button */}
      </div>
    </div>
  );
}
