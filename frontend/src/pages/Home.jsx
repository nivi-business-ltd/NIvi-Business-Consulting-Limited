import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowUpRight, Network, Blocks, BarChart3, Workflow } from "lucide-react";
import Marquee from "@/components/Marquee";
import { Reveal, MaskedLine } from "@/components/Reveal";

const HERO_IMG = "https://images.unsplash.com/photo-1567961234169-21355ccf4cfa?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000";
const ANALYTICS_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";

const services = [
  {
    id: "service-card-it-consultancy",
    icon: Network,
    title: "IT Consultancy",
    desc: "End-to-end technology strategy — from architecture audits to roadmap design, aligned to commercial outcomes.",
    tags: ["Strategy", "Cloud", "Governance"],
    span: "lg:col-span-7",
  },
  {
    id: "service-card-software-integration",
    icon: Blocks,
    title: "Software Integration",
    desc: "Frictionless connection of ERP, CRM and legacy estates into one coherent operating system.",
    tags: ["APIs", "ERP / CRM", "Legacy"],
    span: "lg:col-span-5",
  },
  {
    id: "service-card-data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Business intelligence pipelines and dashboards that turn raw operational data into decisions.",
    tags: ["BI", "Warehousing", "ML-ready"],
    span: "lg:col-span-5",
  },
  {
    id: "service-card-process-optimization",
    icon: Workflow,
    title: "Process Optimization",
    desc: "Digital re-engineering of business processes to remove cost, latency and manual toil.",
    tags: ["Automation", "Lean", "Change"],
    span: "lg:col-span-7",
  },
];

const chapters = [
  { n: "01", title: "Precision Diagnostics", desc: "Every engagement opens with a forensic audit of your systems, workflows and data estate — so recommendations rest on evidence, not assumption." },
  { n: "02", title: "Frictionless Integration", desc: "We connect the tools you already own into one coherent whole, eliminating swivel-chair work and data silos without ripping out what works." },
  { n: "03", title: "Data-Driven Sovereignty", desc: "Your data becomes an asset you command: governed pipelines, trusted dashboards and analytics your leadership actually reads." },
  { n: "04", title: "Scalable Global Impact", desc: "Optimization programmes designed to compound — measured in margin recovered, hours returned and markets entered." },
];

