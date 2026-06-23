import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Nigeria — People & Culture",
  description: "Nigeria's people, cultures, languages, music and traditions — a portrait of Africa's most diverse nation.",
};

const ethnicGroups = [
  { name: "Hausa-Fulani", region: "North", share: "~29%", known: "Islamic scholarship, cattle herding, textile weaving" },
  { name: "Yoruba", region: "Southwest", share: "~21%", known: "Urban culture, Afrobeats, Ifa divination system" },
  { name: "Igbo", region: "Southeast", share: "~18%", known: "Entrepreneurship, masquerade traditions, republican governance" },
  { name: "Ijaw", region: "Niger Delta", share: "~10%", known: "Water cultures, fishing communities, Ekine society" },
  { name: "Kanuri", region: "Northeast", share: "~4%", known: "Kanem-Bornu Empire heritage, Islamic scholarship" },
  { name: "Tiv", region: "Benue Valley", share: "~2.5%", known: "Agriculture, Kwagh-hir puppet theatre" },
  { name: "Ibibio / Efik", region: "Southeast", share: "~3.5%", known: "Masquerade traditions, palm oil trade, Ekpe society" },
  { name: "250+ other groups", region: "All regions", share: "~12%", known: "Extraordinary linguistic and cultural diversity" },
];

const artForms = [
  { icon: "bell" as const, title: "Afrobeats & Music", desc: "Nigeria is the birthplace of Afrobeats — now the defining sound of global popular music, from Burna Boy to Wizkid and Davido." },
  { icon: "document" as const, title: "Nollywood", desc: "Nigeria's film industry is the world's second-largest by volume, producing thousands of films annually and reaching audiences across Africa and the diaspora." },
  { icon: "shield" as const, title: "Visual Art & Sculpture", desc: "The ancient Nok terracottas, Benin bronzes and Ife bronzes are among the world's greatest works of art — many displayed in international museums." },
  { icon: "users" as const, title: "Masquerades", desc: "Masquerade traditions — Egungun (Yoruba), Mmanwu (Igbo), Ekpe (Efik) — remain living cultural institutions that govern community life." },
  { icon: "globe" as const, title: "Literature", desc: "Nigeria has produced some of Africa's greatest writers, including Wole Soyinka (Nobel Prize 1986), Chinua Achebe and Chimamanda Ngozi Adichie." },
  { icon: "flag" as const, title: "Textiles & Fashion", desc: "Aso-Oke, Ankara, Adire, Isiagu — Nigerian fashion blends traditional textile arts with a thriving contemporary design scene gaining global recognition." },
];

export default function NigeriaCulturePage() {
  return (
    <>
      <PageHeader
        title="People & Culture"
        lead="Over 250 ethnic groups, 500+ languages, one nation. Nigeria's extraordinary diversity is its greatest strength and most vivid characteristic."
        crumbs={[{ label: "Nigeria", href: "/nigeria" }, { label: "People & Culture" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Ethnic groups */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="A tapestry of peoples"
            title="Major Ethnic Groups"
            id="groups"
            icon="users"
            lead="Nigeria is home to over 250 distinct ethnic groups speaking more than 500 languages — the largest concentration of linguistic and cultural diversity in Africa."
          />
          <div className="mt-6 overflow-x-auto rounded border border-line shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Group</th>
                  <th className="px-4 py-3 text-left font-semibold">Region</th>
                  <th className="px-4 py-3 text-left font-semibold">Population share</th>
                  <th className="px-4 py-3 text-left font-semibold">Known for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {ethnicGroups.map((g) => (
                  <tr key={g.name} className="hover:bg-mist">
                    <td className="px-4 py-3 font-semibold text-brand-deep">{g.name}</td>
                    <td className="px-4 py-3 text-ink/75">{g.region}</td>
                    <td className="px-4 py-3 text-ink/75">{g.share}</td>
                    <td className="px-4 py-3 text-ink/70">{g.known}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Languages strip */}
        <section className="mb-14 rounded border border-line bg-mist p-8">
          <h2 className="mb-3 font-serif text-xl font-bold text-brand-deep">Language</h2>
          <p className="mb-4 text-sm leading-relaxed text-ink/85">
            Nigeria recognises English as its official language, a legacy of British colonisation that serves as the lingua franca of education, government and commerce. The three major indigenous languages — Hausa, Yoruba and Igbo — are recognised as national languages and taught in schools. The remaining 500+ languages represent an extraordinary heritage of human linguistic diversity, with several — including Fulfulde, Kanuri, Ibibio, Tiv and Ijaw — spoken by millions.
          </p>
          <div className="flex flex-wrap gap-2">
            {["English (official)", "Hausa", "Yoruba", "Igbo", "Fulfulde", "Kanuri", "Ibibio", "Tiv", "Ijaw", "Urhobo", "Edo", "Nupe"].map((l) => (
              <span key={l} className="rounded bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm ring-1 ring-line">{l}</span>
            ))}
          </div>
        </section>

        {/* Art & culture */}
        <section className="mb-14">
          <SectionHeading eyebrow="Arts & creative industries" title="Culture & Expression" id="arts" icon="globe" />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artForms.map((a) => (
              <li key={a.title} className="rounded border border-line bg-white p-5 shadow-sm">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={a.icon} className="h-5 w-5" />
                </span>
                <p className="mb-1.5 font-serif font-bold text-brand-deep">{a.title}</p>
                <p className="text-sm text-ink/75">{a.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/nigeria/tourism" className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
            Explore Tourism <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/nigeria" className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand">
            Back to Nigeria
          </Link>
        </div>
      </div>
    </>
  );
}
