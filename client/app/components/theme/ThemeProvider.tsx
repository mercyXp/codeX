"use client";

import { useEffect, useState } from "react";
import { ThemeContext } from "@/app/components/theme/theme-context";

type Theme = "light" | "dark";

/* 1. Read initial theme synchronously */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("theme");
  return stored === "dark" ? "dark" : "light";
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /* 2. Initialize state correctly */
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  /* 3. Sync external systems ONLY */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
