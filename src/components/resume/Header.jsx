import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { meta } from "../../constants/resume/data";
import Resume from "../../assets/resume/Syed_Shahul_Ahmed_Professional_Resume.pdf";
const Header = () => (
  <>
    {/* Terminal line */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        uppercase text-orange-400
        text-[10px] sm:text-[11px] md:text-[11px]
        tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.35em]
      "
    >
      {meta.systemLine}
      <motion.span
        className="ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        █
      </motion.span>
    </motion.p>

    {/* Hero */}
    <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      {/* Left content */}
      <div className="flex flex-col items-start">
        {/* Record type */}
        <p
          className="
            uppercase text-slate-400 leading-none
            text-[10px] sm:text-[11px] md:text-[11px]
            tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.35em]
          "
        >
          {meta.recordType}
        </p>

        {/* Name */}
        <h1
          className="
            mt-3 font-semibold leading-[1.1]
            text-3xl sm:text-4xl md:text-5xl
            tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.16em]
          "
        >
          {meta.name}
        </h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
          className="
            uppercase text-slate-400 leading-tight
            mt-2
            text-xs sm:text-sm md:text-sm
            tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.14em]
          "
        >
          {meta.role}
        </motion.p>
      </div>

<motion.a
  href={Resume}
  download
  whileHover="hover"
  className="
    relative inline-flex items-center gap-2
    overflow-hidden
    border border-orange-400/40
    bg-black/60
    px-4 py-2
    text-xs tracking-widest uppercase
    text-orange-400
    hover:text-orange-300
    transition
  "
>
  {/* Shine */}
  <motion.span
    className="absolute inset-0 bg-linear-to-r from-transparent via-orange-400/20 to-transparent"
    variants={{
      hover: { x: "120%" },
    }}
    initial={{ x: "-120%" }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  />

  <Download className="w-4 h-4 relative z-10" />
  <span className="relative z-10">{meta.downloadLabel}</span>
</motion.a>
    </section>
  </>
);

export default Header;