"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  // アイコンは <html class="dark"> に連動させ、JS の読み込み前から正しい向きで表示する
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-divider text-text hover:bg-text-7 active:bg-text-14"
      aria-label="ライト／ダークテーマを切り替え"
    >
      <SunIcon size={18} className="hidden dark:block" aria-hidden />
      <MoonIcon size={18} className="dark:hidden" aria-hidden />
    </button>
  );
}
