import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import "./App.css";
// import SplashCursor from './reactBitsComp/SplashCursor';
import TargetCursor from './reactBitsComp/TargetCursor';
import PageBackground from './context/PageBackground';

function App() {
  return (
    <>
      <PageBackground />
      <TargetCursor
        targetSelector="a, button, .cursor-target, .hv-name, .hv-subtitle, .sv-card"
        spinDuration={1}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <DownloadResume />
      </Router>
    </>
  );
}


export default App;
