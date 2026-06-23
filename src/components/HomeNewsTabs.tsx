"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { type NewsItem, formatDate } from "@/data/news";

const TABS = [
  { id: "hmfa", label: "HMFA News", title: "Speeches and statements by the Honourable Minister of Foreign Affairs" },
  { id: "hmos", label: "HMOS News", title: "Speeches and updates from the Honourable Minister of State" },
  { id: "mfa",  label: "MFA News",  title: "News, press releases and activities from the Ministry" },
] as const;

type TabId = typeof TABS[number]["id"];

function filterByTab(items: NewsItem[], tab: TabId): NewsItem[] {
  if (tab === "hmfa") return items.filter(n => n.category === "Speech" || n.category === "Official Statement");
  if (tab === "hmos") return items.filter(n => n.category === "Mission Activity");
  return items.filter(n => n.category === "News" || n.category === "Press Release");
}

export default function HomeNewsTabs({ items }: { items: NewsItem[] }) {
  const sorted = useMemo(() => [...items].sort((a, b) => b.date.localeCompare(a.date)), [items]);
  const [tab, setTab] = useState<TabId>("hmfa");

  const filtered = useMemo(() => filterByTab(sorted, tab).slice(0, 3), [sorted, tab]);
  const fallback  = useMemo(() => sorted.slice(0, 3), [sorted]);
  const display   = filtered.length > 0 ? filtered : fallback;

  return (
    <>
      {/* Tab bar */}
      <div className="mb-7 border-b-2 border-line">
        <nav className="flex" aria-label="News category tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-selected={tab === t.id}
              title={t.title}
              className={`relative px-5 py-3 text-sm font-bold transition-colors ${
                tab === t.id
                  ? "text-brand after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-brand"
                  : "text-ink/55 hover:text-brand"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      {display.length === 0 ? (
        <p className="py-8 text-sm text-ink/50">No news in this category yet.</p>
      ) : (
        <ul className="space-y-4">
          {display.map((n, i) => (
            <li key={n.slug}>
              <article className={`group flex gap-4 rounded border border-line bg-white p-4 transition-all hover:border-brand/40 hover:shadow-sm ${i === 0 ? "ring-1 ring-brand/10" : ""}`}>
                {n.image.src && (
                  <Link
                    href={`/news/${n.slug}`}
                    className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded border border-line bg-mist sm:block"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image src={n.image.src} alt="" fill sizes="112px" className="object-cover" />
                  </Link>
                )}
                <div className="min-w-0 flex-1">
                  <time dateTime={n.date} className="block mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand/70">
                    {formatDate(n.date)}
                  </time>
                  <h3 className="font-serif text-sm font-bold leading-snug text-brand-deep group-hover:text-brand group-hover:underline">
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink/60">{n.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/news"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
      >
        All news &amp; press releases <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </>
  );
}
