const Background = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Base dark */}
    <div className="absolute inset-0 bg-black" />

    {/* Bottom full-width floor glow */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        h-1/2
        bg-linear-to-t
        from-cyan-500/20
        via-cyan-500/10
        to-transparent
        blur-[120px]
      "
    />

    {/* Extra spread to push glow to extreme edges */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        h-1/3
        bg-linear-to-t
        from-cyan-400/15
        to-transparent
        blur-[200px]
      "
    />
  </div>
);

export default Background;
