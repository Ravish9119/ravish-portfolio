import React from "react";
import { ProjectItem } from "@/data/types";
import { Github, ArrowUpRight, TrendingUp, Cpu, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-3xl bg-[#0b101d]/90 hover:bg-[#0e1628] border border-white/[0.08] hover:border-accent-cyan/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-card hover:shadow-cardHover">
      {/* Top Bar: Number & Category */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-accent-cyan/80 group-hover:text-accent-cyan transition-colors">
            {project.number}
          </span>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-foreground-dim uppercase">
            {project.category}
          </span>
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-accent-cyan text-white hover:text-slate-950 border border-white/10 hover:border-transparent text-xs font-semibold transition-all duration-200"
          aria-label={`View GitHub repository for ${project.title}`}
        >
          <Github className="w-3.5 h-3.5" />
          <span>View Repository</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Project Title */}
      <div className="py-6">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-accent-cyan transition-colors font-display">
          {project.title}
        </h3>
      </div>

      {/* 3-Column Structured Case Study: Challenge, Solution, Outcome */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-white/[0.06]">
        {/* Business Challenge */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            Business Challenge
          </span>
          <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
            {project.businessChallenge}
          </p>
        </div>

        {/* Analytical Solution */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            Analytical Solution
          </span>
          <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
            {project.analyticalSolution}
          </p>
        </div>

        {/* Measurable Outcome */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-accent-emerald font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
            Measurable Outcome
          </span>
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
            {project.measurableOutcome}
          </p>
        </div>
      </div>

      {/* Metrics & Tools Bottom Row */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Metrics Blocks */}
        <div className="lg:col-span-6 grid grid-cols-3 gap-3">
          {project.metrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
            >
              <div className="text-base sm:text-lg font-bold text-white font-mono">
                {metric.value}
              </div>
              <div className="text-[11px] text-foreground-dim font-medium tracking-tight mt-0.5 truncate">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Badges */}
        <div className="lg:col-span-6 flex flex-wrap gap-1.5 lg:justify-end">
          {project.tools.map((tool, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-medium text-slate-300 border border-white/[0.06]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
