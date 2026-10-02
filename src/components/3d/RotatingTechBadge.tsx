import { ArrowDown, Cpu } from "lucide-react";

interface RotatingTechBadgeProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function RotatingTechBadge({
  text = "COMPUTER VISION • DEEP LEARNING • MANTRA SOFTECH • CDAC PG-DAI • ",
  onClick,
  className = "",
}: RotatingTechBadgeProps) {
  return (
    <div
      onClick={onClick}
      className={`relative w-28 h-28 flex items-center justify-center cursor-pointer group select-none ${className}`}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-signal/20 blur-xl group-hover:bg-signal/35 transition-all duration-500" />

      {/* Rotating SVG circular text */}
      <svg
        className="w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id="textCircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[7.5px] font-mono uppercase tracking-[0.24em] fill-muted-foreground group-hover:fill-signal transition-colors font-medium">
          <textPath href="#textCircle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center glowing badge */}
      <div className="absolute w-12 h-12 rounded-full bg-card/90 border border-signal/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-signal transition-all duration-300">
        <Cpu className="w-5 h-5 text-signal group-hover:rotate-45 transition-transform duration-500" />
      </div>
    </div>
  );
}
