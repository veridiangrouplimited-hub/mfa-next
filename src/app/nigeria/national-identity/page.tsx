import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import NigeriaMap from "@/components/NigeriaMap";
import Icon from "@/components/Icon";

const nigeriaFacts = [
  { label: "Capital", value: "Abuja" },
  { label: "Independence", value: "1 October 1960" },
  { label: "Population", value: "Over 220 million" },
  { label: "Official Language", value: "English" },
  { label: "Currency", value: "Naira (₦)" },
  { label: "Motto", value: "Unity and Faith, Peace and Progress" },
];

export const metadata = {
  title: "National Identity — Nigeria | Ministry of Foreign Affairs",
  description:
    "Discover Nigeria's national identity — the flag, coat of arms, national anthem and key facts about Africa's most populous nation.",
};

export default function NationalIdentityPage() {
  return (
    <>
      <PageHeader
        title="National Identity"
        crumbs={[
          { label: "Nigeria", href: "/nigeria" },
          { label: "National Identity" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
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
                  src="/images/mfa-logox.png"
                  alt="Nigeria Coat of Arms"
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
                  <Icon name="bell" className="h-5 w-5" />
                </span>
                <span className="text-xs leading-snug">
                  <strong className="block text-brand-deep">National Anthem</strong>
                  "Nigeria, We Hail Thee"
                </span>
              </li>
            </ul>

            <div className="mt-10 flex gap-3">
              <Link
                href="/nigeria/symbols"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
              >
                National Symbols
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/nigeria"
                className="inline-flex items-center gap-2 rounded border-2 border-brand px-5 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                About Nigeria
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
