export const TABS = [
  { id: "articles", label: "記事" },
  { id: "works", label: "Works" },
  { id: "cv", label: "経歴" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

export const DEFAULT_TAB: TabId = "articles";
export const TAB_STORAGE_KEY = "tab";

/**
 * 選択中のタブは <html data-tab> に持たせ、パネルの表示は CSS で切り替える。
 * このスクリプトを描画前に実行し、?tab= またはlocalStorage のタブを初回描画から表示する。
 */
export const tabInitScript = `try{var t=${JSON.stringify(TABS.map((tab) => tab.id))},q=new URLSearchParams(location.search).get("tab"),s=null;try{s=localStorage.getItem(${JSON.stringify(TAB_STORAGE_KEY)})}catch(e){}var v=t.indexOf(q)>=0?q:t.indexOf(s)>=0?s:null;if(v)document.documentElement.dataset.tab=v}catch(e){}`;
