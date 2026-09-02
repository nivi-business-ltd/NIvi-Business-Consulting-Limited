import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer-container" className="border-t border-[#1F2D47] bg-[#080C13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <img src="/logo.png" alt="Nivi Business Consulting Ltd logo" className="h-20 w-auto object-contain" />
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
            Architecting digital precision and growth for small and medium-sized
            enterprises worldwide — from the heart of Glasgow.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/nivi_consulting/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="Nivi Business Consulting on Instagram"
              className="w-10 h-10 rounded-full border border-[#1F2D47] flex items-center justify-center text-slate-400 hover:text-[#E2C08D] hover:border-[#E2C08D]/50 transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <span className="font-mono text-xs text-slate-500">@nivi_consulting</span>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E2C08D]/80 mb-5">Navigate</p>
          <div className="flex flex-col gap-3">
            {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, to]) => (
              <Link key={to} to={to} className="text-sm text-slate-400 hover:text-[#E2C08D] transition-colors duration-300 w-fit">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#E2C08D]/80 mb-5">Glasgow HQ</p>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <span className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#E2C08D]/70" /> Glasgow, Scotland,<br />United Kingdom</span>
            <span className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#E2C08D]/70" /> nivifinservit@gmail.com</span>
            <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#E2C08D]/70" /> +44 7846745814</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1F2D47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-mono text-xs text-slate-500">© 2026 Nivi Business Consulting Ltd Registered in Scotland, United Kingdom.</p>
          <p className="font-mono text-xs text-slate-500">IT Consultancy · Integration · Analytics · Optimization</p>
        </div>
      </div>
    </footer>
  );
}
