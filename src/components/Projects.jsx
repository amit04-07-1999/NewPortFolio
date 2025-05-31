import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';
import AnimatedBackground from '../context/Animation';

const Projects = () => {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

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

    projectsRef.current.forEach((project) => {
      if (project) {
        observer.observe(project);
      }
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Chat Application",
      description: "A real-time chat application with private messaging and group chat features",
      longDescription: "Built a comprehensive chat platform that enables users to communicate in real-time. The application supports both private messaging and group chats, with features like message status, typing indicators, and file sharing.",
      image: "Images/chatapp.png",
      demoLink: "https://chatfrontend-nine.vercel.app/",
      githubLink: "https://github.com/amit04-07-1999/chatfrontend",
      features: [
        "Real-time messaging using Socket.io",
        "Private and group chat functionality",
        "User authentication and authorization",
        "Message status indicators",
        "File sharing capabilities",
        "Responsive design for all devices"
      ],
      technologies: {
        frontend: ["React.js", "Socket.io-client", "Tailwind CSS", "Redux"],
        backend: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
        deployment: ["Vercel", "MongoDB Atlas"]
      },
      challenges: [
        "Implementing real-time communication with WebSocket",
        "Managing complex state with multiple chat rooms",
        "Handling file uploads and storage",
        "Ensuring message delivery and status updates"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management and secure payments",
      longDescription: "Developed a comprehensive e-commerce solution that provides a seamless shopping experience. The platform includes features like product categorization, cart management, secure payments, and order tracking.",
      image: "Images/e-commerce.png",
      demoLink: "https://rainbow-fox-1c79d5.netlify.app/",
      githubLink: "https://github.com/amit04-07-1999/E-commerce",
      features: [
        "Product catalog with categories",
        "Shopping cart functionality",
        "Secure payment integration",
        "User authentication",
        "Order management",
        "Admin dashboard",
        "Responsive design"
      ],
      technologies: {
        frontend: ["React.js", "Redux", "Material UI", "Stripe Elements"],
        backend: ["Node.js", "Express.js", "MongoDB", "Stripe API"],
        deployment: ["Netlify", "Heroku"]
      },
      challenges: [
        "Implementing secure payment processing",
        "Managing complex product inventory",
        "Building responsive product layouts",
        "Optimizing performance with large catalogs"
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
        <main className="py-16 mb-10">
          <section 
            ref={sectionRef}
            className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-1000"
          >
            {/* Section Title */}
            <div className="text-center mb-16">
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 relative group inline-block ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Featured Projects
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </h1>
              <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Showcasing my best work in web development using modern technologies and best practices
              </p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => (projectsRef.current[index] = el)}
                  className="opacity-0 translate-y-10 transition-all duration-1000"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-400 hover:shadow-blue-900/20' : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-xl'}`}>
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Project Image */}
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                              <a 
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
                                style={{ color: 'white' }}
                              >
                                Live Demo
                              </a>
                              {/* <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-900 transition-colors duration-300"
                              >
                                GitHub
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-6">
                        <div>
                          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h2>
                          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{project.longDescription}</p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Features</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technologies Used</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Frontend</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.frontend.map((tech, i) => (
                                  <span 
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full border ${darkMode ? 'bg-blue-950 text-blue-400 border-blue-900' : 'bg-blue-50 text-blue-600 border-blue-100'}`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Backend</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.backend.map((tech, i) => (
                                  <span 
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full border ${darkMode ? 'bg-gray-900 text-gray-400 border-gray-700' : 'bg-gray-50 text-gray-600 border-gray-200'}`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Deployment</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.deployment.map((tech, i) => (
                                  <span 
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full border ${darkMode ? 'bg-green-950 text-green-400 border-green-900' : 'bg-green-50 text-green-600 border-green-100'}`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Challenges */}
                        <div>
                          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Challenges</h3>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-start`}>
                                <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;