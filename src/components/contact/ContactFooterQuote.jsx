import { motion } from "framer-motion";

const ContactFooterQuote = () => (
  <motion.p
    initial={{ opacity: 0, y: 4 }}
    animate={{ opacity: 0.6, y: 0 }}
    transition={{ duration: 1.8, ease: "easeOut" }}
    className="
      mt-32 sm:mt-44
      px-6
      text-center
      text-[13px] sm:text-[14px]
      text-[#a3a79f]
      italic
      tracking-[0.28em]
      leading-relaxed
      select-none
    "
    style={{
      textShadow: "0 0 6px rgba(160,165,155,0.08)",
    }}
  >
    Honor dwells in silence
  </motion.p>
);

export default ContactFooterQuote;
