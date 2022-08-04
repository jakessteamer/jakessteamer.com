import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Store({ children }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const [theme, setTheme] = useState(null);

  const State = {
    isNavMenuOpen,
    toggleNavMenu: () => {
      setIsNavMenuOpen(!isNavMenuOpen);
    },
    navbarColor,
    changeNavbarColor: (whenNotIntersecting) => {
      setNavbarColor(whenNotIntersecting);
    },
    theme,
    changeTheme: (color) => {
      setTheme(color);
    },
    isLightTheme: (str) => {
      return str === "light";
    },
    isDarkTheme: (str) => {
      return str === "dark";
    },
  };

  return <AppContext.Provider value={State}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
