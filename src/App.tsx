import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import EducationPrograms from "./components/sections/EducationPrograms";
import About from "./components/sections/About";
import OfficeShowcase from "./components/sections/OfficeShowcase";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Team from "./components/sections/Team";

import LoadingScreen from "./components/common/LoadingScreen";
import ScrollProgress from "./components/common/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop";

import { siteConfig } from "./config/siteConfig";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white"
        >
          <ScrollProgress />

          <Navbar />

          <main>
            <Hero />
            <EducationPrograms />
            <About />
            <OfficeShowcase />
            <Services />
            <Contact />
            <Team />
          </main>

          <Footer />

          {/* Official WhatsApp */}
          <motion.a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with New Way Consultancy & Placement on WhatsApp"
            title="Chat with us on WhatsApp"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-4 ring-white/80 sm:bottom-8 sm:left-8"
          >
            <FaWhatsapp size={29} />
          </motion.a>

          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;