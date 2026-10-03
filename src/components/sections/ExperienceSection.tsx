import { Building2, MapPin } from "lucide-react";
import SectionNeuralWave from "@/components/3d/SectionNeuralWave";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full overflow-hidden z-10">
      <SectionNeuralWave sectionIndex={3} sectionId="experience" />
      <div className="relative z-10 max-w-7xl mx-auto py-20 sm:py-24 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">
            04 / EXPERIENCE
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            Turning research<br />
            into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">real-world<br />solutions.</span>
          </h2>
        </div>

        {/* Right Column (7 Cols) - Glassmorphic Experience Card */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-[#060a18]/75 backdrop-blur-md p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Glowing Building Icon */}
              <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 group-hover:border-sky-400/50 transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <Building2 className="w-7 h-7" />
              </div>

              {/* Card Details */}
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    Mantra Softech India Pvt Ltd
                  </h3>
                  <span className="font-mono text-xs text-white/50 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 shrink-0 self-start sm:self-auto">
                    Oct 2024 – Present
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
                    Software Developer (AI/ML)
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs text-white/50 flex items-center gap-1 font-sans">
                    <MapPin className="w-3 h-3" /> Ahmedabad, India
                  </span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed font-sans mb-4">
                  Working on computer vision and deep learning projects, building real-world AI solutions. Architecting low-latency edge inference pipelines, optimizing model throughput, and deploying computer vision models into production environments.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-white/70 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                    Computer Vision
                  </span>
                  <span className="text-[11px] font-mono text-white/70 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                    Deep Learning
                  </span>
                  <span className="text-[11px] font-mono text-white/70 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                    Model Optimization
                  </span>
                  <span className="text-[11px] font-mono text-white/70 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                    Production AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
