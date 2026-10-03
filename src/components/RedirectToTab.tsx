"use client";

import { useEffect } from "react";
import nextConfig from "../../next.config";
import type { TabId } from "./ResumeTabs";

const BASE_PATH = nextConfig.basePath || "";

/** 旧ページ（/works, /cv）から 1 ページ構成のタブへ移動する */
export default function RedirectToTab({ tab }: { tab: TabId }) {
  useEffect(() => {
    window.location.replace(`${BASE_PATH}/?tab=${tab}`);
  }, [tab]);

  return null;
}
