import React, { useEffect, useRef } from 'react';
import '../styles/portfolio.css';
import AnimatedCube from '../context/AnimatedCube';
import PixelTransition from '../reactBitsComp/PixelTransition';

const techStack = [
  { name: "Next.js", img: "/Images/next.png" },
  { name: "React.js", img: "/Images/react.png" },
  { name: "Node.js", img: "/Images/node.png" },
  { name: "MongoDB", img: "/Images/mongodb.png" },
  { name: "Express.js", img: "/Images/express.png" },
  { name: "JavaScript", img: "/Images/js.png" },
  { name: "HTML5", img: "/Images/html.png" },
  { name: "CSS3", img: "/Images/css.png" },
  { name: "AWS", img: "/Images/aws.png" },
  { name: "RESTful APIs", img: "/Images/api.png" },
  { name: "Git", img: "/Images/git.png" },
  { name: "GitHub", img: "/Images/github.png" },
  { name: "WebRTC", img: "/Images/webrtc.png" },
  { name: "Material UI", img: "/Images/material.png" },
  { name: "Socket.io", img: "/Images/socket.png" },
  { name: "Responsive Design", img: "/Images/responsive.png" },
  { name: "TypeScript", img: "/Images/ts.png" },
  { name: "Docker", img: "/Images/docker.png" },
  { name: "CI/CD", img: "/Images/cicd.png" }
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ts-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ts-root" id="tech-stack">
      {/* ── Animated Cubes — same as Services ── */}
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

      {/* Ghost text background - matching Services style */}
      <div className="sv-ghost-wrap" aria-hidden="true">
        <span className="sv-ghost-text">EXPERTISE</span>
      </div>

      <div className="ts-inner">
        {/* Header section - matching Services structure */}
        <div className="sv-header" ref={sectionRef}>
          <p className="sv-label cursor-target">My Stack</p>
          <h2 className="sv-title cursor-target">TECHNICAL EXPERTISE</h2>
          <div className="sv-title-line" />
          <p className="sv-desc cursor-target">
            A comprehensive overview of the technologies and tools I excel in to build modern, scalable web applications.
          </p>
          {/* Tech grid */}
          <div className="ts-grid">
            {techStack.map((tech, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="ts-item cursor-target"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PixelTransition
                  firstContent={
                    <div className="ts-pixel-content">
                      <img src={tech.img} alt={tech.name} className="ts-tech-icon" />
                    </div>
                  }
                  secondContent={
                    <div className="ts-pixel-content ts-pixel-second">
                      <span className="ts-tech-name-custom">{tech.name}</span>
                    </div>
                  }
                  gridSize={7}
                  pixelColor='#1DA1F2'
                  animationStepDuration={0.2}
                  className="ts-pixel-card"
                  style={{ width: '100%', height: '100%' }}
                  aspectRatio="100%"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
