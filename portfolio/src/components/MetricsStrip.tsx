import React from "react";
import { trustMetrics } from "@/data/portfolioData";

export default function MetricsStrip() {
  return (
    <section className="py-6 sm:py-8 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-accent-cyan">
                  {metric.value}
                </span>
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-xs text-foreground-dim font-normal mt-0.5">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
