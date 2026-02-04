import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../constants/resume/data";
import Section from "./Section";

const Projects = () => (
  <Section
    title="PROJECT LOGS"
    icon={<FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />}
  >
    <div className="space-y-7 sm:space-y-10">
      {projects.map((p, idx) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.06 }}
          className="
            relative
            border border-orange-400/25
            bg-black/40
            p-5 sm:p-7
            overflow-hidden
          "
        >
          {/* HUD corners */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />

          {/* Scanlines */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_4px]] opacity-[0.03]" />

          {/* Meta row */}
          <div className="mb-3 flex items-center justify-between text-[10px] tracking-widest uppercase text-orange-400/80">
            <span>// LOG_{String(idx + 1).padStart(2, "0")}</span>
            <span className="text-slate-500">{p.year}</span>
          </div>

          {/* Title */}
          <h3 className="relative mb-3 text-base sm:text-lg font-semibold tracking-wide text-slate-100">
            {p.title}
            <span className="absolute -bottom-1 left-0 w-12 h-px bg-orange-400/60" />
          </h3>

          {/* Description */}
          <p className="mb-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
            <span className="text-orange-400">//</span> {p.description}
          </p>

          {/* Highlights */}
          <div className="mb-4">
            <p className="mb-2 text-[10px] uppercase tracking-widest text-orange-400">
              Functional Highlights
            </p>
            <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-orange-400">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-5 flex flex-wrap gap-2.5">
            {p.stack.map((t) => (
              <span
                key={t}
                className="
                  px-2.5 py-1
                  text-[10px] sm:text-[11px]
                  uppercase tracking-widest
                  border border-orange-400/40
                  text-orange-300
                  bg-black/40
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* RIGHT SIDE ACTION BOXES */}
          <div className="flex justify-end gap-3">
            {p.deployLink && (
              <motion.a
                href={p.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  flex items-center gap-1.5
                  px-3 py-2
                  border border-orange-400/40
                  bg-black/50
                  text-[10px] uppercase tracking-widest
                  text-orange-400
                  hover:text-orange-300
                  hover:bg-orange-400/10
                  hover:shadow-[0_0_16px_rgba(255,140,0,0.25)]
                  transition
                "
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </motion.a>
            )}

            {p.githubLink && (
              <motion.a
                href={p.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  flex items-center gap-1.5
                  px-3 py-2
                  border border-white/15
                  bg-black/40
                  text-[10px] uppercase tracking-widest
                  text-slate-300
                  hover:text-slate-100
                  hover:border-white/30
                  hover:shadow-[0_0_12px_rgba(255,255,255,0.15)]
                  transition
                "
              >
                <Github className="w-3 h-3" />
                Source
              </motion.a>
            )}
          </div>

          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_32px_rgba(255,140,0,0.1)]" />
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Projects;
