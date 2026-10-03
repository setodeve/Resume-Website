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
 * 前回選んだタブは localStorage に保存し、このスクリプトを描画前に実行して初回描画から表示する。
 */
export const tabInitScript = `try{var v=localStorage.getItem(${JSON.stringify(TAB_STORAGE_KEY)});if(${JSON.stringify(TABS.map((tab) => tab.id))}.indexOf(v)>=0)document.documentElement.dataset.tab=v}catch(e){}`;
