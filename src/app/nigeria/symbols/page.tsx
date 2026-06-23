import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
export const metadata: Metadata = {
  title: "National Symbols — Nigeria",
  description: "Nigeria's national symbols — the flag, coat of arms, anthem, motto, flower and more.",
};

const coaElements = [
  { symbol: "Black Shield",               meaning: "Nigeria's fertile soil and rich land" },
  { symbol: "Silver Y-shaped Lines",      meaning: "The confluence of the Niger and Benue rivers at Lokoja" },
  { symbol: "Eagle",                      meaning: "Strength and dignity of the nation" },
  { symbol: "Costus spectabilis (Red flowers)", meaning: "Nigeria's national flower — beauty and resilience" },
  { symbol: "Two White Horses",           meaning: "Dignity and pride as shield supporters" },
  { symbol: "Green & White Wreath",       meaning: "Nigeria's agricultural wealth" },
  { symbol: "National Motto (scroll)",    meaning: "\"Unity and Faith, Peace and Progress\"" },
];

const otherSymbols = [
  { label: "National Flower",    value: "Costus spectabilis (Yellow Trumpet)", icon: "globe"    as const },
  { label: "National Bird",      value: "Black Crowned Crane",                 icon: "plane"    as const },
  { label: "National Animal",    value: "Eagle (on the Coat of Arms)",         icon: "shield"   as const },
  { label: "National Currency",  value: "Naira (₦)",                           icon: "briefcase" as const },
  { label: "National Day",       value: "October 1 — Independence Day",        icon: "flag"     as const },
  { label: "National Motto",     value: "Unity and Faith, Peace and Progress", icon: "scale"    as const },
  { label: "Head of State",      value: "President Bola Ahmed Tinubu GCFR",    icon: "users"    as const },
  { label: "Capital City",       value: "Abuja, Federal Capital Territory",    icon: "building" as const },
];

