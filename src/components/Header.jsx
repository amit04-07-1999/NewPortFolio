import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300${
      isScrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            <h2 className="text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Amit Kumar Yadav
            </h2>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="relative group text-white/90 hover:text-white transition-colors"
            >
              <span className='text-white'>Home</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              to="/experience" 
              className="relative group text-white/90 hover:text-white transition-colors"
            >
              <span className='text-white'>Experience</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              to="/projects" 
              className="relative group text-white/90 hover:text-white transition-colors"
            >
              <span className='text-white'>Projects</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:ameykumar76@gmail.com" 
              className="px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all text-sm text-white/90 hover:text-white"
            >
              <span className="hidden lg:inline text-white">ameykumar76@gmail.com</span>
              <span className="lg:hidden text-white">Email</span>
            </a>
            <a 
              href="tel:+919315264682" 
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all text-sm text-white"
            >
              <span className="hidden lg:inline text-white">+91-9315264682</span>
              <span className="lg:hidden text-white">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              to="/" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/experience" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              to="/projects" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
              <a 
                href="mailto:ameykumar76@gmail.com" 
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ameykumar76@gmail.com
              </a>
              <a 
                href="tel:+919315264682" 
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9315264682
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Background Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </header>
  )
}

export default Header 