import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  X,
  Maximize2,
  Megaphone,
} from "lucide-react";

import ad1 from "../../assets/images/advertisements/ad1.jpg";
import ad2 from "../../assets/images/advertisements/ad2.jpg";
import ad3 from "../../assets/images/advertisements/ad3.jpg";
import ad4 from "../../assets/images/advertisements/ad4.jpg";
import ad5 from "../../assets/images/education-admissions-2026-27.jpg";

const advertisements = [
  {
    id: 1,
    image: ad1,
    title: "Saudi Arabia & UAE",
    subtitle: "General Recruitment",
  },
  {
    id: 2,
    image: ad2,
    title: "Saudi Arabia & UAE",
    subtitle: "Engineering Recruitment",
  },
  {
    id: 3,
    image: ad3,
    title: "Saudi Arabia",
    subtitle: "Healthcare Recruitment",
  },
  {
    id: 4,
    image: ad4,
    title: "UAE & Saudi Arabia",
    subtitle: "Teaching Opportunities",
  },
  {
    id: 5,
    image: ad5,
    title: "India & Abroad",
    subtitle: "Education Admissions 2026–27",
  },
];

const stats = [
  {
    number: "500+",
    label: "Career Opportunities",
    icon: BriefcaseBusiness,
  },
  {
    number: "5000+",
    label: "Candidates Guided",
    icon: Users,
  },
  {
    number: "17+",
    label: "Years Experience",
    icon: GraduationCap,
  },
];

