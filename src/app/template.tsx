"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: [0, 0.62, 0, 0.89],
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
