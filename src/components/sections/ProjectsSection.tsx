import { useState } from "react";
import { ArrowRight, ArrowUpRight, Github, ExternalLink, X, Activity, Cpu, Layers } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  architecture: string;
  highlights: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "satellite-segmentation",
    title: "Satellite Imagery Segmentation & Deforestation Analysis",
    category: "Geospatial Computer Vision",
    image: "/assets/projects/satellite-segmentation.jpg",
    tags: ["Python", "TensorFlow", "U-Net"],
    metrics: [
      { label: "Mean IoU", value: "88.4%" },
      { label: "Dice Coefficient", value: "0.91" },
      { label: "Inference Time", value: "32ms" },
    ],
    description: "Multispectral remote sensing segmentation engine designed to quantify deforestation rates, illegal logging boundaries, and canopy density over satellite tiles.",
    architecture: "Modified U-Net architecture with ResNet50 encoder backbone pre-trained on ImageNet, fine-tuned on Sentinel-2 and Landsat multispectral imagery using focal Tversky loss.",
    highlights: [
      "Processes 16-band multispectral satellite rasters with atmospheric normalization.",
      "Custom tiling pipeline handling large GeoTIFF rasters with zero edge-seam artifacts.",
      "Trained with spatial augmentations (rotations, elastic transforms, spectral jittering).",
    ],
    githubUrl: "https://github.com/pranav1468",
  },
  {
    id: "pneumonia-diagnosis",
    title: "Automated Pneumonia Diagnosis System",
    category: "Medical AI & Interpretability",
    image: "/assets/projects/pneumonia-gradcam.jpg",
    tags: ["Python", "Keras", "DenseNet121"],
    metrics: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Sensitivity", value: "96.1%" },
      { label: "AUC-ROC", value: "0.978" },
    ],
    description: "Clinical decision support pipeline for automated pneumonia identification on frontal chest radiographs, featuring Grad-CAM visual heatmaps for diagnostic transparency.",
    architecture: "DenseNet121 convolutional neural network fine-tuned with feature reuse across dense connectivity blocks, integrated with Grad-CAM gradient backpropagation for visual localization.",
    highlights: [
      "Addresses extreme class imbalance using weighted binary cross-entropy loss.",
      "Generates pixel-accurate Grad-CAM activation heatmaps showing pathological lung opacities.",
      "Validated against NIH and Kaggle Chest X-Ray datasets.",
    ],
    githubUrl: "https://github.com/pranav1468",
  },
  {
    id: "traffic-sign-recognition",
    title: "Autonomous Vehicle Traffic Sign Recognition",
    category: "Autonomous Systems",
    image: "/assets/projects/traffic-sign-gtsrb.jpg",
    tags: ["Python", "OpenCV", "CNN"],
    metrics: [
      { label: "Test Accuracy", value: "98.7%" },
      { label: "FPS (CPU)", value: "62 FPS" },
      { label: "Classes", value: "43 Types" },
    ],
    description: "Real-time edge perception system classifying 43 distinct European traffic sign categories under hostile environmental variations like glare, motion blur, and rain.",
    architecture: "Multi-scale Convolutional Neural Network with spatial transformer networks (STN) for geometric invariance and localized CLAHE contrast equalization.",
    highlights: [
      "Real-time edge inference running at 60+ FPS on embedded compute boards.",
      "Color-space preprocessing using HSV and YUV channels for weather and glare robustness.",
      "Evaluated on the benchmark German Traffic Sign Recognition Benchmark (GTSRB).",
    ],
    githubUrl: "https://github.com/pranav1468",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-16 xl:pl-16 xl:pr-36 w-full max-w-[1550px] mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-widest mb-4">
            07 / PROJECTS
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5">
            From ideas<br />
            to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">real-world<br />applications.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md mb-7 font-sans">
            A collection of projects in computer vision, deep learning and real-world AI applications.
          </p>

          <button
            onClick={() => setSelectedProject(projects[0])}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] text-white px-6 py-3 text-xs sm:text-sm font-mono hover:border-[#f97316] hover:text-[#f97316] transition-all"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column (8 Cols) - 3 Project Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-2xl border border-white/10 bg-[#060a18]/75 backdrop-blur-md overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a18] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug mb-4">
                  {project.title}
                </h3>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-white/80 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Circular Action Arrow */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.08]">
                    <span className="text-xs font-mono text-white/50">Inspect Details</span>
                    <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-[#f97316] group-hover:bg-[#f97316]/10 flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-[#f97316] transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#080d21] p-6 sm:p-8 shadow-2xl text-left">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              {selectedProject.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h2>

            {/* Banner Image */}
            <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9] border border-white/10 shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-center">
                  <div className="text-lg sm:text-xl font-bold text-[#f97316] font-mono">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Details */}
            <div className="space-y-4 mb-6 text-sm text-white/75 font-sans leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" /> System Description
                </h4>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" /> Deep Learning Architecture
                </h4>
                <p>{selectedProject.architecture}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> Key Engineering Highlights
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.05] hover:border-white text-xs font-mono text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
