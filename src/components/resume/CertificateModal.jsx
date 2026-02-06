"use client";

import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 z-9999 h-full w-full bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        className="
          fixed z-10000
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[94%] max-w-3xl
          bg-black/95
          border border-orange-400/40
          p-6 sm:p-7
          shadow-[0_0_80px_rgba(255,140,0,0.18)]
        "
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HUD Corners */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-400" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-400" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-400" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-400" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-400 hover:text-orange-300 transition"
        >
          <X size={18} />
        </button>

        {/* HEADER */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-orange-400">
            <ShieldCheck size={14} />
            Bridges — Verified Credential
          </div>

          <h3 className="mt-2 text-base sm:text-lg font-semibold text-slate-100 leading-snug">
            {cert.title}
          </h3>

          <p className="mt-1 text-xs tracking-widest uppercase text-slate-400">
            Issued by {cert.issuer}
          </p>

          <div className="mt-3 h-px w-24 bg-orange-400/40" />
        </div>

        {/* CERTIFICATE FRAME */}
        <div className="relative border border-orange-400/30 bg-black/60 p-3">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full object-contain"
          />

          {/* Subtle scanlines */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[100%_4px] opacity-[0.035]" />

          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(255,140,0,0.12)]" />
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-[10px] tracking-widest uppercase text-slate-500">
            Credential authenticity can be verified
          </p>

          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-xs tracking-widest uppercase
              text-orange-400
              hover:text-orange-300
              transition
            "
          >
            Verify Certificate
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateModal;