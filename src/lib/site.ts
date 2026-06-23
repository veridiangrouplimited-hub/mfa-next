/**
 * Central site configuration — Ministry of Foreign Affairs, Federal Republic of Nigeria.
 */

import type { IconName } from "@/components/Icon";

export const site = {
  missionName: "Ministry of Foreign Affairs",
  missionShortName: "MFA Nigeria",
  hostCountry: "Nigeria",
  city: "Abuja",
  address: "Tafewa Balewa House, Central Business District, Abuja, FCT",
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

export interface MegaItem {
  label: string;
  href: string;
  icon: IconName;
  desc: string;
}

export interface MegaColumn {
  title: string;
  items: MegaItem[];
}

export interface MegaFeatured {
  label: string;
  desc: string;
  href: string;
  cta: string;
  icon: IconName;
}

export interface NavItem {
  label: string;
  href: string;
  mega?: {
    columns: MegaColumn[];
    featured?: MegaFeatured;
  };
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    mega: {
      columns: [
        {
          title: "Who We Are",
          items: [
            { label: "Overview",              href: "/about",              icon: "building",  desc: "Who we are and what we do" },
            { label: "Mandate, Mission & Vision", href: "/about/mandate", icon: "scale",     desc: "Our statutory mandate and guiding purpose" },
            { label: "Core Values",           href: "/about/core-values",  icon: "flag",      desc: "The five values that guide our work" },
          ],
        },
        {
          title: "Structure & History",
          items: [
            { label: "Departments & Units",           href: "/about/departments",          icon: "building",  desc: "Our 13 specialised departments" },
            { label: "Agencies & Parastatals",        href: "/about/agencies",             icon: "globe",     desc: "Affiliated bodies and institutions" },
            { label: "History of Nigeria's MFA",      href: "/about/history",              icon: "document",  desc: "Decades of Nigerian diplomacy" },
            { label: "List of All Foreign Ministers", href: "/about/ministers",             icon: "users",     desc: "All Foreign Ministers since 1960" },
          ],
        },
        {
          title: "Leadership",
          items: [
            { label: "Honourable Minister of Foreign Affairs", href: "/about/minister",               icon: "users",  desc: "Amb. Bianca Odumegwu-Ojukwu" },
            { label: "Honourable Minister of State",           href: "/about/minister-state",          icon: "users",  desc: "Minister of State for Foreign Affairs" },
            { label: "Permanent Secretary",                    href: "/about/permanent-secretary",     icon: "shield", desc: "Senior career civil servant" },
          ],
        },
      ],
    },
  },
  {
    label: "Nigeria",
    href: "/nigeria",
    mega: {
      columns: [
        {
          title: "Discover Nigeria",
          items: [
            { label: "History of Nigeria",  href: "/nigeria/history",            icon: "document",  desc: "From independence to today" },
            { label: "Natural Resources",   href: "/nigeria#resources",          icon: "globe",     desc: "Nigeria's natural endowments" },
            { label: "Investment",          href: "/nigeria/economy",            icon: "briefcase", desc: "The business case for Nigeria" },
            { label: "The People",          href: "/nigeria/culture",            icon: "users",     desc: "250+ ethnic groups, one people" },
          ],
        },
        {
          title: "Experience Nigeria",
          items: [
            { label: "Culture",             href: "/nigeria/culture",            icon: "flag",      desc: "Nigeria's rich cultural heritage" },
            { label: "Tourism",             href: "/nigeria/tourism",            icon: "plane",     desc: "Destinations, heritage and travel" },
            { label: "National Symbols",    href: "/nigeria/symbols",            icon: "shield",    desc: "Coat of arms, flag and anthem" },
            { label: "National Identity",   href: "/nigeria/national-identity",  icon: "map",       desc: "Nigeria at a glance — facts and symbols" },
          ],
        },
      ],
      featured: {
        label: "Africa's Giant",
        desc: "Over 220 million people, 36 states, and a $450 billion economy — discover Nigeria.",
        href: "/nigeria",
        cta: "Explore Nigeria",
        icon: "globe",
      },
    },
  },
  {
    label: "Policy",
    href: "/policy",
    mega: {
      columns: [
        {
          title: "4D Foreign Policies",
          items: [
            { label: "4D Brief",             href: "/policy",            icon: "globe",     desc: "Overview of the 4D doctrine" },
            { label: "Activities",           href: "/policy#activities", icon: "briefcase", desc: "Policy activities and programmes" },
            { label: "Download 4D Brochure", href: "https://drive.google.com/file/d/14DuDfaZxERN8j_hC9LD90yMePXxutgrB/view?pli=1", icon: "download", desc: "Download the official brochure" },
          ],
        },
        {
          title: "Issues",
          items: [
            { label: "All Issues", href: "/policy#issues", icon: "scale", desc: "All foreign policy issues" },
          ],
        },
      ],
      featured: {
        label: "Renewed Hope Agenda",
        desc: "Nigeria's foreign policy driving the President's Renewed Hope agenda for all Nigerians.",
        href: "/policy",
        cta: "Explore foreign policy",
        icon: "shield",
      },
    },
  },
  {
    label: "Services",
    href: "/services",
    mega: {
      columns: [
        {
          title: "Document Authentication",
          items: [
            { label: "Birth Certificates",       href: "/services/document-authentication", icon: "document", desc: "Birth certificate legalisation" },
            { label: "Child Adoption Documents", href: "/services/document-authentication", icon: "document", desc: "Adoption document services" },
            { label: "End User Certificates",    href: "/services/document-authentication", icon: "seal",     desc: "End user certificate processing" },
            { label: "Marriage Certificates",    href: "/services/document-authentication", icon: "document", desc: "Marriage certificate services" },
          ],
        },
        {
          title: "Visa & Consular",
          items: [
            { label: "Document Authentication", href: "/services/document-authentication", icon: "seal", desc: "Apostille, notarisation and legalisation of documents" },
            { label: "Consular Services", href: "/services/consular-assistance", icon: "shield", desc: "Consular assistance for Nigerians abroad" },
          ],
        },
      ],
      featured: {
        label: "Emergency Assistance",
        desc: "If you are a Nigerian in distress abroad, contact the nearest mission or our 24-hour line.",
        href: "/services/consular-assistance",
        cta: "Get help now",
        icon: "alert",
      },
    },
  },
  {
    label: "Press Center",
    href: "/news",
    mega: {
      columns: [
        {
          title: "Media Centre",
          items: [
            { label: "News & Updates",  href: "/news",            icon: "newspaper", desc: "Latest news and updates from the Ministry" },
            { label: "Press Releases",  href: "/press",           icon: "quote",     desc: "Official press releases and statements" },
            { label: "Public Notices",  href: "/public-notices",  icon: "bell",      desc: "Formal notices and advisories to the public" },
          ],
        },
      ],
      featured: {
        label: "MFA Press Centre",
        desc: "News, ministerial statements, press releases and public notices from Nigeria's Federal Ministry of Foreign Affairs.",
        href: "/news",
        cta: "Browse all news",
        icon: "newspaper",
      },
    },
  },
  { label: "Diplomatic Missions", href: "/missions" },
  { label: "Contact", href: "/contact" },
];
