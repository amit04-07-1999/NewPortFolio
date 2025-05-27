import React, { useEffect, useRef } from 'react'

const Services = () => {
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
      className="py-30 relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transform -translate-y-1/2"
              style={{ top: `${(i + 1) * 5}%` }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-x-1/2"
              style={{ left: `${(i + 1) * 5}%` }}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title with Animation */}
        <div className="flex flex-col items-center mb-16 opacity-100">
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white animate-gradient-x">
              EXPERTISE
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
          <p className="mt-6 text-gray-400 text-center max-w-2xl">
            Specialized in creating modern web applications with cutting-edge technologies
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm p-8 opacity-0 translate-y-10 transition-all duration-1000
                bg-gradient-to-br from-gray-900/50 to-black border border-white/10
                hover:border-purple-500/50 hover:scale-105
                hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon Container with Animation */}
                <div className="relative w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-500 transform group-hover:rotate-12">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title with Gradient Animation */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 group-hover:from-purple-200 group-hover:to-white transition-all duration-500">
                    {service.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Skills with Hover Effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 
                        group-hover:border-purple-500/40 group-hover:bg-purple-500/20 transition-all duration-300
                        hover:scale-105 hover:border-purple-500/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Number with Gradient */}
                <div className="flex justify-between items-center">
                  <span className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-600 group-hover:from-gray-600 group-hover:to-gray-500 transition-colors duration-500">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 