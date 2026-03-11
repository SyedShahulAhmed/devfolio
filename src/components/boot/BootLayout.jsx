const BootLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B10] text-[#EAFBFF] flex items-center justify-center ">

      {/* RADIAL GLOW CENTER */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.08) 0%, transparent 60%)",
        }}
      />

      {/* MAIN GRID */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* SMALL SUB GRID (depth layer) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* SCANLINES */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_2px,transparent_4px)]" />

      {children}

      {/* GRID ANIMATION */}
      <style>
        {`
        @keyframes gridMove {
          0% {
            transform: translate(0,0);
          }
          100% {
            transform: translate(64px,64px);
          }
        }
        `}
      </style>
    </div>
  );
};

export default BootLayout;