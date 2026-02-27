import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import '../styles/portfolio.css';
import AnimatedCube from '../context/AnimatedCube';

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

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pr-pg-visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    projectsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', position: 'relative' }}>
      <Header />

      <section className="pr-root">
        {/* Background decorators — using global bg */}

        {/* ── Floating Cubes ── */}
        <AnimatedCube
          style={{ top: '200px', left: '4%' }}
          floatDir="down"
          floatDuration="10s"
          spinDuration="13s"
        />
        <AnimatedCube
          style={{ bottom: '200px', right: '4%' }}
          floatDir="up"
          floatDuration="12s"
          spinDuration="16s"
        />

        {/* ── Ghost outline text ── */}
        <div className="pr-ghost-wrap" aria-hidden="true">
          <span className="pr-ghost-text">PROJECTS</span>
        </div>

        <main style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

            {/* Section header */}
            <div
              ref={sectionRef}
              className="pr-pg-fade"
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <p className='cursor-target' style={{
                display: 'inline-block',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(10px, 1.2vw, 13px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '8px',
                color: 'rgba(29,161,242,0.85)',
                marginBottom: '14px',
                textShadow: '0 0 14px rgba(29,161,242,0.4)',
              }}>
                My Work
              </p>
              <h1 className='cursor-target' style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(48px, 8vw, 100px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color: '#ffffff',
                lineHeight: 0.95,
                margin: '0 0 20px',
                textShadow: '0 2px 24px rgba(0,0,0,0.7)',
              }}>
                FEATURED PROJECTS
              </h1>
              <div className='cursor-target' style={{
                width: '60px', height: '2px',
                background: 'linear-gradient(to right, transparent, #1da1f2, transparent)',
                margin: '0 auto 18px',
              }} />
              <p className='cursor-target' style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(13px, 1.4vw, 16px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.42)',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.7,
                letterSpacing: '0.3px',
              }}>
                Showcasing my best work in web development using modern technologies and best practices.
              </p>
            </div>

            {/* Projects list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => (projectsRef.current[index] = el)}
                  className="pr-pg-fade"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Project card */}
                  <div className='cursor-target' style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    transition: 'border-color 0.45s ease, box-shadow 0.45s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(29,161,242,0.55)';
                      e.currentTarget.style.boxShadow = '0 0 32px rgba(29,161,242,0.28), 0 0 70px rgba(29,161,242,0.12)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="pr-pg-grid">

                      {/* Image side */}
                      <div className='cursor-target' style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%', height: '100%', minHeight: '300px',
                            objectFit: 'cover',
                            display: 'block',
                            filter: 'brightness(0.65)',
                            transition: 'filter 0.4s ease, transform 0.4s ease',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(0.85)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                          onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(0.65)'; e.currentTarget.style.transform = 'scale(1)'; }}
                        />
                        {/* Live Demo overlay */}
                        <div className='cursor-target' style={{
                          position: 'absolute', bottom: '20px', left: '20px',
                          display: 'flex', gap: '10px',
                        }}>
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: '6px',
                              padding: '8px 18px', borderRadius: '50px',
                              background: 'linear-gradient(135deg, #1da1f2 0%, #0d8fd8 100%)',
                              color: '#fff',
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: '11px', fontWeight: 700,
                              textDecoration: 'none', letterSpacing: '0.8px',
                              textTransform: 'uppercase',
                              boxShadow: '0 4px 16px rgba(29,161,242,0.40)',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(29,161,242,0.52)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(29,161,242,0.40)'; }}
                          >
                            Live Demo
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Details side */}
                      <div className='cursor-target' style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Title */}
                        <div>
                          <h2 className='cursor-target' style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(18px, 2vw, 24px)',
                            fontWeight: 800,
                            color: '#F1F1F1',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            margin: '0 0 10px',
                            transition: 'color 0.3s ease',
                          }}>
                            {project.title}
                          </h2>
                          <div className='cursor-target' style={{ width: '36px', height: '2px', background: 'linear-gradient(to right, #1da1f2, rgba(29,161,242,0.2))', marginBottom: '14px' }} />
                          <p className='cursor-target' style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                            {project.longDescription}
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className='cursor-target' style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(29,161,242,0.8)', marginBottom: '12px' }}>
                            Key Features
                          </h3>
                          <ul className='cursor-target' style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                            {project.features.map((feature, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.5 }}>
                                <span style={{ color: '#1da1f2', flexShrink: 0, marginTop: '2px' }}>→</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech tags */}
                        <div>
                          <h3 className='cursor-target' style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(29,161,242,0.8)', marginBottom: '10px' }}>
                            Technologies
                          </h3>
                          <div className='cursor-target' style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {[...project.technologies.frontend, ...project.technologies.backend, ...project.technologies.deployment].map((tech, i) => (
                              <span key={i} className='cursor-target' style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: '10px', fontWeight: 700,
                                letterSpacing: '0.7px', textTransform: 'uppercase',
                                color: 'rgb(29,185,242)',
                                background: 'rgba(29,178,242,0.14)',
                                border: '1px solid rgba(29,161,242,0.35)',
                                borderRadius: '5px', padding: '3px 9px',
                                whiteSpace: 'nowrap',
                              }}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
      <ContactForm />

      <Footer />

      {/* Responsive grid style */}
      <style>{`
        .pr-pg-fade {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .pr-pg-fade.pr-pg-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .pr-pg-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;