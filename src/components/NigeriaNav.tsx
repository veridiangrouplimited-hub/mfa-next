"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Overview",          href: "/nigeria" },
  { label: "History",           href: "/nigeria/history" },
  { label: "People & Culture",  href: "/nigeria/culture" },
  { label: "Economy",           href: "/nigeria/economy" },
  { label: "Tourism",           href: "/nigeria/tourism" },
  { label: "National Symbols",  href: "/nigeria/symbols" },
  { label: "National Identity", href: "/nigeria/national-identity" },
];

export default function NigeriaNav() {
  const path = usePathname();

  return (
    <div className="sticky top-0 z-30 border-b border-line bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <nav
          aria-label="Nigeria section navigation"
          className="no-scrollbar flex gap-1 overflow-x-auto"
        >
          {links.map((l) => {
            const active =
              l.href === "/nigeria" ? path === "/nigeria" : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative shrink-0 px-4 py-3.5 text-sm font-semibold transition-colors whitespace-nowrap ${
                  active
                    ? "text-brand after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand"
                    : "text-ink/60 hover:text-brand"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
