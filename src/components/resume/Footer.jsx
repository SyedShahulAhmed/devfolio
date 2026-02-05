const Footer = () => (
  <footer className="mt-20 border-t border-white/10 pt-6">
    <div
      className="
        flex items-center justify-between
        text-[10px] sm:text-[11px]
        tracking-[0.35em]
        uppercase
        text-slate-500
      "
    >
      {/* LEFT: RECORD STATUS */}
      <div className="flex items-center gap-2">
        <span>Record Status:</span>

        {/* Pulsing dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>

        <span className="text-green-400">Verified</span>
      </div>

      {/* CENTER: LAST SYNC */}
      <div className="hidden sm:block text-slate-600">
        Last Sync: <span className="text-slate-400">2026</span>
      </div>

      {/* RIGHT: CLEARANCE LEVEL */}
      <div className="flex items-center gap-2">
        <span>Clearance Level:</span>
        <span className="text-orange-400">Porter</span>
      </div>
    </div>
  </footer>
);

export default Footer;