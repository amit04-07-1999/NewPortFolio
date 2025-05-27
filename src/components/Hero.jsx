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
        this.color = `hsla(${Math.random() * 60 + 260}, 70%, 70%, ${Math.random() * 0.3 + 0.1})`;
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-black"
        style={{ background: 'linear-gradient(45deg, #000000, #1a1a1a)' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          {/* Animated Welcome Text */}
          <div className="overflow-hidden mb-8">
            <p className="text-lg sm:text-xl text-purple-400 font-medium transform animate-fade-in-up">
              Welcome to my portfolio
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight tracking-tight mb-8">
            <div className="overflow-hidden mb-4">
              <div className="animate-slide-down">
                <span className="inline-block hover:text-purple-400 transition-colors duration-300">HI...</span>
                <span className="inline-block mx-2 text-purple-500 animate-pulse"></span>
                <span className="inline-block hover:text-purple-400 transition-colors duration-300">I'M</span>
              </div>
            </div>
            
            <div className="overflow-hidden mb-4">
              <div className="animate-slide-down" style={{ animationDelay: '0.2s' }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white animate-gradient-x hover:from-purple-400 hover:to-white transition-all duration-500">
                  AMIT KUMAR
                </span>
              </div>
            </div>

            <div className="overflow-hidden mb-4">
              <div className="relative inline-block animate-slide-down" style={{ animationDelay: '0.4s' }}>
                <span className="relative z-10 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient-x">
                  FULL STACK
                </span>
                <span className="absolute top-0 left-0 -ml-1 text-red-500/30 animate-glitch-1">
                  FULL STACK
                </span>
                <span className="absolute top-0 left-0 ml-1 text-purple-500/30 animate-glitch-2">
                  FULL STACK
                </span>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="animate-slide-down" style={{ animationDelay: '0.6s' }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500">
                  DEVELOPER
                </span>
              </div>
            </div>
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Enthusiastic Full Stack Developer with expertise in MERN stack. BCA graduate with a passion for building interactive, responsive websites and ensuring seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="mailto:ameykumar76@gmail.com" 
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full inline-flex items-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-70"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center space-x-2">
                  <span className="text-lg text-white">Contact Me</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a 
                href="tel:+919315264682" 
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full inline-flex items-center border border-purple-500/30 hover:border-purple-500"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center space-x-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg group-hover:text-purple-400 transition-colors text-white">+91-9315264682</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  )
}

export default Hero 