"use client";

import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#06080f]/90 backdrop-blur-md border-b border-white/[0.08] shadow-subtle py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-md"
        >
          <span className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-accent-cyan transition-colors">
            {personalInfo.name}
          </span>
          <span className="text-[11px] font-medium text-foreground-dim tracking-wide uppercase">
            Data Analyst &amp; Full Stack Developer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-200",
                  isActive
                    ? "text-accent-cyan bg-accent-cyan/10 font-semibold"
                    : "text-foreground-muted hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.05] hover:bg-accent-cyan/15 text-white hover:text-accent-cyan border border-white/10 hover:border-accent-cyan/30 transition-all duration-200 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Me</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground-muted hover:text-white hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06080f]/98 border-b border-white/[0.08] backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 transition-all">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "text-accent-cyan bg-accent-cyan/10 font-semibold"
                    : "text-foreground-muted hover:text-white hover:bg-white/[0.04]"
                )}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-white/[0.06] mt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold rounded-lg bg-accent-cyan text-slate-950 hover:bg-accent-cyan/90 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Ravish Kushwaha</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
