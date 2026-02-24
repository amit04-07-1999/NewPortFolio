import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import "./App.css";
// import SplashCursor from './reactBitsComp/SplashCursor';
import TargetCursor from './reactBitsComp/TargetCursor';

function App() {
  return (
    <>
      {/* <SplashCursor /> */}
      <TargetCursor
        targetSelector="a, button, .cursor-target, .hv-name, .hv-subtitle, .sv-card"
        spinDuration={1}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* Test elements from your example */}
      <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 10000, pointerEvents: 'none', opacity: 0.6 }}>
        <h1 className="cursor-target" style={{ fontSize: '14px', color: '#fff', pointerEvents: 'auto' }}>Hover me (Target)</h1>
        <button className="cursor-target" style={{ pointerEvents: 'auto' }}>Click me!</button>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
