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
        className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white"
      >
        {/* Hero photo — layered behind dark green overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.28 }}
          aria-hidden="true"
        />
        {/* Dark overlay to keep text readable */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(8,74,47,0.82) 0%, rgba(11,94,60,0.72) 50%, rgba(31,122,76,0.65) 100%)" }}
          aria-hidden="true"
        />
        {/* Diagonal line texture */}
        <div className="pattern-diagonal pointer-events-none absolute inset-0" aria-hidden="true" />
        {/* Gold glow — top-right */}
        <div className="glow-gold pointer-events-none absolute inset-0" aria-hidden="true" />
        {/* Gold glow — bottom-left for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(42% 52% at 10% 92%, rgba(227,179,57,0.10), transparent)" }}
          aria-hidden="true"
        />
        {/* Coat of Arms ghost watermark */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[480px] mix-blend-screen"
          style={{
            backgroundImage: "url('/images/mfa-logo-white.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.055,
            transform: "translate(28%, 28%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-center">

            {/* Left — text block */}
            <div>
              {/* Eyebrow */}
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold/90">
                <span className="inline-block h-px w-12 bg-gold/80" aria-hidden="true" />
                Federal Republic of Nigeria &middot; Official Website
              </p>

              {/* Headline — two-tier hierarchy */}
              <h1 id="hero-heading">
                <span className="block font-sans text-sm font-semibold uppercase tracking-[0.28em] text-white/45 md:text-base">
                  Ministry of
                </span>
                <span className="mt-1.5 block font-serif text-5xl font-bold leading-[1.02] text-white md:text-[3.8rem]">
                  Foreign{" "}
                  <span className="relative inline-block text-gold">
                    Affairs
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gold/35" aria-hidden="true" />
                  </span>
                </span>
              </h1>

              {/* Ornamental divider */}
              <div className="mt-7 flex items-center gap-2" aria-hidden="true">
                <span className="h-[2px] w-16 bg-gold" />
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
                <span className="h-[2px] w-6 bg-white/20" />
              </div>

              {/* Lead */}
              <p className="mt-6 max-w-xl text-base leading-[1.8] text-white/82 md:text-[1.05rem]">
                Advancing Nigeria&rsquo;s national interests through the 4D Foreign Policy Doctrine &mdash;
                Demography, Development, Diaspora and Democracy &mdash; for a stronger, more prosperous Nigeria.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-dark shadow-lg shadow-black/25 transition-colors hover:bg-gold-dark"
                >
                  Services
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link
                  href="/policy"
                  className="inline-flex items-center gap-2 rounded border border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
                >
                  Foreign Policy
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded border border-gold/60 bg-gold/[0.08] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-colors hover:bg-gold/15"
                >
                  <Icon name="alert" className="h-4 w-4" />
                  Emergency
                </Link>
              </div>

              {/* Quick stats strip */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                {[
                  { value: "109", label: "Global Missions" },
                  { value: "63+", label: "Years of Diplomacy" },
                  { value: "220M+", label: "Nigerians Served" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-[1.6rem] font-bold leading-none text-gold">{s.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Quick-access panel */}
            <div className="self-center overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-sm">
              {/* Gold top bar */}
              <div className="h-[3px] bg-gradient-to-r from-gold via-gold-dark to-gold" aria-hidden="true" />

              {/* Panel header */}
              <div className="px-6 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold/80">
                  Quick Access
                </p>
                <h2 className="mt-1 font-serif text-base font-bold text-white">
                  Ministry Services
                </h2>
              </div>

              {/* Service links */}
              <ul className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
                {[
                  { icon: "visa" as const,      label: "Visas & Passports",       sub: "Apply, renew or check status",          href: "/services/visa-passports" },
                  { icon: "document" as const,  label: "Document Authentication", sub: "Apostille & legalisation services",      href: "/services/document-authentication" },
                  { icon: "shield" as const,    label: "Consular Assistance",     sub: "Emergency help for Nigerians abroad",   href: "/services/consular-assistance" },
                  { icon: "globe" as const,     label: "Diplomatic Missions",     sub: "Find a mission near you",               href: "/missions" },
                  { icon: "plane" as const,     label: "Travel Advisories",       sub: "Up-to-date travel safety information",  href: "/travel-advisory" },
                ].map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-gold/75 transition-colors group-hover:border-gold/50 group-hover:text-gold">
                        <Icon name={s.icon} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
                          {s.label}
                        </span>
                        <span className="block truncate text-[11px] text-white/45">{s.sub}</span>
                      </span>
                      <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-gold/80" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Emergency contact footer */}
              <div className="border-t border-white/[0.08] bg-brand-dark/40 px-6 py-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 text-xs text-white/55 transition-colors hover:text-white/80"
                >
                  <Icon name="alert" className="h-3.5 w-3.5 shrink-0 text-gold" />
                  <span>24/7 Consular Emergency Line</span>
                  <Icon name="arrow" className="ml-auto h-3 w-3 shrink-0 transition-transform group-hover:translate-x-1 text-white/25 group-hover:text-gold/60" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FlagStripe className="relative h-1.5" />
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
