import { Github, Linkedin, Mail, Cpu, Terminal, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/60 bg-[#02000d] py-12 px-4 sm:px-6 lg:px-10 z-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Stack Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div>
            <div className="font-serif text-lg font-bold text-foreground">
              Pranav Baghare
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              Software Developer (AI/ML) @ Mantra Softech · Computer Vision
            </div>
          </div>
          <span className="hidden sm:inline-block w-px h-6 bg-border/60" />
          <div className="text-[10px] text-muted-foreground/70">
            <div>Zero-Cost Architecture</div>
            <div className="text-signal">GitHub Pages Edge CDN · 60 FPS Locked</div>
          </div>
        </div>

        {/* System Telemetry & Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/pranav1468"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-signal transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/pranav-baghare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-signal transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:pranavbaghare@gmail.com"
            className="hover:text-signal transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-border/60 bg-card/60 hover:border-signal/50 hover:text-signal transition-all ml-2"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Sub-row */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground/60 gap-3 text-center sm:text-left">
        <div>
          © {currentYear} Pranav Baghare. Built with React, TypeScript, Three.js & Tailwind.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>All telemetry systems operational</span>
        </div>
      </div>
    </footer>
  );
}
