import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import director from "../../assets/images/team/director.jpeg";
import assistantDirector from "../../assets/images/team/assistant-director.png";
import marketingManager from "../../assets/images/team/marketing-manager.jpeg";

import { siteConfig } from "../../config/siteConfig";

export default function Team() {
  const { team } = siteConfig;

  return (
    <section
      id="team"
      className="relative z-10 bg-slate-50 px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-5">
            <span className="hidden h-px w-12 bg-yellow-400 sm:block" />

            <h2 className="text-3xl font-black text-[#123A6D] sm:text-4xl">
              Our Leadership Team
            </h2>

            <span className="hidden h-px w-12 bg-yellow-400 sm:block" />
          </div>

          <p className="mt-2 text-base text-slate-500">
            Connect directly with our leadership team
          </p>
        </div>

        {/* Team Members */}
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
          <div className="grid md:grid-cols-3">

            {team.map((member, index) => {

              /* Force the correct image for each person */
              const personImage =
                index === 0
                  ? director
                  : index === 1
                    ? assistantDirector
                    : marketingManager;

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col items-center border-b border-slate-200 px-6 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
                >

                  {/* REAL PHOTO */}
                  <div className="mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg">
                    <img
                      src={personImage}
                      alt={`${member.name} - ${member.role}`}
                      className="block h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* Information */}
                  <div>
                    <h3 className="text-xl font-black text-[#123A6D]">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-yellow-600">
                      {member.role}
                    </p>

                    <a
                      href={member.href}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#123A6D]"
                    >
                      <Phone size={15} />
                      <span>+91 {member.phone}</span>
                    </a>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}