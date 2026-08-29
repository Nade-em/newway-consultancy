import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
} from "lucide-react";

import { fadeLeft, fadeRight, fadeUp } from "../../utils/animations";

const highlights = [
  {
    icon: BriefcaseBusiness,
    value: "500+",
    label: "Career Opportunities",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Candidates Guided",
  },
  {
    icon: GraduationCap,
    value: "17+",
    label: "Years Experience",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Career Guidance",
      heading: "Discover Your Direction.",
      description:
        "Personalized career guidance helping individuals understand their options, discover the right path, and make confident career decisions.",
      icon: Users,
    },
    {
      title: "Educational Guidance",
      heading: "Choose Your Path.",
      description:
        "Support for educational choices, courses, admissions, and learning opportunities aligned with your goals.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Placement Assistance",
      heading: "Move Toward Opportunity.",
      description:
        "Support in discovering suitable opportunities and navigating the journey from preparation to placement.",
      icon: GraduationCap,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden bg-[#123A6D]"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#123A6D] via-[#16477F] to-[#0D2C54]" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div variants={fadeLeft}>
            <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-yellow-300">
              Guidance • Education • Career Growth
            </span>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Guiding Careers
              <span className="block text-yellow-400">
                Empowering Futures.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              New Way Consultancy & Placement helps individuals find the
              right direction through educational guidance, career
              counselling, career development, and meaningful opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-[#123A6D] shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              >
                Explore Services

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            {/* Statistics */}
            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm sm:p-5"
                  >
                    <Icon
                      size={21}
                      className="text-yellow-400"
                    />

                    <p className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT FEATURE PANEL */}
          <motion.div
            variants={fadeRight}
            className="relative mx-auto w-full max-w-xl lg:ml-auto"
          >
            <div className="relative min-h-[500px] overflow-hidden rounded-[32px] border border-white/20 bg-[#0B3268]/80 shadow-2xl backdrop-blur-md">

              {/* Decorative dots */}
              <div className="pointer-events-none absolute right-8 top-10 grid grid-cols-4 gap-4 opacity-30">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-blue-300"
                  />
                ))}
              </div>

              {/* Decorative circle */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-yellow-400/30" />

              <div className="relative z-10 grid min-h-[500px] md:grid-cols-[1fr_1.05fr]">

                {/* LEFT CONTENT */}
                <div className="relative flex flex-col justify-between border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">

                  <motion.div
                    key={activeSlide}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
                      {slides[activeSlide].title}
                    </p>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {slides[activeSlide].heading}
                    </h2>

                    <div className="mt-7 h-1 w-12 rounded-full bg-yellow-400" />

                    <p className="mt-8 max-w-sm text-base leading-7 text-blue-100 sm:text-lg">
                      {slides[activeSlide].description}
                    </p>
                  </motion.div>

                  {/* SLIDE INDICATORS */}
                  <div className="relative z-20 mt-10 flex gap-3">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show slide ${index + 1}`}
                        className={`h-3 rounded-full transition-all duration-300 ${
                          activeSlide === index
                            ? "w-8 bg-yellow-400"
                            : "w-3 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT SERVICES */}
                <div className="relative z-10 flex flex-col justify-center px-7 py-8 sm:px-9">

                  {/* Career Guidance */}
                  <div
                    className={`flex items-center gap-4 border-b border-white/10 py-6 transition-all duration-500 ${
                      activeSlide === 0
                        ? "translate-x-1 opacity-100"
                        : "opacity-70"
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5">
                      <Users
                        size={27}
                        className="text-white"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Career
                      </p>

                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Guidance
                      </p>
                    </div>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                      <span className="text-sm font-black text-[#123A6D]">
                        ✓
                      </span>
                    </div>
                  </div>

                  {/* Career Development */}
                  <div
                    className={`flex items-center gap-4 border-b border-white/10 py-6 transition-all duration-500 ${
                      activeSlide === 1
                        ? "translate-x-1 opacity-100"
                        : "opacity-70"
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5">
                      <BriefcaseBusiness
                        size={27}
                        className="text-white"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Career
                      </p>

                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Development
                      </p>
                    </div>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                      <span className="text-sm font-black text-[#123A6D]">
                        ✓
                      </span>
                    </div>
                  </div>

                  {/* Educational Guidance */}
                  <div
                    className={`flex items-center gap-4 py-6 transition-all duration-500 ${
                      activeSlide === 2
                        ? "translate-x-1 opacity-100"
                        : "opacity-70"
                    }`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/5">
                      <GraduationCap
                        size={27}
                        className="text-white"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Educational
                      </p>

                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Guidance
                      </p>
                    </div>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                      <span className="text-sm font-black text-[#123A6D]">
                        ✓
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean transition into next section */}
      <div className="relative h-16 bg-slate-50">
        <div className="absolute -top-8 left-0 h-16 w-full rounded-t-[50%] bg-slate-50" />
      </div>
    </motion.section>
  );
}