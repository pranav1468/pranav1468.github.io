import { ArrowRight, FileText } from "lucide-react";
import confetti from "canvas-confetti";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.5 },
      colors: ["#f97316", "#38bdf8", "#c084fc", "#ffffff"],
    });
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-24 pb-14 sm:pt-28 sm:pb-16 px-6 sm:px-10 lg:px-16 xl:pl-16 xl:pr-36 w-full max-w-[1550px] mx-auto z-10">
      <div className="max-w-4xl lg:max-w-5xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-white/50 mb-5">
          <span className="font-semibold text-white/80">01</span>
          <span className="w-10 h-px bg-white/20" />
          <span>AI/ML · COMPUTER VISION</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Building<br />
          intelligent systems<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
            for the real world.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8 font-sans">
          I'm Pranav Baghare, a Software Developer (AI/ML) passionate about Computer Vision and Deep Learning, turning data into practical, real-world solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2.5 rounded-full bg-white text-black px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-white/90 transition-all shadow-xl hover:translate-x-0.5"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="/resume.pdf"
            download="Pranav_Baghare_Resume.pdf"
            onClick={handleDownload}
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] text-white px-7 py-3.5 text-sm sm:text-base font-medium hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 text-white/70" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
