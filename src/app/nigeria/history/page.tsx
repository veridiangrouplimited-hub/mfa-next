import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
export const metadata: Metadata = {
  title: "Nigeria — History",
  description: "The history of Nigeria — from ancient kingdoms to independence and the modern federation.",
};

const eras = [
  {
    period: "Before 1000 AD",
    title: "Ancient Civilisations",
    desc: "The Nok culture (500 BC – 200 AD) produces some of the earliest iron-smelting and terracotta sculptures in sub-Saharan Africa. The Jos Plateau region hosts one of the continent's oldest continuous settlements. The Kanem-Bornu Empire begins to take shape around Lake Chad.",
  },
  {
    period: "1000–1500",
    title: "Medieval Kingdoms & Trade",
    desc: "The Yoruba city-states of Ile-Ife and Oyo flourish as centres of art, governance and trans-Saharan commerce. The Hausa city-states — Kano, Katsina, Zaria, Daura — become major hubs of Islamic learning and trade. The Benin Kingdom reaches its artistic zenith, producing world-renowned bronze and ivory sculptures.",
  },
  {
    period: "1500–1800",
    title: "Atlantic Trade & Jihads",
    desc: "Contact with European traders transforms the economy of coastal regions. The transatlantic slave trade has a devastating impact on communities across the Niger Delta, Yorubaland and the Bight of Benin. The Fulani Jihad of 1804 led by Usman dan Fodio establishes the Sokoto Caliphate — the largest pre-colonial state in Africa — uniting much of northern Nigeria under a single Islamic administration.",
  },
  {
    period: "1800–1914",
    title: "British Colonisation",
    desc: "British merchants and the Royal Niger Company dominate trade along the Niger. In 1900 the British government assumes direct control, creating the Protectorate of Northern Nigeria and the Protectorate of Southern Nigeria. On January 1, 1914, Lord Frederick Lugard amalgamates the two protectorates and the Colony of Lagos into a single entity: Nigeria.",
  },
  {
    period: "1914–1960",
    title: "Colonial Era & Independence Movement",
    desc: "Nigerian nationalists — Nnamdi Azikiwe, Obafemi Awolowo, Ahmadu Bello — organise mass movements demanding self-governance. A series of constitutions (Richards 1946, Macpherson 1951, Lyttleton 1954) grant increasing autonomy. On October 1, 1960, Nigeria achieves full independence, with Sir Abubakar Tafawa Balewa as the first Prime Minister.",
  },
  {
    period: "1960–1979",
    title: "Republic, Civil War & Military Rule",
    desc: "Nigeria becomes a Federal Republic in 1963. Political crises lead to military coups in 1966. The secession declaration of the Republic of Biafra (1967) triggers a devastating civil war lasting until 1970. Under General Gowon's 'No victor, no vanquished' policy, reconstruction begins. Military governments alternate with civilian ones through the 1970s.",
  },
  {
    period: "1979–1999",
    title: "Democracy, Dictatorship & Struggle",
    desc: "The Second Republic under President Shagari (1979–1983) ends in another coup. Generals Buhari and Babangida govern through the 1980s. The annulment of the June 12, 1993 election — widely believed won by MKO Abiola — triggers a constitutional crisis. The Abacha dictatorship (1993–1998) leads to international isolation.",
  },
  {
    period: "1999–present",
    title: "Democratic Consolidation & Renewal",
    desc: "The Fourth Republic begins with Olusegun Obasanjo's election in 1999 — Nigeria's first peaceful transition from military to civilian rule. Successive elections in 2007, 2011, 2015, 2019 and 2023 consolidate democratic practice. The 2015 election — the first in which an incumbent president was defeated at the ballot box — is celebrated as a milestone for African democracy. President Bola Tinubu assumes office in 2023 with the Renewed Hope agenda.",
  },
];

export default function NigeriaHistoryPage() {
  return (
    <>
      <PageHeader
        title="History of Nigeria"
        lead="From the ancient Nok civilisation to the modern Federal Republic — Nigeria's history spans millennia of kingdoms, cultures and democratic aspiration."
        crumbs={[{ label: "Nigeria", href: "/nigeria" }, { label: "History" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="A nation's story"
          title="Through the Ages"
          id="timeline"
          icon="document"
        />

        <div className="relative mt-10">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand via-brand/40 to-transparent md:left-[140px] md:block" aria-hidden="true" />
          <ol className="space-y-10">
            {eras.map((era, i) => (
              <li key={era.period} className="md:grid md:grid-cols-[140px_1fr] md:gap-8">
                <div className="mb-3 flex items-start gap-4 md:mb-0 md:flex-col md:items-end md:pt-1">
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white shadow ring-4 ring-white">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold text-brand md:text-right">{era.period}</span>
                </div>
                <div className="rounded border border-line bg-white p-5 shadow-sm">
                  <h3 className="mb-2 font-serif text-base font-bold text-brand-deep">{era.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/80">{era.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/nigeria/culture" className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
            People & Culture <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/nigeria" className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand">
            Back to Nigeria
          </Link>
        </div>
      </div>
    </>
  );
}
