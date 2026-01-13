const BootLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B10] text-[#EAFBFF] font-mono flex items-center justify-center">
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* SCANLINES */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_2px,transparent_4px)]" />

      {children}
    </div>
  );
};

export default BootLayout;
