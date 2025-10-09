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
            alt="Nandan"
            className="w-40 h-40 rounded-full mb-4 ring-4 ring-white object-cover"
          />
          {/* Animated name */}
          <Typewriter text="Nandan Keshav Hegde" speed={120} />
          <p className="text-xl mb-4">
            MS in Computational Data Science @ Michigan State University
          </p>
          <p className="italic mb-6">
            “Hustle, struggle and smile in the right way!”
          </p>
          {/* Download Resume button */}
          <Button asChild>
            <a
              href="/Resume-NandanKeshavHegde-MSU-2026-DSAI.pdf"
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
              <h3 className="text-lg font-medium">Michigan State University</h3>
              <p className="italic">
                Master of Science in Computational Data Science (STEM Designated)
              </p>
              <ul className="list-disc ml-6">
                <li>GPA: 4.0/4.0 (Top 1% of Class)</li>
                <li>GRE: 321/340</li>
                <li>Co-founded Rarepeti.com (empowering regional vendors)</li>
                <li>
                  Built end-to-end NLP/NLG cuisine generation & predictive
                  analytics recommendation system
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Sep 2024 – May 2026</p>
            </div>
          </Card>

          <Card>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-medium">Manipal Institute of Technology</h3>
              <p className="italic">
                B.Tech in Electrical & Electronics Engineering
              </p>
              <ul className="list-disc ml-6">
                <li>GPA: 8.1/10.0 (Top 10% of Class)</li>
                <li>AICTE Scholarship recipient</li>
                <li>Treasurer & President, MIT Chess Club</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">Graduated Nov 2019</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Research & Professional Development */}
      <div className="bg-white px-4 md:px-16 py-8">
        <h2 className="flex items-center justify-center text-2xl font-semibold mb-6">
          <span role="img" aria-label="book" className="mr-2">📖</span>
          Research & Professional Development
        </h2>
        <ul className="list-disc ml-6 space-y-4 max-w-3xl mx-auto text-gray-800">
          <li>
            <strong>Advancing Causal Video Question Answering:</strong> Developed
            Transformer-based models for accurate multi-modal video-text analysis
            and enhanced AI-driven understanding of complex content.
          </li>
          <li>
            <strong>Michigan Farm to Institute (MFIN):</strong> Performed
            data-driven analyses to generate actionable insights for outreach
            and adoption of locally sourced food systems.
          </li>
          <li>
            <strong>Foundational Degree in Data Science & Programming, IIT
            Madras:</strong> Completed the first cohort’s online degree in Data
            Science, ML, and Programming fundamentals.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 py-6 flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/NANDANKESHAVHEGDE" target="_blank" rel="noreferrer">
            <img src="/icons/github_logo.png" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://https://www.linkedin.com/in/nandan-keshav-hegde-75a23b60" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin_logo.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="mailto:hegdenan@msu.edu">
            <img src="/icons/outlook_logo.jfif" alt="Email" className="w-6 h-6 hover:opacity-80" />
          </a>
        </div>
        {/* Contact & Rarepeti */}
        <div className="flex space-x-6 items-center text-blue-600">
          <a href="tel:5175285277" className="hover:underline">517-528-5277</a>
          <span className="text-2xl">🌾</span>
          <a href="https://rarepeti.com" target="_blank" rel="noreferrer" className="hover:underline">
            Rarepeti.com
          </a>
        </div>
      </div>
    </div>
  );
}
