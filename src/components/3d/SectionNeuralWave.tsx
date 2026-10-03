import { useEffect, useRef, useState } from "react";

interface SectionWaveConfig {
  objectPosition: string;
  scale: number;
  flipX?: boolean;
  accentColor: string;
  secondaryColor: string;
  waveCurveType: "descend-right" | "descend-left" | "center-crest" | "broad-valley" | "horizon";
  meshPulseSpeed: string;
  glowIntensity: number;
}

const SECTION_CONFIGS: Record<number, SectionWaveConfig> = {
  // 0: Hero - High vantage view, soaring vertical laser beams & central neural mountain
  0: {
    objectPosition: "50% 18%",
    scale: 1.08,
    flipX: false,
    accentColor: "#38bdf8", // Sky / cyan
    secondaryColor: "#818cf8", // Indigo
    waveCurveType: "descend-right",
    meshPulseSpeed: "8s",
    glowIntensity: 0.95,
  },
  // 1: About - Wave flows across into a glowing neural valley framing the bio and impact cards
  1: {
    objectPosition: "28% 42%",
    scale: 1.15,
    flipX: true,
    accentColor: "#c084fc", // Purple / magenta
    secondaryColor: "#38bdf8", // Cyan
    waveCurveType: "descend-left",
    meshPulseSpeed: "7s",
    glowIntensity: 0.85,
  },
  // 2: Skills - Deep interconnected neural mesh plateau directly under the skill pills
  2: {
    objectPosition: "72% 48%",
    scale: 1.18,
    flipX: false,
    accentColor: "#38bdf8", // Cyan
    secondaryColor: "#f97316", // Amber / orange nodes
    waveCurveType: "center-crest",
    meshPulseSpeed: "9s",
    glowIntensity: 0.9,
  },
  // 3: Experience - Neon data highway flowing along the Mantra Softech timeline
  3: {
    objectPosition: "35% 54%",
    scale: 1.12,
    flipX: true,
    accentColor: "#60a5fa", // Electric blue
    secondaryColor: "#c084fc", // Purple
    waveCurveType: "descend-right",
    meshPulseSpeed: "8s",
    glowIntensity: 0.85,
  },
  // 4: Education - Ascending twin crests behind CDAC and SVVV degree milestones
  4: {
    objectPosition: "65% 46%",
    scale: 1.16,
    flipX: false,
    accentColor: "#a855f7", // Deep purple
    secondaryColor: "#38bdf8", // Sky blue
    waveCurveType: "descend-left",
    meshPulseSpeed: "7.5s",
    glowIntensity: 0.8,
  },
  // 5: Writing - Neural wave undulations behind the 3 blog cards with glowing node spots
  5: {
    objectPosition: "32% 62%",
    scale: 1.2,
    flipX: true,
    accentColor: "#e879f9", // Neon fuchsia
    secondaryColor: "#818cf8", // Indigo
    waveCurveType: "center-crest",
    meshPulseSpeed: "8.5s",
    glowIntensity: 0.85,
  },
  // 6: Projects - Broad panoramic valley framing the 3 vision showcase project cards
  6: {
    objectPosition: "58% 65%",
    scale: 1.15,
    flipX: false,
    accentColor: "#38bdf8", // Cyan
    secondaryColor: "#f97316", // Warm amber highlights
    waveCurveType: "broad-valley",
    meshPulseSpeed: "9s",
    glowIntensity: 0.9,
  },
  // 7: Contact - Settling atmospheric horizon with laser pillars and glowing footer embers
  7: {
    objectPosition: "50% 82%",
    scale: 1.06,
    flipX: false,
    accentColor: "#f97316", // Warm amber horizon
    secondaryColor: "#38bdf8", // Cyan
    waveCurveType: "horizon",
    meshPulseSpeed: "10s",
    glowIntensity: 0.9,
  },
};

interface SectionNeuralWaveProps {
  sectionIndex: number;
  sectionId: string;
}

