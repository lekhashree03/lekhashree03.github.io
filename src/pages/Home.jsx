import React, { useState, useEffect } from "react";
import { Card } from "../components/card.jsx";
import { Button } from "../components/button.jsx";

// Typewriter effect for the name
function Typewriter({ text, speed = 100, className = "text-5xl font-bold mb-2" }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, idx + 1));
      idx++;
      if (idx > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <h1 className={className}>{displayed}</h1>;
}

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Hero with MSU background */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/msu-bg.jfif')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <img
            src="/profile.jpeg"
            alt="Lekhashree"
            className="w-40 h-40 rounded-full mb-4 ring-4 ring-white object-cover"
          />
          {/* Animated name */}
          <Typewriter text="Lekhashree Honnavalli Jayarama" speed={120} />
          <p className="text-xl mb-4">
            MS in Data Science @ University of Arizona
          </p>
          <p className="italic mb-6">
            “Detail-oriented Data Science and AI Engineer”
          </p>
          {/* Download Resume button */}
          <Button asChild>
            <a
              href="/Resume_NandanKeshavHegde_MSDS_DSAI_Batch_2026.pdf"
              download
              className="italic underline text-lg"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-gray-50 px-4 md:px-16 py-8">
        <h2 className="flex items-center justify-center text-2xl font-semibold mb-6">
          <span role="img" aria-label="graduation cap" className="mr-2">🎓</span>
          Education
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-medium">University of Arizona</h3>
              <p className="italic">
                MS in Data Science
              </p>
              <ul className="list-disc ml-6">
                <li>GPA: 4.0/4.0</li>
                <li>Coursework: SQL/NoSQL, Python, Data Mining, DBMS, Data Visualization</li>
                <li></li>
                <li>
                  
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Sep 2024 – May 2026</p>
            </div>
          </Card>

          <Card>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-medium">M S Ramaiah Institute of Technology, Bangalore</h3>
              <p className="italic">
                BE in Electronics and Communication
              </p>
              <ul className="list-disc ml-6">
                <li>GPA: 3.75/4.0</li>
                <li>Coursework: Machine Learning, Data Science, Embedded System, VLSI, Operating System</li>
                <li></li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Jun 2019  May 2023</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Publications & Awards */}
      <div className="bg-white px-4 md:px-16 py-8">
        <h2 className="flex items-center justify-center text-2xl font-semibold mb-6">
          <span role="img" aria-label="book" className="mr-2">📖</span>
          Publications & Awards
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">`n          <div>`n            <h3 className="text-lg font-semibold mb-2">Publications</h3>`n            <ul className="list-disc ml-6 space-y-2 text-gray-800">`n              <li>`n                <strong>Application of Wireless Sensor Networks for Advancements in Non-Intrusive Precision Beekeeping</strong>`n                <br />`n                <span className="text-sm text-gray-600">International Conference on Data Science and Information System (ICDSIS), Oct 2022 - IEEE Xplore</span>`n              </li>`n              <li>`n                <strong>Application of machine learning and deep learning models in the supervision of apiculture</strong>`n                <br />`n                <span className="text-sm text-gray-600">International Conference on Applied Research in Engineering Sciences, Nov 2022 - ICARES</span>`n              </li>`n              <li>`n                <strong>Violence detection in drone surveillance videos</strong>`n                <br />`n                <span className="text-sm text-gray-600">International Conference on Smart Trends for Information Technology and Computer Communications, 2023 - SmartCom</span>`n              </li>`n            </ul>`n          </div>`n          <div>`n            <h3 className="text-lg font-semibold mb-2">Awards & Recognition</h3>`n            <ul className="list-disc ml-6 space-y-2 text-gray-800">`n              <li>Best Project Presentation Award for research on AI in Software Engineering from Tier 1 research group at Queens University, Canada</li>`n              <li>Best Project Award in final year project exhibition</li>`n            </ul>`n          </div>`n        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 py-6 flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/lekhashree03" target="_blank" rel="noreferrer">
            <img src="/icons/github_logo.png" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://linkedin.com/in/lekhashree-h-j-61287820a/" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin_logo.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="mailto:lekhashreehj@gmail.com">
            <img src="/icons/outlook_logo.jfif" alt="Email" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>
        {/* Contact */}
        <div className="flex space-x-6 items-center text-blue-600">
          <a href="tel:5202860980" className="hover:underline">lekhashreehj@gmail.com</a>
          <span className="text-2xl">🌾</span>
          <a href="https://" target="_blank" rel="noreferrer" className="hover:underline">
            
          </a>
        </div>
      </div>
    </div>
  );
}
