import React from "react";

export default function NavBar({ current, onChange }) {
  const tabs = ["Home", "Experience", "Capstone Projects", "Skill & Certifications", "Interests & References"];
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center space-x-8 p-4">
        {tabs.map((tab) => {
          const isActive = tab === current;
          return (
            <li key={tab}>
              <button
                onClick={() => onChange(tab)}
                className={`text-lg font-medium ${
                  isActive
                    ? "text-blue-600 underline"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
