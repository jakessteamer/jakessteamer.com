import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Store({ children }) {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const State = {
        companyID: null,
        isNavMenuOpen,
        toggleNavMenu: () => {
            setIsNavMenuOpen(!isNavMenuOpen);
        },
    };

    return <AppContext.Provider value={State}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
