import { wpQuery, isWpConfigured, parseAcfDate } from "@/lib/wp";

export type NewsCategory =
  | "News"
  | "Press Release"
  | "Speech"
  | "Official Statement"
  | "Mission Activity";

export interface NewsImage {
  src: string;
  alt: string;
  credit: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string; // ISO date
  department: string;
  excerpt: string;
  body: string[];
  image: NewsImage;
}

export const newsCategories: NewsCategory[] = [
  "News",
  "Press Release",
  "Speech",
  "Official Statement",
  "Mission Activity",
];

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

// Static fallback — used when WORDPRESS_URL is not set or WP is unreachable.
export const news: NewsItem[] = [
  {
    slug: "minister-addresses-un-general-assembly",
    title: "Minister Odumegwu-Ojukwu Addresses 80th UN General Assembly",
    category: "Speech",
    date: "2026-09-23",
    department: "Office of the Minister",
    excerpt:
      "Nigeria's Minister of Foreign Affairs delivered a statement at the UN General Assembly High-Level Debate, calling for accelerated reform of the Security Council and a new global debt architecture.",
    body: [
      "The Honourable Minister of Foreign Affairs, Ambassador Bianca Odumegwu-Ojukwu, on Tuesday 23 September 2026 delivered Nigeria's national statement at the 80th session of the United Nations General Assembly High-Level Debate in New York.",
      "In her address, the Minister called for the urgent reform of the UN Security Council to ensure Africa's permanent and equitable representation, reiterating Nigeria's longstanding position that the continent of 1.4 billion people must not continue to be excluded from the permanent membership of the body that decides global peace and security.",
      "The Minister also urged developed nations and multilateral financial institutions to restructure the international debt architecture to free African economies from a cycle of unsustainable borrowing, and to deliver on the $100 billion climate finance commitment made to developing nations.",
      "Presenting Nigeria's 4D Foreign Policy Framework — anchored on Demography, Development, Diaspora and Democracy — the Minister described Nigeria's commitment to multilateralism as non-negotiable and called on all states to uphold the rule-based international order.",
    ],
    image: {
      src: unsplash("1540575467063-178a50c2df87"),
      alt: "A speaker addressing a large international assembly hall",
      credit: "Photo: Unsplash — placeholder, replace with official event photography",
    },
  },
  {
    slug: "nigeria-ecowas-security-summit",
    title: "Nigeria Chairs Emergency ECOWAS Summit on West Africa Security",
    category: "News",
    date: "2026-08-14",
    department: "Multilateral Affairs Department",
    excerpt:
      "President Tinubu convened an extraordinary ECOWAS Summit in Abuja to coordinate the regional response to deteriorating security conditions in the Sahel and Gulf of Guinea.",
    body: [
      "Nigeria, in its capacity as Chair of the ECOWAS Authority of Heads of State and Government, convened an extraordinary summit in Abuja on 14 August 2026 to address the escalating security crisis in the West Africa region.",
      "Attended by Heads of State and Government of ECOWAS member states, the summit reviewed ongoing threats from non-state armed groups, cross-border criminality and the humanitarian displacement of over 3 million persons in the Sahel sub-region.",
      "The summit adopted the Abuja Declaration on Regional Security, which commits member states to enhanced intelligence sharing, joint border management operations and an emergency humanitarian fund administered through the ECOWAS Commission.",
      "The Ministry of Foreign Affairs is coordinating Nigeria's contributions to the regional security response in close liaison with the Ministry of Defence and the National Security Adviser's office.",
    ],
    image: {
      src: unsplash("1521791136064-7986c2920216"),
      alt: "Heads of state at a formal summit meeting",
      credit: "Photo: Unsplash — placeholder, replace with official photography",
    },
  },
  {
    slug: "4d-doctrine-launch-statement",
    title: "Official Statement: Launch of Nigeria's 4D Foreign Policy Doctrine",
    category: "Official Statement",
    date: "2026-06-01",
    department: "Office of the Minister",
    excerpt:
      "The Federal Ministry of Foreign Affairs formally articulates the 4D Foreign Policy Framework — Demography, Development, Diaspora and Democracy — as the cornerstone of Nigeria's international engagement under the Renewed Hope agenda.",
    body: [
      "The Federal Ministry of Foreign Affairs announces the formal adoption of the 4D Foreign Policy Doctrine as the principal framework guiding Nigeria's engagement with the international community under the Renewed Hope agenda of President Bola Ahmed Tinubu, GCFR.",
      "The four pillars are: Demography — harnessing Nigeria's position as the world's sixth most populous country and home to Africa's largest economy as a source of geopolitical influence; Development — placing economic diplomacy, trade facilitation and foreign direct investment attraction at the centre of Nigeria's foreign engagement; Diaspora — treating the over 17 million Nigerians abroad as the fifth geopolitical zone and a bridge to global networks; and Democracy — championing democratic governance, rule of law and human rights as foundations of regional and global stability.",
      "This doctrine will inform Nigeria's positioning in all multilateral forums, bilateral negotiations and the programming of our global network of 109 diplomatic and consular missions.",
      "The Ministry invites the public to engage with the full text of the 4D Policy Framework, available on the Ministry's website.",
    ],
    image: {
      src: unsplash("1475721027785-f74eccf877e2"),
      alt: "Minister at a press podium addressing journalists",
      credit: "Photo: Unsplash — placeholder, replace with official photography",
    },
  },
  {
    slug: "diaspora-remittance-policy-initiative",
    title: "Ministry Launches Diaspora Remittance Facilitation Initiative",
    category: "Press Release",
    date: "2026-05-20",
    department: "Citizens & Diaspora Affairs Department",
    excerpt:
      "The Ministry of Foreign Affairs and the Central Bank of Nigeria announce a joint initiative to reduce remittance transfer costs for Nigerians abroad, targeting a reduction to under 3% by 2027.",
    body: [
      "The Ministry of Foreign Affairs, in partnership with the Central Bank of Nigeria (CBN) and the Nigerians in Diaspora Commission (NiDCOM), today announced the Diaspora Remittance Facilitation Initiative (DRFI).",
      "Nigeria receives over $20 billion in diaspora remittances annually — one of the largest flows in Africa — but transfer costs remain among the highest in the world at an average of 6.3%. The DRFI targets a reduction to below 3% by the end of 2027, consistent with the UN Sustainable Development Goal target on remittance costs.",
      "The initiative includes the designation of preferred service providers who meet cost and transparency benchmarks, a consumer awareness campaign through Nigerian missions worldwide, and a regulatory fast-track for new fintech entrants offering competitive rates.",
      "Nigerians abroad are encouraged to check the Ministry's website for updates on participating service providers and to report excessively high charges through their nearest Nigerian mission.",
    ],
    image: {
      src: unsplash("1529156069898-49953e39b3ac"),
      alt: "A person at a computer transferring money digitally",
      credit: "Photo: Unsplash — placeholder",
    },
  },
  {
    slug: "nigeria-au-security-council-chair",
    title: "Nigeria Assumes Chair of AU High-Level Committee on UN Security Council Reform",
    category: "News",
    date: "2026-04-05",
    department: "Multilateral Affairs Department",
    excerpt:
      "Nigeria has assumed the chairmanship of the African Union's High-Level Committee on the Reform of the United Nations Security Council, a position that reflects Nigeria's continental leadership role.",
    body: [
      "The Minister of Foreign Affairs announced on 5 April 2026 that Nigeria has formally assumed the Chair of the African Union High-Level Committee on the Reform of the United Nations Security Council (C10).",
      "The C10 coordinates Africa's common position, known as the Ezulwini Consensus, which demands two permanent and five non-permanent seats for Africa on a reformed Security Council, with permanent seats carrying full veto powers.",
      "As Chair, Nigeria will convene meetings of African foreign ministers and lead Africa's engagement with the Intergovernmental Negotiations process at the UN, which has entered a critical phase with broad support from the General Assembly's membership.",
      "The Ministry of Foreign Affairs views this chairmanship as a direct expression of the 4D Doctrine's commitment to multilateral leadership and to advancing Africa's interests in global governance.",
    ],
    image: {
      src: unsplash("1556761175-5973dc0f32e7"),
      alt: "African heads of state at a multilateral summit meeting",
      credit: "Photo: Unsplash — placeholder",
    },
  },
  {
    slug: "investment-summit-communique",
    title: "Communiqué — Nigeria International Investment Summit 2026",
    category: "Press Release",
    date: "2026-03-18",
    department: "Economic Diplomacy & Trade Department",
    excerpt:
      "Over 2,000 investors from 54 countries attended the Nigeria International Investment Summit in Abuja, with investment commitments exceeding $12 billion recorded across priority sectors.",
    body: [
      "The Federal Government of Nigeria, led by the Ministry of Finance and supported by the Ministry of Foreign Affairs, hosted the Nigeria International Investment Summit (NIIS) 2026 in Abuja from 16–17 March 2026.",
      "The summit convened over 2,000 investors, institutional leaders and government officials from 54 countries. Across two days of panel sessions, business matching and bilateral meetings, investment commitments totalling $12.4 billion were recorded across the priority sectors of energy, agribusiness, digital infrastructure, housing and manufacturing.",
      "The Ministry of Foreign Affairs facilitated the participation of foreign investors through its global network of missions, which served as pre-summit briefing centres and investment promotion hubs in the lead-up to the event.",
      "The Ministry's Department of Economic Diplomacy & Trade is the primary point of contact for foreign investors seeking government-to-government facilitation. Interested parties may write to invest@foreignaffairs.gov.ng.",
    ],
    image: {
      src: unsplash("1488646953014-85cb44e25828"),
      alt: "Business delegates networking at a large investment conference",
      credit: "Photo: Unsplash — placeholder, replace with event photography",
    },
  },
];

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── WordPress ────────────────────────────────────────────────────────────────

