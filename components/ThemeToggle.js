import React from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkTheme = (theme) => {
    return theme === "dark";
  };

  // Deterministic Classnames
  const cns = clsx("toggle-inner", "bg-white dark:bg-blue-900", {
    toggleActive: isDarkTheme(resolvedTheme),
  });
  return (
    <button
      type="button"
      className={clsx("toggle bg-blue-900 dark:bg-white")}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <div className={cns} />
    </button>
  );
}
