import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-extrabold inline-flex items-center gap-3">
          <span role="img" aria-label="chess knight">♞</span>
          <span>Interests & References</span>
        </h2>
      </header>

      {/* Passions & Hobbies */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
          <span role="img" aria-label="chess piece">♟️</span>
          Passions & Hobbies
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>
            Semi-professional chess player with the goal of becoming the oldest
            Grandmaster in the next few years.
          </li>
          <li>
            Tabla musician for 6 years — collaborating with expert ensembles for
            major musical events in India.
          </li>
        </ul>
      </section>

      {/* Personal & Professional Backdrop */}
      <section className="mb-12 space-y-4 text-gray-700">
        <h3 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
          <span role="img" aria-label="book">📚</span>
          Personal & Professional Backdrop
        </h3>
        <p>
          My roots trace back to a small town in India, where I was among the
          few granted access to quality education from primary through
          undergraduate levels. From dreaming of being a bus driver to serving
          as a student leader, my desire to influence and contribute to society
          has been unwavering. Venturing into uncharted territories with a
          positive outlook has defined my path.
        </p>
        <p>
          Within one year of starting my Data Science journey, I transitioned
          from an analyst to a Data Scientist and AI/ML Engineer, building
          small-scale data products. A pivotal moment was earning a spot in
          IIT Madras’s pioneering online BS in Data Science & Programming,
          which led to roles at Incedo and Tredence.
        </p>
        <p>
          Beyond work, I volunteered as a bus driver to help those without
          transport access, especially to hospitals. I’ve also begun scripting
          intraday trading strategies, blending my domain knowledge in wealth
          management with automated order execution across broker platforms.
        </p>
      </section>

      {/* References & Testimonials */}
      <section className="space-y-4 text-gray-800">
        <h3 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
          <span role="img" aria-label="page">📄</span>
          Testimonials & Recommendations
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="https://drive.google.com/drive/folders/1PFTTV8j2rLYstyRjaeCsBep2qOz6ir5k"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Academic & Professional References
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1Toscnl6bQXL4rzL0rvfqOkjPpCisDPG6?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Experience Certificates
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
