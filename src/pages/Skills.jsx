import React from "react";
import { Badge } from "../components/badge.jsx";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming & Scripting",
      skills: ["Python", "R", "SQL", "Bash", "JavaScript"],
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "Statistical Modeling",
        "Time Series Analysis",
        "Demand Forecasting",
        "Transformers",
        "PyTorch",
        "TensorFlow",
      ],
    },
    {
      category: "Cloud & Big Data",
      skills: ["Azure Databricks", "AWS Serverless", "GCP Vertex AI", "PySpark"],
    },
    {
      category: "Web & Application Dev",
      skills: ["Flask", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Data Visualization & BI",
      skills: ["Tableau", "Power BI", "Advanced Excel"],
    },
    {
      category: "Dev Tools",
      skills: ["Git", "Docker", "Jupyter", "VS Code"],
    },
  ];

  const certifications = [
    {
      name: "Applied Data Science with Python Specialization",
      url: "https://coursera.org/verify/specialization/5E2SYYXEDQ9X",
    },
    {
      name: "Introduction to Data Science in Python",
      url: "https://coursera.org/verify/CNSQ4QUDGA6Q",
    },
    {
      name: "Applied Plotting, Charting & Data Representation in Python",
      url: "https://coursera.org/verify/Q4SADT8KGG3E",
    },
    {
      name: "Applied Machine Learning in Python",
      url: "https://coursera.org/verify/EC9MDWYTZX92",
    },
    {
      name: "Applied Text Mining in Python",
      url: "https://coursera.org/verify/8MTXRLL7X4GG",
    },
    {
      name: "Applied Social Network Analysis in Python",
      url: "https://coursera.org/verify/EBMWQWKHXWBK",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Skills Section */}
      <section className="mb-16 px-6 md:px-16 lg:px-32 xl:px-48">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-extrabold inline-flex items-center gap-3">
            <span role="img" aria-label="gear">⚙️</span>
            <span>Skills</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Technologies and platforms I use regularly
          </p>
        </header>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-6 md:px-16 lg:px-32 xl:px-48">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-extrabold inline-flex items-center gap-3">
            <span role="img" aria-label="certificate">📜</span>
            <span>Certifications</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Verified credentials and specializations
          </p>
        </header>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-4">{cert.name}</h3>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block text-blue-600 hover:underline font-medium"
              >
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
