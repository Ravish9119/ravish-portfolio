import React from "react";
import Image from "next/image";
import { FileSpreadsheet, Database, BarChart3, Star } from "lucide-react";

function PythonLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="py-blue-grad" x1="16.5" y1="13.2" x2="77.9" y2="74.6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="py-yellow-grad" x1="56.3" y1="53.8" x2="114.7" y2="112.2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>
      <path
        d="M63.045 4c-32.375 0-30.407 14.041-30.407 14.041l.036 14.547h30.93v4.385H20.082S4 35.15 4 67.498c0 32.35 14.168 31.258 14.168 31.258h8.455v-11.83s-.458-14.167 13.882-14.167h30.686s13.351.218 13.351-13.064V20.264S86.29 4 63.045 4zm-16.71 9.475a4.738 4.738 0 1 1 0 9.476 4.738 4.738 0 0 1 0-9.476z"
        fill="url(#py-blue-grad)"
      />
      <path
        d="M64.955 124c32.375 0 30.407-14.041 30.407-14.041l-.036-14.547h-30.93V91.027h43.522S124 92.85 124 60.502c0-32.35-14.168-31.258-14.168-31.258h-8.455v11.83s.458 14.167-13.882 14.167H56.809s-13.351-.218-13.351 13.064v39.427S41.71 124 64.955 124zm16.71-9.475a4.738 4.738 0 1 1 0-9.476 4.738 4.738 0 0 1 0 9.476z"
        fill="url(#py-yellow-grad)"
      />
    </svg>
  );
}

const topSkills = [
  {
    name: "Excel",
    subtitle: "Advanced Analytics",
    icon: <FileSpreadsheet className="w-7 h-7" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "hover:border-emerald-400/40",
    iconColor: "text-emerald-400",
    glowColor: "group-hover:shadow-emerald-500/10",
  },
  {
    name: "SQL",
    subtitle: "Database Querying",
    icon: <Database className="w-7 h-7" />,
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "hover:border-blue-400/40",
    iconColor: "text-blue-400",
    glowColor: "group-hover:shadow-blue-500/10",
  },
  {
    name: "Power BI",
    subtitle: "BI Dashboards",
    icon: <BarChart3 className="w-7 h-7" />,
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "hover:border-amber-400/40",
    iconColor: "text-amber-400",
    glowColor: "group-hover:shadow-amber-500/10",
  },
  {
    name: "Python",
    subtitle: "Data & Backend",
    icon: <PythonLogo className="w-7 h-7" />,
    color: "from-sky-500/20 to-amber-500/10",
    borderColor: "hover:border-sky-400/40",
    iconColor: "text-sky-400",
    glowColor: "group-hover:shadow-sky-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
            A passionate blend of analytical depth and full stack web engineering.
          </p>
        </div>

        {/* About Me Card - Full Width with Interactive Hover */}
        <div className="group w-full p-8 sm:p-10 md:p-14 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 shadow-card hover:shadow-[0_0_45px_rgba(0,212,255,0.12)] relative overflow-hidden cursor-default">
          {/* Decorative glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-cyan/[0.07] group-hover:bg-accent-cyan/[0.14] rounded-full blur-3xl pointer-events-none transition-all duration-500" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-purple/[0.07] group-hover:bg-accent-purple/[0.14] rounded-full blur-3xl pointer-events-none transition-all duration-500" />

          <div className="relative space-y-6 text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed font-normal text-center max-w-4xl mx-auto">
            <p>
              I am a passionate{" "}
              <span className="text-white font-semibold group-hover:text-accent-cyan transition-colors duration-300">Data Analyst and Full Stack Web Developer</span>{" "}
              with a strong interest in transforming data into meaningful insights and building modern, user-friendly web applications.
            </p>
            <p>
              As a <span className="text-white font-semibold">Data Analyst</span>, I work with tools such as{" "}
              <span className="text-slate-200 font-medium">Excel, SQL, Power BI, and Python</span>{" "}
              to analyze data, create interactive dashboards, identify trends, and support data-driven decision-making.
            </p>
            <p>
              As a <span className="text-white font-semibold">Full Stack Web Developer</span>, I have experience with{" "}
              <span className="text-slate-200 font-medium">HTML, CSS, JavaScript, React.js, Python, Flask, and REST APIs</span>, enabling me to build responsive and functional web applications from frontend to backend.
            </p>
            <p>
              I am continuously learning and exploring{" "}
              <span className="text-slate-200 font-medium">AI-powered tools and modern technologies</span>{" "}
              to improve my development and data analytics workflow. My goal is to build practical, impactful solutions that combine{" "}
              <span className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">data, technology, and intelligent automation</span>.
            </p>
          </div>
        </div>

        {/* Top Skills */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-accent-cyan" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                Top Skills
              </h3>
            </div>
            <p className="text-xs text-foreground-dim font-medium uppercase tracking-wider">
              Primary Expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {topSkills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] ${skill.borderColor} transition-all duration-300 shadow-lg shadow-transparent ${skill.glowColor} cursor-default overflow-hidden`}
              >
                {/* Background gradient blob */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${skill.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} border border-white/[0.08] flex items-center justify-center ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>

                {/* Text */}
                <div className="relative text-center">
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {skill.name}
                  </p>
                  <p className="text-[11px] sm:text-xs text-foreground-dim font-medium mt-1 uppercase tracking-wider">
                    {skill.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
