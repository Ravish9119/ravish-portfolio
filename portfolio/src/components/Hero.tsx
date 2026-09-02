"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { ArrowRight, Mail, FileText, Sparkles, CheckCircle2 } from "lucide-react";

const roles = [
  "Data Analyst",
  "Full Stack Web Developer",
];

function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 1500) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full overflow-hidden bg-slate-900 ring-4 ring-white/[0.08] ring-offset-4 ring-offset-[#06080f]">
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - Data Analyst & Full Stack Developer`}
                fill
                sizes="(max-width: 768px) 200px, 240px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{personalInfo.eyebrow}</span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple hover:opacity-95 transition-opacity">
                {personalInfo.name}
              </span>
            </h1>
            <div className="flex items-center justify-center">
              <p className="group inline-flex items-center gap-1.5 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight px-4 py-1.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-accent-cyan/30 transition-all duration-300 cursor-pointer shadow-none hover:shadow-[0_0_25px_rgba(0,212,255,0.2)]">
                <span className="text-accent-cyan font-mono group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:via-[#2cffe0] group-hover:to-accent-purple transition-all duration-300">
                  {typedRole || "Data Analyst & Full Stack Web Developer"}
                </span>
                <span className="w-0.5 h-6 bg-accent-cyan animate-pulse" />
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-2xl font-normal">
            {personalInfo.shortBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-cyan text-slate-950 font-semibold text-sm hover:bg-accent-cyan/90 transition-all duration-200 shadow-md shadow-accent-cyan/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-accent-cyan" />
              <span>Contact Me</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: "smooth" });
                }
                window.location.href = `mailto:${personalInfo.email}?subject=Resume Request - Ravish Kushwaha&body=Hi Ravish, I would like to request your latest resume for a Data Analyst role.`;
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-foreground-muted hover:text-white font-medium text-xs sm:text-sm hover:bg-white/[0.04] transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-foreground-dim" />
              <span>Request Resume</span>
            </a>
          </div>

          {/* Trust check */}
          <div className="pt-2 flex items-center justify-center gap-4 text-xs text-foreground-dim">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
              Available for Full-time Roles
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
              Full Stack & Data Specialist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
