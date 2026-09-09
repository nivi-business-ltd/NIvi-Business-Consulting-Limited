import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Clock, ChevronDown, CheckCircle2, Instagram } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { Reveal, MaskedLine } from "@/components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const serviceOptions = [
  "IT Consultancy",
  "Software Integration",
  "Data Analytics & BI",
  "Process Optimization",
  "Not sure yet — advise me",
];

const budgetOptions = ["Under £10k", "£10k – £50k", "£50k – £150k", "£150k+", "To be discussed"];

const faqs = [
  { q: "What size of business do you work with?", a: "Our sweet spot is SMEs of 10 to 500 people. Below that we recommend our Diagnostic Sprint; above that, engagements are scoped individually." },
  { q: "Do you work with clients outside the UK?", a: "Yes — around half of our caseload is international. We run remote-first diagnostics across the EU, Americas and Asia-Pacific, with on-site intensives where the work demands it." },
  { q: "How quickly can an engagement start?", a: "Diagnostic Sprints typically begin within two weeks of the first call. Larger programmes are scheduled around your operational calendar." },
  { q: "What does the first consultation cost?", a: "Nothing. The initial 45-minute diagnostic call is free and without obligation — you leave with an honest assessment either way." },
];

const inputCls =
  "w-full bg-[#0A0E17] border border-[#1F2D47] rounded-md px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#E2C08D]/60 focus:ring-1 focus:ring-[#E2C08D]/40 transition-colors duration-300";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: serviceOptions[0], budget: budgetOptions[0], message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      setSent(true);
      toast.success("Enquiry received — a senior consultant will reply within one business day.");
    } catch (err) {
      toast.error("We couldn't send your enquiry. Please check the details and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="spotlight absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-8">Contact</p>
          <h1 className="font-serif font-medium tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-6xl text-[#F9FAFB] max-w-4xl">
            <MaskedLine delay={0.2}>Every transformation starts</MaskedLine>
            <MaskedLine delay={0.35}>with a <em className="text-[#E2C08D]">conversation</em>.</MaskedLine>
          </h1>
        </div>
      </section>

      {/* Form + channels */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F9FAFB]">Direct <em className="text-[#E2C08D]">channels</em></h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#E2C08D] mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Glasgow HQ</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Office%20540G%2C%203%20Fitzroy%20Place%2C%20Area%201%2F1%2C%20Sauchiehall%20Street%2C%20Glasgow%20City%20Centre%2C%20Glasgow%2C%20UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-map-link"
                      className="mt-1 block text-sm text-slate-300 hover:text-[#E2C08D] transition-colors duration-300"
                    >
                      Office 540G, 3 Fitzroy Place,<br />Area 1/1, Sauchiehall Street,<br />Glasgow City Centre, Glasgow, UK
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#E2C08D] mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Email</p>
                    <p className="mt-1 text-sm text-slate-300">nivibusinessconsultant@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#E2C08D] mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Telephone</p>
                    <p className="mt-1 text-sm text-slate-300">+44 7378977371</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#E2C08D] mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Hours</p>
                    <p className="mt-1 text-sm text-slate-300">Monday – Friday, 08:30 – 18:30 GMT<br />Regional desks: EU · Americas · APAC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-[#E2C08D] mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Instagram</p>
                    <a
                      href="https://www.instagram.com/nivi_consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-instagram-link"
                      className="mt-1 block text-sm text-slate-300 hover:text-[#E2C08D] transition-colors duration-300"
                    >
                      @nivi_consulting
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-5 h-5 text-[#E2C08D] mt-0.5 flex items-center justify-center"><XIcon className="w-4 h-4" /></span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">X (Twitter)</p>
                    <a
                      href="https://x.com/Nivi_IT"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-x-link"
                      className="mt-1 block text-sm text-slate-300 hover:text-[#E2C08D] transition-colors duration-300"
                    >
                      @Nivi_IT
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="bg-[#161F33] border border-[#1F2D47] rounded-lg p-6 sm:p-10">
              {sent ? (
                <div data-testid="contact-form-success-toast" className="py-16 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#E2C08D] mx-auto" />
                  <h3 className="mt-6 font-serif text-2xl text-[#F9FAFB]">Thank you, {form.name.split(" ")[0]}.</h3>
                  <p className="mt-3 text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Your enquiry has been received. A senior consultant will be in
                    touch at <span className="text-[#E2C08D]">{form.email}</span> within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
                  <h2 className="font-serif text-2xl text-[#F9FAFB]">Request a <em className="text-[#E2C08D]">consultation</em></h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cf-name" className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Full name *</label>
                      <input id="cf-name" data-testid="contact-form-name-input" required minLength={2} value={form.name} onChange={set("name")} placeholder="Alexandra Reyes" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="cf-email" className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Work email *</label>
                      <input id="cf-email" data-testid="contact-form-email-input" required type="email" value={form.email} onChange={set("email")} placeholder="a.reyes@company.com" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cf-company" className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Company</label>
                    <input id="cf-company" data-testid="contact-form-company-input" value={form.company} onChange={set("company")} placeholder="Company Ltd." className={inputCls} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cf-service" className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Service of interest *</label>
                      <select id="cf-service" data-testid="contact-form-service-select" value={form.service} onChange={set("service")} className={inputCls}>
                        {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cf-budget" className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Indicative budget</label>
                      <select id="cf-budget" data-testid="contact-form-budget-select" value={form.budget} onChange={set("budget")} className={inputCls}>
                        {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cf-message" className="block font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">How can we help? *</label>
                    <textarea id="cf-message" data-testid="contact-form-message-input" required minLength={10} rows={5} value={form.message} onChange={set("message")} placeholder="Tell us about your systems, your friction points, and where you want to be in twelve months…" className={inputCls} />
                  </div>
                  <button
                    type="submit"
                    data-testid="contact-form-submit-button"
                    disabled={sending}
                    className="w-full bg-[#E2C08D] text-[#0A0E17] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#F0D5AA] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {sending ? "Sending…" : "Send Enquiry"}
                  </button>
                  <p className="text-xs text-slate-500 text-center">Confidential. No obligation. Replies within one business day.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-[#080C13] border-t border-[#1F2D47]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E2C08D]/80 mb-4">Questions</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F9FAFB]">Asked <em className="text-[#E2C08D]">often</em></h2>
          </Reveal>
          <div className="mt-12">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-t border-[#1F2D47]">
                  <button
                    data-testid={`faq-item-${i + 1}`}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className={`font-serif text-lg sm:text-xl transition-colors duration-300 ${openFaq === i ? "text-[#E2C08D] italic" : "text-[#F9FAFB] group-hover:text-[#E2C08D]"}`}>
                      {f.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#E2C08D] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-[#1F2D47]" />
          </div>
        </div>
      </section>
    </main>
  );
}
