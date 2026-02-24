import React from 'react';
import '../styles/portfolio.css';
import AnimatedCube from '../context/AnimatedCube';
import PageBackground from '../context/PageBackground';
import ScrambledText from '../reactBitsComp/ScrambledText';
import Lanyard from '../reactBitsComp/Lanyard';

const Hero = () => (
  <section className="hv-root" id="hero">

    {/* ── Shared bg layers: glows + vignette + hatch + particles ── */}
    <PageBackground hatchTR hatchBL={false} hatchLM />

    {/* ── Ghost outline text ── */}
    <div className="hv-ghost-wrap" aria-hidden="true">
      <span className="hv-ghost-text">AMIT&nbsp;KUMAR</span>
    </div>

    {/* ── Top-left cube ── */}
    <AnimatedCube
      className="hv-cube-1"
      style={{ top: '30px', left: '300px' }}
      floatDir="up"
      floatDuration="7s"
      spinDuration="10s"
    />

    {/* ── Bottom-right cube ── */}
    <AnimatedCube
      className="hv-cube-2"
      style={{ bottom: '20px', right: '200px' }}
      floatDir="up"
      floatDuration="8s"
      spinDuration="12s"
    />

    {/* ── Lanyard — left corner me absolutely positioned ── */}
    <div
      className="hv-lanyard-wrap"
      style={{
        position: 'absolute',
        top: 0,
        left: '-10%',
        width: '45%',
        height: '100%',
        zIndex: 9,
        pointerEvents: 'auto',
      }}>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>

    {/* ── Main content ── */}
    <div className="hv-content">
      <h1 className="hv-name cursor-target">AMIT KUMAR YADAV</h1>
      <p className="hv-subtitle cursor-target">MERN&nbsp;STACK&nbsp;DEVELOPER</p>

      {/* ScrambledText — absolutely positioned for desktop */}
      <div
        className="hv-scrambled-wrap cursor-target"
        style={{
          position: 'absolute',
          top: 'calc(70% + 68px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          width: 'min(600px, 80vw)',
          textAlign: 'center',
        }}>
        <ScrambledText
          radius={120}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Enthusiastic Full Stack Developer with expertise in MERN stack. BCA graduate with a passion for building interactive, responsive websites and ensuring seamless user experiences.
        </ScrambledText>
      </div>

      {/* hv-years — absolutely positioned for desktop */}
      <div
        className="hv-years-wrap cursor-target"
        style={{
          position: 'absolute',
          top: 'calc(50% + 200px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}>
        <div className="hv-years cursor-target">
          <span className="hv-year-num cursor-target">2021</span>
          <div className="hv-year-line" />
          <span className="hv-year-num cursor-target">2026</span>
        </div>
      </div>
    </div>

  </section>
);

export default Hero;