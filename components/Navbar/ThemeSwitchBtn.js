import React from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function ThemeSwitchBtn() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    // <button
    //   type="button"
    //   aria-label="Color Mode"
    //   className={clsx(
    //     "flex justify-center p-2 rounded-md",
    //     "transition duration-150 ease-in-out",
    //     "focus:outline-none",
    //     "bg-blue-900 dark:bg-white",
    //     "border-gray-200 border-solid border-2"
    //   )}
    //   onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 24 24"
    //     fill="currentColor"
    //     stroke="currentColor"
    //     className="w-4 h-4 text-white dark:text-blue-900">
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth={2}
    //       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    //     />
    //   </svg>
    // </button>
    <button
      type="button"
      aria-label="Color Mode"
      className="flex justify-center items-center transition duration-150 ease-in-out border border-transparent rounded-md  dark:text-blue-200 dark:bg-blue-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:focus:bg-blue-700 active:bg-gray-50 w-10 h-10"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-blue-400">
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 transform -rotate-90 text-indigo-600">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
