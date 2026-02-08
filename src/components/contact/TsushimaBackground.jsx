const TsushimaBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* LOCAL ANIMATIONS — SINGLE FILE */}
      <style>{`
        // @keyframes fogDrift {
        //   0% { transform: translateX(0) translateY(0); }
        //   50% { transform: translateX(-4%) translateY(-1%); }
        //   100% { transform: translateX(0) translateY(0); }
        // }

        @keyframes moonFloat {
          0% { transform: translate(0, 0); }
          50% { transform: translate(6px, 4px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes grainFlicker {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.075; }
        }

        /* Hover glow ONLY for desktop / fine pointer */
        @media (hover: hover) and (pointer: fine) {
          .moon-group:hover .moon-glow {
            opacity: 1;
          }
          .moon-group:hover .moon-inner {
            opacity: 0.65;
          }
        }
      `}</style>

      {/* Base Night Indigo */}
      <div className="absolute inset-0 bg-[#080d12]" />

      {/* Cinematic Ink Wash */}
      <div className="absolute inset-0 bg-linear-to-b from-black/95 via-[#090f13]/70 to-black/90" />

      {/* ====================== MOON (DESKTOP GLOW ONLY) ====================== */}
      <div className="moon-group absolute -top-32 -left-32 w-80 h-80 pointer-events-auto">
        
        {/* Moon Core */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: "moonFloat 18s ease-in-out infinite",
            background: `
              radial-gradient(circle at 68% 68%,
                rgba(248,252,255,0.95) 0%,
                rgba(220,230,240,0.85) 24%,
                rgba(185,200,215,0.7) 40%,
                rgba(140,160,180,0.45) 55%,
                rgba(95,120,145,0.25) 63%,
                transparent 70%
              )
            `,
            boxShadow: `
              inset -28px -28px 58px rgba(0,0,0,0.5),
              0 0 42px rgba(215,235,255,0.35),
              0 0 120px rgba(175,200,225,0.15)
            `,
          }}
        />

        {/* Outer Glow (Hover Only on Desktop) */}
        <div
          className="moon-glow absolute inset-[-30%] rounded-full opacity-0 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(215,235,255,0.26), transparent 65%)",
            filter: "blur(32px)",
          }}
        />

        {/* Inner Bloom */}
        <div
          className="moon-inner absolute inset-[-12%] rounded-full opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
            filter: "blur(14px)",
          }}
        />
      </div>
      {/* ====================== MOON END ====================== */}

      {/* Moon Halo */}
      <div
        className="absolute inset-0"
        style={{
          animation: "moonFloat 22s ease-in-out infinite",
          background:
            "radial-gradient(circle at 16% 14%, rgba(210,230,245,0.16), transparent 55%)",
        }}
      />

      {/* Anamorphic Moon Rays */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          background:
            "linear-gradient(42deg, rgba(180,205,230,0.12) 0%, rgba(180,205,230,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Fog Layer 1 */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-[55%]"
        style={{
          animation: "fogDrift 40s ease-in-out infinite",
          background:
            "linear-gradient(to top, rgba(8,14,18,0.98), rgba(14,24,30,0.6), transparent)",
        }}
      /> */}

      {/* Fog Layer 2 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[42%] opacity-[0.5]"
        style={{
          animation: "fogDrift 55s ease-in-out infinite reverse",
          background:
            "linear-gradient(to top, rgba(10,18,24,0.85), transparent)",
        }}
      />

      {/* Rice Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-soft-light"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.02),
              rgba(255,255,255,0.02) 1px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.015),
              rgba(255,255,255,0.015) 1px,
              transparent 1px,
              transparent 6px
            )
          `,
        }}
      />

      {/* Ink Shadow Pools */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-multiply"
        style={{
          background: `
            radial-gradient(circle at 60% 70%, rgba(0,0,0,0.55), transparent 60%),
            radial-gradient(circle at 80% 88%, rgba(0,0,0,0.45), transparent 65%)
          `,
        }}
      />

      {/* Cold Film Grade */}
      <div className="absolute inset-0 bg-[#6b8ea8]/5.5 mix-blend-color" />

      {/* Film Grain */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          animation: "grainFlicker 6s steps(2) infinite",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_120px_-120px_360px_rgba(0,0,0,0.94)]" />

    </div>
  );
};

export default TsushimaBackground;
