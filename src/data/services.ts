import { wpQuery, isWpConfigured } from "@/lib/wp";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface FeeRow {
  item: string;
  amount: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  overview: string[];
  eligibility: string[];
  requirements: string[];
  process: string[];
  fees: FeeRow[];
  feesNote: string;
  processingTime: string[];
  faqs: ServiceFaq[];
  forms: { label: string; href: string }[];
  externalLinks: { label: string; href: string }[];
}

// Static fallback — used when WORDPRESS_URL is not set or WP is unreachable.
export const services: Service[] = [
  {
    slug: "document-authentication",
    title: "Document Authentication",
    icon: "seal",
    summary:
      "Apostille, notarisation and legalisation of Nigerian public documents for use abroad — and foreign documents for use in Nigeria.",
    overview: [
      "The Ministry authenticates official documents so they can be recognised by authorities in Nigeria or abroad. Nigeria is a signatory to the Hague Apostille Convention (1961).",
      "Documents intended for use in another Hague member country can be given an Apostille certificate by the Federal Ministry of Justice in Abuja. For non-Hague countries, full consular legalisation at the relevant embassy is required.",
    ],
    eligibility: [
      "Holders of Nigerian public documents intended for official use abroad.",
      "Holders of foreign documents intended for official use in Nigeria.",
      "Companies requiring authentication of commercial and trade documents.",
    ],
    requirements: [
      "Original document, plus one photocopy.",
      "Prior legalisation by the issuing country's foreign ministry, as applicable.",
      "Valid identification of the applicant.",
      "Completed authentication request form.",
      "Evidence of payment of the prescribed fee.",
    ],
    process: [
      "Confirm that the document carries the required prior legalisation.",
      "Complete the authentication request form and pay the prescribed fee.",
      "Submit the original document and copies at the nearest mission's consular section.",
      "Collect the authenticated document on the date indicated on your submission slip.",
    ],
    fees: [
      { item: "Authentication, per document (personal)", amount: "US$40" },
      { item: "Authentication, per document (commercial)", amount: "US$80" },
      { item: "Apostille certificate", amount: "Per Federal Ministry of Justice schedule" },
    ],
    feesNote: "Fees are payable per document and are non-refundable once processing begins.",
    processingTime: ["3–5 working days from submission of complete documents."],
    faqs: [
      {
        q: "What is the difference between apostille and legalisation?",
        a: "An apostille is a simplified form of authentication used between Hague Convention countries. Full legalisation is required for countries outside the Hague Convention.",
      },
      {
        q: "Does the Ministry verify the content of documents?",
        a: "Authentication confirms the authenticity of the signature and seal of the issuing authority. It does not certify the truth of a document's contents.",
      },
    ],
    forms: [{ label: "Authentication request form (PDF)", href: "#" }],
    externalLinks: [
      { label: "Federal Ministry of Justice — Apostille", href: "https://justice.gov.ng" },
    ],
  },
  {
    slug: "consular-assistance",
    title: "Consular Assistance",
    icon: "shield",
    summary:
      "Emergency support for Nigerians in distress abroad — arrest, hospitalisation, bereavement, lost documents and repatriation.",
    overview: [
      "The Ministry of Foreign Affairs provides consular protection and welfare assistance to Nigerian citizens worldwide through its network of embassies, high commissions and consulates.",
      "Consular officers can visit detained citizens, liaise with local authorities, help contact family in Nigeria, issue Emergency Travel Certificates and provide guidance in emergencies.",
    ],
    eligibility: [
      "All Nigerian citizens abroad, whether resident or visiting.",
      "Family members in Nigeria seeking welfare confirmation of a relative abroad.",
    ],
    requirements: [
      "Any available identification of the affected citizen.",
      "Details of the situation — location, authorities involved, case or reference numbers.",
      "Contact details of next of kin, where relevant.",
    ],
    process: [
      "Contact the nearest Nigerian mission by phone or email — use the 24-hour emergency line for urgent cases.",
      "Provide the citizen's details and the nature of the emergency.",
      "A consular officer is assigned and advises on the next steps.",
      "The mission liaises with local authorities and family as appropriate.",
    ],
    fees: [{ item: "Consular welfare assistance", amount: "Free of charge" }],
    feesNote:
      "Welfare assistance is free. Costs ordered by third parties — legal fees, medical bills, repatriation costs — remain the responsibility of the citizen or family.",
    processingTime: ["Emergency cases are attended to immediately, 24 hours a day."],
    faqs: [
      {
        q: "A relative has been arrested abroad. What can the Mission do?",
        a: "With the citizen's consent, consular officers can visit them in detention, monitor their welfare, provide a list of local lawyers and keep family informed. The Mission cannot secure release from lawful custody.",
      },
      {
        q: "A Nigerian has died abroad. Who do we contact?",
        a: "Contact the nearest Nigerian mission immediately. The mission will guide the family through documentation for local burial or repatriation of remains.",
      },
    ],
    forms: [],
    externalLinks: [
      { label: "NiDCOM — Nigerians in Diaspora Commission", href: "https://nidcom.gov.ng" },
    ],
  },
  {
    slug: "diaspora",
    title: "Diaspora Engagement",
    icon: "users",
    summary:
      "Services for Nigerians living and working abroad — community registration, dual citizenship, diaspora investment and welfare.",
    overview: [
      "The Ministry of Foreign Affairs treats over 17 million Nigerians living abroad as a strategic national asset — the fifth geopolitical zone of Nigeria — under the 4D Foreign Policy Doctrine.",
      "Through its global network of missions, the Ministry offers a range of services to keep Nigerians connected to their homeland and empowered as ambassadors for national development.",
    ],
    eligibility: [
      "Nigerian citizens living or working abroad.",
      "Nigerians who have naturalised abroad and wish to retain Nigerian citizenship.",
      "Nigerian diaspora organisations and community groups.",
    ],
    requirements: [
      "Valid Nigerian passport or proof of Nigerian citizenship.",
      "Proof of residence in the country of registration.",
      "For dual citizenship applications: naturalisation certificate of the second country.",
    ],
    process: [
      "Register with the nearest Nigerian mission to access diaspora services.",
      "For dual citizenship: submit a formal application with the required documents.",
      "For investment enquiries: contact the mission's trade and investment section.",
    ],
    fees: [
      { item: "Community registration", amount: "Free" },
      { item: "Dual citizenship guidance", amount: "Per mission schedule" },
    ],
    feesNote: "Most diaspora engagement services are provided free of charge.",
    processingTime: ["Registration: same day. Dual citizenship processing: varies."],
    faqs: [
      {
        q: "Can I retain my Nigerian citizenship if I naturalise abroad?",
        a: "Section 28 of the Nigerian Constitution allows Nigerian citizens to retain their citizenship upon naturalisation in certain countries. Contact the nearest mission for guidance.",
      },
    ],
    forms: [{ label: "Community registration form (PDF)", href: "#" }],
    externalLinks: [
      { label: "NiDCOM — Nigerians in Diaspora Commission", href: "https://nidcom.gov.ng" },
    ],
  },
  {
    slug: "travel-advisory",
    title: "Travel Advisory",
    icon: "plane",
    summary:
      "Official safety and travel advisories for Nigerian citizens travelling abroad, updated regularly by the Ministry.",
    overview: [
      "The Ministry of Foreign Affairs issues travel advisories to inform Nigerian citizens of safety and security conditions in countries worldwide.",
      "Advisories are classified on a four-level scale: Normal (Level 1), Caution (Level 2), Reconsider (Level 3), and Do Not Travel (Level 4).",
    ],
    eligibility: [
      "All Nigerian citizens planning or currently travelling abroad.",
      "Nigerian businesses with operations or staff abroad.",
    ],
    requirements: [],
    process: [
      "Check the Ministry's travel advisory page before planning travel.",
      "Register with the nearest Nigerian mission when in-country.",
      "Monitor updates during your stay and follow the advice of the mission and local authorities.",
    ],
    fees: [{ item: "Travel advisories", amount: "Free — publicly available" }],
    feesNote: "",
    processingTime: ["Advisories are updated as security situations evolve."],
    faqs: [
      {
        q: "Where can I find the latest advisories?",
        a: "Advisories are published on the Ministry's official website at foreignaffairs.gov.ng and through the nearest Nigerian mission.",
      },
    ],
    forms: [],
    externalLinks: [
      { label: "Ministry of Foreign Affairs", href: "https://foreignaffairs.gov.ng" },
    ],
  },
];

