import { useState, useRef, MouseEvent } from "react";
import { Activity, Cpu, Layers, Zap, CheckCircle2 } from "lucide-react";

export default function InteractiveModelHUD() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className="relative w-full max-w-md mx-auto"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/70 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 hover:border-signal/40 group"
      >
        {/* Specular glare overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 91, 46, 0.45), transparent 60%)`,
          }}
        />

        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              telemetry.model_card.v2
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-signal/10 px-2 py-0.5 text-[10px] font-mono text-signal font-medium">
            <CheckCircle2 className="w-3 h-3" />
            Production Ready
          </span>
        </div>

        {/* Core Profile Focus */}
        <div className="space-y-1 mb-5">
          <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            Engineer Profile
          </div>
          <div className="text-lg font-semibold tracking-tight text-foreground flex items-center justify-between">
            <span>Pranav Baghare</span>
            <span className="text-xs font-mono text-signal font-normal">Mantra Softech</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Software Developer (AI/ML) · CDAC PG-DAI
          </p>
        </div>

        {/* Model Spec Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 font-mono text-xs">
          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase mb-1">
              <Layers className="w-3 h-3 text-signal" />
              Primary Domain
            </div>
            <div className="font-medium text-foreground">Computer Vision</div>
          </div>

          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase mb-1">
              <Cpu className="w-3 h-3 text-signal" />
              Core Backbone
            </div>
            <div className="font-medium text-foreground">U-Net · DenseNet</div>
          </div>

          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase mb-1">
              <Activity className="w-3 h-3 text-signal" />
              Medical Recall
            </div>
            <div className="font-medium text-signal font-semibold">94.0% Recall</div>
          </div>

          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase mb-1">
              <Zap className="w-3 h-3 text-signal" />
              Sign Accuracy
            </div>
            <div className="font-medium text-signal font-semibold">99.7% GTSRB</div>
          </div>
        </div>

        {/* Code Snippet / Tensor Pipeline */}
        <div className="rounded-lg border border-border/50 bg-black/40 p-3 font-mono text-[11px] text-muted-foreground">
          <div className="text-[10px] text-muted-foreground/60 mb-1.5 flex justify-between">
            <span>pipeline_eval.py</span>
            <span className="text-signal">latency: 4.8ms</span>
          </div>
          <div className="text-foreground/90 space-y-0.5">
            <div><span className="text-signal">img</span> = load_multispectral(tile)</div>
            <div><span className="text-signal">mask</span> = siamese_unet(img)</div>
            <div className="text-emerald-400">↳ loss = dice + bce | mIoU: 0.88</div>
          </div>
        </div>
      </div>
    </div>
  );
}
