import { createFileRoute } from "@tanstack/react-router";
import { Page, PageTitle } from "@/components/site";
import { restaurant as r } from "@/lib/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Visit Us — ${r.fullName}` },
      { name: "description", content: `Directions, phone, hours and location details for ${r.fullName} on Ring Road Kilimani, Nairobi.` },
      { property: "og:title", content: `Visit ${r.fullName}` },
      { property: "og:description", content: "Ring Road Kilimani, Nairobi. Open daily until 1 am." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Page>
      <PageTitle kicker="Location & Contact" title="Come visit us." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 md:grid-cols-12 md:px-10">
        <dl className="space-y-8 md:col-span-4">
          <div>
            <dt className="eyebrow text-muted-foreground">Address</dt>
            <dd className="font-display text-xl">{r.address}</dd>
            <dd className="text-muted-foreground">{r.plusCode}</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Phone &amp; WhatsApp</dt>
            <dd>
              <a href={`tel:${r.phoneIntl}`} className="font-display text-xl hover:text-primary block">
                {r.phone}
              </a>
            </dd>
            <dd className="mt-1">
              <a
                href={`https://wa.me/${r.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-600 hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Hours</dt>
            <dd className="text-base font-semibold">{r.hours}</dd>
            <dd className="text-sm text-muted-foreground">Kitchen open all day through late night</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Features &amp; Parking</dt>
            <dd className="text-sm">Secure parking on-site, private dining rooms available, Wi-Fi &amp; happy hour specials.</dd>
          </div>
          <div className="pt-2">
            <a href={r.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Open in Google Maps
            </a>
          </div>
        </dl>
        <iframe
          title="Map to CRAVE Kenya Kilimani"
          className="h-[480px] w-full border md:col-span-8 rounded-sm"
          loading="lazy"
          src="https://www.google.com/maps?q=CRAVE+Kenya+Kilimani+Ring+Rd+Nairobi&output=embed"
        />
      </section>
    </Page>
  );
}
