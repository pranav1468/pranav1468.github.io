import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink, Layers, Sparkles, Activity } from "lucide-react";
import { projects } from "@/data/projects";
import SEO from "@/components/layout/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeuralBackground3D from "@/components/3d/NeuralBackground3D";

export default function Projects() {
  return (
    <>
      <SEO 
        title="Production AI & Computer Vision Projects | Pranav Baghare" 
        description="Explore deep learning computer vision projects by Pranav Baghare, including satellite deforestation segmentation, DenseNet121 pneumonia detection, and GTSRB sign classification."
        path="/projects"
      />
      <div className="relative min-h-screen bg-[#030014] text-[#F2EFE8] overflow-x-hidden">
        {/* Background 3D canvas */}
        <NeuralBackground3D opacity={0.45} />
        <Navbar />
        
        <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-signal" />
              <span>Verified Portfolios of Work</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-foreground">
              Production AI & <span className="italic-emphasis">Vision Systems</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Documented computer vision architectures, quantitative evaluation metrics, and reproducible model pipelines.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <article
                key={project.id}
                className="rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 sm:p-8 hover:border-signal/50 transition-all duration-300 shadow-xl overflow-hidden group border-beam"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Image Asset */}
                  <div className="lg:col-span-6 rounded-xl overflow-hidden border border-border/60 relative aspect-[16/10] bg-black/60 shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 surface-glass px-2.5 py-1 text-[10px] font-mono text-signal uppercase">
                      Case Study 0{idx + 1}
                    </div>
                  </div>

                  {/* Right Column: Narrative & Metrics */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-signal font-semibold">
                          {project.results.metrics.split(",")[0]}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground/80">
                          {project.results.datasetSize}
                        </span>
                      </div>

                      <h2 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-signal transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-sans">
                        {project.shortDescription}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-muted/60 border border-border/40 px-3 py-1 font-mono text-xs text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/40 font-mono text-xs">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-signal text-ink-950 font-bold hover:bg-signal/90 transition-all shadow-md"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border/70 hover:border-signal/50 text-foreground hover:text-signal transition-all"
                      >
                        <span>Deep Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
