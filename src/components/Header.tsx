"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, navigation } from "@/lib/site";
import Icon from "@/components/Icon";
import { FlagMark } from "@/components/FlagStripe";
import NationalSymbolsModal from "@/components/NationalSymbolsModal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close mega on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mega on route change
  useEffect(() => {
    setOpenMega(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 shadow-md">

      {/* Utility bar */}
      <div className="hidden bg-brand-dark text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          {/* Left: social icons + email */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   className="text-white/70 transition-colors hover:text-gold">
                  <Icon name={s.icon as "facebook" | "x" | "instagram" | "youtube"} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            <span className="h-3.5 w-px bg-white/25" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-white">
              <Icon name="mail" className="h-3 w-3 text-gold" />
              {site.email}
            </a>
          </div>
          {/* Right: quick links + Paperless button */}
          <div className="flex items-center gap-5">
            <nav className="flex items-center gap-5" aria-label="Quick links">
              <Link href="/press" className="text-white/75 transition-colors hover:text-white">Press Releases</Link>
              <Link href="/services/visa-passports" className="text-white/75 transition-colors hover:text-white">Visa &amp; Passports</Link>
              <Link href="/the-atrium" className="text-white/75 transition-colors hover:text-white">The Atrium</Link>
              <Link href="/travel-advisory" className="text-white/75 transition-colors hover:text-white">Travel Advisories</Link>
            </nav>
            <a
              href="https://mfa.1gov.ng/selfservice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white px-3 py-1 font-semibold text-brand-dark transition-colors hover:bg-white/90"
            >
              <Icon name="grid" className="h-3 w-3" />
              Paperless Service Portal
            </a>
          </div>
        </div>
      </div>

      {/* Identity band */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3.5">
            <NationalSymbolsModal
              trigger={(openModal) => (
                <button
                  type="button"
                  onClick={openModal}
                  className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  title="Nigeria's national symbols"
                  aria-label="Open national symbols"
                >
                  <Image
                    src="/images/mfa-logox.png"
                    alt="Coat of Arms — Federal Republic of Nigeria"
                    width={80}
                    height={80}
                    className="h-16 w-16 object-contain md:h-[80px] md:w-[80px]"
                    priority
                  />
                </button>
              )}
            />
            <Link href="/" className="min-w-0 border-l-2 border-gold/60 pl-3.5">
              <span className="block truncate font-serif text-lg font-bold leading-tight text-brand md:text-[1.45rem]">
                {site.missionName}
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/65 md:text-[11px]">
                Federal Republic of Nigeria
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <form action="/search" role="search" className="hidden items-center xl:flex">
              <label htmlFor="header-search" className="sr-only">Search</label>
              <input
                id="header-search"
                name="q"
                type="search"
                placeholder="Search…"
                className="w-52 rounded-l border border-line px-3 py-2 text-sm placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded-r border border-brand bg-brand p-2 text-white hover:bg-brand-deep"
                aria-label="Search"
              >
                <Icon name="search" className="h-5 w-5" />
              </button>
            </form>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="rounded border border-line p-2 text-brand lg:hidden"
            >
              <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary nav bar */}
      <nav aria-label="Primary" className="border-t border-white/10 bg-brand">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="hidden lg:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);
              const hasMega = !!item.mega;
              const isOpen = openMega === item.label;

              return (
                <li key={item.href} className="relative">
                  {hasMega ? (
                    <button
                      type="button"
                      onClick={() => setOpenMega(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      className={`flex items-center gap-1 px-3.5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep ${
                        active || isOpen ? "bg-brand-dark shadow-[inset_0_-3px_0_0_#e3b339]" : ""
                      }`}
                    >
                      {item.label}
                      <Icon
                        name="chevron"
                        className={`h-3.5 w-3.5 opacity-80 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3.5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep ${
                        active ? "bg-brand-dark shadow-[inset_0_-3px_0_0_#e3b339]" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega-menu panel */}
                  {hasMega && isOpen && item.mega && (
                    <div
                      className={`absolute left-0 top-full z-50 mt-0 w-max rounded-b border-t-[3px] border-gold bg-white shadow-2xl ring-1 ring-black/5 ${
                        item.mega.columns.length >= 4 ? "min-w-[960px]" :
                        item.mega.columns.length === 3 ? "min-w-[780px]" : "min-w-[620px]"
                      }`}
                      role="region"
                      aria-label={`${item.label} submenu`}
                    >
                      <div className={`grid gap-0 ${
                        item.mega.featured && item.mega.columns.length === 1
                          ? "grid-cols-[1fr_220px]"
                          : item.mega.featured && item.mega.columns.length === 2
                          ? "grid-cols-[1fr_1fr_220px]"
                          : item.mega.columns.length >= 4
                          ? "grid-cols-4"
                          : item.mega.columns.length === 3
                          ? "grid-cols-3"
                          : "grid-cols-2"
                      }`}>
                        {item.mega.columns.map((col) => (
                          <div key={col.title} className="border-r border-line/60 px-3 py-4">
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                              {col.title}
                            </p>
                            <ul className="space-y-1">
                              {col.items.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setOpenMega(null)}
                                    className="group flex items-start gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-mist"
                                  >
                                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                                      <Icon name={child.icon} className="h-3.5 w-3.5" />
                                    </span>
                                    <span>
                                      <span className="block text-sm font-semibold text-ink group-hover:text-brand">
                                        {child.label}
                                      </span>
                                      <span className="block text-[11px] leading-tight text-ink/60">
                                        {child.desc}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Featured panel — only for 2-column menus */}
                        {item.mega.featured && item.mega.columns.length <= 2 && (
                          <div className="flex flex-col justify-between bg-brand px-5 py-5">
                            <div>
                              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded bg-white/15 text-white">
                                <Icon name={item.mega.featured.icon} className="h-5 w-5" />
                              </span>
                              <p className="mb-2 font-serif text-sm font-bold text-white">
                                {item.mega.featured.label}
                              </p>
                              <p className="text-[11px] leading-relaxed text-white/80">
                                {item.mega.featured.desc}
                              </p>
                            </div>
                            <Link
                              href={item.mega.featured.href}
                              onClick={() => setOpenMega(null)}
                              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:underline"
                            >
                              {item.mega.featured.cta}
                              <Icon name="arrow" className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="max-h-[75vh] overflow-y-auto border-t border-brand-deep bg-brand lg:hidden"
          >
            <form action="/search" role="search" className="flex items-center gap-2 px-4 pt-4">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <input
                id="mobile-search"
                name="q"
                type="search"
                placeholder="Search this website…"
                className="w-full rounded border border-brand-deep bg-white px-3 py-2 text-sm"
              />
              <button type="submit" className="rounded bg-gold p-2 text-brand-dark" aria-label="Search">
                <Icon name="search" className="h-5 w-5" />
              </button>
            </form>
            <ul className="px-2 py-3">
              {navigation.map((item) => {
                const expanded = mobileExpanded === item.label;
                return (
                  <li key={item.href} className="border-b border-brand-deep/60 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block flex-1 px-3 py-3 font-semibold text-white"
                      >
                        {item.label}
                      </Link>
                      {item.mega && (
                        <button
                          type="button"
                          onClick={() => setMobileExpanded(expanded ? null : item.label)}
                          aria-expanded={expanded}
                          className="px-3 py-3 text-white/70"
                          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        >
                          <Icon
                            name="chevron"
                            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    {item.mega && expanded && (
                      <ul className="pb-2 pl-4">
                        {item.mega.columns.flatMap((col) =>
                          col.items.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-white/85 hover:text-white"
                              >
                                <Icon name={child.icon} className="h-4 w-4 shrink-0 text-gold" />
                                {child.label}
                              </Link>
                            </li>
                          ))
                        )}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="px-4 pb-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded bg-white/10 px-4 py-3 text-sm font-bold text-white border border-white/20"
              >
                <Icon name="mail" className="h-4 w-4" />
                Contact the Ministry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
