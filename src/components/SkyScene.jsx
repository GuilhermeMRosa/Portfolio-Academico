const CLOUDS = [
  [140, 160, 1.1],
  [980, 560, 0.9],
  [60, 540, 0.7],
  [1080, 180, 0.8],
];

function Cloud({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill="var(--color-text)">
      <ellipse cx="0" cy="10" rx="55" ry="22" />
      <ellipse cx="-35" cy="4" rx="32" ry="20" />
      <ellipse cx="34" cy="0" rx="36" ry="24" />
      <ellipse cx="0" cy="-10" rx="30" ry="20" />
    </g>
  );
}

const STARS = [
  [60, 60, 1.4], [220, 40, 1], [420, 90, 1.6], [620, 50, 1],
  [780, 120, 1.3], [980, 70, 1.2], [1120, 150, 1], [60, 220, 1],
  [200, 260, 1.4], [380, 230, 1], [560, 280, 1.3], [760, 260, 1],
  [920, 300, 1.5], [1100, 330, 1], [120, 400, 1.2], [320, 420, 1],
  [500, 450, 1.4], [700, 430, 1], [900, 460, 1.3], [1080, 480, 1],
  [160, 540, 1], [360, 560, 1.3], [540, 590, 1], [740, 570, 1.2],
  [940, 600, 1], [40, 650, 1.2], [260, 670, 1], [460, 690, 1.4],
  [660, 650, 1], [860, 680, 1.3], [1040, 650, 1], [180, 100, 1],
];

export default function SkyScene({ className = "", progress = 0 }) {
  const moonSunStyle = {
    transform: `translateY(${progress * -20}px)`,
    opacity: 1 - progress * 0.5,
  };

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {STARS.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r * 1.6}
          className="sky-star"
          fill="var(--color-text-muted)"
          style={{
            animation: `twinkle ${3 + (i % 4)}s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}

      <g className="sky-cloud">
        {CLOUDS.map(([x, y, scale], i) => (
          <Cloud key={i} x={x} y={y} scale={scale} />
        ))}
      </g>

      <g style={moonSunStyle}>
        <g className="sky-sun-ray" stroke="var(--color-pop)" strokeWidth="3" strokeLinecap="round">
          <line x1="850" y1="310" x2="850" y2="280" />
          <line x1="850" y1="420" x2="850" y2="450" />
          <line x1="780" y1="380" x2="750" y2="380" />
          <line x1="920" y1="380" x2="950" y2="380" />
          <line x1="800" y1="330" x2="778" y2="308" />
          <line x1="900" y1="330" x2="922" y2="308" />
          <line x1="800" y1="430" x2="778" y2="452" />
          <line x1="900" y1="430" x2="922" y2="452" />
        </g>
        <circle
          cx="850"
          cy="380"
          r="40"
          className="sky-sun"
          fill="var(--color-pop)"
          filter="url(#soft-glow)"
        />
        <circle cx="850" cy="380" r="48" className="sky-sun" fill="var(--color-pop)" />
        <circle cx="850" cy="380" r="48" fill="none" stroke="var(--color-pop)" strokeWidth="2" opacity="0.6" />

        <mask id="moon-mask">
          <rect x="0" y="0" width="1200" height="800" fill="white" />
          <circle cx="872" cy="320" r="42" fill="black" />
        </mask>
        <circle
          cx="850"
          cy="320"
          r="38"
          className="sky-moon"
          fill="var(--color-violet)"
          filter="url(#soft-glow)"
          mask="url(#moon-mask)"
        />
        <circle
          cx="850"
          cy="320"
          r="46"
          className="sky-moon"
          fill="var(--color-violet)"
          mask="url(#moon-mask)"
        />
        <circle
          cx="850"
          cy="320"
          r="46"
          mask="url(#moon-mask)"
          fill="none"
          stroke="var(--color-violet)"
          strokeWidth="2"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
