import { motion } from "framer-motion";

import logo from "../../assets/images/logo.png";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#123A6D]"
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="rounded-3xl bg-white p-4 shadow-2xl"
        >
          <img
            src={logo}
            alt="New Way Consultancy & Placement"
            className="h-24 w-auto object-contain sm:h-28"
          />
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="mt-7 text-center text-xl font-bold text-white sm:text-2xl"
        >
          New Way Consultancy & Placement
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="mt-2 text-center text-sm text-blue-100 sm:text-base"
        >
          Your Ambition. Think New Way. Our Direction
        </motion.p>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/20"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-yellow-400"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}