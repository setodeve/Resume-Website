"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-divider text-text hover:bg-text-7 active:bg-text-14"
      aria-label={theme === "dark" ? "ライトテーマに切り替え" : "ダークテーマに切り替え"}
    >
      {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
}
