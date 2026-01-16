"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-context";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="surface flex items-center gap-2 px-3 py-2 text-sm transition hover:opacity-90"
    >
      {theme === "light" ? (
        <>
          <Moon className="h-4 w-4" />
          Dark
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          Light
        </>
      )}
    </button>
  );
}
