import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Nigeria — Tourism",
  description: "Discover Nigeria's natural wonders, heritage sites, national parks and cultural destinations.",
};

const destinations: { icon: IconName; name: string; state: string; type: string; desc: string }[] = [
  { icon: "globe", name: "Olusegun Obasanjo Presidential Library", state: "Ogun State", type: "Heritage", desc: "A vast cultural and presidential library complex celebrating Nigeria's democratic journey." },
  { icon: "map", name: "Yankari National Park", state: "Bauchi State", type: "Wildlife", desc: "Nigeria's premier wildlife sanctuary — home to elephants, lions, hippos and over 350 bird species, centred on the warm Wikki Springs." },
  { icon: "flag", name: "Aso Rock & Abuja Monumental District", state: "FCT Abuja", type: "Architecture", desc: "The iconic granite rock formation dominating Abuja's skyline, surrounded by the National Mosque, National Church and Federal Secretariat." },
  { icon: "shield", name: "Benin City Royal Palace & Bronzes", state: "Edo State", type: "Heritage", desc: "The ancient Benin Kingdom's royal court and the original site of the world-renowned Benin Bronzes — a living heritage of one of Africa's greatest civilisations." },
  { icon: "users", name: "Osun-Osogbo Sacred Grove", state: "Osun State", type: "UNESCO World Heritage", desc: "A UNESCO World Heritage Site — a sacred forest on the banks of the Osun River, filled with sculptures, shrines and artworks dedicated to the Yoruba goddess Osun." },
  { icon: "plane", name: "Lagos Bar Beach & Victoria Island", state: "Lagos State", type: "Urban", desc: "Africa's most dynamic city offers world-class restaurants, nightlife, beaches, contemporary art galleries and the Lekki Conservation Centre." },
  { icon: "document", name: "Zuma Rock", state: "Niger State", type: "Natural Wonder", desc: "A massive monolithic outcrop rising 725 metres above sea level — one of Nigeria's most recognisable natural landmarks, visible from Abuja." },
  { icon: "building", name: "Calabar Heritage Sites", state: "Cross River State", type: "Heritage", desc: "Old Residency Museum, Calabar Slave History Museum and the annual Calabar Carnival — Africa's largest street party." },
];

const practicalInfo = [
  { label: "Entry", value: "Visa on Arrival available for eligible nationalities" },
  { label: "Best time to visit", value: "November – March (dry season)" },
  { label: "Currency", value: "Nigerian Naira (₦)" },
  { label: "Time zone", value: "WAT (UTC+1)" },
  { label: "International airports", value: "Lagos, Abuja, Port Harcourt, Kano" },
  { label: "Driving", value: "Right-hand traffic" },
];

export default function NigeriaTourismPage() {
  return (
    <>
      <PageHeader
        title="Tourism in Nigeria"
        lead="From sacred Yoruba forests to savanna wildlife parks, from ancient Benin bronzes to the electric energy of Lagos — Nigeria is one of Africa's most compelling destinations."
        crumbs={[{ label: "Nigeria", href: "/nigeria" }, { label: "Tourism" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Destinations */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Must-see destinations"
            title="Top Attractions"
            id="destinations"
            icon="map"
            lead="A selection of Nigeria's most significant cultural, natural and historical destinations across the country's six geopolitical zones."
          />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <li key={d.name} className="flex flex-col rounded border border-line bg-white p-5 shadow-sm">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <span className="mb-0.5 inline-block rounded bg-brand/8 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand">{d.type}</span>
                <p className="mb-1 font-serif font-bold text-brand-deep">{d.name}</p>
                <p className="mb-2 text-xs text-ink/50">{d.state}</p>
                <p className="flex-1 text-sm text-ink/70">{d.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Practical info */}
        <section className="mb-14">
          <SectionHeading eyebrow="Planning your visit" title="Practical Information" id="practical" icon="plane" />
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practicalInfo.map((p) => (
              <div key={p.label} className="rounded border border-line bg-white p-4 shadow-sm">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/50">{p.label}</dt>
                <dd className="mt-1 font-semibold text-brand-deep">{p.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Visa CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded border border-line bg-mist p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Plan Your Visit to Nigeria</h2>
            <p className="mt-1 text-sm text-ink/80">Apply for a visa to Nigeria or get information on entry requirements through the nearest Nigerian mission.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/visa-passports" className="rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
              Visa Information
            </Link>
            <Link href="/missions" className="rounded border border-line bg-white px-6 py-3 text-sm font-bold text-ink hover:border-brand hover:text-brand">
              Find a Mission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
