import React from 'react';
import '../styles/portfolio.css';

/**
 * AnimatedCube — Reusable 3D glass-wireframe cube
 * ─────────────────────────────────────────────────────
 * All styles live in  src/styles/portfolio.css  (.ac-*)
 * Edit portfolio.css once → all cubes update.
 *
 * Props:
 *   style        {object}  — position: top/bottom/left/right
 *   size         {number}  — outer wrapper px          (default: 180)
 *   cubeSize     {number}  — rotating cube face px     (default: 72)
 *   innerSize    {number}  — solid inner block px      (default: 38)
 *   color        {string}  — accent color              (default: '#1da1f2')
 *   spinDuration {string}  — CSS duration for spin     (default: '10s')
 *   floatDuration{string}  — CSS duration for float    (default: '7s')
 *   floatDir     {string}  — 'up' | 'down'             (default: 'up')
 *   zIndex       {number}  —                           (default: 6)
 */
const AnimatedCube = ({
  style = {},
  size = 240,
  cubeSize = 100,
  innerSize = 52,
  color = '#1da1f2',
  spinDuration = '10s',
  floatDuration = '7s',
  floatDir = 'up',
  zIndex = 6,
}) => {
  const half = cubeSize / 2;
  const innerOff = (cubeSize - innerSize) / 2;
  const floatAnim = floatDir === 'down'
    ? `acFloatDown ${floatDuration} ease-in-out infinite`
    : `acFloatUp   ${floatDuration} ease-in-out infinite`;

  const cssVars = {
    '--ac-color': color,
    '--ac-color-faint': `${color}99`,
    '--ac-color-bg': `${color}14`,
    '--ac-color-inner': `${color}14`,
    '--ac-spin': spinDuration,
  };

  return (
    <div
      className="ac-wrap"
      aria-hidden="true"
      style={{ width: size, height: size, zIndex, animation: floatAnim, ...cssVars, ...style }}
    >
      {/* 3-D cube */}
      <div className="ac-scene">
        <div className="ac-cube" style={{ width: cubeSize, height: cubeSize }}>
          <div className="ac-face" style={{ width: cubeSize, height: cubeSize, transform: `translateZ(${half}px)` }} />
          <div className="ac-face" style={{ width: cubeSize, height: cubeSize, transform: `translateZ(-${half}px) rotateY(180deg)` }} />
          <div className="ac-face" style={{ width: cubeSize, height: cubeSize, transform: `rotateY(90deg) translateZ(${half}px)` }} />
          <div className="ac-face" style={{ width: cubeSize, height: cubeSize, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
          <div className="ac-face" style={{ width: cubeSize, height: cubeSize, transform: `rotateX(90deg) translateZ(${half}px)` }} />
          <div className="ac-face" style={{ width: cubeSize, height: cubeSize, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
          <div className="ac-inner" style={{ width: innerSize, height: innerSize, top: innerOff, left: innerOff }} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCube;
