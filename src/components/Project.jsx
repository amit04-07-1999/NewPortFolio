import React, { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import AnimatedBackground from '../context/Animation'

const Projects = () => {
  const { darkMode } = useTheme();
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

  const experiences = [
    {
      id: 1,
      company: "Pizeonfly Pvt Ltd",
      location: "New Delhi, Sant Nagar",
      duration: "March 2024 - Present",
      projects: [
        {
          title: "FIC CRM",
          description: "Developed a loan management app with four user panels (admin, agent, employee, customer) using ReactJS, NodeJS, and AWS.",
          tech: ["React.js", "Node.js", "AWS", "MongoDB"]
        },
        {
          title: "Pizeonfly CRM",
          description: "Built a project and task management platform with admin, client, and employee panels, deployed on AWS.",
          tech: ["React.js", "Node.js", "AWS", "MongoDB"]
        },
        {
          title: "BGS (Best Google Sites)",
          description: "Built a utility website for bookmarks and notes, currently under testing.",
          tech: ["React.js", "Node.js", "MongoDB"]
        },
        {
          title: "Saas Manager Tools",
          description: "Designed a tools website for daily utilities, currently under testing.",
          tech: ["React.js", "Node.js", "Express.js"]
        }
      ]
    },
    {
      id: 2,
      company: "TechNinza Pvt Ltd",
      location: "Haryana, Gurgaon",
      duration: "Feb 2023 - Jan 2024",
      projects: [
        {
          title: "Caross Project",
          description: "Built a user-friendly web platform using React.js for seamless user interaction.",
          tech: ["React.js", "Node.js", "MongoDB"]
        },
        {
          title: "BrandNeers Panel",
          description: "Developed employee and admin management panels on React.js to streamline operations.",
          tech: ["React.js", "Redux", "Material UI"]
        },
        {
          title: "EZI Mobile Travel App",
          description: "Created a secure and scalable vendor panel and backend for a travel app using Node.js.",
          tech: ["Node.js", "Express.js", "MongoDB"]
        },
        {
          title: "PostBox Mobile App",
          description: "Designed a high-performance backend for a social media app on Node.js.",
          tech: ["Node.js", "Express.js", "MongoDB"]
        }
      ]
    }
  ];

  const personalProjects = [
    {
      id: 1,
      title: "Chat App",
      description: "Developed a real-time chat application using ReactJS, NodeJS, MongoDB, and ExpressJS.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      image: "Images/chatapp.png",
      featured: true,
      demoLink: "https://chatfrontend-nine.vercel.app/"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Built a full-fledged e-commerce platform with user-friendly interface and comprehensive product management.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Stripe"],
      image: "Images/e-commerce.png",
      featured: true,
      demoLink: "https://rainbow-fox-1c79d5.netlify.app/"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-16 relative mb-10 min-h-[90vh] opacity-0 translate-y-10 transition-all duration-1000 ${
        darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'
      }`}
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-6 group">
            <h2 className={`text-4xl md:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              MY WORK
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <div 
                key={exp.id}
                ref={(el) => (cardsRef.current[expIndex] = el)}
                className={`relative opacity-0 translate-y-10 transition-all duration-1000 rounded-2xl p-6 
                  ${darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
                    : 'bg-white border-gray-200 hover:border-blue-200'
                  } border hover:shadow-lg group`}
                style={{ transitionDelay: `${expIndex * 200}ms` }}
              >
                {/* Company Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 relative">
                  <div className="group/title relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <h4 className={`text-3xl font-bold group-hover:text-blue-500 transition-colors duration-300 pl-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.company}
                    </h4>
                    <p className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300 text-lg mt-1 pl-2">
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`relative px-6 py-2 rounded-full text-sm md:text-base inline-block
                      ${darkMode 
                        ? 'bg-gray-700 text-blue-400 border-gray-600' 
                        : 'bg-blue-50 text-blue-600 border-blue-200'
                      } border group-hover:border-blue-400 transition-all duration-300 hover:scale-105`}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {exp.projects.map((project, index) => (
                    <div 
                      key={index}
                      className={`group/card relative overflow-hidden rounded-xl p-5 
                        transition-all duration-500 hover:-translate-y-1
                        ${darkMode 
                          ? 'bg-gray-700 border-gray-600 hover:border-blue-400 hover:shadow-blue-900/20' 
                          : 'bg-gray-50 border-gray-100 hover:border-blue-200'
                        } border`}
                    >
                      {/* Project Content */}
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <div className={`w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center mr-3 
                            transform group-hover/card:scale-110 transition-transform duration-300 
                            ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h5 className={`text-xl font-bold group-hover/card:text-blue-500 transition-colors duration-300 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {project.title}
                          </h5>
                        </div>
                        <p className={`mb-4 transition-colors duration-300 leading-relaxed pl-11 ${
                          darkMode ? 'text-gray-400 group-hover/card:text-gray-300' : 'text-gray-600 group-hover/card:text-black'
                        }`}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pl-11">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105
                                ${darkMode 
                                  ? 'bg-gray-800 text-blue-400 border-gray-600 group-hover/card:border-blue-500' 
                                  : 'bg-blue-50 text-blue-600 border-blue-100 group-hover/card:border-blue-200'
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div>
          <h3 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index + experiences.length] = el)}
                className={`group relative overflow-hidden rounded-xl p-6 
                  opacity-0 translate-y-10 transition-all duration-1000 
                  hover:-translate-y-2
                  ${darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-400 hover:shadow-blue-900/20' 
                    : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-lg'
                  } border`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-500 text-white rounded-full transform -translate-y-2 hover:translate-y-0 transition-all duration-500 hover:bg-blue-600"
                      style={{ color: 'white' }}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className={`text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h4>
                  <p className={`mb-4 transition-colors duration-300 leading-relaxed ${
                    darkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300 hover:scale-105
                          ${darkMode 
                            ? 'bg-gray-700 text-blue-400 border-gray-600 group-hover:border-blue-500' 
                            : 'bg-blue-50 text-blue-600 border-blue-100 group-hover:border-blue-200'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 