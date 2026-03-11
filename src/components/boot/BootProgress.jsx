import { useEffect, useState } from "react";

const BootProgress = ({ currentIndex, totalLines }) => {
  const [progress, setProgress] = useState(0);

  // total boot time based on number of lines
  const totalDuration = totalLines * 650;

  useEffect(() => {
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(value);
    }, 16); // ~60fps smooth

    return () => clearInterval(timer);
  }, [totalDuration]);

  return (
    <div className="mt-6">
      {/* Progress Bar */}
      <div className="h-1.5 w-full overflow-hidden bg-cyan-400/10 rounded-sm">
        <div
          className="
            h-full
            bg-gradient-to-r
            from-cyan-400
            to-cyan-300
            transition-[width]
            duration-75
            ease-linear
          "
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Labels */}
      <div className="mt-2 flex justify-between text-[11px] tracking-[0.25em] text-[#7A9AA5] font-terminal">
        <span>BOOTING SYSTEM</span>
        <span>{Math.floor(progress)}%</span>
      </div>
    </div>
  );
};

export default BootProgress;