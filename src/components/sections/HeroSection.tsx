import { useState } from "react";
import { ArrowRight, FileText, Mail, Github, Linkedin, Check } from "lucide-react";
import confetti from "canvas-confetti";
import SectionNeuralWave from "@/components/3d/SectionNeuralWave";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "pranavbaghare14@gmail.com";

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#f97316", "#38bdf8", "#c084fc"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center overflow-hidden z-10">
      <SectionNeuralWave sectionIndex={0} sectionId="home" />
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-28 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl lg:max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/50 mb-5">
          <span className="font-semibold text-white/80">01</span>
          <span className="w-8 h-px bg-white/20" />
          <span>AI/ML · COMPUTER VISION</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          Building<br />
          intelligent systems<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
            for the real world.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 font-sans">
          I'm Pranav Baghare, a Software Developer (AI/ML) passionate about Computer Vision and Deep Learning, turning data into practical, real-world solutions.
        </p>

        {/* Primary CTAs (View My Work & Download Resume) */}
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-all shadow-xl hover:translate-x-0.5"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="/resume.pdf"
            download="Pranav_Baghare_Resume.pdf"
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] text-white px-6 py-3 text-sm font-medium hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 transition-all shadow-sm"
          >
            <FileText className="w-4 h-4 text-white/70" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Secondary Social/Contact Pills (Email Me, GitHub, LinkedIn) */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Email Me Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-5 py-2.5 text-xs sm:text-sm font-sans text-white transition-all shadow-sm group"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-white/70 group-hover:text-[#f97316] transition-colors" />
                <span>Email Me</span>
              </>
            )}
          </button>

          {/* GitHub Button */}
          <a
            href="https://github.com/pranav1468"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-5 py-2.5 text-xs sm:text-sm font-sans text-white transition-all shadow-sm group"
          >
            <Github className="w-4 h-4 text-white/70 group-hover:text-[#f97316] transition-colors" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/pranav-baghare"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-sm hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-5 py-2.5 text-xs sm:text-sm font-sans text-white transition-all shadow-sm group"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:text-[#f97316] transition-colors" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
