const HUDCorners = ({ size = "sm" }) => {
  const corner = size === "sm" ? "12px" : "20px";

  return (
    <>
      <span style={{ width: corner, height: corner }} className="hud tl" />
      <span style={{ width: corner, height: corner }} className="hud tr" />
      <span style={{ width: corner, height: corner }} className="hud bl" />
      <span style={{ width: corner, height: corner }} className="hud br" />
    </>
  );
};

export default HUDCorners;
