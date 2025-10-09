import React from "react";
import { Card } from "../components/card.jsx";

export default function Experience() {
  const experiences = [
    {
      logo: "/logos/Emergence_logo.JPG",
      company: "MYELIN FOUNDRY",
      location: "Bangalore, India",
      role: "AI Engineer",
      dates: "Mar 2023 – Jul 2023",
      bullets: [
        "Designed and deployed machine learning models for computer vision applications, enhancing detection accuracy in low-light conditions using synthetic sensor data.",
        "Engineered data pipelines for image stitching and 360-degree view generation, improving visual analysis for autonomous systems.",
        "Developed AI-powered applications, delivering real-time insights into driver behavior and dashboard analytics.",
      ],
      techStack:
        "Python, Computer Vision, Machine Learning, Data Pipelines, AI Applications.",
    },
    {
      logo: "/logos/incedo_logo.JPG",
      company: "MITACS",
      location: "Toronto, Canada",
      role: "AI Research and Development Intern",
      dates: "Jul 2022 – Nov 2022",
      bullets: [
        "Developed machine learning solutions for academic research projects, focusing on predictive analytics and model performance optimization.",
        "Preprocessed and transformed large datasets using Python and Excel, supporting high-quality data pipelines for AI research.",
        "Collaborated with PhD researchers to build data-driven insights that contributed to innovation in AI applications.",
      ],
      recognition:
        "Awarded Best Project Presentation Award for research on 'AI in Software Engineering' from Tier 1 research group at Queen's University, Canada.",
      techStack:
        "Python, Excel, Predictive Analytics, Machine Learning, Data Processing.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center space-x-2">
        <span role="img" aria-label="briefcase">💼</span>
        <span>Experience</span>
      </h2>

      {/* Cards */}
      <div className="space-y-10 px-6 md:px-24 lg:px-48">
        {experiences.map((exp) => (
          <Card key={exp.company}>
            <div className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-xl shadow-lg p-8">
              {/* Logo */}
              <div className="flex-shrink-0 bg-white p-4 rounded-lg mr-6">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="italic text-gray-600">
                  {exp.role} &middot; {exp.location}
                </p>
                <p className="text-sm text-gray-500">{exp.dates}</p>

                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {exp.recognition && (
                  <p>
                    <strong>Recognitions:</strong> {exp.recognition}
                  </p>
                )}
                {exp.techStack && (
                  <p>
                    <strong>Tech Stack:</strong> {exp.techStack}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
