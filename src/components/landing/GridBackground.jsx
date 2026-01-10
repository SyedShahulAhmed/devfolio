const GridBackground = () => (
  <div
    className="absolute inset-0 z-0 opacity-18"
    style={{
      backgroundImage: `
        linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "64px 64px",
    }}
  />
);

export default GridBackground;
