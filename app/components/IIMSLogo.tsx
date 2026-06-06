export default function IIMSLogo({
  className = "h-18 w-auto",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="80" cy="80" r="80" fill="#ffffff" />

      {/* Book Icon (Green) */}
      <g stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Outer Cover Wraparound */}
        <path d="M 40 50 L 40 68 L 80 86 L 120 68 L 120 50" />
        
        {/* Continuous Inner Pages Spiral */}
        <path d="M 72 68 L 72 44 L 50 34 L 50 62 L 80 76 L 110 62 L 110 34 L 88 44 L 88 68" />
      </g>
      
      {/* Accent Dot on top right */}
      <circle cx="122" cy="40" r="2.5" fill="#22c55e" />

      {/* IIMS Title */}
      <text
        x="80"
        y="120"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize="46"
        fill="#14532d"
        letterSpacing="1"
      >
        IIMS
      </text>

      {/* Tagline */}
      <text
        x="80"
        y="136"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11.5"
        fill="#14532d"
        letterSpacing="0.5"
      >
        Creating Innovations
      </text>
    </svg>
  );
}
