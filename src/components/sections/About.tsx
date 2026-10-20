import AnimatedCounter from "../common/AnimatedCounter";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Building2,
  BookOpenCheck,
  Handshake,
  Quote,
} from "lucide-react";

import director from "../../assets/images/director.jpeg";
import { fadeLeft, fadeRight, fadeUp } from "../../utils/animations";

const services = [
  {
    title: "Educational Guidance",
    description:
      "Helping students explore educational pathways, choose suitable institutions, and make informed decisions about admissions and their future careers.",
    icon: BriefcaseBusiness,
    iconClass: "bg-blue-100 text-[#123A6D]",
  },
  {
    title: "Academic Mentoring & Career Counselling",
    description:
      "Providing continuous academic mentoring, personalized career guidance, and counselling to help young people understand their strengths and prepare for real-world challenges.",
    icon: GraduationCap,
    iconClass: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Training & Placement Assistance",
    description:
      "Building connections with universities, corporates, industries, and research organizations to help candidates access training and meaningful placement opportunities.",
    icon: Users,
    iconClass: "bg-green-100 text-green-600",
  },
];

const highlights = [
  {
    title: "Established in 2008",
    description:
      "Working to support educational development and career opportunities.",
    icon: Building2,
  },
  {
    title: "Higher Education",
    description:
      "Connecting students with educational pathways in India and internationally.",
    icon: BookOpenCheck,
  },
  {
    title: "University & Industry Connections",
    description:
      "Building relationships with universities, corporates, industries, and research organizations.",
    icon: Handshake,
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
            About Us
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#123A6D] sm:text-5xl">
            Guiding Careers,
            <br className="hidden sm:block" /> Empowering Futures.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Promoting excellence in higher education, nurturing budding
            talent, and helping individuals move towards a brighter future.
          </p>
        </motion.div>

        {/* Main Introduction */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Director Photo */}
          <motion.div variants={fadeLeft} className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-28 w-28 rounded-3xl border-2 border-yellow-400/60 sm:-left-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src={director}
                  alt="M. M. Rahaman, Director of New Way Consultancy & Placement"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="px-4 pb-4 pt-5 text-center">
                <p className="text-xl font-extrabold text-[#123A6D] sm:text-2xl">
                  M. M. Rahaman
                </p>
                <p className="mt-1 font-semibold text-yellow-600">
                  Director, NWCP
                </p>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-400" />
              </div>
            </div>

            {/* Established Badge */}
            
          </motion.div>

          {/* About Content */}
          <motion.div variants={fadeRight} className="pt-2 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
              Our Story & Mission
            </span>

            <h3 className="mt-4 text-2xl font-black leading-snug text-[#123A6D] sm:text-3xl">
              Creating pathways to education, growth, and opportunity.
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              New Way Consultancy &amp; Placement was established in 2008
              under the Rural Organization for Social Empowerment (ROSE),
              registered under No. 2450 of 1998, Government of Manipur.
              The organization is situated at Babupara, B.O.S.E.M. Leirak,
              Imphal, Manipur – 795001.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              We strive to promote excellence in higher education for a
              vibrant and inclusive society through the creation and
              dissemination of knowledge. We are committed to nurturing
              budding talent and supporting the holistic development of
              young minds so they can face real-world challenges with
              confidence.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Through our connections with universities in India and
              internationally, corporates, industries, and research
              organizations, we work to provide training and placement
              opportunities. We also support prospective students through
              continuous academic mentoring, personalized career guidance,
              and counselling when needed.
            </p>

            {/* Mission Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="shrink-0 rounded-xl bg-blue-50 p-3 text-[#123A6D]">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#123A6D]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div variants={fadeUp} className="mt-20 sm:mt-24">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
              How We Help
            </span>
            <h3 className="mt-3 text-2xl font-black text-[#123A6D] sm:text-3xl">
              Supporting Your Next Step
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Guidance and support to help students and candidates make
              informed decisions about their futures.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg sm:p-7"
                >
                  <div
                    className={`inline-flex rounded-2xl p-3 ${service.iconClass}`}
                  >
                    <Icon size={25} />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#123A6D]">
                    {service.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Director's Welcome Message */}
        <motion.div
          variants={fadeUp}
          className="mt-16 overflow-hidden rounded-[28px] bg-[#123A6D] p-7 shadow-xl sm:mt-20 sm:p-10 lg:p-12"
        >
          <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-[#123A6D]">
              <Quote size={30} />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-400">
                A Message from Our Director
              </span>

              <p className="mt-4 text-lg leading-8 text-white sm:text-xl">
                We welcome our students and hope they have an engaging and
                enriching time with New Way Consultancy &amp; Placement.
                We wish every student a promising and successful career
                and life.
              </p>

              <div className="mt-6 border-l-2 border-yellow-400 pl-4">
                <p className="font-bold text-white">M. M. Rahaman</p>
                <p className="mt-1 text-sm text-slate-300">
                  Director, New Way Consultancy &amp; Placement
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <div className="mt-12 flex items-center justify-center gap-3 text-center font-semibold text-[#123A6D]">
          <BadgeCheck className="shrink-0 text-yellow-500" size={25} />
          <span>Guidance, Education &amp; Career Development</span>
        </div>

        {/* Existing Statistics */}
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-slate-200 pt-10 sm:grid-cols-4 sm:gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
              <AnimatedCounter value={17} suffix="+" />
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
              <AnimatedCounter value={5000} suffix="+" />
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              Candidates Guided
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
              <AnimatedCounter value={500} suffix="+" />
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              Career Opportunities
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
              <AnimatedCounter value={24} suffix="/7" />
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              Professional Support
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
