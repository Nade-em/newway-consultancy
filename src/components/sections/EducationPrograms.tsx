import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  Stethoscope,
  Phone,
  Users,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    category: "Engineering & Technology",
    items: [
      "B.Tech",
      "M.Tech",
      "Diploma in Engineering",
      "BCA",
    ],
  },
  {
    category: "Medical & Health",
    items: [
      "MBBS",
      "BDS",
      "B.V.Sc",
      "Nursing",
      "Pharmacy",
      "B.Sc Nursing",
      "B.Sc MLT",
      "B.Sc MRIT",
      "B.Sc Optometry",
      "BPT",
      "BNYS",
    ],
  },
  {
    category: "Management & Commerce",
    items: [
      "BBA",
      "MBA",
      "B.Com",
      "M.Com",
      "MBA Hospital Administration",
    ],
  },
  {
    category: "Arts, Law & Humanities",
    items: [
      "B.A.",
      "LL.B",
      "LL.M",
      "B.Ed",
      "M.Ed",
      "Fine Arts",
      "Journalism",
    ],
  },
  {
    category: "Science",
    items: [
      "B.Sc",
      "M.Sc",
      "B.Sc Biotechnology",
      "B.Sc Agriculture",
      "B.Sc Hons",
    ],
  },
  {
    category: "Hospitality & Other Programs",
    items: [
      "Hotel Management",
      "Tourism",
      "Physical Education & Sports",
      "B.L.I.S.",
      "M.L.I.S.",
      "B.P.E.S.",
      "Merchant Navy",
    ],
  },
];

const guidanceSlides = [
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

const guidancePoints = [
  "MBBS admission guidance in India and abroad",
  "NEET-related guidance and admission support",
  "Direct admission guidance for eligible programmes",
  "Course and university selection assistance",
  "End-to-end admission support",
  "Career-oriented educational counselling",
];

export default function EducationPrograms() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % guidanceSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = guidanceSlides[activeSlide].icon;

  return (
    <section
      id="education-programs"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#123A6D 1px, transparent 1px),
            linear-gradient(90deg, #123A6D 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
            Education & Admissions
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#123A6D] sm:text-5xl">
            Build Your Future
            <span className="block text-yellow-500">
              With the Right Education.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore educational opportunities and receive professional
            guidance for admissions, course selection and career planning.
          </p>
        </motion.div>

        {/* =========================================================
            MOVED GUIDANCE / PLACEMENT PANEL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-[#123A6D]/20 bg-[#123A6D] shadow-2xl">

            {/* Decorative dots */}
            <div className="pointer-events-none absolute right-8 top-10 grid grid-cols-4 gap-4 opacity-25">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-blue-200"
                />
              ))}
            </div>

            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-yellow-400/30" />

            <div className="relative z-10 grid md:grid-cols-[1fr_1.05fr]">

              {/* LEFT CONTENT */}
              <div className="relative flex min-h-[460px] flex-col justify-between border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">

                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                    <ActiveIcon
                      size={28}
                      className="text-[#123A6D]"
                    />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
                    {guidanceSlides[activeSlide].title}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {guidanceSlides[activeSlide].heading}
                  </h3>

                  <div className="mt-7 h-1 w-12 rounded-full bg-yellow-400" />

                  <p className="mt-8 max-w-sm text-base leading-7 text-blue-100 sm:text-lg">
                    {guidanceSlides[activeSlide].description}
                  </p>
                </motion.div>

                {/* Slide Indicators */}
                <div className="relative z-20 mt-10 flex gap-3">
                  {guidanceSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show guidance slide ${index + 1}`}
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
                      : "opacity-65"
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
                      : "opacity-65"
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
                  className={`flex items-center gap-4 border-b border-white/10 py-6 transition-all duration-500 ${
                    activeSlide === 2
                      ? "translate-x-1 opacity-100"
                      : "opacity-65"
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

                {/* Placement Assistance */}
                <div
                  className={`mt-2 flex items-center gap-4 rounded-2xl border border-yellow-400/20 bg-white/[0.04] px-4 py-5 transition-all duration-500 ${
                    activeSlide === 2
                      ? "opacity-100"
                      : "opacity-80"
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                    <GraduationCap
                      size={24}
                      className="text-[#123A6D]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-base font-bold text-white sm:text-lg">
                      Placement Assistance
                    </p>
                    <p className="mt-1 text-sm text-blue-100">
                      Bridging Talent with Opportunities
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 sm:flex">
                    <ArrowRight
                      size={20}
                      className="text-[#123A6D]"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            EDUCATIONAL GUIDANCE CONTENT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg sm:p-10">

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-yellow-100 p-3">
                <GraduationCap
                  size={28}
                  className="text-yellow-600"
                />
              </div>

              <span className="font-bold uppercase tracking-[2px] text-[#123A6D]">
                Educational Guidance
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-black leading-tight text-[#123A6D] sm:text-4xl">
              From Course Selection
              <span className="block text-yellow-500">
                To Admission Support.
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              New Way Consultancy & Placement provides educational
              guidance for students and families exploring higher
              education opportunities in India and abroad.
            </p>

            {/* Guidance Points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {guidancePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-yellow-500"
                  />

                  <span className="font-medium leading-7 text-[#123A6D]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlight Cards */}
            <div className="mt-9 grid gap-4 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <Stethoscope
                  size={23}
                  className="text-[#123A6D]"
                />

                <p className="mt-3 font-bold text-[#123A6D]">
                  Medical
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  MBBS, BDS, Nursing & more
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <Globe2
                  size={23}
                  className="text-[#123A6D]"
                />

                <p className="mt-3 font-bold text-[#123A6D]">
                  India & Abroad
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Explore domestic and overseas options
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <BookOpen
                  size={23}
                  className="text-[#123A6D]"
                />

                <p className="mt-3 font-bold text-[#123A6D]">
                  Career Guidance
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Choose programmes aligned with your goals
                </p>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-[#123A6D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
              Talk to Our Team

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            PROGRAMMES
        ========================================================= */}
        <div className="mt-24">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
              Programmes Offered
            </span>

            <h3 className="mt-4 text-3xl font-black text-[#123A6D] sm:text-4xl">
              Explore Your Study Options
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              The programmes below are based on the educational
              information presented in the supplied admissions material.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {programs.map((program, index) => (
              <motion.div
                key={program.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-lg"
              >
                <h4 className="text-xl font-bold text-[#123A6D]">
                  {program.category}
                </h4>

                <div className="mt-5 space-y-3">
                  {program.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />

                      <span className="text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* =========================================================
            PRE-BOOKING CTA
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[32px] bg-[#123A6D] p-8 shadow-2xl sm:p-10 lg:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <span className="font-semibold uppercase tracking-[3px] text-yellow-400">
                Admissions Support
              </span>

              <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Secure Your Seat Early.
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                If you are planning your next academic step, connect
                with our team for programme information, admission
                guidance and career-oriented educational support.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-[#123A6D] transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              <Phone size={19} />
              Contact Us
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}