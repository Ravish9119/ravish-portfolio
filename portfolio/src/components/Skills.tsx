import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { Cpu, Check } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple">Skills &amp; Tooling</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
            The technical stack and analytical methods I use to transform raw data into decisions.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-accent-cyan tracking-wider">
                    CATEGORY {cat.number}
                  </span>
                  <span className="text-[11px] font-medium text-foreground-dim uppercase tracking-wider">
                    {cat.highlightTool}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-5 group-hover:text-accent-cyan transition-colors">
                  {cat.title}
                </h3>

                {/* Skills Pill List */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/80 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-foreground-dim">
                <span>Verified Competency</span>
                <span className="font-mono text-slate-400">{cat.skills.length} competencies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
