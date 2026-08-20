import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
} from "lucide-react";

import office from "../../assets/images/office.png";
import { siteConfig } from "../../config/siteConfig";

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="font-semibold uppercase tracking-[4px] text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#123A6D] sm:text-5xl">
            Visit our office
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Have questions about your career or education?
            Connect with our team and find the right direction.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl sm:p-10"
          >

            {/* Address */}
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5"
            >
              <div className="mt-1 shrink-0 rounded-xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <MapPin
                  className="text-blue-600"
                  size={24}
                />
              </div>

              <div>
                <p className="text-xl font-semibold text-[#123A6D]">
                  {contact.address.line1}
                </p>

                <p className="mt-1 text-lg text-slate-600">
                  {contact.address.line2}
                </p>

                <p className="text-lg text-slate-600">
                  {contact.address.line3}
                </p>

                <p className="mt-3 text-sm font-semibold text-blue-600">
                  View location on Google Maps →
                </p>
              </div>
            </a>

            <div className="my-8 h-px bg-slate-100" />

            {/* WhatsApp */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5"
            >
              <div className="mt-1 shrink-0 rounded-xl bg-green-50 p-3 transition-colors group-hover:bg-green-100">
                <Phone
                  className="text-green-600"
                  size={24}
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </p>

                <p className="mt-1 text-lg font-semibold text-[#123A6D]">
                  +91 {contact.whatsapp}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Chat with us directly
                </p>
              </div>
            </a>

            <div className="my-8 h-px bg-slate-100" />

            {/* Email */}
            <a
              href={contact.emailUrl}
              className="group flex gap-5"
            >
              <div className="mt-1 shrink-0 rounded-xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <Mail
                  className="text-blue-600"
                  size={24}
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Official Email
                </p>

                <p className="mt-1 break-all text-lg font-semibold text-[#123A6D]">
                  {contact.email}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Send us an enquiry
                </p>
              </div>
            </a>

            <div className="my-8 h-px bg-slate-100" />

            {/* Office Hours */}
            <div className="flex gap-5">
              <div className="mt-1 shrink-0 rounded-xl bg-yellow-50 p-3">
                <Clock
                  className="text-yellow-600"
                  size={24}
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Office Hours
                </p>

                <p className="mt-1 text-lg font-semibold text-[#123A6D]">
                  {contact.officeHours.weekdays}
                </p>

                <p className="text-slate-600">
                  {contact.officeHours.hours}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {contact.officeHours.closed}
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 py-4 text-lg font-bold text-[#123A6D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
            >
              <Send size={20} />
              Get Directions
            </a>
          </motion.div>

          {/* Office Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] overflow-hidden rounded-[32px] shadow-xl"
          >
            <img
              src={office}
              alt="New Way Consultancy & Placement office"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123A6D]/70 via-[#123A6D]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
                New Way Consultancy & Placement
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Your next opportunity starts here.
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-white/80">
                Visit our office and speak directly with our team about
                your career, recruitment or educational requirements.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}