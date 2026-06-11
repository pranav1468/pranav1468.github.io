import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, FileText, MapPin, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

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

const Hero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-grain"
    >
      {/* Off-canvas signal orbs — physical depth */}
      <div className="orb orb-signal w-[520px] h-[520px] -top-40 -right-32" />
      <div className="orb orb-moss w-[380px] h-[380px] -bottom-32 -left-24" />

      {/* Faint lab hairlines */}
      <div className="absolute inset-0 lab-hairlines opacity-60 pointer-events-none" />

      {/* Soft fade-out toward next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 lg:pt-40 pb-24">
        {/* Eyebrow row — index + status */}
        <div
          className={`flex items-center justify-between text-xs mb-14 transition-opacity duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="eyebrow">001 / Index</span>
          <span className="eyebrow flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
            </span>
            Available · Q2 2026
          </span>
        </div>

        {/* Asymmetric grid: 7 / 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — Editorial headline + meta */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">
              <span className="text-signal">●</span>&nbsp;&nbsp;Pranav Baghare — AI/ML Engineer
            </div>

            <RevealHeadline
              lines={[
                { text: "Teaching machines to" },
                { text: "see, read, and", italic: false },
                { text: "reason.", italic: true },
              ]}
            />

            <p
              className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground fade-up"
              style={{ animationDelay: "650ms" }}
            >
              I build computer-vision and deep-learning systems from first
              principles — currently completing CDAC PGDAI, shipping
              Siamese U-Nets, DenseNet pipelines, and Streamlit research tools.
            </p>

            {/* Meta row */}
            <div
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground fade-up"
              style={{ animationDelay: "780ms" }}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-signal" />
                Pune, India
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="font-mono text-xs uppercase tracking-wider">
                PGDAI · CDAC
              </span>
              <span className="w-px h-3 bg-border" />
              <span>Open to AI/ML internships & entry-level roles</span>
            </div>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap items-center gap-4 fade-up"
              style={{ animationDelay: "900ms" }}
            >
              <button
                onClick={() => navigate("/projects")}
                className="btn-signal group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                See selected work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-signal/50 hover:text-signal transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social rail */}
            <div
              className="mt-12 flex items-center gap-5 fade-up"
              style={{ animationDelay: "1020ms" }}
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
                    <Icon className="w-3.5 h-3.5" />
                    <span className="story-link">{l.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Editorial composition: cropped portrait + data card + code snippet */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative fade-up"
              style={{ animationDelay: "350ms" }}
            >
              {/* Portrait — tall editorial crop */}
              <div className="relative ml-auto w-[78%] aspect-[3/4] overflow-hidden rounded-[var(--r-lg)] surface-card">
                <img
                  src={profilePhoto}
                  alt="Portrait of Pranav Baghare"
                  className="w-full h-full object-cover grayscale-[15%] contrast-105"
                />
                {/* Inner vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
                {/* Caption pill */}
                <div className="absolute left-3 bottom-3 surface-glass px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-foreground/90">
                  fig.01 — Engineer
                </div>
              </div>

              {/* Floating spec card — top-left of portrait */}
              <div
                className="absolute -left-2 lg:-left-8 top-8 w-[58%] surface-glass p-4 shadow-elevated fade-up"
                style={{ animationDelay: "560ms" }}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground mb-3">
                  <span>model_card.yaml</span>
                  <span className="text-signal">●</span>
                </div>
                <dl className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">domain</dt>
                    <dd className="text-foreground">computer-vision</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">stack</dt>
                    <dd className="text-foreground">torch · cv2 · np</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">focus</dt>
                    <dd className="text-signal">segmentation</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">status</dt>
                    <dd className="text-foreground">training…</dd>
                  </div>
                </dl>
              </div>

              {/* Floating code snippet — bottom-left */}
              <div
                className="absolute -left-4 lg:-left-12 -bottom-6 w-[64%] surface-card p-4 fade-up"
                style={{ animationDelay: "720ms" }}
              >
                <div className="eyebrow mb-2 text-[10px]">pipeline.py</div>
                <pre className="text-[11px] leading-relaxed font-mono text-foreground/85 whitespace-pre-wrap">
{`x = encoder(img)
mask = siamese_unet(x)
loss = dice + bce
↳ acc 0.94`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rail — focus areas as ticker */}
        <div
          className="mt-32 lg:mt-40 border-t border-border/60 pt-6 fade-up"
          style={{ animationDelay: "1100ms" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow">Current focus</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              {[
                "Computer Vision",
                "Deep Learning",
                "Siamese U-Net",
                "DenseNet121",
                "NLP",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-6 text-foreground/80">
                  <span>{item}</span>
                  {i < arr.length - 1 && <span className="text-border">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
