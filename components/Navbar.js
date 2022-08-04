/* eslint-disable react/no-unescaped-entities */
import React, { memo, useState, Fragment } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMachine } from "@xstate/react";
import { inspect } from "@xstate/inspect";
import toggleMachine from "../state/machines/toggleMachine";
import { useAppContext } from "../context/AppState";
import DropdownMenu from "./Navbar/DropdownMenu";
import DesktopNavLinks from "./Navbar/DesktopNavLinks";
import MobileNavLinks from "./Navbar/MobileNavLinks";
import SchedulingModal from "./SchedulingModal";

// if (typeof window !== "undefined") {
//   inspect({
//     iframe: false,
//   });
// }

function Nav() {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );
  const { isNavMenuOpen, navbarColor: whenNavbarBelowHero } = useAppContext();

  const { resolvedTheme } = useTheme();
  const isLightTheme = (theme) => {
    return theme === "light";
  };
  const isDarkTheme = (theme) => {
    return theme === "dark";
  };

  const navState = (hideOnScroll, isNavMenuOpen) => {
    if (hideOnScroll === false) {
      if (isNavMenuOpen === false) {
        return "hidden nav-disappear-transition";
      }
      if (isNavMenuOpen === true) {
        return "flex nav-appear-transition";
      }
    }
    if (hideOnScroll === true) {
      if (isNavMenuOpen === false) {
        return "flex nav-appear-transition";
      }
    }
  };

  // const modalState = useMachine(toggleMachine, { devTools: true });
  // const [current, send] = modalState;
  return (
    <>
      {/* <div className="w-full bg-white dark:bg-blue-900 fixed inset-0 flex items-center justify-center z-50 h-8">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue rounded-md"
          onClick={() => send("TOGGLE")}
        >
          schedule now
        </button>
        {current.matches("active") && (
          <SchedulingModal modalState={modalState} />
        )}
      </div> */}

      <nav
        id="navbar"
        role="navigation"
        aria-label="Main Navigation"
        className={clsx(
          "fixed  z-50 w-full",
          "text-blue-900 dark:text-white-accent bg-white dark:bg-blue-900",
          navState(hideOnScroll, isNavMenuOpen),
          { BgWhite: isNavMenuOpen && isLightTheme(resolvedTheme) },
          { BgDarkTheme: isNavMenuOpen && isDarkTheme(resolvedTheme) }
        )}
      >
        <div
          id="menubar"
          className={clsx(
            "w-full mx-auto",
            " lg:flex lg:items-center lg:justify-between",
            "bg-transparent"
          )}
        >
          <MobileNavLinks />
          <DesktopNavLinks />
          <DropdownMenu />
        </div>
      </nav>
    </>
  );
}

const Navbar = memo(Nav);

export default Navbar;
/* eslint-disable react/no-unescaped-entities */
// import React, { memo, useState } from "react";
// import { useTheme } from "next-themes";
// import clsx from "clsx";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// import MobileNavLinks from "utils/MobileNavLinks";
// import { Transition } from "@headlessui/react";
// import { useAppContext } from "../context/AppState";
// import DropdownMenu from "./Navbar/DropdownMenu";
// import DesktopNavLinks from "./Navbar/DesktopNavLinks";
// // import MobileNavLinks from "./Navbar/MobileNavLinks";
// function Nav() {
//   const [hideOnScroll, setHideOnScroll] = useState(true);

//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       const isShow = currPos.y > prevPos.y;
//       if (isShow !== hideOnScroll) setHideOnScroll(isShow);
//     },
//     [hideOnScroll],
//     false,
//     false,
//     300
//   );
//   const { isNavMenuOpen, navbarColor: whenNavbarBelowHero } = useAppContext();

//   const { resolvedTheme } = useTheme();
//   const isLightTheme = (theme) => {
//     return theme === "light";
//   };
//   const isDarkTheme = (theme) => {
//     return theme === "dark";
//   };
//   return (
//     <Transition
//       as="nav"
//       show={hideOnScroll}
//       enter="transition ease-in-out duration-300 transform"
//       enterFrom="-translate-y-18"
//       enterTo="translate-y-0"
//       leave="transition ease-in-out duration-150 transform"
//       leaveFrom="translate-y-0"
//       leaveTo="-translate-y-18"
//       id="navbar"
//       role="navigation"
//       aria-label="Main Navigation"
//       className={clsx(
//         "fixed  z-50 w-full  px-4 sm:px-6",
//         "text-blue-900 dark:text-white-accent bg-white dark:bg-blue-900",
//         { BgWhite: isNavMenuOpen && isLightTheme(resolvedTheme) },
//         { BgDarkTheme: isNavMenuOpen && isDarkTheme(resolvedTheme) }
//       )}>
//       <div
//         id="menubar"
//         className={clsx(
//           "w-full mx-auto",
//           " lg:flex lg:items-center lg:justify-between",
//           "bg-transparent"
//         )}>
//         <MobileNavLinks />
//         <DesktopNavLinks />
//         <DropdownMenu />
//       </div>
//     </Transition>
//   );
// }

// const Navbar = memo(Nav);

// export default Navbar;
