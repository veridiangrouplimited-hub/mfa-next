import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "List of All Foreign Ministers",
  description: "Every Minister of Foreign Affairs of the Federal Republic of Nigeria since independence in 1960.",
};

type MinisterEra = {
  era: string;
  period: string;
  govType: "Civilian" | "Military" | "Transition";
  ministers: { name: string; years: string; note?: string }[];
};

const ministerEras: MinisterEra[] = [
  {
    era: "Pre-Independence",
    period: "1957 – 1961",
    govType: "Civilian",
    ministers: [
      { name: "Sir Abubakar Tafawa Balewa", years: "1957 – 1961", note: "Prime Minister & Director of Foreign Affairs" },
    ],
  },
  {
    era: "First Republic",
    period: "1961 – 1966",
    govType: "Civilian",
    ministers: [
      { name: "Dr. Jaja Wachuku", years: "1961 – 1965" },
      { name: "Nuhu Bamali", years: "1965 – 1966" },
    ],
  },
  {
    era: "Military Government",
    period: "1966 – 1979",
    govType: "Military",
    ministers: [
      { name: "Okoi Arikpo", years: "1967 – 1975" },
      { name: "Brig. Joseph Garba", years: "1975 – 1978" },
      { name: "Henry Adefope", years: "1978 – 1979" },
    ],
  },
  {
    era: "Second Republic",
    period: "1979 – 1983",
    govType: "Civilian",
    ministers: [
      { name: "Ishaya Audu", years: "1979 – 1983" },
      { name: "Emeka Anyaoku", years: "1983" },
    ],
  },
  {
    era: "Military Government",
    period: "1983 – 1993",
    govType: "Military",
    ministers: [
      { name: "Ibrahim Gambari", years: "1984 – 1985" },
      { name: "Prof. Bolaji Akinyemi", years: "1985 – 1987" },
      { name: "Maj.-Gen. Ike Nwachukwu", years: "1987 – 1989" },
      { name: "Rilwanu Lukman", years: "1989 – 1990" },
      { name: "Maj.-Gen. Ike Nwachukwu", years: "1990 – 1993", note: "Second tenure" },
    ],
  },
  {
    era: "Transitional Government",
    period: "1993",
    govType: "Transition",
    ministers: [
      { name: "Matthew Mbu", years: "1993" },
    ],
  },
  {
    era: "Military Government",
    period: "1993 – 1999",
    govType: "Military",
    ministers: [
      { name: "Baba Gana Kingibe", years: "1993 – 1995" },
      { name: "Tom Ikimi", years: "1995 – 1998" },
      { name: "Ignatius Olisemeka", years: "1998 – 1999" },
    ],
  },
  {
    era: "Fourth Republic",
    period: "1999 – present",
    govType: "Civilian",
    ministers: [
      { name: "Sule Lamido", years: "1999 – 2003" },
      { name: "Oluyemi Adeniji", years: "2003 – 2006" },
      { name: "Ngozi Okonjo-Iweala", years: "2006" },
      { name: "Joy Ogwu", years: "2006 – 2007" },
      { name: "Ojo Maduekwe", years: "2007 – 2010" },
      { name: "Henry Odein Ajumogobia", years: "2010 – 2011" },
      { name: "Olugbenga Ashiru", years: "2011 – 2013" },
      { name: "Viola Onwuliri", years: "2013 – 2014" },
      { name: "Aminu Bashir Wali", years: "2014 – 2015" },
      { name: "Geoffrey Onyeama", years: "2015 – 2023" },
      { name: "Amb. Yusuf Maitama Tuggar, OON", years: "2023 – 2024" },
      { name: "Amb. Bianca Odumegwu-Ojukwu", years: "2024 – present", note: "Current Minister" },
    ],
  },
];

const govBadge: Record<MinisterEra["govType"], { label: string; className: string }> = {
  Civilian:   { label: "Civilian",    className: "bg-brand/10 text-brand" },
  Military:   { label: "Military",    className: "bg-brand-deep/10 text-brand-deep" },
  Transition: { label: "Transition",  className: "bg-gold/20 text-amber-700" },
};

