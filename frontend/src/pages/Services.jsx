import { Link } from "react-router-dom";
import { ArrowUpRight, Network, Blocks, BarChart3, Workflow, Check } from "lucide-react";
import { Reveal, MaskedLine } from "@/components/Reveal";

const ANALYTICS_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";
const CITY_IMG = "https://images.unsplash.com/photo-1549483249-f0b359d1e289?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";

const deepDives = [
  {
    n: "01",
    icon: Network,
    title: "End-to-End IT Consultancy",
    lead: "Technology strategy that answers to the balance sheet.",
    points: ["IT estate & architecture audits", "Cloud migration & cost governance", "Vendor selection & contract negotiation", "Security posture & compliance roadmaps", "Fractional CTO / CIO advisory"],
    img: CITY_IMG,
    alt: "London financial skyline representing IT strategy",
  },
  {
    n: "02",
    icon: Blocks,
    title: "Software Integration Support",
    lead: "One coherent operating system from the tools you already own.",
    points: ["ERP, CRM & accounting system integration", "API design & middleware architecture", "Legacy system modernisation", "Data migration with zero-downtime cutover", "Post-merger systems consolidation"],
  },
  {
    n: "03",
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    lead: "Decision-grade data, from source system to boardroom.",
    points: ["Data warehouse & pipeline engineering", "Executive dashboards & KPI frameworks", "Forecasting & demand analytics", "Data governance & quality programmes", "ML-readiness assessments"],
    img: ANALYTICS_IMG,
    alt: "Analytics dashboards representing data intelligence",
  },
  {
    n: "04",
    icon: Workflow,
    title: "Digital Business Process Optimization",
    lead: "Margin recovered from the workflows you stopped noticing.",
    points: ["End-to-end process mapping & diagnostics", "Workflow automation & RPA", "Operating-model redesign", "Change management & staff enablement", "Continuous-improvement programmes"],
  },
];

const models = [
  { name: "Diagnostic Sprint", duration: "2–4 weeks", desc: "A forensic audit of systems, data and process, closing with a prioritised roadmap and business case.", best: "Leaders who need clarity before commitment." },
  { name: "Embedded Partner", duration: "3–12 months", desc: "Senior consultants embedded in your team to deliver integration, analytics and optimization workstreams.", best: "SMEs executing a defined transformation." },
  { name: "Managed Optimization", duration: "Ongoing", desc: "A retained partnership: quarterly diagnostics, continuous improvement and on-call advisory.", best: "Firms that want compounding gains, year on year." },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="spotlight absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-8">Services</p>
          <h1 className="font-serif font-medium tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl text-[#F9FAFB] max-w-4xl">
            <MaskedLine delay={0.2}>Four disciplines,</MaskedLine>
            <MaskedLine delay={0.35}>engineered to <em className="text-[#E2C08D]">compound</em>.</MaskedLine>
          </h1>
          <Reveal delay={0.6}>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Each practice stands alone — and each feeds the next. Diagnose with
              consultancy, connect with integration, see clearly with analytics,
              and compound with optimization.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deep dives */}
      <section className="border-t border-[#1F2D47]">
        {deepDives.map((d, i) => (
          <div key={d.n} data-testid={`service-deep-dive-${i + 1}`} className={`py-20 sm:py-24 ${i % 2 === 1 ? "bg-[#080C13]" : ""} border-b border-[#1F2D47]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl text-[#E2C08D]/60">{d.n}</span>
                    <d.icon className="w-6 h-6 text-[#E2C08D]" strokeWidth={1.5} />
                  </div>
                  <h2 className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB] leading-tight">{d.title}</h2>
                  <p className="mt-4 font-serif italic text-lg text-[#E2C08D]/90">{d.lead}</p>
                  <ul className="mt-8 space-y-3">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                        <Check className="w-4 h-4 mt-1 text-[#E2C08D] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    data-testid={`service-enquire-${i + 1}`}
                    className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E2C08D] hover:text-[#F0D5AA] transition-colors"
                  >
                    Enquire about this practice
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Reveal>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Reveal delay={0.15}>
                  {d.img ? (
                    <div className="relative">
                      <div className="absolute -inset-3 border border-[#E2C08D]/25 rounded-lg translate-x-4 translate-y-4" />
                      <img src={d.img} alt={d.alt} className="relative rounded-lg w-full aspect-[4/3] object-cover" />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#0A0E17]/60 to-transparent" />
                    </div>
                  ) : (
                    <div className="h-full min-h-[280px] rounded-lg border border-[#1F2D47] bg-[#161F33] flex items-center justify-center p-10">
                      <span className="font-serif italic text-6xl sm:text-8xl text-outline-gold select-none">{d.n}</span>
                    </div>
                  )}
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Engagement models */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">Engagement Models</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB]">Three ways to <em className="text-[#E2C08D]">begin</em></h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {models.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group h-full bg-[#161F33] border border-[#1F2D47] rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E2C08D]/40 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#E2C08D]/70">{m.duration}</p>
                  <h3 className="mt-3 font-serif text-xl sm:text-2xl text-[#F9FAFB]">{m.name}</h3>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">{m.desc}</p>
                  <p className="mt-6 pt-6 border-t border-[#1F2D47] text-xs text-slate-500 italic">Best for: {m.best}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-14 text-center">
            <Link
              to="/contact"
              data-testid="services-cta-button"
              className="group inline-flex items-center gap-2 bg-[#E2C08D] text-[#0A0E17] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#F0D5AA] transition-colors duration-300"
            >
              Request a Capability Briefing
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
