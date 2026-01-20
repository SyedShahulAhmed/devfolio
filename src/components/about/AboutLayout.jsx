import RDR2Background from "./RDR2Background";

const AboutLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden px-4 py-16 about-rdr">
      {/* styles kept inline exactly */}
      <style>{`
        .gaming-card {
          position: relative;
          background: rgba(10,10,10,0.85);
          border: 1px solid rgba(255,170,70,0.25);
          border-radius: 12px;
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
        }
        .grain::before {
          content:'';
          position:absolute;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E");
          pointer-events:none;
          z-index:1;
        }
        .vignette::after {
          content:'';
          position:absolute;
          inset:0;
          background:radial-gradient(circle, transparent 40%, rgba(0,0,0,0.85) 85%);
          pointer-events:none;
          z-index:1;
        }
        .hud { position:absolute; border-color: rgba(255,170,70,0.5); }
        .hud.tl { top:0; left:0; border-top:1px solid; border-left:1px solid; }
        .hud.tr { top:0; right:0; border-top:1px solid; border-right:1px solid; }
        .hud.bl { bottom:0; left:0; border-bottom:1px solid; border-left:1px solid; }
        .hud.br { bottom:0; right:0; border-bottom:1px solid; border-right:1px solid; }
        .accent { color:#ffae46; }
      `}</style>

      <RDR2Background />

      <div className="absolute inset-0 grain vignette z-1" />

      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </main>
  );
};

export default AboutLayout;
