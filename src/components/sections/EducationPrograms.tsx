
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe2,
  Stethoscope,
  Phone,
  CheckCircle2,
} from "lucide-react";

import admissionsPoster from "../../assets/images/education-admissions-2026-27.jpeg";

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

const guidancePoints = [
  "MBBS admission guidance in India and abroad",
  "NEET-related guidance and admission support",
  "Direct admission guidance for eligible programmes",
  "Course and university selection assistance",
  "End-to-end admission support",
  "Career-oriented educational counselling",
];

export default function EducationPrograms() {
  return (
    <section
      id="education-programs"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background */}
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

        {/* HEADER */}
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

        {/* FEATURE AREA */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

          {/* POSTER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-lg"
          >
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-2xl">
              <img
                src={admissionsPoster}
                alt="New Way Consultancy & Placement educational admissions programmes 2026-27"
                className="h-auto w-full rounded-[20px]"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-yellow-100 p-3">
                <GraduationCap
                  size={28}
                  className="text-yellow-600"
                />
              </div>

              <span className="font-bold uppercase tracking-[2px] text-[#123A6D]">
                Admissions 2026–27
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
            <div className="mt-8 grid gap-4">
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
            <div className="mt-9 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
          </motion.div>
        </div>

        {/* PROGRAMMES */}
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

        {/* PRE-BOOKING CTA */}
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