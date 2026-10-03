"use client";

import { useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";
import { DEFAULT_TAB, TAB_STORAGE_KEY, TABS, type TabId } from "@/lib/tabs";

const TAB_CHANGE_EVENT = "tabchange";

function isTabId(value: string | undefined): value is TabId {
  return TABS.some((tab) => tab.id === value);
}

// <html data-tab> が正。初期値は layout.tsx のスクリプトが描画前に設定する
function readTab(): TabId {
  const value = document.documentElement.dataset.tab;
  return isTabId(value) ? value : DEFAULT_TAB;
}

function subscribe(onChange: () => void) {
  window.addEventListener(TAB_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(TAB_CHANGE_EVENT, onChange);
}

function selectTab(id: TabId) {
  document.documentElement.dataset.tab = id;
  try {
    localStorage.setItem(TAB_STORAGE_KEY, id);
  } catch {}
  const url = new URL(window.location.href);
  url.searchParams.set("tab", id);
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(TAB_CHANGE_EVENT));
}

export default function ResumeTabs({ panels }: { panels: Record<TabId, ReactNode> }) {
  const current = useSyncExternalStore<TabId>(subscribe, readTab, () => DEFAULT_TAB);
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({});

  // WAI-ARIA Tabs パターン: フォーカス中のタブから ←/→ で隣、Home/End で端のタブへ移動して選択する
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const index = TABS.findIndex((tab) => tab.id === event.currentTarget.dataset.tabId);
    const next = {
      ArrowRight: (index + 1) % TABS.length,
      ArrowLeft: (index - 1 + TABS.length) % TABS.length,
      Home: 0,
      End: TABS.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const id = TABS[next].id;
    selectTab(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <>
      <div role="tablist" className="mt-10 mb-2 flex flex-wrap gap-1.5">
        {TABS.map(({ id, label }) => {
          const selected = id === current;
          return (
            <button
              key={id}
              ref={(el) => {
                tabRefs.current[id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${id}`}
              data-tab-id={id}
              aria-selected={selected}
              aria-controls={`panel-${id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectTab(id)}
              onKeyDown={handleKeyDown}
              className="resume-tab cursor-pointer rounded-lg border px-[16.8px] py-[5.6px] text-sm leading-[1.2] font-medium"
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
          data-tab-id={id}
          aria-labelledby={`tab-${id}`}
          tabIndex={0}
          className="resume-tabpanel"
        >
          {panels[id]}
        </div>
      ))}
    </>
  );
}
