import { createFileRoute } from "@tanstack/react-router";
import { Page, PageTitle } from "@/components/site";
import { restaurant as r } from "@/lib/restaurant";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: `Order Online & Takeaway — ${r.fullName}` },
      { name: "description", content: `Order takeaway or direct doorstep delivery from ${r.fullName} in Nairobi via Uber Eats, WhatsApp or phone.` },
      { property: "og:title", content: `Order from ${r.fullName}` },
      { property: "og:description", content: "Fast delivery & takeout across Kilimani, Nairobi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Order,
});

function Order() {
  const options = [
    {
      n: "01",
      title: "Order on Uber Eats",
      body: "Fast delivery right to your door with real-time tracking.",
      badge: "Rated 4.6 ★ (190+ reviews)",
      href: r.uberEats,
      cta: "Order on Uber Eats",
    },
    {
      n: "02",
      title: "Call Kitchen for Pickup",
      body: "Best for quick takeaway without waiting. Call ahead and we will have your meal packed hot and ready.",
      badge: "Fastest for Takeout",
      href: `tel:${r.phoneIntl}`,
      cta: `Call ${r.phone}`,
    },
    {
      n: "03",
      title: "WhatsApp Order",
      body: "Send your dish list, address, and delivery instructions straight to our team.",
      badge: "Direct Support",
      href: `https://wa.me/${r.whatsapp}?text=${encodeURIComponent(`Hello ${r.name}, I would like to place a delivery/takeaway order:`)}`,
      cta: "Message on WhatsApp",
    },
    {
      n: "04",
      title: "Instagram Updates & Specials",
      body: "Check out our daily specials, chef highlights and events on Instagram.",
      badge: "63K+ community",
      href: r.instagram,
      cta: "Visit @crave_kenya",
    },
  ];

  return (
    <Page>
      <PageTitle kicker="Takeaway & Delivery" title="Satisfy your craving at home.">
        Freshly prepared by the Crave kitchen, packaged carefully for takeout or delivered directly to your doorstep.
      </PageTitle>
      <ol className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        {options.map((o) => (
          <li key={o.n} className="grid items-center gap-4 border-t py-8 md:grid-cols-12">
            <span className="font-display text-3xl text-clay md:col-span-1">{o.n}</span>
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-display">{o.title}</h2>
                {o.badge && <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{o.badge}</span>}
              </div>
              <p className="text-muted-foreground mt-1 text-sm">{o.body}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              {o.href ? (
                <a href={o.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                  {o.cta}
                </a>
              ) : (
                <span className="eyebrow text-muted-foreground">Coming soon</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
