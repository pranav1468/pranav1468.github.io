import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Real-world AI systems with measurable outcomes
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer border-border bg-card/50 hover:border-primary/50 hover-glow-primary interactive-card transition-all duration-300"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                {/* Header with title */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted/50 text-muted-foreground border border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Quick metrics */}
                <p className="text-sm text-muted-foreground mb-6">
                  {project.results.metrics}
                </p>

                {/* Action links row */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm text-primary cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
