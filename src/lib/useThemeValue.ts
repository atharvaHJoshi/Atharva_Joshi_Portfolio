"use client";

import { useEffect, useState } from "react";

export type ThemeValue = "light" | "dark";

/**
 * Tracks the currently active theme by observing the `.dark` class on <html>.
 * Kept in sync even when the theme changes anywhere (e.g. via the toggle).
 */
export default function useThemeValue(): ThemeValue {
  const [theme, setTheme] = useState<ThemeValue>(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () =>
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    update();
    return () => observer.disconnect();
  }, []);

  return theme;
}
