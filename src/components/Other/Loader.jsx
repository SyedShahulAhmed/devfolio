import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const quoteThemes = {
  home: [
    "Booting developer console...",
    "Initializing creativity engine...",
    "Deploying innovation...",
    "Building something legendary..."
  ],

  projects: [
    "Compiling side quests...",
    "Constructing digital worlds...",
    "Forging new projects...",
    "Turning ideas into reality..."
  ],

  skills: [
    "Grinding experience points...",
    "Sharpening problem-solving...",
    "Leveling up developer skills...",
    "Mastering new technologies..."
  ],

  blogs: [
    "Loading knowledge modules...",
    "Preparing developer insights...",
    "Documenting the journey...",
    "Sharing developer wisdom..."
  ],

  contact: [
    "Opening communication channels...",
    "Connecting networks...",
    "Preparing transmission...",
    "Awaiting incoming signal..."
  ],

  resume: [
    "Scanning achievements...",
    "Loading career timeline...",
    "Preparing professional records..."
  ],

  achievements: [
    "Displaying trophies...",
    "Calculating milestones...",
    "Unlocking achievements..."
  ],

  default: [
    "Initializing developer mindset...",
    "Debugging reality...",
    "Refactoring the universe...",
    "Optimizing performance..."
  ]
};

export default function Loader({ onFinish }) {
  const location = useLocation();
  const [quote, setQuote] = useState("");

  // Detect theme from path
  const getTheme = () => {
    const path = location.pathname.replace("/", "");

    return quoteThemes[path] || quoteThemes.default;
  };

  useEffect(() => {
    const currentQuotes = getTheme();

    setQuote(currentQuotes[Math.floor(Math.random() * currentQuotes.length)]);

    const quoteInterval = setInterval(() => {
      setQuote(
        currentQuotes[Math.floor(Math.random() * currentQuotes.length)]
      );
    }, 3500);

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 8000);

    return () => {
      clearInterval(quoteInterval);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden font-hud">

      {/* Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 blur-[180px] rounded-full"></div>

      {/* Scan Line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line"></div>
      </div>

      {/* Loader Core */}
      <div className="relative flex items-center justify-center mb-16">

        <div className="absolute w-36 h-36 border border-white/20 rounded-full pulse-ring"></div>
        <div className="absolute w-28 h-28 border-2 border-white border-t-transparent rounded-full spin-ring"></div>

        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)]"></div>
      </div>

      <h1 className="text-lg tracking-[0.5em] text-white mb-4">
        INITIALIZING
      </h1>

      <p className="text-sm text-gray-300 text-center max-w-md px-6 transition-all duration-500">
        {quote}
      </p>

      <p className="absolute bottom-10 text-xs tracking-widest text-gray-500">
        SYSTEM ONLINE
      </p>

      <style>
        {`
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0.2 }
          50% { opacity: 0.8 }
          100% { transform: translateY(100vh); opacity: 0.2 }
        }

        .scan-line {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.2);
          animation: scan 5s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spin-ring {
          animation: spin 3s linear infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.3 }
          50% { transform: scale(1); opacity: 1 }
          100% { transform: scale(0.9); opacity: 0.3 }
        }

        .pulse-ring {
          animation: pulse 3s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
}