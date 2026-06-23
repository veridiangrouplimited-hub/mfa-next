"use client";

import { useState } from "react";
import Icon, { type IconName } from "@/components/Icon";

type Zone =
  | "North Central"
  | "North East"
  | "North West"
  | "South East"
  | "South South"
  | "South West";

// Alphabetical order — first item is the default selection
const ZONES: Zone[] = [
  "North Central",
  "North East",
  "North West",
  "South East",
  "South South",
  "South West",
];

const zoneColour: Record<Zone, { pill: string; activePill: string; badge: string }> = {
  "North Central": {
    pill:       "border-lime-200   bg-lime-50   text-lime-800   hover:border-lime-400",
    activePill: "border-lime-600   bg-lime-600   text-white",
    badge:      "bg-lime-50 text-lime-800 border-lime-200",
  },
  "North East": {
    pill:       "border-orange-200 bg-orange-50 text-orange-800 hover:border-orange-400",
    activePill: "border-orange-600 bg-orange-600 text-white",
    badge:      "bg-orange-50 text-orange-800 border-orange-200",
  },
  "North West": {
    pill:       "border-amber-200  bg-amber-50  text-amber-800  hover:border-amber-400",
    activePill: "border-amber-600  bg-amber-600  text-white",
    badge:      "bg-amber-50 text-amber-800 border-amber-200",
  },
  "South East": {
    pill:       "border-sky-200    bg-sky-50    text-sky-800    hover:border-sky-400",
    activePill: "border-sky-600    bg-sky-600    text-white",
    badge:      "bg-sky-50 text-sky-800 border-sky-200",
  },
  "South South": {
    pill:       "border-teal-200   bg-teal-50   text-teal-800   hover:border-teal-400",
    activePill: "border-teal-600   bg-teal-600   text-white",
    badge:      "bg-teal-50 text-teal-800 border-teal-200",
  },
  "South West": {
    pill:       "border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400",
    activePill: "border-emerald-600 bg-emerald-600 text-white",
    badge:      "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
};

const destinations: {
  icon: IconName;
  name: string;
  state: string;
  zone: Zone;
  type: string;
  desc: string;
}[] = [
  {
    icon: "flag",
    name: "Aso Rock & Abuja Monumental District",
    state: "FCT, Abuja",
    zone: "North Central",
    type: "Architecture",
    desc: "The iconic 400-metre granite monolith that dominates Nigeria's capital skyline, flanked by the National Mosque, National Church, Nigerian National Assembly and the Presidential Villa — the nerve centre of the republic.",
  },
  {
    icon: "map",
    name: "Zuma Rock",
    state: "Niger State",
    zone: "North Central",
    type: "Natural Wonder",
    desc: "A breathtaking monolithic outcrop rising 725 metres above sea level — one of Nigeria's most recognisable natural landmarks. The distinctive human-face formation visible on its face has made it a near-mythic symbol of the North Central region.",
  },
  {
    icon: "document",
    name: "Lokoja — Confluence of Rivers Niger & Benue",
    state: "Kogi State",
    zone: "North Central",
    type: "Historic Site",
    desc: "Nigeria's first capital city sits at the confluence of the mighty Niger and Benue rivers — a site of profound historical and geographic significance. Lugard House, Mount Patti and the old colonial residences recall the origins of modern Nigeria.",
  },
  {
    icon: "plane",
    name: "Yankari National Park",
    state: "Bauchi State",
    zone: "North East",
    type: "Wildlife",
    desc: "Nigeria's premier wildlife sanctuary — home to elephants, lions, baboons, hippos and over 350 bird species. At its heart lie the warm Wikki Springs, natural pools of crystal-clear water emerging from ancient rock formations.",
  },
  {
    icon: "building",
    name: "Gashaka Gumti National Park",
    state: "Taraba / Adamawa States",
    zone: "North East",
    type: "Wildlife",
    desc: "Nigeria's largest national park and one of West Africa's last pristine wilderness areas — rugged highlands, chimpanzee habitats, and sweeping Sahel landscapes stretching to the Cameroon border.",
  },
  {
    icon: "shield",
    name: "Kano Old City & Emir's Palace",
    state: "Kano State",
    zone: "North West",
    type: "Heritage",
    desc: "One of West Africa's oldest continuously inhabited cities, Kano's ancient walls, bustling Kurmi Market and the Emir's Palace are living testaments to a thousand years of Islamic scholarship, trade and Hausa culture.",
  },
  {
    icon: "users",
    name: "Argungu International Fishing Festival",
    state: "Kebbi State",
    zone: "North West",
    type: "Culture & Festival",
    desc: "Africa's most spectacular fishing festival — held annually on the banks of the Sokoto River since 1934. Thousands of bare-handed fishermen compete simultaneously, drawing royalty, dignitaries and tourists from across the world.",
  },
  {
    icon: "globe",
    name: "Obudu Mountain Resort",
    state: "Cross River State",
    zone: "South East",
    type: "Nature & Adventure",
    desc: "Perched atop the Obudu Plateau at 1,576 metres, this mountain resort offers an extraordinary escape into mist-draped highlands, cable cars, canopy walks and cool temperatures rarely associated with West Africa.",
  },
  {
    icon: "document",
    name: "Igbo-Ukwu Archaeological Site",
    state: "Anambra State",
    zone: "South East",
    type: "Archaeology",
    desc: "The site of one of Africa's most significant archaeological discoveries — 9th-century bronze castings of extraordinary sophistication, predating European contact. The Igbo-Ukwu bronzes at the National Museum reveal a highly advanced pre-colonial civilisation.",
  },
  {
    icon: "building",
    name: "Benin City Royal Palace & Bronzes",
    state: "Benin City, Edo State",
    zone: "South South",
    type: "Heritage",
    desc: "The Oba's Palace at the heart of Benin City is the living seat of one of Africa's greatest ancient kingdoms. The original site of the world-renowned Benin Bronzes, the city's museum and guild districts preserve an extraordinary artistic tradition.",
  },
  {
    icon: "users",
    name: "Calabar Heritage & Carnival",
    state: "Cross River State",
    zone: "South South",
    type: "Heritage & Festival",
    desc: "Home to the Old Residency Museum, the Slave History Museum and the Calabar Carnival — Africa's largest street festival drawing over two million visitors each December.",
  },
  {
    icon: "map",
    name: "Opa Oranmiyan",
    state: "Ile-Ife, Osun State",
    zone: "South West",
    type: "Heritage",
    desc: "A towering granite obelisk standing over 5 metres tall, believed to be the staff of the Yoruba ancestor Oranmiyan — one of the most sacred monuments in Yorubaland and a symbol of the ancient Oyo and Benin empires.",
  },
  {
    icon: "globe",
    name: "Olumo Rock",
    state: "Abeokuta, Ogun State",
    zone: "South West",
    type: "Natural Wonder",
    desc: "A massive granite outcrop rising 137 metres above the city of Abeokuta, which served as a fortress for the Egba people during 19th-century wars. Cable cars, walkways and panoramic city views make it a must-visit landmark.",
  },
  {
    icon: "shield",
    name: "Osun-Osogbo Sacred Grove",
    state: "Osogbo, Osun State",
    zone: "South West",
    type: "UNESCO World Heritage",
    desc: "A UNESCO World Heritage Site — a sacred rainforest on the banks of the Osun River, adorned with sculptures, shrines and artworks dedicated to the Yoruba river goddess Osun. The annual Osun Festival draws hundreds of thousands of pilgrims.",
  },
  {
    icon: "plane",
    name: "Lagos — Bar Beach, Victoria Island & Lekki",
    state: "Lagos State",
    zone: "South West",
    type: "Urban & Coastal",
    desc: "Africa's most dynamic megacity — world-class restaurants and galleries on Victoria Island, the contemporary art scene of Lekki, the Lekki Conservation Centre canopy walkway, and vibrant nightlife that has made Lagos a global cultural capital.",
  },
];

export default function TourismDestinations() {
  const [active, setActive] = useState<Zone>(ZONES[0]);

  const filtered = destinations.filter((d) => d.zone === active);
  const colours  = zoneColour[active];

  return (
    <section className="mb-14">
      {/* Zone pill filters */}
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by geopolitical zone">
        {ZONES.map((zone) => {
          const count = destinations.filter((d) => d.zone === zone).length;
          const isActive = zone === active;
          const c = zoneColour[zone];
          return (
            <button
              key={zone}
              type="button"
              onClick={() => setActive(zone)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-all ${
                isActive ? c.activePill + " shadow-md" : c.pill
              }`}
            >
              {zone}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                  isActive ? "bg-white/25 text-white" : "bg-black/10"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result count */}
      <p className="mb-5 text-sm text-ink/55">
        Showing <strong className="text-ink">{filtered.length}</strong> destination{filtered.length !== 1 ? "s" : ""} in the{" "}
        <strong className="text-ink">{active}</strong> zone
      </p>

      {/* Destination cards */}
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <li
            key={d.name}
            className="group flex flex-col rounded-xl border border-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start gap-3 border-b border-line px-5 pt-5 pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-serif text-sm font-bold leading-snug text-brand-deep">{d.name}</p>
                <p className="mt-0.5 text-xs text-ink/50">{d.state}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col px-5 py-4">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand">
                  {d.type}
                </span>
                <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${colours.badge}`}>
                  {d.zone}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-ink/70">{d.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
