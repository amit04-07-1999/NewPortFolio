import React from 'react'
import ContactForm from './ContactForm'
import { useTheme } from '../context/ThemeContext'
import AnimatedBackground from '../context/Animation'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { darkMode } = useTheme();
  
  return (
    <footer className={`relative py-20 px-4 md:px-8 overflow-hidden ${
      darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'
    }`}>
      <AnimatedBackground />

      <div className="container mx-auto relative z-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className="overflow-hidden">
              <div className="animate-slide-down">
                <span className={`inline-block ${darkMode ? 'text-white' : 'text-gray-900'}`}>LET'S</span>{' '}
                <span className="inline-block relative">
                  <span className="relative z-10 text-blue-500">
                    BUILD
                  </span>
                </span>{' '}
                <span className={`inline-block ${darkMode ? 'text-white' : 'text-gray-900'}`}>SOMETHING</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="animate-slide-down" style={{ animationDelay: '0.2s' }}>
                <span className="text-blue-500">
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
              className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full inline-flex items-center transform transition-all duration-300 hover:scale-105"
            >
              <span className="relative flex items-center">
                <span className="text-lg text-white">ameykumar76@gmail.com</span>
                <svg className="w-5 h-5 ml-2 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            
            <a 
              href="tel:+919315264682"
              className={`group relative px-8 py-4 bg-transparent rounded-full inline-flex items-center transform transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-blue-400 hover:border-blue-300 hover:bg-gray-800 text-gray-300 hover:text-white' 
                  : 'border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-gray-600 hover:text-gray-900'
              } border`}
            >
              <span className="text-lg transition-colors duration-300">
                +91-9315264682
              </span>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/amit04-07-1999" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden transform hover:scale-110 ${
                darkMode 
                  ? 'border-gray-700 hover:border-blue-400 text-gray-400 hover:text-blue-400' 
                  : 'border-gray-300 hover:border-blue-500 text-gray-600 hover:text-blue-600'
              } border transition-all duration-300`}
            >
              <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-blue-50'
              }`}></span>
              <svg className="w-7 h-7 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="www.linkedin.com/in/amitkumaryadav1999" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden transform hover:scale-110 ${
                darkMode 
                  ? 'border-gray-700 hover:border-blue-400 text-gray-400 hover:text-blue-400' 
                  : 'border-gray-300 hover:border-blue-500 text-gray-600 hover:text-blue-600'
              } border transition-all duration-300`}
            >
              <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-blue-50'
              }`}></span>
              <svg className="w-7 h-7 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center relative">
          <p className={`text-sm group ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="inline-block transform transition-transform group-hover:scale-105 duration-300">
              Full Stack Developer Portfolio © {currentYear} | 
              <span className="text-blue-500 ml-1">
                Amit Kumar Yadav
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 