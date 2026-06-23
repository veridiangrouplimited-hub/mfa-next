import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Our History",
  description: "The history of Nigeria's Ministry of Foreign Affairs — from independence to the 21st century.",
};

type Era = { period: string; title: string; milestones: string[] };

const eras: Era[] = [
  {
    period: "1960–1966",
    title: "Independence & the First Republic",
    milestones: [
      "October 1, 1960: Nigeria attains independence from British rule; the Ministry of External Affairs is established.",
      "1960: Nigeria joins the United Nations as its 99th member state.",
      "1963: Nigeria becomes a Federal Republic; diplomatic missions begin to open across Africa, Europe and the Americas.",
      "The Balewa government establishes the principle of African solidarity and non-interference in African affairs.",
    ],
  },
  {
    period: "1967–1979",
    title: "Civil War & Post-War Rebuilding",
    milestones: [
      "1967–1970: The Nigerian Civil War (Biafra) tests Nigeria's diplomatic alliances; Britain and USSR supply the Federal Government; France and others back secessionists.",
      "1970: Post-war reconciliation diplomacy under Gowon's 'No victor, no vanquished' policy.",
      "1975: General Murtala Mohammed pursues assertive Pan-African diplomacy; Nigeria recognises the MPLA government in Angola against US wishes.",
      "1976: The Ministry is renamed Ministry of Foreign Affairs. Nigeria plays a leading role in founding ECOWAS.",
      "1979: Return to civilian rule; Shagari government continues active engagement in African liberation movements.",
    ],
  },
  {
    period: "1980–1998",
    title: "Multilateralism & Regional Leadership",
    milestones: [
      "1980s: Nigeria becomes a major contributor to UN peacekeeping operations across Africa.",
      "1990: Nigeria leads the ECOWAS Monitoring Group (ECOMOG) intervention in Liberia — Nigeria's largest peacekeeping deployment.",
      "1993: Military annulment of election results leads to international isolation and sanctions.",
      "1994–1998: Abacha era — Nigeria suspended from the Commonwealth after the execution of Ken Saro-Wiwa; diplomatic isolation deepens.",
    ],
  },
  {
    period: "1999–2014",
    title: "Democratic Renewal & Economic Diplomacy",
    milestones: [
      "1999: Return to civilian democratic governance under President Olusegun Obasanjo; sanctions lifted, Commonwealth membership restored.",
      "2000: Nigeria re-engages the international community; Paris Club debt resolution begins.",
      "2003: Nigeria hosts the AU Summit in Abuja; takes a founding leadership role in NEPAD.",
      "2005: The Obasanjo government secures $18 billion Paris Club debt write-off — a landmark economic diplomacy achievement.",
      "2011: Nigeria secures a non-permanent seat on the UN Security Council for the 2010–2011 term.",
      "2013–2014: Nigeria declared Africa's largest economy after GDP rebasing; economic diplomacy takes centre stage.",
    ],
  },
  {
    period: "2015–2022",
    title: "Buhari Era & Anti-Corruption Diplomacy",
    milestones: [
      "2015: President Buhari assumes office; foreign policy refocused on security cooperation, anti-corruption asset recovery, and African integration.",
      "2017: Nigeria-UK Asset Recovery MOU — first formal bilateral framework for returning looted funds.",
      "2018: Nigeria assumes the chair of the African Continental Free Trade Area (AfCFTA) negotiations.",
      "2019: Nigeria ratifies the AfCFTA; work begins on implementing the agreement across 54 African nations.",
      "2021: Nigeria and the Benin Republic launch the cross-border economic cooperation framework (Seme corridor).",
    ],
  },
  {
    period: "2023–present",
    title: "Renewed Hope: The 4D Doctrine",
    milestones: [
      "2023: President Bola Ahmed Tinubu assumes office; Amb. Yusuf Maitama Tuggar appointed Honourable Minister of Foreign Affairs.",
      "November 4, 2024: Ambassador Bianca Odumegwu-Ojukwu sworn in as Honourable Minister of Foreign Affairs.",
      "2024: The 4D Foreign Policy Framework — Demography, Development, Diaspora, Democracy — adopted as the cornerstone of Nigeria's foreign engagement.",
      "2024: Nigeria leads the ECOWAS response to the West Africa security crisis; diplomatic engagement with Sahel states intensified.",
      "2025: Nigeria chairs the African Union High-Level Committee on the Reform of the UN Security Council.",
    ],
  },
];

