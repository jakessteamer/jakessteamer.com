import React, { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { useTheme } from "next-themes";

export const GlobalStateContext = createContext({});

export function GlobalStateProvider({ children }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const [theme, setTheme] = useTheme();

  const state = {
    isNavMenuOpen,
    navbarColor,
    theme,
  };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
}
