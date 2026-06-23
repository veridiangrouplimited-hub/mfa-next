"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { type NewsItem } from "@/data/news";

const TABS = [
  { id: "hmfa", label: "HMFA News", title: "Speeches and statements by the Honourable Minister of Foreign Affairs" },
  { id: "hmos", label: "HMOS News", title: "Speeches and updates from the Honourable Minister of State" },
  { id: "mfa",  label: "MFA News",  title: "News, press releases and mission activities from the Ministry" },
] as const;

type TabId = typeof TABS[number]["id"];

const PAGE_SIZE = 6;

function filterByTab(items: NewsItem[], tab: TabId): NewsItem[] {
  if (tab === "hmfa") return items.filter(n => n.category === "Speech" || n.category === "Official Statement");
  if (tab === "hmos") return items.filter(n => n.category === "Mission Activity");
  if (tab === "mfa")  return items.filter(n => n.category === "News" || n.category === "Press Release");
  return items;
}

function longDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function NewsClient({ items }: { items: NewsItem[] }) {
  const sorted = useMemo(() => [...items].sort((a, b) => b.date.localeCompare(a.date)), [items]);

  const [tab, setTab]   = useState<TabId>("hmfa");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => filterByTab(sorted, tab), [sorted, tab]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const pageItems  = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const featured   = safePage === 1 ? pageItems[0] : undefined;
  const rows       = safePage === 1 ? pageItems.slice(1) : pageItems;

  function changeTab(t: TabId) { setTab(t); setPage(1); }
  function goTo(p: number) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Tab bar */}
      <div className="mb-8 border-b-2 border-line">
        <nav className="flex" aria-label="News tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => changeTab(t.id)}
              aria-selected={tab === t.id}
              title={t.title}
              className={`relative px-6 py-3.5 text-sm font-bold transition-colors ${
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

      {filtered.length === 0 ? (
        <div className="rounded border border-line bg-mist p-12 text-center">
          <Icon name="newspaper" className="mx-auto mb-3 h-10 w-10 text-brand/40" />
          <p className="text-sm text-ink/60">No news items in this category yet.</p>
        </div>
      ) : (
        <>
          {/* Featured lead — page 1 only */}
          {featured && (
            <article className="group mb-10 overflow-hidden rounded border border-line bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="grid lg:grid-cols-[1.25fr_1fr]">
                <Link
                  href={`/news/${featured.slug}`}
                  className="relative block min-h-56 overflow-hidden bg-mist lg:min-h-full"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {featured.image.src && (
                    <Image
                      src={featured.image.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded bg-brand-dark/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold shadow">
                    {featured.category}
                  </span>
                </Link>
                <div className="p-7 lg:p-9">
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep">
                    <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
                    Latest
                  </p>
                  <h2 className="font-serif text-2xl font-bold leading-snug text-brand-deep">
                    <Link href={`/news/${featured.slug}`} className="hover:underline">
                      {featured.title}
                    </Link>
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60">
                    <span className="flex items-center gap-1.5">
                      <Icon name="calendar" className="h-3.5 w-3.5 text-brand" />
                      {longDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="users" className="h-3.5 w-3.5 text-brand" />
                      {featured.department}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">{featured.excerpt}</p>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
                  >
                    Read full story <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* News rows */}
          {rows.length > 0 && (
            <ul className="mb-10 divide-y divide-line border-y border-line">
              {rows.map((n) => (
                <li key={n.slug}>
                  <article className="group relative flex gap-5 py-6 pl-4 pr-2 transition-colors hover:bg-mist/60 md:gap-7">
                    <span className="absolute inset-y-4 left-0 w-1 bg-gold opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    <time
                      dateTime={n.date}
                      className="flex w-14 shrink-0 flex-col items-center self-start border-t-2 border-gold bg-mist px-1.5 pb-2 pt-1.5 text-center"
                    >
                      <span className="font-serif text-2xl font-bold leading-tight text-brand-deep">
                        {new Date(n.date + "T00:00:00").getDate()}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ink/60">
                        {new Date(n.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short" })}{" "}
                        {new Date(n.date + "T00:00:00").getFullYear()}
                      </span>
                    </time>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
                        <span className="font-bold uppercase tracking-[0.18em] text-brand-deep">{n.category}</span>
                        <span aria-hidden="true" className="text-gold">◆</span>
                        <span className="text-ink/60">{n.department}</span>
                      </div>
                      <h2 className="font-serif text-lg font-bold leading-snug text-brand-deep">
                        <Link href={`/news/${n.slug}`} className="hover:underline">{n.title}</Link>
                      </h2>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/70">{n.excerpt}</p>
                      <Link
                        href={`/news/${n.slug}`}
                        className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
                      >
                        Continue reading <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    </div>
                    {n.image.src && (
                      <Link
                        href={`/news/${n.slug}`}
                        className="relative hidden h-24 w-36 shrink-0 self-center overflow-hidden rounded border border-line bg-mist md:block"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <Image src={n.image.src} alt="" fill sizes="144px" className="object-cover" />
                      </Link>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          )}

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-ink/60">
              Page <strong className="text-ink">{safePage}</strong> of{" "}
              <strong className="text-ink">{totalPages}</strong>
              {" "}· {filtered.length} item{filtered.length !== 1 ? "s" : ""}
            </p>
            {totalPages > 1 && (
              <nav aria-label="News pages">
                <ul className="flex items-center gap-1.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo(safePage - 1)}
                      disabled={safePage === 1}
                      aria-label="Previous page"
                      className="flex h-9 w-9 items-center justify-center rounded border border-line text-ink/70 transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Icon name="chevron" className="h-4 w-4 rotate-90" />
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <li key={p}>
                      <button
                        type="button"
                        onClick={() => goTo(p)}
                        aria-label={`Page ${p}`}
                        aria-current={safePage === p ? "page" : undefined}
                        className={`h-9 w-9 rounded text-sm font-bold transition-colors ${
                          safePage === p
                            ? "border border-brand bg-brand text-white"
                            : "border border-line text-ink/70 hover:border-brand hover:text-brand"
                        }`}
                      >
                        {p}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo(safePage + 1)}
                      disabled={safePage === totalPages}
                      aria-label="Next page"
                      className="flex h-9 w-9 items-center justify-center rounded border border-line text-ink/70 transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Icon name="chevron" className="h-4 w-4 -rotate-90" />
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </>
      )}
    </>
  );
}
