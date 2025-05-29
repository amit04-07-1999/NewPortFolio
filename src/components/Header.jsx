import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isScrolled 
        ? darkMode 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg py-4' 
          : 'bg-white/95 backdrop-blur-lg shadow-sm py-4' 
        : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            {darkMode ? (
              <img src="Images/darkamit.png" alt="Logo" className="w-15 h-10 inline-block" />
            ) : (
              <img src="Images/amit.png" alt="Logo" className="w-15 h-10 inline-block" />
            )}
            {/* <span className="text-xl md:text-xl font-bold text-gray-900"style={{ fontFamily: 'Pacifico, cursive' }}>
              mit
            </span> */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative group ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              <span className={`${darkMode ? 'text-gray-300' : ''}`}>Home</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/experience"
              className={`relative group ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              <span className={`${darkMode ? 'text-gray-300' : ''}`}>Experience</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/projects"
              className={`relative group ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              <span className={`${darkMode ? 'text-gray-300' : ''}`}>Projects</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          {/* Desktop Contact and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <div onClick={toggleTheme} className="cursor-pointer">
              {darkMode ? (
                <svg className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-full h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className={`flex flex-col space-y-4 py-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <Link
              to="/"
              className={`hover:${darkMode ? 'text-white' : 'text-gray-900'} hover:bg-${darkMode ? 'gray-800' : 'gray-100'} px-4 py-2 rounded-lg transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/experience"
              className={`hover:${darkMode ? 'text-white' : 'text-gray-900'} hover:bg-${darkMode ? 'gray-800' : 'gray-100'} px-4 py-2 rounded-lg transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className={`hover:${darkMode ? 'text-white' : 'text-gray-900'} hover:bg-${darkMode ? 'gray-800' : 'gray-100'} px-4 py-2 rounded-lg transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                    />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                    />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Bottom Border */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div> */}
    </header>
  )
}

export default Header 