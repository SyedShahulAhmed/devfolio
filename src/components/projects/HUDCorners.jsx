const HUDCorners = ({ size = "sm", hover = false }) => {
  const cornerSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  const borderSize = "border-2";

  return (
    <>
      {[
        "top-2 left-2",
        "top-2 right-2",
        "bottom-2 left-2",
        "bottom-2 right-2",
      ].map((pos, i) => (
        <span
          key={i}
          className={`
            absolute ${pos}
            ${cornerSize} ${borderSize}
            ${i === 0 ? "border-r-0 border-b-0" : ""}
            ${i === 1 ? "border-l-0 border-b-0" : ""}
            ${i === 2 ? "border-r-0 border-t-0" : ""}
            ${i === 3 ? "border-l-0 border-t-0" : ""}
            ${hover ? "border-red-400/40" : "border-white/10"}
            transition-colors
          `}
        />
      ))}
    </>
  );
};

export default HUDCorners;