export default function SectionNeuralWave({
  sectionIndex,
  sectionId,
}: SectionNeuralWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const config = SECTION_CONFIGS[sectionIndex] || SECTION_CONFIGS[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();

      // Only calculate if visible in viewport
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      targetX = Math.max(-0.5, Math.min(0.5, normX));
      targetY = Math.max(-0.5, Math.min(0.5, normY));
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setMouseOffset({
        x: Math.round(currentX * 1000) / 1000,
        y: Math.round(currentY * 1000) / 1000,
      });

      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Multi-layer parallax translations
  // Layer 1 (Base): moves subtly in deep distance
  const l1Transform = `translate3d(${mouseOffset.x * 10}px, ${mouseOffset.y * 6}px, 0) scale(${config.scale}) ${config.flipX ? "scaleX(-1)" : ""}`;
  // Layer 2 (Neural Mesh): moves medium distance
  const l2Transform = `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 12}px, 0) scale(${config.scale}) ${config.flipX ? "scaleX(-1)" : ""}`;
  // Layer 3 (Foreground Glow & Laser Beams): moves fastest closest to camera
  const l3Transform = `translate3d(${mouseOffset.x * 32}px, ${mouseOffset.y * 18}px, 0) scale(${config.scale}) ${config.flipX ? "scaleX(-1)" : ""}`;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-section-wave={sectionId}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* ========================================================================= */}
      {/* LAYER 1: BASE TERRAIN (Dark mountains, deep valleys, base light pathways) */}
      {/* ========================================================================= */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          type="image/webp"
          srcSet="/assets/bg/neural-terrain-base.webp"
        />
        <img
          src="/assets/bg/neural-terrain-base.png"
          alt=""
          loading={sectionIndex === 0 ? "eager" : "lazy"}
          style={{
            objectPosition: config.objectPosition,
            transform: l1Transform,
            willChange: "transform",
            transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
          }}
          className="w-full h-full object-cover opacity-85 brightness-[0.92] contrast-[1.08]"
        />
      </picture>

      {/* ========================================================================= */}
      {/* LAYER 2: NEURAL MESH (Interconnected wireframe network, synapse lines)    */}
      {/* ========================================================================= */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          type="image/webp"
          srcSet="/assets/bg/neural-terrain-mesh.webp"
        />
        <img
          src="/assets/bg/neural-terrain-mesh.png"
          alt=""
          loading={sectionIndex === 0 ? "eager" : "lazy"}
          style={{
            objectPosition: config.objectPosition,
            transform: l2Transform,
            willChange: "transform",
            transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
            mixBlendMode: "screen",
          }}
          className="w-full h-full object-cover opacity-90 brightness-[1.05]"
        />
      </picture>

      {/* ========================================================================= */}
      {/* LAYER 3: FOREGROUND GLOW & VERTICAL BEAMS (Laser pillars, high-intensity) */}
      {/* ========================================================================= */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          type="image/webp"
          srcSet="/assets/bg/neural-terrain-glow.webp"
        />
        <img
          src="/assets/bg/neural-terrain-glow.png"
          alt=""
          loading={sectionIndex === 0 ? "eager" : "lazy"}
          style={{
            objectPosition: config.objectPosition,
            transform: l3Transform,
            willChange: "transform",
            transition: "transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)",
            mixBlendMode: "screen",
            opacity: config.glowIntensity,
          }}
          className="w-full h-full object-cover brightness-[1.12]"
        />
      </picture>

      {/* ========================================================================= */}
      {/* SECTION ATMOSPHERIC VIGNETTE & READABILITY CONTRAST MASK                  */}
      {/* ========================================================================= */}
      {/* Top vertical feathering to connect seamlessly to previous section */}
      {sectionIndex > 0 && (
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#030712] via-[#030712]/70 to-transparent pointer-events-none" />
      )}

      {/* Bottom vertical feathering to connect seamlessly to next section */}
      {sectionIndex < 7 && (
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pointer-events-none" />
      )}

      {/* Central content readability dark tint: ensures cards and text pop */}
      <div className="absolute inset-0 bg-[#030712]/45 pointer-events-none" />

      {/* Radial soft glow centered on the section's focal accent color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 50% at ${config.objectPosition}, ${config.accentColor}18 0%, transparent 75%)`,
        }}
      />

      {/* ========================================================================= */}
      {/* SEAMLESS WAVE CONNECTOR RIBBON (SVG continuous undulating wave bridge)     */}
      {/* ========================================================================= */}
      {sectionIndex < 7 && (
        <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none overflow-hidden z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full opacity-60"
          >
            <defs>
              <linearGradient
                id={`wave-glow-${sectionIndex}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={config.accentColor} stopOpacity="0.1" />
                <stop offset="35%" stopColor={config.accentColor} stopOpacity="0.6" />
                <stop offset="65%" stopColor={config.secondaryColor} stopOpacity="0.7" />
                <stop offset="100%" stopColor={config.secondaryColor} stopOpacity="0.1" />
              </linearGradient>

              <linearGradient
                id={`wave-fill-${sectionIndex}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#030712" stopOpacity="0" />
                <stop offset="100%" stopColor="#030712" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Seamless wave shape morphing based on curve type */}
            {config.waveCurveType === "descend-right" && (
              <>
                <path
                  d="M0,45 C 320,15 720,85 1080,40 C 1260,18 1380,35 1440,55 L 1440,120 L 0,120 Z"
                  fill={`url(#wave-fill-${sectionIndex})`}
                />
                <path
                  d="M0,45 C 320,15 720,85 1080,40 C 1260,18 1380,35 1440,55"
                  stroke={`url(#wave-glow-${sectionIndex})`}
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  className="animate-pulse"
                />
              </>
            )}

            {config.waveCurveType === "descend-left" && (
              <>
                <path
                  d="M0,60 C 180,30 540,80 900,35 C 1180,60 1340,30 1440,40 L 1440,120 L 0,120 Z"
                  fill={`url(#wave-fill-${sectionIndex})`}
                />
                <path
                  d="M0,60 C 180,30 540,80 900,35 C 1180,60 1340,30 1440,40"
                  stroke={`url(#wave-glow-${sectionIndex})`}
                  strokeWidth="1.5"
                  strokeDasharray="8 5"
                  className="animate-pulse"
                />
              </>
            )}

            {config.waveCurveType === "center-crest" && (
              <>
                <path
                  d="M0,70 C 360,85 540,25 720,20 C 900,15 1080,80 1440,50 L 1440,120 L 0,120 Z"
                  fill={`url(#wave-fill-${sectionIndex})`}
                />
                <path
                  d="M0,70 C 360,85 540,25 720,20 C 900,15 1080,80 1440,50"
                  stroke={`url(#wave-glow-${sectionIndex})`}
                  strokeWidth="1.75"
                  strokeDasharray="7 4"
                  className="animate-pulse"
                />
              </>
            )}

            {config.waveCurveType === "broad-valley" && (
              <>
                <path
                  d="M0,35 C 240,65 600,95 840,90 C 1100,85 1300,45 1440,30 L 1440,120 L 0,120 Z"
                  fill={`url(#wave-fill-${sectionIndex})`}
                />
                <path
                  d="M0,35 C 240,65 600,95 840,90 C 1100,85 1300,45 1440,30"
                  stroke={`url(#wave-glow-${sectionIndex})`}
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  className="animate-pulse"
                />
              </>
            )}

            {config.waveCurveType === "horizon" && (
              <>
                <path
                  d="M0,50 C 360,40 720,60 1080,45 C 1260,38 1380,48 1440,42 L 1440,120 L 0,120 Z"
                  fill={`url(#wave-fill-${sectionIndex})`}
                />
                <path
                  d="M0,50 C 360,40 720,60 1080,45 C 1260,38 1380,48 1440,42"
                  stroke={`url(#wave-glow-${sectionIndex})`}
                  strokeWidth="1.5"
                  strokeDasharray="10 4"
                  className="animate-pulse"
                />
              </>
            )}
          </svg>
        </div>
      )}
    </div>
  );
}
