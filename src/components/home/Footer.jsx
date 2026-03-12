const Footer = () => {
  return (
    <footer className="mt-22 flex justify-center">
      <div
        className="flex items-center gap-6 px-6 py-3 text-[11px] tracking-[0.25em] rounded-xl"
        style={{
          color: "#7fa6b3",
          opacity: 0.9,
          background: "rgba(8,15,20,0.55)",
          border: "1px solid rgba(34,211,238,0.18)",
          backdropFilter: "blur(6px)",
          boxShadow:
            "0 0 20px rgba(34,211,238,0.06), inset 0 0 12px rgba(34,211,238,0.05)",
        }}
      >
        {/* VERSION */}
        <span className="flex items-center gap-2">
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              border: "1px solid rgba(34,211,238,0.7)",
              boxShadow: "0 0 6px rgba(34,211,238,0.6)",
            }}
          />
          v2.0.26
        </span>

        {/* DIVIDER */}
        <span
          style={{
            color: "rgba(34,211,238,0.35)",
            textShadow: "0 0 6px rgba(34,211,238,0.4)",
          }}
        >
          //
        </span>

        {/* STACK */}
        <span
          style={{
            letterSpacing: "0.2em",
            textShadow: "0 0 6px rgba(34,211,238,0.25)",
          }}
        >
          React • JavaScript
        </span>

        {/* DIVIDER */}
        <span
          style={{
            color: "rgba(34,211,238,0.35)",
            textShadow: "0 0 6px rgba(34,211,238,0.4)",
          }}
        >
          //
        </span>

        {/* STATUS */}
        <span
          className="flex items-center gap-2"
          style={{
            color: "#34d399",
            textShadow:
              "0 0 6px rgba(16,185,129,0.7), 0 0 18px rgba(16,185,129,0.35)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#34d399",
              boxShadow:
                "0 0 8px rgba(16,185,129,0.9), 0 0 18px rgba(16,185,129,0.6)",
              animation: "pulse 2s infinite",
            }}
          />
          SYSTEM ONLINE
        </span>

        {/* SCANLINE EFFECT */}
        <style>
          {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.6); opacity: 0.6; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
        </style>
      </div>
    </footer>
  );
};

export default Footer;