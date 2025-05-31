import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';
import AnimatedBackground from '../context/Animation';

const Experience = () => {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const experienceRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    experienceRef.current.forEach((exp) => {
      if (exp) {
        observer.observe(exp);
      }
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Pizeonfly Pvt Ltd",
      location: "New Delhi, Sant Nagar",
      duration: "March 2024 - Present",
      description: "Leading full-stack development projects and mentoring junior developers.",
      responsibilities: [
        "Developed and maintained multiple CRM systems using MERN stack",
        "Implemented secure authentication and authorization systems",
        "Optimized database queries and API performance",
        "Integrated third-party services and APIs",
        "Conducted code reviews and provided technical guidance"
      ],
      projects: [
        {
          name: "FIC CRM",
          description: "A comprehensive loan management system with multi-user roles",
          tech: ["React.js", "Node.js", "MongoDB", "AWS"]
        },
        {
          name: "Pizeonfly CRM",
          description: "Project and task management platform with real-time updates",
          tech: ["React.js", "Node.js", "Socket.io", "AWS"]
        }
      ]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "TechNinza Pvt Ltd",
      location: "Haryana, Gurgaon",
      duration: "Feb 2023 - Jan 2024",
      description: "Worked on multiple client projects and internal tools development.",
      responsibilities: [
        "Built responsive web applications using React.js",
        "Developed RESTful APIs using Node.js and Express",
        "Implemented MongoDB database schemas and queries",
        "Created mobile app backends and vendor panels",
        "Collaborated with UI/UX designers for optimal user experience"
      ],
      projects: [
        {
          name: "Caross Project",
          description: "User-friendly web platform with seamless interactions",
          tech: ["React.js", "Node.js", "MongoDB"]
        },
        {
          name: "EZI Mobile Travel App",
          description: "Scalable backend system for a travel application",
          tech: ["Node.js", "Express.js", "MongoDB"]
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10">
        <Header />
        <main className="py-16">
          <section 
            ref={sectionRef}
            className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-1000"
          >
            {/* Section Title */}
            <div className="text-center mb-16">
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 relative group inline-block ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Experience
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </h1>
              <p className={`text-lg max-w-3xl mx-auto ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                My journey as a Full Stack Developer, building innovative solutions and gaining valuable expertise
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  ref={(el) => (experienceRef.current[index] = el)}
                  className={`relative rounded-xl p-8 mb-12 opacity-0 translate-y-10 transition-all duration-1000 border hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
                      : 'bg-white border-gray-200 hover:border-blue-200'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Company and Duration */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h2 className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>{exp.role}</h2>
                      <h3 className={`text-xl font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>{exp.company}</h3>
                      <p className={`${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>{exp.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-blue-400' 
                          : 'bg-blue-50 text-blue-600'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className={`text-lg font-semibold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start">
                          <svg className={`w-5 h-5 mt-1 mr-3 ${
                            darkMode ? 'text-blue-400' : 'text-blue-500'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Notable Projects:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {exp.projects.map((project, i) => (
                        <div 
                          key={i}
                          className={`rounded-lg p-6 border transition-all duration-300 ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 hover:border-blue-400' 
                              : 'bg-gray-50 border-gray-100 hover:border-blue-200'
                          }`}
                        >
                          <h5 className={`text-lg font-semibold mb-2 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>{project.name}</h5>
                          <p className={`mb-4 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, j) => (
                              <span 
                                key={j}
                                className={`px-3 py-1 text-sm rounded-full border ${
                                  darkMode 
                                    ? 'bg-gray-800 text-blue-400 border-gray-600' 
                                    : 'bg-white text-blue-600 border-blue-100'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-16 text-center">
              <h2 className={`text-3xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Technical Expertise</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  "React.js", "Node.js", "MongoDB", "Express.js",
                  "JavaScript", "HTML5/CSS3", "AWS", "RESTful APIs",
                  "Git", "Redux", "Material UI", "Socket.io",
                  "Responsive Design", "TypeScript", "Docker", "CI/CD"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg p-4 border transition-all duration-300 hover:shadow-md ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
                        : 'bg-white border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-900'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Experience; 