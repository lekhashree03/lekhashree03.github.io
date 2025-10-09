import { motion } from "framer-motion";

export function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl bg-white"
    >
      {children}
    </motion.div>
  );
}
