import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Our Team", id: "team" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) return;

      const navbarOffset = 110;

      const elementTop =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - navbarOffset,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[9999]">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-5">

          {/* NAVBAR TOP */}
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="flex min-w-0 items-center gap-2 text-left sm:gap-3"
            >
              <img
                src={logo}
                alt="New Way Consultancy & Placement"
                className="h-11 w-auto shrink-0 object-contain sm:h-12"
              />

              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-black text-[#123A6D] sm:text-base">
                  New Way Consultancy
                </p>

                <p className="text-[10px] font-semibold text-[#123A6D] sm:text-xs">
                  &amp; Placement
                </p>
              </div>
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="group relative text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#123A6D]"
                >
                  {item.label}

                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="ml-2 shrink-0 rounded-xl p-2 text-[#123A6D] transition hover:bg-slate-100 md:hidden"
            >
              {isOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-3 border-t border-slate-200 pt-3">

                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full rounded-xl px-4 py-4 text-left text-base font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#123A6D] active:bg-slate-100"
                    >
                      {item.label}
                    </motion.button>
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