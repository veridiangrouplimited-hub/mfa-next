import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { getNews } from "@/data/news";
import { site } from "@/lib/site";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "News & Updates",
  description: `Latest news, speeches, official statements and updates from the ${site.missionName}.`,
};

export default async function NewsPage() {
  const items = await getNews();
  return (
    <>
      <PageHeader
        title="News & Updates"
        lead="The latest news, speeches and official updates from the Ministry of Foreign Affairs, Federal Republic of Nigeria."
        crumbs={[{ label: "Press Center", href: "/press" }, { label: "News & Updates" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <NewsClient items={items} />
      </div>
    </>
  );
}
