import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { 
  ArrowUpRight, 
  Github, 
  Layers, 
  Activity, 
  Eye, 
  Sliders, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function ActiveBentoGrid() {
  // State for Satellite Before/After Slider (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // State for Pneumonia Grad-CAM Toggle
  const [showGradCam, setShowGradCam] = useState(true);

  // State for Autonomous Vehicle Sign selection
  const [activeSignIndex, setActiveSignIndex] = useState(0);

  const signsData = [
    { name: "Speed Limit 50", classId: "VZ 274-50", confidence: 99.8, color: "text-emerald-400" },
    { name: "Stop Sign", classId: "VZ 206", confidence: 99.7, color: "text-red-400" },
    { name: "Yield Sign", classId: "VZ 205", confidence: 99.6, color: "text-cyan-400" },
  ];

  // Handler for Satellite Slider drag/move
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDraggingSlider) handleSliderMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="eyebrow flex items-center gap-2 mb-3">
            <span className="text-signal">002 / Active Grid</span>
            <span className="text-muted-foreground/60">·</span>
            <span>Interactive Proof of Work</span>
          </div>
          <h2 className="h-section text-foreground">
            Computer Vision Systems <span className="italic-emphasis">& Production AI</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          Recruiter-interactive engineering prototypes. Interact with model outputs, inspect Grad-CAM heatmaps, and test multi-class real-time inference telemetry.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* =========================================================================
            TILE 1: SATELLITE SEGMENTATION (Interactive Wipe Slider - 8 Columns)
           ========================================================================= */}
        <div className="lg:col-span-8 surface-card border-beam p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-border/80 hover:border-signal/50 transition-all duration-300 bg-card/80 backdrop-blur-xl">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-signal font-medium">
                <Layers className="w-3.5 h-3.5" />
                <span>Remote Sensing & Geospatial AI</span>
              </div>
              <a
                href="https://github.com/pranav1468/Satellite-Imagery-Segmentation-Deforestation-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-signal transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>pranav1468/Satellite-Imagery...</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <h3 className="text-2xl font-serif text-foreground mb-2">
              Satellite Imagery Segmentation & Deforestation Analysis
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Automated forest monitoring using multispectral satellite imagery. Implemented a Modified U-Net for pixel-wise forest segmentation and Siamese U-Net for temporal change detection, leveraging weak supervision with vegetation indices.
            </p>

            {/* Interactive Split-Screen Image Slider */}
            <div
              ref={sliderContainerRef}
              onMouseDown={() => setIsDraggingSlider(true)}
              onMouseUp={() => setIsDraggingSlider(false)}
              onMouseLeave={() => setIsDraggingSlider(false)}
              onMouseMove={onMouseMove}
              onTouchMove={onTouchMove}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-border/60 shadow-inner bg-black/60"
            >
              {/* Image Base (Left / Raw Multispectral) */}
              <img
                src="/assets/projects/satellite-segmentation.jpg"
                alt="Satellite Deforestation ML Analysis"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Draggable Divider Line */}
              <div
                style={{ left: `${sliderPos}%` }}
                className="absolute top-0 bottom-0 w-0.5 bg-signal shadow-[0_0_12px_rgba(255,91,46,0.9)] z-20 pointer-events-none"
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-signal text-ink-950 flex items-center justify-center shadow-lg font-mono text-xs font-bold">
                  <Sliders className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Badges on the preview */}
              <div className="absolute top-3 left-3 surface-glass px-2.5 py-1 text-[11px] font-mono text-foreground z-10">
                Sentinel-2 Multispectral Tile
              </div>
              <div className="absolute top-3 right-3 surface-glass px-2.5 py-1 text-[11px] font-mono text-signal z-10">
                U-Net Semantic Mask (Accuracy 96.7%)
              </div>
              <div className="absolute bottom-3 left-3 surface-glass px-2.5 py-1 text-[10px] font-mono text-muted-foreground z-10">
                Drag slider to inspect segmentation mask
              </div>
            </div>
          </div>

          {/* Tech Stack Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/40">
            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "mU-Net", "Siamese U-Net", "GDAL", "Rasterio"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted/60 px-3 py-1 font-mono text-xs text-foreground/80 border border-border/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-signal font-medium">
              Weak Supervision · Pseudo-Labels
            </span>
          </div>
        </div>

        {/* =========================================================================
            TILE 2: PNEUMONIA DIAGNOSIS GRAD-CAM (4 Columns)
           ========================================================================= */}
        <div className="lg:col-span-4 surface-card border-beam p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-border/80 hover:border-signal/50 transition-all duration-300 bg-card/80 backdrop-blur-xl">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-signal font-medium">
                <Activity className="w-3.5 h-3.5" />
                <span>Medical AI Diagnostics</span>
              </div>
              <a
                href="https://github.com/pranav1468/Automated-Pneumonia-Diagnosis-System-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-signal transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="text-xl font-serif text-foreground mb-2">
              Automated Pneumonia Diagnosis System
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              DenseNet121 transfer learning for clinical chest X-rays. Optimized for high recall to prevent false negatives in hospital preliminary screening.
            </p>

            {/* Interactive Grad-CAM Heatmap Toggle Container */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/60 bg-black/80 mb-4">
              <img
                src="/assets/projects/pneumonia-gradcam.jpg"
                alt="Chest X-Ray Pneumonia Grad-CAM"
                className="w-full h-full object-cover"
              />

              {/* Live Overlay Toggle Button */}
              <button
                onClick={() => setShowGradCam(!showGradCam)}
                className="absolute bottom-3 right-3 surface-glass px-3 py-1.5 rounded-lg text-xs font-mono text-foreground hover:text-signal flex items-center gap-1.5 transition-all shadow-lg border border-signal/30"
              >
                <Eye className="w-3.5 h-3.5 text-signal" />
                <span>{showGradCam ? "Focus: Grad-CAM On" : "Show Grad-CAM"}</span>
              </button>

              <div className="absolute top-3 left-3 surface-glass px-2 py-0.5 text-[10px] font-mono text-emerald-400 font-semibold">
                94.0% Recall · 91% Acc
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs mb-4">
              <div className="rounded-lg bg-muted/40 p-2 border border-border/40">
                <div className="text-[10px] text-muted-foreground uppercase">Target Recall</div>
                <div className="font-bold text-signal text-sm">94.0%</div>
              </div>
              <div className="rounded-lg bg-muted/40 p-2 border border-border/40">
                <div className="text-[10px] text-muted-foreground uppercase">F1-Score</div>
                <div className="font-bold text-foreground text-sm">0.91</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
            {["DenseNet121", "TensorFlow", "Grad-CAM", "Transfer Learning"].map((t) => (
              <span key={t} className="rounded-full bg-muted/50 px-2.5 py-0.5 font-mono text-[11px] text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TILE 3: AUTONOMOUS VEHICLE TRAFFIC SIGN CLASSIFIER (4 Columns)
           ========================================================================= */}
        <div className="lg:col-span-4 surface-card border-beam p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-border/80 hover:border-signal/50 transition-all duration-300 bg-card/80 backdrop-blur-xl">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-signal font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Autonomous Perception</span>
              </div>
              <a
                href="https://github.com/pranav1468/Autonomous-Vehicle-Traffic-Sign-Recognition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-signal transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="text-xl font-serif text-foreground mb-2">
              Autonomous Vehicle Traffic Sign Recognition
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Multi-class CNN trained on the GTSRB dataset across 43 sign categories. Features robust image preprocessing, data augmentation, and Streamlit inference serving.
            </p>

            {/* Interactive Telemetry & Sign Simulator */}
            <div className="relative rounded-xl overflow-hidden border border-border/60 bg-black/60 mb-4 p-3 font-mono text-xs">
              <div className="flex items-center justify-between mb-3 text-[11px] text-muted-foreground">
                <span>GTSRB Simulator</span>
                <span className="text-emerald-400 font-semibold">Latency: 4.8ms</span>
              </div>

              {/* Sign Selector buttons */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {signsData.map((s, idx) => (
                  <button
                    key={s.name}
                    onClick={() => setActiveSignIndex(idx)}
                    className={`py-1.5 px-2 rounded text-[10px] text-center border transition-all ${
                      activeSignIndex === idx
                        ? "border-signal bg-signal/15 text-signal font-bold"
                        : "border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>

              {/* Confidence Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-foreground">{signsData[activeSignIndex].classId}</span>
                  <span className={`font-bold ${signsData[activeSignIndex].color}`}>
                    {signsData[activeSignIndex].confidence}% Conf
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted/60 overflow-hidden">
                  <div
                    style={{ width: `${signsData[activeSignIndex].confidence}%` }}
                    className="h-full bg-signal transition-all duration-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/40 bg-muted/20 p-2.5 text-xs font-mono flex items-center justify-between">
              <span className="text-muted-foreground">Overall Val Accuracy</span>
              <span className="text-signal font-bold">99.7% on 43 Classes</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40 mt-4">
            {["Keras", "CNN", "Streamlit", "GTSRB", "Augmentation"].map((t) => (
              <span key={t} className="rounded-full bg-muted/50 px-2.5 py-0.5 font-mono text-[11px] text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TILE 4: PROFESSIONAL INDUSTRY EXPERIENCE (Mantra Softech + EDYYO - 4 Cols)
           ========================================================================= */}
        <div className="lg:col-span-4 surface-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-border/80 hover:border-signal/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-signal font-medium mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>

            <h3 className="text-xl font-serif text-foreground mb-4">
              Production Software & AI Engineering
            </h3>

            {/* Timeline Item 1: Mantra Softech */}
            <div className="space-y-4 font-mono text-xs">
              <div className="relative pl-4 border-l-2 border-signal pb-2">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-signal" />
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-0.5">
                  <span className="text-foreground font-semibold">Mantra Softech</span>
                  <span className="text-signal font-medium">May 2026 – Present</span>
                </div>
                <div className="text-[11px] text-signal font-medium mb-1.5">
                  Software Developer | AI/ML Engineer
                </div>
                <p className="text-[11px] text-muted-foreground leading-normal font-sans">
                  Building production ML models, performing data preprocessing, feature extraction, and collaborating across teams to integrate AI into enterprise solutions.
                </p>
              </div>

              {/* Timeline Item 2: EDYYO */}
              <div className="relative pl-4 border-l-2 border-border/60">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-border" />
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-0.5">
                  <span className="text-foreground font-semibold">EDYYO</span>
                  <span>Oct 2024 – Mar 2025</span>
                </div>
                <div className="text-[11px] text-muted-foreground mb-1.5">
                  Web Developer Intern
                </div>
                <p className="text-[11px] text-muted-foreground leading-normal font-sans">
                  Developed client web solutions with responsive layouts, frontend optimization, and backend PHP/MySQL database integrations.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>Specialization</span>
            <span className="text-foreground">Full Lifecycle AI Deployment</span>
          </div>
        </div>

        {/* =========================================================================
            TILE 5: TECHNICAL ARSENAL & SKILLS (4 Columns)
           ========================================================================= */}
        <div className="lg:col-span-4 surface-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-border/80 hover:border-signal/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-signal font-medium mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>

            <h3 className="text-xl font-serif text-foreground mb-4">
              Verified Capabilities & Tooling
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="text-[10px] uppercase text-muted-foreground mb-1.5">
                  Deep Learning & Vision
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["TensorFlow", "Keras", "OpenCV", "mU-Net", "DenseNet121", "GDAL", "Rasterio"].map((t) => (
                    <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[11px] text-foreground border border-border/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase text-muted-foreground mb-1.5">
                  MLOps & Deployment
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Docker", "FastAPI", "Git", "Jenkins", "Streamlit", "PySpark"].map((t) => (
                    <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[11px] text-foreground border border-border/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase text-muted-foreground mb-1.5">
                  Core Languages & Data
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "SQL", "Pandas", "NumPy", "Scikit-Learn", "TypeScript"].map((t) => (
                    <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[11px] text-foreground border border-border/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between text-xs font-mono">
            <span className="text-muted-foreground">Accreditation</span>
            <span className="text-signal font-medium">CDAC PG-DAI Specialization</span>
          </div>
        </div>

      </div>
    </section>
  );
}
