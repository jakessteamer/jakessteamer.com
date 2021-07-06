import React from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function ThemeSwitchBtn() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Color Mode"
      className={clsx(
        "flex justify-center p-2 rounded-md",
        "transition duration-150 ease-in-out",
        "focus:outline-none",
        "bg-blue-900 dark:bg-white-accent",
        "border-blue-500 border-solid border-2"
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        className="w-4 h-4 text-white-accent dark:text-blue-900">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  );
}
