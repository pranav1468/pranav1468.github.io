import React, { useState } from "react";

interface ThreeDPinCardProps {
  children: React.ReactNode;
  title: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  badgeText?: string;
}

export default function ThreeDPinCard({
  children,
  title,
  href,
  className = "",
  containerClassName = "",
  badgeText,
}: ThreeDPinCardProps) {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg) scale(1)"
  );
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
    setTransform("translate(-50%,-50%) rotateX(25deg) scale(0.96)");
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={`relative group/pin z-20 cursor-pointer ${containerClassName}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] bg-black/60 border border-white/[0.1] group-hover/pin:border-signal/50 transition duration-700 overflow-hidden"
        >
          <div className={`relative z-30 ${className}`}>{children}</div>
        </div>
      </div>

      <PinPerspective title={title} href={href} isHovered={isHovered} badgeText={badgeText} />
    </div>
  );
}

const PinPerspective = ({
  title,
  href,
  isHovered,
  badgeText,
}: {
  title: string;
  href?: string;
  isHovered: boolean;
  badgeText?: string;
}) => {
  return (
    <div
      className={`pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[40] transition duration-500`}
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-[#030014] py-1 px-4 ring-1 ring-white/20 hover:ring-signal/80 transition-all pointer-events-auto"
          >
            <span className="relative z-20 text-white text-xs font-mono font-bold inline-block">
              {title}
            </span>
            {badgeText && (
              <span className="text-[10px] font-mono text-signal bg-signal/15 px-2 py-0.5 rounded-full border border-signal/30">
                {badgeText}
              </span>
            )}
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-signal/0 via-signal/90 to-signal/0 transition-opacity duration-500"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Animated concentric ripple circles (Aceternity 3D Pin style) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[11.25rem] h-[11.25rem] rounded-full border border-signal/30 bg-signal/[0.03] animate-ping" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18.75rem] h-[18.75rem] rounded-full border border-signal/20 bg-signal/[0.01]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[26.25rem] h-[26.25rem] rounded-full border border-white/[0.05]" />
        </div>

        {/* Vertical beam connecting pin to card */}
        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-signal translate-y-[14px] w-px h-20 group-hover/pin:h-36 blur-[1px] transition-all duration-500" />
        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-signal translate-y-[14px] w-px h-20 group-hover/pin:h-36 transition-all duration-500" />
        <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-signal translate-y-[14px] w-[3px] h-[3px] rounded-full z-40 blur-[2px]" />
        <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-white translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </div>
    </div>
  );
};
