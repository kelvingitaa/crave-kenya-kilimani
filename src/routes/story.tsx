import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageTitle } from "@/components/site";
import { restaurant as r } from "@/lib/restaurant";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: `Our Story — ${r.fullName}` },
      { name: "description", content: "From Mombasa Nyali to Ring Road Kilimani: satisfying every craving with vibrant eclectic dining, breakfast stacks and handcrafted cocktails." },
      { property: "og:title", content: `Our Story — ${r.fullName}` },
      { property: "og:description", content: "The journey behind Crave Kenya: great food, warm hospitality, and unforgettable energy." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <Page>
      <PageTitle kicker="About Crave" title={<>Satisfying every <span className="italic text-primary">craving.</span></>} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-12 md:px-10">
        <img
          src={interior}
          alt="CRAVE Kenya dining room ambiance"
          loading="lazy"
          width={1200}
          height={1504}
          className="aspect-[4/5] w-full object-cover md:col-span-6 rounded-sm"
        />
        <div className="space-y-6 text-base md:col-span-5 md:col-start-8 md:pt-12">
          <p className="font-display text-2xl leading-snug first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:leading-none first-letter:text-clay">
            CRAVE was born with a single mission: to create a vibrant gathering place where comfort food, warm hospitality, and good energy come together.
          </p>
          <p className="text-muted-foreground">
            From our beginnings in Mombasa at Citymall Nyali to our lively hub on Ring Road Kilimani, we have built a space that welcomes you for every moment of the day.
          </p>
          <p className="text-muted-foreground">
            Whether you are sitting down for fluffy morning pancake stacks, digging into loaded fries and flame-grilled burgers for lunch, enjoying our private dining room for a celebration, or unwinding with signature cocktails until 1:00 am, our team is dedicated to top-notch service.
          </p>
          <div className="border-l-2 border-clay pl-4 py-1 text-sm italic text-muted-foreground">
            “The food, ambiance and service was top notch. Delvis and Sheila made us feel right at home. We will definitely be back.” — Google Review
          </div>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link to="/reserve" className="btn btn-primary">Book a table</Link>
            <Link to="/menu" className="btn btn-line">Explore the menu</Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
