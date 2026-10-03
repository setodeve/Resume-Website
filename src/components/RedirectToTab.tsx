"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { TabId } from "@/lib/tabs";

/** 旧ページ（/works, /cv）から 1 ページ構成のタブへ移動する */
export default function RedirectToTab({ tab }: { tab: TabId }) {
  // Link が basePath 付きの href を出力するので、それをそのまま移動先に使う
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;
    // GitHub Pages の末尾スラッシュ補完による余分なリダイレクトを避ける
    const url = new URL(linkRef.current.href);
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    window.location.replace(url);
  }, []);

  // JS が動かない環境向けに、移動先へのリンクも表示しておく
  return (
    <main className="mx-auto max-w-[680px] px-[clamp(20px,5vw,32px)] pt-16 text-text-64">
      <p>
        このページは移動しました。
        <Link ref={linkRef} href={`/?tab=${tab}`} className="text-accent underline underline-offset-4">
          新しいページを開く
        </Link>
      </p>
    </main>
  );
}
