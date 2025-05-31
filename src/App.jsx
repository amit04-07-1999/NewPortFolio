import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { ThemeProvider } from './context/ThemeContext'
import AnimatedBackground from './context/Animation'
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
