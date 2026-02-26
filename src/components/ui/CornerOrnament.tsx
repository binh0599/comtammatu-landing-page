/* ── Ornamental corner (Indochine stepped lattice) ── */
export default function CornerOrnament({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 60 60"
            fill="none"
            className={className}
        >
            {/* Outer L */}
            <path d="M0 60 V0 H60" stroke="currentColor" strokeWidth="1.5" />
            {/* Step 1 */}
            <path d="M8 60 V8 H60" stroke="currentColor" strokeWidth="0.8" />
            {/* Bridges between outer and step 1 */}
            <line x1="0" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="0.8" />
            <line x1="8" y1="0" x2="8" y2="8" stroke="currentColor" strokeWidth="0.8" />
            {/* Step 2 */}
            <path d="M16 52 V16 H52" stroke="currentColor" strokeWidth="0.5" />
            {/* Bridges between step 1 and step 2 */}
            <line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="0.5" />
            <line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="0.5" />
            {/* Corner fill accents */}
            <rect x="0" y="0" width="8" height="8" fill="currentColor" opacity="0.12" />
            <rect x="8" y="8" width="8" height="8" fill="currentColor" opacity="0.08" />
        </svg>
    );
}
