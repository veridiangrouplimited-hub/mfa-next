import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Nigeria — National Symbols",
  description: "Nigeria's national symbols — the flag, coat of arms, anthem, seal, currency and public holidays.",
};

export default function NigeriaSymbolsPage() {
  return (
    <>
      <PageHeader
        title="National Symbols"
        lead="The emblems, colours and words that unite 220 million Nigerians — symbols of sovereignty, identity and shared aspiration."
        crumbs={[{ label: "Nigeria", href: "/nigeria" }, { label: "National Symbols" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 space-y-14">

        {/* Flag */}
        <section id="flag">
          <SectionHeading eyebrow="National symbol" title="The National Flag" id="flag-heading" icon="flag" />
          <div className="mt-6 flex flex-wrap items-center gap-10">
            <div aria-label="Nigerian flag: two green vertical stripes with a white stripe in the middle" className="flex h-40 w-64 overflow-hidden rounded shadow-md ring-1 ring-black/10 shrink-0">
              <div className="flex-1 bg-brand" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-brand" />
            </div>
            <div className="max-w-lg">
              <p className="text-sm leading-relaxed text-ink/85">
                Designed by Michael Taiwo Akinkunmi and adopted on October 1, 1960, Nigeria's national flag consists of three equal vertical bands: green, white and green. The green represents Nigeria's abundant natural wealth and forests; the white represents peace and unity. The flag bears no coat of arms or other emblem, making it one of the simplest and most distinctive national flags in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Coat of Arms */}
        <section id="coat-of-arms">
          <SectionHeading eyebrow="National symbol" title="The Coat of Arms" id="coat-heading" icon="shield" />
          <div className="mt-6 rounded border border-line bg-white p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-sm leading-relaxed text-ink/85">Nigeria's coat of arms was adopted on May 20, 1960. Its elements carry deep symbolic meaning:</p>
                <ul className="space-y-2 text-sm text-ink/85">
                  {[
                    { symbol: "Black shield", meaning: "Nigeria's fertile soil and rich land" },
                    { symbol: "Silver wavy lines (Y-shape)", meaning: "The Niger and Benue rivers meeting at Lokoja" },
                    { symbol: "Eagle", meaning: "Strength of the nation" },
                    { symbol: "Red flowers (Costus spectabilis)", meaning: "Nigeria's national flower" },
                    { symbol: "Two white horses", meaning: "Dignity and pride as supporters" },
                    { symbol: "Green and white wreath", meaning: "Nigeria's agricultural wealth" },
                    { symbol: '"Unity and Faith, Peace and Progress"', meaning: "Nigeria's national motto" },
                  ].map((item) => (
                    <li key={item.symbol} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span><strong className="text-brand-deep">{item.symbol}</strong> — {item.meaning}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center rounded bg-mist p-8">
                <div className="text-center text-ink/50">
                  <Icon name="shield" className="mx-auto h-20 w-20 text-brand/30" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide">Coat of Arms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anthem */}
        <section id="anthem">
          <SectionHeading eyebrow="National symbol" title="The National Anthem" id="anthem-heading" icon="bell" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded border border-line bg-white p-6 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand">Current Anthem (restored 2024)</p>
              <h3 className="mb-4 font-serif text-lg font-bold text-brand-deep">"Nigeria, We Hail Thee"</h3>
              <div className="space-y-4 border-l-4 border-gold pl-5 text-sm leading-relaxed text-ink/80 italic">
                <p>Nigeria, we hail thee,<br />Our own dear native land,<br />Though tribe and tongue may differ,<br />In brotherhood we stand,<br />Nigerians all, and proud to serve<br />Our sovereign Motherland.</p>
                <p>Our flag shall be a symbol<br />That truth and justice reign,<br />In peace or battle honour'd,<br />And this we count as gain,<br />To hand on to our children<br />A banner without stain.</p>
                <p>O God of all creation,<br />Grant this our one request,<br />Help us to build a nation<br />Where no man is oppressed,<br />And so with peace and plenty<br />Nigeria may be blessed.</p>
              </div>
            </div>
            <div className="rounded border border-line bg-mist p-6 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink/50">Historical note</p>
              <p className="text-sm leading-relaxed text-ink/80">
                "Nigeria, We Hail Thee" was the original national anthem from 1960 until 1978, when it was replaced by "Arise O Compatriots." In 2024, President Bola Tinubu signed legislation restoring the original anthem, reconnecting the nation with its independence-era roots. The original anthem was written by Lillian Jean Williams, a British expatriate, and set to music by Frances Berda.
              </p>
            </div>
          </div>
        </section>

        {/* Other symbols */}
        <section id="other">
          <SectionHeading eyebrow="Other national symbols" title="More Symbols" id="other-heading" icon="document" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "National Flower", value: "Costus spectabilis (Yellow Trumpet)", icon: "globe" },
              { label: "National Animal", value: "Eagle (on the coat of arms)", icon: "shield" },
              { label: "National Currency", value: "Naira (₦)", icon: "briefcase" },
              { label: "National Day", value: "October 1 (Independence Day)", icon: "flag" },
              { label: "National Motto", value: "Unity and Faith, Peace and Progress", icon: "scale" },
              { label: "Head of State", value: "President Bola Ahmed Tinubu GCFR", icon: "users" },
              { label: "Capital", value: "Abuja, Federal Capital Territory", icon: "building" },
              { label: "Official Language", value: "English", icon: "document" },
            ].map((s) => (
              <li key={s.label} className="rounded border border-line bg-white p-4 shadow-sm">
                <Icon name={s.icon as "globe"} className="mb-2 h-5 w-5 text-brand" />
                <p className="text-[10px] font-bold uppercase tracking-wide text-ink/50">{s.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-brand-deep">{s.value}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/nigeria" className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand">
            Back to Nigeria
          </Link>
          <Link href="/nigeria/history" className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
            History of Nigeria <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