export default function MinistersPage() {
  let globalIndex = 0;

  return (
    <>
      <PageHeader
        title="List of All Foreign Ministers"
        lead="Every Honourable Minister of Foreign Affairs who has served the Federal Republic of Nigeria — from Prime Minister Tafawa Balewa in 1957 to the present day."
        crumbs={[
          { label: "About", href: "/about" },
          { label: "History", href: "/about/history" },
          { label: "List of All Foreign Ministers" },
        ]}
      />

      {/* Summary stat strip */}
      <div className="border-b border-line bg-brand-dark text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-px">
          {[
            { value: "29", label: "Ministers Appointed" },
            { value: "8",  label: "Political Eras" },
            { value: "67+", label: "Years of Service" },
          ].map((s) => (
            <div key={s.label} className="py-5 text-center">
              <p className="font-serif text-3xl font-bold text-gold">{s.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">

        <SectionHeading
          eyebrow="Complete Record"
          title="Ministers by Era"
          id="eras"
          icon="users"
          lead="Nigeria's foreign ministers across eight distinct political eras — civilian republics, military governments and the transitional administration of 1993."
        />

        <div className="mt-10 space-y-10">
          {ministerEras.map((block, eraIdx) => {
            const badge = govBadge[block.govType];
            return (
              <div
                key={block.era + block.period}
                className="overflow-hidden rounded-lg border border-line bg-white shadow-sm"
              >
                {/* Era header */}
                <div className="flex items-center justify-between gap-4 border-b border-line bg-mist/70 px-6 py-4">
                  <div className="flex items-center gap-4">
                    {/* Era number */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-serif text-sm font-bold text-white shadow-sm">
                      {eraIdx + 1}
                    </span>
                    <div>
                      <h2 className="font-serif text-base font-bold text-brand-deep">{block.era}</h2>
                      <p className="text-xs text-ink/50">{block.period}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${badge.className}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Ministers table */}
                <ul>
                  {block.ministers.map((m, mIdx) => {
                    globalIndex++;
                    const isCurrentMinister = m.note === "Current Minister";
                    return (
                      <li
                        key={m.name + m.years}
                        className={`grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-line/50 px-6 py-4 last:border-0 ${
                          isCurrentMinister ? "bg-brand/[0.04]" : mIdx % 2 === 0 ? "bg-white" : "bg-mist/30"
                        }`}
                      >
                        {/* Serial number */}
                        <span className="text-right font-serif text-lg font-bold text-ink/20">
                          {String(globalIndex).padStart(2, "0")}
                        </span>

                        {/* Name + note */}
                        <div>
                          <p className={`font-serif font-bold leading-snug ${isCurrentMinister ? "text-brand" : "text-brand-deep"}`}>
                            {m.name}
                          </p>
                          {m.note && (
                            <p className={`mt-0.5 text-[11px] font-semibold ${isCurrentMinister ? "text-brand" : "text-ink/50"}`}>
                              {m.note}
                            </p>
                          )}
                        </div>

                        {/* Years + current badge */}
                        <div className="text-right">
                          <p className="whitespace-nowrap text-sm font-semibold text-ink/60">{m.years}</p>
                          {isCurrentMinister && (
                            <span className="mt-1 inline-block rounded-full bg-brand px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                              Current
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Cross-links */}
        <div className="mt-14 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
          <Link
            href="/about/history"
            className="group flex items-start gap-3 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="document" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">Our History</span>
              <span className="mt-0.5 block text-xs text-ink/60">Six decades of Nigerian diplomacy and foreign affairs</span>
            </span>
          </Link>
          <Link
            href="/about/minister"
            className="group flex items-start gap-3 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="users" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">Current Minister's Profile</span>
              <span className="mt-0.5 block text-xs text-ink/60">Ambassador Bianca Odumegwu-Ojukwu</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