const firstFSOs = [
  "Olumide O. Omololu", "John N. Ukaegbu", "C. C. Chukwura", "Leslie Harriman",
  "Chuks O. Ifeagwu", "M. A. Sanusi", "D. C. Igwe", "Prince Adedokun Haastrup",
  "E. Omotayo Ogunsulire", "Philip C. Asiodu", "John Garba", "Soji Williams",
];

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="Our History"
        lead="From Nigeria's independence in 1960 to the present day — six decades of diplomacy, leadership and engagement on the world stage."
        crumbs={[{ label: "About", href: "/about" }, { label: "History" }]}
      />

      {/* Background & establishment */}
      <div className="mx-auto max-w-4xl px-4 pt-12 md:pt-16">
        <div className="prose prose-sm max-w-none space-y-4 text-ink/85 md:text-base">
          <p>
            The Ministry of Foreign Affairs was established in 1961, shortly after Nigeria gained
            independence. Initially a small unit within the office of Prime Minister Tafawa Balewa
            (1957), it became the Department of External Affairs and was led by Dr. Jaja Wachukwu.
            The department started with a staff of twelve officers, who became the first generation
            of Nigerian Foreign Service Officers.
          </p>
          <p>
            In 1963, Nigeria became a republic and the Ministry of External Affairs was formally
            established. During its early years, Nigeria's foreign policy focused on African unity,
            independence and non-interference — seeking to become a regional leader and advocate
            for peaceful resolutions to conflicts.
          </p>
          <p>
            In 1989, the Ministry was officially renamed the <strong>Ministry of Foreign Affairs</strong>.
            Today, with a growing emphasis on economic diplomacy, the Ministry seeks to attract foreign
            investment, promote Nigeria's economic interests and drive development through its network
            of 109 missions worldwide.
          </p>
        </div>

        {/* First 12 FSOs */}
        <div className="mt-8 rounded border border-line bg-mist p-6">
          <h2 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold text-brand-deep">
            <Icon name="users" className="h-5 w-5 text-brand" />
            The First 12 Foreign Service Officers (1961)
          </h2>
          <p className="mb-4 text-sm text-ink/70">
            The founding officers who became the first generation of Nigeria's diplomatic corps:
          </p>
          <ol className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {firstFSOs.map((name, i) => (
              <li key={name} className="flex items-center gap-2 text-sm text-ink/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                {name}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="Since 1960"
          title="The Ministry Through the Ages"
          id="timeline"
          icon="document"
          lead="The Ministry of Foreign Affairs has shaped Nigeria's place in the world through every era — from the first days of independence to the bold diplomacy of the Renewed Hope agenda."
        />

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand via-brand/50 to-transparent md:left-[160px] md:block" aria-hidden="true" />
          <ol className="space-y-12">
            {eras.map((era, i) => (
              <li key={era.period} className="md:grid md:grid-cols-[160px_1fr] md:gap-8">
                <div className="mb-3 flex items-start gap-4 md:mb-0 md:flex-col md:items-end md:pt-1">
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white shadow ring-4 ring-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-bold text-brand md:text-right">{era.period}</span>
                </div>
                <div className="rounded border border-line bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-serif text-lg font-bold text-brand-deep">{era.title}</h3>
                  <ul className="space-y-2">
                    {era.milestones.map((m, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink/85">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ministers cross-link */}
      <section className="border-t border-line bg-mist px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 rounded border border-line bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-serif text-lg font-bold text-brand-deep">List of All Foreign Ministers</h2>
              <p className="mt-0.5 text-sm text-ink/65">
                Every Minister of Foreign Affairs since Tafawa Balewa — 8 eras, 29 appointments.
              </p>
            </div>
          </div>
          <Link
            href="/about/ministers"
            className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep"
          >
            View Full List <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12">
          <div>
            <h2 className="font-serif text-2xl font-bold">Explore the Ministry's Work Today</h2>
            <p className="mt-2 max-w-lg text-sm text-white/85">
              Learn about our mandate, our global network of missions and the 4D Doctrine shaping Nigeria's foreign policy.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark">
              About the Ministry
            </Link>
            <Link href="/policy" className="rounded border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Foreign Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
