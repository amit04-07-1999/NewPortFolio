import React from 'react';
import '../styles/portfolio.css';
import { PARTICLES, THEME } from './pageTheme';

/**
 * PageBackground
 * ─────────────────────────────────────────────────────
 * Drop inside any section to get:
 *   • Corner blue atmospheric glows (TL + BR)
 *   • Dark center vignette
 *   • Diagonal hatch patterns
 *   • Twinkling micro-particles
 *
 * All styles → src/styles/portfolio.css (.pt-*)
 * Edit portfolio.css once → every page updates.
 *
 * Props:
 *   particles  {Array}  — override default dot set
 *   hatchTR    {bool}   — top-right hatch    (default: true)
 *   hatchBL    {bool}   — bottom-left hatch  (default: true)
 *   hatchLM    {bool}   — left-mid hatch     (default: false)
 *   glowTLSize {number} — top-left glow px   (default: 420)
 *   glowBRSize {number} — bottom-right px    (default: 380)
 *   zIndex     {number} — base z-index       (default: 1)
 */
const PageBackground = ({
    particles = PARTICLES,
    hatchTR = true,
    hatchBL = true,
    hatchLM = false,
    glowTLSize = THEME.glowTLSize,
    glowBRSize = THEME.glowBRSize,
    zIndex = 1,
}) => (
    <>
        {/* ── Corner glows ── */}
        <div className="pt-glow pt-glow-tl" style={{ width: glowTLSize, height: glowTLSize, zIndex }} />
        <div className="pt-glow pt-glow-br" style={{ width: glowBRSize, height: glowBRSize, zIndex }} />

        {/* ── Dark center vignette ── */}
        <div className="pt-dark-center" style={{ zIndex: zIndex + 1 }} />

        {/* ── Diagonal hatches ── */}
        {hatchTR && <div className="pt-hatch pt-hatch-tr" style={{ zIndex: zIndex + 2 }} />}
        {hatchBL && <div className="pt-hatch pt-hatch-bl" style={{ zIndex: zIndex + 2 }} />}
        {hatchLM && <div className="pt-hatch pt-hatch-lm" style={{ zIndex: zIndex + 2 }} />}

        {/* ── Twinkling micro-particles ── */}
        {particles.map((d, i) => (
            <span
                key={i}
                className="pt-dot"
                style={{
                    top: d.top,
                    left: d.left,
                    width: `${d.s}px`,
                    height: `${d.s}px`,
                    animation: `ptTwinkle ${d.dur} ease-in-out ${d.del} infinite`,
                    zIndex: zIndex + 2,
                }}
            />
        ))}
    </>
);

export default PageBackground;
