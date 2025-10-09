import { motion } from "framer-motion";

export function Button({ children, asChild = false, variant = "default" }) {
  const base = "px-4 py-2 rounded-xl font-medium";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  };
  const className = `${base} ${variants[variant]}`;

  const content = asChild ? children : <span className={className}>{children}</span>;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {content}
    </motion.div>
  );
}
