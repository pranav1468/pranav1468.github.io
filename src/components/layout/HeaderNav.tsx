import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import confetti from "canvas-confetti";

const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Writing", href: "writing" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ["#f97316", "#38bdf8", "#c084fc", "#ffffff"],
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Glowing Orange Dot */}
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f97316] shadow-[0_0_12px_#f97316]" />
          </span>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#f97316] transition-colors">
              Pranav Baghare
            </span>
            <span className="text-[11px] font-mono text-white/50 -mt-0.5">
              Software Developer (AI/ML)
            </span>
          </div>
        </div>

        {/* Center/Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-sans text-white/70">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

          {/* Resume Download Pill Button */}
          <a
            href="/resume.pdf"
            download="Pranav_Baghare_Resume.pdf"
            onClick={handleDownloadResume}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/10 px-4 py-1.5 text-xs font-mono text-white transition-all duration-300 ml-2"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/resume.pdf"
            download="Pranav_Baghare_Resume.pdf"
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-[11px] font-mono text-white"
          >
            <span>CV</span>
            <Download className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col space-y-3 font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-left text-white/80 hover:text-[#f97316] py-1 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
