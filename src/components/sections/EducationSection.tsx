import { Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-16 xl:pl-16 xl:pr-36 w-full max-w-[1550px] mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column (4.5 Cols) */}
        <div className="lg:col-span-4">
          <div className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-4">
            05 / EDUCATION
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5">
            A strong<br />
            academic<br />
            foundation.
          </h2>
        </div>

        {/* Right Column (8 Cols) - 2 Stacked Education Cards */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Institution 1: CDAC Noida */}
          <div className="rounded-2xl border border-white/10 bg-[#060a18]/75 backdrop-blur-md p-6 sm:p-8 hover:border-teal-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                {/* CDAC Badge Icon */}
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex flex-col items-center justify-center text-teal-300 font-bold shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  <span className="text-[11px] tracking-tight leading-none">प्रगत संगणन</span>
                  <span className="text-sm tracking-wider font-mono font-black mt-0.5">CDAC</span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    CDAC Noida
                  </h3>
                  <p className="text-sm sm:text-base text-teal-400/90 font-medium mt-0.5">
                    PG Diploma in Artificial Intelligence (PG-DAI)
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs sm:text-sm text-white/60 bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0 self-start sm:self-auto">
                Aug 2023 – Feb 2024
              </span>
            </div>
          </div>

          {/* Institution 2: SVVV Indore */}
          <div className="rounded-2xl border border-white/10 bg-[#060a18]/75 backdrop-blur-md p-6 sm:p-8 hover:border-rose-500/40 transition-all duration-300 shadow-xl group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                {/* SVVV Badge Icon */}
                <div className="w-14 h-14 rounded-full bg-rose-500/20 border border-rose-500/30 flex flex-col items-center justify-center text-rose-300 font-bold shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                  <Award className="w-6 h-6 text-rose-400 mb-0.5" />
                  <span className="text-[10px] font-mono tracking-wider">SVVV</span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                    SVVV Indore
                  </h3>
                  <p className="text-sm sm:text-base text-rose-400/90 font-medium mt-0.5">
                    B.Tech in Computer Science
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs sm:text-sm text-white/60 bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10 shrink-0 self-start sm:self-auto">
                Oct 2020 – Oct 2024
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