export default function Hero() {
  const [currentAd, setCurrentAd] = useState(0);
  const [isAdOpen, setIsAdOpen] = useState(false);

  const nextAd = () => {
    setCurrentAd((current) => (current + 1) % advertisements.length);
  };

  const previousAd = () => {
    setCurrentAd(
      (current) =>
        (current - 1 + advertisements.length) % advertisements.length
    );
  };

  /*
   * Automatic advertisement movement.
   *
   * IMPORTANT:
   * The carousel does NOT move while the enlarged
   * advertisement/lightbox is open.
   */
  useEffect(() => {
    if (isAdOpen) return;

    const interval = setInterval(() => {
      nextAd();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAdOpen]);

  /*
   * Prevent page scrolling while the enlarged
   * advertisement is open.
   */
  useEffect(() => {
    if (isAdOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAdOpen]);

  /*
   * ESC key closes the enlarged advertisement.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isAdOpen) return;

      if (event.key === "Escape") {
        setIsAdOpen(false);
      }

      if (event.key === "ArrowRight") {
        nextAd();
      }

      if (event.key === "ArrowLeft") {
        previousAd();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAdOpen]);

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-[#123A6D] text-white"
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
              `,
              backgroundSize: "54px 54px",
            }}
          />
        </div>

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              {/* Small heading */}
              <div className="inline-flex max-w-full rounded-full border border-yellow-400/40 bg-white/5 px-5 py-2 backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-400 sm:text-sm">
                  Guidance • Education • Career Growth
                </span>
              </div>

              {/* Main heading */}
              <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-[76px]">
                Guiding Careers
                <span className="block text-yellow-400">
                  Empowering
                </span>
                <span className="block text-yellow-400">
                  Futures.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg sm:leading-8">
                New Way Consultancy &amp; Placement helps individuals find
                the right direction through educational guidance, career
                counselling, career development, and meaningful
                opportunities.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-base font-bold text-[#123A6D] shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Explore Services
                  <ArrowRight size={20} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.1,
                      }}
                      className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm sm:p-5"
                    >
                      <Icon
                        size={22}
                        className="text-yellow-400"
                      />

                      <p className="mt-4 text-2xl font-black sm:text-3xl">
                        {stat.number}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-blue-100/80 sm:text-sm">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT SIDE — ADVERTISEMENT
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative z-10"
            >
              <div className="rounded-[32px] border border-white/20 bg-[#0e3566]/70 p-4 shadow-2xl backdrop-blur-sm sm:p-5">

                {/* Ad Header */}
                <div className="mb-4 flex items-center justify-between gap-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-yellow-400/15 p-2">
                      <Megaphone
                        size={22}
                        className="text-yellow-400"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[2px] text-yellow-400">
                        Featured Opportunities
                      </p>

                      <h2 className="mt-1 text-xl font-black sm:text-2xl">
                        2026 Recruitment
                      </h2>
                    </div>
                  </div>

                  <span className="hidden text-sm font-semibold text-blue-100/70 sm:block">
                    {currentAd + 1} / {advertisements.length}
                  </span>
                </div>

                {/* Advertisement */}
                <div className="relative">

                  {/* Left arrow */}
                  <button
                    type="button"
                    onClick={previousAd}
                    aria-label="Previous advertisement"
                    className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white p-2 text-[#123A6D] shadow-lg transition hover:scale-110 sm:left-[-18px] sm:p-3"
                  >
                    <ArrowLeft size={20} />
                  </button>

                  {/* Image */}
                  <div
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl"
                    onClick={() => setIsAdOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        setIsAdOpen(true);
                      }
                    }}
                    aria-label="Enlarge advertisement"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={advertisements[currentAd].id}
                        src={advertisements[currentAd].image}
                        alt={`${advertisements[currentAd].title} - ${advertisements[currentAd].subtitle}`}
                        initial={{
                          opacity: 0,
                          scale: 1.02,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.98,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="block h-auto max-h-[580px] w-full object-contain"
                      />
                    </AnimatePresence>

                    {/* Hover overlay */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#123A6D]/0 transition-all duration-300 group-hover:bg-[#123A6D]/20">
                      <div className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#123A6D] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Maximize2 size={17} />
                        Click to enlarge
                      </div>
                    </div>
                  </div>

                  {/* Right arrow */}
                  <button
                    type="button"
                    onClick={nextAd}
                    aria-label="Next advertisement"
                    className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white p-2 text-[#123A6D] shadow-lg transition hover:scale-110 sm:right-[-18px] sm:p-3"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Dots */}
                <div className="mt-5 flex items-center justify-center gap-3">
                  {advertisements.map((ad, index) => (
                    <button
                      key={ad.id}
                      type="button"
                      onClick={() => setCurrentAd(index)}
                      aria-label={`Show advertisement ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentAd === index
                          ? "w-9 bg-yellow-400"
                          : "w-2.5 bg-blue-200/40 hover:bg-blue-200/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Click instruction */}
                <p className="mt-4 text-center text-xs text-blue-100/60">
                  Click an advertisement to view it larger
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
    ENLARGED ADVERTISEMENT LIGHTBOX
========================================================= */}

<AnimatePresence>
  {isAdOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6"
      onClick={() => setIsAdOpen(false)}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setIsAdOpen(false)}
        aria-label="Close advertisement"
        className="fixed right-4 top-4 z-[100000] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-white/20 sm:right-7 sm:top-7"
      >
        <X size={27} />
      </button>

      {/* Previous Advertisement */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousAd();
        }}
        aria-label="Previous advertisement"
        className="fixed left-3 top-1/2 z-[100000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-white/20 sm:left-7 sm:h-14 sm:w-14"
      >
        <ArrowLeft size={25} />
      </button>

      {/* Enlarged Advertisement */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.88,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.88,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
        className="relative z-[99999] flex h-[92vh] w-[92vw] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={advertisements[currentAd].image}
          alt={`${advertisements[currentAd].title} - ${advertisements[currentAd].subtitle}`}
          className="max-h-[92vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
        />
      </motion.div>

      {/* Next Advertisement */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          nextAd();
        }}
        aria-label="Next advertisement"
        className="fixed right-3 top-1/2 z-[100000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:bg-white/20 sm:right-7 sm:h-14 sm:w-14"
      >
        <ArrowRight size={25} />
      </button>

      {/* Simple Counter */}
      <div className="fixed bottom-4 left-1/2 z-[100000] -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
        {currentAd + 1} / {advertisements.length}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}