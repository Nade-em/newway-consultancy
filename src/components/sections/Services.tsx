import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  GraduationCap,
  Headphones,
  Users,
} from "lucide-react";

const services = [
  {
    id: "career-guidance",
    title: "Career Guidance",
    description:
      "Helping individuals understand their strengths, explore career options and make confident decisions about their future.",
    icon: Compass,
  },
  {
    id: "career-development",
    title: "Career Development",
    description:
      "Building professional skills, improving employability and preparing candidates for meaningful career opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    id: "educational-guidance",
    title: "Educational Guidance",
    description:
      "Support for educational planning, admissions and learning opportunities aligned with your goals.",
    icon: GraduationCap,
  },
  {
    id: "placement-services",
    title: "Placement Services",
    description:
      "Connecting candidates with suitable employment opportunities and supporting them throughout the placement journey.",
    icon: Users,
  },
  {
    id: "professional-support",
    title: "Professional Support",
    description:
      "Practical guidance, counselling and support to help individuals move confidently toward their professional goals.",
    icon: Headphones,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#123A6D] py-20 sm:py-24"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-yellow-400/20" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full border border-yellow-400/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-yellow-400 sm:text-base">
            Our Services
          </p>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Choose Your{" "}
            <span className="text-yellow-400">Path.</span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Discover the right support for your education, career and
            professional journey. We help you move forward with clarity and
            confidence.
          </p>
        </motion.div>

        {/* Main services panel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#0E376B]/90 shadow-2xl backdrop-blur-sm"
        >
          {/* Decorative area
              IMPORTANT:
              This is kept separate from the text content so
              the wave can never overlap the paragraph.
          */}
          <div className="pointer-events-none relative h-32 overflow-hidden sm:h-40">
            {/* Violet wave */}
            <svg
              viewBox="0 0 1200 220"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="serviceWaveGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#A66CFF" />
                  <stop offset="50%" stopColor="#C678FF" />
                  <stop offset="100%" stopColor="#8C4DFF" />
                </linearGradient>
              </defs>

              <path
                d="M0 135 C170 205 290 45 470 85 C650 125 730 215 900 130 C1030 65 1110 70 1200 125 L1200 220 L0 220 Z"
                fill="url(#serviceWaveGradient)"
                opacity="0.9"
              />

              <path
                d="M0 125 C170 195 290 35 470 75 C650 115 730 205 900 120 C1030 55 1110 60 1200 115"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="8"
              />
            </svg>
          </div>

          {/* Content area */}
          <div className="relative px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 sm:text-sm">
                Educational Guidance
              </p>

              <h3 className="text-3xl font-black text-white sm:text-4xl">
                Find the right direction.
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
                Support for education, admissions, career planning and
                meaningful opportunities that are aligned with your goals.
              </p>
            </div>

            {/* Service indicators */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-blue-300/50" />
              <span className="h-3 w-12 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-blue-300/50" />
            </div>

            {/* Service list */}
            <div className="divide-y divide-white/10">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center gap-4 py-6 sm:gap-6 sm:py-7"
                  >
                    {/* Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 sm:h-20 sm:w-20">
                      <Icon
                        size={30}
                        strokeWidth={1.8}
                        className="text-blue-100 transition-colors duration-300 group-hover:text-yellow-400 sm:h-9 sm:w-9"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xl font-bold text-white sm:text-2xl">
                        {service.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-blue-100 sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    {/* Check */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 sm:h-11 sm:w-11">
                      <CheckCircle2
                        size={24}
                        strokeWidth={2.5}
                        className="text-[#123A6D]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-white/10 bg-[#0B315F]/70 px-6 py-6 sm:px-10">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-bold text-white">
                  Not sure which path is right for you?
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  Talk to our team and get personalised guidance.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 font-bold text-[#123A6D] transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg sm:w-auto"
              >
                Talk to Us
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom service cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              number: "500+",
              label: "Career Opportunities",
            },
            {
              number: "5000+",
              label: "Candidates Guided",
            },
            {
              number: "17+",
              label: "Years Experience",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-3xl font-black text-white">
                {item.number}
              </p>

              <p className="mt-2 text-sm font-medium text-blue-100">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}