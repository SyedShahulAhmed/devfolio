import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "../../constants/resume/data";
import Section from "./Section";

const Skills = () => (
  <Section
    title="CORE SKILLS"
    icon={<Code className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />}
  >
    <div className="space-y-6 sm:space-y-8">
      {Object.entries(skills).map(([cat, list], idx) => (
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="relative border border-orange-400/20 p-4 sm:p-5 bg-black/30"
        >
          {/* HUD corners */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />

          {/* Category label */}
          <p
            className="
              mb-3
              text-[10px] sm:text-[11px]
              tracking-[0.35em]
              uppercase
              text-orange-300
            "
          >
            {cat}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {list.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  px-3 py-1.5
                  text-[10px] sm:text-[11px]
                  uppercase
                  tracking-wide
                  border
                  border-white/10
                  text-slate-300
                  bg-black/40
                  hover:border-orange-400/60
                  hover:text-orange-300
                "
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_24px_rgba(255,140,0,0.08)]" />
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Skills;