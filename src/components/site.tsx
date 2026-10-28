import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { restaurant as r } from "@/lib/restaurant";

const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/story", label: "Our Story" },
  { to: "/order", label: "Order" },
  { to: "/contact", label: "Visit" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const tone = overlay ? "text-ink-foreground" : "text-foreground";
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-30" : "relative border-b"} ${tone}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl font-bold tracking-tight leading-none">
            {r.name}<span className="text-saffron text-sm align-super">™</span>
          </span>
          <span className="eyebrow hidden opacity-70 sm:inline">Kilimani · Ring Rd</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium tracking-wide underline-offset-8 hover:text-saffron hover:underline" activeProps={{ className: "underline text-saffron" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/reserve" className={`btn ${overlay ? "btn-saffron" : "btn-primary"}`}>Book a table</Link>
        </nav>
        <button className="eyebrow md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="bg-ink text-ink-foreground md:hidden border-b border-white/10">
          <div className="flex flex-col px-5 py-6">
            {[...nav, { to: "/reserve", label: "Book a table" } as const].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-ink-foreground/15 py-4 font-display text-2xl hover:text-saffron">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="grain bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-5xl font-bold leading-none md:text-6xl">
            {r.name}<span className="text-saffron text-2xl align-super">™</span>
          </p>
          <p className="mt-4 max-w-xs text-sm opacity-80 leading-relaxed">
            {r.tagline} Fluffy breakfast stacks, monster burgers, coastal delicacies, loaded sharing plates and signature cocktails on Ring Road Kilimani.
          </p>
          {r.instagram && (
            <a
              href={r.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron hover:underline"
            >
              <span>Follow @crave_kenya</span>
              <span>→</span>
            </a>
          )}
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4 text-saffron">Find us</p>
          <p className="font-medium">{r.address}</p>
          <p className="opacity-70 text-sm mt-0.5">{r.plusCode}</p>
          <a href={`tel:${r.phoneIntl}`} className="mt-3 block font-display text-lg hover:text-saffron">{r.phone}</a>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-4 text-saffron">Pages</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-saffron">{n.label}</Link></li>)}
            <li><Link to="/reserve" className="hover:text-saffron">Reservations</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-4 text-saffron">Hours</p>
          <p className="text-sm font-semibold">{r.hours}</p>
          <p className="mt-1 text-xs opacity-70">Breakfast · Lunch · Dinner · Late Night to 1 am</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-ink-foreground/15 px-5 py-5 text-xs opacity-70 md:px-10">
        <span>© {new Date().getFullYear()} {r.fullName}</span>
        <span className="text-saffron font-medium">Satisfying every craving…™️</span>
      </div>
    </footer>
  );
}

export function Page({ children, overlay }: { children: ReactNode; overlay?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header overlay={overlay ?? false} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageTitle({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-10 md:pt-24">
      <p className="eyebrow text-saffron font-bold">{kicker}</p>
      <h1 className="mt-4 max-w-4xl text-4xl leading-[0.95] md:text-6xl">{title}</h1>
      {children && <div className="mt-5 max-w-xl text-base text-muted-foreground">{children}</div>}
    </section>
  );
}

export const price = (p: number | null) => (p == null ? "Ksh —" : `Ksh ${p.toLocaleString()}`);
