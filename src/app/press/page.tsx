import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { getNews } from "@/data/news";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press Releases",
  description: `Official press releases, communiqués and ministerial statements from the ${site.missionName}.`,
};

function longDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default async function PressReleasesPage() {
  const all = await getNews();
  const releases = all
    .filter((n) => n.category === "Press Release" || n.category === "Official Statement")
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        title="Press Releases"
        lead="Official press releases, communiqués and ministerial statements issued by the Federal Ministry of Foreign Affairs."
        crumbs={[{ label: "Press Center", href: "/news" }, { label: "Press Releases" }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">

        {/* Media contact banner */}
        <div className="mb-10 flex flex-col items-start gap-4 rounded border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif font-bold text-brand-deep">Media Enquiries</h2>
            <p className="mt-1 text-sm text-ink/75">
              For press accreditation, interview requests or media enquiries, contact our press office.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded border border-brand bg-white px-4 py-2 text-sm font-bold text-brand hover:bg-brand hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" /> Email Press Office
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand px-4 py-2 text-sm font-bold text-white hover:bg-brand-deep"
            >
              Contact Us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {releases.length === 0 ? (
          <div className="rounded border border-line bg-mist p-12 text-center">
            <Icon name="quote" className="mx-auto mb-3 h-10 w-10 text-brand/40" />
            <p className="text-sm text-ink/60">No press releases available at this time.</p>
          </div>
        ) : (
          <ul className="divide-y divide-line border-y border-line">
            {releases.map((n) => (
              <li key={n.slug}>
                <article className="group relative flex gap-5 py-7 pl-4 pr-3 transition-colors hover:bg-mist/50 md:gap-7">
                  <span className="absolute inset-y-5 left-0 w-1 bg-gold opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />

                  {/* Date block */}
                  <time
                    dateTime={n.date}
                    className="flex w-14 shrink-0 flex-col items-center self-start border-t-2 border-gold bg-white px-1.5 pb-2 pt-1.5 text-center shadow-sm"
                  >
                    <span className="font-serif text-2xl font-bold leading-tight text-brand-deep">
                      {new Date(n.date + "T00:00:00").getDate()}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink/55">
                      {new Date(n.date + "T00:00:00").toLocaleDateString("en-GB", { month: "short" })}{" "}
                      {new Date(n.date + "T00:00:00").getFullYear()}
                    </span>
                  </time>

                  {/* Body */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                      {n.category} · {n.department}
                    </p>
                    <h2 className="font-serif text-[1.05rem] font-bold leading-snug text-brand-deep">
                      <Link href={`/news/${n.slug}`} className="hover:underline">
                        {n.title}
                      </Link>
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/70">
                      {n.excerpt}
                    </p>
                    <Link
                      href={`/news/${n.slug}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
                    >
                      Read full release <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Thumbnail */}
                  {n.image.src && (
                    <Link
                      href={`/news/${n.slug}`}
                      className="relative hidden h-20 w-32 shrink-0 self-center overflow-hidden rounded border border-line bg-mist md:block"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <Image src={n.image.src} alt="" fill sizes="128px" className="object-cover" />
                    </Link>
                  )}
                </article>
              </li>
            ))}
          </ul>
        )}

        {/* Browse all news */}
        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded border border-brand px-6 py-2.5 text-sm font-bold text-brand hover:bg-brand hover:text-white"
          >
            <Icon name="newspaper" className="h-4 w-4" /> View all News &amp; Updates
          </Link>
        </div>
      </div>
    </>
  );
}
