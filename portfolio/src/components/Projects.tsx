import React from "react";
import { featuredProjects } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import { FolderGit2, ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple">Analytics Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
            Real business problems solved with Power BI, SQL, Python and Excel analysis.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Direct Link Footnote */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center sm:text-left gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Looking for source queries and notebooks?</p>
            <p className="text-xs text-foreground-dim">All SQL scripts, DAX formulas, and exploratory notebooks are publicly indexed.</p>
          </div>
          <a
            href="https://github.com/ravishkushwaha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan hover:text-white transition-colors"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
