import React, { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import AnimatedBackground from '../context/Animation'

const Services = () => {
  const { darkMode } = useTheme();
  
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      number: "01",
      description: "Expertise in React.js, HTML, CSS, and JavaScript for building responsive and interactive user interfaces.",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Backend Development",
      number: "02",
      description: "Proficient in Node.js, Express.js, and MongoDB for building robust server-side applications.",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Database Design", "Server Architecture"],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      number: "03",
      description: "Experience with AWS (EC2 & S3) and CI/CD pipeline implementation using GitHub Actions.",
      skills: ["AWS EC2", "AWS S3", "GitHub Actions", "CI/CD", "Cloud Architecture", "DevOps"],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  // Intersection Observer for scroll animations
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10 opacity-100">
          <div className="relative mb-6 group">
            <h2 className={`text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              EXPERTISE
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </div>
          <p className={`mt-4 text-center max-w-2xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Specialized in creating modern web applications with cutting-edge technologies
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative overflow-hidden rounded-2xl p-6 opacity-0 translate-y-10 transition-all duration-1000
                ${darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
                  : 'bg-white border-gray-200 hover:border-blue-200'
                } border hover:shadow-lg
                hover:scale-105`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className={`absolute inset-0 rounded-full blur-md group-hover:blur-xl transition-all duration-500 ${
                    darkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}></div>
                  <div className={`relative w-full h-full rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-800' : 'bg-blue-50'
                  }`}>
                    <div className={`${
                      darkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-700'
                    } transition-colors duration-500 transform group-hover:rotate-12`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  darkMode 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                } transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                } transition-colors duration-300`}>
                  {service.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full transition-all duration-300
                        hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-700 text-blue-400 border-gray-600 group-hover:border-blue-500 group-hover:bg-gray-600' 
                            : 'bg-blue-50 text-blue-600 border-blue-100 group-hover:border-blue-200 group-hover:bg-blue-100'
                        } border`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Number */}
                <div className="flex justify-between items-center">
                  <span className={`text-5xl sm:text-6xl font-bold transition-colors duration-500 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-blue-400' 
                      : 'text-gray-400 group-hover:text-blue-400'
                  }`}>
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Card Effects */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-900/20 to-transparent' 
                  : 'bg-gradient-to-br from-blue-50 to-transparent'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 