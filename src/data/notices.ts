import { wpQuery, isWpConfigured, parseAcfDate } from "@/lib/wp";

export type NoticePriority =
  | "Urgent"
  | "Important"
  | "Advisory"
  | "Service Update"
  | "Holiday Notice";

export interface Notice {
  id: string;
  title: string;
  priority: NoticePriority;
  date: string; // ISO date
  body: string[];
}

export const noticePriorities: NoticePriority[] = [
  "Urgent",
  "Important",
  "Advisory",
  "Service Update",
  "Holiday Notice",
];

// Static fallback — used when WORDPRESS_URL is not set or WP is unreachable.
export const notices: Notice[] = [
  {
    id: "biometric-system-maintenance",
    title: "Scheduled Maintenance of Passport Biometric Capture System",
    priority: "Service Update",
    date: "2026-06-10",
    body: [
      "The Nigeria Immigration Service will carry out scheduled maintenance of the e-passport biometric capture system on Saturday 20 June 2026 from 08:00 to 17:00 (WAT).",
      "Applicants with appointments on that date will be contacted individually to reschedule at no additional cost. All other Ministry services will operate normally. For enquiries, contact consular@foreignaffairs.gov.ng.",
    ],
  },
  {
    id: "new-appointment-system",
    title: "New Online Appointment System for Consular Services",
    priority: "Service Update",
    date: "2026-06-01",
    body: [
      "The Ministry of Foreign Affairs, through its global network of missions, has introduced a unified online appointment booking system for consular services, including passport capture, document authentication and consular assistance.",
      "From 15 June 2026, all consular service requests must be booked through the Ministry's website or through the relevant mission's portal. Walk-in visits are accepted only for declared emergencies. Book your appointment at foreignaffairs.gov.ng or contact info@foreignaffairs.gov.ng.",
    ],
  },
  {
    id: "beware-fraudulent-agents",
    title: "Warning: Beware of Fraudulent Visa and Passport Agents",
    priority: "Important",
    date: "2026-05-22",
    body: [
      "The Ministry of Foreign Affairs is aware of individuals, websites and social media accounts falsely claiming to offer expedited Nigerian visa and passport processing services in exchange for a fee.",
      "All Nigerian passport and visa applications are submitted exclusively through official Nigeria Immigration Service portals. Neither the Ministry nor any Nigerian mission engages agents or middlemen. No third party can influence or accelerate processing. Report any such solicitation to info@foreignaffairs.gov.ng or call +234 803 000 0001.",
    ],
  },
  {
    id: "eid-holiday-closure",
    title: "Public Holiday Closure — Eid-el-Kabir",
    priority: "Holiday Notice",
    date: "2026-05-26",
    body: [
      "The Ministry of Foreign Affairs headquarters in Abuja and all Nigerian missions worldwide will be closed on Wednesday 27 May 2026 in observance of the Eid-el-Kabir public holiday. Normal services resume on Thursday 28 May 2026.",
      "For emergencies involving Nigerian citizens abroad during the closure, please contact the 24-hour emergency line of your nearest Nigerian mission. The Ministry's emergency coordination line is +234 803 000 0001.",
    ],
  },
  {
    id: "un-security-council-statement",
    title: "Advisory: Nigeria's Position on UN Security Council Reform",
    priority: "Advisory",
    date: "2026-05-05",
    body: [
      "In line with the African Union's Ezulwini Consensus, Nigeria reaffirms its position that Africa must be granted two permanent seats and five non-permanent seats on a reformed UN Security Council, with full veto rights for permanent members.",
      "Members of the public and media seeking official statements on the Ministry's positions on multilateral affairs may contact the Department of Multilateral Affairs at multilateral@foreignaffairs.gov.ng.",
    ],
  },
  {
    id: "passport-collection-deadline",
    title: "Uncollected Passports at Nigerian Missions — Collection Deadline",
    priority: "Important",
    date: "2026-04-18",
    body: [
      "Applicants whose passports were processed before 1 March 2026 and have not yet been collected from Nigerian missions abroad are requested to collect them on or before 31 July 2026.",
      "To collect, bring your original submission receipt and a valid means of identification. Passports uncollected after the deadline will be returned to the Nigeria Immigration Service in Abuja in accordance with existing regulations. Contact the relevant mission's consular section for collection enquiries.",
    ],
  },
];

// ── WordPress ────────────────────────────────────────────────────────────────

type WPNotice = {
  slug: string;
  title: string;
  noticeFields: {
    priority: NoticePriority;
    noticeDate: string;
    body: { text: string }[];
  };
};

const NOTICES_QUERY = /* GraphQL */ `
  query GetNotices {
    notices(first: 100, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        slug
        title
        noticeFields {
          priority
          noticeDate
          body { text }
        }
      }
    }
  }
`;

function mapNotice(wp: WPNotice): Notice {
  return {
    id: wp.slug,
    title: wp.title,
    priority: wp.noticeFields.priority,
    date: parseAcfDate(wp.noticeFields.noticeDate),
    body: wp.noticeFields.body.map((b) => b.text),
  };
}

export async function getNotices(): Promise<Notice[]> {
  if (!isWpConfigured()) return notices;
  try {
    const data = await wpQuery<{ notices: { nodes: WPNotice[] } }>(NOTICES_QUERY);
    return data.notices.nodes.map(mapNotice);
  } catch {
    return notices;
  }
}
