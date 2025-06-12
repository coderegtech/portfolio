"use client";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isdark");
    if (stored !== null) {
      setIsDark(stored === "true");
    }
    setMounted(true);
  }, [setIsDark, setMounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("isdark", isDark.toString());
    }
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme, mounted };
};
