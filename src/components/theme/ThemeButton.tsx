"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-foreground s:px-2 s:py-3 cursor-pointer"
    >
      {isDark ? (
        <Sun className="s:size-8 s:stroke-2 size-7 stroke-2 lg:size-5 lg:stroke-2 2xl:size-6" />
      ) : (
        <Moon className="s:size-8 s:stroke-2 size-7 stroke-2 lg:size-5 lg:stroke-2 2xl:size-6" />
      )}
    </button>
  );
}
