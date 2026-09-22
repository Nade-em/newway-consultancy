import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Search,
  X,
} from "lucide-react";

// ─────────────────────────────────────────────
// LOGOS
// ─────────────────────────────────────────────

import dayanandaSagar from "../../assets/images/education-network/dayananda-sagar.png";
import moogambigai from "../../assets/images/education-network/moogambigai.png";
import sriChamundeshwari from "../../assets/images/education-network/sri-chamundeshwari.png";
import presidencyUniversity from "../../assets/images/education-network/presidency-university.png";
import guruNanakInstitutions from "../../assets/images/education-network/guru-nanak-institutions.png";
import jain from "../../assets/images/education-network/jain.png";
import rvUniversity from "../../assets/images/education-network/rv-university.png";
import akashGroup from "../../assets/images/education-network/akash-group.png";
import eastPoint from "../../assets/images/education-network/east-point.png";
import chandigarhUniversity from "../../assets/images/education-network/chandigarh-university.png";
import srmist from "../../assets/images/education-network/srmist.png";
import sgtUniversity from "../../assets/images/education-network/sgt-university.png";
import gniotGroup from "../../assets/images/education-network/gniot-group.png";
import shardaUniversity from "../../assets/images/education-network/sharda-university.png";
import sharadaGroup from "../../assets/images/education-network/sharada-group.png";
import rajarajeshwariMedical from "../../assets/images/education-network/rajarajeshwari-medical-college.png";
import krupanidhiGroup from "../../assets/images/education-network/krupanidhi-group.png";
import bgiBangalore from "../../assets/images/education-network/bgi-bangalore-group.png";
import shaheenGroup from "../../assets/images/education-network/shaheen-group.png";
import bmsce from "../../assets/images/education-network/bms-college-engineering.webp";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

type Region = "India" | "Abroad";

type InstitutionType =
  | "University"
  | "Engineering College"
  | "Medical College"
  | "Nursing College"
  | "Education Group";

interface Institution {
  id: number;
  name: string;
  shortName?: string;
  region: Region;
  type: InstitutionType;
  location: string;
  logo: string;
  about: string;
  areas: string[];
  programs: string[];
  affiliation?: string;
  website: string;
}

// ─────────────────────────────────────────────
// INSTITUTIONS
// ─────────────────────────────────────────────

