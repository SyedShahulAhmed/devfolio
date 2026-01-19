const Footer = () => (
  <footer className="mt-28 flex justify-center">
    <div
      className="flex items-center gap-6 text-[11px] tracking-widest"
      style={{
        color: "#7fa6b3",
        opacity: 0.9,
      }}
    >
      {/* Version */}
      <span className="flex items-center gap-2">
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            border: "1px solid rgba(34,211,238,0.6)",
          }}
        />
        v2.0.26
      </span>

      {/* Divider */}
      <span style={{ color: "rgba(34,211,238,0.4)" }}>|</span>

      {/* Stack */}
      <span>React + TypeScript</span>

      {/* Divider */}
      <span style={{ color: "rgba(34,211,238,0.4)" }}>|</span>

      {/* Status */}
      <span
        className="flex items-center gap-2"
        style={{
          color: "#34d399",
          textShadow:
            "0 0 6px rgba(16,185,129,0.6), 0 0 16px rgba(16,185,129,0.35)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#34d399",
            boxShadow:
              "0 0 6px rgba(16,185,129,0.8), 0 0 14px rgba(16,185,129,0.5)",
          }}
        />
        System Online
      </span>
    </div>
  </footer>
);

export default Footer;
