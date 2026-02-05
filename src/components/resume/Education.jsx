// components/resume/Education.jsx
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { education } from "../../constants/resume/data";

const Education = () => {
  return (
    <Section
      title="EDUCATION"
      icon={<GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />}
    >
      <div className="space-y-7 sm:space-y-9">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="
            relative
            border border-orange-400/25
            bg-black/40
            p-5 sm:p-6
            overflow-hidden
          "
          >
            {/* HUD corners */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />

            {/* Scanlines */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_4px] opacity-[0.03]" />

            {/* Status */}
            <p className="mb-3 text-[10px] uppercase tracking-widest text-orange-400/80">
              {edu.status === "Pursuing" ? "Currently Pursuing" : "Completed"}
            </p>

            {/* Degree */}
            <h3 className="text-sm sm:text-base font-semibold tracking-wide text-slate-100">
              {edu.degree}
            </h3>

            {/* Institute */}
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              {edu.institute}
            </p>

            {/* Divider */}
            <div className="my-3 h-px w-16 bg-orange-400/40" />

            {/* Description */}
            {edu.description && (
              <p className="mb-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            )}

            {/* Meta info row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest">
              <div className="flex items-center gap-2 text-slate-500">
                <span className="text-orange-400">▸</span>
                <span>{edu.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-orange-400">
                <span className="text-orange-400">▸</span>
                <span>Grade: {edu.grade}</span>
              </div>
            </div>

            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_28px_rgba(255,140,0,0.1)]" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
