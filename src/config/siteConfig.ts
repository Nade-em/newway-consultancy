export const siteConfig = {
  company: {
    name: "New Way Consultancy & Placement",
    shortName: "NWCP",
    tagline: "Empowering Careers. Transforming Futures.",
    description:
      "New Way Consultancy & Placement is a Human Resources, Recruitment and Educational Guidance Firm committed to connecting people with employment opportunities, educational guidance and career growth.",
  },

  contact: {
    // WhatsApp
    whatsapp: "7005439078",
    whatsappUrl: "https://wa.me/917005439078",

    // Email
    email: "newwayconsultancy2008@gmail.com",
    emailUrl: "mailto:newwayconsultancy2008@gmail.com",

    // Office Address
    address: {
      line1: "Babupura, B.O.S.E.M. Leirak",
      line2: "Imphal West",
      line3: "Manipur – 795001, India",
    },

    // EXACT GOOGLE MAPS LOCATION
    mapsUrl: "https://maps.app.goo.gl/4kjJrhRSPEdmpBDo9?g_st=aw",

    // Contact Numbers
    phone: {
      director: "9402938695",
      assistantDirector: "936601837",
      marketingManager: "9362002944",
    },

    // Office Hours
    officeHours: {
      weekdays: "Monday – Saturday",
      hours: "9:00 AM – 6:00 PM",
      closed: "Sunday: Closed",
    },
  },

  // Team
  team: [
    {
      name: "M.M Rahaman",
      role: "Director",
      phone: "9402938695",
      href: "tel:+919402938695",
    },

    {
      name: "Abdullah",
      role: "Assistant Director",
      phone: "936601837",
      href: "tel:+91936601837",
    },

    {
      name: "Mustafin",
      role: "Marketing Manager",
      phone: "9362002944",
      href: "tel:+919362002944",
    },
  ],

  // Navigation
  navigation: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  // Services
  services: [
    "Recruitment Services",
    "HR Consultancy",
    "Educational Guidance",
    "Career Counselling",
    "Placement Assistance",
  ],

  // Social Media
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    whatsapp: "https://wa.me/917005439078",
  },
} as const;