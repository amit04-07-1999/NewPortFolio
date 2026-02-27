import React, { useEffect, useRef } from 'react';
import '../styles/portfolio.css';
import TiltedCard from '../reactBitsComp/TiltedCard';
import AnimatedCube from '../context/AnimatedCube';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

/* Experiences data */
const EXPERIENCES = [
  {
    id: 1,
    number: '01',
    role: "Full Stack Developer",
    company: "Pizeonfly Pvt Ltd",
    location: "New Delhi, Sant Nagar",
    duration: "March 2024 - Present",
    description: "Leading full-stack development projects and mentoring junior developers. Developed and maintained multiple CRM systems using MERN stack.",
    responsibilities: [
      "Developed and maintained multiple CRM systems using MERN stack",
      "Implemented secure authentication and authorization systems",
      "Optimized database queries and API performance",
    ],
    skills: ["React.js", "Node.js", "MongoDB", "AWS", "Socket.io"],
    imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&h=500&fit=crop', // Office setting
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    role: "Full Stack Developer",
    company: "TechNinza Pvt Ltd",
    location: "Haryana, Gurgaon",
    duration: "Feb 2023 - Jan 2024",
    description: "Worked on multiple client projects and internal tools development. Built responsive web applications using React.js and Node.js.",
    responsibilities: [
      "Built responsive web applications using React.js",
      "Developed RESTful APIs using Node.js and Express",
      "Implemented MongoDB database schemas and queries",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop', // Modern office
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  }
];

const Experience = () => {
  const cardRefs = useRef([]);

  /* Scroll-triggered card reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ex-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience-page" style={{ background: 'transparent' }}>
      <Header />
      <section className="ex-root" id="experience">
        {/* ── Background: Global (removed local) ── */}

        {/* ── Floating Cubes ── */}
        <AnimatedCube
          style={{ top: '140px', left: '4%' }}
          floatDir="up"
          floatDuration="9s"
          spinDuration="12s"
        />
        <AnimatedCube
          style={{ bottom: '100px', right: '4%' }}
          floatDir="down"
          floatDuration="11s"
          spinDuration="15s"
        />

        {/* ── Ghost outline text ── */}
        <div className="ex-ghost-wrap" aria-hidden="true">
          <span className="ex-ghost-text">EXPERIENCE</span>
        </div>

        {/* ── Content ── */}
        <div className="ex-inner">
          {/* Header */}
          <div className="ex-header">
            <p className="ex-label cursor-target">My Journey</p>
            <h2 className="ex-title cursor-target">WORK EXPERIENCE</h2>
            <div className="ex-title-line" />
            <p className="ex-desc cursor-target">
              Building innovative solutions and gaining expertise across various
              tech stacks and professional environments.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="ex-grid">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className="ex-card cursor-target"
                ref={(el) => (cardRefs.current[idx] = el)}
                style={{ animationDelay: `${idx * 180}ms` }}
              >
                <TiltedCard
                  altText={exp.role}
                  captionText={exp.company}
                  containerHeight="450px"
                  containerWidth="100%"
                  imageHeight="450px"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.02}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent
                  overlayContent={
                    <div className="ex-tilted-overlay">
                      {/* Icon */}
                      <div className="ex-icon-wrap cursor-target">{exp.icon}</div>

                      {/* Role & Company */}
                      <h3 className="ex-card-title cursor-target">{exp.role}</h3>
                      <p className="ex-company cursor-target">{exp.company}</p>
                      <p className="ex-duration cursor-target">{exp.duration}</p>

                      {/* Accent divider */}
                      <div className="ex-card-divider" />

                      {/* Brief description */}
                      <p className="ex-card-desc cursor-target">{exp.description}</p>

                      {/* Key Responsibilities */}
                      <ul className="ex-responsibilities cursor-target">
                        {exp.responsibilities.slice(0, 3).map((res, i) => (
                          <li key={i}>{res}</li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="ex-tags cursor-target">
                        {exp.skills.map((sk, i) => (
                          <span key={i} className="ex-tag">{sk}</span>
                        ))}
                      </div>

                      {/* Ghost number */}
                      <span className="ex-card-num" aria-hidden="true">{exp.number}</span>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Experience; 