// ── WordPress ────────────────────────────────────────────────────────────────

type WPService = {
  slug: string;
  title: string;
  serviceFields: {
    icon: string;
    summary: string;
    overview: { text: string }[];
    eligibility: { text: string }[];
    requirements: { text: string }[];
    process: { text: string }[];
    fees: { item: string; amount: string }[];
    feesNote: string;
    processingTime: { text: string }[];
    faqs: { q: string; a: string }[];
    forms: { label: string; href: string }[];
    externalLinks: { label: string; href: string }[];
  };
};

const SERVICES_QUERY = /* GraphQL */ `
  query GetServices {
    services(
      first: 100
      where: { status: PUBLISH, orderby: { field: MENU_ORDER, order: ASC } }
    ) {
      nodes {
        slug
        title
        serviceFields {
          icon
          summary
          overview { text }
          eligibility { text }
          requirements { text }
          process { text }
          fees { item amount }
          feesNote
          processingTime { text }
          faqs { q a }
          forms { label href }
          externalLinks { label href }
        }
      }
    }
  }
`;

function mapService(wp: WPService): Service {
  const f = wp.serviceFields;
  return {
    slug: wp.slug,
    title: wp.title,
    icon: f.icon,
    summary: f.summary,
    overview: f.overview.map((r) => r.text),
    eligibility: f.eligibility.map((r) => r.text),
    requirements: f.requirements.map((r) => r.text),
    process: f.process.map((r) => r.text),
    fees: f.fees,
    feesNote: f.feesNote,
    processingTime: f.processingTime.map((r) => r.text),
    faqs: f.faqs,
    forms: f.forms,
    externalLinks: f.externalLinks,
  };
}

export async function getServices(): Promise<Service[]> {
  if (!isWpConfigured()) return services;
  try {
    const data = await wpQuery<{ services: { nodes: WPService[] } }>(SERVICES_QUERY);
    return data.services.nodes.map(mapService);
  } catch {
    return services;
  }
}

export async function getService(slug: string): Promise<Service | undefined> {
  const all = await getServices();
  return all.find((s) => s.slug === slug);
}
