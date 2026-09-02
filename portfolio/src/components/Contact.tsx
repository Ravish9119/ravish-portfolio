"use client";

import React, { useState } from "react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Recruiter / Collaborator"}`
    );
    const body = encodeURIComponent(
      `Name / Organization: ${formData.name}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto">
            Open for full-time Data Analyst roles, internship opportunities, and collaborative BI projects.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs sm:text-sm text-accent-cyan font-medium mt-0.5">
                  Data Analyst &amp; Full Stack Developer · {personalInfo.university}
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-foreground-dim uppercase tracking-wider block">Email Address</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-medium text-slate-200 hover:text-accent-cyan transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-foreground-dim hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 flex items-center justify-center text-accent-emerald">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-foreground-dim uppercase tracking-wider block">Phone &amp; WhatsApp</span>
                      <a
                        href="tel:+919119984964"
                        className="font-medium text-slate-200 hover:text-accent-emerald transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919119984964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-accent-emerald hover:bg-white/[0.06] rounded-lg transition-colors"
                    title="Message on WhatsApp"
                    aria-label="Open WhatsApp Chat"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-foreground-dim uppercase tracking-wider block">Location</span>
                    <span className="font-medium text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-[11px] font-medium text-foreground-dim uppercase tracking-wider block mb-3">
                  Professional Networks
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://linkedin.com/in/ravishkushwaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-foreground-dim" />
                  </a>

                  <a
                    href="https://github.com/ravishkushwaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-white" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-foreground-dim" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] shadow-card">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted mb-6">
                Fill out the brief details below to launch your default mail client with a structured draft.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Name / Organization <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan / Tech Innovations Corp"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject / Role Opportunity <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Role Inquiry / Power BI Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message / Project Scope <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, timeline, or key analytical requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-cyan text-slate-950 font-semibold text-sm hover:bg-accent-cyan/90 transition-all duration-200 shadow-md shadow-accent-cyan/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email Draft</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