const stats = [
  { value: 120, suffix: "+", label: "SME engagements delivered" },
  { value: 14, suffix: "", label: "Countries served worldwide" },
  { value: 98, suffix: "%", label: "Client retention rate" },
  { value: 40, suffix: "%", label: "Avg. process cost reduction" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.215, 0.61, 0.355, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#E2C08D]">
      {n}{suffix}
    </span>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <main>
      {/* Kinetic Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
          <img src={HERO_IMG} alt="Aerial view of Glasgow cityscape, Scotland" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/70 via-[#0A0E17]/80 to-[#0A0E17]" />
        </motion.div>
        <div className="spotlight absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full py-24">
          <h1 data-testid="hero-title-masked" className="font-serif font-medium tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-7xl text-[#F9FAFB] max-w-5xl">
            <MaskedLine delay={0.35}>Empowering SMEs worldwide</MaskedLine>
            <MaskedLine delay={0.5}>with <em className="text-[#E2C08D]">sovereign</em> IT &</MaskedLine>
            <MaskedLine delay={0.65}>digital strategy.</MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-slate-300 font-light leading-relaxed"
          >
            Nivi Finserv is a digital solutions and business consultancy delivering
            end-to-end IT consultancy, software integration, data analytics and
            process optimization for ambitious small and medium-sized enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              data-testid="hero-cta-explore-services"
              className="group inline-flex items-center gap-2 bg-[#E2C08D] text-[#0A0E17] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#F0D5AA] transition-colors duration-300"
            >
              Explore Services
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-cta-book-consultation"
              className="inline-flex items-center gap-2 border border-[#E2C08D]/40 text-[#E2C08D] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#E2C08D]/10 transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-t border-[#1F2D47] pt-8 sm:pt-10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-[10px] sm:text-sm text-slate-400 font-mono uppercase tracking-wider leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Services Bento */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">What we do</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl tracking-tight text-[#F9FAFB] max-w-2xl leading-tight">
              Four disciplines. <em className="text-[#E2C08D]">One</em> operating rhythm.
            </h2>
          </Reveal>

          <div data-testid="services-grid-container" className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08} className={`${s.span} lg:col-span-6`}>
                <Link
                  to="/services"
                  data-testid={s.id}
                  className="group block h-full bg-[#161F33] border border-[#1F2D47] rounded-lg p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#E2C08D]/40 hover:shadow-2xl hover:shadow-black/40"
                >
                  <div className="flex items-start justify-between">
                    <s.icon className="w-8 h-8 text-[#E2C08D]" strokeWidth={1.5} />
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#E2C08D] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-8 font-serif text-xl sm:text-2xl text-[#F9FAFB]">{s.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-widest text-slate-400 border border-[#1F2D47] rounded-full px-3 py-1 group-hover:border-[#E2C08D]/30 transition-colors duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Chapters */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#080C13] border-y border-[#1F2D47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">The Method</p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB] leading-tight">
                  A manifesto in <em className="text-[#E2C08D]">four chapters</em>
                </h2>
                <div className="gold-rule w-24 mt-8" />
                <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                  Consultancy is a craft. Ours follows a disciplined sequence that has
                  carried over a hundred enterprises from fragmented systems to
                  sovereign operations.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-8">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.06}>
                <div
                  data-testid={`manifesto-chapter-${i + 1}`}
                  className="group border-t border-[#1F2D47] py-10 grid grid-cols-12 gap-6 items-start hover:bg-[#161F33]/40 transition-colors duration-500 px-4 -mx-4 rounded"
                >
                  <span className="col-span-3 sm:col-span-2 font-mono text-3xl sm:text-4xl text-[#E2C08D]/50 group-hover:text-[#E2C08D] transition-colors duration-500">
                    {c.n}
                  </span>
                  <div className="col-span-9 sm:col-span-10">
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#F9FAFB] group-hover:italic transition-all duration-500">{c.title}</h3>
                    <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#1F2D47]" />
          </div>
        </div>
      </section>

      {/* Spotlight + Quote */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 border border-[#E2C08D]/25 rounded-lg translate-x-4 translate-y-4" />
              <img
                src={ANALYTICS_IMG}
                alt="Business intelligence analytics dashboard"
                className="relative rounded-lg w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#0A0E17]/60 to-transparent" />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-6">Client Voices</p>
              <blockquote className="font-serif text-2xl sm:text-3xl leading-snug text-[#F9FAFB]">
                “Nivi Finserv rebuilt our data estate in twelve weeks. For the first
                time, our board argues about <em className="text-[#E2C08D]">strategy</em> —
                not about whose spreadsheet is right.”
              </blockquote>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-slate-400">
                Managing Director — European Manufacturing SME
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative border-t border-[#1F2D47] overflow-hidden">
        <div className="spotlight absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-32 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl tracking-tight text-[#F9FAFB] leading-tight">
              Your next chapter begins<br className="hidden sm:block" /> with a <em className="text-[#E2C08D]">conversation</em>.
            </h2>
            <p className="mt-6 text-base text-slate-400 max-w-xl mx-auto">
              A forty-five minute diagnostic call. No decks, no obligation — just a
              clear-eyed view of where your systems are costing you.
            </p>
            <Link
              to="/contact"
              data-testid="home-cta-banner-button"
              className="group mt-10 inline-flex items-center gap-2 bg-[#E2C08D] text-[#0A0E17] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#F0D5AA] transition-colors duration-300"
            >
              Book Your Diagnostic Call
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
