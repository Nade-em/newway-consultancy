import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";

import office1 from "../../assets/images/office/office-1.jpeg";
import office2 from "../../assets/images/office/office-2.jpeg";
import office3 from "../../assets/images/office/office-3.jpeg";
import office4 from "../../assets/images/office/office-4.jpeg";
import office5 from "../../assets/images/office/office-5.jpeg";

const officeImages = [
  office1,
  office2,
  office3,
  office4,
  office5,
];

const imageCaptions = [
  {
    title: "Personalised Counselling",
    text: "One-to-one guidance to help students understand courses, universities and admission opportunities.",
  },
  {
    title: "Our Consultancy Office",
    text: "A dedicated space where students and families can discuss education and career opportunities.",
  },
  {
    title: "Educational Guidance",
    text: "Helping students explore suitable academic pathways based on their goals and interests.",
  },
  {
    title: "University & Course Support",
    text: "Connecting students with information about institutions, programmes and admission options.",
  },
  {
    title: "Direct Student Interaction",
    text: "Our team works directly with students and families throughout their decision-making journey.",
  },
];

export default function OfficeShowcase() {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((previous) =>
        previous === officeImages.length - 1
          ? 0
          : previous + 1
      );
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 px-6 py-20 sm:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-yellow-400" />

            <span className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
              Our Work in Action
            </span>

            <span className="h-px w-12 bg-yellow-400" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#123A6D] sm:text-5xl">
            Guidance That Happens
            <span className="text-yellow-500"> In Person.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From one-to-one counselling to educational outreach,
            New Way Consultancy & Placement works directly with
            students and families to help them make informed
            decisions about education, admissions and career
            opportunities.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* IMAGE SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[420px] overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-2xl sm:h-[520px]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={officeImages[currentImage]}
                  alt="New Way Consultancy & Placement office and counselling activities"
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="h-full w-full rounded-[24px] object-cover"
                />
              </AnimatePresence>

              {/* Dark gradient */}
              <div className="pointer-events-none absolute inset-2 rounded-[24px] bg-gradient-to-t from-[#123A6D]/70 via-transparent to-transparent" />

              {/* Image caption */}
              <motion.div
                key={`caption-${currentImage}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-7 left-7 right-7"
              >
                <p className="text-sm font-bold uppercase tracking-[2px] text-yellow-300">
                  New Way Consultancy & Placement
                </p>

                <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  {imageCaptions[currentImage].title}
                </h3>
              </motion.div>
            </div>

            {/* Floating image indicator */}
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-xl">
              {officeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`View image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-8 bg-yellow-400"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#123A6D]/10 px-4 py-2 text-sm font-bold text-[#123A6D]">
              <Building2 size={17} />
              Real People. Real Guidance.
            </span>

            <h3 className="mt-6 text-3xl font-black leading-tight text-[#123A6D] sm:text-4xl">
              More Than Just
              <span className="text-yellow-500">
                {" "}Consultancy.
              </span>
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Our work is built around direct interaction with
              students, parents, candidates and organisations.
              Whether someone is exploring higher education,
              looking for admission guidance or seeking career
              opportunities, our team provides practical support
              throughout the process.
            </p>

            {/* Feature cards */}
            <div className="mt-8 space-y-4">

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                  <Users size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-[#123A6D]">
                    Student & Family Counselling
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Direct conversations that help students and
                    families understand their available options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#123A6D]">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-[#123A6D]">
                    Admission & Education Guidance
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Guidance on courses, institutions, admissions
                    and educational pathways in India and abroad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                  <Building2 size={23} />
                </div>

                <div>
                  <h4 className="font-bold text-[#123A6D]">
                    Institutional Outreach
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Connecting with educational institutions and
                    helping students discover relevant opportunities.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 font-bold text-[#123A6D] transition-colors hover:text-yellow-600"
            >
              Talk to our team

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}