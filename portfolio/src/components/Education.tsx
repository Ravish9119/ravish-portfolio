import React from "react";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple">Academic Background</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
            Formal training in computer science, database architectures, and quantitative problem solving.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.03] border border-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Degree & Institution */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                      {edu.institution}
                    </span>
                    {edu.badge && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.06]">
                        {edu.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-foreground-dim">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Subjects */}
                  <div className="pt-2">
                    <p className="text-xs text-foreground-dim mb-2 font-medium flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>Key Coursework &amp; Subjects:</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.subjects.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.05]"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Score / Distinction Metric Card */}
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="w-full lg:w-auto p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center lg:text-right">
                    <div className="flex items-center justify-center lg:justify-end gap-1.5 text-accent-cyan mb-1">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {edu.gradeLabel}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
