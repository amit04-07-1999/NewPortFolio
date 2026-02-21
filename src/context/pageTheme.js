/**
 * ════════════════════════════════════════════════════
 *  pageTheme.js  —  SINGLE SOURCE OF TRUTH
 *
 *  Edit here → every page/section using these
 *  exports will update automatically.
 * ════════════════════════════════════════════════════
 */

/* ── 1. Design Tokens ──────────────────────────────── */
export const THEME = {
    /* Colors */
    bg: '#020608',             /* page background       */
    accent: '#1da1f2',            /* primary blue          */
    accentDark: '#0d8fd8',            /* darker blue           */
    accentDeep: '#0a6fa8',            /* deepest blue          */
    textPrimary: '#F1F1F1',            /* main text             */
    textMuted: 'rgba(255,255,255,0.42)', /* muted text         */

    /* Typography */
    fontDisplay: "'Bebas Neue', sans-serif",
    fontBody: "'Montserrat', sans-serif",

    /* Glow sizes */
    glowTLSize: 420,                  /* px — top-left glow    */
    glowBRSize: 380,                  /* px — bottom-right glow*/
    glowOpacity: 0.22,                 /* corner glow strength  */
};

/* ── 2. Shared Global CSS (fonts + base animations) ─── */
export const SHARED_CSS = `
  /* ── Google Fonts ── */
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

  /* ── Shared keyframes (prefixed 'pt' = pageTheme) ── */
  @keyframes ptTwinkle {
    0%,100% { opacity: 0;   transform: scale(0.5); }
    50%      { opacity: 0.9; transform: scale(1.5); }
  }
  @keyframes ptFadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes ptRevealSlow {
    0%   { opacity: 0; transform: translateY(16px); }
    60%  { opacity: 0; transform: translateY(16px); }
    100% { opacity: 1; transform: translateY(0);    }
  }

  /* ── Shared background layer classes ── */
  /* Corner glow — size/position set via inline style */
  .pt-glow {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }
  .pt-glow-tl {
    top: -60px; left: -60px;
    background: radial-gradient(circle,
      rgba(29,161,242,0.22) 0%,
      rgba(11,50,90,0.12)  40%,
      transparent          70%);
  }
  .pt-glow-br {
    bottom: -60px; right: -60px;
    background: radial-gradient(circle,
      rgba(29,161,242,0.18) 0%,
      rgba(11,50,90,0.10)  40%,
      transparent          70%);
  }

  /* Dark center vignette */
  .pt-dark-center {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 50%,
      transparent          0%,
      rgba(0,0,0,0.45)    70%,
      rgba(0,0,0,0.72)   100%);
    pointer-events: none;
    z-index: 2;
  }

  /* Diagonal hatch block */
  .pt-hatch {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    background: repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.09) 0px,
      rgba(255,255,255,0.09) 1px,
      transparent            1px,
      transparent            9px
    );
  }
  .pt-hatch-tr {
    top: 4%; right: 3%;
    width: 220px; height: 230px;
    opacity: 0.50;
    transform: skewY(4deg);
  }
  .pt-hatch-bl {
    bottom: 5%; left: 2%;
    width: 160px; height: 200px;
    opacity: 0.28;
    transform: skewY(-5deg);
  }
  .pt-hatch-lm {
    top: 28%; left: 1%;
    width: 140px; height: 240px;
    opacity: 0.28;
    transform: skewY(-6deg);
  }

  /* Micro particle dot */
  .pt-dot {
    position: absolute;
    border-radius: 50%;
    background: #ffffff;
    pointer-events: none;
    z-index: 3;
  }

  /* Ghost outline text */
  .pt-ghost-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    line-height: 1;
  }
  .pt-ghost-text {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255,255,255,0.09);
    text-stroke: 1px rgba(255,255,255,0.09);
    display: block;
  }
`;

/* ── 3. Helper — inject CSS once into <head> ──────── */
let _injected = false;
export function injectSharedCSS() {
    if (_injected) return;
    const id = 'pt-shared-style';
    if (!document.getElementById(id)) {
        const el = document.createElement('style');
        el.id = id;
        el.textContent = SHARED_CSS;
        document.head.appendChild(el);
    }
    _injected = true;
}

/* ── 4. Default Particles ─────────────────────────── */
/*  You can override this array per-section, or
    use this default set for a quick drop-in.         */
export const PARTICLES = [
    { top: '8%', left: '20%', s: 2.0, dur: '3.1s', del: '0.0s' },
    { top: '13%', left: '62%', s: 1.5, dur: '4.0s', del: '0.7s' },
    { top: '6%', left: '82%', s: 2.0, dur: '2.8s', del: '1.3s' },
    { top: '35%', left: '7%', s: 1.5, dur: '3.5s', del: '0.3s' },
    { top: '42%', left: '93%', s: 1.8, dur: '2.6s', del: '1.0s' },
    { top: '58%', left: '16%', s: 2.0, dur: '3.8s', del: '1.6s' },
    { top: '64%', left: '44%', s: 1.4, dur: '3.0s', del: '0.5s' },
    { top: '78%', left: '70%', s: 2.0, dur: '3.4s', del: '0.9s' },
    { top: '50%', left: '55%', s: 1.5, dur: '4.2s', del: '0.6s' },
    { top: '22%', left: '38%', s: 1.2, dur: '3.7s', del: '2.0s' },
    { top: '88%', left: '33%', s: 2.0, dur: '2.8s', del: '0.2s' },
    { top: '5%', left: '50%', s: 1.4, dur: '4.0s', del: '1.5s' },
    { top: '30%', left: '76%', s: 1.6, dur: '3.3s', del: '0.4s' },
    { top: '72%', left: '9%', s: 1.8, dur: '2.9s', del: '1.8s' },
];
