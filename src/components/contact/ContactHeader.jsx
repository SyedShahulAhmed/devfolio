import { motion } from "framer-motion";

const ContactHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="text-center mb-16 sm:mb-20"
  >
    {/* Japanese Whisper */}
    <motion.p
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="
    group relative inline-flex
    items-center justify-center
    text-xs text-red-500 mb-5
    px-4 py-2
    border border-white/10
    bg-transparent
    before:absolute before:inset-0
    before:border before:border-white/5
    before:opacity-60
    before:pointer-events-none
  "
    >
      {/* Text wrapper for optical centering */}
      <span
        className="
      tracking-[0.45em]
      translate-x-[0.12em]
      block
    "
      >
        静かな伝言
      </span>

      {/* Translation – hover only */}
      <span
        className="
      pointer-events-none
      absolute top-full -right-30
      mt-2
      text-[10px]
      tracking-[0.25em]
      text-white/50
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
      >
        SILENT MESSAGE
      </span>
    </motion.p>

    {/* Main Poetic Title */}
    <motion.h1
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        text-4xl sm:text-5xl md:text-6xl
        font-serif
        tracking-[0.06em]
        leading-[1.1]
        mb-4
        bg-linear-to-r
        from-[#f7f9f4] via-[#f7f9f4] to-[#0b0f12]
        bg-clip-text text-transparent

        drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]
      "
    >
      Whispers of the Wind
    </motion.h1>

    {/* Contact Divider */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
      className="relative flex items-center justify-center gap-8 mb-6 select-none"
    >
      {/* Left Katana Line */}
      <span className="h-px w-24 bg-linear-to-r from-transparent via-[#8c8f88]/70 to-[#8c8f88]/30" />

      {/* CONTACT */}
      <span
        className="
          relative px-2
          text-sm sm:text-base
          font-serif uppercase
          tracking-[0.7em]
          text-[#8c8f88]
          after:content-['']
          after:absolute
          after:inset-0
          after:bg-white/10
          after:blur-2xl
          after:opacity-20
          after:-z-10
        "
      >
        CONTACT
      </span>

      {/* Right Katana Line */}
      <span className="h-px w-24 bg-linear-to-l from-transparent via-[#8c8f88]/70 to-[#8c8f88]/30" />
    </motion.div>

    {/* Message */}
    <motion.p
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, delay: 0.9, ease: "easeOut" }}
      className="
        max-w-xl mx-auto
        text-sm leading-loose
        text-[#a3a79f]
        tracking-wide
        text-center
      "
    >
      Opportunities, collaborations, or meaningful work.
      <br />
      <span className="block mt-2 italic tracking-[0.18em] opacity-90">
        <span className="text-red-500">“</span>
        <span className="text-[#7d837a]">
          The wind carries every honest word
        </span>
        <span className="text-red-500">”</span>
      </span>
    </motion.p>

    {/* Wind Line with Center Dot */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="
    relative
    mt-8 mx-auto
    w-28 h-px
    bg-linear-to-r
    from-transparent
    via-[#5f6f64]
    to-transparent
    origin-center
  "
    >
      {/* Center Dot – Still Point */}
      <span
        className="
      absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-1.5 h-1.5
      rounded-full
      bg-[#5f6f64]
    "
      />
    </motion.div>
  </motion.div>
);

export default ContactHeader;