const institutions: Institution[] = [
  {
    id: 1,
    name: "Dayananda Sagar University",
    shortName: "DSU",
    region: "India",
    type: "University",
    location: "Bengaluru, Karnataka",
    logo: dayanandaSagar,
    about:
      "Dayananda Sagar University is a multidisciplinary university offering programs across engineering, computing, management, health sciences and pharmacy.",
    areas: [
      "Engineering",
      "Computing",
      "Management",
      "Health Sciences",
      "Pharmacy",
    ],
    programs: [
      "B.Tech",
      "BCA",
      "BBA",
      "B.Sc Nursing",
      "B.Pharm",
      "Pharm.D",
      "BPT",
      "MBA",
      "M.Tech",
      "M.Sc Nursing",
      "MPT",
    ],
    affiliation: "University-level institution",
    website: "https://www.dsu.edu.in/",
  },

  {
    id: 2,
    name: "Moogambigai College of Nursing",
    shortName: "MCON",
    region: "India",
    type: "Nursing College",
    location: "Bengaluru, Karnataka",
    logo: moogambigai,
    about:
      "Moogambigai College of Nursing focuses on nursing education, clinical training and healthcare education.",
    areas: [
      "Nursing",
      "Clinical Training",
      "Healthcare Education",
    ],
    programs: ["B.Sc Nursing"],
    affiliation: "Affiliated to Rajiv Gandhi University of Health Sciences; recognized by INC and KNC",
    website: "https://mcon.edu.in/",
  },

  {
    id: 3,
    name: "Sri Chamundeshwari Medical College, Hospital & Research Institute",
    shortName: "SCMCH",
    region: "India",
    type: "Medical College",
    location: "Channapatna, Karnataka",
    logo: sriChamundeshwari,
    about:
      "Sri Chamundeshwari Medical College, Hospital & Research Institute provides medical education along with hospital-based clinical exposure and research activities.",
    areas: [
      "Medical Education",
      "Healthcare",
      "Clinical Training",
      "Research",
    ],
    programs: ["MBBS"],
    affiliation: "Affiliated to Rajiv Gandhi University of Health Sciences; NMC statutory framework",
    website: "https://college.scmch.org/",
  },

  {
    id: 4,
    name: "Presidency University",
    shortName: "Presidency University",
    region: "India",
    type: "University",
    location: "Bengaluru, Karnataka",
    logo: presidencyUniversity,
    about:
      "Presidency University is a multidisciplinary university with academic offerings spanning engineering, computing, management, design, law and healthcare-related fields.",
    areas: [
      "Engineering",
      "Computing",
      "Management",
      "Design",
      "Law",
      "Healthcare",
    ],
    programs: [
      "B.Tech",
      "BBA",
      "BCA",
      "B.Com",
      "B.Des",
      "MBA",
      "MCA",
      "M.Tech",
      "LLM",
    ],
    affiliation: "University",
    website: "https://presidencyuniversity.in/",
  },

  {
    id: 5,
    name: "Guru Nanak Institutions",
    shortName: "GNI",
    region: "India",
    type: "Education Group",
    location: "Ibrahimpatnam, Hyderabad, Telangana",
    logo: guruNanakInstitutions,
    about:
      "Guru Nanak Institutions is an education group with institutions and programs across engineering, management, pharmacy, dental and healthcare education.",
    areas: [
      "Engineering",
      "Management",
      "Pharmacy",
      "Dental",
      "Healthcare",
    ],
    programs: [
      "Engineering Programs",
      "Management Programs",
      "Pharmacy Programs",
      "Dental Programs",
      "Healthcare Programs",
    ],
    affiliation: "Multiple institutions within the Guru Nanak Institutions group",
    website: "https://www.gniindia.org/",
  },

  {
    id: 6,
    name: "JAIN (Deemed-to-be University)",
    shortName: "JAIN",
    region: "India",
    type: "University",
    location: "Bengaluru, Karnataka",
    logo: jain,
    about:
      "JAIN (Deemed-to-be University) offers multidisciplinary education across engineering, technology, management, commerce, sciences, humanities, design, law and allied fields.",
    areas: [
      "Engineering & Technology",
      "Management",
      "Commerce",
      "Sciences",
      "Humanities",
      "Design",
      "Law",
      "Allied Healthcare",
    ],
    programs: [
      "Undergraduate Programs",
      "Postgraduate Programs",
      "Engineering Programs",
      "Management Programs",
      "Commerce Programs",
      "Science Programs",
      "Law Programs",
      "Ph.D. Programs",
    ],
    affiliation: "Deemed-to-be University",
    website: "https://www.jainuniversity.ac.in/",
  },

  {
    id: 7,
    name: "RV University",
    shortName: "RVU",
    region: "India",
    type: "University",
    location: "Bengaluru, Karnataka",
    logo: rvUniversity,
    about:
      "RV University offers undergraduate, postgraduate and doctoral education through multiple academic schools.",
    areas: [
      "Liberal Arts & Sciences",
      "Design",
      "Technology",
      "Management",
      "Law",
    ],
    programs: [
      "Undergraduate Programs",
      "Postgraduate Programs",
      "Doctoral Programs",
      "Design Programs",
      "Liberal Arts Programs",
      "Technology Programs",
    ],
    affiliation: "University",
    website: "https://rvu.edu.in/",
  },

  {
    id: 8,
    name: "Akash Group of Institutions",
    shortName: "Akash Group",
    region: "India",
    type: "Education Group",
    location: "Bengaluru, Karnataka",
    logo: akashGroup,
    about:
      "Akash Group of Institutions offers education across medicine, nursing, physiotherapy, allied health sciences, pharmacy, engineering, management and related disciplines.",
    areas: [
      "Medicine",
      "Nursing",
      "Physiotherapy",
      "Allied Health Sciences",
      "Pharmacy",
      "Engineering",
      "Management",
      "Life Sciences",
    ],
    programs: [
      "MBBS",
      "Nursing",
      "Physiotherapy",
      "Allied Health Programs",
      "Pharmacy",
      "Engineering",
      "Management",
      "Computer Applications",
      "Paramedical Programs",
    ],
    affiliation: "Multiple affiliated and approved institutions",
    website: "https://www.akashinstitutions.com/",
  },

  {
    id: 9,
    name: "East Point Group of Institutions",
    shortName: "East Point",
    region: "India",
    type: "Education Group",
    location: "Bengaluru, Karnataka",
    logo: eastPoint,
    about:
      "East Point Group of Institutions is a multidisciplinary education group covering medical, engineering, pharmacy, nursing, physiotherapy, management and allied disciplines.",
    areas: [
      "Medical",
      "Engineering",
      "Pharmacy",
      "Nursing",
      "Physiotherapy",
      "Management",
      "Computer Applications",
      "Allied Sciences",
    ],
    programs: [
      "MBBS",
      "Engineering Programs",
      "B.Pharm",
      "Nursing",
      "Physiotherapy",
      "B.Com",
      "BBA",
      "BCA",
      "BCA AI",
      "BCA Data Science",
      "MBA",
      "MCA",
      "M.Com",
    ],
    affiliation: "Multiple affiliated institutions",
    website: "https://www.eastpoint.ac.in/",
  },

  {
    id: 10,
    name: "Chandigarh University",
    shortName: "CU",
    region: "India",
    type: "University",
    location: "Mohali, Punjab",
    logo: chandigarhUniversity,
    about:
      "Chandigarh University is a multidisciplinary university offering programs across engineering, management, computing, health sciences, law, architecture, humanities and other fields.",
    areas: [
      "Engineering",
      "Management",
      "Computing",
      "Allied Health Sciences",
      "Architecture",
      "Law",
      "Arts & Humanities",
      "Animation & Multimedia",
    ],
    programs: [
      "Engineering Programs",
      "Management Programs",
      "Computing Programs",
      "Allied Health Programs",
      "Architecture",
      "Law",
      "Arts & Humanities",
    ],
    affiliation: "University",
    website: "https://www.cuchd.in/",
  },

  {
    id: 11,
    name: "SRM Institute of Science and Technology",
    shortName: "SRMIST",
    region: "India",
    type: "University",
    location: "Tamil Nadu / NCR and other campuses",
    logo: srmist,
    about:
      "SRM Institute of Science and Technology is a multidisciplinary institution with campuses offering programs in engineering, management, medicine, health sciences, science, humanities, law and other disciplines.",
    areas: [
      "Engineering",
      "Management",
      "Medicine",
      "Health Sciences",
      "Science",
      "Humanities",
      "Law",
      "Agriculture",
      "Hotel Management",
    ],
    programs: [
      "UG Programs",
      "PG Programs",
      "Doctoral Programs",
      "Engineering",
      "Management",
      "Medicine",
      "Health Sciences",
      "Science & Humanities",
    ],
    affiliation: "Deemed-to-be University",
    website: "https://www.srmist.edu.in/",
  },

  {
    id: 12,
    name: "SGT University",
    shortName: "SGTU",
    region: "India",
    type: "University",
    location: "Gurugram, Haryana",
    logo: sgtUniversity,
    about:
      "SGT University is a multidisciplinary university offering programs across medical and non-medical streams.",
    areas: [
      "Engineering",
      "Business & Management",
      "Law",
      "Medicine",
      "Dentistry",
      "Allied Health",
      "Nursing",
      "Pharmacy",
      "Physiotherapy",
      "Agriculture",
      "Humanities",
    ],
    programs: [
      "Engineering Programs",
      "Management Programs",
      "Law Programs",
      "Medical Programs",
      "Dental Programs",
      "Nursing",
      "Pharmacy",
      "Physiotherapy",
      "Agriculture",
      "Humanities",
    ],
    affiliation: "UGC-recognized university",
    website: "https://sgtuniversity.ac.in/",
  },

  {
    id: 13,
    name: "GNIOT Group of Institutions",
    shortName: "GNIOT",
    region: "India",
    type: "Education Group",
    location: "Greater Noida, Uttar Pradesh",
    logo: gniotGroup,
    about:
      "GNIOT Group of Institutions provides higher education across engineering, management, computer applications, commerce and related disciplines.",
    areas: [
      "Engineering",
      "Management",
      "Computer Applications",
      "Commerce",
      "Computer Science",
    ],
    programs: [
      "B.Tech",
      "MBA",
      "PGDM",
      "BBA",
      "BCA",
      "B.Com",
      "B.Sc Computer Science",
      "M.Tech",
      "MCA",
      "Integrated Programs",
    ],
    affiliation: "Engineering programs approved by AICTE and affiliated to AKTU",
    website: "https://www.gniotgroup.edu.in/",
  },

  {
    id: 14,
    name: "Sharda University",
    shortName: "Sharda University",
    region: "India",
    type: "University",
    location: "Greater Noida, Uttar Pradesh",
    logo: shardaUniversity,
    about:
      "Sharda University offers multidisciplinary programs across computing, engineering, management, humanities, media, design, pharmacy, biosciences, allied health, dental, nursing and medicine.",
    areas: [
      "Computing Science",
      "Engineering",
      "Management",
      "Humanities",
      "Media",
      "Design",
      "Pharmacy",
      "Biosciences",
      "Allied Health",
      "Medical",
      "Nursing",
      "Dental",
    ],
    programs: [
      "Engineering",
      "Management",
      "Computer Applications",
      "Design",
      "Law",
      "Journalism",
      "Sciences",
      "Biotechnology",
      "Pharmacy",
      "Medical",
      "Nursing",
      "Allied Health",
    ],
    affiliation: "University",
    website: "https://www.sharda.ac.in/",
  },

  {
    id: 15,
    name: "Sharada Group of Institutions",
    shortName: "Sharada Group",
    region: "India",
    type: "Education Group",
    location: "Mangaluru, Karnataka",
    logo: sharadaGroup,
    about:
      "Sharada Group of Institutions operates educational institutions covering school education, pre-university, degree education and healthcare-related education.",
    areas: [
      "School Education",
      "Pre-University",
      "Degree Education",
      "Ayurveda",
      "Yoga & Naturopathy",
      "Healthcare",
    ],
    programs: [
      "School Education",
      "PU College",
      "Degree Programs",
      "Ayurveda",
      "Yoga & Naturopathy",
    ],
    affiliation: "Institutions operated by Tulunad Educational Trust",
    website: "https://sharadagroup.in/",
  },

  {
    id: 16,
    name: "RajaRajeswari Medical College & Hospital",
    shortName: "RRMCH",
    region: "India",
    type: "Medical College",
    location: "Bengaluru, Karnataka",
    logo: rajarajeshwariMedical,
    about:
      "RajaRajeswari Medical College & Hospital provides medical education, postgraduate medical education and allied health education alongside hospital-based clinical training.",
    areas: [
      "Medical Education",
      "Clinical Training",
      "Healthcare",
      "Allied Health",
      "Medical Research",
    ],
    programs: [
      "MBBS",
      "MD",
      "MS",
      "Super Specialty Programs",
      "B.Sc Allied Health",
      "Paramedical Programs",
    ],
    affiliation: "Recognized by NMC; affiliated with Rajiv Gandhi University of Health Sciences for relevant programs",
    website: "https://www.rrmch.org/",
  },

  {
    id: 17,
    name: "Krupanidhi Group of Institutions",
    shortName: "Krupanidhi",
    region: "India",
    type: "Education Group",
    location: "Bengaluru, Karnataka",
    logo: krupanidhiGroup,
    about:
      "Krupanidhi Group of Institutions offers education through its business school, degree college, pharmacy, physiotherapy, nursing, PUC and school institutions.",
    areas: [
      "Business & Management",
      "Commerce",
      "Computer Science",
      "Pharmacy",
      "Physiotherapy",
      "Nursing",
      "School Education",
    ],
    programs: [
      "Commerce",
      "Data Science",
      "Machine Learning",
      "Aviation",
      "Management",
      "Journalism",
      "Pharmacy",
      "Physiotherapy",
      "Nursing",
      "PUC",
    ],
    affiliation: "Multiple affiliated institutions",
    website: "https://krupanidhi.edu.in/",
  },

  {
    id: 18,
    name: "Bangalore Group of Institutions",
    shortName: "BGI",
    region: "India",
    type: "Education Group",
    location: "Bengaluru, Karnataka",
    logo: bgiBangalore,
    about:
      "Bangalore Group of Institutions offers education across engineering, nursing, pharmacy and management disciplines.",
    areas: [
      "Engineering",
      "Nursing",
      "Pharmacy",
      "Management",
    ],
    programs: [
      "Engineering Programs",
      "Nursing Programs",
      "Pharmacy Programs",
      "Management Programs",
    ],
    affiliation: "Multiple affiliated institutions",
    website: "https://bgiedu.in/",
  },

  {
    id: 19,
    name: "Shaheen Group of Institutions",
    shortName: "Shaheen Group",
    region: "India",
    type: "Education Group",
    location: "Multiple locations across India",
    logo: shaheenGroup,
    about:
      "Shaheen Group of Institutions operates a network of educational institutions and learning centres with programs ranging from pre-university and degree education to health sciences and MBBS-abroad pathways.",
    areas: [
      "Pre-University",
      "Degree Education",
      "Health Sciences",
      "Medical Education",
      "MBBS Abroad",
    ],
    programs: [
      "PUC",
      "Degree Programs",
      "Health Science Programs",
      "MBBS Abroad Pathways",
    ],
    affiliation: "Multiple institutions and learning centres",
    website: "https://shaheengroup.org/",
  },

  {
    id: 20,
    name: "B.M.S. College of Engineering",
    shortName: "BMSCE",
    region: "India",
    type: "Engineering College",
    location: "Bengaluru, Karnataka",
    logo: bmsce,
    about:
      "B.M.S. College of Engineering is an engineering institution offering undergraduate, postgraduate and doctoral programs across a broad range of engineering and technology disciplines.",
    areas: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical & Electronics",
      "Electronics & Communication",
      "Computer Science",
      "Biotechnology",
      "Chemical Engineering",
      "Artificial Intelligence",
      "Data Science",
    ],
    programs: [
      "B.E. / B.Tech",
      "M.Tech",
      "Ph.D.",
      "Computer Science & Engineering",
      "Civil Engineering",
      "Mechanical Engineering",
      "Electronics & Communication",
      "Artificial Intelligence & Machine Learning",
      "CSE Data Science",
      "AI & Data Science",
    ],
    affiliation: "AICTE approved; permanently affiliated to Visvesvaraya Technological University",
    website: "https://bmsce.ac.in/",
  },
];

