import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");

  const renderTab = () => {
    switch (currentTab) {
      case "Experience": return <Experience />;
      case "Capstone Projects":   return <Projects />;
      case "Skill & Certifications":     return <Skills />;
      case "Interests & References":      return <About />;
      default:           return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar current={currentTab} onChange={setCurrentTab} />
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.main
          key={currentTab}
          className="flex-grow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {renderTab()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