type WPNewsItem = {
  slug: string;
  title: string;
  newsArticleFields: {
    category: NewsCategory;
    newsDate: string;
    department: string;
    excerpt: string;
    body: { text: string }[];
    image: { node: { sourceUrl: string; altText: string } } | null;
    imageCredit: string;
  };
};

const NEWS_QUERY = /* GraphQL */ `
  query GetNews {
    newsArticles(
      first: 100
      where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        slug
        title
        newsArticleFields {
          category
          newsDate
          department
          excerpt
          body { text }
          image { node { sourceUrl altText } }
          imageCredit
        }
      }
    }
  }
`;

function mapNewsItem(wp: WPNewsItem): NewsItem {
  const f = wp.newsArticleFields;
  return {
    slug: wp.slug,
    title: wp.title,
    category: f.category,
    date: parseAcfDate(f.newsDate),
    department: f.department,
    excerpt: f.excerpt,
    body: f.body.map((b) => b.text),
    image: {
      src: f.image?.node.sourceUrl ?? "",
      alt: f.image?.node.altText ?? "",
      credit: f.imageCredit,
    },
  };
}

export async function getNews(): Promise<NewsItem[]> {
  if (!isWpConfigured()) return news;
  try {
    const data = await wpQuery<{ newsArticles: { nodes: WPNewsItem[] } }>(NEWS_QUERY);
    return data.newsArticles.nodes.map(mapNewsItem);
  } catch {
    return news;
  }
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
  const all = await getNews();
  return all.find((n) => n.slug === slug);
}
