"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { missions, GLOBAL_STATS, type MissionRegion, type MissionCategory } from "@/data/missions";

const MissionsMap = dynamic(() => import("./MissionsMap"), { ssr: false, loading: () => (
  <div className="flex h-full items-center justify-center bg-mist">
    <p className="text-sm text-ink/50">Loading map…</p>
  </div>
) });

const REGIONS: (MissionRegion | "All")[] = ["Africa", "Asia", "Americas", "Europe", "All"];

const categoryText: Record<MissionCategory, string> = {
  "Embassy":           "text-brand font-bold",
  "Permanent Mission": "text-brand font-bold",
  "High Commission":   "text-amber-600 font-bold",
  "Consulate":         "text-blue-700 font-bold",
};
const categoryDot: Record<MissionCategory, string> = {
  "Embassy":           "bg-brand",
  "Permanent Mission": "bg-brand",
  "High Commission":   "bg-amber-500",
  "Consulate":         "bg-blue-700",
};

export default function MissionsPage() {
  const [region, setRegion]   = useState<MissionRegion | "All">("All");
  const [view, setView]       = useState<"list" | "map">("list");
  const [query, setQuery]     = useState("");

  const regionMissions = useMemo(
    () => region === "All" ? missions : missions.filter((m) => m.region === region),
    [region]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return !q
      ? regionMissions
      : regionMissions.filter((m) =>
          (m.city + " " + m.country + " " + m.address).toLowerCase().includes(q)
        );
  }, [regionMissions, query]);

  const regionCounts = useMemo(() => ({
    Embassy:          regionMissions.filter(m => m.category === "Embassy" || m.category === "Permanent Mission").length,
    "High Commission": regionMissions.filter(m => m.category === "High Commission").length,
    Consulate:        regionMissions.filter(m => m.category === "Consulate").length,
  }), [regionMissions]);

  return (
    <>
      <PageHeader
        title="Diplomatic Missions"
        lead="Nigeria maintains a network of 109 diplomatic and consular missions worldwide — representing our nation and serving Nigerians across every continent."
        crumbs={[{ label: "Diplomatic Missions" }]}
      />

      {/* Global stats strip */}
      <div className="border-b border-line bg-brand-dark text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            { label: "Total Missions",   value: GLOBAL_STATS.total },
            { label: "Embassies",        value: GLOBAL_STATS.embassies },
            { label: "High Commissions", value: GLOBAL_STATS.highCommissions },
            { label: "Consulates",       value: GLOBAL_STATS.consulates },
          ].map((s) => (
            <div key={s.label} className="py-5 text-center">
              <p className="font-serif text-3xl font-bold text-gold">{s.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category legend */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 py-3">
          <span className="text-xs font-bold uppercase tracking-widest text-ink/40">Legend</span>
          {(["Embassy", "High Commission", "Consulate"] as MissionCategory[]).map((c) => (
            <span key={c} className="flex items-center gap-1.5">
              <span className={`h-3 w-3 rounded-full ${categoryDot[c]}`} />
              <span className={`text-sm ${categoryText[c]}`}>{c}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">

        {/* Region pills + view toggle */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by region">
            {REGIONS.map((r) => {
              const count = r === "All" ? missions.length : missions.filter(m => m.region === r).length;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => { setRegion(r); setQuery(""); }}
                  aria-pressed={region === r}
                  className={`rounded-full border px-5 py-1.5 text-sm font-semibold transition-colors ${
                    region === r
                      ? "border-brand bg-brand text-white shadow-sm"
                      : "border-line bg-white text-ink/70 hover:border-brand hover:text-brand"
                  }`}
                >
                  {r}
                  {count > 0 && (
                    <span className={`ml-1.5 text-xs ${region === r ? "text-white/70" : "text-ink/40"}`}>
                      ({count})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* List / Map toggle */}
          <div className="flex overflow-hidden rounded border border-line bg-white">
            {(["list", "map"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                aria-pressed={view === v}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold capitalize transition-colors ${
                  view === v
                    ? "bg-brand text-white"
                    : "text-ink/65 hover:bg-mist hover:text-brand"
                }`}
              >
                <Icon
                  name={v === "list" ? "briefcase" : "globe"}
                  className="h-3.5 w-3.5"
                />
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Search (list only) */}
        {view === "list" && (
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="relative w-full max-w-xs">
              <label htmlFor="mission-search" className="sr-only">Search missions</label>
              <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                id="mission-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city or country…"
                className="w-full rounded border border-line py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <p className="shrink-0 text-base text-ink/55">
              <strong className="text-ink">{filtered.length}</strong> {region === "All" ? "missions worldwide" : `missions in ${region}`}
              {" · "}
              <span className={categoryText["Embassy"]}>{regionCounts.Embassy} Embassies</span>
              {" · "}
              <span className={categoryText["High Commission"]}>{regionCounts["High Commission"]} High Commissions</span>
              {" · "}
              <span className={categoryText["Consulate"]}>{regionCounts.Consulate} Consulates</span>
            </p>
          </div>
        )}

        {/* LIST VIEW */}
        {view === "list" && (
          <>
            {filtered.length === 0 ? (
              <div className="rounded border border-line bg-mist p-12 text-center">
                <Icon name="globe" className="mx-auto mb-3 h-10 w-10 text-brand/30" />
                <p className="text-sm text-ink/55">
                  {regionMissions.length === 0
                    ? `No missions data available for ${region === "All" ? "this selection" : region} yet.`
                    : "No missions match your search."}
                </p>
              </div>
            ) : (
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((m) => (
                  <li
                    key={`${m.city}-${m.country}`}
                    className="group flex flex-col overflow-hidden rounded border border-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
                  >
                    {/* Flag */}
                    <div className="relative h-32 overflow-hidden bg-mist">
                      <Image
                        src={m.flag}
                        alt={`Flag — ${m.country}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* Category — color-coded text */}
                      <p className={`mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] ${categoryText[m.category]}`}>
                        <span className={`h-2.5 w-2.5 rounded-full ${categoryDot[m.category]}`} />
                        {m.category}
                      </p>

                      <h2 className="mb-1 font-serif text-base font-bold leading-snug text-brand-deep">
                        {m.name}
                      </h2>
                      <p className="mb-4 text-sm font-semibold text-ink/65">
                        {m.city}, {m.country}
                      </p>

                      <div className="mt-auto space-y-2 border-t border-line pt-3">
                        <p className="flex items-start gap-2 text-sm text-ink/65">
                          <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {m.address ? m.address : "Address not yet available"}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-ink/65">
                          <Icon name="clock" className="h-4 w-4 shrink-0 text-gold" />
                          {m.hours}
                        </p>
                      </div>

                      {m.website && (
                        <a
                          href={m.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 flex items-center gap-1.5 text-sm font-bold text-brand transition-colors hover:text-brand-deep"
                        >
                          <Icon name="external" className="h-4 w-4" />
                          Visit Mission Site
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {/* MAP VIEW */}
        {view === "map" && (
          <div className="overflow-hidden rounded border border-line shadow-sm" style={{ height: "560px" }}>
            <MissionsMap missions={regionMissions} />
          </div>
        )}
      </div>
    </>
  );
}
