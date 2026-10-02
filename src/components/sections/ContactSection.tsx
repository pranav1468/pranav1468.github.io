import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "pranavbaghare14@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#f97316", "#38bdf8", "#c084fc"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* 08 / CONTACT */}
      <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">
        08 / CONTACT
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.08]">
        {/* Main Heading */}
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Let's build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400">
              better AI solutions.
            </span>
          </h2>
        </div>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Email Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-4 py-2.5 text-xs sm:text-sm font-sans text-white transition-all shadow-md group"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
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
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-4 py-2.5 text-xs sm:text-sm font-sans text-white transition-all shadow-md group"
          >
            <Github className="w-4 h-4 text-white/70 group-hover:text-[#f97316] transition-colors" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/pranav-baghare"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-4 py-2.5 text-xs sm:text-sm font-sans text-white transition-all shadow-md group"
          >
            <Linkedin className="w-4 h-4 text-sky-400 group-hover:text-[#f97316] transition-colors" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <footer className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-white/50">
        <div>
          <div className="font-bold text-white text-sm">Pranav Baghare</div>
          <div className="text-[11px] font-mono text-white/40">Software Developer (AI/ML)</div>
        </div>

        <div className="text-white/40 text-xs sm:text-right max-w-sm">
          Turning data into a safer, cleaner, and brighter tomorrow.
        </div>
      </footer>
    </section>
  );
}
