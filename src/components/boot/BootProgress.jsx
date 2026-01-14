const BootProgress = ({ progress }) => {
  return (
    <div className="mt-6">
      <div className="h-1.5 w-full overflow-hidden bg-cyan-400/15">
        <div
          className="h-full bg-linear-to-r from-cyan-400 to-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-1.5 flex justify-between text-[11px] tracking-[0.25em] text-[#7A9AA5]">
        <span>INITIALIZING</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default BootProgress;
