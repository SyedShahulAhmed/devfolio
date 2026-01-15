import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BootLayout from "../components/boot/BootLayout";
import BootWindow from "../components/boot/BootWindow";
import BootHeader from "../components/boot/BootHeader";
import BootTerminal from "../components/boot/BootTerminal";
import BootProgress from "../components/boot/BootProgress";

const BOOT_LINES = [
  "INITIALIZING CORE SYSTEMS",
  "LOADING PORTFOLIO MODULES",
  "ESTABLISHING SECURE CHANNEL",
  "DECRYPTING USER PROFILE",
  "FINALIZING EXECUTION",
];

export const BootingPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => navigate("/home", { replace: true }), 900);
          return 100;
        }
        return p + 1;
      });
    }, 32);

    const textTimer = setInterval(() => {
      setLineIndex((i) => (i < BOOT_LINES.length - 1 ? i + 1 : i));
    }, 650);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [navigate]);

  return (
    <BootLayout>
      <BootWindow>
        <BootHeader />
        <BootTerminal lines={BOOT_LINES} currentIndex={lineIndex} />
        <BootProgress progress={progress} />
      </BootWindow>
    </BootLayout>
  );
};
