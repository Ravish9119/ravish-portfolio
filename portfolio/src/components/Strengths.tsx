import React from "react";
import { strengthsList } from "@/data/portfolioData";
import {
  ShieldCheck,
  Code2,
  BarChart3,
  Zap,
  Monitor,
  Sparkles,
  Award,
} from "lucide-react";

const strengthIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-accent-cyan" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-accent-cyan" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-accent-cyan" />,
  Zap: <Zap className="w-5 h-5 text-accent-cyan" />,
  Monitor: <Monitor className="w-5 h-5 text-accent-cyan" />,
  Sparkles: <Sparkles className="w-5 h-5 text-accent-cyan" />,
};

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-accent-cyan text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Why Work With Me
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted">
            The core professional qualities that define my development & analytical approach.
          </p>
        </div>

        {/* 6-Grid Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {strengthsList.map((item) => (
            <div
              key={item.number}
              className="group p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {strengthIcons[item.icon] || <Sparkles className="w-5 h-5 text-accent-cyan" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-accent-cyan/70">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
