import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import "./App.css";
import SplashCursor from './reactBitsComp/SplashCursor';

function App() {
  return (
    <>
      <SplashCursor />
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
