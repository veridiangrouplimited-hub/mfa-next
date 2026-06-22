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
import NigeriaMap from "@/components/NigeriaMap";
import NewsCarousel from "@/components/NewsCarousel";
import WatermarkSeal from "@/components/WatermarkSeal";

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

const nigeriaFacts = [
  { label: "Capital", value: "Abuja" },
  { label: "Independence", value: "1 October 1960" },
  { label: "Population", value: "Over 220 million" },
  { label: "Official Language", value: "English" },
  { label: "Currency", value: "Naira (₦)" },
  { label: "Motto", value: "Unity and Faith, Peace and Progress" },
];

export default async function Home() {
  const [services, news, notices] = await Promise.all([getServices(), getNews(), getNotices()]);
  const latestNews = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const latestNotices = [...notices].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
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
        <div className="pattern-diagonal absolute inset-0" aria-hidden="true" />
        <div className="glow-gold absolute inset-0" aria-hidden="true" />
        <WatermarkSeal className="pointer-events-none absolute -bottom-24 -right-16 hidden h-[26rem] w-[26rem] text-white opacity-[0.13] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.65fr_1fr]">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-gold">
              <span className="inline-block h-px w-10 bg-gold" aria-hidden="true" />
              Federal Republic of Nigeria · Official Website
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl font-bold leading-[1.08] md:text-[3.6rem]"
            >
              Ministry of
              <span className="block text-gold">Foreign Affairs</span>
            </h1>
            <div className="mt-6 flex gap-1" aria-hidden="true">
              <span className="h-1 w-16 bg-gold" />
              <span className="h-1 w-5 bg-white/40" />
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Advancing Nigeria's national interests through the 4D Foreign Policy Doctrine —
              Demography, Development, Diaspora and Democracy — for a stronger, more prosperous Nigeria.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-dark shadow-lg shadow-black/20 transition-colors hover:bg-gold-dark"
              >
                Consular Services
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/missions"
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-mist"
              >
                Find a Mission
              </Link>
              <Link
                href="/policy"
                className="inline-flex items-center gap-2 rounded border border-white/50 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Foreign Policy
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded border border-gold/70 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
              >
                <Icon name="alert" className="h-4 w-4" />
                Emergency
              </Link>
            </div>
          </div>

          {/* Minister card */}
          <div className="self-center overflow-hidden rounded border border-white/15 bg-white/[0.06] shadow-2xl shadow-black/25 backdrop-blur-sm">
            <div className="h-1 bg-gold" aria-hidden="true" />
            <div className="p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gold/80">
                Honourable Minister of Foreign Affairs
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded border border-white/20 bg-white/10">
                  <Image
                    src={site.ministers.foreign.portrait.src}
                    alt={site.ministers.foreign.portrait.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-base font-bold leading-snug">
                    {site.ministers.foreign.name}
                  </p>
                  <p className="mt-0.5 text-xs text-white/70">
                    Sworn in: {site.ministers.foreign.swornIn}
                  </p>
                </div>
              </div>
              <Link
                href="/about/minister"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
              >
                Read full profile <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="border-t border-white/10 px-6 py-4">
              <h2 className="mb-3 flex items-center gap-2 text-sm font-bold">
                <Icon name="clock" className="h-4 w-4 text-gold" />
                Ministry Hours
              </h2>
              <ul className="space-y-2 text-xs text-white/85">
                {site.officeHours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                    <span>{h.days}</span>
                    <span className="font-semibold text-white">{h.hours}</span>
                  </li>
                ))}
              </ul>
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

      {/* Consular services */}
      <section aria-labelledby="services-heading" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeading
          eyebrow="Serving Nigerians worldwide"
          title="Consular Services"
          id="services-heading"
          icon="passport"
          link={{ label: "View all services", href: "/services" }}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-deep hover:shadow-lg"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-deep to-gold opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-gold">
                  <Icon name={s.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mb-2 font-serif text-lg font-bold text-brand-deep group-hover:underline">
                  {s.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-ink/80">{s.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
                "On behalf of the Government and people of the Federal Republic of Nigeria, I welcome
                you to the official website of the Ministry of Foreign Affairs. This Ministry exists
                to serve — to protect the interests of Nigerians at home and abroad, and to advance
                Nigeria's place in the world through principled, purposeful diplomacy.
              </p>
              <p>
                Under the 4D Foreign Policy Framework, we are building bridges of prosperity, security
                and solidarity across Africa, the Americas, Europe, Asia and beyond."
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
            <SectionHeading eyebrow="Official announcements" title="Public Notices" icon="document" />
            <ul className="space-y-4">
              {latestNotices.map((n) => (
                <li key={n.id} className="rounded border-l-4 border-gold bg-mist p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                    <NoticeBadge priority={n.priority} />
                    <time dateTime={n.date} className="text-ink/65">
                      {formatDate(n.date)}
                    </time>
                  </div>
                  <Link
                    href={`/public-notices#${n.id}`}
                    className="text-sm font-bold leading-snug text-brand-deep hover:underline"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/public-notices"
              className="mt-6 inline-flex items-center gap-1.5 rounded border-2 border-brand px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              All public notices
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Diaspora band */}
      <section aria-labelledby="diaspora-heading" className="border-b border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-14">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Our global community"
              title="Nigerians in the Diaspora"
              id="diaspora-heading"
              lead="Over 17 million Nigerians live and work abroad. The Ministry is committed to protecting your rights, supporting your welfare, and empowering you as ambassadors of our great nation."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/diaspora"
              className="rounded bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
            >
              Diaspora Services
            </Link>
            <Link
              href="/missions"
              className="rounded border-2 border-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Find Your Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Nigeria at a Glance */}
      <section aria-labelledby="glance-heading" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr]">
          <figure className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-brand/5 blur-2xl" aria-hidden="true" />
              <NigeriaMap className="relative h-auto w-full text-brand drop-shadow-md" />
            </div>
            <figcaption className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
              Federal Republic of Nigeria
              <span className="mt-1 block font-normal normal-case tracking-normal text-ink/55">
                36 States and the Federal Capital Territory, Abuja
              </span>
            </figcaption>
          </figure>

          <div>
            <SectionHeading
              eyebrow="National identity"
              title="Nigeria at a Glance"
              id="glance-heading"
              icon="globe"
              lead="Africa's largest economy and most populous nation — a federation of 36 states, over 250 ethnic groups and one people united in purpose."
            />
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {nigeriaFacts.map((f) => (
                <div key={f.label} className="border-l-2 border-gold pl-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">
                    {f.label}
                  </dt>
                  <dd className="mt-0.5 font-serif text-base font-bold text-brand-deep">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="mt-9 grid gap-4 sm:grid-cols-3">
              <li className="flex items-center gap-3 rounded border border-line bg-mist p-3.5">
                <span className="flex h-9 w-14 shrink-0 overflow-hidden rounded-sm ring-1 ring-black/10" aria-hidden="true">
                  <span className="flex-1 bg-brand" />
                  <span className="flex-1 bg-white" />
                  <span className="flex-1 bg-brand" />
                </span>
                <span className="text-xs leading-snug">
                  <strong className="block text-brand-deep">National Flag</strong>
                  Green–White–Green
                </span>
              </li>
              <li className="flex items-center gap-3 rounded border border-line bg-mist p-3.5">
                <Image
                  src="/images/mfa-logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 object-contain"
                />
                <span className="text-xs leading-snug">
                  <strong className="block text-brand-deep">Coat of Arms</strong>
                  Eagle of strength, black shield of fertile soil
                </span>
              </li>
              <li className="flex items-center gap-3 rounded border border-line bg-mist p-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
                  <Icon name="bell" className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs leading-snug">
                  <strong className="block text-brand-deep">National Anthem</strong>
                  "Nigeria, We Hail Thee"
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact */}
      <section aria-labelledby="contact-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:pb-20">
        <SectionHeading
          eyebrow="Get in touch"
          title="Visit, Call or Write to Us"
          id="contact-heading"
          icon="pin"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded border-l-4 border-red-700 bg-red-50 p-6">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-bold text-red-800">
              <Icon name="alert" className="h-5 w-5" />
              In an Emergency
            </h3>
            <p className="text-sm leading-relaxed">
              If a Nigerian citizen abroad is in danger, detained, hospitalised or bereaved, contact
              the nearest Nigerian Mission or the Ministry's emergency line:
            </p>
            <a
              href={`tel:${site.emergencyPhone}`}
              className="mt-3 block text-xl font-bold text-red-800 underline"
            >
              {site.emergencyPhone}
            </a>
            <Link
              href="/services/consular-assistance"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
            >
              Consular assistance
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded border border-line bg-white p-6 shadow-sm">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-bold text-brand-deep">
              <Icon name="pin" className="h-5 w-5" />
              Ministry Headquarters
            </h3>
            <address className="space-y-2 text-sm not-italic leading-relaxed">
              <p>{site.address}<br />{site.city}, {site.hostCountry}</p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${site.phones[0]}`} className="text-brand underline">{site.phones[0]}</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${site.email}`} className="text-brand underline">{site.email}</a>
              </p>
            </address>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
            >
              Contact the Ministry
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded border border-line bg-white p-6 shadow-sm">
            <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-bold text-brand-deep">
              <Icon name="globe" className="h-5 w-5" />
              Global Missions Network
            </h3>
            <p className="text-sm leading-relaxed text-ink/85">
              Nigeria maintains a wide network of Embassies, High Commissions, Consulates and
              Permanent Missions across Africa, the Americas, Europe, Asia and the Middle East.
            </p>
            <Link
              href="/missions"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
            >
              Find a mission near you
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
