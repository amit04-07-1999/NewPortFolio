import React from 'react';
import '../styles/portfolio.css';
import { THEME } from './pageTheme';
import FloatingLines from '../reactBitsComp/FloatingLines';

/**
 * PageBackground
 * ─────────────────────────────────────────────────────
 * Now a GLOBAL FIXED BACKGROUND to unify the entire site.
 * Render this once in App.jsx.
 */
const PageBackground = ({
    zIndex = -1,
}) => (
    <div className="global-page-bg" style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex,
        pointerEvents: 'none',
        background: '#020608'
    }}>
        {/* ── Floating Lines Background ── */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <FloatingLines
                enabledWaves={["top", "middle", "bottom"]}
                lineCount={4}
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
            />
        </div>

        {/* ── Corner glows ── */}
        <div className="pt-glow pt-glow-tl" style={{ width: THEME.glowTLSize, height: THEME.glowTLSize, zIndex: 2 }} />
        <div className="pt-glow pt-glow-br" style={{ width: THEME.glowBRSize, height: THEME.glowBRSize, zIndex: 2 }} />

        {/* ── Dark center vignette ── */}
        <div className="pt-dark-center" style={{ zIndex: 3 }} />

        {/* ── Diagonal hatches (Fixed decoration) ── */}
        <div className="pt-hatch pt-hatch-tr" style={{ zIndex: 4, top: '5%', right: '5%' }} />
        <div className="pt-hatch pt-hatch-bl" style={{ zIndex: 4, bottom: '5%', left: '5%' }} />
    </div>
);

export default PageBackground;


