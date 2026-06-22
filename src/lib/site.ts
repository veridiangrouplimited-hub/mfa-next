/**
 * Central site configuration — Ministry of Foreign Affairs, Federal Republic of Nigeria.
 * Update this file when organisational details change; no page content needs editing.
 */

export const site = {
  missionName: "Ministry of Foreign Affairs",
  missionShortName: "MFA Nigeria",
  hostCountry: "Nigeria",
  city: "Abuja",
  address: "Maputo Street, Zone 3, Wuse, Abuja, FCT",
  email: "info@foreignaffairs.gov.ng",
  phones: ["+234 9 523 5000", "+234 9 523 5001"],
  emergencyPhone: "+234 803 000 0001",

  ministers: {
    foreign: {
      name: "Ambassador Bianca Odumegwu-Ojukwu",
      shortName: "Amb. Bianca Odumegwu-Ojukwu",
      title: "Honourable Minister of Foreign Affairs",
      swornIn: "April 29, 2026",
      portrait: {
        src: "/images/minister.png",
        alt: "Official portrait of Ambassador Bianca Odumegwu-Ojukwu, Honourable Minister of Foreign Affairs",
      },
    },
    state: {
      name: "Ambassador Bianca Odumegwu-Ojukwu",
      shortName: "Amb. Bianca Odumegwu-Ojukwu",
      title: "Honourable Minister",
      swornIn: "November 4, 2024",
      portrait: {
        src: "/images/minister-state.png",
        alt: "Official portrait of the Honourable Minister",
      },
    },
  },

  officeHours: [
    { days: "Monday – Friday", hours: "8:00 am – 4:00 pm" },
    { days: "Consular desk", hours: "9:00 am – 1:00 pm" },
  ],

  url: "https://foreignaffairs.gov.ng",

  social: [
    { label: "Facebook", href: "https://facebook.com/NigeriaMFA", icon: "facebook" },
    { label: "X (Twitter)", href: "https://x.com/NigeriaMFA", icon: "x" },
    { label: "Instagram", href: "https://instagram.com/nigeriamfa", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com/@NigeriaMFA", icon: "youtube" },
  ],
};

export const govLinks = [
  { label: "State House — The Presidency", href: "https://statehouse.gov.ng" },
  { label: "Nigeria Immigration Service", href: "https://immigration.gov.ng" },
  { label: "NiDCOM — Diaspora Commission", href: "https://nidcom.gov.ng" },
  { label: "NIPC — Investment Promotion", href: "https://nipc.gov.ng" },
  { label: "Nigeria Customs Service", href: "https://customs.gov.ng" },
];

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the Ministry", href: "/about" },
      { label: "Honourable Minister", href: "/about/minister" },
      { label: "Honourable Minister of State", href: "/about/minister-state" },
      { label: "Ministry History", href: "/about/history" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Mandate & Structure", href: "/about/mandate" },
    ],
  },
  {
    label: "Missions",
    href: "/missions",
    children: [
      { label: "All Missions", href: "/missions" },
      { label: "Africa", href: "/missions?region=africa" },
      { label: "Americas", href: "/missions?region=americas" },
      { label: "Asia Pacific", href: "/missions?region=asia" },
      { label: "Europe", href: "/missions?region=europe" },
      { label: "Middle East", href: "/missions?region=middle-east" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Visa & Passports", href: "/services/visa-passports" },
      { label: "Document Authentication", href: "/services/document-authentication" },
      { label: "Consular Assistance", href: "/services/consular-assistance" },
      { label: "Diaspora Engagement", href: "/services/diaspora" },
      { label: "Travel Advisory", href: "/services/travel-advisory" },
    ],
  },
  {
    label: "Policy",
    href: "/policy",
    children: [
      { label: "Foreign Policy Overview", href: "/policy" },
      { label: "4D Doctrine", href: "/policy#4d" },
      { label: "Bilateral Relations", href: "/policy/bilateral" },
      { label: "Multilateral Engagement", href: "/policy/multilateral" },
      { label: "Economic Diplomacy", href: "/policy/economic" },
    ],
  },
  { label: "Press", href: "/press" },
  {
    label: "Nigeria",
    href: "/nigeria",
    children: [
      { label: "About Nigeria", href: "/nigeria" },
      { label: "History", href: "/nigeria/history" },
      { label: "People & Culture", href: "/nigeria/culture" },
      { label: "Economy & Investment", href: "/nigeria/economy" },
      { label: "Tourism", href: "/nigeria/tourism" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
