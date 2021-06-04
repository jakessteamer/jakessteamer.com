import { createContext, useContext } from "react";

const AppContext = createContext();

export function Store({ children }) {
    const State = {
        /* whatever you want */
        companyID: null,
    };

    return <AppContext.Provider value={State}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}