// ─────────────────────────────────────────────
// FILTERS
// ─────────────────────────────────────────────

const regionFilters = ["All Institutions", "India", "Abroad"] as const;

const typeFilters = [
  "All",
  "University",
  "Engineering College",
  "Medical College",
  "Nursing College",
  "Education Group",
] as const;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function EducationNetwork() {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] =
    useState<(typeof regionFilters)[number]>("All Institutions");

  const [typeFilter, setTypeFilter] =
    useState<(typeof typeFilters)[number]>("All");

  const [selectedInstitution, setSelectedInstitution] =
    useState<Institution | null>(null);

  // ───────────────────────────────────────────
  // FILTERED INSTITUTIONS
  // ───────────────────────────────────────────

  const filteredInstitutions = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return institutions.filter((institution) => {
      const matchesRegion =
        regionFilter === "All Institutions" ||
        institution.region === regionFilter;

      const matchesType =
        typeFilter === "All" || institution.type === typeFilter;

      const matchesSearch =
        !query ||
        institution.name.toLowerCase().includes(query) ||
        institution.location.toLowerCase().includes(query) ||
        institution.type.toLowerCase().includes(query) ||
        institution.areas.some((area) =>
          area.toLowerCase().includes(query)
        );

      return matchesRegion && matchesType && matchesSearch;
    });
  }, [searchTerm, regionFilter, typeFilter]);

  // ───────────────────────────────────────────
  // MODAL SCROLL LOCK
  // ───────────────────────────────────────────

  useEffect(() => {
    if (selectedInstitution) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedInstitution]);

  // ───────────────────────────────────────────
  // ESCAPE KEY
  // ───────────────────────────────────────────

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedInstitution(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <section
        id="education-network"
        className="relative overflow-hidden bg-slate-950 py-20 sm:py-24"
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ─────────────────────────────────── */}
          {/* HEADER */}
          {/* ─────────────────────────────────── */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
              <GraduationCap className="h-4 w-4" />
              Our Education Network
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Connecting You to{" "}
              <span className="text-yellow-400">
                Leading Institutions.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              Explore universities, colleges and educational groups
              connected with New Way Consultancy & Placement.
            </p>
          </motion.div>

          {/* ─────────────────────────────────── */}
          {/* SEARCH */}
          {/* ─────────────────────────────────── */}

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search institution, location or field..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.07] pl-12 pr-5 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-slate-500 focus:border-yellow-400/50 focus:bg-white/[0.09] focus:ring-2 focus:ring-yellow-400/10"
              />
            </div>
          </div>

          {/* ─────────────────────────────────── */}
          {/* REGION FILTERS */}
          {/* ─────────────────────────────────── */}

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {regionFilters.map((filter) => {
              const active = regionFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setRegionFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/10"
                      : "border border-white/10 bg-white/[0.05] text-slate-300 hover:border-yellow-400/30 hover:bg-white/[0.09] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* ─────────────────────────────────── */}
          {/* TYPE FILTERS */}
          {/* ─────────────────────────────────── */}

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {typeFilters.map((filter) => {
              const active = typeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setTypeFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                    active
                      ? "border-blue-400/50 bg-blue-500/20 text-blue-200"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* ─────────────────────────────────── */}
          {/* RESULT COUNT */}
          {/* ─────────────────────────────────── */}

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Showing{" "}
              <span className="font-semibold text-white">
                {filteredInstitutions.length}
              </span>{" "}
              {filteredInstitutions.length === 1
                ? "institution"
                : "institutions"}
            </p>

            {(searchTerm || regionFilter !== "All Institutions" || typeFilter !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setRegionFilter("All Institutions");
                  setTypeFilter("All");
                }}
                className="text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* ─────────────────────────────────── */}
          {/* CARDS */}
          {/* ─────────────────────────────────── */}

          {filteredInstitutions.length > 0 ? (
            <motion.div
              layout
              className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredInstitutions.map((institution, index) => (
                  <motion.button
                    layout
                    key={institution.id}
                    type="button"
                    onClick={() => setSelectedInstitution(institution)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.04, 0.2),
                    }}
                    whileHover={{ y: -6 }}
                    className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] text-left shadow-xl shadow-black/10 backdrop-blur-md transition-all hover:border-yellow-400/30 hover:bg-white/[0.08] hover:shadow-yellow-400/5"
                  >
                    {/* Logo */}
                    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden bg-white p-6">
                      <img
                        src={institution.logo}
                        alt={`${institution.name} logo`}
                        className="h-full w-full object-contain"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent" />
                    </div>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded-full bg-yellow-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-yellow-300">
                          {institution.type}
                        </span>
                      </div>

                      <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-white transition-colors group-hover:text-yellow-300">
                        {institution.name}
                      </h3>

                      <div className="mt-3 flex items-start gap-2 text-sm text-slate-400">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span className="line-clamp-2">
                          {institution.location}
                        </span>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-5">
                        <span className="text-xs font-medium text-slate-500">
                          View details
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all group-hover:bg-yellow-400 group-hover:text-slate-950">
                          <ExternalLink className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* ───────────────────────────────── */
            /* EMPTY STATE */
            /* ───────────────────────────────── */

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-16 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300">
                <GraduationCap className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                No institutions found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                {regionFilter === "Abroad"
                  ? "International institutions will be added to our education network soon."
                  : "Try changing your search or selecting a different filter."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ───────────────────────────────────────── */}
      {/* DETAILS MODAL */}
      {/* ───────────────────────────────────────── */}

      <AnimatePresence>
        {selectedInstitution && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedInstitution(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative my-6 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50"
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedInstitution(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-yellow-400 hover:text-slate-950"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal top */}
              <div className="grid md:grid-cols-[280px_1fr]">
                {/* Logo panel */}
                <div className="flex min-h-[230px] items-center justify-center bg-white p-8 md:min-h-[300px]">
                  <img
                    src={selectedInstitution.logo}
                    alt={`${selectedInstitution.name} logo`}
                    className="max-h-52 w-full object-contain"
                  />
                </div>

                {/* Main info */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 pr-10">
                    <span className="rounded-full bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                      {selectedInstitution.type}
                    </span>

                    <span className="rounded-full bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                      {selectedInstitution.region}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {selectedInstitution.name}
                  </h2>

                  <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                    <span>{selectedInstitution.location}</span>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-300">
                    {selectedInstitution.about}
                  </p>

                  <a
                    href={selectedInstitution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
                  >
                    Visit Official Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Modal details */}
              <div className="border-t border-white/10 p-6 sm:p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Areas */}
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-yellow-400" />

                      <h3 className="font-semibold text-white">
                        Areas of Study
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedInstitution.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Programs */}
                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-yellow-400" />

                      <h3 className="font-semibold text-white">
                        Programs & Courses
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedInstitution.programs.map((program) => (
                        <span
                          key={program}
                          className="rounded-full border border-blue-400/10 bg-blue-400/5 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Affiliation */}
                {selectedInstitution.affiliation && (
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Affiliation / Recognition
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {selectedInstitution.affiliation}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}