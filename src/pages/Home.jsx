import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonial'
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
    <div className="relative bg-black overflow-hidden">
      {/* Background with stars and noise effect */}
      <div className="fixed inset-0 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          ></div>
        ))}

        {/* Animated diagonal lines on left side */}
        <div className="absolute left-0 top-0 h-screen w-1/4 overflow-hidden opacity-30">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-purple-500 to-transparent"
              style={{
                top: `${10 + i * 10}%`,
                left: '0',
                width: `${30 + i * 5}%`,
                transform: 'rotate(-5deg)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-10 mix-blend-overlay animate-noise"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Projects />
        {/* <Testimonial /> */}
        <Footer />
      </div>
    </div>
  )
}

export default Home 