import React from "react";
import { Badge } from "../components/badge.jsx";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL"],
    },
    {
      category: "Data Visualization",
      skills: ["Plotly", "Matplotlib", "ggplot2", "Tableau", "Power BI", "Seaborn"],
    },
    {
      category: "Python Libraries",
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Keras",
        "Flask",
        "Matplotlib",
        "TensorFlow",
        "PySpark",
        "PyTorch",
      ],
    },
    {
      category: "Technologies & Frameworks",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "IoT"],
    },
    {
      category: "Cloud & Big Data",
      skills: ["AWS", "Google Cloud", "Hadoop", "Spark"],
    },
    {
      category: "Mathematics & Statistics",
      skills: ["Linear Algebra", "Statistics", "Probability", "Calculus"],
    },
  ];

  const certifications = [
    {
      name: "Getting Started with Azure DevOps Boards",
      url: "https://www.coursera.org/account/accomplishments/certificate/ZNDW3K7KJSZP",
    },
    {
      name: "Google Ads for Beginners",
      url: "https://www.coursera.org/account/accomplishments/certificate/MZPBLYQ7N4RB",
    },
    {
      name: "Introduction to Self-Driving Cars",
      url: "https://www.coursera.org/account/accomplishments/certificate/N2G28MPLTN3N",
    },
    {
      name: "Machine Learning",
      url: "https://www.coursera.org/account/accomplishments/certificate/3WGSR39XBK4Z",
    },
    {
      name: "Understanding Research Methods",
      url: "https://www.coursera.org/account/accomplishments/certificate/UMWVMTFPCHL7",
    },
    {
      name: "IBM: Introduction to Artificial Intelligence",
      url: "https://coursera.org/share/e9545bfc107f2fdd89d6db9e812b9ec8",
    },
    {
      name: "Introduction to Basic Game Development using Scratch",
      url: "https://www.coursera.org/account/accomplishments/certificate/72WMJDW6XQUN",
    },
    {
      name: "Programming Foundations with JavaScript, HTML and CSS",
      url: "https://www.coursera.org/account/accomplishments/certificate/T7WWJNTTMNWH",
    },
    {
      name: "MATLAB Onramp",
      url: "https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted",
    },
    {
      name: "C++",
      url: "https://www.sololearn.com/Certificate/1051-19119008/jpg/",
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
