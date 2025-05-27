import React, { useEffect, useRef } from 'react'

const Projects = () => {
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
      // repoLink: "https://github.com/amit04-07-1999/chatapp",
      demoLink: "https://chatfrontend-nine.vercel.app/"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Built a full-fledged e-commerce platform with user-friendly interface and comprehensive product management.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux", "Stripe"],
      image: "Images/e-commerce.png",
      featured: true,
      // repoLink: "https://github.com/amit04-07-1999/ecommerce",
      demoLink: "https://rainbow-fox-1c79d5.netlify.app/"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-50 relative min-h-screen opacity-0 translate-y-10 transition-all duration-1000"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0" style={{ opacity: 0.05 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transform -translate-y-1/2 animate-pulse"
              style={{ 
                top: `${(i + 1) * 5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-x-1/2 animate-pulse"
              style={{ 
                left: `${(i + 1) * 5}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Decorative Blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-20">
          <div className="relative mb-8 group">
            <h2 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white animate-gradient-x">
              MY WORK
            </h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 mb-12 text-center">
            Professional Experience
          </h3>
          <div className="space-y-16">
            {experiences.map((exp, expIndex) => (
              <div 
                key={exp.id}
                ref={(el) => (cardsRef.current[expIndex] = el)}
                className="relative opacity-0 translate-y-10 transition-all duration-1000 bg-gradient-to-br from-purple-900/30 via-black/80 to-black/80 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 group"
                style={{ transitionDelay: `${expIndex * 200}ms` }}
              >
                {/* Company Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 relative">
                  <div className="group/title relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 group-hover:to-purple-400 transition-colors duration-300 pl-2">
                      {exp.company}
                    </h4>
                    <p className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 text-lg mt-1 pl-2">
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="relative px-6 py-2 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 
                      group-hover:border-purple-500/40 transition-all duration-300 hover:scale-105 text-sm md:text-base inline-block">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="relative">{exp.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {exp.projects.map((project, index) => (
                    <div 
                      key={index}
                      className="group/card relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-black/60 backdrop-blur-sm p-6 
                        border border-white/5 transition-all duration-500
                        hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                        hover:-translate-y-1"
                    >
                      {/* Project Content */}
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3 transform group-hover/card:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h5 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 group-hover/card:to-purple-400 transition-colors duration-300">
                            {project.title}
                          </h5>
                        </div>
                        <p className="text-gray-400 mb-6 group-hover/card:text-gray-300 transition-colors duration-300 leading-relaxed pl-11">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pl-11">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 
                                group-hover/card:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Card Effects */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700"></div>
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 delay-100"></div>
                      <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-500/50 via-transparent to-pink-500/50 transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-700 delay-200"></div>
                      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500/50 via-transparent to-pink-500/50 transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-700 delay-300"></div>
                    </div>
                  ))}
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 transition-opacity duration-700 blur-2xl rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div>
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 mb-12 text-center">
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index + experiences.length] = el)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/30 to-black/80 backdrop-blur-sm p-8 
                  opacity-0 translate-y-10 transition-all duration-1000 border border-white/10 
                  hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                  hover:-translate-y-2"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative w-full h-56 mb-8 rounded-lg overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-purple-500/90 text-white rounded-full transform -translate-y-2 hover:translate-y-0 transition-all duration-500 hover:bg-purple-600/90 relative z-20 cursor-pointer"
                      style={{
                        color: 'white'
                      }}
                    >
                      Live Demo
                    </a>
                    {/* <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white/90 text-purple-900 rounded-full transform -translate-y-2 hover:translate-y-0 transition-all duration-500 hover:bg-white"
                      style={{
                        color: 'purple'
                      }}
                    >
                      GitHub
                    </a> */}
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 group-hover:to-purple-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-1.5 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 
                          group-hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-200"></div>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300"></div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 