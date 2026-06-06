import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import '../styles/portfolio.css';
import AnimatedCube from '../context/AnimatedCube';

const projects = [
  {
    id: 1,
    number: '01',
    title: "Seeds of Innocens IVF",
    description: "An IVF and fertility care website focused on treatments, clinic information, and patient inquiries",
    longDescription: "Built a modern healthcare website for Seeds of Innocens to present IVF treatments, fertility care services, doctor information, patient support, and appointment-focused journeys in a clear and trustworthy way.",
    image: "Images/soi.jpg",
    demoLink: "https://seedsofinnocens.com/",
    githubLink: "",
    features: [
      "IVF treatment information pages",
      "Doctor and clinic details",
      "Appointment-focused user flow",
      "Patient support content",
      "Responsive healthcare layout",
      "Trust-building service presentation"
    ],
    technologies: {
      frontend: ["Next.js", "React.js", "CSS", "Responsive UI"],
      backend: ["Node.js", "API Integration", "Form Handling", "MongoDB"],
      deployment: ["Production Hosting", "Domain Setup"]
    },
    challenges: [
      "Presenting healthcare information clearly",
      "Creating a trustworthy patient experience",
      "Optimizing wide website visuals for all screens",
      "Keeping inquiry and appointment flows simple"
    ]
  },
  {
    id: 2,
    number: '02',
    title: "Home IVF",
    description: "A modern IVF healthcare website for fertility treatment discovery and patient consultation inquiries",
    longDescription: "Developed a responsive IVF website for Home IVF with treatment details, consultation-focused sections, clinic credibility content, and clear call-to-action flows for patients exploring fertility care.",
    image: "Images/home.jpg",
    demoLink: "https://homeivf.com/",
    githubLink: "",
    features: [
      "Fertility treatment landing pages",
      "Consultation inquiry sections",
      "Doctor and service highlights",
      "Mobile-friendly responsive design",
      "Clear call-to-action placement",
      "Healthcare-focused user experience"
    ],
    technologies: {
      frontend: ["Next.js", "React.js", "CSS", "Responsive UI"],
      backend: ["Node.js", "API Integration", "Form Handling", "MongoDB"],
      deployment: ["Production Hosting", "Domain Setup"]
    },
    challenges: [
      "Balancing medical content with clean design",
      "Making consultation actions easy to find",
      "Improving readability across devices",
      "Displaying large hero visuals cleanly"
    ]
  },
  {
    id: 3,
    number: '03',
    title: "H & S Global Ventures",
    description: "A corporate website for presenting business services, brand credibility, and contact-focused journeys",
    longDescription: "Created a professional business website for H & S Global Ventures with service-focused content, responsive pages, brand presentation, and user-friendly contact flows for potential clients.",
    image: "Images/hs.png",
    demoLink: "https://www.hsglobalventure.com/",
    githubLink: "",
    features: [
      "Corporate service presentation",
      "Responsive business pages",
      "Brand-focused visual layout",
      "Contact and inquiry flow",
      "Clean content structure",
      "Fast user navigation"
    ],
    technologies: {
      frontend: ["React.js", "CSS", "Responsive UI", "JavaScript"],
      backend: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      deployment: ["Production Hosting", "Domain Setup"]
    },
    challenges: [
      "Structuring services for quick scanning",
      "Creating a professional brand experience",
      "Keeping content readable on mobile",
      "Building a simple inquiry path"
    ]
  },
  {
    id: 4,
    number: '04',
    title: "Caross Platform",
    description: "A user-friendly web platform built for seamless interaction and high-performance data handling",
    longDescription: "Developed a responsive web platform for Caross with clean user flows, modern interface sections, optimized content presentation, and smooth navigation for a polished client-facing experience.",
    image: "Images/caross1.png",
    demoLink: "https://caross.in/",
    githubLink: "",
    features: [
      "Responsive platform layout",
      "Clean user navigation",
      "Service-focused content sections",
      "Optimized visual presentation",
      "Client-facing landing experience",
      "Fast and accessible page structure"
    ],
    technologies: {
      frontend: ["React.js", "CSS", "JavaScript", "Responsive UI"],
      backend: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      deployment: ["Production Hosting", "Domain Setup"]
    },
    challenges: [
      "Creating a clean platform experience",
      "Maintaining consistent layout across screens",
      "Optimizing image and content sections",
      "Keeping navigation simple and polished"
    ]
  },
  {
    id: 5,
    number: '05',
    title: "India Educates",
    description: "An education website helping Zambian students find scholarships and study opportunities in India",
    longDescription: "Built an education-focused website for India Educates to help students from Zambia discover scholarship opportunities, understand study pathways in India, explore guidance content, and submit inquiries for academic support.",
    image: "Images/ie.png",
    demoLink: "https://indiaeducates.org/",
    githubLink: "",
    features: [
      "Scholarship information sections",
      "Study in India guidance",
      "Student inquiry flow",
      "Education-focused content layout",
      "Responsive pages for students",
      "Clear program and support details"
    ],
    technologies: {
      frontend: ["Wordpress", "CSS", "JavaScript", "Responsive UI"],
      backend: ["Node.js", "Express.js", "MongoDB", "API Integration"],
      deployment: ["Production Hosting", "Domain Setup"]
    },
    challenges: [
      "Making scholarship details easy to understand",
      "Structuring education content for students",
      "Building trust for international applicants",
      "Keeping inquiry flow simple across devices"
    ]
  },
  {
    id: 6,
    number: '06',
    title: "Linknest",
    description: "A link-in-bio platform for showcasing social profiles, websites, and important links in one place",
    longDescription: "Built a Linktree-style platform where users can manage and share all social links, websites, portfolios, and important contact links through one clean public profile page.",
    image: "Images/link1.png",
    demoLink: "",
    githubLink: "",
    features: [
      "Single shareable profile page",
      "Social link management",
      "Custom link sections",
      "Responsive public profile",
      "Clean dashboard experience",
      "Fast link access for visitors"
    ],
    technologies: {
      frontend: ["React.js", "CSS", "JavaScript", "Responsive UI"],
      backend: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
      deployment: ["AWS", "Production Hosting"]
    },
    challenges: [
      "Creating a simple link management flow",
      "Keeping public profiles clean and readable",
      "Handling dynamic user link data",
      "Optimizing profile pages for all devices"
    ]
  },
  {
    id: 7,
    number: '07',
    title: "All My Tab",
    description: "A browser productivity website with curated bookmarks, tools, and quick-access resources",
    longDescription: "Developed a browser upgrade platform that gives users ready-made bookmarks, useful tools, and organized quick links to make everyday browsing faster and more productive.",
    image: "Images/amt1.png",
    demoLink: "",
    githubLink: "",
    features: [
      "Curated bookmark collections",
      "Quick-access browser tools",
      "Organized resource sections",
      "Productivity-focused layout",
      "Responsive browsing experience",
      "Fast access to everyday links"
    ],
    technologies: {
      frontend: ["React.js", "CSS", "JavaScript", "Responsive UI"],
      backend: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
      deployment: ["AWS", "Production Hosting"]
    },
    challenges: [
      "Organizing many links without clutter",
      "Making tools easy to scan and access",
      "Building a fast and clean browsing dashboard",
      "Keeping the interface useful on mobile"
    ]
  },
  {
    id: 8,
    number: '08',
    title: "Orange Lilies",
    description: "A product-focused website for women's disposable panties with a clean shopping experience",
    longDescription: "Created a responsive product website for Orange Lilies, a women's disposable panties brand, with polished product sections, clear brand messaging, and a smooth user journey for exploring products.",
    image: "Images/orange1.png",
    demoLink: "",
    githubLink: "",
    features: [
      "Product-focused landing pages",
      "Clean brand presentation",
      "Responsive shopping layout",
      "Clear product information",
      "Inquiry and purchase-ready flow",
      "Mobile-friendly product browsing"
    ],
    technologies: {
      frontend: ["React.js", "CSS", "JavaScript", "Responsive UI"],
      backend: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
      deployment: ["AWS", "Production Hosting"]
    },
    challenges: [
      "Presenting product details clearly",
      "Creating a polished brand experience",
      "Making the layout comfortable on mobile",
      "Keeping the shopping flow simple"
    ]
  },
  {
    id: 9,
    number: '09',
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
    id: 10,
    number: '10',
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
                    position: 'relative',
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
                      <span
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          top: '18px',
                          right: '24px',
                          zIndex: 2,
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: 'clamp(58px, 8vw, 92px)',
                          fontWeight: 900,
                          lineHeight: 1,
                          color: 'rgba(255,255,255,0.16)',
                          textShadow: '0 0 22px rgba(29,161,242,0.16)',
                          pointerEvents: 'none',
                        }}
                      >
                        {project.number || String(index + 1).padStart(2, '0')}
                      </span>

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
                        {project.demoLink && (
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
                        )}
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
