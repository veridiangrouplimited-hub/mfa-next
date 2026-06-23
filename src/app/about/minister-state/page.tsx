import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Honourable Minister of State for Foreign Affairs",
  description: "Profile of the Honourable Minister of State for Foreign Affairs, Federal Republic of Nigeria.",
};

export default function MinisterStatePage() {
  return (
    <>
      <PageHeader
        title="Honourable Minister of State"
        lead="Honourable Minister of State for Foreign Affairs, Federal Republic of Nigeria."
        crumbs={[{ label: "About", href: "/about" }, { label: "Minister of State" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 text-center">
        <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Icon name="users" className="h-10 w-10" />
        </span>
        <h2 className="mb-3 font-serif text-2xl font-bold text-brand-deep">To Be Announced</h2>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-ink/60">
          The profile of the Honourable Minister of State for Foreign Affairs will be published here once announced.
        </p>
      </section>
    </>
  );
}
