import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home", id: "nav-link-home" },
  { to: "/about", label: "About", id: "nav-link-about" },
  { to: "/services", label: "Services", id: "nav-link-services" },
  { to: "/contact", label: "Contact", id: "nav-link-contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0E17]/85 border-b border-[#1F2D47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
        <Link to="/" data-testid="nav-brand-logo" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Nivi Finserv Ltd. logo" className="h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={l.id}
              className={({ isActive }) =>
                `relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 py-2 ${
                  isActive ? "text-[#E2C08D]" : "text-slate-400 hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#E2C08D]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-cta-contact-button"
            className="group inline-flex items-center gap-2 bg-[#E2C08D] text-[#0A0E17] font-sans text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#F0D5AA] transition-colors duration-300"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          data-testid="nav-mobile-menu-button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-[#1F2D47] bg-[#0A0E17]/95"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`${l.id}-mobile`}
                  className={({ isActive }) =>
                    `font-serif text-2xl ${isActive ? "text-[#E2C08D] italic" : "text-slate-300"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
