import AnimatedCounter from "../common/AnimatedCounter";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  Users,
} from "lucide-react";

import office from "../../assets/images/office-interior.png";
import { fadeLeft, fadeRight, fadeUp } from "../../utils/animations";

const services = [
  {
    title: "Educational Guidance",
    description:
      "Helping students choose the right educational path,institutions, admissions pathways and career planning for a brighter future.",
    icon: BriefcaseBusiness,
    iconClass: "bg-blue-100 text-[#123A6D]",
  },
  {
    title: "Career Counselling",
    description:
      "Helping individuals understand their strengths, interests, and suitable career paths",
    icon: GraduationCap,
    iconClass: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Placement Assistance",
    description:
      "Connecting qualified candidates with suitable job opportunities and supporting them through the placement process",
    icon: Users,
    iconClass: "bg-green-100 text-green-600",
  },
];
export default function About() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Grid */}
      {/* Background Grid */}
<div
  className="pointer-events-none absolute inset-0 opacity-[0.035]"
  aria-hidden="true"
>
  <div
    className="h-full w-full"
    style={{
      backgroundImage: `
        linear-gradient(#123A6D 1px, transparent 1px),
        linear-gradient(90deg, #123A6D 1px, transparent 1px)
      `,
      backgroundSize: "70px 70px",
    }}
  />
</div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image Side */}
        <motion.div
          variants={fadeLeft}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
            <img
              src={office}
              alt="New Way Consultancy & Placement office"
              className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:h-[650px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123A6D]/30 via-transparent to-transparent" />
          </div>

          {/* Experience Card */}
          <motion.div
            variants={fadeRight}
            className="absolute -bottom-6 right-4 rounded-3xl border border-white/70 bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:-right-8 sm:p-7"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-4xl font-black text-[#123A6D] sm:text-5xl">
              17+
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Years of Excellence
            </p>
          </motion.div>

          {/* Decorative Element */}
          <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-3xl border border-yellow-400/40 sm:-left-8 sm:-top-8" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          variants={fadeRight}
        >
          <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
            About Us
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#123A6D] sm:text-5xl">
            Guiding Careers,
            <br />
            Empowering Futures.
          </h2>

          <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
            New Way Consultancy & Placement is a social enterprise initiative under Rural Organisation for Social Empowerment (ROSE), 
            dedicated to educational guidance, career counselling, placement assistance, and career development. 
            The organization connects ambition with meaningful opportunities, provides direction for informed career decisions, 
            and supports individuals in building purposeful career paths.
          </p>

          {/* Service Cards */}
          <div className="mt-10 space-y-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg"
                >
                  <div
                    className={`shrink-0 rounded-2xl p-3 ${service.iconClass}`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123A6D]">
                      {service.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Statement */}
          <div className="group mt-9 flex items-center gap-3 font-semibold text-[#123A6D]">
            <BadgeCheck
              className="shrink-0 text-yellow-500"
              size={24}
            />

            <span>Trusted by Candidates & Employers</span>
          </div>

          
          {/* Statistics */}
<div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-slate-200 pt-10">
  <div>
    <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
      <AnimatedCounter value={17} suffix="+" />
    </h3>

    <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
      Years Experience
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
      <AnimatedCounter value={5000} suffix="+" />
    </h3>

    <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
      Candidates Guided
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
      <AnimatedCounter value={500} suffix="+" />
    </h3>

    <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
      Career Opportunities
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
      <AnimatedCounter value={24} suffix="/7" />
    </h3>

    <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
      Professional Support
    </p>
  </div>
</div>
        </motion.div>
      </div>
    </motion.section>
  );
}