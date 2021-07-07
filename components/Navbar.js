/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { useAppContext } from "../context/AppState";
import DropdownMenu from "./Navbar/DropdownMenu";
import DesktopNavLinks from "./Navbar/DesktopNavLinks";
import MobileNavLinks from "./Navbar/MobileNavLinks";

export default function Navbar() {
  const { isNavMenuOpen, navbarColor: whenNavbarBelowHero } = useAppContext();

  const { resolvedTheme } = useTheme();
  const isLightTheme = (theme) => {
    return theme === "light";
  };
  const isDarkTheme = (theme) => {
    return theme === "dark";
  };
  return (
    <nav
      id="navbar"
      role="navigation"
      aria-label="Main Navigation"
      className={clsx(
        "fixed w-full top-0 inset-x-0 bottom-auto z-50 text-blue-900 dark:text-white-accent",
        { FadeBgWhite: whenNavbarBelowHero },
        { BgWhite: isNavMenuOpen && isLightTheme(resolvedTheme) },
        { BgDarkTheme: isNavMenuOpen && isDarkTheme(resolvedTheme) }
      )}>
      <div
        className={clsx(
          "w-full mx-auto py-2 px-4",
          " lg:flex lg:items-center lg:justify-between",
          "bg-transparent"
        )}>
        <MobileNavLinks />
        <DesktopNavLinks />
        <DropdownMenu />
      </div>
    </nav>
  );
}