export default function NigeriaSymbolsPage() {
  return (
    <>
      {/* Page hero banner */}
      <div className="relative overflow-hidden bg-brand-dark py-16 text-white">
        {/* Flag stripe top */}
        <div className="absolute inset-x-0 top-0 flex h-2">
          <div className="flex-1 bg-brand" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-brand" />
        </div>
        {/* Subtle diagonal pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link href="/nigeria" className="hover:text-gold">Nigeria</Link>
            <Icon name="arrow" className="h-3 w-3" />
            <span className="text-white/80">National Symbols</span>
          </nav>
          <div className="flex flex-wrap items-center gap-10">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-gold/80">
                Federal Republic of Nigeria
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                National Symbols
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                The emblems, colours and words that unite 220 million Nigerians — symbols of
                sovereignty, identity and shared aspiration since independence in 1960.
              </p>
            </div>
            {/* Mini flag */}
            <div
              className="hidden shrink-0 overflow-hidden rounded shadow-xl ring-2 ring-white/20 sm:flex"
              style={{ width: 120, height: 80 }}
              aria-label="Nigerian flag"
            >
              <div className="flex-1 bg-brand" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-brand" />
            </div>
          </div>
        </div>
        {/* Flag stripe bottom */}
        <div className="absolute inset-x-0 bottom-0 flex h-2">
          <div className="flex-1 bg-brand" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-brand" />
        </div>
      </div>

      {/* Jump links */}
      <div className="border-b border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-3">
          {["Flag", "Coat of Arms", "Anthem", "Other Symbols"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-brand hover:text-brand"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 md:py-20">

        {/* ── FLAG ── */}
        <section id="flag">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">National Symbol</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-brand-deep">The National Flag</h2>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Visual flag */}
            <div className="group relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-brand/20 to-brand-deep/10 blur-xl" aria-hidden="true" />
              <div
                className="relative flex h-52 w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10"
                aria-label="Nigerian flag: two green stripes flanking a white stripe"
              >
                <div className="flex-1 bg-brand" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-brand" />
              </div>
              <div className="mt-4 flex justify-center gap-6 text-center text-xs text-ink/60">
                <span><span className="inline-block h-3 w-3 rounded-sm bg-brand align-middle mr-1" />Green</span>
                <span><span className="inline-block h-3 w-3 rounded-sm bg-white border border-line align-middle mr-1" />White</span>
                <span><span className="inline-block h-3 w-3 rounded-sm bg-brand align-middle mr-1" />Green</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-5">
              <div className="rounded-xl border-l-4 border-brand bg-mist px-6 py-5">
                <p className="text-sm font-bold uppercase tracking-wide text-brand">Designer</p>
                <p className="mt-1 font-serif text-lg font-bold text-brand-deep">Michael Taiwo Akinkunmi</p>
                <p className="mt-0.5 text-sm text-ink/70">Selected from 2,870 entries in a national competition, 1959</p>
              </div>
              <div className="rounded-xl border-l-4 border-gold bg-mist px-6 py-5">
                <p className="text-sm font-bold uppercase tracking-wide text-gold-dark">Adopted</p>
                <p className="mt-1 font-serif text-lg font-bold text-brand-deep">1 October 1960</p>
                <p className="mt-0.5 text-sm text-ink/70">On the day of Nigeria's independence from Britain</p>
              </div>
              <div className="space-y-3 rounded-xl border border-line bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon name="check" className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <p className="text-sm text-ink/80"><strong className="text-brand-deep">Green</strong> — Nigeria's abundant agricultural wealth, forests and natural resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon name="check" className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <p className="text-sm text-ink/80"><strong className="text-brand-deep">White</strong> — Peace, unity and the aspiration for harmony among the people</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon name="check" className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <p className="text-sm text-ink/80">No coat of arms or emblem — making it one of the world's simplest and most distinctive flags</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COAT OF ARMS ── */}
        <section id="coat-of-arms">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">National Symbol</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-brand-deep">The Coat of Arms</h2>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
            {/* Coat of Arms image */}
            <div className="flex flex-col items-center">
              <div className="relative mx-auto w-56">
                <div className="absolute -inset-4 rounded-full bg-brand/8 blur-2xl" aria-hidden="true" />
                <Image
                  src="/images/ng-coa.jpg"
                  alt="Coat of Arms of the Federal Republic of Nigeria"
                  width={224}
                  height={280}
                  className="relative w-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                Adopted 20 May 1960
              </p>
            </div>

            {/* Elements */}
            <div>
              <p className="mb-5 text-sm leading-relaxed text-ink/80">
                Nigeria's coat of arms was formally adopted on 20 May 1960, ahead of independence.
                Each element carries deep symbolic meaning rooted in the nation's land, rivers, people and values.
              </p>
              <ul className="space-y-3">
                {coaElements.map((el) => (
                  <li key={el.symbol} className="flex items-start gap-3 rounded-lg border border-line bg-white p-3.5 shadow-sm">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <Icon name="check" className="h-3.5 w-3.5 text-gold-dark" />
                    </span>
                    <span className="text-sm">
                      <strong className="text-brand-deep">{el.symbol}</strong>
                      <span className="text-ink/65"> — {el.meaning}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── ANTHEM ── */}
        <section id="anthem">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">National Symbol</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-brand-deep">The National Anthem</h2>

          <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
            {/* Anthem text */}
            <div className="relative overflow-hidden rounded-xl border border-brand/20 bg-gradient-to-br from-brand-dark to-brand-deep p-8 text-white shadow-xl">
              {/* Decorative flag stripe */}
              <div className="absolute inset-x-0 top-0 flex h-1.5">
                <div className="flex-1 bg-white/30" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-white/30" />
              </div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gold/80">
                Current Anthem — Restored 2024
              </p>
              <h3 className="mb-6 font-serif text-xl font-bold text-white">
                &ldquo;Nigeria, We Hail Thee&rdquo;
              </h3>
              <div className="space-y-5 border-l-2 border-gold/60 pl-5 font-serif text-sm leading-[1.9] italic text-white/85">
                <p>
                  Nigeria, we hail thee,<br />
                  Our own dear native land,<br />
                  Though tribe and tongue may differ,<br />
                  In brotherhood we stand,<br />
                  Nigerians all, and proud to serve<br />
                  Our sovereign Motherland.
                </p>
                <p>
                  Our flag shall be a symbol<br />
                  That truth and justice reign,<br />
                  In peace or battle honour&rsquo;d,<br />
                  And this we count as gain,<br />
                  To hand on to our children<br />
                  A banner without stain.
                </p>
                <p>
                  O God of all creation,<br />
                  Grant this our one request,<br />
                  Help us to build a nation<br />
                  Where no man is oppressed,<br />
                  And so with peace and plenty<br />
                  Nigeria may be blessed.
                </p>
              </div>
            </div>

            {/* History + credits */}
            <div className="space-y-5">
              <div className="rounded-xl border border-line bg-white p-5 shadow-sm">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-ink/50">Lyricist</p>
                <p className="font-serif text-base font-bold text-brand-deep">Lillian Jean Williams</p>
                <p className="mt-0.5 text-sm text-ink/65">British expatriate resident in Nigeria</p>
              </div>
              <div className="rounded-xl border border-line bg-white p-5 shadow-sm">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-ink/50">Composer</p>
                <p className="font-serif text-base font-bold text-brand-deep">Frances Berda</p>
                <p className="mt-0.5 text-sm text-ink/65">Musical arrangement for independence</p>
              </div>
              <div className="rounded-xl border border-line bg-mist p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-ink/50">Historical Note</p>
                <p className="text-sm leading-relaxed text-ink/80">
                  &ldquo;Nigeria, We Hail Thee&rdquo; served as the anthem from 1960 until 1978, when it was replaced
                  by &ldquo;Arise O Compatriots.&rdquo; In May 2024, President Bola Tinubu signed legislation
                  restoring the original anthem, reconnecting the nation with its independence-era spirit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OTHER SYMBOLS ── */}
        <section id="other-symbols">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">Quick Reference</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-brand-deep">Other National Symbols</h2>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherSymbols.map((s) => (
              <li
                key={s.label}
                className="group flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/8 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">{s.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-deep">{s.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer nav */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <Link
            href="/nigeria"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Back to Nigeria
          </Link>
          <div className="flex gap-3">
            <Link href="/nigeria/history" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand">
              History
            </Link>
            <Link href="/nigeria/culture" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
              People &amp; Culture <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
