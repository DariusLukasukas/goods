"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex cursor-pointer items-center justify-center rounded-lg p-2 transition-colors bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-100 text-neutral-400 dark:text-neutral-500 dark:hover:bg-neutral-900"
    >
      <div className="relative flex items-center justify-center">
        <SunIcon
          className={`transition-transform duration-300 transform ${
            theme === "light" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
          style={{ transformOrigin: "center" }}
        />
        <MoonIcon
          className={`absolute transition-transform duration-300 transform ${
            theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
          style={{ transformOrigin: "center" }}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
