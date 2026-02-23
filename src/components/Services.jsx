import React, { useEffect, useRef } from 'react';
import '../styles/portfolio.css';
import PageBackground from '../context/PageBackground';
import TiltedCard from '../reactBitsComp/TiltedCard';
import AnimatedCube from '../context/AnimatedCube';


/* Services data */
const SERVICES = [
  {
    id: 1, number: '01',
    title: 'Frontend Development',
    description: 'Building fast, responsive, and visually rich UIs with React.js, HTML5, CSS3, and modern JavaScript.',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Next.js', 'Responsive Design', 'UI/UX'],
    imageSrc: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=300&fit=crop',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2, number: '02',
    title: 'Backend Development',
    description: 'Robust server-side solutions with Node.js, Express.js, and MongoDB — RESTful APIs at scale.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Database Design', 'Auth'],
    imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=300&fit=crop',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
        <path d="M8 12h8M8 8h4" />
      </svg>
    ),
  },
  {
    id: 3, number: '03',
    title: 'Cloud & DevOps',
    description: 'Deploying and managing cloud infrastructure with AWS EC2, S3, and automated CI/CD pipelines.',
    skills: ['AWS EC2', 'AWS S3', , 'GitHub Actions', 'CI/CD', 'Cloud Architecture', 'DevOps'],
    imageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=300&fit=crop',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const Services = () => {
  const cardRefs = useRef([]);


  /* Scroll-triggered card reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sv-visible');
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
    <section className="sv-root" id="services">

      {/* ── All shared background layers ── */}
      <PageBackground hatchTR hatchBL />

      <AnimatedCube
        style={{ top: '60px', left: '4%' }}
        floatDir="up"
        floatDuration="8s"
        spinDuration="11s"
      />

      <AnimatedCube
        style={{ bottom: '80px', right: '4%' }}
        floatDir="down"
        floatDuration="12s"
        spinDuration="18s"
      />

      {/* ── Ghost outline text (section-specific position) ── */}
      <div className="sv-ghost-wrap" aria-hidden="true">
        <span className="sv-ghost-text">SERVICES</span>
      </div>




      {/* ── Content ── */}
      <div className="sv-inner">

        {/* Header */}
        <div className="sv-header">
          <p className="sv-label">What I Do</p>
          <h2 className="sv-title">MY EXPERTISE</h2>
          <div className="sv-title-line" />
          <p className="sv-desc">
            Specialized in building modern full-stack web applications
            with cutting-edge technologies and clean architecture.
          </p>
        </div>

        {/* Cards */}
        <div className="sv-grid">
          {SERVICES.map((svc, idx) => (
            <div
              key={svc.id}
              className="sv-card"
              ref={(el) => (cardRefs.current[idx] = el)}
              style={{ animationDelay: `${idx * 180}ms` }}
            >
              <TiltedCard
                imageSrc={svc.imageSrc}
                altText={svc.title}
                captionText={svc.title}
                containerHeight="380px"
                containerWidth="100%"
                imageHeight="380px"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <div className="sv-tilted-overlay">
                    {/* Icon */}
                    <div className="sv-icon-wrap">{svc.icon}</div>

                    {/* Title */}
                    <h3 className="sv-card-title">{svc.title}</h3>

                    {/* Accent divider */}
                    <div className="sv-card-divider" />

                    {/* Description */}
                    <p className="sv-card-desc">{svc.description}</p>

                    {/* Skill tags */}
                    <div className="sv-tags">
                      {svc.skills.map((sk, i) => (
                        <span key={i} className="sv-tag">{sk}</span>
                      ))}
                    </div>

                    {/* Ghost number */}
                    <span className="sv-card-num" aria-hidden="true">{svc.number}</span>
                  </div>
                }
              />
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Services;