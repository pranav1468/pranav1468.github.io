import { ArrowRight } from "lucide-react";

export default function SkillsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">
            03 / SKILLS
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Tools that turn<br />
            ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">impact.</span>
          </h2>

          <p className="text-base text-white/60 leading-relaxed max-w-md mb-8 font-sans">
            A combination of deep learning, computer vision and software development skills to build end-to-end solutions.
          </p>

          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] text-white px-5 py-2.5 text-xs font-mono hover:border-[#f97316] hover:text-[#f97316] transition-all"
          >
            <span>View All Skills</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Column (7 Cols): 3 Dark Glassmorphic Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Card 1: AI / Deep Learning */}
          <div className="rounded-2xl border border-white/10 bg-[#060a18]/70 backdrop-blur-md p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 shadow-xl">
            <h3 className="text-sm font-semibold text-white/90 mb-6 font-sans">
              AI / Deep Learning
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#FF6F00]/15 flex items-center justify-center font-bold text-[#FF6F00] text-xs">
                  TF
                </div>
                <span className="text-xs font-medium text-white/80">TensorFlow</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EE4C2C]/15 flex items-center justify-center font-bold text-[#EE4C2C] text-xs">
                  🔥
                </div>
                <span className="text-xs font-medium text-white/80">PyTorch</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#D00000]/15 flex items-center justify-center font-bold text-[#D00000] text-xs">
                  K
                </div>
                <span className="text-xs font-medium text-white/80">Keras</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center font-bold text-emerald-400 text-xs">
                  CV
                </div>
                <span className="text-xs font-medium text-white/80">OpenCV</span>
              </div>
            </div>
          </div>

          {/* Card 2: Computer Vision */}
          <div className="rounded-2xl border border-white/10 bg-[#060a18]/70 backdrop-blur-md p-6 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 shadow-xl">
            <h3 className="text-sm font-semibold text-white/90 mb-6 font-sans">
              Computer Vision
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-sky-500/15 flex items-center justify-center font-bold text-sky-400 text-xs">
                  CV
                </div>
                <span className="text-xs font-medium text-white/80">OpenCV</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-teal-500/15 flex items-center justify-center font-bold text-teal-400 text-xs">
                  🌐
                </div>
                <span className="text-xs font-medium text-white/80">GDAL</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center font-bold text-cyan-400 text-xs">
                  ⊕
                </div>
                <span className="text-xs font-medium text-white/80">Rasterio</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center font-bold text-emerald-400 text-xs">
                  ⚡
                </div>
                <span className="text-xs font-medium text-white/80">YOLO</span>
              </div>
            </div>
          </div>

          {/* Card 3: Development */}
          <div className="rounded-2xl border border-white/10 bg-[#060a18]/70 backdrop-blur-md p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl">
            <h3 className="text-sm font-semibold text-white/90 mb-6 font-sans">
              Development
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center font-bold text-blue-400 text-xs">
                  🐍
                </div>
                <span className="text-xs font-medium text-white/80">Python</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center font-bold text-emerald-400 text-xs">
                  ⚡
                </div>
                <span className="text-xs font-medium text-white/80">FastAPI</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-sky-500/15 flex items-center justify-center font-bold text-sky-400 text-xs">
                  🐳
                </div>
                <span className="text-xs font-medium text-white/80">Docker</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center font-bold text-amber-400 text-xs">
                  🐧
                </div>
                <span className="text-xs font-medium text-white/80">Linux</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
