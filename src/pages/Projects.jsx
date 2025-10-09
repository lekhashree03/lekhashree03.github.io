import React from "react";
import { Card } from "../components/card.jsx";
import { Button } from "../components/button.jsx";

export default function Projects() {
  const projects = [
    {
      name: "Violence Detection in Drone Surveillance Videos",
      url: "https://github.com/lekhashree03",
      desc: "Detect violence using drones by running neural network models on a Jetson Nano Developer Kit. Created a dataset for training and built a 3D CNN for classification.",
      tech: ["3D CNN", "Deep Learning", "Computer Vision", "Jetson Nano", "Python"],
    },
    {
      name: "Non-Intrusive Apiary Management System using IoT and ML",
      url: "https://github.com/lekhashree03",
      desc: "IoT-based beekeeping solution with sensors monitoring temperature, humidity, and weight. Deep learning models analyze comb images to predict honey, pollen, and empty cells percentage.",
      tech: ["IoT", "Machine Learning", "Deep Learning", "Cloud Services", "Python"],
    },
    {
      name: "Walmart Sales Data Analysis",
      url: "https://github.com/lekhashree03",
      desc: "Analyzed sales trends using MySQL and Tableau to deliver insights informing business strategies and improving customer engagement.",
      tech: ["MySQL", "Tableau", "Data Analysis", "SQL"],
    },
    {
      name: "Nutrition Data Analysis using EDA",
      url: "https://github.com/lekhashree03",
      desc: "Employed EDA techniques in Python and SQL for personalized dietary recommendations based on meal tracking, enhancing client health outcomes.",
      tech: ["Python", "SQL", "EDA", "Data Analysis", "pandas"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Header */}
      <header className="mb-12 text-center">
        <h2 className="text-5xl font-extrabold inline-flex items-center space-x-3">
          <span role="img" aria-label="capstone">🎓</span>
          <span>Projects</span>
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
