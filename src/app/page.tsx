import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getServices } from "@/data/services";
import { getNews, formatDate } from "@/data/news";
import { getNotices } from "@/data/notices";
import Icon, { type IconName } from "@/components/Icon";
import NoticeBadge from "@/components/NoticeBadge";
import SectionHeading from "@/components/SectionHeading";
import FlagStripe from "@/components/FlagStripe";
import SectionDivider from "@/components/SectionDivider";
import NewsCarousel from "@/components/NewsCarousel";
const fourDPillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "users",
    title: "Demography",
    text: "Harnessing Nigeria's youthful population as a driver of global influence and economic growth.",
  },
  {
    icon: "globe",
    title: "Development",
    text: "Attracting strategic investment, trade and technology partnerships that accelerate national development.",
  },
  {
    icon: "passport",
    title: "Diaspora",
    text: "Empowering over 17 million Nigerians abroad as ambassadors and partners in nation-building.",
  },
  {
    icon: "scale",
    title: "Democracy",
    text: "Championing good governance, rule of law, and democratic values across Africa and the world.",
  },
];


export default async function Home() {
  const [services, news, notices] = await Promise.all([getServices(), getNews(), getNotices()]);
  const latestNews = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const pressReleases = [...news]
    .filter((n) => n.category === "Press Release")
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const alertNotice = [...notices]
    .sort((a, b) => b.date.localeCompare(a.date))
    .find((n) => n.priority === "Urgent" || n.priority === "Important");

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative flex min-h-[92vh] flex-col overflow-hidden bg-[#03201a] text-white"
      >
        {/* LAYER 1 — Hero photo at elevated opacity for cinematic depth */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')", opacity: 0.40 }}
          aria-hidden="true"
        />
        {/* LAYER 2 — Directional gradient: left-dark → right-transparent */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(3,32,26,0.97) 0%, rgba(8,74,47,0.90) 42%, rgba(11,94,60,0.60) 68%, rgba(11,94,60,0.18) 100%)" }}
          aria-hidden="true"
        />
        {/* LAYER 3 — Bottom vignette for grounding */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(3,32,26,0.85) 0%, transparent 38%)" }}
          aria-hidden="true"
        />
        {/* Gold atmospheric glow — upper right */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 55% at 82% 12%, rgba(227,179,57,0.09), transparent)" }}
          aria-hidden="true"
        />
        {/* Coat of Arms ghost — right-center, large */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-[32%] mix-blend-screen"
          style={{ backgroundImage: "url('/images/mfa-logo-white.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", opacity: 0.05 }}
          aria-hidden="true"
        />

        {/* Gold top accent line */}
        <div className="relative h-[3px] flex-shrink-0 bg-gradient-to-r from-transparent via-gold/75 to-transparent" aria-hidden="true" />

        {/* Main content — vertically centered in remaining space */}
        <div className="relative flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.75fr_1fr] lg:items-center lg:gap-14">

              {/* ── LEFT: Text ── */}
              <div>
                {/* Eyebrow */}
                <p className="mb-7 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.32em] text-gold/80">
                  <span className="h-px w-14 bg-gold/60" aria-hidden="true" />
                  Federal Republic of Nigeria &middot; Official Website
                </p>

                {/* Monumental headline — stacked two lines */}
                <h1 id="hero-heading" className="leading-none">
                  <span className="block font-sans text-[13px] font-semibold uppercase tracking-[0.42em] text-white/38 md:text-sm">
                    Ministry of
                  </span>
                  <span className="mt-3 block font-serif text-[3.75rem] font-bold leading-[0.92] tracking-tight text-white md:text-[5.25rem] lg:text-[6.25rem]">
                    Foreign
                  </span>
                  <span className="block font-serif text-[3.75rem] font-bold leading-[0.92] tracking-tight text-gold md:text-[5.25rem] lg:text-[6.25rem]">
                    Affairs
                  </span>
                </h1>

                {/* Slim gold rule */}
                <div className="mt-8 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px w-10 bg-gold" />
                  <span className="h-[5px] w-[5px] rounded-full bg-gold/50" />
                  <span className="h-px w-20 bg-white/12" />
                </div>

                {/* Lead copy */}
                <p className="mt-6 max-w-[520px] text-[1.0625rem] leading-[1.82] text-white/70">
                  Advancing Nigeria&rsquo;s national interests through proactive diplomacy &mdash;
                  fostering peace, attracting investment, and empowering Nigerians worldwide.
                </p>

                {/* CTAs — clear two-level hierarchy */}
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2.5 bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-dark shadow-lg shadow-gold/20 transition-all hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/25"
                  >
                    Ministry Services
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/missions"
                    className="inline-flex items-center gap-2.5 border border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/[0.07] hover:text-white"
                  >
                    Find a Mission
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-gold/30 bg-gold/[0.06] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-gold/85 transition-all hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon name="alert" className="h-4 w-4" />
                    Emergency
                  </Link>
                </div>

                {/* Stats strip — larger numbers */}
                <div className="mt-12 flex flex-wrap gap-10 border-t border-white/[0.09] pt-9">
                  {[
                    { value: "112", label: "Global Missions" },
                    { value: "63+", label: "Years of Diplomacy" },
                    { value: "220M+", label: "Nigerians Served" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-serif text-4xl font-bold leading-none text-gold md:text-5xl">{s.value}</p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/36">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: Quick-access portal ── */}
              <div className="self-center">
                <div className="overflow-hidden rounded-xl border border-white/[0.10] bg-white/[0.035] shadow-2xl shadow-black/40 backdrop-blur-md">
                  {/* Slim gold accent */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" aria-hidden="true" />

                  {/* Header */}
                  <div className="border-b border-white/[0.07] px-7 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold/72">Quick Access</p>
                    <h2 className="mt-1.5 font-serif text-[17px] font-bold text-white">Ministry Services</h2>
                  </div>

                  {/* Links */}
                  <ul className="divide-y divide-white/[0.06]">
                    {[
                      { icon: "visa" as const,     label: "Visas & Passports",       sub: "Apply, renew or check status",        href: "/services/visa-passports" },
                      { icon: "document" as const, label: "Document Authentication", sub: "Apostille & legalisation",            href: "/services/document-authentication" },
                      { icon: "shield" as const,   label: "Consular Assistance",     sub: "Emergency help for Nigerians abroad", href: "/services/consular-assistance" },
                      { icon: "globe" as const,    label: "Diplomatic Missions",     sub: "Find a mission near you",             href: "/missions" },
                      { icon: "plane" as const,    label: "Travel Advisories",       sub: "Safety info by destination",          href: "/travel-advisory" },
                    ].map((s) => (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          className="group flex items-center gap-4 px-7 py-4 transition-colors hover:bg-white/[0.06]"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-gold/68 transition-colors group-hover:border-gold/40 group-hover:text-gold">
                            <Icon name={s.icon} className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[13.5px] font-semibold text-white/85 transition-colors group-hover:text-white">{s.label}</span>
                            <span className="block truncate text-[11px] text-white/40">{s.sub}</span>
                          </span>
                          <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-white/18 transition-all group-hover:translate-x-1 group-hover:text-gold/72" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Emergency footer */}
                  <div className="border-t border-white/[0.07] bg-black/20 px-7 py-4">
                    <Link
                      href="/contact"
                      className="group flex items-center gap-3 text-xs text-white/48 transition-colors hover:text-white/78"
                    >
                      <Icon name="alert" className="h-3.5 w-3.5 shrink-0 text-gold" />
                      <span>24/7 Consular Emergency Line</span>
                      <Icon name="arrow" className="ml-auto h-3 w-3 shrink-0 text-white/18 transition-all group-hover:translate-x-1 group-hover:text-gold/58" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <FlagStripe className="relative h-1.5 flex-shrink-0" />
      </section>

      {/* Priority notice strip */}
      {alertNotice && (
        <div className="border-b border-gold/50 bg-gold/15">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 text-sm">
            <NoticeBadge priority={alertNotice.priority} />
            <p className="min-w-0 flex-1 font-medium">{alertNotice.title}</p>
            <Link
              href={`/public-notices#${alertNotice.id}`}
              className="shrink-0 font-bold text-brand underline hover:text-brand-deep"
            >
              Read notice
            </Link>
          </div>
        </div>
      )}

      {/* News + Notices */}
      <section aria-labelledby="news-heading" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Latest from the Ministry"
              title="News & Press Releases"
              id="news-heading"
              icon="bell"
              link={{ label: "All news", href: "/press" }}
            />
            <NewsCarousel items={latestNews} />
          </div>
          <div>
            <SectionHeading eyebrow="Official statements" title="Press Releases" icon="newspaper" />
            <ul className="space-y-3">
              {(pressReleases.length > 0 ? pressReleases : latestNews.slice(0, 3)).map((n) => (
                <li key={n.slug} className="group rounded border border-line bg-white p-4 transition-all hover:border-brand/40 hover:shadow-sm">
                  <time dateTime={n.date} className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand/70">
                    {formatDate(n.date)}
                  </time>
                  <Link
                    href={`/press/${n.slug}`}
                    className="block text-sm font-bold leading-snug text-brand-deep group-hover:text-brand group-hover:underline"
                  >
                    {n.title}
                  </Link>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/60 line-clamp-2">{n.excerpt}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/press"
              className="mt-5 inline-flex items-center gap-1.5 rounded border-2 border-brand px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              All press releases
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services */}
      <section aria-labelledby="services-heading" className="bg-gradient-to-b from-mist to-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Section header */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand">
                <span className="inline-block h-px w-8 bg-brand/60" aria-hidden="true" />
                Serving Nigerians Worldwide
              </p>
              <h2 id="services-heading" className="font-serif text-3xl font-bold text-brand-deep md:text-4xl">
                Ministry Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded border-2 border-brand px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View all services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          {/* Services grid — alternating featured + compact layout */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                  i === 0
                    ? "border-brand bg-gradient-to-br from-brand-dark to-brand-deep text-white lg:col-span-1 lg:row-span-2"
                    : "border-line bg-white hover:border-brand/50"
                }`}
              >
                {/* Featured card accent */}
                {i === 0 && (
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold via-gold-dark to-gold" aria-hidden="true" />
                )}
                {/* Normal card top accent */}
                {i !== 0 && (
                  <span className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-brand to-brand-deep transition-transform duration-300 group-hover:scale-x-100 origin-left" aria-hidden="true" />
                )}

                <div className={`flex flex-1 flex-col p-6 ${i === 0 ? "pt-8" : ""}`}>
                  {/* Icon */}
                  <span className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                    i === 0
                      ? "bg-white/10 text-gold"
                      : "bg-brand/8 text-brand group-hover:bg-brand group-hover:text-white"
                  }`}>
                    <Icon name={s.icon as IconName} className="h-5 w-5" />
                  </span>

                  <h3 className={`mb-2 font-serif font-bold leading-snug ${
                    i === 0 ? "text-xl text-white" : "text-base text-brand-deep"
                  }`}>
                    {s.title}
                  </h3>

                  <p className={`flex-1 text-sm leading-relaxed ${
                    i === 0 ? "text-white/75" : "text-ink/65"
                  }`}>
                    {s.summary}
                  </p>

                  <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${
                    i === 0 ? "text-gold" : "text-brand"
                  }`}>
                    Learn more
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Minister message */}
      <section aria-labelledby="minister-heading" className="bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:py-20 lg:grid-cols-[1fr_2fr]">
          <figure className="mx-auto w-full max-w-xs">
            <div className="relative overflow-hidden rounded shadow-lg">
              <div className="relative aspect-[3/4] border border-line bg-mist">
                <Image
                  src={site.ministers.foreign.portrait.src}
                  alt={site.ministers.foreign.portrait.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="object-cover object-top"
                />
              </div>
              <FlagStripe className="h-1.5" />
            </div>
            <figcaption className="mt-4 text-center text-sm">
              <span className="block font-serif text-base font-bold text-brand-deep">
                {site.ministers.foreign.name}
              </span>
              <span className="text-ink/70">{site.ministers.foreign.title}</span>
            </figcaption>
          </figure>
          <div>
            <SectionHeading
              eyebrow="A word of welcome"
              title="Message from the Honourable Minister"
              id="minister-heading"
              icon="users"
            />
            <blockquote className="relative space-y-4 border-l-4 border-gold pl-6 text-base leading-relaxed text-ink/90">
              <p>
                Under the visionary leadership of His Excellency, President Bola Ahmed Tinubu GCFR,
                Nigeria is positioning itself as a bold and progressive leader in global diplomacy.
                As Minister of Foreign Affairs, my mission is clear: to advance Nigeria&rsquo;s national
                interests, protect our citizens abroad, and secure strategic partnerships that drive
                real development at home.
              </p>
              <p>
                Through proactive and dynamic diplomacy, this Ministry is committed to fostering peace,
                security, and economic prosperity. We are actively engaging global partners to attract
                investment, boost trade, and ensure Nigeria remains a leading voice on the world stage.
                Most importantly, we stand dedicated to serving the Nigerian diaspora, safeguarding
                their rights and well-being wherever they live.
              </p>
              <p>
                This website is your digital gateway to our foreign policy priorities, initiatives,
                and collaborative efforts. I invite you to explore our work and join us in shaping
                a stronger, more prosperous Nigeria globally.
              </p>
            </blockquote>
            <Link
              href="/about/minister"
              className="mt-7 inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Full Minister Profile
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4D Doctrine */}
      <section
        aria-labelledby="fourd-heading"
        className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white"
      >
        <div className="pattern-diagonal absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Nigeria's Foreign Policy"
            title="The 4D Doctrine"
            id="fourd-heading"
            icon="globe"
            lead="President Tinubu's Renewed Hope agenda is anchored on four pillars that guide every diplomatic engagement Nigeria pursues on the world stage."
            link={{ label: "Explore foreign policy", href: "/policy" }}
            tone="dark"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fourDPillars.map((p) => (
              <li
                key={p.title}
                className="rounded border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors hover:border-gold/50"
              >
                <Icon name={p.icon} className="mb-3 h-7 w-7 text-gold" />
                <h3 className="mb-1.5 font-serif text-base font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Locations & Missions */}
      <section
        aria-labelledby="locations-heading"
        className="relative overflow-hidden bg-[#0d1117]"
        id="missions"
      >
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        {/* Warm glow from top-right */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,153,62,0.12) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">

          {/* Top row: heading + CTA */}
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold/70">
                <span className="inline-block h-px w-8 bg-gold/60" aria-hidden="true" />
                Global Presence
              </p>
              <h2
                id="locations-heading"
                className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl"
              >
                Nigeria's Diplomatic Network
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                Serving Nigerians and advancing national interests across every continent through
                a network of 109 diplomatic and consular missions.
              </p>
            </div>
            <Link
              href="/missions"
              className="inline-flex items-center gap-2 rounded border border-gold/60 bg-gold/10 px-6 py-3 text-sm font-bold text-gold transition-all hover:bg-gold hover:text-brand-dark"
            >
              Explore All Missions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats — horizontal strip */}
          <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "109", label: "Total Missions",   sub: "Worldwide" },
              { value: "76",  label: "Embassies",        sub: "Bilateral" },
              { value: "22",  label: "High Commissions", sub: "Commonwealth" },
              { value: "11",  label: "Consulates",       sub: "Consular posts" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded border border-white/8 bg-white/[0.03] px-5 py-5 backdrop-blur-sm"
              >
                <p className="font-serif text-4xl font-bold text-gold">{s.value}</p>
                <p className="mt-1 text-sm font-semibold text-white/80">{s.label}</p>
                <p className="mt-0.5 text-[11px] text-white/35">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Bottom row: mission types + regions */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: "Embassies",
                sub: "76 bilateral missions",
                href: "/missions",
                icon: "building" as const,
                accent: "border-brand/60",
              },
              {
                heading: "High Commissions",
                sub: "22 Commonwealth posts",
                href: "/missions",
                icon: "shield" as const,
                accent: "border-gold/50",
              },
              {
                heading: "Consulates",
                sub: "11 consular offices",
                href: "/missions",
                icon: "map" as const,
                accent: "border-white/20",
              },
              {
                heading: "View by Region",
                sub: "Africa · Europe · Americas · Asia",
                href: "/missions",
                icon: "globe" as const,
                accent: "border-white/20",
              },
            ].map((card) => (
              <Link
                key={card.heading}
                href={card.href}
                className={`group flex items-center gap-4 rounded border ${card.accent} bg-white/[0.03] px-5 py-4 backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-gold/60`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-gold/80 transition-colors group-hover:border-gold/50 group-hover:text-gold">
                  <Icon name={card.icon} className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-white/90 transition-colors group-hover:text-white">
                    {card.heading}
                  </span>
                  <span className="block text-[11px] text-white/40">{card.sub}</span>
                </span>
                <Icon name="arrow" className="ml-auto h-3.5 w-3.5 shrink-0 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
