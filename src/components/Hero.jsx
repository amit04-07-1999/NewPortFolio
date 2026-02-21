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
      style={{ top: '30px', left: '300px' }}
      floatDir="up"
      floatDuration="7s"
      spinDuration="10s"
    />

    {/* ── Bottom-right cube ── */}
    <AnimatedCube
      style={{ bottom: '20px', right: '200px' }}
      floatDir="up"
      floatDuration="8s"
      spinDuration="12s"
    />

    {/* ── Lanyard — left corner me absolutely positioned ── */}
    <div style={{
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

    {/* ── Main content — FIXED position so ScrambledText doesn't shift it ── */}
    <div className="hv-content">
      <h1 className="hv-name">AMIT KUMAR YADAV</h1>
      <p className="hv-subtitle">MERN&nbsp;STACK&nbsp;DEVELOPER</p>

      {/* ScrambledText — absolutely positioned so it doesn't affect flex layout */}
      <div style={{
        position: 'absolute',
        top: 'calc(70% + 68px)',   /* subtitle ke theek neeche */
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

      {/* hv-years — ScrambledText ke neeche, absolute position se */}
      <div className="hv-years" style={{
        position: 'absolute',
        top: 'calc(50% + 200px)',  /* ScrambledText ke neeche */
        left: '25%',
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}>
        <span className="hv-year-num">2021</span>
        <div className="hv-year-line" />
        <span className="hv-year-num">2026</span>
      </div>
    </div>

  </section>
);

export default Hero;