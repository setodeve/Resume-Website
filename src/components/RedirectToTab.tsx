"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TAB_STORAGE_KEY, type TabId } from "@/lib/tabs";

/** 旧ページ（/works, /cv）から、該当タブを選んだ状態でトップページへ移動する */
export default function RedirectToTab({ tab }: { tab: TabId }) {
  // Link が basePath 付きの href を出力するので、それをそのまま移動先に使う
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;
    // 移動先のタブは URL に出さず、前回選んだタブとして保存してから移動する
    try {
      localStorage.setItem(TAB_STORAGE_KEY, tab);
    } catch {}
    // GitHub Pages の末尾スラッシュ補完による余分なリダイレクトを避ける
    const url = new URL(linkRef.current.href);
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    window.location.replace(url);
  }, [tab]);

  // JS が動かない環境向けに、トップページへのリンクも表示しておく
  return (
    <main className="mx-auto max-w-[680px] px-[clamp(20px,5vw,32px)] pt-16 text-text-64">
      <p>
        このページは移動しました。
        <Link ref={linkRef} href="/" className="text-accent underline underline-offset-4">
          トップページを開く
        </Link>
      </p>
    </main>
  );
}
