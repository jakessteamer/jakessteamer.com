import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Store({ children }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const [UUID, setUUID] = useState(null);
  const [theme, setTheme] = useState(null);
  const State = {
    companyID: null,
    setCompanyID: (id) => {
      setUUID(id);
    },
    isNavMenuOpen,
    toggleNavMenu: () => {
      setIsNavMenuOpen(!isNavMenuOpen);
    },
    navbarColor,
    changeNavbarColor: (belowFold) => {
      setNavbarColor(belowFold);
    },
    theme,
    changeTheme: (color) => {
      setTheme(color);
    },
  };

  return <AppContext.Provider value={State}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
