import React, { useEffect, useRef } from 'react';
import '../styles/portfolio.css';
import PixelCard from '../reactBitsComp/PixelCard';
import AnimatedCube from '../context/AnimatedCube';

/* Projects data */
const PROFESSIONAL_DATA = [
  {
    company: "Pizeonfly Pvt Ltd",
    location: "New Delhi",
    projects: [
      {
        id: 'p1', title: "FIC CRM", number: '01',
        description: "Loan management system with four user panels (admin, agent, employee, customer) built with MERN & AWS.",
        tech: ["React.js", "Node.js", "AWS", "MongoDB"],
        imageSrc: '/Images/fic.png',
      },
      {
        id: 'p2', title: "Pizeonfly CRM", number: '02',
        description: "Project and task management platform with multi-panel access, deployed securely on AWS.",
        tech: ["React.js", "Node.js", "AWS", "MongoDB"],
        imageSrc: '/Images/pizeonfly.jpg',
      },
      {
        id: 'p3', title: "All My Tab", number: '03',
        description: "A comprehensive utility website for managing bookmarks and notes with real-time syncing.",
        tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
        imageSrc: '/Images/amt.png',
      },
      {
        id: 'p4', title: "Saas Management", number: '04',
        description: "A comprehensive utility website for managing bookmarks and notes with real-time syncing.",
        tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
        imageSrc: '/Images/saas.png',
      },
    ]
  },
  {
    company: "TechNinza Pvt Ltd",
    location: "Gurgaon",
    projects: [
      {
        id: 'p5', title: "Caross Platform", number: '05',
        description: "User-friendly web platform built for seamless interaction and high-performance data handling.",
        tech: ["React.js", "Node.js", "MongoDB"],
        imageSrc: '/Images/caross.png',
      },
      {
        id: 'p6', title: "BrandNeers Panel", number: '06',
        description: "Streamlined employee and admin management panels developed to optimize organizational operations.",
        tech: ["React.js", "Redux", "Material UI"],
        imageSrc: '/Images/brandneers.jpg',
      },
      {
        id: 'p7', title: "EZI Mobile Travel App", number: '07',
        description: "Streamlined employee and admin management panels developed to optimize organizational operations.",
        tech: ["React.js", "Redux", "Material UI"],
        imageSrc: '/Images/ezi.png',
      },
      {
        id: 'p8', title: "PostBox Mobile App", number: '08',
        description: "Streamlined employee and admin management panels developed to optimize organizational operations.",
        tech: ["React.js", "Redux", "Material UI"],
        imageSrc: '/Images/postbox.png',
      },
    ]
  }
];

const PERSONAL_DATA = [
  {
    id: 'per1', title: "Chat App", number: '01',
    description: "Real-time communication app using Socket.io, Node.js and React with secure private messaging.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    imageSrc: '/Images/chatapp.png',
    demoLink: "https://chatfrontend-nine.vercel.app/"
  },
  {
    id: 'per2', title: "E-Commerce", number: '02',
    description: "Full-stack shopping platform with Stripe integration, product management and user auth.",
    tech: ["React.js", "Node.js", "Stripe", "Redux"],
    imageSrc: '/Images/e-commerce.png',
    demoLink: "https://rainbow-fox-1c79d5.netlify.app/"
  }
];

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pr-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  let projectIndex = 0;

  return (
    <section className="pr-root" id="projects">
      {/* ── Background: Global (removed local) ── */}

      <AnimatedCube
        style={{ top: '35%', right: '4%' }}
        floatDir="down"
        floatDuration="9s"
        spinDuration="12s"
      />

      <AnimatedCube
        style={{ bottom: '100px', left: '4%' }}
        floatDir="up"
        floatDuration="10s"
        spinDuration="15s"
      />

      <div className="pr-ghost-wrap" aria-hidden="true">
        <span className="pr-ghost-text">PROJECTS</span>
      </div>

      <div className="pr-inner">
        <div className="pr-header">
          <p className="pr-label cursor-target">My Works</p>
          <h2 className="pr-title cursor-target">SELECTED PROJECTS</h2>
          <div className="pr-title-line" />
          <p className="pr-desc cursor-target">
            A showcase of my professional experience and independent
            creations in full-stack web development.
          </p>
        </div>

        {/* Professional Section */}
        {PROFESSIONAL_DATA.map((comp, cIdx) => (
          <div key={cIdx} className="pr-section">
            <h3 className="pr-sub-grid-header cursor-target">{comp.company} — {comp.location}</h3>
            <div className="pr-grid">
              {comp.projects.map((proj) => {
                const currentIdx = projectIndex++;
                return (
                  <div
                    key={proj.id}
                    className="pr-card cursor-target"
                    ref={(el) => (cardRefs.current[currentIdx] = el)}
                    style={{ animationDelay: `${currentIdx * 150}ms` }}
                  >
                    <PixelCard
                      variant="blue"
                      className="w-full h-full !rounded-[20px]"
                    >
                      <div className="pr-tilted-overlay !absolute">
                        <div className="pr-icon-wrap">
                          <img src={proj.imageSrc} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <h4 className="pr-card-title">{proj.title}</h4>
                        <div className="pr-card-divider" />
                        <p className="pr-card-desc">{proj.description}</p>
                        <div className="pr-tags">
                          {proj.tech.map((t, i) => (
                            <span key={i} className="pr-tag">{t}</span>
                          ))}
                        </div>
                        <span className="pr-card-num" aria-hidden="true">{proj.number}</span>
                      </div>
                    </PixelCard>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Personal Projects Section */}
        <h3 className="pr-sub-grid-header cursor-target">Independent Creations</h3>
        <div className="pr-grid">
          {PERSONAL_DATA.map((proj) => {
            const currentIdx = projectIndex++;
            return (
              <div
                key={proj.id}
                className="pr-card cursor-target"
                ref={(el) => (cardRefs.current[currentIdx] = el)}
                style={{ animationDelay: `${currentIdx * 150}ms` }}
              >
                <PixelCard
                  variant="pink"
                  className="w-full h-full !rounded-[20px]"
                >
                  <div className="pr-tilted-overlay !absolute">
                    <div className="pr-icon-wrap">
                      <img src={proj.imageSrc} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <h4 className="pr-card-title">{proj.title}</h4>
                    <div className="pr-card-divider" />
                    <p className="pr-card-desc">{proj.description}</p>
                    <div className="pr-tags">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="pr-tag">{t}</span>
                      ))}
                    </div>
                    {proj.demoLink && (
                      <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="pr-demo-btn">
                        Live Demo
                      </a>
                    )}
                    <span className="pr-card-num" aria-hidden="true">{proj.number}</span>
                  </div>
                </PixelCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;