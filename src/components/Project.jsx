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
        link: 'https://play.google.com/store/apps/details?id=com.ficApp.crm&hl=en_IN&pli=1',
      },
      {
        id: 'p2', title: "Pizeonfly CRM", number: '02',
        description: "Project and task management platform with multi-panel access, deployed securely on AWS.",
        tech: ["React.js", "Node.js", "AWS", "MongoDB"],
        imageSrc: '/Images/pizeonfly.jpg',
        link: '',
      },
      {
        id: 'p3', title: "All My Tab", number: '03',
        description: "A comprehensive utility website for managing bookmarks and notes with real-time syncing.",
        tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
        imageSrc: '/Images/amt.png',
        link: '',
      },
      {
        id: 'p4', title: "Saas Management", number: '04',
        description: "A comprehensive utility website for managing bookmarks and notes with real-time syncing.",
        tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
        imageSrc: '/Images/saas.png',
        link: '',
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
        link: 'https://caross.in/',
      },
      {
        id: 'p6', title: "BrandNeers Panel", number: '06',
        description: "Streamlined employee and admin management panels developed to optimize organizational operations.",
        tech: ["React.js", "Redux", "Material UI"],
        imageSrc: '/Images/brandneers.jpg',
        link: '',
      },
      {
        id: 'p7', title: "EZI Mobile Travel App", number: '07',
        description: "Streamlined employee and admin management panels developed to optimize organizational operations.",
        tech: ["React.js", "Redux", "Material UI"],
        imageSrc: '/Images/ezi.png',
        link: 'https://www.eziholiday.com/',
      },
      {
        id: 'p8', title: "PostBox Mobile App", number: '08',
        description: "Streamlined employee and admin management panels developed to optimize organizational operations.",
        tech: ["React.js", "Redux", "Material UI"],
        imageSrc: '/Images/postbox.png',
        link: '',
      },
    ]
  }
];

const PERSONAL_DATA = [
  {
    id: 'per1', title: "Seeds of Innocens", number: '01',
    description: "IVF and fertility care website built to present treatments, patient support, clinic information, and appointment-focused user journeys.",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    imageSrc: '/Images/soi.jpg',
    previewImage: true,
    link: "https://seedsofinnocens.com/"
  },
  {
    id: 'per2', title: "Home IVF", number: '02',
    description: "Modern IVF healthcare website designed for treatment discovery, fertility consultation details, clinic trust-building, and patient inquiries.",
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    imageSrc: '/Images/home.jpg',
    previewImage: true,
    link: "https://homeivf.com/"
  },
  {
    id: 'per3', title: "H & S Global Ventures", number: '03',
    description: "Real-time communication app using Socket.io, Node.js and React with secure private messaging.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageSrc: '/Images/hs.jpeg',
    link: "https://www.hsglobalventure.com/"
  },
  {
    id: 'per4', title: "India Educates", number: '04',
    description: "Education website helping Zambian students explore scholarship opportunities and study pathways in India.",
    tech: ["Wordpress", "Node.js", "Express.js", "MongoDB"],
    imageSrc: '/Images/ie.png',
    link: 'https://indiaeducates.org/'
  },
  {
    id: 'per5', title: "Caross Platform", number: '05',
    description: "User-friendly web platform built for seamless interaction and high-performance data handling.",
    tech: ["React.js", "Node.js", "MongoDB"],
    imageSrc: '/Images/caross.png',
    link: 'https://caross.in/'
  },
  {
    id: 'per6', title: "Linknest", number: '06',
    description: "Link-in-bio platform where users can showcase all social profiles, websites, and important links through one shareable page.",
    tech: ["React.js", "Node.js", "MongoDB", "AWS", "Socket.io"],
    imageSrc: '/Images/link.png',
    link: 'https://linknesttree.vercel.app/'
  },
  {
    id: 'per7', title: "All My Tab", number: '07',
    description: "Browser productivity platform with curated bookmarks, useful tools, and quick-access features to upgrade the browsing experience.",
    tech: ["React.js", "Node.js", "MongoDB", "AWS", "Socket.io"],
    imageSrc: '/Images/amt.png',
    link: 'https://www.allmytab.com/'
  },
  {
    id: 'per8', title: "Orange Lilies", number: '08',
    description: "E-commerce website for women's disposable panties, built with product-focused pages, clean shopping flow, and responsive design.",
    tech: ["React.js", "Node.js", "MongoDB", "AWS", "Socket.io"],
    imageSrc: '/Images/orange.png',
    link: 'https://orangelilies.com/'
  },
  {
    id: 'per9', title: "Chat App", number: '09',
    description: "Real-time communication app using Socket.io, Node.js and React with secure private messaging.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    imageSrc: '/Images/chatapp.png',
    link: "https://chatfrontend-nine.vercel.app/"
  },
  {
    id: 'per10', title: "E-Commerce", number: '10',
    description: "Full-stack shopping platform with Stripe integration, product management and user auth.",
    tech: ["React.js", "Node.js", "Stripe", "Redux"],
    imageSrc: '/Images/e-commerce.png',
    link: "https://rainbow-fox-1c79d5.netlify.app/"
  },
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

  const renderProjectCard = (proj, variant, currentIdx) => {
    const hasLink = Boolean(proj.link);
    const CardTag = hasLink ? 'a' : 'div';

    return (
      <CardTag
        key={proj.id}
        className={`pr-card cursor-target${hasLink ? ' pr-card-link' : ''}`}
        ref={(el) => (cardRefs.current[currentIdx] = el)}
        style={{ animationDelay: `${currentIdx * 150}ms` }}
        {...(hasLink
          ? {
            href: proj.link,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': `Open ${proj.title}`,
          }
          : {})}
      >
        <PixelCard
          variant={variant}
          className="w-full h-full !rounded-[20px]"
        >
          <div className="pr-tilted-overlay !absolute">
            <div className={`pr-icon-wrap${proj.previewImage ? ' pr-image-preview' : ''}`}>
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
            {hasLink && (
              <span className="pr-demo-btn">
                View Project
              </span>
            )}
            <span className="pr-card-num" aria-hidden="true">{proj.number}</span>
          </div>
        </PixelCard>
      </CardTag>
    );
  };

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
                return renderProjectCard(proj, 'blue', currentIdx);
              })}
            </div>
          </div>
        ))}

        {/* Personal Projects Section */}
        <h3 className="pr-sub-grid-header cursor-target">Independent Creations</h3>
        <div className="pr-grid">
          {PERSONAL_DATA.map((proj) => {
            const currentIdx = projectIndex++;
            return renderProjectCard(proj, 'pink', currentIdx);
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
