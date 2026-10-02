import { useState } from "react";
import { 
  X, 
  FileText, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Download, 
  Award, 
  Briefcase, 
  GraduationCap 
} from "lucide-react";
import confetti from "canvas-confetti";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FF5B2E", "#5B8C5A", "#F2EFE8"],
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-signal uppercase tracking-wider mb-2">
          <Award className="w-4 h-4" />
          <span>Recruiter Fast-View (10-Second Summary)</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/60 pb-5 mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Pranav Baghare
            </h2>
            <p className="text-sm text-signal font-medium">
              Software Developer (AI/ML) @ Mantra Softech · Computer Vision Engineer
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-signal" />
            <span>Greater Delhi / Ahmedabad, India</span>
          </div>
        </div>

        {/* Action Bar (Download & Instant Contacts) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
          <a
            href="/resume.pdf"
            download="Pranav_Baghare_Resume.pdf"
            onClick={triggerCelebration}
            className="btn-signal flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 font-semibold text-ink-950 text-center shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-foreground hover:border-signal/50 transition-colors"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-signal" />}
            <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
          </button>

          <button
            onClick={handleCopyPhone}
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 py-2.5 px-4 text-foreground hover:border-signal/50 transition-colors"
          >
            {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4 text-signal" />}
            <span>{copiedPhone ? "Phone Copied!" : "Copy Phone"}</span>
          </button>
        </div>

        {/* Top 4 Quantified Accomplishments */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
            Top Quantified Engineering Accomplishments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
              <div className="font-bold text-signal text-base">99.7% Accuracy</div>
              <div className="text-muted-foreground text-[11px]">Multi-class CNN on 43 German Traffic Sign categories with 4.8ms real-time latency.</div>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
              <div className="font-bold text-signal text-base">94.0% Recall</div>
              <div className="text-muted-foreground text-[11px]">DenseNet121 transfer learning on clinical chest X-rays to minimize false negatives.</div>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
              <div className="font-bold text-foreground text-base">Weak Supervision</div>
              <div className="text-muted-foreground text-[11px]">Automated pseudo-labeling with vegetation indices for multispectral U-Net segmentation.</div>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
              <div className="font-bold text-foreground text-base">Production ML</div>
              <div className="text-muted-foreground text-[11px]">Full-lifecycle model preprocessing and enterprise integration at Mantra Softech.</div>
            </div>
          </div>
        </div>

        {/* Experience & Education Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-mono text-xs border-t border-border/40 pt-5">
          <div>
            <div className="flex items-center gap-1.5 text-signal font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Current Role</span>
            </div>
            <div className="font-semibold text-foreground">Software Developer (AI/ML)</div>
            <div className="text-muted-foreground">Mantra Softech (May 2026 – Present)</div>
            <div className="text-[11px] text-muted-foreground/80 mt-1 font-sans">
              Developing production machine learning models and end-to-end evaluation pipelines.
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-signal font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </div>
            <div className="font-semibold text-foreground">PG-DAI (Artificial Intelligence)</div>
            <div className="text-muted-foreground">CDAC Noida (Aug 2025 – Feb 2026)</div>
            <div className="text-[11px] text-muted-foreground/80 mt-1 font-sans">
              B.Tech in Computer Science · SVVV Indore (2020 – 2024)
            </div>
          </div>
        </div>

        {/* External Links */}
        <div className="flex items-center justify-between border-t border-border/40 pt-4 text-xs font-mono">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pranav1468"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-signal transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>github.com/pranav1468</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-baghare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-signal transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/pranav-baghare</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-xs"
          >
            Close Esc
          </button>
        </div>
      </div>
    </div>
  );
}
