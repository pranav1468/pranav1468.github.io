import { useState } from "react";
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles,
  Send,
  Download
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FF5B2E", "#5B8C5A", "#F2EFE8", "#00F2FE"],
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pranavbaghare@gmail.com");
    setCopiedEmail(true);
    triggerCelebration();
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919752331339");
    setCopiedPhone(true);
    triggerCelebration();
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto z-10">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-signal/15 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="eyebrow flex items-center justify-center gap-2 mb-3">
          <Terminal className="w-3.5 h-3.5 text-signal" />
          <span>005 / Direct Dispatch Dock</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-foreground tracking-tight">
          Let's Engineer <span className="italic-emphasis">Impact Together</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Open to high-impact Computer Vision, Deep Learning, and Applied AI roles. Reach out directly via encrypted dispatch or one-click copy.
        </p>
      </div>

      {/* Command Dock Card */}
      <div className="rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Terminal Status Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-border/50 pb-4 mb-8 font-mono text-xs text-muted-foreground gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="text-foreground font-semibold">dispatch_server.py</span>
            <span className="text-muted-foreground/60">·</span>
            <span className="text-signal">status: 200 OK</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>latency: 4.8ms</span>
            <span className="text-muted-foreground/60">·</span>
            <span className="text-emerald-400">response_time: &lt;12h</span>
          </div>
        </div>

        {/* Contact Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-mono text-xs">
          {/* Email Channel */}
          <div className="rounded-xl border border-border/70 bg-card/50 p-4 flex items-center justify-between gap-3 group hover:border-signal/50 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-signal/15 text-signal flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase">Direct Email</div>
                <a 
                  href="mailto:pranavbaghare@gmail.com"
                  className="font-semibold text-foreground hover:text-signal transition-colors text-sm break-all"
                >
                  pranavbaghare@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg border border-border/60 bg-muted/40 hover:bg-signal/20 text-muted-foreground hover:text-signal transition-all shrink-0"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Channel */}
          <div className="rounded-xl border border-border/70 bg-card/50 p-4 flex items-center justify-between gap-3 group hover:border-signal/50 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-signal/15 text-signal flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase">Mobile / WhatsApp</div>
                <a 
                  href="tel:+919752331339"
                  className="font-semibold text-foreground hover:text-signal transition-colors text-sm"
                >
                  +91 9752331339
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyPhone}
              className="p-2 rounded-lg border border-border/60 bg-muted/40 hover:bg-signal/20 text-muted-foreground hover:text-signal transition-all shrink-0"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Action Row: Social Channels & Resume Download */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pranav1468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-muted/30 text-xs font-mono text-muted-foreground hover:text-signal hover:border-signal/40 transition-all"
            >
              <Github className="w-4 h-4 text-signal" />
              <span>github.com/pranav1468</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pranav-baghare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-muted/30 text-xs font-mono text-muted-foreground hover:text-signal hover:border-signal/40 transition-all"
            >
              <Linkedin className="w-4 h-4 text-signal" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <a
            href="/resume.pdf"
            download="Pranav_Baghare_Resume.pdf"
            onClick={triggerCelebration}
            className="btn-signal w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-mono font-bold text-ink-950 shadow-xl"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>

        {/* Footer info pill */}
        <div className="mt-8 text-center text-xs font-mono text-muted-foreground flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-signal" />
          <span>Greater Delhi / Ahmedabad, India · Open for Global Remote & Relocation</span>
        </div>
      </div>
    </section>
  );
}
