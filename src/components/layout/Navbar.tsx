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
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/20 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="New Way Consultancy & Placement"
                className="h-12 w-auto object-contain"
              />

              <div className="hidden leading-tight sm:block">
                <p className="font-black text-[#123A6D]">
                  New Way Consultancy
                </p>

                <p className="text-xs font-medium text-slate-3000">
                  & Placement
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#123A6D]"
                >
                  {item.label}

                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="rounded-xl p-2 text-[#123A6D] transition hover:bg-slate-100 md:hidden"
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>

          {/* Mobile Navigation */}
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