import { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Terminal, 
  Compass, 
  Sparkles, 
  ArrowUpRight,
  Code2,
  Cpu,
  Layers
} from "lucide-react";

interface Milestone {
  year: string;
  role: string;
  organization: string;
  location: string;
  type: "work" | "education";
  description: string;
  bullets: string[];
  tech: string[];
}

const milestones: Milestone[] = [
  {
    year: "May 2026 – Present",
    role: "Software Developer | AI/ML Engineer",
    organization: "Mantra Softech",
    location: "Ahmedabad, India",
    type: "work",
    description: "Developing production-grade machine learning and computer vision solutions for real-world enterprise applications.",
    bullets: [
      "Building and experimenting with deep learning pipelines for production deployment.",
      "Performing high-throughput data preprocessing, feature extraction, and systematic evaluation.",
      "Collaborating with cross-functional engineering teams to integrate ML models into core products.",
      "Conducting rigorous error analysis and fine-tuning to minimize inference failures."
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "Model Evaluation", "Docker", "FastAPI"],
  },
  {
    year: "Aug 2025 – Feb 2026",
    role: "Post Graduate Diploma in Artificial Intelligence (PG-DAI)",
    organization: "Centre for Development of Advanced Computing (CDAC)",
    location: "Noida, India",
    type: "education",
    description: "Rigorous postgraduate specialization in advanced neural network architectures, computer vision, and machine learning theory.",
    bullets: [
      "In-depth research on Modified U-Nets, Siamese U-Nets for satellite imagery, and DenseNet121 transfer learning.",
      "Hands-on implementation of supervised/unsupervised learning, DNNs, CNNs, RNNs, GANs, and Transformers.",
      "Focused heavily on empirical error analysis and diagnostic explainability (Grad-CAM)."
    ],
    tech: ["Deep Learning", "Computer Vision", "U-Net", "DenseNet", "Transfer Learning"],
  },
  {
    year: "Oct 2024 – Mar 2025",
    role: "Web Developer Intern",
    organization: "EDYYO",
    location: "India",
    type: "work",
    description: "Engineered responsive client web interfaces and backend database integrations.",
    bullets: [
      "Developed and maintained client websites using HTML5, CSS3, JavaScript, Bootstrap, and PHP.",
      "Designed mobile-responsive interfaces optimizing user experience and load speed.",
      "Supported backend integration with MySQL databases and server-side PHP endpoints."
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "PHP", "MySQL", "Responsive Design"],
  },
  {
    year: "2020 – 2024",
    role: "B.Tech in Computer Science",
    organization: "Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV)",
    location: "Indore, India",
    type: "education",
    description: "Foundational computer science degree focusing on algorithms, discrete mathematics, and systems programming.",
    bullets: [
      "Mastered data structures, algorithms, linear algebra, and probability theory—the bedrock of machine learning.",
      "Built initial machine learning classifiers and academic software engineering projects."
    ],
    tech: ["Algorithms", "Data Structures", "Linear Algebra", "Python", "SQL"],
  },
];

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-signal/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="eyebrow flex items-center gap-2 mb-3">
            <Compass className="w-3.5 h-3.5 text-signal" />
            <span>004 / Narrative & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-foreground tracking-tight">
            Engineering Journey <span className="italic-emphasis">& Technical Philosophy</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          Grounding deep learning in first principles. Transitioning from academic specialization to enterprise production AI at Mantra Softech.
        </p>
      </div>

      {/* Main Grid: Manifesto Left, Timeline Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT (5 Columns): Engineering Manifesto */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 font-mono text-xs text-signal uppercase tracking-wider mb-4">
              <Terminal className="w-4 h-4" />
              <span>Core Engineering Principles</span>
            </div>

            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              "Understanding why models fail is just as critical as measuring where they succeed."
            </h3>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans">
              <p>
                Too often, machine learning is treated as a black-box commodity—plugging datasets into off-the-shelf scripts without inspecting data distribution drift or loss surfaces.
              </p>
              <p>
                My methodology is rooted in <strong className="text-foreground">first-principles experimentation</strong>: examining failure modes, decomposing features through Grad-CAM attention heatmaps, and engineering targeted weak-supervision heuristics when ground-truth labels are scarce.
              </p>
              <p>
                At <strong className="text-foreground">Mantra Softech</strong> and during my <strong className="text-foreground">CDAC PG-DAI</strong> specialization, I have worked across the entire model lifecycle—from multispectral geospatial ingestion to sub-5ms low-latency inference serving.
              </p>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-border/40 font-mono text-xs">
              <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                <div className="text-[10px] text-muted-foreground uppercase">Current Role</div>
                <div className="font-semibold text-foreground mt-0.5">AI/ML Engineer</div>
                <div className="text-[11px] text-signal">Mantra Softech</div>
              </div>

              <div className="rounded-lg bg-muted/40 p-3 border border-border/40">
                <div className="text-[10px] text-muted-foreground uppercase">Research Focus</div>
                <div className="font-semibold text-foreground mt-0.5">Computer Vision</div>
                <div className="text-[11px] text-signal">U-Net & DenseNet</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT (7 Columns): Laser-Traced Interactive Timeline */}
        <div className="lg:col-span-7 space-y-4">
          {milestones.map((item, index) => {
            const isActive = activeMilestone === index;
            const Icon = item.type === "work" ? Briefcase : GraduationCap;

            return (
              <div
                key={item.organization}
                onClick={() => setActiveMilestone(index)}
                className={`rounded-2xl border p-6 transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isActive
                    ? "bg-card/85 border-signal/60 shadow-[0_8px_30px_rgba(255,91,46,0.12)] scale-[1.01]"
                    : "bg-card/40 border-border/60 hover:border-border hover:bg-card/60"
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-signal" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-signal/15 text-signal">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-serif text-lg font-semibold text-foreground">
                      {item.role}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-signal font-semibold">
                    {item.year}
                  </span>
                </div>

                <div className="text-xs font-mono text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="text-foreground font-medium">{item.organization}</span>
                  <span>·</span>
                  <span>{item.location}</span>
                </div>

                <p className="text-sm text-foreground/80 mb-4 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Bullets (Expanded if active) */}
                {isActive && (
                  <div className="space-y-2 mb-4 pt-3 border-t border-border/40 animate-fade-in">
                    {item.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2 text-xs text-muted-foreground leading-normal font-sans">
                        <span className="text-signal font-bold mt-0.5">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted/60 border border-border/40 px-2.5 py-0.5 font-mono text-[10px] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
