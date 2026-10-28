import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, price } from "@/components/site";
import { menu, restaurant as r } from "@/lib/restaurant";
import biryani from "@/assets/biryani.jpg";
import interior from "@/assets/interior.jpg";
import pilau from "@/assets/pilau.jpg";
import cassava from "@/assets/cassava.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRAVE Kenya — Kilimani, Nairobi | Satisfying Every Craving" },
      { name: "description", content: "Fluffy buttermilk pancakes, loaded fries, gourmet burgers and signature cocktails on Ring Rd Kilimani. Open daily until 1 am." },
      { property: "og:title", content: "CRAVE Kenya — Kilimani, Nairobi" },
      { property: "og:description", content: "Eclectic dining, breakfast, burgers and handcrafted cocktails on Ring Rd Kilimani." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const pancakes = menu[0]!;
  const loadedFries = menu[2]!;
  const burger = menu[4]!;

  return (
    <Page overlay>
      {/* Hero: full-bleed photo, headline bottom-left */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-ink-foreground">
        <img
          src={interior}
          alt="CRAVE Kenya Kilimani dining atmosphere"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 md:px-10 md:pb-20">
          <p className="eyebrow text-saffron">Ring Road Kilimani · Nairobi</p>
          <h1 className="mt-4 max-w-5xl text-[10.5vw] leading-[0.9] md:text-[5.5rem]">
            Satisfying every<br /><span className="italic text-saffron">craving</span>, all day.
          </h1>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base opacity-90">
              From golden buttermilk pancake stacks at breakfast to loaded sharing fries, gourmet burgers and signature late-night cocktails until 1:00 am.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/reserve" className="btn btn-saffron">Reserve a table</Link>
              <Link to="/menu" className="btn btn-line">Explore menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x md:grid-cols-4 [&>*]:px-5 [&>*]:py-6 md:[&>*]:px-10">
          <div>
            <p className="eyebrow text-muted-foreground">Google rating</p>
            <p className="font-display text-2xl">{r.rating}<span className="text-sm text-muted-foreground"> / {r.reviewCount.toLocaleString()} reviews</span></p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Tripadvisor</p>
            <p className="font-display text-2xl">{r.tripadvisorRating}<span className="text-sm text-muted-foreground"> · Ranked #6</span></p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Hours</p>
            <p className="font-display text-2xl">Daily to 1:00 am</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Vibe &amp; Service</p>
            <p className="pt-2 text-sm">Private Dining · Cocktails · Happy Hour</p>
          </div>
        </div>
      </section>

      {/* Signature Dishes: asymmetric editorial */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4 md:pt-24">
            <p className="eyebrow text-clay">Nº 01 — Morning Favorite</p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">{pancakes.name}</h2>
            <p className="mt-5 text-base">{pancakes.desc}</p>
            <p className="mt-5 font-display text-xl">{price(pancakes.price)}</p>
          </div>
          <figure className="md:col-span-8">
            <img src={cassava} alt={pancakes.name} loading="lazy" width={1600} height={1104} className="aspect-[4/3] w-full object-cover rounded-sm" />
          </figure>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-12 md:items-end">
          <figure className="md:col-span-5 md:col-start-2">
            <img src={biryani} alt={loadedFries.name} loading="lazy" width={1200} height={1200} className="aspect-square w-full object-cover rounded-sm" />
          </figure>
          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow text-clay">Nº 02 — Made for Sharing</p>
            <h2 className="mt-4 text-3xl leading-none">{loadedFries.name}</h2>
            <p className="mt-5 text-base">{loadedFries.desc}</p>
            <p className="mt-5 font-display text-xl">{price(loadedFries.price)}</p>
            <Link to="/menu" className="btn btn-line mt-10">See full menu →</Link>
          </div>
        </div>
      </section>

      {/* Atmosphere: dark band with real guest quotes */}
      <section className="grain bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <img src={interior} alt="CRAVE dining room and bar lounge" loading="lazy" width={1200} height={1504} className="h-full max-h-[900px] w-full object-cover" />
          <div className="flex flex-col justify-center px-5 py-20 md:px-16">
            <p className="eyebrow text-saffron">Guest Love</p>
            <blockquote className="mt-6 font-display text-2xl leading-snug md:text-3xl">
              “The Food, Ambiance and Service was top notch. Delvis was very friendly, calm and professional. We will definitely be back.”
            </blockquote>
            <p className="mt-6 text-sm opacity-70">— Google Verified Review (5.0 ★)</p>
            <div className="mt-8 border-t border-ink-foreground/15 pt-6">
              <blockquote className="italic opacity-85 text-sm">
                “We were there for breakfast on a fine morning. Pancakes are so fluffy &amp; potatoes are yummy. Best breakfast in town!”
              </blockquote>
            </div>
            <p className="mt-10 max-w-md opacity-85 text-sm">
              Whether you are catching up over happy-hour cocktails, celebrating in our private dining room, or stopping by for a late bite after midnight, our welcoming team has you covered.
            </p>
            <Link to="/story" className="mt-10 self-start text-sm underline underline-offset-8 hover:text-saffron">Read our story</Link>
          </div>
        </div>
      </section>

      {/* Order & Delivery */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <img src={pilau} alt={burger.name} loading="lazy" width={1200} height={1200} className="aspect-[5/4] w-full object-cover rounded-sm" />
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow text-clay">Direct &amp; Online Delivery</p>
          <h2 className="mt-4 text-3xl leading-none">Order Crave to your doorstep.</h2>
          <p className="mt-5 text-base text-muted-foreground">
            Craving our burgers, pasta, breakfast or wings at home? Order directly via phone or on Uber Eats.
          </p>
          <div className="mt-8 rule-double">
            <a href={`tel:${r.phoneIntl}`} className="flex justify-between border-b py-4 hover:text-primary">
              <span>Call the restaurant</span>
              <span className="font-display text-lg">{r.phone}</span>
            </a>
            {r.uberEats && (
              <a href={r.uberEats} target="_blank" rel="noreferrer" className="flex justify-between border-b py-4 hover:text-primary">
                <span>Order on Uber Eats</span>
                <span className="text-sm font-medium text-emerald-600">4.6 ★ (190+ reviews) →</span>
              </a>
            )}
            <Link to="/order" className="flex justify-between py-4 hover:text-primary">
              <span>All ordering &amp; pickup options</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Visit section */}
      <section className="border-t bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="eyebrow text-clay">Location</p>
            <h2 className="mt-4 text-3xl leading-none md:text-5xl">{r.address}</h2>
            <p className="mt-3 text-muted-foreground">{r.hours} · Large parking available</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={r.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Get directions</a>
            <Link to="/reserve" className="btn btn-line">Book a table</Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
