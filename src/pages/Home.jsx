import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Project'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      
      sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(sectionPosition < screenPosition) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="fixed inset-0 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        
        {/* Subtle dots pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#3B82F6 0.5px, transparent 0.5px)', 
          backgroundSize: '24px 24px',
          opacity: 0.1 
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default Home 