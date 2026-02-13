// app/resume/page.jsx  OR  pages/resume.jsx
import Background from "../components/resume/Background";
import Header from "../components/resume/Header";
import Section from "../components/resume/Section";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Footer from "../components/resume/Footer";
import { FileText } from "lucide-react";
import { quote, summary } from "../constants/resume/data";

import Education from "../components/resume/Education";
import Certifications from "../components/resume/Certifications";

const Resume = () => {
  return (
    <>
      <Background />

      <main className="relative z-10 min-h-screen bg-[#02040B] px-6 py-20">
        <div className="relative font-body max-w-6xl mx-auto space-y-20 text-slate-200">
          <Header />

          {/* Quote */}
          <section className="border-l-4 border-orange-400 pl-6 max-w-3xl">
            <p className="italic text-orange-300 text-sm">“{quote.text}”</p>
            <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-slate-500">
              — {quote.author}
            </p>
          </section>
          {/* Summary */}
          <Section
            title="SUMMARY"
            icon={<FileText className="w-4 h-4 text-orange-400" />}
          >
            <div className="relative border border-orange-400/30 bg-black/60 p-7 text-sm text-slate-300 leading-relaxed overflow-hidden">
              {/* HUD corners */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />

              {/* ATMOSPHERIC OVERLAY (fog / isolation feel) */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/30" />

              {/* TEXT */}
              <p className="indent-10 tracking-[0.04em] text-slate-400">
                {summary}
              </p>
            </div>
          </Section>

          <Skills />
          <Projects />
          <Education />
          <Certifications />

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Resume;
