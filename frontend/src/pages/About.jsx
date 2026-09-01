import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, Handshake, ShieldCheck, Globe2 } from "lucide-react";
import { Reveal, MaskedLine } from "@/components/Reveal";

const TEAM_IMG = "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400";
const GLASGOW_IMG = "https://images.unsplash.com/photo-1705354153594-5661fbed22a5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400";

const principles = [
  { icon: Compass, title: "Evidence before opinion", desc: "Every recommendation traces back to a diagnostic finding, never to a trend or a vendor pitch." },
  { icon: Handshake, title: "Partnership, not projects", desc: "We stay accountable past go-live. Our engagements end when the outcome compounds, not when the invoice clears." },
  { icon: ShieldCheck, title: "Sovereignty by design", desc: "Your systems, your data, your terms. We build capability inside your business — not dependency on ours." },
  { icon: Globe2, title: "Global reach, SME focus", desc: "Enterprise-grade discipline, priced and paced for businesses of ten to five hundred people." },
];

const leaders = [
  { initials: "NK", name: "N. Kapoor", role: "Founder & Principal Consultant", note: "Twenty years across enterprise architecture and SME transformation in the UK and EU." },
  { initials: "EA", name: "E. Ashworth", role: "Head of Data & Analytics", note: "Former BI lead for FTSE-listed retail; specialist in decision-grade data estates." },
  { initials: "MO", name: "M. Okafor", role: "Director, Integration Practice", note: "Has connected more than 250 ERP, CRM and legacy systems across 14 countries." },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 sm:pb-32 overflow-hidden">
        <div className="spotlight absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-8">About the Firm</p>
          <h1 className="font-serif font-medium tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl text-[#F9FAFB] max-w-4xl">
            <MaskedLine delay={0.2}>A Glasgow consultancy for</MaskedLine>
            <MaskedLine delay={0.35}>the <em className="text-[#E2C08D]">world's</em> ambitious SMEs.</MaskedLine>
          </h1>
          <Reveal delay={0.6}>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Nivi Business Consulting Ltd. was founded on a simple observation: the digital
              discipline that powers global enterprises should not be reserved for
              them. We bring it — measured, pragmatic and accountable — to small and
              medium-sized businesses everywhere.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section data-testid="about-story-section" className="py-20 sm:py-28 border-t border-[#1F2D47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">Our Story</p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB] leading-tight">
                Rooted in Glasgow, Scotland.<br />
                <em className="text-[#E2C08D]">Fluent</em> in forty time zones.
              </h2>
              <div className="gold-rule w-24 mt-8" />
              <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed">
                From our home in Glasgow, we advise manufacturers in the
                Midlands, retailers in Rotterdam, logistics firms in Lagos and
                professional-services practices in Singapore. The common thread:
                leadership teams who refuse to let fragmented systems cap their
                ambition.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                We are deliberately boutique — senior consultants only, small
                caseloads, and a partner on every call. When you engage Nivi Business Consulting,
                you engage the people whose names are on the door.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-3 border border-[#E2C08D]/25 rounded-lg -translate-x-4 translate-y-4" />
              <img src={TEAM_IMG} alt="Nivi Business Consulting advisory team in the boardroom" className="relative rounded-lg w-full aspect-[16/10] object-cover" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#0A0E17]/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-28 bg-[#080C13] border-y border-[#1F2D47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">Operating Principles</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB]">How we <em className="text-[#E2C08D]">work</em></h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group h-full bg-[#161F33] border border-[#1F2D47] rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E2C08D]/40">
                  <p.icon className="w-7 h-7 text-[#E2C08D]" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-lg text-[#F9FAFB]">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">Leadership</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB]">The senior <em className="text-[#E2C08D]">bench</em></h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {leaders.map((l, i) => (
              <Reveal key={l.initials} delay={i * 0.08}>
                <div className="group border-t-2 border-[#1F2D47] hover:border-[#E2C08D] pt-8 transition-colors duration-500">
                  <div className="w-16 h-16 rounded-full border border-[#E2C08D]/40 flex items-center justify-center font-serif text-xl text-[#E2C08D] italic">
                    {l.initials}
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-[#F9FAFB]">{l.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[#E2C08D]/70">{l.role}</p>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">{l.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* London banner */}
      <section className="relative h-80 sm:h-96 overflow-hidden border-y border-[#1F2D47]">
        <img src={GLASGOW_IMG} alt="Glasgow clock tower and city architecture" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17] via-[#0A0E17]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-full flex items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-3">Headquarters</p>
            <p className="font-serif text-2xl sm:text-4xl text-[#F9FAFB]">Glasgow, <em className="text-[#E2C08D]">Scotland</em></p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F9FAFB]">Meet the firm behind the <em className="text-[#E2C08D]">method</em>.</h2>
          <Link
            to="/contact"
            data-testid="about-cta-button"
            className="group mt-8 inline-flex items-center gap-2 bg-[#E2C08D] text-[#0A0E17] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#F0D5AA] transition-colors duration-300"
          >
            Arrange an Introduction
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
