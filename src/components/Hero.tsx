import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, MapPin, Github, Linkedin, Mail, Award, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import InteractiveModelHUD from "@/components/3d/InteractiveModelHUD";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/pranav1468" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pranav-baghare" },
  { icon: Mail, label: "Email", href: "mailto:pranavbaghare@gmail.com" },
];

/** Splits a string into <span class="reveal-word"> chunks with staggered delays. */
const RevealHeadline = ({ lines }: { lines: { text: string; italic?: boolean; accent?: boolean }[] }) => {
  let wordIndex = 0;
  return (
    <h1 className="h-display text-foreground">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.text.split(" ").map((word, wi) => {
            const delay = `${wordIndex * 70}ms`;
            wordIndex += 1;
            return (
              <span key={`${li}-${wi}`} className="reveal-word mr-[0.22em]">
                <span
                  style={{ animationDelay: delay }}
                  className={
                    line.italic
                      ? "italic-emphasis"
                      : line.accent
                      ? "text-signal"
                      : ""
                  }
                >
                  {word}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};

interface HeroProps {
  onOpenRecruiterModal?: () => void;
}

export default function Hero({ onOpenRecruiterModal }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleDownloadCV = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF5B2E", "#5B8C5A", "#F2EFE8"],
    });
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-grain pt-24 lg:pt-32"
    >
      {/* Off-canvas signal orbs for depth */}
      <div className="orb orb-signal w-[520px] h-[520px] -top-40 -right-32" />
      <div className="orb orb-moss w-[380px] h-[380px] -bottom-32 -left-24" />

      {/* Faint lab hairlines */}
      <div className="absolute inset-0 lab-hairlines opacity-40 pointer-events-none" />

      {/* Soft fade-out toward next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-24">
        {/* Eyebrow row — index + status */}
        <div
          className={`flex items-center justify-between text-xs mb-10 transition-opacity duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="eyebrow flex items-center gap-2">
            <span className="text-signal">001</span>
            <span className="text-muted-foreground/50">/</span>
            <span>Index</span>
          </span>

          <span className="eyebrow flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="text-foreground font-semibold">Active @ Mantra Softech</span>
            <span className="text-muted-foreground hidden sm:inline">· Open to Senior CV/AI Roles</span>
          </span>
        </div>

        {/* Asymmetric grid: 7 / 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT — Editorial headline + meta */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5 flex items-center gap-2">
              <span className="text-signal font-bold">●</span>
              <span className="font-semibold text-foreground">Pranav Baghare</span>
              <span className="text-muted-foreground">— Software Developer (AI/ML)</span>
            </div>

            <RevealHeadline
              lines={[
                { text: "Teaching machines to" },
                { text: "see, segment, and", italic: false },
                { text: "reason.", italic: true },
              ]}
            />

            <p
              className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground fade-up"
              style={{ animationDelay: "450ms" }}
            >
              Software Developer (AI/ML) at <strong className="text-foreground font-semibold">Mantra Softech</strong> with postgraduate specialization in Artificial Intelligence (<strong className="text-foreground font-semibold">CDAC PG-DAI</strong>). Engineering production computer-vision pipelines, Modified & Siamese U-Nets, DenseNet diagnostics, and real-time perception models.
            </p>

            {/* Meta row */}
            <div
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground fade-up font-mono"
              style={{ animationDelay: "600ms" }}
            >
              <span className="flex items-center gap-1.5 text-foreground/90">
                <MapPin className="w-3.5 h-3.5 text-signal" />
                Greater Delhi / Ahmedabad
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="text-signal font-semibold">
                CDAC PG-DAI
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="text-foreground/80">
                B.Tech Computer Science
              </span>
            </div>

            {/* Action CTAs */}
            <div
              className="mt-9 flex flex-wrap items-center gap-3.5 fade-up"
              style={{ animationDelay: "750ms" }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-signal group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-950 shadow-xl"
              >
                Explore Active Work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="/resume.pdf"
                download="Pranav_Baghare_Resume.pdf"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground hover:border-signal/60 hover:text-signal transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-signal" />
                Download CV
              </a>

              {onOpenRecruiterModal && (
                <button
                  onClick={onOpenRecruiterModal}
                  className="inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/10 px-4 py-3 text-sm font-mono font-medium text-signal hover:bg-signal hover:text-ink-950 transition-all shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>Recruiter 10s Mode</span>
                </button>
              )}
            </div>

            {/* Social Links */}
            <div
              className="mt-10 flex items-center gap-6 fade-up"
              style={{ animationDelay: "900ms" }}
            >
              {socialLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={l.label}
                    className="group flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-signal transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-signal" />
                    <span>{l.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Interactive 3D Model HUD */}
          <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: "300ms" }}>
            <InteractiveModelHUD />
          </div>
        </div>

        {/* Bottom focus ticker */}
        <div
          className="mt-20 border-t border-border/50 pt-6 fade-up"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-signal" />
              Verified Core Competencies
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-muted-foreground">
              {[
                "Computer Vision",
                "Modified U-Net",
                "DenseNet121",
                "Siamese Change Detection",
                "GTSRB 99.7%",
                "FastAPI & Docker",
                "Mantra Softech",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-6 text-foreground/80">
                  <span className="hover:text-signal transition-colors">{item}</span>
                  {i < arr.length - 1 && <span className="text-border">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
