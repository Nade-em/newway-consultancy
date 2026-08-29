import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  GraduationCap,
  BriefcaseBusiness,
  FileText,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "career-guidance",
    title: "Career Guidance",
    description:
      "Helping individuals understand their strengths, explore career options and make confident decisions about their professional future.",
    icon: Compass,
    iconClass: "bg-blue-100 text-[#123A6D]",
  },
  {
    id: "educational-guidance",
    title: "Educational Guidance",
    description:
      "Supporting students with course selection, admissions, educational pathways and decisions that align with their long-term goals.",
    icon: GraduationCap,
    iconClass: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "job-search-assistance",
    title: "Job Search Assistance",
    description:
      "Guiding job seekers through opportunity discovery, applications and practical strategies for navigating the employment market.",
    icon: BriefcaseBusiness,
    iconClass: "bg-green-100 text-green-600",
  },
  {
    id: "career-readiness",
    title: "Career Readiness",
    description:
      "Building practical skills for the workplace through resume support, interview preparation and professional readiness guidance.",
    icon: FileText,
    iconClass: "bg-purple-100 text-purple-600",
  },
  {
    id: "medical-education-guidance",
    title: "MBBS in India & Abroad",
    description:
      "Guidance for students seeking MBBS opportunities in India and abroad, including university selection, admission pathways, eligibility and application support.",
    icon: GraduationCap,
    iconClass: "bg-red-100 text-red-600",
  },
  {
    id: "professional-assistance",
    title: "Professional Assistance",
    description:
      "Offering responsive support throughout the recruitment, education and career development journey.",
    icon: Headphones,
    iconClass: "bg-cyan-100 text-cyan-600",
  },
];

const serviceDetails = [
  {
    id: "career-guidance",
    title: "Career Guidance",
    subtitle:
      "Helping individuals find clarity and direction in their career journey.",
    description:
      "Career decisions can be challenging. Career guidance provides practical support to help individuals understand their strengths, explore suitable opportunities and make informed decisions about their future.",
    points: [
      "Career direction and planning",
      "Career option exploration",
      "Goal setting and development planning",
      "Opportunity awareness",
      "Career transition guidance",
      "Long-term career planning",
    ],
  },
  {
    id: "educational-guidance",
    title: "Educational Guidance",
    subtitle:
      "Helping students make informed choices about education and their future.",
    description:
      "Choosing the right educational pathway is an important decision. Educational guidance helps students understand their options and make choices based on their interests, abilities and future aspirations.",
    points: [
      "Course and programme guidance",
      "Educational pathway planning",
      "Admission guidance",
      "Course selection support",
      "Academic decision support",
      "Long-term education planning",
    ],
  },
  {
    id: "job-search-assistance",
    title: "Job Search Assistance",
    subtitle:
      "Making the journey from job search to opportunity more focused.",
    description:
      "Job searching can be overwhelming. Practical assistance helps individuals discover relevant opportunities, understand application processes and approach their job search with greater confidence.",
    points: [
      "Job opportunity guidance",
      "Job search strategy",
      "Application guidance",
      "Opportunity identification",
      "Employment market awareness",
      "Job search planning",
    ],
  },
  {
    id: "career-readiness",
    title: "Career Readiness",
    subtitle:
      "Preparing individuals to approach professional opportunities with confidence.",
    description:
      "Career readiness focuses on the practical skills and preparation required to present yourself effectively and navigate professional opportunities.",
    points: [
      "Resume and CV guidance",
      "Interview preparation",
      "Professional communication",
      "Application support",
      "Workplace readiness",
      "Professional presentation",
    ],
  },
  {
    id: "medical-education-guidance",
    title: "MBBS in India & Abroad",
    subtitle:
      "Guiding students towards the right medical education opportunities.",
    description:
      "Dedicated guidance for students aspiring to pursue MBBS in India or abroad, with support in understanding universities, eligibility, admission pathways and important decisions throughout the application process.",
    points: [
      "MBBS admission guidance in India",
      "MBBS admission guidance abroad",
      "University and college selection",
      "Eligibility and admission guidance",
      "NEET-related guidance",
      "Application and documentation support",
    ],
  },
  {
    id: "professional-guidance",
    title: "Professional Guidance",
    subtitle:
      "Supporting individuals through important career and professional decisions.",
    description:
      "Professional guidance provides continued support as individuals navigate career transitions, development opportunities and changing professional goals.",
    points: [
      "Professional consultation",
      "Career transition guidance",
      "Development planning",
      "Opportunity guidance",
      "Professional decision support",
      "Ongoing career guidance",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-white py-24"
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

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#123A6D] sm:text-5xl">
            Professional Solutions.
            <span className="block text-yellow-500">
              Meaningful Opportunities.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide recruitment, HR, educational and career-focused
            services designed to connect people with opportunities and
            help organizations build stronger teams.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -7 }}
                className="group flex min-h-[360px] flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* ICON */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconClass}`}
                >
                  <Icon size={29} strokeWidth={1.9} />
                </div>

                {/* CONTENT */}
                <h3 className="mt-8 text-2xl font-bold text-[#123A6D]">
                  {service.title}
                </h3>

                <p className="mt-5 flex-1 text-base leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* LEARN MORE */}
                <a
                  href={
                    service.id === "educational-guidance"
                      ? "#education-programs"
                      : `#${service.id}`
                  }
                  className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-[#123A6D] transition-colors duration-300 hover:text-yellow-600"
                >
                  Learn More

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* DETAILED SERVICES */}
        <div className="mt-28">

          {/* DETAIL HEADER */}
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
              Service Details
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#123A6D] sm:text-5xl">
              How We Can Help
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Explore our services in more detail and understand how
              New Way Consultancy & Placement can support your goals.
            </p>
          </div>

          {/* DETAILS */}
          <div className="space-y-10">
            {serviceDetails.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-lg"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                  {/* LEFT */}
                  <div className="bg-[#123A6D] p-8 sm:p-10 lg:p-12">
                    <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-400">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-lg font-medium leading-8 text-blue-100">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <p className="text-lg leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={20}
                            className="mt-1 shrink-0 text-yellow-500"
                          />

                          <span className="font-medium leading-7 text-[#123A6D]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const servicesSection =
                          document.getElementById("services");

                        if (!servicesSection) return;

                        window.scrollTo({
                          top:
                            servicesSection.getBoundingClientRect().top +
                            window.scrollY -
                            110,
                          behavior: "smooth",
                        });
                      }}
                      className="mt-9 inline-flex items-center gap-2 font-semibold text-[#123A6D] transition-colors hover:text-yellow-600"
                    >
                      Back to Services

                      <ArrowRight
                        size={18}
                        className="rotate-[-90deg]"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}