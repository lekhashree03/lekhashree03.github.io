import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-extrabold inline-flex items-center gap-3">
          <span role="img" aria-label="presentation">📊</span>
          <span>Presentations & About</span>
        </h2>
      </header>

      {/* Conference Presentations */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
          <span role="img" aria-label="microphone">🎤</span>
          Conference Presentations
        </h3>
        <ul className="list-disc ml-6 space-y-3 text-gray-800">
          <li>
            Presented paper on <strong>'Violence detection in drone surveillance videos'</strong> at 7th International Conference on Smart Trends for Computing and Communications, Jaipur, Rajasthan, January 2023
          </li>
          <li>
            Presented paper on <strong>'Application of Wireless Sensor Networks for Advancements in Non-Intrusive Precision Beekeeping'</strong> at International Conference on Data Science and Information System, July 2022
          </li>
          <li>
            Presented poster on <strong>'Application of machine learning and deep learning models in the supervision of apiculture'</strong> at International Conference on Applied Research in Engineering Sciences held at Ramaiah Institute of Technology, Bengaluru, Karnataka, November 2022
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

      {/* Contact Information */}
      <section className="space-y-4 text-gray-800">
        <h3 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
          <span role="img" aria-label="contact">�</span>
          Contact Information
        </h3>
        <div className="ml-6 space-y-2">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:lekhashreehj@gmail.com" className="text-blue-600 hover:underline">
              lekhashreehj@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:5202860980" className="text-blue-600 hover:underline">
              520-286-0980
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a 
              href="https://linkedin.com/in/lekhashree-h-j-61287820a/" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/lekhashree-h-j-61287820a/
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a 
              href="https://github.com/lekhashree03" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/lekhashree03
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
