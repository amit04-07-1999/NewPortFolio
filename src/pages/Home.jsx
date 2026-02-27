import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Projects from '../components/Project';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (sectionPosition < screenPosition) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: 'transparent' }}>
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;