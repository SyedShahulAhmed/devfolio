"use client";

import { useState } from "react";
import { Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import CertificateModal from "./CertificateModal";
import { certifications } from "../../constants/resume/data";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <Section
        title="CERTIFICATIONS"
        icon={<Award className="w-4 h-4 text-orange-400" />}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => (
            <motion.button
              key={idx}
              type="button"
              onClick={() => setActiveCert(cert)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="
                relative
                text-left
                border border-orange-400/25
                bg-black/45
                p-5
                overflow-hidden
                hover:border-orange-400/60
                transition
              "
            >
              {/* HUD corners */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-400" />

              {/* Scanlines */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_4px] opacity-[0.03]" />

              {/* Status label */}
              <p className="mb-2 text-[10px] uppercase tracking-widest text-orange-400/80">
                Verified Credential
              </p>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="mt-1 text-xs tracking-widest uppercase text-slate-400">
                {cert.issuer}
              </p>

              {/* Divider */}
              <div className="my-3 h-px w-16 bg-orange-400/40" />

              {/* Action */}
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-orange-400">
                View Certificate
                <ChevronRight size={14} />
              </div>

              {/* Inner glow */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_26px_rgba(255,140,0,0.1)]" />
            </motion.button>
          ))}
        </div>
      </Section>

      <CertificateModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </>
  );
};

export default Certifications;