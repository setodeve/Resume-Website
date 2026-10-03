"use client";

import { useSyncExternalStore, type ReactNode } from "react";

export const TABS = [
  { id: "articles", label: "記事" },
  { id: "works", label: "Works" },
  { id: "cv", label: "経歴" },
] as const;

export type TabId = (typeof TABS)[number]["id"];

const STORAGE_KEY = "tab";
const TAB_CHANGE_EVENT = "tabchange";

function isTabId(value: string | null): value is TabId {
  return TABS.some((tab) => tab.id === value);
}

/** URL クエリ（?tab=）を優先し、なければ前回選んだタブを復元する */
function readTab(): TabId {
  const fromQuery = new URLSearchParams(window.location.search).get("tab");
  if (isTabId(fromQuery)) return fromQuery;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isTabId(saved)) return saved;
  } catch {}
  return "articles";
}

function subscribe(onChange: () => void) {
  window.addEventListener(TAB_CHANGE_EVENT, onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(TAB_CHANGE_EVENT, onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function selectTab(id: TabId) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {}
  const url = new URL(window.location.href);
  url.searchParams.set("tab", id);
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(TAB_CHANGE_EVENT));
}

export default function ResumeTabs({ panels }: { panels: Record<TabId, ReactNode> }) {
  const current = useSyncExternalStore<TabId>(subscribe, readTab, () => "articles");

  return (
    <>
      <div role="tablist" className="mt-10 mb-2 flex flex-wrap gap-1.5">
        {TABS.map(({ id, label }) => {
          const selected = id === current;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={selected}
              aria-controls={`panel-${id}`}
              onClick={() => selectTab(id)}
              className={`cursor-pointer rounded-lg border px-[16.8px] py-[5.6px] text-sm leading-[1.2] font-medium ${
                selected
                  ? "border-accent text-accent hover:bg-accent-12 active:bg-accent-22"
                  : "border-divider text-text hover:bg-text-7 active:bg-text-14"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      {TABS.map(({ id }) => (
        <div
          key={id}
          role="tabpanel"
          id={`panel-${id}`}
          aria-labelledby={`tab-${id}`}
          hidden={id !== current}
        >
          {panels[id]}
        </div>
      ))}
    </>
  );
}
