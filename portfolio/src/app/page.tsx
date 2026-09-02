import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DataWorkflow from "@/components/DataWorkflow";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MetricsStrip />
        <About />
        <Skills />
        <Projects />
        <DataWorkflow />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
