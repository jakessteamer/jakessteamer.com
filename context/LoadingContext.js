import { createContext } from "react";

const LoadingContext = createContext({
    isLoading: null,
    showLoading: () => {},
    closeLoading: () => {},
});

export default LoadingContext;
