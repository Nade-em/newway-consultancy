import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import logo from "../../assets/images/logo.png";
import { siteConfig } from "../../config/siteConfig";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Educational Guidance",
  "Career Counselling",
  "Placement Assistance",
];

export default function Footer() {
  const { contact, social } = siteConfig;

  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <a href="#home" className="inline-flex">
              <img
                src={logo}
                alt="New Way Consultancy & Placement"
                className="h-16 w-auto rounded-xl bg-white p-2"
              />
            </a>

            <h2 className="mt-6 text-xl font-bold">
              New Way Consultancy & Placement
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-slate-300">
              Bridging ambition with the right opportunities through guidance and placement.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-[#123A6D]"
              >
                {/*Facebook size={18}*/}
              </a>

              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-[#123A6D]"
              >
                {/*Instagram size={18}*/}
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-[#123A6D]"
              >
              </a>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-[#123A6D]"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">
              Our Services
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin
                  className="mt-1 shrink-0 text-yellow-400"
                  size={20}
                />

                <span className="leading-6 text-slate-300 transition-colors group-hover:text-white">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.line3}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Phone
                  className="shrink-0 text-yellow-400"
                  size={20}
                />

                <span className="text-slate-300 transition-colors group-hover:text-white">
                  +91 {contact.whatsapp}
                </span>
              </a>

              {/* Email */}
              <a
                href={contact.emailUrl}
                className="flex items-start gap-3 group"
              >
                <Mail
                  className="mt-1 shrink-0 text-yellow-400"
                  size={20}
                />

                <span className="break-all text-slate-300 transition-colors group-hover:text-white">
                  {contact.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} New Way Consultancy &
              Placement. All rights reserved.
            </p>

            <p>
              A social enterprise initiative under ROSE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}