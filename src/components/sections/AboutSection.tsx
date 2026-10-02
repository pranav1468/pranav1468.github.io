import { Eye, Network, Box, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-16 xl:pl-16 xl:pr-36 w-full max-w-[1550px] mx-auto z-10">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-4">
            02 / ABOUT
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5">
            A curious builder<br />
            in AI and<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              Computer Vision.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-7 font-sans">
            I'm a Software Developer (AI/ML) at Mantra Softech, passionate about building practical solutions using deep learning and computer vision. I enjoy working on real-world problems — from satellite imagery analysis to medical imaging and autonomous driving.
          </p>

          <button
            onClick={() => scrollTo("experience")}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] text-white px-6 py-3 text-xs sm:text-sm font-mono hover:border-[#f97316] hover:text-[#f97316] transition-all"
          >
            <span>More About Me</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column (5 Cols): Same Technology / Real-World Impact */}
        <div className="lg:col-span-5 space-y-4 pt-2">
          <div className="font-mono text-xs text-white/40 uppercase tracking-[0.2em] mb-4">
            SAME TECHNOLOGY<br />
            DIFFERENT REAL-WORLD IMPACT
          </div>

          {/* Row 1: Computer Vision */}
          <div className="flex items-start gap-5 p-4 sm:p-5 rounded-2xl bg-[#060a18]/70 border border-white/10 hover:border-sky-500/40 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 group-hover:border-sky-400/50 transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <Eye className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                Computer Vision
              </h3>
              <p className="text-sm text-white/60 mt-1 font-sans">
                From pixels to real-world insights
              </p>
            </div>
          </div>

          {/* Row 2: Deep Learning */}
          <div className="flex items-start gap-5 p-4 sm:p-5 rounded-2xl bg-[#060a18]/70 border border-white/10 hover:border-purple-500/40 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 group-hover:border-purple-400/50 transition-all shadow-[0_0_15px_rgba(192,132,252,0.15)]">
              <Network className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Deep Learning
              </h3>
              <p className="text-sm text-white/60 mt-1 font-sans">
                Models that solve practical problems
              </p>
            </div>
          </div>

          {/* Row 3: Real-World Impact */}
          <div className="flex items-start gap-5 p-4 sm:p-5 rounded-2xl bg-[#060a18]/70 border border-white/10 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 group-hover:border-indigo-400/50 transition-all shadow-[0_0_15px_rgba(129,140,248,0.15)]">
              <Box className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                Real-World Impact
              </h3>
              <p className="text-sm text-white/60 mt-1 font-sans">
                AI solutions for people, systems — and a better tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
