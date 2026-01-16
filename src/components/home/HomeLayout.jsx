import Background from "./Background";
import Rain from "./Rain";
import FloatingIcons from "./FloatingIcons";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#05090c] text-white font-hud overflow-hidden">
      <Background />
      <Rain />
      <FloatingIcons />
      {children}
    </div> 
  );
};

export default HomeLayout;
