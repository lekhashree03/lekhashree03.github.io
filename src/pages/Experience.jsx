import React from "react";
import { Card } from "../components/card.jsx";

export default function Experience() {
  const experiences = [
    {
      logo: "/logos/Emergence_logo.JPG",
      company: "EMERGENCE AI",
      location: "Remote",
      role: "AI Research Intern",
      dates: "May 2025 – Present",
      bullets: [
        "Agent Creating Agent (ACA): Proactively collaborating with Agent Development teams to aid in research and building AI benchmarks for existing and under-development AI agents.",
        "Agentic AI Orchestration: Designed blueprint for ACA integration into the main orchestrator that manages multiple agents for enterprise workflows and measured uplifts in orchestrator quality.",
      ],
      // no recognitions/tech stack for this one yet
    },
    {
      logo: "/logos/tredence_logo.JPG",
      company: "TREDENCE ANALYTICS SOLUTIONS PRIVATE LIMITED",
      location: "Bengaluru, India",
      role: "Data Science Consultant",
      dates: "Jun 2023 – Jul 2024",
      bullets: [
        "Promo Optimization & Pricing Simulator (Retail): Led development of a promo optimization framework, identifying KPIs and recommending promo schedules for SKU POCs.",
        "Promo Effectiveness Analysis (Retail): Built a detailed promotional performance model to optimize baselines and gross lift, cutting unproductive expenses by 25% and improving ROI.",
        "Product/Item Matching (Retail): Implemented an NLP pipeline for automated product matching (65% accuracy), saving 300+ manual hours annually.",
      ],
      recognition:
        "Received Coach & Captain Award for delivering a demand forecasting solution for a top U.S. convenience store client.",
      techStack:
        "Python, PySpark, PyTorch, TensorFlow, Transformers (LLMs & SLMs), Azure Databricks.",
    },
    {
      logo: "/logos/incedo_logo.JPG",
      company: "INCEDO TECHNOLOGY SOLUTIONS LIMITED",
      location: "Bengaluru, India",
      role: "Senior Data Scientist",
      dates: "Feb 2021 – May 2023",
      bullets: [
        "Demand Forecasting (CPG): Developed ML-driven forecasting models, improving accuracy by 10% and saving $500K annually in inventory holding costs.",
        "Enterprise Data Service Workbench (FinServ): Built an interactive RFP automation platform, boosting efficiency by 50%.",
        "Client Cohort Analysis: Designed segmentation models, driving a 10% increase in RFP win-rate and $500K extra revenue per quarter.",
      ],
      recognition:
        "Earned Customer Excellence & Innovation Award for delivering a full-fledged RFP automation data product and achieving fast-track promotion to Senior Data Scientist.",
      techStack:
        "Python, R, Statistical Modeling, Flask, JavaScript, Vue.js, HTML, CSS, Tableau, PowerBI.",
    },
    {
      logo: "/logos/ZS_logo.JPG",
      company: "ZS ASSOCIATES INDIA PRIVATE LIMITED",
      location: "Pune, India",
      role: "Decision Analytics Associate",
      dates: "Jan 2020 – Jan 2021",
      bullets: [
        "Survival Analysis (Life Sciences): Built models predicting therapy switches, reducing switch rates by 20%.",
        "New Patient Adoption Research: Developed ML models to optimize sales targeting, cutting outreach costs by 30% and generating an estimated $1M in revenue.",
        "Market Mix Modelling: Automated regression frameworks, slashing model build time to 4 weeks and improving marketing ROI by 15%.",
      ],
      recognition:
        "Awarded Best Associate in Advanced Analytics and recognized as Best Performer in company-wide analytics boot camp.",
      techStack:
        "Python, R, Statistical Modelling, Advanced Excel, GIT, MS PowerPoint, Domino Cloud.",
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
