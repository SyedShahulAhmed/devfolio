const HUDCorners = ({ size = "sm" }) => {
  const corner = size === "sm" ? "12px" : "20px";

  const rdrAccent = "#f59e0b"; // warm RDR2 orange

  return (
    <>
      <span
        style={{ width: corner, height: corner, borderColor: rdrAccent }}
        className="hud tl"
      />
      <span
        style={{ width: corner, height: corner, borderColor: rdrAccent }}
        className="hud tr"
      />
      <span
        style={{ width: corner, height: corner, borderColor: rdrAccent }}
        className="hud bl"
      />
      <span
        style={{ width: corner, height: corner, borderColor: rdrAccent }}
        className="hud br"
      />
    </>
  );
};

export default HUDCorners;