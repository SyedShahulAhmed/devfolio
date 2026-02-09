import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Feather, User, Mail, Target, MessageSquare } from "lucide-react";

const fields = [
  {
    label: "Traveler’s Name",
    placeholder: "Your full name",
    icon: User,
  },
  {
    label: "Way to Reach You",
    placeholder: "you@email.com",
    icon: Mail,
  },
  {
    label: "Purpose",
    placeholder: "Hiring, collaboration, or inquiry",
    icon: Target,
  },
];

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 9000);
  };

  return (
    <div className="relative md:col-span-2">
      <AnimatePresence mode="wait">
        {/* ================= FORM ================= */}
        {!sent && (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="
              relative
              border border-white/10
              bg-[#0b0b0b]/60
              backdrop-blur-md
              p-8 sm:p-10 lg:p-14
              overflow-hidden
            "
          >
            {/* Ink wash */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)] opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.04),transparent)] mix-blend-overlay" />

            <div className="relative space-y-10 lg:space-y-12">
              {/* Whisper */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.4, duration: 1.2 }}
                className="
                  text-center
                  text-[12px] sm:text-[15px] lg:text-[17px]
                  tracking-[0.14em]
                  text-[#8c8f88]
                "
              >
                A letter sent with the wind
              </motion.p>

              {/* Fields */}
              {fields.map(({ label, placeholder, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 1 }}
                >
                  {/* Label with Icon */}
                  <label
                    className="
                      flex items-center gap-2
                      mb-3
                      text-[11px] sm:text-[12px] lg:text-[13px]
                      tracking-widest
                      text-[#8c8f88]
                    "
                  >
                    <Icon className="w-3.5 h-3.5 text-[#7c2a2a]" />
                    {label}
                  </label>

                  <input
                    required
                    placeholder={placeholder}
                    className="
                      w-full
                      bg-transparent
                      border-b border-white/25
                      py-2
                      text-[14px] sm:text-[15px] lg:text-[16px]
                      text-white/90
                      placeholder:text-white/30
                      focus:outline-none
                      focus:border-[#8b1e1e]
                      transition
                    "
                  />
                </motion.div>
              ))}

              {/* Message */}
              <div>
                <label
                  className="
                    flex items-center gap-2
                    mb-3
                    text-[11px] sm:text-[12px] lg:text-[13px]
                    tracking-widest
                    text-[#8c8f88]
                  "
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#7c2a2a]" />
                  Words to the Wind
                </label>

                <textarea
                  rows="5"
                  required
                  placeholder="Write with honesty. The wind carries truth farther than force."
                  className="
                    w-full
                    bg-transparent
                    border border-white/25
                    p-4
                    text-[14px] sm:text-[15px] lg:text-[16px]
                    text-white/90
                    placeholder:text-white/30
                    focus:outline-none
                    focus:border-[#8b1e1e]
                    transition
                    resize-none
                  "
                />
              </div>

              {/* Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-3
                    px-10
                    py-4
                    border border-white/40
                    text-[11px] sm:text-[12px] lg:text-[13px]
                    tracking-[0.2em]
                    text-white/80
                    hover:border-[#8b1e1e]
                    transition
                  "
                >
                  <Feather size={16} className="text-[#7c2a2a]" />
                  Seal the Letter
                  <span className="absolute inset-0 border border-[#8b1e1e] opacity-0 group-hover:opacity-100 transition" />
                </button>
              </div>

              {/* Poem */}
              <p
                className="
                  pt-4
                  text-center
                  text-[10px] sm:text-[11px] lg:text-[12px]
                  tracking-[0.3em]
                  text-white/30
                "
              >
                静かな言葉は、最も遠くへ届く
                <br />
                <span className="leading-tight text-white/20">
                  Quiet words travel the farthest
                </span>
              </p>
            </div>
          </motion.form>
        )}

        {/* ================= SUCCESS ================= */}
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            transition={{
              duration: 12,
              times: [0, 0.15, 1],
              ease: "easeOut",
            }}
            className="
              relative
              flex flex-col
              items-center justify-center
              text-center
              min-h-130 sm:min-h-140
              px-6
            "
          >
            {/* Samurai Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
    relative
    mb-12
    flex items-center justify-center
    w-24 h-24 lg:w-28 lg:h-28
    rounded-full
    bg-linear-to-b
    from-[#8b1e1e]
    via-[#6f1818]
    to-[#4a0f0f]
    text-[#f1dede]
    font-serif
    text-4xl lg:text-5xl
    shadow-[0_0_90px_rgba(139,30,30,0.35)]
    select-none
  "
            >
              信
              <span className="absolute inset-0 rounded-full ring-1 ring-[#caa2a2]/30" />
              <span className="absolute inset-1 rounded-full ring-1 ring-black/20" />
            </motion.div>

            <p className="text-xs tracking-[0.45em] uppercase text-red-400/70 mb-4">
              Entrusted to the Wind
            </p>

            <p className="font-serif text-[17px] sm:text-[19px] lg:text-[21px] text-white/90 mb-5">
              Message dispatched — carried by the wind.
            </p>

            <p className="text-xs sm:text-sm tracking-wide text-[#a3a79f] max-w-lg leading-relaxed">
              Thank you for reaching out. It is received with care.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
