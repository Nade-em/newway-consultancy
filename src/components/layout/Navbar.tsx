import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Education Network", href: "#education-network" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) {
      console.warn(`Navigation target not found: ${href}`);
      return;
    }

    setIsOpen(false);

    const navbarOffset = 110;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.history.pushState(null, "", href);

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:px-6">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="flex shrink-0 items-center"
          aria-label="New Way Consultancy & Placement Home"
        >
          <img
            src={logo}
            alt="New Way Consultancy & Placement"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleNavigation(event, item.href)
                }
                className={`relative rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#123A6D]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#123A6D]"
                }`}
              >
                {item.label}

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-yellow-400"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#123A6D] transition hover:bg-slate-50 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-3">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavigation(event, item.href)
                    }
                    className={`flex items-center justify-between rounded-xl px-5 py-4 text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#123A6D] text-white"
                        : "text-[#123A6D] hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}