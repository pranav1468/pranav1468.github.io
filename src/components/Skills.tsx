import { useState } from "react";
import { 
  Brain, 
  Eye, 
  Cpu, 
  Terminal, 
  Database, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  GitBranch
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "vision" | "mlops" | "languages" | "core";
  proficiency: number;
  highlight?: boolean;
  context: string;
  iconName?: string;
}

const skillsData: SkillItem[] = [
  // Computer Vision & DL
  { name: "Computer Vision & OpenCV", category: "vision", proficiency: 96, highlight: true, context: "Image preprocessing, augmentations, filtering, GDAL, Rasterio" },
  { name: "Modified U-Net & Segmentation", category: "vision", proficiency: 94, highlight: true, context: "Pixel-wise multispectral deforestation analysis, Dice+BCE loss" },
  { name: "Siamese U-Net (Change Detection)", category: "vision", proficiency: 92, highlight: true, context: "Temporal satellite change detection across time series" },
  { name: "DenseNet121 & Grad-CAM", category: "vision", proficiency: 95, highlight: true, context: "Medical chest radiograph classification with 94% recall" },
  { name: "TensorFlow & Keras", category: "vision", proficiency: 95, highlight: true, context: "Core deep learning engine for research & deployment" },
  { name: "YOLO Object Detection", category: "vision", proficiency: 88, context: "Real-time bounding box prediction & edge inference" },
  
  // MLOps & Production
  { name: "Docker Containerization", category: "mlops", proficiency: 90, highlight: true, context: "Reproducible inference microservices & deployment" },
  { name: "FastAPI REST Serving", category: "mlops", proficiency: 92, highlight: true, context: "High-performance asynchronous inference endpoints" },
  { name: "Git & GitHub CI/CD", category: "mlops", proficiency: 94, context: "Automated test & deployment pipelines, version control" },
  { name: "Jenkins Automation", category: "mlops", proficiency: 85, context: "Continuous integration workflows & build automation" },
  { name: "Streamlit UI Deployment", category: "mlops", proficiency: 92, context: "Interactive real-time model dashboards for stakeholders" },
  
  // Languages & Data Engineering
  { name: "Python 3 (NumPy / SciPy)", category: "languages", proficiency: 98, highlight: true, context: "Vectorized array computations, algorithmic core" },
  { name: "SQL & Query Optimization", category: "languages", proficiency: 90, context: "Relational database querying, aggregations, data extraction" },
  { name: "Pandas & Data Wrangling", category: "languages", proficiency: 95, context: "Feature engineering, dataset cleaning, ETL pipelines" },
  { name: "PySpark (Distributed Data)", category: "languages", proficiency: 84, context: "Distributed DataFrames & large-scale batch processing" },
  
  // Core Concepts
  { name: "Supervised & Unsupervised ML", category: "core", proficiency: 95, context: "Classification, regression, clustering, PCA, dimensional reduction" },
  { name: "Model Evaluation & Error Analysis", category: "core", proficiency: 96, highlight: true, context: "Confusion matrices, ROC-AUC, Recall optimization, F1 tuning" },
  { name: "Transfer Learning", category: "core", proficiency: 94, context: "ImageNet backbone adaptation, feature extraction, fine-tuning" },
  { name: "Weak Supervision & Pseudo-Labels", category: "core", proficiency: 90, context: "Automating dataset labeling with heuristic vegetation indices" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "vision" | "mlops" | "languages" | "core">("all");

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeTab);

  const tabs = [
    { id: "all", label: "All Arsenal", icon: Sparkles },
    { id: "vision", label: "Computer Vision & DL", icon: Eye },
    { id: "mlops", label: "MLOps & Deployment", icon: Cpu },
    { id: "languages", label: "Languages & Data", icon: Terminal },
    { id: "core", label: "Core ML Theory", icon: Brain },
  ] as const;

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto z-10">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-signal/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="eyebrow flex items-center justify-center gap-2 mb-3">
          <Layers className="w-3.5 h-3.5 text-signal" />
          <span>003 / Verified Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-foreground tracking-tight">
          Technical Arsenal <span className="italic-emphasis">& Production Tooling</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Battle-tested frameworks, specialized computer vision backbones, and deployment tooling engineered for high-throughput machine learning systems.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-signal text-ink-950 border-signal font-bold shadow-[0_0_18px_rgba(255,91,46,0.4)]"
                    : "bg-card/40 text-muted-foreground border-border/60 hover:text-foreground hover:border-signal/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-xl border p-5 transition-all duration-300 relative overflow-hidden group ${
              skill.highlight
                ? "bg-card/70 border-signal/30 shadow-[0_4px_24px_rgba(255,91,46,0.06)] hover:border-signal/60"
                : "bg-card/40 border-border/60 hover:border-border hover:bg-card/60"
            }`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="font-semibold text-sm text-foreground flex items-center gap-2">
                <span>{skill.name}</span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" title="Flagship Expertise" />
                )}
              </div>
              <span className="font-mono text-xs text-signal font-semibold">
                {skill.proficiency}%
              </span>
            </div>

            {/* Context description */}
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-sans">
              {skill.context}
            </p>

            {/* Proficiency meter bar */}
            <div className="w-full h-1.5 rounded-full bg-muted/60 overflow-hidden">
              <div
                style={{ width: `${skill.proficiency}%` }}
                className={`h-full rounded-full transition-all duration-700 ${
                  skill.highlight
                    ? "bg-gradient-to-r from-signal to-amber-400"
                    : "bg-muted-foreground/60 group-hover:bg-signal/80"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Accreditation Callout */}
      <div className="mt-12 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-signal/15 border border-signal/30 flex items-center justify-center text-signal">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">
              CDAC Noida PG-DAI Specialization
            </div>
            <div className="text-xs text-muted-foreground">
              Postgraduate accreditation in deep neural networks, computer vision, and AI systems.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-signal">
          <span className="px-3 py-1 rounded-full bg-signal/10 border border-signal/25">
            TensorFlow · OpenCV · U-Net · FastAPI
          </span>
        </div>
      </div>
    </section>
  );
}
