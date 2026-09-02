import React from "react";
import { workflowStages } from "@/data/portfolioData";
import { GitBranch, ArrowRight, Check } from "lucide-react";

export default function DataWorkflow() {
  return (
    <section id="workflow" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            How I Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple">Data</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
            A disciplined 4-stage data pipeline converting raw datasets into strategic business decisions.
          </p>
        </div>

        {/* 4-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-accent-cyan/80 group-hover:text-accent-cyan transition-colors">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-foreground-dim px-2 py-0.5 rounded bg-white/[0.04]">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {stage.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <Check className="w-3 h-3 text-accent-emerald flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
