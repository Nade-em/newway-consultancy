import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-5">

          {/* MAIN NAVBAR */}
          <div className="flex min-h-[64px] items-center justify-between">

            {/* LOGO + COMPANY NAME */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-2 sm:gap-3"
            >
              <img
                src={logo}
                alt="New Way Consultancy & Placement"
                className="h-11 w-auto shrink-0 object-contain sm:h-12"
              />

              {/* IMPORTANT:
                  Company name is NOT hidden on mobile */}
              <div className="min-w-0 leading-tight">
                <p className="whitespace-nowrap text-[12px] font-black text-[#123A6D] sm:text-base">
                  New Way Consultancy
                </p>

                <p className="text-[10px] font-semibold text-[#123A6D] sm:text-xs">
                  &amp; Placement
                </p>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#123A6D]"
                >
                  {item.label}

                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="ml-2 shrink-0 rounded-xl p-2 text-[#123A6D] transition hover:bg-slate-100 md:hidden"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden md:hidden"
              >
                <div className="border-t border-slate-100 pb-2 pt-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-[#123A6D]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
    </header>
  );
}