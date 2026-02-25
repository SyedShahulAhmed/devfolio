export default function CTAButton({ icon, text, primary }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        primary
          ? "border border-[#3B82F6]/40 text-[#3B82F6] hover:bg-[#3B82F6]/10"
          : "bg-[#1B2733] text-[#E5E5E5] hover:bg-[#243445]"
      }`}
    >
      {icon}
      {text}
    </a>
  );
}
