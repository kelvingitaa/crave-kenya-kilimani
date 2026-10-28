import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageTitle, price } from "@/components/site";
import { menu, restaurant as r } from "@/lib/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: `Menu — ${r.fullName}` },
      { name: "description", content: "Fluffy buttermilk pancakes, monster burgers, loaded fries, fresh seafood pasta and handcrafted cocktails at Crave Kenya Kilimani." },
      { property: "og:title", content: `The Menu at ${r.fullName}` },
      { property: "og:description", content: "Eclectic comfort food, all-day brunch, gourmet grills and cocktails." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const cats = [...new Set(menu.map((d) => d.category))];
  return (
    <Page>
      <PageTitle kicker="Eclectic Kitchen & Bar" title={<>The Menu.</>}>
        Prepared fresh daily with bold flavors, generous portions, and something for every craving. Ask your server for chef specials and happy hour cocktail features.
      </PageTitle>
      <div className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        {cats.map((c) => (
          <section key={c} className="grid gap-6 border-t py-10 md:grid-cols-12">
            <h2 className="text-2xl font-display md:col-span-3 text-clay">{c}</h2>
            <ul className="md:col-span-9">
              {menu.filter((d) => d.category === c).map((d) => (
                <li key={d.name} className="flex gap-4 border-b border-dashed py-5 last:border-0">
                  <div className="flex-1">
                    <p className="font-display text-xl">
                      {d.name}
                      {d.popular && <span className="eyebrow ml-3 align-middle text-saffron bg-ink px-2 py-0.5 rounded-sm">Popular</span>}
                    </p>
                    {d.sw && <p className="text-sm italic text-muted-foreground mt-0.5">{d.sw}</p>}
                    <p className="mt-2 max-w-xl text-muted-foreground text-sm">{d.desc}</p>
                  </div>
                  <p className="font-display text-lg whitespace-nowrap text-primary">{price(d.price)}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/reserve" className="btn btn-primary">Book a table</Link>
          <Link to="/order" className="btn btn-line">Order takeout or delivery</Link>
        </div>
      </div>
    </Page>
  );
}
