import React from 'react'
import ContactForm from './ContactForm'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-black"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0" style={{ opacity: 0.05 }}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transform -translate-y-1/2 animate-pulse"
              style={{ 
                top: `${(i + 1) * 10}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            <div className="overflow-hidden">
              <div className="animate-slide-down">
                <span className="inline-block">LET'S</span>{' '}
                <span className="inline-block relative">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white animate-gradient-x bg-[length:200%_auto]">
                    BUILD
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-xl animate-pulse-glow"></span>
                </span>{' '}
                <span className="inline-block">SOMETHING</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="animate-slide-down" style={{ animationDelay: '0.2s' }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  AMAZING TOGETHER
                </span>
              </div>
            </div>
          </h2>

          {/* Contact Form */}
          <div className="mb-16">
            <ContactForm />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
            <a 
              href="mailto:ameykumar76@gmail.com"
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full inline-flex items-center transform transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center">
                <span className="text-lg text-white">ameykumar76@gmail.com</span>
                <svg className="w-5 h-5 ml-2 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            
            <a 
              href="tel:+919315264682"
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full inline-flex items-center border border-purple-500/30 hover:border-purple-500 transform transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative text-lg group-hover:text-purple-400 transition-colors duration-300 text-white">
                +91-9315264682
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/amit04-07-1999" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 transition-all duration-300 overflow-hidden transform hover:scale-110"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <svg className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="www.linkedin.com/in/amit-yadav-8586a3231" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 transition-all duration-300 overflow-hidden transform hover:scale-110"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <svg className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center relative">
          <p className="text-sm text-gray-400 group">
            <span className="inline-block transform transition-transform group-hover:scale-105 duration-300">
              Full Stack Developer Portfolio © {currentYear} | 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ml-1">
                Amit Kumar Yadav
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    </footer>
  )
}

export default Footer 