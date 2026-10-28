import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Page, PageTitle } from "@/components/site";
import { restaurant as r } from "@/lib/restaurant";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: `Book a Table — ${r.fullName}` },
      { name: "description", content: `Reserve a table or private dining room at ${r.fullName} on Ring Road Kilimani, Nairobi.` },
      { property: "og:title", content: `Reserve a Table at ${r.fullName}` },
      { property: "og:description", content: "Instant booking requests via WhatsApp or phone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reserve,
});

function Reserve() {
  const [f, setF] = useState({ name: "", date: "", time: "19:00", guests: "2", seating: "Main Dining Room", note: "" });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello ${r.name}, I would like to reserve a table at Kilimani.\nName: ${f.name}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}\nSeating Preference: ${f.seating}${f.note ? `\nNote/Special Request: ${f.note}` : ""}`;
    window.open(`https://wa.me/${r.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Page>
      <PageTitle kicker="Reservations" title={<>Save your <span className="italic text-primary">table.</span></>}>
        Whether it is breakfast, casual dinner, happy hour drinks, or our private dining room for a celebration, submit your booking below and our team will confirm via WhatsApp.
      </PageTitle>
      <form onSubmit={submit} className="mx-auto grid max-w-7xl gap-x-10 gap-y-8 px-5 pb-24 md:grid-cols-2 md:px-10">
        <label className="md:col-span-2">
          <span className="eyebrow text-muted-foreground">Your name</span>
          <input required className="field font-display text-xl" value={f.name} onChange={set("name")} placeholder="Enter your full name" />
        </label>
        <label>
          <span className="eyebrow text-muted-foreground">Date</span>
          <input required type="date" className="field" value={f.date} onChange={set("date")} />
        </label>
        <label>
          <span className="eyebrow text-muted-foreground">Time</span>
          <input required type="time" className="field" value={f.time} onChange={set("time")} />
        </label>
        <label>
          <span className="eyebrow text-muted-foreground">Number of Guests</span>
          <select className="field" value={f.guests} onChange={set("guests")}>
            {["1 person", "2 people", "3-4 people", "5-6 people", "7-10 people", "10+ (Private Dining / Group Event)"].map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="eyebrow text-muted-foreground">Seating Preference</span>
          <select className="field" value={f.seating} onChange={set("seating")}>
            <option value="Main Dining Room">Main Dining Room</option>
            <option value="Cocktail Lounge / Bar">Cocktail Lounge / Bar</option>
            <option value="Private Dining Room">Private Dining Room (Events)</option>
            <option value="Outdoor / Terrace">Outdoor / Terrace</option>
          </select>
        </label>
        <label className="md:col-span-2">
          <span className="eyebrow text-muted-foreground">Occasion or special requests</span>
          <input className="field" placeholder="Birthday, anniversary, business dinner, dietary needs…" value={f.note} onChange={set("note")} />
        </label>
        <div className="flex flex-wrap items-center gap-6 md:col-span-2 pt-2">
          <button className="btn btn-primary">Send request on WhatsApp</button>
          <a href={`tel:${r.phoneIntl}`} className="text-sm underline underline-offset-8">
            or call directly: {r.phone}
          </a>
        </div>
      </form>
    </Page>
  );
}
