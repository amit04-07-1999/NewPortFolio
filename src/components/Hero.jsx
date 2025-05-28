import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.2 + 0.1})`; // Blue color
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-white"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          {/* Animated Welcome Text */}
          <div className="overflow-hidden mb-4 mt-20">
            <p className="text-lg sm:text-xl text-blue-600 font-medium transform animate-fade-in-up">
              Welcome to my portfolio
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            <div className="overflow-hidden mb-4">
              <div className="animate-slide-down">
                <span className="inline-block text-gray-900">HI...</span>
                <span className="inline-block mx-2 text-blue-500 animate-pulse"></span>
                <span className="inline-block text-gray-900">I'M</span>
              </div>
            </div>
            
            <div className="overflow-hidden mb-4">
              <div className="animate-slide-down" style={{ animationDelay: '0.2s' }}>
                <span className="text-gray-900 hover:text-blue-600 transition-colors duration-500">
                  AMIT KUMAR YADAV
                </span>
              </div>
            </div>

            <div className="overflow-hidden mb-4">
              <div className="animate-slide-down" style={{ animationDelay: '0.4s' }}>
                <span className="text-blue-600">
                  MERN STACK DEVELOPER
                </span>
              </div>
            </div>

            {/* <div className="overflow-hidden">
              <div className="animate-slide-down" style={{ animationDelay: '0.6s' }}>
                <span className="text-blue-600 hover:text-blue-700 transition-colors duration-500">
                  
                </span>
              </div>
            </div> */}
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Enthusiastic Full Stack Developer with expertise in MERN stack. BCA graduate with a passion for building interactive, responsive websites and ensuring seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="mailto:ameykumar76@gmail.com" 
                className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full inline-flex items-center transition-all duration-300"
              >
                <span className="relative flex items-center space-x-2">
                  <span className="text-lg text-white">Contact Me</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a 
                href="tel:+919315264682" 
                className="group relative px-8 py-4 bg-transparent rounded-full inline-flex items-center border border-blue-200 hover:border-blue-500 hover:bg-blue-50"
              >
                <span className="relative flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg text-gray-600 group-hover:text-gray-900 transition-colors">+91-9315264682</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero 