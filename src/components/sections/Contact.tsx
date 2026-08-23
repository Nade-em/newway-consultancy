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

  /*
   * Build the Google Maps URL directly from the office address.
   *
   * This prevents Google Maps from opening around the user's
   * current location instead of the actual office.
   */
  const officeAddress = [
    contact.address.line1,
    contact.address.line2,
    contact.address.line3,
    "India",
  ]
    .filter(Boolean)
    .join(", ");

  const googleMapsUrl = `https://maps.app.goo.gl/4kjJrhRSPEdmpBDo9?g_st=aw${encodeURIComponent(
    officeAddress
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}
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

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Have questions about your career or education?
            Connect with our team and find the right direction.
          </p>
        </motion.div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
          >

            {/* ADDRESS */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open office location in Google Maps"
              className="group flex gap-4 sm:gap-5"
            >
              <div className="mt-1 flex h-fit shrink-0 rounded-xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <MapPin
                  className="text-blue-600"
                  size={24}
                />
              </div>

              <div className="min-w-0">
                <p className="text-lg font-semibold text-[#123A6D] sm:text-xl">
                  {contact.address.line1}
                </p>

                <p className="mt-1 text-base text-slate-600 sm:text-lg">
                  {contact.address.line2}
                </p>

                <p className="text-base text-slate-600 sm:text-lg">
                  {contact.address.line3}
                </p>

                <p className="mt-3 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                  View location on Google Maps →
                </p>
              </div>
            </a>

            <div className="my-7 h-px bg-slate-100 sm:my-8" />

            {/* WHATSAPP */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 sm:gap-5"
            >
              <div className="mt-1 flex h-fit shrink-0 rounded-xl bg-green-50 p-3 transition-colors group-hover:bg-green-100">
                <Phone
                  className="text-green-600"
                  size={24}
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </p>

                <p className="mt-1 text-base font-semibold text-[#123A6D] sm:text-lg">
                  +91 {contact.whatsapp}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Chat with us directly
                </p>
              </div>
            </a>

            <div className="my-7 h-px bg-slate-100 sm:my-8" />

            {/* EMAIL */}
            <a
              href={contact.emailUrl}
              className="group flex gap-4 sm:gap-5"
            >
              <div className="mt-1 flex h-fit shrink-0 rounded-xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <Mail
                  className="text-blue-600"
                  size={24}
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Official Email
                </p>

                <p className="mt-1 break-all text-base font-semibold text-[#123A6D] sm:text-lg">
                  {contact.email}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Send us an enquiry
                </p>
              </div>
            </a>

            <div className="my-7 h-px bg-slate-100 sm:my-8" />

            {/* OFFICE HOURS */}
            <div className="flex gap-4 sm:gap-5">
              <div className="mt-1 flex h-fit shrink-0 rounded-xl bg-yellow-50 p-3">
                <Clock
                  className="text-yellow-600"
                  size={24}
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Office Hours
                </p>

                <p className="mt-1 text-base font-semibold text-[#123A6D] sm:text-lg">
                  {contact.officeHours.weekdays}
                </p>

                <p className="text-sm text-slate-600 sm:text-base">
                  {contact.officeHours.hours}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {contact.officeHours.closed}
                </p>
              </div>
            </div>

            {/* =========================
                GET DIRECTIONS
            ========================== */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to office"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 py-4 text-base font-bold text-[#123A6D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg sm:mt-10 sm:text-lg"
            >
              <Send size={20} />
              Get Directions
            </a>
          </motion.div>

          {/* =========================
              OFFICE IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-[32px] shadow-xl sm:min-h-[500px]"
          >
            <img
              src={office}
              alt="New Way Consultancy & Placement office"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123A6D]/80 via-[#123A6D]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400 sm:text-sm">
                New Way Consultancy & Placement
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Your next opportunity starts here.
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
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