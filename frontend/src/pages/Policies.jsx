import { Link } from "react-router-dom";

export default function Policies() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E2C08D]/80 mb-3">
          Legal
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white mb-12">
          Policies
        </h1>

        <section className="mb-14">
          <h2 className="font-serif text-2xl text-white mb-4">Terms &amp; Conditions</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            <p>
              These terms govern your use of the Nivi Business Consulting Ltd website and any
              services engaged through it. By accessing this site or engaging our services, you
              agree to these terms.
            </p>
            <p>
              Nivi Business Consulting Ltd ("Nivi", "we", "us") is a company registered in
              Scotland, United Kingdom, providing IT consultancy, integration, analytics, and
              optimization services to small and medium-sized enterprises worldwide.
            </p>
            <p>
              All engagements are subject to a separately agreed scope of work or service
              agreement. Nothing on this website constitutes a binding offer until confirmed in
              writing.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-serif text-2xl text-white mb-4">Refund &amp; Cancellation Policy</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            <p>
              Because our services are bespoke consultancy and development engagements, refund
              eligibility depends on the specific service agreement signed for each project.
            </p>
            <p>
              Clients may request cancellation of an ongoing engagement by contacting us in
              writing. Fees for work already completed at the time of cancellation are
              non-refundable; fees for undelivered work will be refunded on a pro-rata basis,
              unless otherwise agreed in the service contract.
            </p>
            <p>
              Disputes regarding delivered work should be raised within 14 days of delivery so we
              can review and resolve them promptly.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-serif text-2xl text-white mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            <p>
              We collect only the information you provide to us directly, such as through our
              contact form or email, in order to respond to enquiries and deliver services.
            </p>
            <p>
              We do not sell or share your personal data with third parties for marketing
              purposes. Data is retained only as long as necessary to fulfil the purpose it was
              collected for, or as required by law.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-white mb-4">Contact</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            For any questions about these policies, reach us via the{" "}
            <Link to="/contact" className="text-[#E2C08D] hover:underline">
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
