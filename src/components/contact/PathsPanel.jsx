import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

const paths = [
  {
    label: "GitHub",
    value: "@your-github",
    href: "https://github.com/your-github",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "/in/your-linkedin",
    href: "https://linkedin.com/in/your-linkedin",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    value: "@your-handle",
    href: "https://twitter.com/your-handle",
    icon: Twitter,
  },
  {
    label: "Website",
    value: "yourdomain.com",
    href: "https://yourdomain.com",
    icon: Globe,
  },
];

const PathsPanel = () => (
  <div className="relative z-10">
    <style>{`
      .paths-border {
        padding: 1px; /* border thickness */
        background: rgba(90, 100, 95, 0.45); /* dark cinematic */
      }
    `}</style>

    {/* ===== BORDER LAYER ===== */}
    <div className="paths-border">
      {/* ===== CONTENT LAYER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="
          relative
          bg-linear-to-b from-[#0e1210]/90 to-[#090b0a]/95
          px-6 pt-9 pb-7
          backdrop-blur-sm
        "
      >
        {/* Kanji Background */}
        <span
          className="
            absolute inset-0 flex items-center justify-center
            text-[120px] font-serif text-[#5f6f64]/5
            select-none
          "
        >
          志
        </span>

        {/* Title */}
        <p className="text-[11px] tracking-[0.45em] text-[#8c8f88] mb-6 uppercase relative z-10">
          PATHS YOU MAY FOLLOW
        </p>

        {/* Links */}
        <div className="space-y-3 relative z-10">
          {paths.map(({ label, value, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.25 }}
              className="
                group flex items-center gap-4
                px-4 py-2
                border-l border-[#5f6f64]/40
                hover:border-[#7c2a2a]
                transition
              "
            >
              {/* App Icon */}
              <Icon
                className="
                  w-4 h-4
                  text-[#8c8f88]
                  group-hover:text-[#7c2a2a]
                  transition-colors
                "
              />

              {/* Text */}
              <div>
                <p className="text-sm leading-none text-[#e5e7e3]">
                  {label}
                </p>
                <p className="text-xs mt-1 text-[#8c8f88]">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Ground Line */}
    <span
      className="
        absolute -bottom-8 left-1/2 -translate-x-1/2
        h-8 w-px
        bg-linear-to-b from-[#5f6f64]/40 to-transparent
      "
    />
  </div>
);

export default PathsPanel;
