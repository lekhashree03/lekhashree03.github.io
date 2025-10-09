import React from "react";
import { Card } from "../components/card.jsx";
import { Button } from "../components/button.jsx";

export default function Projects() {
  const projects = [
    {
      name: "Modern Application Dev 1",
      url: "https://github.com/NANDANKESHAVHEGDE/Modern-Application-Development",
      desc: "Grocery Store App: Server-rendered web application enabling real-time inventory management and personalized grocery recommendations.",
      tech: ["Flask", "Python", "Jinja2", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Modern Application Dev 2",
      url: "https://github.com/NANDANKESHAVHEGDE/Modern-Application-Development",
      desc: "Kanban Board: Interactive task-tracking dashboard with real-time updates and user authentication.",
      tech: ["Flask", "Python", "Socket.IO", "Tailwind CSS", "Vue.js"],
    },
    {
      name: "CMSE830 Capstone 1",
      url: "https://github.com/NANDANKESHAVHEGDE/MSU_CMSE830_Capstone1",
      desc: "NLP Pipeline & Predictive Analytics: Built end-to-end text processing and forecasting demos in Jupyter.",
      tech: ["Python", "Jupyter", "pandas", "scikit-learn"],
    },
    {
      name: "CMSE830 Capstone 2",
      url: "https://github.com/NANDANKESHAVHEGDE/MSU_CMSE830_Capstone2",
      desc: "Recipe Prediction & Generation: Designed an NLG pipeline for customized recipe creation based on user inputs.",
      tech: ["Python", "NLTK", "TensorFlow", "Transformers"],
    },
    {
      name: "STT810 Capstone",
      url: "https://github.com/NANDANKESHAVHEGDE/MSU_STT810_Capstone",
      desc: "Time Series Forecasting: Developed statistical models for supply chain demand prediction.",
      tech: ["Python", "statsmodels", "pandas", "matplotlib"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h2 className="text-5xl font-extrabold inline-flex items-center space-x-3">
          <span role="img" aria-label="capstone">🎓</span>
          <span>Capstone Projects</span>
        </h2>
      </header>

      {/* Grid */}
      <div className="grid gap-8 px-6 md:px-16 lg:px-32 xl:px-48 grid-cols-1 sm:grid-cols-2">
        {projects.map((proj) => (
          <Card
            key={proj.name}
            className="transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            <div className="flex flex-col justify-between h-full p-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                  <a href={proj.url} target="_blank" rel="noreferrer">
                    {proj.name}
                  </a>
                </h3>
                <p className="text-gray-700 mb-4">{proj.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button asChild>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
